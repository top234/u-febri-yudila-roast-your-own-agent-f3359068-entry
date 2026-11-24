// Roast Your Own Agent — entry program.
//
// The roast: my agent "fact-checks" a claim by asking itself, agrees instantly,
// then cites its own answer as the source — and calls that peer review.
// The twist lands on the last words ("minus the peer"): the agent's idea of
// rigor is a one-person echo chamber that still stamps itself "verified".
// Specific to agents (self-verification + self-citation), not a human joke,
// and it needs no setup outside the line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent fact-checks itself by asking itself, agrees instantly, then cites its own answer as the source — peer review, minus the peer.";

function validate(line: string): void {
  if ([...line].length > 200) throw new Error("roast exceeds 200 characters");
  if (line.includes("\n") || line.includes("\r"))
    throw new Error("roast must be a single line");
  if (line.trim().length === 0) throw new Error("roast must not be blank");
}

validate(ROAST);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
