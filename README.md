# Project “Podcut”

## Status

The research is outdated, but the idea might still be relevant.

### _“Many hear, but you listen”_

## Idea

The app provides the following features:

- Users can select their favorite podcast topics (e.g., movies, evolutionary psychology, history) and/or interesting people (e.g., Huberman).
- The app uses AI to scan podcast topics based on user preferences.
- It suggests time frames (approximately 5 minutes) to listen to, with references to the full episode (e.g., Huberman - Mental Health [HardWork]: 02:21 - 05:10). The concept is inspired by TikTok's short-form content.

## Business

### Why

- Increases podcast plays by making content easier to consume (reduces skipping or abandoning full episodes).
- Keeps older podcasts relevant by grouping cuts by topic (rather than by date) based on user preferences.

### Target Audience

- Young people looking to improve themselves but with shorter attention spans.
- Individuals interested in specific topics or ideas rather than specific podcasters or guests.

## Competitors

- [Snipd](https://www.snipd.com/) - Covers some aspects of this idea but lacks categorization functionality (e.g., listening to cuts grouped by "Wealth" category).

## Plan

### MVP

- **AI Integration**
  - Generate timeframes (start and end of topics/labels) from audio files - DONE
  - Generate labels and categories for uploaded podcasts - DONE
  - Link labels with identified timeframes.
  - Match user preferences (categories) with labels to provide suggestions:
    - Example: Category (Psychology) → Labels (Mental Toughness, Openness) → Suggested Cuts (Timestamps: start-end).

## Architecture

![Architecture Diagram](./docs/architecture.png)

## Providers

### Transcription

[whisperx](https://github.com/m-bain/whisperX) is the recommended tool. It provides:

- Transcription
- Speaker detection

### AI Text Generation

Chat GPT-4 ([pricing](https://help.openai.com/en/articles/7127956-how-much-does-gpt-4-cost)) is suitable. The 128k token plan is sufficient to handle even long podcasts (~96k words). For reference, ~6 minutes of a podcast is ~1200 words.

## Future Improvements

- Tailor suggestions to the user’s average attention span (gradually increasing cut lengths to improve attention).
- Allow users to like cuts to promote them to the top.
- Develop an engine to refine suggestions.

### _For more details, check the docs folder._
