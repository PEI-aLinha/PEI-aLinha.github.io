---
index: 6
date: 2026-10-05
subject: Minute 06
attendees:
  - Inês
  - Íris
  - Tomás Xavier
  - Afonso
  - Martim Gil
summary: Validated the actors for the new milestone, discussed the architecture
  method and the choice between Spring and FastAPI, and reviewed outstanding
  work, including the data model, mockups and website update.
scheduled: false
mode: markdown
pdf: /documents/06-reuniao.pdf
---
## Agenda

1. Validate the current work for the new milestone:
  1. Actors, including the addition of a new actor.
  2. Personas, including whether a new persona makes sense.
  3. User stories.
  4. Functional and non-functional requirements.
2. Discuss the architecture:
  1. Design method.
  2. Spring vs FastAPI.
  3. Feedback on the current architecture.
3. Review the status of outstanding work.

## Notes

- Actors:
  - The person responsible for data protection can be delegated to someone external to the company, but the person responsible for information security (CISO) must be internal.
  - Determine whether the CISO and the analyst have the same permissions and, if not, define how they differ.
- Architecture method:
  - Analyse the structured method shared by Daniel.
  - Define how to finalise the architecture, so that the product Go/No-Go decision can follow, assessing whether everything can be delivered within the deadlines.
- Spring vs FastAPI:
  - The aLinha Application core in the current architecture is not wrong, but the connections between the modules and the plugins should be made clearer.
  - Decide between several FastAPI services connecting the modules or a single Spring application.
- Outstanding work:
  - Data Model (Íris, Inês).
  - Security and AI Architecture (Martim, Xavi, Afonso).
  - Presentation (Everyone).
  - Mockups:
    - Identify the priority of each use case and, alongside the interface, explain what happens in the architecture.
    - Focus on the main flows rather than on many buttons, complex details or visual identity.
    - Base the mockups on the scenarios.
  - Update the website.
  - Review Daniel's screenshots of Tally for ideas, as its approach is well designed.

## Next Meeting

**8 October 2026 · 16:00 · In person**