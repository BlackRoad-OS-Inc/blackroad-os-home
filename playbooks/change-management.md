<!-- Change management process for code, config, and policy updates. -->
# Change Management

## What counts as a change?

Any modification to code, configuration, infrastructure, data handling, or policies that could affect users, compliance, safety, or operational stability.

## Change Categories

- **Standard changes**: Low risk, pre-authorized, well-documented steps.
- **Normal changes**: Moderate risk, require review and validation.
- **Emergency changes**: Urgent fixes to mitigate active incidents.

## Process

1. **Proposal (PR)**
   - Document the change, scope, risk assessment, and rollback plan.
   - Link to relevant issues, incidents, or journal entries.

2. **Review**
   - Obtain review from domain owners; policies changes require orchestrator approval.
   - Validate tests, safety checks, and impact analysis.

3. **Approval**
   - Ensure approvals match category requirements (orchestrator for high-risk or policy updates).
   - Record approvals in PR and journal if impact is material.

4. **Implementation**
   - Execute during approved windows when possible.
   - Monitor for anomalies and keep stakeholders informed.

5. **Post-change Review**
   - Verify outcomes, update documentation, and close related tasks.
   - Journal lessons learned, especially for emergency changes.
