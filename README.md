# 🧠 nodejs-chatgpt-tutorial
Este proyecto es una demostración simple de cómo usar la API de OpenAI (ChatGPT) desde Node.js, 
utilizando módulos ES y `fetch` con soporte para entornos que no incluyen estos objetos globales por defecto.

## 🚀 Requisitos

- Node.js **v18 o superior** (recomendado)
  - También funciona y se ejecuta en Node.js **v16.20.2**, pero requiere **polyfills** manuales (ya incluidos)
- Cuenta en [OpenAI](https://platform.openai.com/) y una API key válida

## 📦 Dependencias instaladas

El proyecto utiliza los siguientes paquetes (según `package.json`):

| Paquete         | Versión   | Propósito                                      |
|-----------------|-----------|-----------------------------------------------|
| `openai`        | ^5.7.0    | Cliente oficial para consumir la API de OpenAI|
| `node-fetch`    | ^3.3.2    | Polyfill para `fetch` en Node.js              |
| `fetch-blob`    | ^4.0.0    | Polyfill para `Blob`                          |
| `formdata-node` | ^6.0.3    | Polyfill para `FormData`                      |

> ⚠️ Nota: `formdata-node` requiere Node.js >= 18. Si estás usando Node.js 16, se recomienda reemplazar por `form-data`.

# Cómo ejecutar:
# Clonar el repositorio
git clone https://github.com/tu-usuario/nodejs-chatgpt-tutorial.git
cd nodejs-chatgpt-tutorial

# Instalar dependencias
npm install

# Colocar tu API-KEY en el archivo proncipal index.js

# Ejecutar el proyecto
node index.js

# Resultado esperado
Ejecutará una consulta a la API de OpenAI (usando GPT-3.5-turbo) con el mensaje "hello" y mostrará la respuesta por consola.
