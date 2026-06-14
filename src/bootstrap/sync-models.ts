import { sequelize } from "../config/database";

export async function syncModels() {
  await sequelize.sync();
}