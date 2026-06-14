import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validate } from "../../middlewares/validation.middleware";
import { loginSchema } from "../validators/auth.validator";

const router = Router();
const controller = new AuthController();

router.post("/login", validate(loginSchema), controller.login);

export default router;