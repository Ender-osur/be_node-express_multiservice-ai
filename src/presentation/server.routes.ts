import { Router } from "express";
import { TranslateRoutes } from "./routes/translate.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/generation", TranslateRoutes.routes);

    return router;
  }
}
