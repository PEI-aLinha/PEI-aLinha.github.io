---
number: 1
title: Requirements & Planning
status: in-progress
summary: Understand what SMEs need to comply with, and fix the scope of the MVP.
canvaPresentation:
  title: MS1 presentation
  embedUrl: https://www.canva.com/design/DAHWDUVlkxI/N4CuObnXdJv7pJVgNEWScg/view?embed
deliverables:
  - title: What a CISO does — requirements, flows, use cases
    status: Done
  - title: State of the art and use-case comparison table
    status: Done
  - title: Functional requirements for provider and client
    status: Done
  - title: Visual identity
    status: In Done
  - title: Project website
    status: Done
  - title: MS1 presentation
    status: Done
start: 2026-09-27
end: 2026-09-27
---
# Goal

**Develop a CISO-as-a-Service platform that helps Portuguese SMEs achieve and maintain cybersecurity and data protection compliance.**

## Context

Small and medium-sized enterprises are increasingly subject to cybersecurity and data protection requirements such as **NIS2, GDPR and the AI Act**, but often lack the resources, expertise and budget required to maintain a dedicated security team or CISO.

Compliance is frequently managed through scattered spreadsheets, documents, emails and external consultancy, making it difficult to maintain, monitor and demonstrate over time.

## Problem Statement

SMEs face several challenges when managing cybersecurity compliance:

- **Limited cybersecurity expertise** — many organisations do not have a dedicated security officer.
- **High cost of specialised consultancy** — continuous external support can be difficult to sustain.
- **Fragmented compliance information** — policies, evidence and assessments are spread across different tools.
- **Complex regulatory language** — organisations struggle to understand what is required and how to act.
- **Portuguese regulatory context** — generic compliance tools do not fully address national processes and references such as CNCS, QNRCS and MyCiber.

## Expected Results

aLinha aims to provide:

- **Maturity & Gap Assessment** — assess the organisation's current cybersecurity maturity and identify gaps.
- **Prioritised Remediation** — transform assessment results into clear and actionable priorities.
- **Policy & Evidence Management** — centralise compliance documentation and supporting evidence.
- **Incident Reporting Support** — assist organisations in preparing the information required for regulatory reporting.
- **AI-assisted Guidance** — explain, draft and prioritise compliance work while maintaining human validation.

## Actors

The platform currently considers two main user types:

**Service Provider** — cybersecurity professionals who manage several client organisations, review assessments and validate relevant outputs.

**Client** — the SME and its designated responsible person, who uses the platform to understand obligations, complete assessments and follow compliance progress.



## Epic Modules

**Client & Organisation Management**

- Organisation profile and regulatory context
- Secure access and organisation management

**Maturity & Gap Assessment**

- Cybersecurity maturity assessment
- Identification of compliance gaps
- Prioritised remediation roadmap

**Compliance Monitoring & Incident Reporting**

- Compliance indicators and dashboards
- Evidence and policy management
- Incident reporting assistance

## State of the Art Analysis



Our analysis compared aLinha with solutions such as **OneTrust, DataGuard and Cynomi**, as well as traditional cybersecurity consultancy.

aLinha differentiates itself through its combination of **Portuguese regulatory context**, **CISO-as-a-Service**, **Human-in-the-Loop assistance**, a **conversational interface**, and an approach designed to remain accessible to SMEs.

## High-Level Architecture



The initial architecture separates the platform into a frontend, core services, data layer and external AI provider.

The core includes cross-cutting capabilities such as **role and access control, audit and logging, client management, human review and an AI gateway**, while functional capabilities can evolve independently as the project progresses.