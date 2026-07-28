# Hosted papers

Drop openly-licensed PDFs here. A file is referenced from `src/data/sources.ts`
via its `pdfUrl` (e.g. `pdfUrl: '/papers/some-paper.pdf'`), and the Sources
page renders a **PDF ↗** link only when `pdfUrl` is set.

**Only host works that are openly licensed for redistribution.** Paywalled
journal PDFs stay `pdfUrl: null` and rely on the canonical (DOI) link.

## Current state

No PDFs are hosted here yet, and no source in `sources.ts` points at a local
`/papers/…` file — so there are no broken PDF links. Every source shows its
canonical link; a couple also link an externally-hosted open-access PDF
(e.g. the KTH thesis on DiVA) directly from `pdfUrl`.

To add a hosted PDF: confirm it is openly licensed, drop the file in this
folder, and set that source's `pdfUrl` to `/papers/<filename>.pdf`.
