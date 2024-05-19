import os
import whisperx
from dotenv import load_dotenv

load_dotenv()

device = "cpu" # change to "cuda" to use GPU (not available on M1 Mac)
dirname = os.path.dirname(__file__)
filename = "naval-ep31.mp3"
filepath = os.path.join(dirname, "../podcasts/" + filename)
batch_size = 16 # reduce if low on GPU mem
compute_type = "int8" # change to "int8" if low on GPU mem (may reduce accuracy)

# 1. Transcribe with original whisper (batched)
model = whisperx.load_model("large-v2", device, compute_type=compute_type)

audio = whisperx.load_audio(filepath)
transcription = model.transcribe(audio, batch_size=batch_size)

# delete model if low on GPU resources
# import gc; gc.collect(); torch.cuda.empty_cache(); del model

# 2. Align whisper output
model_a, metadata = whisperx.load_align_model(language_code=transcription["language"], device=device)
aligned_transcription = whisperx.align(transcription["segments"], model_a, metadata, audio, device, return_char_alignments=False)

# delete model if low on GPU resources
# import gc; gc.collect(); torch.cuda.empty_cache(); del model_a

# 3. Assign speaker labels
diarize_model = whisperx.DiarizationPipeline(use_auth_token=os.environ["HF_TOKEN"], device=device)
diarized_audio = diarize_model(audio, min_speakers=2, max_speakers=2)

diarized_transcription = whisperx.assign_word_speakers(diarized_audio, aligned_transcription)

result = [{"start": segment["start"], "end": segment["end"], "text": segment["text"], "speaker": segment["speaker"]} for segment in diarized_transcription["segments"]]
resultFilepath = os.path.join(dirname, "../transcription/whisper/" + filename + ".json")

with open(resultFilepath, "w") as file:
  print(result, file=file)
