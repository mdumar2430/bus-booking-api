import { seedSeats } from "./seed-seats";
import { seedAdmin } from "./seed-admin";

export async function seedData() {
  await seedSeats();
  await seedAdmin();
}
