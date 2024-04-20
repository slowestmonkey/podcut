import path from "node:path";
import whisper from "whisper-node";

async function main() {
  await whisper(path.resolve(__dirname, "../podcasts/naval-ep31.wav"), {
    modelName: "medium.en",
    whisperOptions: {
      gen_file_txt: true, // outputs .txt file
      word_timestamps: false, // timestamp for every word
      // timestamp_size: 0      // cannot use along with word_timestamps:true
    },
  });
}

main();
