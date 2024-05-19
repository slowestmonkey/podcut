import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

async function main() {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  };

  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);
}
