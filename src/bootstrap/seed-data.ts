import { seedSeats } from "./seed-seats";
import { seedAdmin } from "./seed-users";

export async function seedData() {
  await seedSeats();
  await seedAdmin();
}
