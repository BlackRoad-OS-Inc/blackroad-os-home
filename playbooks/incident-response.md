<!-- High-level incident response steps for BlackRoad. -->
# Incident Response

## What is an Incident?

An incident is any unplanned interruption, security event, or degradation of service that threatens availability, integrity, confidentiality, compliance, or safety. Minor issues that do not impact users or controls may be handled as standard tasks.

## Severity Levels

- **SEV-1**: Critical impact on regulated flows, security breach, or major outage.
- **SEV-2**: Significant degradation or potential compliance risk without confirmed breach.
- **SEV-3**: Limited impact, contained issue, or early warning signal.

## First Responders

- Infra and Ops agents monitor for alerts and initiate triage.
- Escalate immediately to the orchestrator for SEV-1 events.
- Engage domain pods as needed (e.g., Compliance for regulatory exposure).

## Response Sequence

1. **Detect**: Identify and verify the incident through monitoring or reports.
2. **Triage**: Classify severity, assign roles, and gather context.
3. **Communicate**: Notify stakeholders and the orchestrator; record updates in a shared channel.
4. **Mitigate**: Contain and remediate the issue following relevant runbooks in `blackroad-os-infra`.
5. **Recover**: Restore services, validate data integrity, and confirm controls are functioning.
6. **Postmortem**: Produce a journaled post-incident review with timeline, root causes, fixes, and follow-up actions.

## Links

- Align technical steps with `blackroad-os-infra` runbooks and monitoring configurations.
- Use `/policies/security.md` and `/policies/ai-safety.md` to guide responses that touch security or safety.
