---
number: 2
title: Requirements & Architecture
status: done
summary: Detail who uses aLinha and what it must do, and design the plugin-based
  architecture, data model and AI pipeline behind the MVP.
canvaPresentation:
  title: MS2 presentation
  embedUrl: https://www.canva.com/design/DAHXPiw5Ifo/cZIdusJOwMi6goEKZXJUTg/view?embed
start: 2026-09-30
end: 2026-10-13
---
## Overview

Milestone 2 turns the scope fixed in Milestone 1 into a concrete product definition: **who uses aLinha**, **what it must do**, and **how it is built**. Everything below comes from the project's technical report.

## Context

In recent years the European Union approved a set of rules that changed how organisations must handle information security, personal data and the technologies they use: the **GDPR** (Regulation (EU) 2016/679), the **NIS2 Directive** (Directive (EU) 2022/2555) and the **AI Act** (Regulation (EU) 2024/1689).

For large companies, complying with these rules is a challenge. For small and medium-sized enterprises — the vast majority of Portuguese businesses — it is often an obstacle that is hard to overcome. Most SMEs have no CISO and cannot afford a full-time professional with the technical and legal knowledge required, yet they face the same cyber risks, the same legal requirements and, in many cases, heavy fines.

## Objectives

aLinha can be summed up in one sentence: **help SMEs align with cybersecurity and data protection law.** To do so, we propose a CISO-as-a-Service platform that:

- **Assesses** each company's compliance with NIS2, GDPR and the AI Act, identifying the most important gaps and risks.
- **Guides** the company with a clear, prioritised action plan in language non-specialists understand.
- **Monitors** compliance over time, as a continuous improvement process rather than a one-off exercise.
- **Makes accessible** a security and compliance service that until now was mainly available to large organisations.

## Regulatory Framework

### NIS2 and the Portuguese Cybersecurity Legal Regime

NIS2 was transposed in Portugal by **Decree-Law no. 125/2025** (4 December 2025), which approves the new Cybersecurity Legal Regime, in force since 3 April 2026. It is detailed by **Regulation no. 756/2026** (22 June), published by the National Cybersecurity Centre (**CNCS**). The regime applies to public and private entities classified as *essential*, *important* or *relevant*, depending on sector and size. An in-scope company must:

- **Register with CNCS** through its electronic platform — self-identification, Cybersecurity Officer and permanent contact point, annual report and incident notifications.
- **Appoint a Cybersecurity Officer** (CISO) and a permanent point of contact.
- **Implement a risk-management system** covering risk analysis, incidents, continuity, life cycle and supply chain, including cryptography and MFA, staff training, security policies and effectiveness assessment, with an annual report.
- **Involve the management body**, which carries personal liability for wilful misconduct or gross negligence.
- **Notify significant incidents on time** — early warning within **24 h**, update within **72 h**, end-of-impact notice within **24 h** and final report within **30 working days**.

Essential entities are supervised proactively; important entities mostly reactively. Fines reach **€10M or 2%** of worldwide turnover for essential entities and **€7M or 1.4%** for important ones.

### GDPR

Applies to practically every company, since employee and customer data are personal data. In Portugal it is complemented by **Law no. 58/2019** and supervised by **CNPD**. Companies must have a lawful basis for processing, inform data subjects, guarantee their rights (answering within one month), keep a record of processing activities, apply appropriate security measures, sign contracts with processors, notify personal data breaches to CNPD within **72 hours**, and in some cases appoint a DPO and carry out impact assessments. Fines reach **€20M or 4%** of worldwide turnover.

### AI Act

Regulates AI systems with a risk-based approach. Most SMEs are *deployers*, so their main obligations are: avoid prohibited practices, meet transparency obligations (people must know they are talking to an AI and AI-generated content must be labelled), promote AI literacy, and follow reinforced rules for high-risk systems (e.g. recruitment). The **AI Omnibus** (Regulation (EU) 2026/1744, in force since 27 July 2026) postponed high-risk deadlines to **2 December 2027** (stand-alone systems) and **2 August 2028** (systems embedded in products), and introduced simplified obligations for SMEs.

