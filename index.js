import OpenAI from "openai";
import readline from "readline";
import fetch, { Headers } from "node-fetch";
import { Blob } from "fetch-blob";
import { FormData, File } from "formdata-node";
import { config } from "dotenv";

// Cargar variables del archivo .env
config();

// Polyfills necesarios para Node.js < 18
globalThis.fetch = fetch;
globalThis.Blob = Blob;
globalThis.FormData = FormData;
globalThis.File = File;
globalThis.Headers = Headers;

// Crear instancia del cliente de OpenAI
const openai = new OpenAI({
  //apiKey: process.env.OPENAI_API_KEY, 
  apiKey: "xxxxxx",
});

// Configurar consola interactiva
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 Escribí tu mensaje para comenzar el chat con GPT:");
userInterface.prompt();

// Historial de conversación
const messages = [
  { role: "system", content: "Sos un asistente útil y conversacional." }
];

userInterface.on("line", async (input) => {
  messages.push({ role: "user", content: input });

  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const reply = res.choices[0].message.content;
    console.log("🤖 GPT:", reply);
    messages.push({ role: "assistant", content: reply });

  } catch (e) {
    console.error("❌ Error:", e);
  }

  userInterface.prompt();
});
