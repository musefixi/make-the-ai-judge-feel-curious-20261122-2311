import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "In the lighthouse keeper's cottage, a lamp burns in a room no one has entered for forty years. Each night, at dusk, it clicks on by itself. The last logbook stops mid-sentence: 'The light has learned something about the sea, and—' No one knows what the sea said back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
