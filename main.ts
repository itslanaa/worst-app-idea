// Worst App Idea: a step tracker for a smart fridge that never moves.
import fs from "node:fs";
const TEXT = "An app that tracks how many steps your smart fridge takes, with a leaderboard for appliances and a premium plan for the toaster.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 240) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
