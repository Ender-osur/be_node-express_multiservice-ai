import { Router } from "express";
import translateController from "../controllers/translate.controller";

export class TranslateRoutes {
  static get routes(): Router {
    const router = Router();

    router.post("/translation", translateController.callTranslateText);

    return router;
  }
}
