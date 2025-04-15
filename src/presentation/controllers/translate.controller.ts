import { Request, Response } from "express";

class TranslateController {
  constructor() {}

  public callTranslateText(req: Request, res: Response): void {
    res.json("Ya puedo traducir desde el controlador")
  }
}


const translateController = new TranslateController();
export default translateController;