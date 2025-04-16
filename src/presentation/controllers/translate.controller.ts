import { Request, Response } from "express";
import TranslateTextUseCase from "../../application/usecases/translate/TranslateText.usecase";

class TranslateController {
  public async callTranslateText(req: Request, res: Response) {
    try {
      const { codReqUser, reqLanguage, reqText, modelProvider } = req.body;

      if (!codReqUser || !reqLanguage || !reqText || !modelProvider) {
        return res.status(400).json({ message: "Faltan parámetros." });
      }
      const useCase = new TranslateTextUseCase();
      const result = await useCase.execute({
        codReqUser,
        reqLanguage,
        reqText,
        modelProvider,
      });
      
      
      console.log("llegó aquí: ")
      res.status(200).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en la traducción", error });
    }
  }
}

const translateController = new TranslateController();
export default translateController;
