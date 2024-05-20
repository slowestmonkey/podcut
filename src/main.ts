import { configDotenv } from "dotenv";
import fs from "node:fs";
import OpenAI from "openai";

configDotenv();

const timeFrameMin = 2;
const categories = {
  exercising: [
    /* topics */
  ],
  nutrition: [],
  mentalHealth: [],
  psychology: [],
  relationships: [],
  selfImprovement: [],
  wealth: [],
  finance: [],
};

const getAiRequest = (
  categories: Record<string, any>,
  timeFrame: number,
  transcription: Record<string, any>
) => {
  const categoriesText = Object.keys(categories).join(", ");

  return `split the podcast using the following criteria:
    - divide by the following categories if exist: ${categoriesText}
    - approximately ${timeFrame}min time frames finishing the topic
    - result pattern: "Category" : "startInSeconds" - "endInSeconds"
    Podcast transcription:
    ${transcription}`;
};

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

async function main() {
  const buffer = fs.readFileSync(
    new URL("../transcription/whisper/naval-ep31.mp3.json", import.meta.url)
  );
  const transcription = Buffer.from(buffer);
  const aiRequest = getAiRequest(categories, timeFrameMin, transcription);

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: aiRequest }],
    model: "gpt-3.5-turbo",
  };

  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);

  console.log(JSON.stringify(chatCompletion.choices[0].message));
  // expected result e.g.:
  // "Name of podcaster" - "Name of podcast" / "Category" - "Label" : 02.21 - 05.10
  // actual result:
  // { role: "assistant", content: { psychology: "0 - 151", selfImprovement: "152 - 367"} }
}

main();
