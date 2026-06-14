import {
  DataTypes,
  Model,
} from "sequelize";
import { sequelize } from "../config/database";

export class Seat extends Model {}

Seat.init(
  {
    seatNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "OPEN",
        "CLOSED"
      ),
      defaultValue: "OPEN",
    },
  },
  {
    sequelize,
    tableName: "seats",
  }
);