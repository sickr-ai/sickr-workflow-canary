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

- ticket: `ticket_sim-06d5cc3b-1dc2-4c32-84ee-07c81393223f`
- run_id: `run-c6b8bfbe1b7d`
- agent: `codex-001`
- updated_at: `2026-06-11T07:03:48Z`

## SICKR simulation marker

- ticket: `ticket_sim-2c0a1bfe-2095-4140-a999-e88007ff61eb`
- run_id: `run-7523574e4223`
- agent: `codex-001`
- updated_at: `2026-06-11T22:50:50Z`

## SICKR simulation marker

- ticket: `ticket_sim-4ac7018f-2929-4144-9b77-f8d0095ececb`
- run_id: `run-76aadd7a66f4`
- agent: `codex-001`
- updated_at: `2026-06-12T19:43:30Z`

## SICKR simulation marker

- ticket: `ticket_sim-e6ad4739-a445-473b-b24a-e5f444682dab`
- run_id: `run-4064ff26582f`
- agent: `codex-001`
- updated_at: `2026-06-12T20:15:57Z`

## SICKR simulation marker

- ticket: `ticket_sim-12f8573f-8def-4716-8dde-497efc17f2e1`
- run_id: `run-39e0e998484d`
- agent: `codex-001`
- updated_at: `2026-06-12T20:18:36Z`

## SICKR simulation marker

- ticket: `ticket_sim-a2f0ed66-0a48-43e3-8795-0ef09d4fe454`
- run_id: `run-50d83404c37c`
- agent: `claude-001`
- updated_at: `2026-06-12T20:20:44Z`

## SICKR simulation marker

- ticket: `ticket_sim-87d82f7d-35ee-4185-a81e-056dd2b8fd7a`
- run_id: `run-e2519267d859`
- agent: `codex-001`
- updated_at: `2026-06-12T20:20:37Z`
