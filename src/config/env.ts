export const Env = {
  BASE_URL_DEEPSEEK: process.env.BASE_URL_DEEPSEEK,
  API_KEY_DEEPSEEK: process.env.API_KEY_DEEPSEEK,
  API_KEY_OPENAI: process.env.API_KEY_OPENAI,

  MODEL: {
    DEEPSEEK_CHAT: process.env.MODEL_DEEPSEEK_CHAT,
    OPENAI_DALLE3: process.env.MODEL_OPENAI_DALLE3,
    OPENAI_GPT35TURBO: process.env.MODEL_OPENAI_GPT35TURBO,
  },

  CHAT_RESTRICTIONS: [process.env.CHAT_RESTRICTION_SYSTEM_1, process.env.CHAT_RESTRICTION_SYSTEM_2, process.env.CHAT_RESTRICTION_SYSTEM_3],

  IMAGE_RESTRICTIONS: [
    process.env.IMAGE_RESTRICTION_SYSTEM_1,
    process.env.IMAGE_RESTRICTION_SYSTEM_2,
    process.env.IMAGE_RESTRICTION_SYSTEM_3,
  ],

  USER_REQUEST: process.env.USER_REQUEST,

  PORT: Number(process.env.PORT),
};
