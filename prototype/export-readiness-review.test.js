"use strict";

// Guards the export-readiness hand-off links (#583): each flagged readiness area opens
// the screen that owns its fix — the same connected hand-off used by speaker attribution,
// transcript search, and watch-through review.
// Run with: `node prototype/export-readiness-review.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, "export-readiness-review.html"), "utf8");

// The issue renderer opens the owning fix screen via a real link.
assert.ok(html.includes('openLink = document.createElement("a")'), "issues render an open-fix-screen link");
assert.ok(html.includes("openLink.href = issue.fixScreen"), "open link routes to the owning fix screen");

// Every fixScreen named in the check list resolves to a real sibling screen.
const checkBlock = html.match(/const checkList = \[([\s\S]*?)\];/);
assert.ok(checkBlock, "check list is present");
const fixScreens = [...checkBlock[1].matchAll(/fixScreen:\s*"([a-z0-9-]+\.html)"/g)].map((m) => m[1]);
assert.ok(fixScreens.length >= 5, "most readiness areas open a fix screen");
for (const file of fixScreens) {
  assert.ok(fs.existsSync(path.join(dir, file)), `fix screen exists: ${file}`);
}

// Each status control must carry its own accessible name. Putting aria-label on the
// wrapping <label> does NOT name the inner <select> (a label's accessible name comes
// from its text, not its aria-label), so the aria-label must be on the <select>.
assert.ok(
  /<select data-id="\$\{check\.id\}"[^>]*aria-label=/.test(html),
  "the status select carries its own aria-label (accessible name)",
);
assert.ok(
  !/<label[^>]*aria-label=/.test(html),
  "no <label> carries an aria-label meant for its control",
);

console.log(`export readiness: ${fixScreens.length} readiness areas open their owning fix screen; status control is named`);