## Actors

### Client side

**Designated Officer** — the person the SME appoints as responsible for cybersecurity, matching the Cybersecurity Officer required by the legal regime (art. 31). Often a manager without technical or legal training. Creates the account, registers the organisation, receives the NIS2 classification suggestion, invites and manages analysts, answers the maturity questionnaire, reads results, gaps and roadmap, asks the AI assistant for policy drafts, reports incidents and submits the notifications validated by the provider. Also represents the **management body**: when accepting a policy, they attach proof of board approval (e.g. meeting minutes), so board members need no account.

**Analyst** — an internal employee or external IT provider given concrete cybersecurity tasks, created by invitation. Answers assigned technical questions, submits the evidence they are responsible for, completes training and can report incidents directly, since they are often the first to detect them. Has no access to global results, the full roadmap, draft policies or incident follow-up (**least privilege**).

### Provider side

**Consultant** — a certified aLinha professional responsible for **human validation**: reviews results and roadmap before the client sees them, edits and approves AI policy drafts, accepts or rejects evidence with a comment and prepares and validates the incident notifications required by Portuguese law. Only accesses the organisations assigned to them. New SMEs are assigned automatically to the consultant with the fewest active clients.

### Secondary actors

- **AI Service** — external system that drafts policies and notifications, prioritises roadmap actions and explains concepts. Nothing it produces reaches the client without consultant validation.
- **Notification Service** — external email service for deadline alerts and immediate incident alerts to the consultant.
- **Time** — events triggered by the passage of time: incident deadline countdowns and compliance reminders.

**CNCS** (via MyCiber) and **CNPD** receive notifications but do not interact with aLinha — the platform prepares them and the Designated Officer submits them — so they are not actors.

### Use Case Diagram

![Use case diagram: the Cybersecurity Officer (Designated Officer), the Analyst and the Consultant and the main use cases of each](/images/content/m2-use-case-diagram.png)

- The **Cybersecurity Officer** (the Designated Officer) registers the organisation, which includes determining its legal scope, manages analysts, views results and roadmap and manages policies.
- The **Analyst** completes the assessment, manages evidence and reports incidents. The Cybersecurity Officer inherits these use cases.
- The **Consultant** validates results, reviews policies and evidence, manages risks and prepares incident notifications.

## Personas

The three personas are related: Rui and Pedro work for the same SME, and Marta is the consultant assigned to it.

**Marta Ferreira, 34 — Consultant.** Cybersecurity consultant on the aLinha team, MSc in Informatics Engineering (University of Aveiro). Follows about 12 SMEs from different sectors and spends much of her time adapting policy templates, chasing evidence and tracking deadlines in Excel. Wants to see quickly which clients need attention and ensure everything she delivers is correct and grounded in law.
*"I want to spend my time analysing risks, not formatting documents."*

**Rui Santos, 47 — Designated Officer.** Administrative and financial director of a 120-employee automotive components factory in Águeda — a medium-sized manufacturing company, likely an *important entity* under NIS2. Degree in Management, no IT background. Learned about NIS2 from a business association email and does not know where to start.
*"I don't need to be an expert, I need someone to tell me what to do and when."*

**Pedro Almeida, 29 — Analyst.** IT technician at a small IT services company that supports Rui's factory twice a week. Knows the factory's servers, backups, network and accounts well, but not NIS2 or what evidence the law requires. Receives vague requests by phone or email.
*"Tell me what you need and in what format, and I'll handle the rest."*

## Scenarios

**#1 Onboarding** — After another board meeting asking about NIS2, Rui creates an MFA-protected account and registers the factory (NIF, CAE, sector, employees, turnover). aLinha tells him the factory is likely an important entity under NIS2, that it is also subject to the GDPR, and assigns Marta as consultant. Rui invites Pedro, starts the maturity questionnaire, assigns him the server and backup questions and the technical asset inventory, saves his progress and finishes two days later. *(US01, US10–US14, US28, US32–US35)*

