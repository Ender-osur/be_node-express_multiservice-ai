import { IAProvider } from "../../domain/interfaces/IAProvider";
import { OpenAIProvider } from "../../infrastructure/providers/OpenAIProvider";
import { DeepSeekProvider } from "../../infrastructure/providers/DeepseekProvider";

export class IAProviderFactory {
  static getProvider(model: string): IAProvider {
    switch (model.toLowerCase()) {
      case "openai":
        return new OpenAIProvider();
      case "deepseek":
        return new DeepSeekProvider();
      default:
        throw new Error(`Proveedor de IA no soportado: ${model}`);
    }
  }
}
