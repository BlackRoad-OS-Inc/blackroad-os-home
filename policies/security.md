<!-- Security policy outlining roles, access, and incident expectations. -->
# Security Policy

## Purpose & Scope

This policy sets baseline security expectations for all humans and agents operating under BlackRoad. It applies to production systems, development environments, and any handling of company data.

## Roles & Responsibilities

- **Orchestrator**: Approves security-critical changes, reviews incidents, and ensures controls remain aligned to risk posture.
- **Infra agents**: Implement and maintain secure infrastructure, access controls, and monitoring.
- **Ops agents**: Enforce operational controls, validate adherence to runbooks, and coordinate incident response.

## Access Management

- Follow the principle of least privilege for all identities, including agents.
- MFA is required for all human access to systems and administrative consoles.
- Access changes must be logged and, when material, journaled with justification.

## Secrets & Keys

- Secrets are stored in the central secret manager defined in `blackroad-os-infra`.
- Agents must never hardcode secrets or commit them to version control.
- Rotate credentials on a regular cadence and after any suspected compromise.

## Incident Response

- Follow the steps in `/playbooks/incident-response.md` for security events.
- Report suspected incidents immediately to the orchestrator or designated incident agents.
- Journal timelines, actions, and outcomes to preserve evidence.

## Logging

- Security-significant events (authentication changes, access grants, policy changes) must be logged and, when high impact, journaled.
- Logs should be retained according to data retention rules and protected from tampering.