**#2 Validating results** — Marta finds the maturity level, gaps and an AI-proposed roadmap already computed. She checks Pedro's asset inventory, records a high ransomware risk on the production server, moves MFA and backup testing to the top, and validates. Only then does Rui see the diagnosis, which he exports to PDF for the board. *(US02, US15–US17, US36)*

**#3 Approving a policy** — Rui asks the AI assistant for a backup policy draft. Marta adapts and approves it, the board approves the final version, and Rui formally accepts it in the platform with the meeting minutes attached. *(US03, US18, US19)*

**#4 Submitting evidence** — Pedro submits a backup software log; Marta rejects it, asking for a restore test; Pedro resubmits and it is accepted. He also completes his awareness training, while Rui tracks missing evidence on the dashboard and gets an email reminder. *(US04, US20, US21, US25–US27, US29, US30)*

**#5 Incident response** — Pedro finds encrypted files and a ransom note and reports the incident in minutes. The 24 h and 72 h countdowns start and Marta and Rui are notified. Marta prepares and validates the early warning with AI help, and Rui submits it to CNCS via MyCiber; since personal data was affected, Marta also prepares the CNPD notification. After recovery from tested backups, the end-of-impact notice and the 30-working-day final report follow. *(US05–US07, US23, US24, US31)*

**#6 Portfolio follow-up** — Marta opens her dashboard with her 12 clients sorted by compliance status, starts with the two that have overdue evidence, and checks the factory's change history ahead of a customer audit. *(US08, US09, US25)*

## User Stories

**39 user stories**, each with a priority and Given / When / Then acceptance criteria.


| ID | User story | Priority |
| ---- | -------------------------------------------------------------------------------- | -------- |
| US01 | Automatic assignment of new clients to the consultant with fewest active clients | High |
| US02 | Validate results and roadmap before the client sees them | High |
| US03 | Edit and approve a policy draft requested by the client | Medium |
| US04 | Accept or reject evidence with a comment | Medium |
| US05 | Be notified when a client reports an incident | High |
| US06 | Prepare legal incident notifications with AI | High |
| US07 | Validate the notification and deliver it to the client | High |
| US08 | Client portfolio dashboard | Medium |
| US09 | Change history | Low |
| US10 | Create an account and register the organisation | High |
| US11 | NIS2 classification of the organisation | High |
| US12 | Invite analysts | High |
| US13 | Answer the assessment and save progress | High |
| US14 | Assign questions and tasks to analysts | High |
| US15 | See current level, target level and gaps | High |
| US16 | Prioritised roadmap | High |
| US17 | Export report to PDF | Low |
| US18 | Ask the AI assistant for a policy draft | Medium |
| US19 | Accept approved policies with board approval | Medium |
| US20 | Submit evidence | Medium |
| US21 | See missing or rejected evidence | Medium |
| US22 | Report an incident (Designated Officer) | High |
| US23 | Countdown of notification deadlines | High |
| US24 | Receive the validated notification | High |
| US25 | Compliance dashboard | High |
| US26 | Deadline alerts by email | Low |
| US27 | See assigned tasks (Analyst) | High |
| US28 | Answer assigned technical questions | High |
| US29 | Submit assigned evidence | Medium |
| US30 | Complete awareness training | Medium |
| US31 | Report an incident (Analyst) | High |
| US32 | Secure authentication with MFA | High |
| US33 | Plain-language explanation of each question | High |
| US34 | See the organisation's regulatory scope | High |
| US35 | Register the asset inventory | High |
| US36 | Maintain the risk register (ISO/IEC 27005) | High |
| US37 | Connect evidence sources (read-only) | Medium |
| US38 | See evidence strength | Medium |
| US39 | Consult compliance traceability | Medium |


## Functional Requirements

### Organisation Management


| ID | Requirement | Stories |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| FR01 | Designated Officer creates an account and registers the organisation with the data needed for classification: name, NIF, CAE code, sector and subsector, services, employees, turnover, head office and contacts | US10 |
| FR02 | Suggest an indicative classification (essential, important or not in scope) with a plain explanation, and record the official CNCS qualification | US11 |
| FR03 | Determine the regulatory scope, identifying which frameworks (NIS2, GDPR, AI Act) apply | US34 |
| FR04 | Automatically assign each new organisation to the consultant with the fewest active clients | US01 |
| FR05 | Designated Officer invites analysts by email, creating restricted-access accounts | US12 |
| FR06 | Designated Officer assigns questions, evidence and tasks to analysts | US14 |


