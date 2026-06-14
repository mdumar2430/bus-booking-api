import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Booking extends Model {
  declare id: string;
  declare seatId: string;
  declare passengerName: string;
  declare passengerEmail: string;
  declare bookedAt: Date;
}

Booking.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    seatId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    passengerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    passengerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "bookings",
    timestamps: true,
  },
);
