---
index: 8
date: 2026-10-12
subject: Minute 08
attendees:
  - Inês
  - Íris
  - Tomás Xavier
  - Afonso
  - Martim Gil
summary: Reviewed the presentation, settled on using an external LLM API for the
  functional prototype, and clarified the scope and usability goals of the next
  milestone.
scheduled: false
mode: markdown
pdf: /documents/08-reuniao.pdf
---
## Agenda

1. Review the presentation.
2. Discuss Daniel's input.
3. Decide on the LLM option: self-hosted vs API.
4. Clarify what the next milestone is actually about.
5. Replace the data model slides with a single slide showing the full diagram?

## Notes

- Presentation review:
  - Data model:
    - Slide 1: the full data model.
    - Slide 2: only the tables, with their names.
  - Architecture:
    - Add the technology view using the colours of the architecture diagram.
  - Mockups:
    - Add colours to the architecture workflow.
    - Zoomed-in areas, with extra slides such as "send invitation".
    - For example, on the evaluation slide: "the question is…".
- LLM option, self-hosted vs API:
  - To make the prototype functional, use an API (Anthropic or Google).
  - Be aware that this is not secure in a real deployment.
  - The real version will have to be simulated with limited resources (weaker
    models), so we need to understand the effect of using Claude.
  - Idea: in the chatbot, use different icons to show when a user or an AI is
    answering, and when a user joins or leaves the conversation.
- Next milestone:
  - The title does not match what is in the PowerPoint.
  - The MS3 shown there is wrong; it belongs to the second semester.
  - Usability focus:
    - React should be more semantic and give screen readers context.
    - Minimise the number of clicks from start to goal.
    - Responsiveness.
    - Hierarchy: the main use cases need fewer clicks.
  - Run usability tests and improve our script.
  - Calculate the SUS (System Usability Scale) score.
  - Chatbot states such as "thinking…" and "extracting company data": keep a
    Markdown file with the company context, used to contextualise every answer.
- Single data model slide: answered above.

## Tasks

- To be defined.

## Next Meeting

To be defined.
