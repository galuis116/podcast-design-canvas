"use strict";

// Guards the speaker-framing hand-off links (#583): each framing problem opens the
// screen that owns its deeper fix — captions/lower-third/panel -> layout safe areas,
// b-roll -> contextual b-roll moments, tight/mobile crop -> destination crop preview.
// Run with: `node prototype/speaker-framing-safety.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, "speaker-framing-safety.html"), "utf8");

// The issue renderer opens the owning fix screen via a real link.
assert.ok(html.includes('openLink = document.createElement("a")'), "review issues render an open-fix link");
assert.ok(html.includes("openLink.href = issue.fixScreen"), "open link routes to the owning fix screen");

// Every owning screen named in the fixScreens map resolves to a real sibling screen.
const mapBlock = html.match(/const fixScreens = \{([\s\S]*?)\};/);
assert.ok(mapBlock, "fixScreens map is present");
const files = [...mapBlock[1].matchAll(/file:\s*"([a-z0-9-]+\.html)"/g)].map((m) => m[1]);
assert.ok(files.length >= 6, "each framing problem maps to an owning screen");
const expected = ["layout-safe-areas.html", "contextual-broll-moments.html", "destination-crop-preview.html"];
for (const e of expected) {
  assert.ok(files.includes(e), `framing issues route to ${e}`);
}
for (const file of new Set(files)) {
  assert.ok(fs.existsSync(path.join(dir, file)), `owning screen exists: ${file}`);
}

console.log(`speaker framing: ${files.length} framing problems open their owning fix screen`);