### Maturity & Compliance Assessment


| ID | Requirement | Stories |
| ---- | ---------------------------------------------------------------------------- | ---------- |
| FR07 | Maturity questionnaire adapted to the regulatory scope, with save and resume | US13 |
| FR08 | Analysts answer assigned technical questions, integrated into the assessment | US28 |
| FR09 | Plain-language explanation with an example for every question | US33 |
| FR10 | Compute current maturity level, target level and compliance gaps | US15 |
| FR11 | Results only available to the client after consultant validation | US02, US15 |
| FR12 | Export the results report to PDF | US17 |


### Remediation & Evidence


| ID | Requirement | Stories |
| ---- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| FR13 | Prioritised roadmap where each action states legal obligation, priority, deadline, owner and required evidence | US02, US16 |
| FR14 | Consultant adjusts and validates the roadmap before it is visible to the client | US02 |
| FR15 | Evidence submission by the Designated Officer and by analysts (only for evidence assigned to them) | US20, US29 |
| FR16 | Consultant accepts or rejects each piece of evidence with a comment visible to the submitter | US04 |
| FR17 | Show the status of each piece of evidence (missing, submitted, accepted, rejected) | US21 |
| FR18 | Show each analyst only their assigned tasks and deadlines | US27 |
| FR19 | Record training completion as organisational evidence | US30 |
| FR20 | Designated Officer formally accepts approved policies, attaching proof of board approval | US19 |


### AI-assisted CISO


| ID | Requirement | Stories |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| FR21 | AI assistant explains legal requirements in plain language based only on the platform's reference legislation, labels answers as AI-generated and lets the user ask the consultant | US11, US33 |
| FR22 | AI proposes the prioritisation of roadmap actions | US02, US16 |
| FR23 | Designated Officer asks the AI assistant for policy drafts based on questions about the organisation | US18 |
| FR24 | All AI drafts go to the consultant, who can edit and approve them before the client sees them | US03 |
| FR25 | AI generates drafts of legal incident notifications to CNCS and, when personal data is affected, to CNPD | US06 |


### Monitoring & Incident Support


| ID | Requirement | Stories |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| FR26 | Consultant dashboard with all clients sorted by compliance status, highlighting those needing attention | US08 |
| FR27 | Designated Officer dashboard with compliance coverage, open gaps and upcoming deadlines | US25 |
| FR28 | Email alerts when a deadline approaches | US26 |
| FR29 | Change history per organisation (who changed what, and when) | US09 |
| FR30 | Designated Officer and analysts report security incidents | US22, US31 |
| FR31 | Immediately notify the consultant and the Designated Officer when an incident is reported | US05, US31 |
| FR32 | Start and display legal countdowns: early warning (24 h), update (72 h), end-of-impact notice (24 h) and final report (30 working days) | US22, US23 |
| FR33 | Consultant validates each notification and makes it available, ready to submit to MyCiber or CNPD | US07, US24 |
| FR34 | Show the consultant's emergency contact on the dashboard and in alert emails, so incidents can be reported when the platform is down | US22, US31 |


### Asset & Risk Management


| ID | Requirement | Stories |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| FR35 | Register the inventory of critical services and assets, with owner and criticality (Regulation 756/2026 — Asset List) | US35 |
| FR36 | Maintain an ISO/IEC 27005 risk register with affected asset, likelihood, impact, risk level and treatment | US36 |


### Evidence & Traceability


| ID | Requirement | Stories |
| ---- | ------------------------------------------------------------------------------------------------------------- | ------- |
| FR37 | Collect technical evidence automatically through read-only Provider plugins connected to client systems | US37 |
| FR38 | Classify evidence strength as self-declared, verified document, technically verified or continuously verified | US38 |
| FR39 | Keep traceability between legal requirement, control, gap, action and evidence | US39 |


## Non-Functional Requirements

### Availability & Reliability


