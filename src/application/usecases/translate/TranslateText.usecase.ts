import { getConversation, saveConversation } from "../../../infrastructure/repositories/FileIAConversationRepository";
import { PromptBuilder } from "../../services/PromptBuilder";
import { IAProviderFactory } from "../../factories/IAProviderFactory";
import { RequestChatbotDTO } from "../../../domain/dto/RequestChatbot.dto";

class TranslateTextUseCase {
  public async execute({ codReqUser, reqLanguage, reqText, modelProvider }: RequestChatbotDTO) {
    let messages = await getConversation(codReqUser);

    if (messages.length === 0) {
      messages.push(...PromptBuilder.buildSystemMessagesFromEnv());
    }

    messages.push({
      role: "user",
      content: `${reqLanguage}: ${reqText}`,
    });

    await saveConversation(codReqUser, messages);

    const provider = IAProviderFactory.getProvider(modelProvider);
    const response = await provider.sendPrompt(messages);

    return response;
  }
}

export default TranslateTextUseCase;
