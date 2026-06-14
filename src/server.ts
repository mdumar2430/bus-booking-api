import app from "./app";
import { startup } from "./bootstrap/startup";
import { env } from "./config/env";

async function start() {
  await startup();

  app.listen(env.PORT, () => {
    console.log(
      `Server running on port ${env.PORT}`
    );
  });
}

start();