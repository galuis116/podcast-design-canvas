# Destination Crop Previews

Destination crop previews should show creators how the same episode design will look across publishing surfaces before export.

## User Goal

A creator should be able to check whether speakers, captions, logos, thumbnails, and sponsor elements still work when the episode is prepared for different destinations.

## Preview Surfaces

Support previews for:

- wide full episode
- mobile vertical crop
- square social preview
- thumbnail or cover frame
- client review copy
- archive master

The default export path can still prioritize long-form video, but the creator should see when another surface would crop or hide important content.

## Checks

Flag visible issues:

- active speaker is cropped
- captions fall outside safe area
- logo is cut off
- lower-third is unreadable
- sponsor mark conflicts with crop
- title text is too small in thumbnail view

Each issue should link to the affected preview surface and moment.

## Fixes

Offer direct fixes:

- use alternate crop
- move captions for this destination
- simplify thumbnail text
- use safer logo position
- switch layout for cropped output
- export only the long-form master

## Surface States

A creator should be able to tell at a glance which destination surfaces are in good shape and which still need attention, without treating every surface as equally urgent. Each preview surface should carry a clear state:

- ok — content stays inside the safe framing for this surface
- needs attention — a check found a cropped or hidden element
- not targeted — the creator is not publishing to this surface for this episode
- reviewed — the creator checked the surface and accepted how it looks

Keep the controls simple:

- mark which surfaces matter for this episode
- set a surface as not targeted so its checks stop blocking review
- mark a surface reviewed once it looks right
- reopen a surface if the layout or crop changes later

Marking a surface should never alter the long-form master; it only changes which crop previews the creator is actively reviewing. The publishing destination itself is still chosen in `docs/publish-destination-presets.md`, so surface states stay focused on visual framing rather than export settings.

## Maintainer Acceptance Notes

Accept work that helps creators trust destination-specific framing before export. Close work that treats every destination as identical or prioritizes short-form crops over the core long-form episode.
