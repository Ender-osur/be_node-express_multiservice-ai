import { PromptBuilder } from "../../services/PromptBuilder";
import { IAProviderFactory } from "../../factories/IAProviderFactory";
import { RequestChatbotDTO } from "../../../domain/dto/RequestChatbot.dto";

class TranslateTextUseCase {
  public async execute({ codReqUser, reqLanguage, reqText, modelProvider }: RequestChatbotDTO) {
    let messages = PromptBuilder.buildSystemMessagesFromEnv(reqLanguage, reqText);
    
    const provider = IAProviderFactory.getProvider(modelProvider);
    const response = await provider.sendPrompt(messages);
  
    return response;
  }
}

export default TranslateTextUseCase;
