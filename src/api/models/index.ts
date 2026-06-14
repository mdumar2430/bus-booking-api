import { Booking } from "./booking.model";
import { Seat } from "./seat.model";

export function setupAssociations() {
  Seat.hasOne(Booking, {
    foreignKey: "seatId",
    as: "booking",
  });

  Booking.belongsTo(Seat, {
    foreignKey: "seatId",
    as: "seat",
  });
}
