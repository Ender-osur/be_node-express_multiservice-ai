import { ChatCompletionMessageParam } from "openai/resources/chat";

export interface IAConversationRepository {
  getConversation(userId: string): Promise<ChatCompletionMessageParam[]>;
  saveConversation(userId: string, messages: ChatCompletionMessageParam[]): Promise<void>;
}