| ID | Requirement |
| ----- | --------------------------------------------------------------------- |
| NFR01 | 99% monthly availability (at most ~7 h 12 min of downtime per month) |
| NFR02 | No background job is lost if a component fails (transactional outbox) |


### Multi-tenancy & Auditability


| ID | Requirement |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR03 | No tenant can read or change data belonging to another tenant |
| NFR04 | 100% of writes to assessments, results and generated documents are recorded in an immutable Audit Trail (who, when, what, tenant) |
| NFR05 | Assessment results are computed strictly from the Compliance Engine's versioned rules — same input and catalogue version always give the same result |


### Security


| ID | Requirement |
| ----- | -------------------------------------------------------------------------------------------------------------------- |
| NFR06 | No high or critical vulnerabilities in the OWASP Top 10 categories |
| NFR07 | 100% of endpoints, except login and health check, require a valid OIDC token |
| NFR08 | Every endpoint is bound to explicit roles; no user accesses operations outside their role |
| NFR09 | All external traffic uses TLS 1.2+; no secrets in code or versioned configuration |
| NFR10 | Uploaded files are untrusted: processed in the Document Sandbox, with no internet access and only allowed file types |


### Artificial Intelligence


| ID | Requirement |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR11 | The AI Service has no write access to data; all AI access goes through the AI Gateway |
| NFR12 | No client-facing AI output (policies, roadmaps, results, notifications) is published without recorded consultant approval; users always know they are interacting with AI and AI content is labelled (AI Act) |
| NFR13 | Personal data is removed or anonymised before any request to the external LLM, and the provider processes data in the EU |
| NFR14 | Every AI output records the model, prompt version, sources used and date |
| NFR15 | Personal data hosted in the EU and minimised; deleted from database and backups within 30 days of termination; audit trails kept for 1 year and then anonymised |


### Performance, Extensibility & Operation


| ID | Requirement |
| ----- | --------------------------------------------------------------------------------------------------------------------------- |
| NFR16 | With 50 concurrent users: p95 below 500 ms for API reads and below 2 s for assessment submission (excluding LLM calls) |
| NFR17 | Adding a plugin requires no Core changes, and no plugin accesses another plugin's internals |
| NFR18 | A new framework catalogue version (e.g. NIS2, SOC-CMM) is loaded as data, without recompiling or redeploying |
| NFR19 | Core and plugins have at least 70% test coverage; CI runs on every pull request and blocks the merge on failure |
| NFR20 | All services expose centralised metrics and logs (Prometheus and Loki) with tenant and correlation IDs and no personal data |
| NFR21 | The full system starts with a single Docker command in a clean environment in under 15 minutes |


The interface must be in Portuguese and use plain language accessible to users without technical or legal training, verified through usability tests with representative users.

## Architecture

### Overview

aLinha follows a **plugin architecture**: a small, stable core provides the shared capabilities and plugins implement the business, so the platform can grow in laws, evidence sources and features without changing its base.

![Logical view of the aLinha architecture: core and feature, framework and provider plugins; dashed components are post-MVP](/images/content/m2-logical-architecture.png)

Dashed components come after the MVP (December 2026). The **MVP** includes the full core; the Organisation, Assessment, Risks & Assets, Dashboard & Reports and Notifications plugins; the NIS2/QNRCS and SOC-CMM frameworks; the code repository and external surface providers; and the AI Service. **Post-MVP**: Policies & Evidence, Review & Approval, Incident Reporting, the GDPR and AI Act frameworks, identity, cloud and SIEM providers, the Document Sandbox, object storage, monitoring and off-site backups.

Three principles guide the architecture:

- **Plugin isolation** — plugins communicate with the core and with each other only through the Plugin API (contracts and domain events), never through each other's internals.
- **Deterministic compliance** — the state of each control comes from versioned rules and evidence, never from a language model.
- **AI assists, humans decide** — no AI-generated document or result reaches the client without consultant approval.

The core concentrates what all plugins share: role-based access control (RBAC), tenant context, module registry, event bus, compliance engine, logging, job dispatch and the AI Gateway. The business is split into three plugin types:


