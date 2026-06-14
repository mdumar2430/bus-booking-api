import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Booking extends Model {}

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

    passengerPhone: {
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
