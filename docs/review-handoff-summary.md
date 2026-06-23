# Review Handoff Summary

A review handoff should tell collaborators what needs attention without making them inspect the whole production workspace.

## User Goal

A creator should be able to send a client, teammate, or producer a concise review summary that points to the right episode moments and decisions.

## Relationship To Review Flow

The handoff should summarize open decisions from:

- caption, speaker attribution, and spelling review in `docs/audio-caption-quality-review.md`, `docs/speaker-attribution-review.md`, and `docs/transcript-glossary.md`
- contextual visuals in `docs/contextual-broll-moments.md` and `docs/sponsor-placement-review.md`
- metadata readiness from `docs/episode-metadata-publishing.md`
- thumbnail candidates from `docs/thumbnail-cover-frame.md`
- export warnings from `docs/export-readiness-review.md`
- checklist approvals from `docs/publish-checklist.md`
- client review setup from `docs/client-review-copy-flow.md`

The summary should focus on decisions the reviewer can make, not internal production status.

## Summary Contents

Include:

- episode title and duration
- template and preset used
- review copy status
- unresolved warnings
- moments needing approval
- caption or spelling decisions
- speaker attribution decisions
- sponsor placement status
- metadata readiness
- requested decision deadline

## Moment Links

Every review item should link to the relevant moment:

- caption issue
- speaker attribution fix
- b-roll approval
- sponsor placement
- lower-third question
- chapter title
- thumbnail candidate
- audio concern

Reviewers should not need to search the timeline manually.

## Review States

Use reviewer-facing states:

- ready to approve
- needs decision
- blocked
- already approved
- not relevant for this reviewer

Each state should describe what the reviewer needs to do, such as "Confirm sponsor read timing" or "Choose between two thumbnail candidates."

## Creator Controls

Offer simple actions:

- choose reviewer audience
- add decision note
- set deadline
- send review copy
- resend updated summary
- mark item resolved
- open publish checklist

Avoid exposing encoder settings, render logs, or unrelated workspace tools in the default handoff.

## Audience Fit

Different reviewers need different summaries:

- client approver
- internal producer
- host
- guest
- sponsor reviewer

The product should avoid exposing production details that are not relevant to the selected reviewer.

## Item Freshness

After a summary is sent, the creator may keep editing the episode. Reviewers should be able to trust that what they are looking at still matches the current cut.

Give each review item one freshness status:

- current — the underlying moment has not changed since this summary was sent
- changed since sent — the moment was edited after this summary went out

These two are the only values, and an item is always exactly one of them. Prefer this over finer gradations like "minor edit" versus "major edit," because the reviewer only needs to know whether their earlier look is still valid.

Track separately whether the reviewer has opened the item yet, since that is independent of whether it changed. Combine the two like this:

- changed and already viewed — show the quiet "changed since sent" marker, because the reviewer's earlier decision may now be stale
- changed but not yet viewed — no marker, since the reviewer has no earlier look to invalidate; they will simply see the current version
- current — no marker at all

Surface "changed since sent" as a small inline marker next to the affected item only. When everything a reviewer sees is current, show nothing extra and let the summary read clean. Never interrupt the reviewer with a full-width warning across the summary.

Let the creator decide how much to share when something changes:

- send a fresh summary that clears all markers
- add a short note explaining what changed
- mark a previously resolved item as needing another look

Whoever maintains the episode's edit history decides when an item counts as changed; the summary only reflects that decision.

## Maintainer Acceptance Notes

Accept work that makes episode review easier to hand off and complete. Close work that creates generic status reports, exposes internal pipeline logs, or disconnects review decisions from video moments.
