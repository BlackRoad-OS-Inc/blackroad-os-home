<!-- Repository overview for BlackRoad OS handbook and governance hub. -->
# blackroad-os-home

blackroad-os-home is the handbook and governance repository for BlackRoad Inc., an AI-first company operated by a single human orchestrator and many agents.

## Purpose

This repository is the source of truth for how BlackRoad operates: mission, principles, organization model, decision-making, policies, and playbooks for humans and agents. It is designed to be easy to read, diff, and reference across other BlackRoad repositories.

## Relationship to other repos

- **blackroad-os-core**: domain models and schemas, including journal and decision primitives.
- **blackroad-os-operator**: agents and orchestrators that execute work.
- **blackroad-os-infra**: infrastructure definitions and runbooks for operating services.
- **blackroad-os-docs**: technical documentation and architecture references.
- **blackroad-os-web**: public-facing site content and marketing assets.

## Repository map

- `/handbook`: how BlackRoad works (mission, principles, organization structure, decision-making, meeting cadences).
- `/policies`: rules humans and agents must follow.
- `/playbooks`: step-by-step responses to common situations.
- `/meta`: glossary and contributor information.

## How to propose changes

- Open a pull request that describes the change and the rationale.
- Keep updates small and well-scoped to make review easier.
- Changes to policy files require orchestrator approval before merging.
- Reference related work in other repositories when relevant so agents can trace dependencies.
