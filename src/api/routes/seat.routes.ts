import { Router } from "express";
import { SeatController } from "../controllers/seat.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/authorize.middleware";
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
  authenticateToken,
  validate(bookSeatSchema),
  controller.bookSeat,
);

router.post(
  "/seat/:seatNumber/release",
  authenticateToken,
  validate(getSeatSchema),
  controller.releaseSeat,
);

router.get(
  "/seat/:seatNumber/owner",
  validate(getSeatSchema),
  controller.getOwnerBySeatNumber,
);

export default router;
