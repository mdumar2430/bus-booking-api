import { Router } from "express";

import adminRoutes from "./admin.routes";
import authRoutes from "./auth.routes";
import seatRoutes from "./seat.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/auth", authRoutes);
router.use("/seats", seatRoutes);

export default router;
