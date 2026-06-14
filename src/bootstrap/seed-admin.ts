import bcrypt from "bcrypt";
import { User } from "../models/user";
import { env } from "../config/env";

export async function seedAdmin() {
  const admin = await User.findOne({
    where: {
      email: "admin@test.com",
    },
  });

  if (admin) {
    return;
  }

  const hash = await bcrypt.hash(env.ADMIN_PASSWORD, 10);

  await User.create({
    email: "admin@test.com",
    passwordHash: hash,
    role: "ADMIN",
  });

  console.log("Admin user seeded");
}
