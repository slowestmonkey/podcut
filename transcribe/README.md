# Transcribe implementation

## Setup
0. install python
1. setup the python environment for `transcribe` folder and activate it
2. install [anaconda](https://formulae.brew.sh/cask/anaconda)
3. follow the WhisperX installation [guide](https://github.com/m-bain/whisperX?tab=readme-ov-file#setup-%EF%B8%8F) (not sure if step 2 is required since Mac M1 doesn't have GPU)
4. add `.env` file replacing the tokens
  - `HF_TOKEN` can be generated following this [guide](https://github.com/m-bain/whisperX?tab=readme-ov-file#speaker-diarization)

## Run
```SH
python3 transcribe/main.py
```