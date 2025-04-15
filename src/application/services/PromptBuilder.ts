import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Env } from "../../config/env";

export class PromptBuilder {
  static buildSystemMessagesFromEnv(): ChatCompletionMessageParam[] {
    if (!Array.isArray(Env.CHAT_RESTRICTIONS)) {
      throw new Error("CHAT_RESTRICTIONS must be an array.");
    }

    return Env.CHAT_RESTRICTIONS
      .filter(Boolean)
      .map((msg) => ({
        role: "system",
        content: msg || "",
      }));
  }

  static buildSystemMessages(restrictions: string[]): ChatCompletionMessageParam[] {
    return restrictions
      .filter(Boolean)
      .map((msg) => ({
        role: "system",
        content: msg,
      }));
  }

  static buildImagePromptFromEnv(): string {
    if (!Array.isArray(Env.IMAGE_RESTRICTIONS)) {
      throw new Error("IMAGE_RESTRICTIONS must be an array.");
    }

    return Env.IMAGE_RESTRICTIONS.filter(Boolean).join(" ");
  }

  static buildImagePrompt(restrictions: string[]): string {
    return restrictions.filter(Boolean).join(" ");
  }
}
