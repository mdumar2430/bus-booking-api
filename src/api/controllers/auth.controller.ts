import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { env } from "../../config/env";

export class AuthController {
  login = async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      const passwordMatches = await bcrypt.compare(password, user.passwordHash);

      if (!passwordMatches) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          role: user.role,
        },
        env.JWT_SECRET,
        {
          expiresIn: "1d",
        },
      );

      return res.json({
        success: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
}
