<!-- Engineering standards for code, testing, and observability. -->
# Engineering Standards

## Code Style & Review

- Follow consistent formatting and linting appropriate to each language; enforce via CI where possible.
- All changes should be reviewed; AI-generated code still requires human or orchestrator oversight for safety and correctness.
- Prefer small, well-scoped pull requests with clear rationale.

## Testing & CI

- Automated tests are required before deploying changes to production.
- Include unit, integration, and safety checks relevant to the change.
- CI pipelines should block merges when tests fail or coverage regresses significantly.

## Observability

- Instrument services with logging, metrics, and traces sufficient for debugging and auditability.
- Capture security- and compliance-relevant events and forward them to centralized monitoring.
- Ensure dashboards and alerts exist for critical paths.

## Backward Compatibility & Deprecation

- Avoid breaking changes without migration paths and clear communication.
- Document deprecations, timelines, and required actions for downstream consumers.
- Provide rollback plans for deployments that introduce risk.
