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
