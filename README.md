# labudi-workflow-canary

Sandbox repo for orchestrator canary scenarios (`prime canary run`).

Branches and PRs here are **ephemeral test fixtures** created and
destroyed by the canary harness. Do not author work here directly.

## Validation

Run the deterministic canary validation with:

```sh
npm test
```

The tests verify the simulation marker contract and the latest
`CANARY_LOG.md` entry shape used by SICKR workflow simulation.

If you see stale branches matching `canary/scenario-*`, run
`prime canary cleanup --scenario <name>` from labudi-orchestrator,
or delete them manually — they are residue from a canary run that
crashed mid-scenario.

See `labudi-documents/design/2026-05-23-executor-contract-architecture.md`
for the broader context.

## SICKR simulation marker

- ticket: `ticket_sim-deac8515-d8bd-4aa2-87fd-9c7b1e9cd2e2`
- run_id: `run-f9d1bf47-67c9-45fe-bf2b-f203fabd0bfa`
- agent: `codex-001`
- updated_at: `2026-06-11T02:53:52Z`
