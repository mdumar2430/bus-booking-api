import { Seat } from "../models/seat.model";

export class SeatRepository {
  async findAll() {
    return Seat.findAll();
  }

  async findBySeatNumber(seatNumber: number) {
    return Seat.findOne({
      where: { seatNumber },
    });
  }

  async findByStatus(status: string) {
    return Seat.findAll({
      where: { status },
    });
  }
}
