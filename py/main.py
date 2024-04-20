import os
import whisper

model = whisper.load_model("base.en") # consider medium.en
dirname = os.path.dirname(__file__)
filename = 'naval-ep31.mp3'
filepath = os.path.join(dirname, '../podcasts/' + filename)

result = model.transcribe(filepath)
resultFilepath = os.path.join(dirname, '../transcripts/whisper/' + filename + '.txt')

with open(resultFilepath, 'w') as file:
    # result object contains timestamps
    print(result["text"], file=file) 
