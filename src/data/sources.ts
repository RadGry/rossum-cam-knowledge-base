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
  {
    id: 'ascarza-2018-futility',
    authors: 'Ascarza',
    year: 2018,
    title:
      'Retention Futility: Targeting High-Risk Customers Might Be Ineffective',
    venue: 'Journal of Marketing Research 55(1)',
    canonicalUrl: 'https://doi.org/10.1509/jmr.16.0163',
    // Published version is paywalled — free preprint is linked in-page, not hosted.
    pdfUrl: null,
  },
  {
    id: 'ascarza-2018-enhanced-retention',
    authors:
      'Ascarza, Neslin, Netzer, Anderson, Fader, Gupta, Hardie, Lemmens, Libai, Neal, Provost & Schrift',
    year: 2018,
    title:
      'In Pursuit of Enhanced Customer Retention Management: Review, Key Issues, and Future Directions',
    venue: 'Customer Needs and Solutions 5',
    canonicalUrl:
      'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2903548',
    pdfUrl: '/papers/ascarza-2018-enhanced-retention-mgmt-ssrn.pdf',
  },
  {
    id: 'kth-saas-retention',
    authors: 'Nabil',
    year: 2018,
    title:
      'Customer retention: Recipe for success in SaaS industries — a case study on a leading B2B SaaS provider',
    venue: 'MSc thesis, KTH Royal Institute of Technology',
    canonicalUrl: 'https://kth.diva-portal.org/smash/record.jsf?pid=diva2:1223723',
    // Open full text hosted by KTH DiVA.
    pdfUrl: 'https://kth.diva-portal.org/smash/get/diva2:1223723/FULLTEXT01.pdf',
  },
  {
    id: 'keranen-jalkala-2013',
    authors: 'Keränen & Jalkala',
    year: 2013,
    title:
      'Towards a framework of customer value assessment in B2B markets: An exploratory study',
    venue: 'Industrial Marketing Management 42(8)',
    canonicalUrl:
      'https://www.sciencedirect.com/science/article/abs/pii/S0019850113001284',
    pdfUrl: null,
  },
  {
    id: 'wbd-bowtie',
    authors: 'Winning by Design',
    year: 2020,
    title: 'The Bow-Tie: A Model for Recurring Revenue',
    venue: 'Winning by Design (blueprint)',
    canonicalUrl: 'https://winningbydesign.com/',
    pdfUrl: '/papers/winningbydesign-bowtie.pdf',
  },
  {
    id: 'wbd-spiced',
    authors: 'Winning by Design',
    year: 2021,
    title: 'The SPICED Framework',
    venue: 'Winning by Design (blueprint)',
    canonicalUrl:
      'https://winningbydesign.com/resources/blueprints/the-spiced-framework/',
    pdfUrl: '/papers/winningbydesign-spiced.pdf',
  },
  {
    id: 'meddpicc',
    authors: 'MEDDICC (Dick Dunkel & Jack Napoli)',
    year: 2021,
    title: 'MEDDPICC — Sales Qualification Methodology',
    venue: 'MEDDICC (practitioner)',
    canonicalUrl: 'https://meddicc.com/',
    pdfUrl: null,
  },
  {
    id: 'mamun-2025',
    authors: 'Mamun',
    year: 2025,
    title:
      'Machine Learning Approaches for Customer Retention: A Systematic Review',
    venue: 'Peer-reviewed review',
    canonicalUrl: 'https://doi.org/10.63125/9b316w70',
    pdfUrl: null,
  },
  {
    id: 'benchmarkit-2025',
    authors: 'Benchmarkit',
    year: 2025,
    title: '2025 SaaS Performance Metrics Benchmarks',
    venue: 'Benchmarkit (industry report)',
    canonicalUrl: 'https://www.benchmarkit.ai/2025benchmarks',
    pdfUrl: '/papers/benchmarkit-2025-saas-metrics.pdf',
  },
]
