import { Router } from "express";
import translateController from "../controllers/translate.controller";

export class TranslateRoutes {
  static get routes(): Router {
    const router = Router();

    router.post("/translation", async (req, res, next) => {
      try {
        await translateController.callTranslateText(req, res);
      } catch (error) {
        next(error);
      }
    });

    return router;
  }
}
