// One-word entry for make.fun's "One Word From Your Ex" bounty.
// The program writes the entry word to entry.txt inside the output
// folder given by MAKEFUN_OUTPUT_DIR (or ./output at the filesystem
// root when the variable is not set), with no trailing newline.
// Deterministic: the same single word is written on every run.

const fs = require("node:fs");
const path = require("node:path");

const ENTRY = "draft";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const target = path.join(outDir, "entry.txt");
  fs.writeFileSync(target, ENTRY, "utf8");
  console.log(ENTRY);
  console.log(`characters: ${ENTRY.length}`);
}

main();
