import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/authorize.middleware";

const router = Router();
const controller = new AdminController();

router.post(
  "/seats/reset",
  authenticateToken,
  authorizeRoles("ADMIN"),
  controller.resetAllSeats,
);

export default router;