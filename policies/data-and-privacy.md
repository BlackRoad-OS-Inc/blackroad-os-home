<!-- Data classification and privacy expectations for BlackRoad. -->
# Data & Privacy Policy

## Data Classification

- **Public**: Approved for public release.
- **Internal**: Routine internal information with limited risk.
- **Confidential**: Sensitive business data requiring strict access controls.
- **Regulated**: Data subject to legal or contractual constraints (e.g., PII, financial records).

## Data Handling & Storage

- Store data according to its classification with appropriate access controls and encryption.
- Use approved storage services defined in `blackroad-os-infra`.
- Avoid copying regulated data into personal devices or unmanaged services.

## Retention & Deletion

- Define retention timelines for each data class; default to minimal retention needed for operations and compliance.
- Implement deletion or anonymization workflows for data past retention windows.
- Journal deviations or exceptions with rationale.

## Cross-Border & Privacy Law Awareness

- Assume applicability of GDPR/CCPA-style requirements; collect and process only what is necessary.
- Record lawful bases for processing regulated data where required.
- Coordinate with counsel before handling data in new jurisdictions.

## Use of Training Data for Models

- Do not train models on regulated or confidential data without orchestrator approval and a documented privacy review.
- Prefer synthetic or de-identified data for experimentation.
- Track datasets used for training to enable audits and rollbacks.

> This document is guidance, not legal advice. Formal privacy policies must be drafted and approved by counsel.
