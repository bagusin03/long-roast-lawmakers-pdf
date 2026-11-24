// The Long Roast: Lawmakers and the File They Cannot Convert
// make.fun bounty u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// One satirical sentence (<=320 chars) roasting lawmakers who would regulate
// AI, crypto or the internet but cannot convert a file to PDF.
// The program is fully offline and deterministic: it writes the same single
// sentence to /output/entry.txt on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The committee votes to regulate artificial intelligence this afternoon, just as soon as someone shows the chairman — for the ninth time this week — which button turns his speech into a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