| Type | Responsibility | Examples |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| Feature | Features used by users | Organisation, assessment, roadmap, risks & assets, evidence, dashboard, notifications |
| Framework | Legal frameworks | NIS2, GDPR, AI Act, QNRCS, SOC-CMM |
| Provider | Read-only connection to external systems | Code repository, external surface (DNS, TLS, headers), identity and cloud, SIEM |


### Technology Choices

The core is built in **Kotlin with Spring Boot and Spring Modulith**. Each plugin is a module of the same application, not a separate service: there are no network calls between plugins, each module has its own database schema, and Spring Modulith verifies in CI that no module reaches into another. Spring Boot also provides centralised authorisation and tenant isolation, and transactions that save every change together with its audit record. It is more complex than the alternatives, but these guarantees are worth it.

**Python** is used only where needed: in the AI Service (FastAPI), where the language-model ecosystem lives, and in the Worker Runtime, which collects evidence and analyses documents. Everything else uses existing solutions, and all services run in Docker containers.


| Component | Technology |
| ---------------- | ---------------------------------------------------------------------------- |
| Core | Kotlin, Spring Boot, Spring Modulith |
| AI and workers | Python (FastAPI for the AI Service) |
| Frontend | React, Vite, TypeScript |
| Reverse proxy | Nginx |
| Authentication | Keycloak with MFA |
| Database | PostgreSQL, one schema per module (source of truth) |
| Cache and queues | Redis Streams — sessions, rate limiting and job queue (transactional outbox) |
| BFF | Spring Cloud Gateway |
| LLM | Provider abstracted by the AI Service |
| Files | MinIO (S3 API), post-MVP |
| Secrets | OpenBao |
| Monitoring | Prometheus, Grafana, Loki (post-MVP) |


### Deployment View

![Deployment view: the Docker containers that make up the platform and how they communicate](/images/content/m2-deployment-view.png)

- The user reaches the **React** frontend over HTTPS (TLS 1.2+) through **Nginx**, the single entry point.
- The **BFF** (Spring Cloud Gateway) logs in with **Keycloak** (OIDC with MFA), stores the session in **Redis** and rate-limits requests. Tokens never reach the browser: the BFF forwards each request with the user's access token.
- The **aLinha application** (core and plugins) stores data in **PostgreSQL**, one schema per module, reads secrets from **OpenBao** and, after the MVP, stores files in **MinIO**.
- Async jobs are written to an outbox in PostgreSQL and published to **Redis Streams**. The **Worker Runtime** consumes them, collects evidence from client systems read-only and returns results through the same queue; post-MVP it also analyses uploaded files in the sandbox.
- The **AI Service** receives internal requests, queries the knowledge base read-only and sends the anonymised prompt to an **LLM provider**, which can be swapped without changing the rest of the platform.
- Emails go via SMTP to an external service. Post-MVP, all services send metrics and logs to Prometheus, Loki and Grafana, and backups are encrypted and stored off-site.

### Component View

![Component view: inside the aLinha application and the two Python services](/images/content/m2-component-view.png)

- **Feature plugins** — Organisation, Assessment, Risks & Assets, Policies & Evidence, Dashboard & Reports, Review & Approval and Incidents & Notifications each have their own components and schema. They communicate through domain events such as `AssessmentSubmitted` or `IncidentReported`, published on the Spring Modulith event bus and stored in PostgreSQL.
- **Compliance engine** — the source of truth for each organisation's state. It loads the Framework plugins' catalogues (versioned YAML/JSON rules) into a single control catalogue, so one control can satisfy several laws. Traceability links *Requirement → Control → Gap → Action → Policy or Evidence*.
- **Evidence** — uploaded by users or collected automatically by Provider plugins running in the Worker Runtime with read-only access. In the MVP, evidence comes from the code repository and external surface providers and feeds the Assessment through `EvidenceCollected`. Strength is classified as self-declared, verified document, technically verified or continuously verified.
- **Artificial intelligence** — every AI request goes through the core's AI Gateway to the AI Service, which handles context and RAG over legislation, strips personal data before inference and records provenance. The output is always a draft; in the MVP it enters the Assessment roadmap and only becomes visible after the consultant validates it (`RoadmapValidated`).
- **Isolation and audit** — every request passes RBAC and tenant context, and every write lands in the append-only audit log in the same transaction. The Designated Officer and Analyst only access their organisation; the Consultant only the ones assigned to them.

