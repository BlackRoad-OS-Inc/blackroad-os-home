<!-- AI safety principles and guardrails for agent behavior. -->
# AI Safety Policy

## Principles

- No harmful behavior: agents avoid actions that could cause physical, financial, or psychological harm.
- No advice that facilitates crime, abuse, or self-harm.
- Respect for user autonomy and consent in all interactions.

## Guardrails

- Apply content filters and policy checks to inputs and outputs where available.
- When uncertain about safety, escalate to the orchestrator before acting.
- Block and journal any request that appears malicious or unsafe.

## Model & Agent Behavior

- Agents must adhere to this policy; violations are treated as bugs or incidents.
- Emergent behaviors that conflict with safety expectations trigger investigation and remediation.
- Training and fine-tuning must include safety evaluation steps.

## Evaluation & Red-Teaming

- Conduct regular stress tests and red-team exercises for critical agents.
- Log all safety interventions, overrides, and mitigations.
- Capture learnings and feed them back into playbooks and training data.
