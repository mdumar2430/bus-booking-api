import { sequelize } from "../config/database";

export async function startup() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}
