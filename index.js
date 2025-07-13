import OpenAI from 'openai';
import readline from "readline";

import fetch, { Headers } from 'node-fetch';
import { Blob } from 'fetch-blob';
import { FormData } from 'formdata-node';

// Polyfills para Node.js < 18
globalThis.fetch = fetch;
globalThis.Headers = Headers;
globalThis.Blob = Blob;
globalThis.FormData = FormData;

const openai = new OpenAI({
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
});

async function main() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "hello" }],
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error al llamar a la API:", error);
  }
}

main();
