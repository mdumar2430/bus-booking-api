import { DatabaseInitializer } from "./database-setup";

export async function startup() {
  try {
    await DatabaseInitializer.initialize();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
