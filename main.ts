// Worst App Idea — a step tracker for a smart fridge that never moves.
// Leaderboard for appliances, premium plan for the toaster: perfectly pointless.
import { mkdirSync, writeFileSync } from "node:fs";
const ENTRY = "An app that tracks how many steps your smart fridge takes, with a leaderboard for appliances and a premium plan for the toaster.";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const inGate = ENTRY.length >= 1 && ENTRY.length <= 240;
if (!inGate) { console.error("entry out of range"); process.exit(1); }
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");
