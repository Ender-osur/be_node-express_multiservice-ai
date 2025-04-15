import dotenv from "dotenv";

import Server from "./presentation/Server";
import { AppRoutes } from "./presentation/server.routes";


dotenv.config({
  path: "variables.env",
});

(async () => {
  try {
    await main();
  } catch (error) {
    console.error("Error al iniciar la app: ", error);
    process.exit(1);
  }
})();

async function main() {
  // todo: await base datos
  new Server({
    port: Number(process.env.PORT) || 3213,
    routes: AppRoutes.routes
  }).start();
}
