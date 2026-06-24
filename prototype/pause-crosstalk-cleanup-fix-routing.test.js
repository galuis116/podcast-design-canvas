"use strict";

// Smoke test: pause / cross-talk cleanup must hand each caption-risk condition off
// to a real fix screen (#583). Caption-risk cross-talk is fixed where captions are
// reviewed, so "Open caption quality review" must be a navigable link to the screen
// that owns the fix, and that owner must be a real prototype. This mirrors the other
// *-fix-routing.test.js guards (e.g. transcript-search-fix-routing.test.js) so a
// future edit cannot silently rename the fix target, drop the hand-off, or point it
// at a screen that no longer exists.
// Run with: `node prototype/pause-crosstalk-cleanup-fix-routing.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.join(__dirname, "..");
const source = fs.readFileSync(path.join(root, "prototype", "pause-crosstalk-cleanup.html"), "utf8");

// The routing map: a flagged condition marked `captionRisk` hands off to the screen
// that owns the caption fix. Each value must be a real prototype file.
const captionFixScreen = "audio-caption-quality-review.html";
const captionFixLabel = "caption quality review";

// A caption-risk condition must exist for the hand-off to ever fire.
assert.ok(
  /captionRisk:\s*true/.test(source),
  "at least one cross-talk condition is marked captionRisk so it routes to the caption fix",
);

// The hand-off is keyed on the caption-risk flag, not hard-coded per moment, so the
// guard catches an edit that drops the flag or stops branching on it.
assert.ok(
  source.includes("kind.captionRisk"),
  "the caption hand-off is driven by the condition's captionRisk flag",
);

// Each flagged condition routes to its declared owning fix screen, named in
// creator-facing copy.
assert.ok(
  source.includes(`fixScreen: "${captionFixScreen}"`),
  `caption-risk cross-talk routes to ${captionFixScreen}`,
);
assert.ok(
  source.includes(`fixLabel: "${captionFixLabel}"`),
  "the caption hand-off names the fix screen in creator-facing copy",
);

// The owning fix screen resolves to a real prototype file.
assert.ok(
  fs.existsSync(path.join(root, "prototype", captionFixScreen)),
  `fix screen ${captionFixScreen} exists as a real screen`,
);

// The hand-off is rendered as a navigable link, not just a status note.
assert.ok(
  source.includes('openLink = document.createElement("a")'),
  "hand-off renders an anchor element",
);
assert.ok(
  source.includes("openLink.href = issue.fixScreen"),
  "hand-off links to the fix screen that owns the fix",
);
assert.ok(
  source.includes('openLink.className = "fix-link"'),
  "hand-off link is class-tagged for styling",
);

console.log("pause / cross-talk cleanup: caption-risk cross-talk opens the caption quality review fix screen");
