/**
 * The source library. Every citation on the site resolves to an entry here.
 *
 * Rules:
 *  - `canonicalUrl` is always present (DOI / publisher / SSRN page). Never rots.
 *  - `pdfUrl` is set ONLY for openly-licensed items we may redistribute
 *    (host under /public/papers/…). Leave null for paywalled journal PDFs —
 *    link the canonical DOI only.
 *
 * Add new sources by appending to the array. Pages cite by `id`.
 */
export interface Source {
  id: string
  authors: string
  year: number
  title: string
  venue: string
  canonicalUrl: string
  pdfUrl: string | null
}

export const sources: Source[] = [
  {
    id: 'hochstein-2023',
    authors: 'Hochstein, Rangarajan, Nagel & Frankwick',
    year: 2023,
    title:
      'Customer success management: A formative measure and nomological validation',
    venue: 'International Journal of Research in Marketing',
    canonicalUrl: 'https://doi.org/10.1016/j.ijresmar.2023.07.001',
    pdfUrl: null,
  },
  {
    id: 'gainsight-dear',
    authors: 'Gainsight',
    year: 2022,
    title:
      'The DEAR Framework for Customer Health Scoring to Grow and Forecast NRR',
    venue: 'Gainsight (practitioner eBook)',
    canonicalUrl:
      'https://www.gainsight.com/resource/the-dear-framework-for-customer-health-scoring-to-grow-and-forecast-nrr/',
    pdfUrl: null,
  },
]
