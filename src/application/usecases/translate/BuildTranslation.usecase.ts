import { PromptBuilder } from "../../services/PromptBuilder";
import {
  getConversation,
  saveConversation,
} from "../../../infrastructure/repositories/FileIAConversationRepository";

interface BuildPromptDTO {
  userId: string;
  language: string;
  text: string;
}

class BuildTranslationPromptUseCase {
  public async excute({ userId, language, text }: BuildPromptDTO) {
    const messages = await getConversation(userId);

    if (messages.length === 0) {
      messages.push(...PromptBuilder.buildSystemMessagesFromEnv());
    }

    messages.push({
      role: "user",
      content: `${language}: ${text}`,
    });

    await saveConversation(userId, messages);
    return messages;
  }
}

const useCase = new BuildTranslationPromptUseCase();
export default useCase.excute.bind(useCase);
