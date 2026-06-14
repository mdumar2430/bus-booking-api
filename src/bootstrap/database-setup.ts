import { sequelize } from "../config/database";
import { env } from "../config/env";
import { Client } from "pg";
import { seedUsers } from "./seed-users";
import { seedSeats } from "./seed-seats";
import { setupAssociations } from "../api/models";
export async function ensureDatabaseExists() {
  const client = new Client({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: "postgres",
  });

  await client.connect();

  try {
    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [env.DB_NAME],
    );
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE ${env.DB_NAME}`);
      console.log(`Database ${env.DB_NAME} created successfully.`);
    } else {
      console.log(`Database ${env.DB_NAME} already exists.`);
    }
  } finally {
    await client.end();
  }
}

export class DatabaseInitializer {
  static async initialize() {
    await ensureDatabaseExists();
    await sequelize.authenticate();
    await setupAssociations();
    await sequelize.sync({ alter: true });
    console.log(`Tables synced.`);
    await seedUsers();
    await seedSeats();
  }
}
