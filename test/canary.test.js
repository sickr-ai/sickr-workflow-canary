import test from "node:test";
import assert from "node:assert/strict";
import {
  latestCanaryEvent,
  parseCanaryLogLine,
  validateRepository,
  validateSimulationMarker,
} from "../src/canary.js";

test("parseCanaryLogLine accepts the simulation validate-pass contract", () => {
  const parsed = parseCanaryLogLine("2026-05-26T04:21:11Z | validate-pass | run_id=202605260421-6e4463");

  assert.equal(parsed.ok, true);
  assert.equal(parsed.timestamp, "2026-05-26T04:21:11Z");
  assert.equal(parsed.event, "validate-pass");
  assert.equal(parsed.runId, "202605260421-6e4463");
});

test("parseCanaryLogLine rejects malformed evidence", () => {
  const parsed = parseCanaryLogLine("validate-pass run_id=missing-timestamp");

  assert.equal(parsed.ok, false);
  assert.match(parsed.reason, /log line must match/);
});

test("latestCanaryEvent ignores historical bullet entries and reads the latest simulation line", () => {
  const parsed = latestCanaryEvent(`# Canary Log

- 2026-05-26T04:21:11Z | validate-pass | run_id=historical
2026-06-11T02:53:52Z | validate-pass | run_id=run-f9d1bf47
`);

  assert.equal(parsed.ok, true);
  assert.equal(parsed.runId, "run-f9d1bf47");
});

test("validateSimulationMarker requires both README marker and validate-pass log", () => {
  const valid = validateSimulationMarker({
    readmeText: "# Canary\n\n## SICKR simulation marker\n",
    logText: "2026-06-11T02:53:52Z | validate-pass | run_id=run-f9d1bf47\n",
  });
  assert.equal(valid.ok, true);

  const missingMarker = validateSimulationMarker({
    readmeText: "# Canary\n",
    logText: "2026-06-11T02:53:52Z | validate-pass | run_id=run-f9d1bf47\n",
  });
  assert.equal(missingMarker.ok, false);
  assert.match(missingMarker.reason, /missing the SICKR simulation marker/);

  const wrongEvent = validateSimulationMarker({
    readmeText: "# Canary\n\n## SICKR simulation marker\n",
    logText: "2026-06-11T02:53:52Z | implement-pass | run_id=run-f9d1bf47\n",
  });
  assert.equal(wrongEvent.ok, false);
  assert.match(wrongEvent.reason, /expected validate-pass/);
});

test("validateRepository validates the checked-out canary fixture", async () => {
  const result = await validateRepository();

  assert.equal(result.ok, true);
  assert.match(result.runId, /^run-|^\d{12}-/);
});
