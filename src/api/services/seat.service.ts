import { sequelize } from "../../config/database";
import { BookingRepository } from "../repositories/booking.repository";
import { SeatRepository } from "../repositories/seat.repository";

export class SeatService {
  constructor(
    private readonly seatRepository = new SeatRepository(),
    private readonly bookingRepository = new BookingRepository(),
  ) {}
  async getAllSeats() {
    return this.seatRepository.findAll();
  }

  async getSeatByNumber(seatNumber: number) {
    const seat = await this.seatRepository.findBySeatNumber(seatNumber);

    if (!seat) {
      throw new Error("Seat not found");
    }

    return seat;
  }

  async getSeatsByStatus(status: string) {
    const seatStatus = status.toUpperCase();
    return await this.seatRepository.findByStatus(seatStatus);
  }

  async bookSeat(
    seatNumber: number,
    passengerName: string,
    passengerEmail: string,
  ) {
    const transaction = await sequelize.transaction();

    try {
      const seat = await this.seatRepository.findBySeatNumber(
        seatNumber,
        transaction,
      );

      if (!seat) {
        throw new Error("Seat not found");
      }

      if (seat.status === "CLOSED") {
        throw new Error("Seat already booked");
      }

      const booking = await this.bookingRepository.create(
        {
          seatId: seat.id!,
          passengerName,
          passengerEmail,
        },
        transaction,
      );

      await this.seatRepository.updateStatus(seat.id, "CLOSED", transaction);

      await transaction.commit();

      return {
        message: "Seat booked successfully",
        bookingId: booking.id!,
      };
    } catch (error) {
      await transaction.rollback();

      throw error;
    }
  }

  async releaseSeat(seatNumber: number) {
    const transaction = await sequelize.transaction();
    try {
      const seat = await this.seatRepository.findBySeatNumber(
        seatNumber,
        transaction,
      );
      if (!seat) {
        throw new Error("Seat not found");
      }
      if (seat.status == "OPEN") {
        throw new Error("Seat already open");
      }

      await this.seatRepository.updateStatus(seat.id, "OPEN", transaction);
      await this.bookingRepository.deleteBySeatId(seat.id, transaction);

      await transaction.commit();

      return {
        message: "Seat released successfully",
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
