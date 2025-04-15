export interface RequestChatbotDTO {
  codReqUser: string;
  reqLanguage: string;
  reqText: string;
  modelProvider: 'openai' | 'deepseek';
}