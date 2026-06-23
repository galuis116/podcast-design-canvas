# Transcript Search Navigation

Transcript search should help creators find important moments in long episodes without scrubbing the timeline manually.

## User Goal

A creator should be able to search names, topics, glossary terms, sponsor mentions, and repeated phrases, then jump directly to the relevant episode moments.

## Search Inputs

Support searches for:

- exact words
- approved glossary terms
- speaker names
- sponsor names
- chapter titles
- segment names
- corrected caption text

Search should use the reviewed transcript where available, not only the first machine transcript.

## Results

Each result should show:

- timestamp
- speaker
- short surrounding quote
- chapter or segment context
- caption confidence when relevant
- whether the term has been corrected by the glossary

Results should jump to the episode preview with a small lead-in.

## Filters

Useful filters include:

- speaker
- chapter
- segment
- reviewed or unreviewed
- caption issue present
- visual moment present

## Workflow Connections

Search results should stay connected to the workflow that already owns the decision:

- glossary corrections route to `docs/transcript-glossary.md` Application when a repeated term needs one approved spelling
- speaker-name or wrong-voice hits open `docs/speaker-attribution-review.md` Creator Controls or Review States when the result is attached to the wrong speaker
- chapter and segment hits open `docs/episode-chapter-markers.md` Creator Controls or Publish Readiness when a result suggests a weak boundary or title
- preview jumps preserve the viewing context described in `docs/long-form-navigation.md` Playback Continuity instead of resetting the creator's place
- caption-related hits open the relevant step in `docs/audio-caption-quality-review.md` Review Flow when the result reflects an unresolved transcript issue
- pinned transcript moments feed `docs/clip-candidate-review.md` Candidate Signals and Review Cards when a searched line should become a reusable short clip

## Creator Actions

From a result, the creator should be able to:

- jump to the moment with the current layout and speaker context
- apply a glossary correction across repeated matches
- send a speaker-label problem into attribution review
- mark a chapter title or boundary for review
- pin the moment as a clip candidate
- send the moment into caption review
- return to the previous search without losing filters

## Saved Searches

A creator who runs the same kind of search repeatedly should be able to save it instead of retyping the term and rebuilding filters each time.

A saved search should keep:

- a creator-given name
- the search term or glossary term it was built from
- the filters that were active when it was saved
- whether it is pinned to the show or kept on this episode only

Saving a search should not freeze its results. Each saved search re-runs against the current episode's reviewed transcript when the creator opens it, so matches reflect the latest corrections rather than a stale snapshot.

Each saved search should show one freshness status, and that status is always exactly one of:

- never run on this episode — saved on the show but not yet opened against the current transcript
- up to date — last run after the most recent transcript correction
- stale — the transcript changed since the last run, so the match count may be out of date

Separately from that status, a saved search can carry independent flags that may appear together:

- pinned to the show — offered automatically on every new episode of the show
- has new matches — found results not present the last time it was run
- empty on this episode — produced no matches in the current transcript

Pinning belongs to the show, so a pinned search travels with the show template, while an unpinned search stays scoped to the episode where it was saved.

From the saved search list, the creator should be able to:

- re-run a saved search against the current episode and refresh its match count
- rename a saved search or adjust its filters and save the change
- pin a saved search to the show or unpin it back to this episode only
- open a saved search's results without losing the filters it was saved with
- remove a saved search the creator no longer needs

## Maintainer Acceptance Notes

Accept work that makes long-form transcript navigation useful for editing, captions, chapters, and visual moments. Close work that treats search as a generic text box disconnected from the episode preview and speaker context.
