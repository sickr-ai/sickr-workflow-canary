import { readFile } from "node:fs/promises";
import { join } from "node:path";

const LOG_LINE_PATTERN = /^(?<timestamp>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z) \| (?<event>[a-z][a-z0-9-]*) \| run_id=(?<runId>[A-Za-z0-9._:-]+)$/;

export function parseCanaryLogLine(line) {
  const trimmed = String(line ?? "").trim();
  const match = LOG_LINE_PATTERN.exec(trimmed);
  if (!match?.groups) {
    return { ok: false, reason: "log line must match '<iso8601> | <event> | run_id=<id>'" };
  }
  return {
    ok: true,
    timestamp: match.groups.timestamp,
    event: match.groups.event,
    runId: match.groups.runId,
  };
}

export function latestCanaryEvent(logText) {
  const lines = String(logText ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("- "));
  if (lines.length === 0) {
    return { ok: false, reason: "no simulation log entries found" };
  }
  return parseCanaryLogLine(lines.at(-1));
}

export function validateSimulationMarker({ readmeText, logText }) {
  const hasMarker = String(readmeText ?? "").includes("## SICKR simulation marker");
  const latest = latestCanaryEvent(logText);
  if (!hasMarker) {
    return { ok: false, reason: "README.md is missing the SICKR simulation marker section" };
  }
  if (!latest.ok) return latest;
  if (latest.event !== "validate-pass") {
    return { ok: false, reason: `latest canary event is ${latest.event}, expected validate-pass` };
  }
  return {
    ok: true,
    runId: latest.runId,
    timestamp: latest.timestamp,
  };
}

export async function validateRepository(rootDir = process.cwd()) {
  const [readmeText, logText] = await Promise.all([
    readFile(join(rootDir, "README.md"), "utf8"),
    readFile(join(rootDir, "CANARY_LOG.md"), "utf8"),
  ]);
  return validateSimulationMarker({ readmeText, logText });
}
