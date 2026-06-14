import { Router } from "express";

import seatRoutes from "./seat.routes";

const router = Router();

router.use("/seats", seatRoutes);

export default router;
