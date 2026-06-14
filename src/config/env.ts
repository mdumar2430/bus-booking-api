import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,

  DB_HOST: process.env.DB_HOST!,
  DB_PORT: Number(process.env.DB_PORT),

  DB_NAME: process.env.DB_NAME!,
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,

  JWT_SECRET: process.env.JWT_SECRET!,

  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "password123",
  USER_PASSWORD: process.env.USER_PASSWORD || "password",
};