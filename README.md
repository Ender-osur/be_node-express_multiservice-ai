# be_node-express_multiservice-ai


# 🌐 AI Gateway Backend

Un backend modular construido con **Node.js**, **Express** y **TypeScript**, diseñado con los principios de **Clean Architecture**. Este servidor actúa como **puente unificado** entre múltiples modelos de inteligencia artificial, como **OpenAI**, **DeepSeek** y otros proveedores futuros.

## 🚀 Características

- ✨ Soporte para múltiples proveedores de IA.
- 🧠 Servicios actuales:
  - Traducción de texto con distintos modelos.
  - Generación de imágenes.
- 🏗️ Arquitectura limpia (Clean Architecture) para escalabilidad y mantenimiento.
- 🔌 Fácil integración de nuevos proveedores y servicios IA.
- ⚙️ Configuración por variables de entorno.

---

## 🧱 Arquitectura


---

## 📦 Tecnologías

- Node.js + Express
- TypeScript
- OpenAI API
- DeepSeek API
- Clean Architecture principles

---

## ⚙️ Configuración

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/be_node-express_multiservice-ai.git
cd be_node-express_multiservice-ai

```
Ejecuta

```
npm install
npm run dev
```

```
# OpenAI
API_KEY_OPENAI="sk-..."
MODEL_OPENAI_DALLE3="dall-e-3"
MODEL_OPENAI_GPT35TURBO="gpt-3.5-turbo"

# DeepSeek
API_KEY_DEEPSEEK="sk-..."
BASE_URL_DEEPSEEK="https://api.deepseek.com"
MODEL_DEEPSEEK_CHAT="deepseek-chat"

# Traducción
CHAT_RESTRICTION_SYSTEM_1="Eres un traductor espectacular."
CHAT_RESTRICTION_SYSTEM_2="Debes responder solo con la traducción del texto."
CHAT_RESTRICTION_SYSTEM_3="No debes incluir ningún comentario adicional en la respuesta."

# Imagen
IMAGE_RESTRICTION_SYSTEM_1="Eres un diseñador gráfico espectacular."
IMAGE_RESTRICTION_SYSTEM_2="Tu objetivo es crear la imagen que te solicite el usuario."
IMAGE_RESTRICTION_SYSTEM_3="El fondo de la imagen generada debe ser sólido."

PORT=3123
```

## Autor - Ender de Jesus Garizabal Sobrino / osur.dev
