import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database";

export class User extends Model {
  declare id?: string;
  declare email: string;
  declare passwordHash: string;
  declare role: string;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  },
);
