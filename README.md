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

## SICKR simulation marker

- ticket: `ticket_sim-1ea93b0b-562c-4b72-a464-2aa6c03a622e`
- run_id: `run-e88bd203-c7ca-467b-a07f-66cbf9bf4cf6`
- agent: `codex-001`
- updated_at: `2026-06-11T03:13:55Z`

## SICKR simulation marker

- ticket: `ticket_sim-dea490a2-ad80-43e8-842b-84b4798deae3`
- run_id: `run-6f3cdfaf-3dd9-486b-9a0a-c1668a8214d6`
- agent: `codex-001`
- updated_at: `2026-06-11T03:19:56Z`

## SICKR simulation marker

- ticket: `ticket_sim-16dca4b9-7a2c-4f31-8e37-2884bd052cad`
- run_id: `sim-e8bffbefee86`
- agent: `codex-001`
- updated_at: `2026-06-11T06:52:31Z`
