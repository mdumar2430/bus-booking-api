import { Router } from "express";
import { SeatController } from "../controllers/seat.controller";
import { validate } from "../../middlewares/validation.middleware";
import {
  getSeatSchema,
  getSeatsByStatusSchema,
} from "../validators/seat.validator";

const router = Router();

const controller = new SeatController();

router.get("/", controller.getAllSeats);

router.get("/:seatNumber", validate(getSeatSchema), controller.getSeatByNumber);

router.get(
  "/status/:status",
  validate(getSeatsByStatusSchema),
  controller.getSeatsByStatus,
);

export default router;
