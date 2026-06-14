import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database";

export class Seat extends Model {}

Seat.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    seatNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("OPEN", "CLOSED"),
      defaultValue: "OPEN",
    },
  },
  {
    sequelize,
    tableName: "seats",
  },
);
