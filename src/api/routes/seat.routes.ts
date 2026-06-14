import { Router } from "express";
import { SeatController } from "../controllers/seat.controller";
import { validate } from "../../middlewares/validation.middleware";
import {
  bookSeatSchema,
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

router.post(
  "/seat/:seatNumber/book",
  validate(bookSeatSchema),
  controller.bookSeat,
);

router.post(
  "/seat/:seatNumber/release",
  validate(getSeatSchema),
  controller.releaseSeat,
);

router.get(
  "/seat/:seatNumber/owner",
  validate(getSeatSchema),
  controller.getOwnerBySeatNumber,
);

export default router;