### Architecture Workflow — Maturity Assessment: From Team to Results

![](/images/content/alinha-m2.png)

How a request travels through the platform in Scenario #1: the Designated Officer invites an analyst and then answers and resumes the maturity assessment. Every request enters through the reverse proxy, passes role and access control in the core and is recorded by the audit and logging system.

**1 · Role and access control.** The frontend asks to invite an analyst. The request goes through the reverse proxy to *Role and Access Control*, which queries the database for the user's permissions before anything else happens.

![Architecture workflow, step 1: the permission check before inviting an analyst](/images/content/m2-flow-1-permissions.png)

**2 · Client and entity management + audit.** With permission granted, the invite is posted to *Client and Entity Management*, which saves it to the database. The *Audit and Logging System* records the action.

![Architecture workflow, step 2: inviting the analyst and recording it in the audit log](/images/content/m2-flow-2-invite.png)

**3 · Maturity and gap assessment.** The Designated Officer answers the maturity assessment. Each answer is posted to the *Maturity and Gap Assessment* plugin, which saves it to the database, and the audit log records the change.

![Architecture workflow, step 3: answering the maturity assessment](/images/content/m2-flow-3-answer.png)

**4 · Resuming the assessment.** When the questionnaire is reopened, the plugin loads the saved progress and returns the current question with the previous answers. The resume (`Assessment Resumed`) is also recorded in the audit log.

![Architecture workflow, step 4: reopening the assessment with saved progress](/images/content/m2-flow-4-resume.png)

### AI Request Flow

1. **Entry and authorisation (1–3)** — the request leaves the frontend over HTTPS, passes Nginx and the BFF (authenticated with Keycloak, OIDC + MFA) and reaches the core with the access token. Access control validates the token and role, and the tenant context binds the request to a single organisation before it reaches the feature plugin that needs AI.
2. **Context preparation (4–5)** — no plugin calls the AI Service directly. The context builder gathers only that tenant's allowed data, reading control status from the compliance engine read-only, so the AI works on deterministic state and never changes it. **Redaction** removes personal data and secrets (NFR13).
3. **Draft generation (6–7)** — the AI Service runs a RAG search over the knowledge base (legislation, controls, CNCS documents), builds the prompt and the model generates the draft. The provider only receives the anonymised prompt; the AI Service has no write access to platform data (NFR11).
4. **Verification and provenance (8)** — output checks validate format and cited sources and label the content as AI-generated (AI Act). Model, prompt version, sources and date are stored in the Audit Trail (NFR14).
5. **Human approval (9)** — in the MVP the draft enters the Assessment roadmap, where the consultant reviews, edits and validates it. Post-MVP, policies and incident notifications go through Review & Approval. Only after this recorded approval does the client see the document (NFR12).
6. **Uploaded files (post-MVP)** — documents are stored in object storage and analysed in the Document Sandbox with no network access, returned marked as untrusted so the model never treats them as instructions (NFR10).

## Data Model

The data model is organised by module: each module owns its own PostgreSQL schema, and every query from the core is filtered by tenant.

![aLinha data model grouped by module: core, organisation, compliance catalogue, assessment, risks and assets, evidence, policies, incidents and notifications](/images/content/m2-data-model.png)

[Open the data model in dbdiagram.io ↗](https://dbdiagram.io/d/alinha-6ac7b141a5ab2804192344f5)

## Prototype

The first interactive prototype covers **Scenario #1 — Onboarding**: organisation registration, suggested NIS2 classification, inviting the team and the maturity questionnaire with saved progress.


[Open the prototype in Figma ↗](https://www.figma.com/design/0YtW5kerG2lrgwJrmvJ32U/aLinha-%E2%80%93-Mockup-Cen%C3%A1rio-1?node-id=0-1&t=McLjU01l9sqdT9q0-1)