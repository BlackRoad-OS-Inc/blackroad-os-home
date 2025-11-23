<!-- Decision-making model and escalation rules for BlackRoad. -->
# Decision-Making

## 1. Decision Types

- **Low stakes**: Local, reversible, limited blast radius, within predefined budgets.
- **Medium stakes**: Cross-pod coordination, reversible with cost, visible to stakeholders.
- **High stakes**: Irreversible or with major external consequences (regulatory, financial, brand-critical).

## 2. Who Decides What

### Low stakes
- Agents decide autonomously within their domain when within budget thresholds and policy constraints.
- Routine maintenance, small experiments, and reversible configuration changes remain at the agent level.

### Medium stakes
- Agents draft proposals and route them to the orchestrator for review.
- Decisions are recorded as PS-SHA∞ journal entries with rationale and links to artifacts.

### High stakes
- The orchestrator decides, optionally consulting external human advisors.
- All decisions are journaled with explicit consent, rationale, and expected outcomes.

## 3. Contradiction Resolution

- When agents disagree or detect inconsistent data, they open a **Contradiction Task** routed to a higher-order agent or directly to the orchestrator.
- The task documents both positions, evidence, and the questions to resolve.
- Resolutions are journaled and reference the original conflicting inputs.

## 4. Consent Requirements

The following categories always require explicit orchestrator consent:
- Any large capital raise or financing transaction.
- Any major legal or regulatory filing or attestation.
- Changes to core policies (security, data, AI safety, communications, code of conduct).
- Production deployments affecting regulated data flows or customer-facing behavior.
- Any action that materially changes risk posture or compliance obligations.
