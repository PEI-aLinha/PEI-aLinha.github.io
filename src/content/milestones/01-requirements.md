---
number: 1
title: Requirements & Planning
status: done
summary: Understand what SMEs need to comply with, and fix the scope of the MVP.
canvaPresentation:
  title: MS1 presentation
  embedUrl: https://www.canva.com/design/DAHWDUVlkxI/N4CuObnXdJv7pJVgNEWScg/view?embed
deliverables:
  - title: Project website
    status: Done
  - title: GitHub organisation
    status: Done
  - title: Jira project
    status: Done
  - title: State of the art and context
    status: Done
  - title: Regulatory research
    status: Done
  - title: Initial actors and use cases
    status: Done
  - title: Project calendar
    status: Done
  - title: Initial architecture design
    status: Done
  - title: MS1 presentation
    status: Done
start: 2026-09-22
end: 2026-09-29
---
## Goal

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
- **Incident Reporting Support** — assist organisations in preparing the information required for regulatory reporting within NIS2 deadlines.
- **AI-assisted Guidance** — reduce manual effort by explaining, drafting and prioritising compliance work while maintaining human validation.

## Actors

The platform currently considers two main user types:

**Service Provider** — cybersecurity professionals who manage several client organisations, review assessments and validate relevant outputs.

**Client** — the SME and its designated responsible person, who uses the platform to understand obligations, complete assessments and follow compliance progress.

![Service Provider and Client actors](/images/content/m1-actors.png)

## Epic Modules

**Client & Organisation Management**

- Organisation profile, regulatory context and definition of NIS2 scope
- Secure access and organisation management

**Maturity & Gap Assessment**

- Cybersecurity maturity assessment
- Identification of compliance gaps
- Prioritised remediation roadmap

**Compliance Monitoring & Incident Reporting**

- Compliance indicators and dashboards
- Evidence and policy management
- Incident reporting assistance

## Functional Requirements

- **Organisation Management** — manage client organisations, users, regulatory context and NIS2 scope.
- **Compliance & Maturity Assessment** — assess each organisation, identify gaps and establish its current state.
- **Remediation & Evidence** — provide a prioritised action plan and manage compliance evidence.
- **AI-assisted CISO** — explain requirements, support decisions and help generate documentation.
- **Monitoring & Incident Support** — track compliance status, deadlines and incident-reporting processes.

## Non-Functional Requirements

- **Security** — the platform must have no critical or high-severity OWASP Top 10 vulnerabilities.
- **Availability** — the platform should provide at least 99% availability.
- **Multi-tenancy** — client organisations and their data must remain completely isolated from one another.
- **Human oversight** — critical AI-generated outputs require human validation before they are used.
- **Safe AI access** — AI components have read-only access to authoritative client data.

## State of the Art Analysis

![Comparison of OneTrust, DataGuard, Cynomi, traditional consulting and aLinha across NIS2 support, conversational interface, national context, CISO/HITL assistance and low budget](/images/content/m1-state-of-the-art.png)

Our analysis compared aLinha with solutions such as **OneTrust, DataGuard and Cynomi**, as well as traditional cybersecurity consultancy.

aLinha differentiates itself through its combination of **Portuguese regulatory context**, **CISO-as-a-Service**, **Human-in-the-Loop assistance**, a **conversational interface**, and an approach designed to remain accessible to SMEs.

## High-Level Architecture

![High-level architecture: frontend and reverse proxy in front of the system core with plugins, connected to the database and an external AI provider](/images/content/m1-architecture.png)

The initial architecture separates the platform into a frontend, core services, data layer and external AI provider.

The core includes cross-cutting capabilities such as **role and access control, audit and logging, client management, human review and an AI gateway**, while functional capabilities can evolve independently as the project progresses.