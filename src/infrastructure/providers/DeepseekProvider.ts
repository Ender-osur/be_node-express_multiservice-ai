import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import { IAProvider } from "../../domain/interfaces/IAProvider";
import { Env } from "../../config/env";

export class DeepSeekProvider implements IAProvider {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: String(process.env.API_KEY_DEEPSEEK),
      baseURL: String(process.env.BASE_URL_DEEPSEEK),
    });
  }

  public async sendPrompt(messages: ChatCompletionMessageParam[]): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: Env.MODEL.DEEPSEEK_CHAT,
      messages,
    });

    return response.choices[0].message.content || "";
  }
}
