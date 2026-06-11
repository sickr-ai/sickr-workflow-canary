# labudi-workflow-canary

Sandbox repo for orchestrator canary scenarios (`prime canary run`).

Branches and PRs here are **ephemeral test fixtures** created and
destroyed by the canary harness. Do not author work here directly.

If you see stale branches matching `canary/scenario-*`, run
`prime canary cleanup --scenario <name>` from labudi-orchestrator,
or delete them manually — they are residue from a canary run that
crashed mid-scenario.

See `labudi-documents/design/2026-05-23-executor-contract-architecture.md`
for the broader context.

## SICKR simulation marker

- ticket: `ticket_sim-deac8515-d8bd-4aa2-87fd-9c7b1e9cd2e2`
- run_id: `run-4a180906-a966-484d-b4d5-30e81c154a01`
- agent: `claude-001`
- updated_at: `2026-06-11T02:53:52Z`
