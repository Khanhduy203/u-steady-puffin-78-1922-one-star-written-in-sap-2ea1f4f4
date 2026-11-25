// One Star, Written in Sap — a houseplant's one-star review of its human.
// The grader runs `node main.ts` on Node 22; this file uses only node builtins
// and writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output).
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const ENTRY =
  "He moved me six times this month chasing 'the vibe', and every new spot is somehow darker than the last — one star, I photosynthesise out of spite now.";

const lines = ENTRY.split("\n");
if (lines.length !== 1 || ENTRY.length < 1 || ENTRY.length > 279) {
  console.error(
    `entry must be exactly one line of 1-279 characters (got ${lines.length} line(s), ${ENTRY.length} chars)`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
