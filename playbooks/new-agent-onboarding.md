<!-- Checklist for onboarding new agents into BlackRoad's operator stack. -->
# New Agent Onboarding

1. **Define Agent Role**
   - [ ] Specify domain (finance, infra, compliance, ops, research, product, brand/comms).
   - [ ] Document capabilities, constraints, and expected outcomes.

2. **Create Agent Entry**
   - [ ] Add an entry to `blackroad-os-operator` `agentsRegistry.yaml` with id, domain, description, and file path.
   - [ ] Include any required secrets or configs in the approved secret manager, not in code.

3. **Implement Agent Class**
   - [ ] Implement agent in `blackroad-os-operator/src/agents/...` with `init`, `handleEvent`, `runPeriodic`, and `generateReports` as appropriate.
   - [ ] Add domain-specific safeguards and validations aligned with policies.

4. **Wire into Orchestrator**
   - [ ] Update the relevant orchestrator (e.g., FinanceOrchestrator) to include this agent in flows.
   - [ ] Validate routing, permissions, and logging.

5. **Add Tests**
   - [ ] Create at least one test verifying the agent can be instantiated and handle a simple event.
   - [ ] Ensure tests cover safety and policy boundaries where feasible.

6. **Docs**
   - [ ] Add a section in `blackroad-os-docs` describing the new agent, inputs/outputs, and constraints.
   - [ ] Journal the addition with links to code, docs, and tests.
