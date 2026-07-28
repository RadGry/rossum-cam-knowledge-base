# Hosted papers

Drop openly-licensed PDFs here. A file is referenced from `src/data/sources.ts`
via its `pdfUrl` (e.g. `pdfUrl: '/papers/winningbydesign-bowtie.pdf'`), and the
Sources page renders a **PDF ↗** link only when `pdfUrl` is set.

**Only host works that are openly licensed for redistribution.** Paywalled
journal PDFs stay `pdfUrl: null` and rely on the canonical (DOI) link.

## Expected files (referenced by sources.ts, not yet committed)

These `pdfUrl`s are set but the files still need to be added — until then the
PDF link 404s:

- `ascarza-2018-enhanced-retention-mgmt-ssrn.pdf` — SSRN 2903548 (open preprint)
- `winningbydesign-bowtie.pdf` — Winning by Design, The Bow-Tie
- `winningbydesign-spiced.pdf` — Winning by Design, SPICED
- `benchmarkit-2025-saas-metrics.pdf` — Benchmarkit 2025 benchmarks

The KTH thesis ([5]) points its `pdfUrl` straight at the open full text on
KTH DiVA, so no local file is needed for it.
