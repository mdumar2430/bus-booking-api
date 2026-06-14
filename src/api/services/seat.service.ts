import { SeatRepository } from "../repositories/seat.repository";

export class SeatService {
  constructor(private readonly seatRepository = new SeatRepository()) {}
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

  getSeatsByStatus(status: string) {
    const seatStatus = status.toUpperCase();
    return this.seatRepository.findByStatus(seatStatus);
  }
}
