import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Booking extends Model {
  public id!: string;
  public seatId!: string;
  public passengerName!: string;
  public passengerEmail!: string;
  public bookedAt!: Date;
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
