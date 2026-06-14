import { Seat } from "../api/models/seat.model";

export async function seedSeats() {
  const count = await Seat.count();

  if (count > 0) {
    return;
  }

  const seats = [];

  for (let i = 1; i <= 40; i++) {
    seats.push({
      seatNumber: i,
      status: "OPEN",
    });
  }

  await Seat.bulkCreate(seats);

  console.log("40 seats seeded successfully");
}
