# Project “Podcut”

### _“Many hear, but you listen”_

## Idea:

App provides the following possibilities:
- User selects favorite topic of podcasts they interested about (e.g. movie, evolutionary psychology, history) AND/OR interesting people (e.g. Huberman)
- App scans (with AI) the topics considering the user preferences
- App suggests the time frames (cuts) to listen to, with reference to the whole episode (e.g. Huberman - Mental Health [HardWork]: 02.21 - 05.10)

## Reference

- That might become a "tik-tok" like podcast app, also with an engine that recommends the cuts

## Business:

Why:

- Should provide boost of plays for podcaster due to easier consumption of content (also not skipping or abandoning whole episodes)
- Should also keep old podcast more relevant since cuts will be grouped by topic (not by date)

For whom:

- Young people willing to improve themselves with a short attention span
- People who are interested in a specific topics/ideas but not in in a podcaster or guest themselves

## Questions:

- Does it already exist?
  - Didn’t find any competitors
- What are the advantages over other platforms (e.g. tik-tok)?
  - Podcast heavy
  - Education purpose (focus on learning rather than entertaining)
  - Allows only verified podcasters (at least in the beginning)
- Is it really interesting for me?
  - Definitely, I want to make my own project. I’m happy to work on other people’s projects, I’ll be more than happy to work on my own project!
- Is it worth it if I gain 0 money?
  - Definitely, since I gain: experience, confidence and knowledge. We both know what you’ll say when you get old if you don’t try.
- Is AI capable for that now? If it’s not possible now then when?
- Is it valuable now? If it’s not valuable now then when?

## Plan

### Phase 1:

- Impartial investigation:
  - Competitors
    - Not that I’m aware of yet
  - Technology (stack)
    - Doesn’t matter, but probably TS to be comfortable with
  - AI, Engine
- POC/Prototype
- First customer (exclusively Chris Williamson?)

### POC/Prototype:

- AI Integration
  - Provide audio file to generate timeframes (start and end of topic/label) <- THE MOST IMPORTANT - BASE
    - Do we a need podcast transcript for that? <- SEEMS SO
  - Generate labels and categories for uploaded podcasts
  - Connect labels with found timeframes
  - Connect user categories (preferences) with labels to provide suggestions
    Category (psychology) => Labels (Mental Toughness, Openness) => Suggested Cuts (Timestamps start-end)
- Audio files integration (storing/processing clips and audio files)
- Engine to provide the suggestions

## Possible bottlenecks:

- Transcription time and cost. "Descript" allows only 30h for PRO version per month which is not nearly enough.

- Bard and ChatGPT cannot provide the timeframes on abstract topics that precisely
  - It can barely divide the text but also a lot of context and background is lost

## Design:

- Very minimalistic, black, white and shades of grey (check the design folder)

## Improvements:

- Podcut suggestions might consider user’s average attention span (might also increase uses’s attention by slowly providing longer cuts)
- Likes to promote the cut to the top

## Architecture

![alt text](image.png)

## Implementation:

AI Request (Chat GPT):

```TS
const timeFrame = 5
const topics = ["Exercising", "Nutrition", "Mental Health", "Psychology", "Relationships", "Self Improvement"]

const requestPrefix = `split following podcast by:
  - following topics if exist: ${topics}
  - ~${timeFrame}min time frame
  - allowing speakers to finish`

const transcript = `text`
const request = `
  ${requestPrefix}
  START
  ${transcript}
  END
`
```

## Providers

### Transcription

#### Pricing for 30 hours of usage:

- [Descript](https://www.descript.com/pricing) - 30h MAX, Pro - 288$/year - maybe negotiable (Enterprise - 45h)
- [Rev](https://www.rev.com/pricing) - no limit, 5400$/year (0.25$/minute)
- [Otter](https://otter.ai/pricing) - invalid option (meetings/calls focused)
- [Sonix](https://sonix.ai/pricing) - no limit, 2000$/year (5$/hour + 16.50$/month)
