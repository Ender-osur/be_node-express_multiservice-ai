import { ChatCompletionMessageParam } from "openai/resources/chat";

export interface IAProvider {
  sendPrompt(messages: ChatCompletionMessageParam[]): Promise<string>;
}
