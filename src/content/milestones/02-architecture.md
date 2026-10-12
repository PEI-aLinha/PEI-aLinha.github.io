---
number: 2
title: Requirements & Architecture
status: done
summary: Detail who uses aLinha and what it must do, and design the plugin-based architecture, data model and AI pipeline behind the MVP.
canvaPresentation:
  title: MS2 presentation
  embedUrl: https://www.canva.com/design/DAHXPiw5Ifo/cZIdusJOwMi6goEKZXJUTg/view?embed
deliverables:
  - title: Actors and personas
    status: Done
  - title: Scenarios
    status: Done
  - title: User stories
    status: Done
  - title: Functional requirements
    status: Done
  - title: Non-functional requirements
    status: Done
  - title: Technology choices
    status: Done
  - title: Logical, deployment and component views
    status: Done
  - title: Data model
    status: Done
  - title: Security and AI architecture
    status: Done
  - title: First mockups (Scenario #1)
    status: Done
  - title: MS2 presentation
    status: Done
start: 2026-09-30
end: 2026-10-13
---
## Overview

Milestone 2 turns the scope fixed in Milestone 1 into a concrete product definition: **who uses aLinha**, **what it must do**, and **how it is built**. The work is documented in the technical report and summarised below.

## Regulatory Framework

aLinha assesses SME compliance against three European instruments that often apply to the same company and overlap in areas such as risk management and incident notification:

- **NIS2 / Cybersecurity Legal Regime** — transposed in Portugal by Decree-Law no. 125/2025 (in force since 3 April 2026) and its Regulation no. 756/2026, published by **CNCS**. In-scope entities must register with CNCS, appoint a Cybersecurity Officer, run a risk-management system, involve the management body and notify significant incidents (**24 h** early warning, **72 h** update, **24 h** end-of-impact notice and a final report within **30 working days**).
- **GDPR** — applies to practically every company, complemented by Law no. 58/2019 and supervised by **CNPD**. Personal data breaches must be notified within **72 hours**.
- **AI Act** — risk-based obligations; most SMEs are *deployers*, so transparency, AI literacy and the ban on prohibited practices matter most. High-risk deadlines were postponed by the 2026 **AI Omnibus** (Regulation (EU) 2026/1744) to December 2027 and August 2028.

## Actors

**Client side**

- **Designated Officer** — the person the SME appoints as its Cybersecurity Officer, often a manager without technical or legal training. Registers the organisation, answers the maturity questionnaire, reads results and roadmap, requests AI policy drafts, reports incidents and submits validated notifications. Also represents the management body: when accepting a policy, they attach proof of board approval.
- **Analyst** — an internal employee or external IT provider invited by the Designated Officer. Answers assigned technical questions, submits evidence, completes training and can report incidents directly — under the principle of least privilege.

**Provider side**

- **Consultant** — a certified aLinha professional responsible for **human validation**: reviews results and roadmaps, edits and approves AI drafts, accepts or rejects evidence and prepares incident notifications. New SMEs are assigned automatically to the consultant with the fewest active clients.

**Secondary actors** — the **AI Service**, the **Notification Service** (email) and **Time** (deadline countdowns and reminders). CNCS (via MyCiber) and CNPD receive notifications but do not interact with the platform, so they are not actors.

## Personas

The three personas are linked: Rui and Pedro work for the same SME, and Marta is the consultant assigned to it.

- **Marta Ferreira, 34 — Consultant.** Follows about 12 SMEs at once. *"I want to spend my time analysing risks, not formatting documents."*
- **Rui Santos, 47 — Designated Officer.** Administrative and financial director of a 120-employee automotive parts factory in Águeda, likely an *important entity* under NIS2. *"I don't need to be an expert, I need someone to tell me what to do and when."*
- **Pedro Almeida, 29 — Analyst.** External IT technician at the factory twice a week. *"Tell me what you need and in what format, and I'll handle the rest."*

## Scenarios

1. **Onboarding** — Rui creates an MFA-protected account, registers the factory, gets an indicative NIS2 classification, is assigned to Marta, invites Pedro and starts the maturity questionnaire, delegating technical questions and the asset inventory.
2. **Validating results** — Marta finds the maturity level, gaps and an AI-proposed roadmap already computed, records a ransomware risk on the production server, reprioritises MFA and backup testing, and validates. Only then does Rui see the diagnosis.
3. **Approving a policy** — Rui asks the AI assistant for a backup policy draft; Marta adjusts and approves it; Rui accepts it in the platform with the board minutes attached.
4. **Submitting evidence** — Pedro submits a backup log, Marta rejects it asking for a restore test, Pedro resubmits and it is accepted.
5. **Incident response** — Pedro reports a ransomware incident; the 24 h / 72 h countdowns start, Marta prepares and validates the CNCS early warning (and the CNPD notification, since personal data was affected), and Rui submits them on time.
6. **Portfolio follow-up** — Marta opens her dashboard with 12 clients sorted by compliance status and checks the factory's change history ahead of an audit.

## User Stories

**39 user stories** were written in *As a… I want… so that…* form with Given/When/Then acceptance criteria, grouped by actor:

- **Consultant** — automatic client assignment, validating results and roadmap, approving AI drafts, accepting/rejecting evidence, incident notifications with AI support, portfolio dashboard, change history, risk register (ISO/IEC 27005), evidence strength and compliance traceability.
- **Designated Officer** — account and organisation registration, NIS2 scope, regulatory scope (NIS2/GDPR/AI Act), inviting analysts, answering and assigning the questionnaire, results and roadmap, PDF export, AI policy drafts, accepting policies, evidence, incident reporting and countdowns, compliance dashboard, email alerts and asset inventory.
- **Analyst** — assigned tasks only, technical questions, evidence submission, awareness training, incident reporting and connecting read-only evidence sources.
- **All users** — MFA authentication and plain-language explanations of every question.

## Functional Requirements

**39 functional requirements** (FR01–FR39), each traced to user stories, organised in seven areas:

- **Organisation Management** — registration with the data needed for NIS2 classification, indicative and official qualification, regulatory scope, automatic consultant assignment, invitations and task assignment.
- **Maturity & Compliance Assessment** — scope-adapted questionnaire with saved progress, plain-language explanations, current/target level and gaps, results visible only after consultant validation, PDF export.
- **Remediation & Evidence** — prioritised roadmap (legal obligation, priority, deadline, owner, evidence), evidence submission and review, training records, formal policy acceptance.
- **AI-assisted CISO** — legal explanations grounded only in the reference legislation, roadmap prioritisation, policy and incident-notification drafts — all sent to the consultant for approval.
- **Monitoring & Incident Support** — consultant and client dashboards, email alerts, change history, incident reporting, legal countdowns and an emergency contact for when the platform is unavailable.
- **Assets & Risks** — inventory of critical services and assets, and an ISO/IEC 27005 risk register.
- **Evidence & Traceability** — automatic read-only evidence collection via Provider plugins, evidence strength classification and *Requirement → Control → Gap → Action → Evidence* traceability.

## Non-Functional Requirements

| Area | Key requirements |
| --- | --- |
| Availability | 99% monthly availability; no background job lost on failure (transactional outbox) |
| Multi-tenancy & audit | Full tenant isolation; 100% of writes in an append-only audit trail; deterministic, versioned compliance results |
| Security | No high/critical OWASP Top 10 issues; OIDC token on every endpoint; explicit roles; TLS 1.2+; no secrets in code; uploads processed in a sandbox |
| Artificial Intelligence | AI has no write access and goes through the AI Gateway; client-facing AI output needs consultant approval; personal data removed before LLM calls (EU processing); provenance logged |
| Performance & operation | p95 < 500 ms reads with 50 users; new plugins without Core changes; frameworks loaded as data; ≥70% test coverage with blocking CI; one-command Docker start in < 15 min |

## Architecture

aLinha follows a **plugin architecture**: a small, stable core provides shared capabilities and plugins implement the business, so the platform can grow in laws, evidence sources and features without changing its base. Three principles guide it:

- **Plugin isolation** — plugins talk to the core and to each other only through the Plugin API (contracts and domain events).
- **Deterministic compliance** — the state of each control comes from versioned rules and evidence, never from a language model.
- **AI assists, humans decide** — no AI-generated document or result reaches the client without consultant approval.

The core provides RBAC, tenant context, module registry, event bus, compliance engine, audit logging, job dispatch and the AI Gateway. The business is split into **Feature** plugins (organisation, assessment, roadmap, risks & assets, evidence, dashboard, notifications), **Framework** plugins (NIS2/QNRCS, GDPR, AI Act, SOC-CMM) and **Provider** plugins (read-only adapters to code repositories, external surface, identity/cloud and SIEM).

### Logical View

![Logical architecture: user interface and authentication behind the reverse proxy and BFF, the aLinha application with core and feature, framework and provider plugins, and the data, AI and worker layers](/images/content/m2-logical-architecture.png)

Dashed components are planned for after the MVP (December 2026). The MVP includes the full core, the Organisation, Assessment, Risks & Assets, Dashboard & Reports and Notifications plugins, the NIS2/QNRCS and SOC-CMM frameworks, the code-repository and external-surface providers and the AI Service.

### Technology Choices

| Component | Technology |
| --- | --- |
| Core | Kotlin, Spring Boot and Spring Modulith |
| AI and workers | Python (FastAPI for the AI Service) |
| Frontend | React, Vite and TypeScript |
| Reverse proxy | Nginx |
| Authentication | Keycloak with MFA |
| Database | PostgreSQL, one schema per module (source of truth) |
| Cache and queues | Redis Streams — sessions, rate limiting and job queue (via transactional outbox) |
| BFF | Spring Cloud Gateway |
| LLM | Provider abstracted by the AI Service |
| Files | MinIO (S3 API), post-MVP |
| Secrets | OpenBao |
| Monitoring | Prometheus, Grafana, Loki (post-MVP) |

Each plugin is a module of the same application rather than a separate service: no network calls between plugins, one database schema per module, and Spring Modulith verifies in CI that no module reaches into another.

### Deployment View

![Deployment view: Docker containers for the frontend, Nginx, BFF, Keycloak, aLinha application, AI Service, Worker Runtime, PostgreSQL, Redis, OpenBao and MinIO](/images/content/m2-deployment-view.jpg)

- Users reach the React frontend over HTTPS (TLS 1.2+) through **Nginx**, the single entry point.
- The **BFF** logs users in with Keycloak (OIDC + MFA), stores the session in Redis and applies rate limiting — tokens never reach the browser.
- The **aLinha application** stores data in PostgreSQL, reads secrets from OpenBao and, after the MVP, files from MinIO.
- Async jobs are written to an outbox and published on **Redis Streams**; the **Worker Runtime** collects evidence from client systems in read-only mode.
- The **AI Service** queries the knowledge base read-only and sends an already anonymised prompt to the LLM provider, which can be swapped without changing the rest of the platform.

### Component View

![Component view: feature plugins with their own components and schemas, the compliance engine, framework catalogues, the Worker Runtime with provider plugins, and the AI Service](/images/content/m2-component-view.png)

- **Feature plugins** each own their components and database schema and communicate through domain events such as `AssessmentSubmitted` or `IncidentReported`.
- The **Compliance Engine** is the source of truth: it loads versioned YAML/JSON catalogues from Framework plugins into a single control catalogue, so one control can satisfy several laws.
- **Evidence** is uploaded by users or collected automatically by Provider plugins, and classified as self-declared, verified document, technically verified or continuously verified.
- **Isolation and audit** — every request passes RBAC and tenant context; every write lands in the append-only audit log within the same transaction.

## Data Model

![aLinha data model grouped by module: identity, organisation, compliance catalogue, assessment, roadmap, risks and assets, evidence, policies, incidents and notifications](/images/content/m2-data-model.png)

Each module owns its own PostgreSQL schema, and every table is scoped by tenant.

## Security Architecture

![Security architecture showing trust boundaries between the internet, the edge, the aLinha application, isolated workers, external systems and the internal data network](/images/content/m2-security-architecture.png)

The platform is split into trust boundaries: only the reverse proxy is exposed to the internet, the application validates JWTs and enforces RBAC and tenant isolation, workers and the AI Service run isolated with limited egress, and data stores live on an internal network with no internet access.

## AI Request Flow

1. **Entry and authorisation** — the request goes through Nginx and the BFF to the core, where access control validates the token and role and tenant context binds it to a single organisation.
2. **Context preparation** — no plugin calls the AI Service directly. The AI Gateway's context builder gathers only that tenant's allowed data (reading the compliance engine read-only), and a **redaction** step strips personal data and secrets.
3. **Draft generation** — the AI Service runs RAG over the knowledge base (legislation, controls, CNCS documents) and the LLM generates a draft. The AI Service has no write access to platform data.
4. **Verification and provenance** — output checks validate format and cited sources and label the content as AI-generated (AI Act transparency); model, prompt version, sources and date are logged in the audit trail.
5. **Human approval** — in the MVP, AI recommendations enter the assessment roadmap and only become visible after the consultant validates it (`RoadmapValidated`). Post-MVP, policies and incident notifications go through a dedicated Review & Approval plugin.

## Mockups

First high-fidelity mockups of **Scenario #1 — Onboarding**, designed in Figma.

![Organisation registration screen](/images/content/m2-mockup-01-registration.png)

![Suggested NIS2 classification screen](/images/content/m2-mockup-02-nis2-scope.png)

![Invite the team screen](/images/content/m2-mockup-03-invite-team.png)

![Maturity questionnaire screen](/images/content/m2-mockup-04-questionnaire.png)

![Maturity questionnaire, next question](/images/content/m2-mockup-05-next-question.png)

![Home screen with saved progress](/images/content/m2-mockup-06-progress-saved.png)
