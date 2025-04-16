import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import { IAProvider } from "../../domain/interfaces/IAProvider";
import { Env } from "../../config/env";

export class OpenAIProvider implements IAProvider {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: Env.API_KEY_OPENAI,
    });
  }

  public async sendPrompt(messages: ChatCompletionMessageParam[]): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: Env.MODEL.OPENAI_GPT35TURBO,
      messages,
      max_tokens: 1000,
      response_format: { type: 'text' },
    });
    console.log("está haciendo el fetch");

    return response.choices[0].message.content || "";
  }
}
