import { SeatService } from "../services/seat.service";

export class AdminController {
  constructor(private readonly seatService = new SeatService()) {}

  resetAllSeats = async (req: any, res: any) => {
    try {
      const result = await this.seatService.resetAllSeats();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}