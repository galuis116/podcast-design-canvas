# Publish Destination Presets

Destination presets should translate export settings into publishing outcomes creators understand.

## User Goal

A creator should be able to choose where the episode is going and get sensible defaults for video, audio, captions, metadata, and thumbnail packaging.

## Relationship To Export Flow

Destination choice should shape defaults across:

- metadata fields in `docs/episode-metadata-publishing.md`
- thumbnail requirement in `docs/thumbnail-cover-frame.md`
- caption behavior in `docs/audio-caption-quality-review.md`
- review watermark in `docs/client-review-copy-flow.md`
- sponsor disclosure in `docs/sponsor-placement-review.md`
- final readiness in `docs/publish-checklist.md` and `docs/export-readiness-review.md`
- package delivery in `docs/export-package-handoff.md`

Presets should describe publishing outcomes, not encoder menus.

## Destinations

Support common long-form podcast destinations:

- YouTube full episode
- private client review
- archive master
- audio-only podcast backup
- sponsor approval copy
- internal team review

Each destination should describe what will be included in the final package.

## Preset Effects

Destination presets can set:

- video size
- audio mix target
- caption behavior
- thumbnail requirement
- metadata fields
- watermark or review label
- file naming
- export readiness checks

Advanced settings can be available, but the default flow should not require render expertise.

## Creator Controls

Choosing a destination should stay a publishing decision, not an encoder configuration step. The creator should be able to:

- choose a destination preset and see the publishing outcomes it sets before exporting
- override a single default, such as caption behavior or thumbnail requirement, without leaving the preset
- prepare more than one destination for the same episode, such as a YouTube full episode and a sponsor approval copy
- save a preferred destination as the show's default for future episodes
- switch destinations after review and see which checklist items reopen as a result
- keep advanced render settings available but out of the default path

Destination changes should describe the publishing consequence, not raw setting names.

## Multiple Destinations

When the same episode is prepared for more than one destination, each destination should keep the publishing outcomes its own preset describes rather than collapsing everything into one shared set of settings. A full episode and a sponsor approval copy of the same recording should not have to agree on caption behavior, watermark, or file naming.

To keep this unambiguous, the creator should pick exactly one primary destination per episode:

- the primary destination is a single choice and cannot be two destinations at once
- the primary destination is what the show's saved default applies to and what the main readiness summary speaks about first
- every other prepared destination is an additional destination, and any number of these can be turned on alongside the primary

Additional destinations should be independent of each other. Turning on a sponsor approval copy should never force an archive master on or off, and removing one additional destination should leave the rest untouched.

When two prepared destinations would set the same setting differently, that is not a conflict to resolve into one winner. Each destination should produce its own package using its own preset, so the creator sees per-destination outcomes such as "the full episode ships with chapter metadata; the archive copy ships without it" instead of a single reconciled value. Where a setting genuinely must be shared, such as a correction made to the underlying recording, the change should flow to every prepared destination and the consequence should be described for each one.

A single override should stay scoped to the destination it was made on. Overriding caption behavior on the sponsor approval copy should not quietly change the full episode, and the creator should be able to see which destination an override belongs to.

## Review States

Before export, show what differs from the recommended preset:

- missing thumbnail
- captions excluded
- metadata incomplete
- review watermark disabled
- sponsor disclosure missing
- archive quality reduced

Each state should explain the publishing consequence, such as "YouTube export will ship without chapter metadata" rather than listing setting names.

## Checklist Handling

The `destination preset selected` item in `docs/publish-checklist.md` should turn ready only after the creator chooses a destination and reviews the visible consequences of that preset.

If the destination changes after other review work is complete, the checklist should reopen any affected items rather than silently leaving the old destination marked ready.

Reopened items can include:

- thumbnail requirements
- metadata fields
- review watermark behavior
- sponsor disclosure expectations
- final package contents

Checklist warnings should use the consequence language above, not generic settings errors.

## Maintainer Acceptance Notes

Accept work that makes export choices map to real publishing destinations. Close work that exposes raw encoder menus as the primary experience or treats every destination like the same generic download.
