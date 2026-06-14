import { SeatService } from "../services/seat.service";

export class SeatController {
  constructor(private readonly seatService = new SeatService()) {}

  getAllSeats = async (req: any, res: any) => {
    try {
      const seats = await this.seatService.getAllSeats();
      res.json(seats);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getSeatByNumber = async (req: any, res: any) => {
    const seatNumber = parseInt(req.params.seatNumber, 10);
    try {
      const seat = await this.seatService.getSeatByNumber(seatNumber);
      res.json(seat);
    } catch (error) {
      res.status(404).json({ error: "Seat not found" });
    }
  };

  getSeatsByStatus = async (req: any, res: any) => {
    try {
      const status = req.params.status;
      const seats = await this.seatService.getSeatsByStatus(status);
      res.json(seats);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  bookSeat = async (req: any, res: any) => {
    const seatNumber = parseInt(req.params.seatNumber, 10);
    const { passengerName, passengerEmail } = req.body;
    try {
      const result = await this.seatService.bookSeat(
        seatNumber,
        passengerName,
        passengerEmail,
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  releaseSeat = async (req: any, res: any) => {
    const seatNumber = parseInt(req.params.seatNumber, 10);
    try {
      const result = this.seatService.releaseSeat(seatNumber);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getOwnerBySeatNumber = async (req: any, res: any) => {
    const seatNumber = parseInt(req.params.seatNumber, 10);
    try {
      const result = this.seatService.getOwnerBySeatNumber(seatNumber);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
