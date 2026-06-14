import { Transaction } from "sequelize";
import { Booking } from "../models/booking.model";

export class BookingRepository {
  async create(payload: Partial<Booking>, transaction?: Transaction) {
    return await Booking.create(payload, { transaction });
  }

  async deleteBySeatId(seatId: string, transaction?: Transaction) {
    return Booking.destroy({
      where: { seatId },
      transaction,
    });
  }

  async getPassengerDetailsBySeatId(seatId: string) {
    return Booking.findOne({
      attributes: ["passengerName", "passengerEmail", "bookedAt"],
      where: {
        seatId,
      },
    });
  }

  async deleteAll(transaction?: Transaction) {
    return Booking.destroy({
      where: {},
      transaction,
    });
  }
}
