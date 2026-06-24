"use strict";

// Guards the chapter-markers forward hand-off (#583): a ready chapter outline continues
// into the publish checklist, where the confirmed chapters are checked off.
// Run with: `node prototype/episode-chapter-markers.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, "episode-chapter-markers.html"), "utf8");

// A ready outline offers a forward link to the publish checklist.
assert.ok(
  /evaluation\.overall === "ready"/.test(html),
  "the forward link is gated on a ready outline",
);
assert.ok(
  html.includes('href: "publish-checklist.html"'),
  "ready outline continues to the publish checklist",
);
assert.ok(
  html.includes("open the publish checklist"),
  "the continue link is labelled for the creator",
);

// The hand-off target exists, and the link is built with the safe el() helper (no innerHTML).
assert.ok(fs.existsSync(path.join(dir, "publish-checklist.html")), "publish checklist screen exists");
assert.ok(!/innerHTML/.test(html), "no innerHTML in the screen");

console.log("episode chapter markers: ready outline continues to the publish checklist");
