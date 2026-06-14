import Transaction from "sequelize/lib/transaction";
import { Seat } from "../models/seat.model";

export class SeatRepository {
  async findAll() {
    return Seat.findAll();
  }

  async findBySeatNumber(seatNumber: number, transaction?: Transaction) {
    return Seat.findOne({
      where: { seatNumber },
      transaction,
    });
  }

  async findByStatus(status: string) {
    return Seat.findAll({
      where: { status },
    });
  }

  async updateStatus(
    seatId: string,
    status: "OPEN" | "CLOSED",
    transaction?: Transaction,
  ) {
    return Seat.update(
      { status },
      {
        where: { id: seatId },
        transaction,
      },
    );
  }

  async resetAllSeats(transaction?: Transaction) {
    return Seat.update(
      { status: "OPEN" },
      {
        where: {},
        transaction,
      },
    );
  }
}
