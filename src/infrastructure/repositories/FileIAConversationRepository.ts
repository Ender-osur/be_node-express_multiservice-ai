import fs from "fs/promises";
import path from "path";
import { ChatCompletionMessageParam } from "openai/resources/chat";

type IAConversation = Record<string, ChatCompletionMessageParam[]>;

const FILE_DIR = path.resolve(__dirname, "../../data");
const FILE_PATH = path.join(FILE_DIR, "ia-conversations.json");

class FileIAConversationRepository {
  private async ensureFileExists(): Promise<void> {
    try {
      await fs.mkdir(FILE_DIR, { recursive: true });
      await fs.access(FILE_PATH);
    } catch {
      await fs.writeFile(FILE_PATH, "{}", "utf-8");
    }
  }

  private async readFile(): Promise<IAConversation> {
    await this.ensureFileExists();

    try {
      const content = await fs.readFile(FILE_PATH, "utf-8");
      return JSON.parse(content);
    } catch (error) {
      return {};
    }
  }

  private async writeFile(data: IAConversation): Promise<void> {
    await this.ensureFileExists();
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  }

  public async getConversation(
    userId: string
  ): Promise<ChatCompletionMessageParam[]> {
    const conversations = await this.readFile();
    return conversations[userId] || [];
  }

  public async saveConversation(
    userId: string,
    messages: ChatCompletionMessageParam[]
  ): Promise<void> {
    const conversations = await this.readFile();
    conversations[userId] = messages;
    await this.writeFile(conversations);
  }
}

const repository = new FileIAConversationRepository();
export const getConversation = repository.getConversation.bind(repository);
export const saveConversation = repository.saveConversation.bind(repository);
