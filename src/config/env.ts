import dotenv from "dotenv";

dotenv.config({
  path: "variables.env",
});

export const Env = {
  BASE_URL_DEEPSEEK: String(process.env.BASE_URL_DEEPSEEK),
  API_KEY_DEEPSEEK: String(process.env.API_KEY_DEEPSEEK),
  API_KEY_OPENAI: String(process.env.API_KEY_OPENAI),

  MODEL: {
    DEEPSEEK_CHAT: String(process.env.MODEL_DEEPSEEK_CHAT),
    OPENAI_DALLE3: String(process.env.MODEL_OPENAI_DALLE3),
    OPENAI_GPT35TURBO: String(process.env.MODEL_OPENAI_GPT35TURBO),
  },

  CHAT_RESTRICTIONS: [
    String(process.env.CHAT_RESTRICTION_SYSTEM_1),
    String(process.env.CHAT_RESTRICTION_SYSTEM_2),
    String(process.env.CHAT_RESTRICTION_SYSTEM_3),
  ],

  IMAGE_RESTRICTIONS: [
    String(process.env.IMAGE_RESTRICTION_SYSTEM_1),
    String(process.env.IMAGE_RESTRICTION_SYSTEM_2),
    String(process.env.IMAGE_RESTRICTION_SYSTEM_3),
  ],

  USER_REQUEST: String(process.env.USER_REQUEST),

  PORT: Number(process.env.PORT),
};
