---
index: 13
date: 2026-10-26
subject: Minute 13
attendees:
  - Inês
  - Íris
  - Martim Gil
  - Afonso
  - Tomás Xavier
summary: Reviewed the mockup changes, narrowed the usability tests to the main
  features, identified the system's most brittle components, and planned how to
  present the chatbot flows.
scheduled: false
mode: hybrid
pdf: /documents/13-reuniao.pdf
---
# Agenda

1. Show the changes to the mockups.

# Notes

- Mockup changes:
  - Semantic HTML.
  - Onboarding:
    - Consider using LocalStorage so the onboarding does not keep appearing.
  - Design:
    - Mobbin (an aggregator of good existing interfaces, with an MCP available).
  - Visual hierarchy.
  - Chatbot (what is still left to implement).
- Usability tests:
  - Reduce the tests and focus only on the main features.
  - Give a 2-minute mini presentation before the participant starts the tests.
- Brittle components and technical debt:
  - We only need to show, at an abstract level, the most fragile parts of our system:
    - Chatbot:
      - Risk of prompt injection attacks; we need a strategy for this.
    - Every place where the user can provide input.
    - File uploads.
    - Whatever is most likely to break.
- Chatbot:
  - Map the 4 or 5 main components and create interactive components to present and explain those flows more simply.
  - Keep it where it currently is.

# Tasks

- Remind Daniel to get a Mobbin account.
- Review the usability tests.
- Better understand the level of AI implementation in the project.
- Look into Spring AI for agentic purposes.
- Consider a chatbot textbox on the home page (GitHub-style).
- Responsiveness.

# Next Meeting

To be defined.