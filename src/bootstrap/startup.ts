import { sequelize } from "../config/database";
import { ensureDatabaseExists } from "./database-setup";
import { seedData } from "./seed-data";
import { syncModels } from "./sync-models";

export async function startup() {
  try {
    await ensureDatabaseExists();
    await sequelize.authenticate();
    console.log("Database connection established");
    await syncModels();
    await seedData();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}
