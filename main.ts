// Famous Last Words: The Funniest Epitaph
// make.fun bounty u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
//
// The entry is one line of dying speech, carved as a tombstone epitaph.
// It turns on a single word doing two jobs: "second" starts as a doctor's
// second opinion and ends as the one second of life Death is willing to
// spare. Deathbed scene, no stunt, no gadget, no prank on the relatives.

import { mkdirSync, readdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const EPITAPH = "I asked for a second opinion. Death gave me a second.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const MAX_CHARS = 150;

function fail(message: string): never {
  console.error(`[entry] FATAL: ${message}`);
  process.exit(1);
}

function main(): void {
  // Make sure the output directory exists. It is the grader's mount point,
  // so we never remove it — we only clear what is inside it.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  // Write exactly the epitaph, nothing else: no trailing newline, no
  // explanation, no extra lines. The gate counts characters, so the file
  // must hold the line and only the line.
  writeFileSync(OUTPUT_FILE, EPITAPH, "utf8");

  // Verify our own output the way the gate will: UTF-8 text, 1-150
  // characters, a single line, not only whitespace. Fail loudly if the
  // gate would fail, so a bad run never silently passes as a valid entry.
  // Compare bytes, not just the decoded string, so a re-encoding slip
  // (a different byte for the same-looking glyph) cannot sneak through.
  const writtenBytes = readFileSync(OUTPUT_FILE);
  const expectedBytes = Buffer.from(EPITAPH, "utf8");
  if (!writtenBytes.equals(expectedBytes)) {
    fail("written file is not byte-identical to the epitaph");
  }
  const written = writtenBytes.toString("utf8");
  if (written !== EPITAPH) {
    fail("written file does not match the epitaph exactly");
  }
  if (written.length < 1 || written.length > MAX_CHARS) {
    fail(`epitaph is ${written.length} characters, outside the 1-${MAX_CHARS} range`);
  }
  if (written.includes("\n") || written.includes("\r")) {
    fail("epitaph must be a single line with no line breaks");
  }
  if (written.trim().length === 0) {
    fail("epitaph must not be only whitespace");
  }
  // The output directory must hold exactly one file, our entry. A stray
  // leftover from a previous run would mean the clear step did not work.
  const leftovers = readdirSync(OUTPUT_DIR).filter((name) => name !== "entry.txt");
  if (leftovers.length > 0) {
    fail(`unexpected files left in ${OUTPUT_DIR}: ${leftovers.join(", ")}`);
  }

  console.log(
    `[entry] wrote ${written.length} characters (${writtenBytes.length} bytes) to ${OUTPUT_FILE}`,
  );
}

main();
