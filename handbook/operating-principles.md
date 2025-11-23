<!-- Operating principles guiding how BlackRoad executes work. -->
# Operating Principles

## 1. Agents First, But Not Alone

Agents perform the majority of execution, using automation to deliver speed and scale. Humans set direction, provide consent, and maintain final accountability so that automation aligns with intent.

**Implications**
- Agents have autonomy within domain and policy constraints.
- Humans retain veto power and must provide explicit consent for high-stakes decisions.
- Documentation should make it clear when human checkpoints are required.

## 2. Everything Important is Journaled

Decisions and actions above a defined impact threshold must be logged as PS-SHA∞ JournalEntries in `blackroad-os-core`. Journaling includes context, rationale, outcomes, and links to artifacts so future reviews are straightforward.

**Implications**
- Significant decisions without journal entries are treated as incomplete work.
- Rejections and deferrals are journaled to record intent and avoid ambiguity.
- Agents should default to journaling when uncertain about thresholds.

## 3. Contradictions Escalate

When agents encounter conflicting data or disagree on conclusions, they must escalate to a higher-order agent or directly to the orchestrator rather than suppressing signals. Escalation preserves context so contradictions can be resolved transparently.

**Implications**
- Contradiction Tasks document the competing views and evidence.
- Resolutions are journaled with references to the original positions.
- Silent resolution of conflicts is a process failure.

## 4. Minimal Manual Intervention

Manual steps are exceptions, not the norm. Repeated manual interventions signal missing automation or unclear ownership and must trigger improvements in tooling or process.

**Implications**
- Manual overrides are documented and time-bound.
- Post-incident reviews include automation opportunities.
- Default workflows favor deterministic, repeatable automation.

## 5. Regulated-by-Design

We assume operation in regulated domains (e.g., FINRA, SEC, AML, privacy). Systems, data flows, and controls are designed to ease audits, prove compliance, and prevent unsafe behavior from the outset.

**Implications**
- Controls and evidence collection are built into workflows.
- Deployments consider regulatory posture and auditability.
- Compliance feedback is treated as a design input, not an afterthought.
