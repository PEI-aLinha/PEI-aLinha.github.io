---
number: 3
title: "Digital Accessability and Usability "
status: done
start: 2026-10-20
end: 2026-11-02
summary: Defined aLinha's data protection framework under the GDPR, added the
  related requirements, and drafted the service's Terms and Conditions.
canvaPresentation:
  title: MS3 Presentation
  embedUrl: https://canva.link/ioawu915jkqy471
---
In this milestone we defined aLinha's data protection framework and the service's Terms and Conditions.

# GDPR

## Roles

aLinha has two roles:

- **Controller** for account data, audit logs and conversations with the AI assistant.

- **Processor** for the data each SME puts on the platform, such as evidence, minutes, inventory and incidents. For this reason, each organisation accepts a DPA when it joins.

## Purpose limitation

We built a purpose table. For each item of personal data it states:

- the purpose;

- the lawful basis (Art. 6);

- the retention period.

Anything that does not fit in this table is not collected.

## Pseudonymisation and anonymisation

- Within the platform, data is pseudonymised: the modules and the Audit Trail store only UUIDs.

- Before any request to the LLM, personal data is anonymised and replaced with labels using Microsoft Presidio.

## Right to erasure

1. The account is deactivated immediately and the `PersonalDataErasureRequested` event is published.

2. Each plugin implements the Plugin API's export and erase operations.

3. Erasure is completed within 30 days, backups included.

4. When the contract ends, the tenant is deleted through crypto-shredding.

## Privacy policy

- Covers everything required by Art. 13.

- Only three processors, all processing data within the EU.

- No transfers outside the EEA.

## Security measures

- TLS.

- Per-tenant encryption with OpenBao.

- MFA.

- RBAC.

- Row-Level Security.

- A 72-hour breach response process.

# New requirements

- **NFR22 to NFR25:**

  - NFR22: erasure per plugin.

  - NFR23: an Audit Trail with no direct personal data.

  - NFR24: per-tenant encryption.

  - NFR25: processors located in the EU.

- **FR40:** view, correct, export and delete personal data from the user profile.

- With NFR23 in place, the exception in NFR04 is no longer needed.

# Terms and Conditions

27 clauses, written for a B2B service under Decree-Law 446/85. Highlights:

- The AI plays a support role only, and documents reach the client only after a Consultant has validated them.

- The service is neither an audit nor a certification. Submitting notifications to the CNCS and the CNPD is the client's responsibility.

- 99% availability is a target, not a guarantee.

- The client can cancel at no cost, and provider-switching assistance is offered under the Data Act.

- When the contract ends, the client has 30 days to export their data, after which it is deleted.

- The provider's liability is capped at the amount paid in the last 12 months, with the exceptions set out in Art. 18 of Decree-Law 446/85.

- Substantial changes are communicated 30 days in advance.

- Portuguese law applies, with jurisdiction in the courts of Aveiro.