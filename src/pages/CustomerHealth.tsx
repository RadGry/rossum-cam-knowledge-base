import { Link } from 'react-router-dom'
import { MiniLabel } from '../components/ui'
import Cite from '../components/Cite'

/* The three health dimensions, mapped to Rossum signals. */
const DIMENSIONS = [
  {
    label: 'Relationship',
    source: 'Salesforce · Gong',
    detail:
      'Champion strength, contact coverage, exec sponsorship, sentiment from call notes.',
  },
  {
    label: 'Usage',
    source: 'Tableau',
    detail: 'Volume trend, straight-through-processing (STP) rate, exception rate.',
  },
  {
    label: 'Value',
    source: 'Value model',
    detail: 'Hours and € saved against the baseline captured at go-live.',
  },
]

/* Gainsight DEAR → what it measures. */
const DEAR = [
  { k: 'D', name: 'Deployment', note: 'Is the product live and configured for the use case?' },
  { k: 'E', name: 'Engagement', note: 'Are the right people showing up and responsive?' },
  { k: 'A', name: 'Adoption', note: 'Is it used broadly and in the way that creates value?' },
  { k: 'R', name: 'ROI', note: 'Is measurable value being realized and acknowledged?' },
]

const RUN_SHEET = [
  {
    title: 'Score the three dimensions',
    body: 'For every account, score Relationship, Usage and Value on a common scale. Pull relationship from Salesforce and Gong, usage from Tableau (volume, STP rate, exception rate), and value from the hours/€ model.',
  },
  {
    title: 'Weight and roll into one number',
    body: 'Combine the three into a single health score. Value carries the most weight — an account can be busy and friendly and still not saving anyone time.',
  },
  {
    title: 'Place it on the Cockpit health axis',
    body: 'Plot the score on the health axis of the AM Cockpit, against potential. That placement drives the segment — Grow, Rescue & Grow, Retain, or Stabilize — and therefore where your hours go.',
  },
  {
    title: 'Re-score on a cadence, watch the delta',
    body: 'Refresh monthly. The movement matters more than the level: a Retain account sliding on usage is an early warning long before anyone complains.',
  },
]

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-5">
      <MiniLabel>{label}</MiniLabel>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
    </div>
  )
}

export default function CustomerHealth() {
  return (
    <article>
      <header className="max-w-2xl">
        <MiniLabel>Focus area</MiniLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Customer Health
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          Measure health, not happiness. Happiness tells you how the last
          conversation went. Health tells you whether the account will still be
          here &mdash; and paying more &mdash; next year.
        </p>
      </header>

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Health is a leading, diagnostic signal" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            Customer health is a <em>formative</em> metric &mdash; it is
            constituted by its parts rather than reflected by them. Three
            components make it up: relationship quality, product usage, and
            value realization. Together they are the pulse of a customer-success
            strategy.
            <Cite id="hochstein-2023" />
          </p>
          <p>
            Happiness is a <span className="font-medium">lagging</span> signal:
            by the time an NPS drops, the cause is months old. Health is{' '}
            <span className="font-medium">leading and diagnostic</span> &mdash;
            it moves first and it tells you <em>which</em> component is failing,
            so you can act before renewal is at risk.
          </p>
          <p>
            To operationalise it, use Gainsight&rsquo;s{' '}
            <span className="font-medium">DEAR</span> framework &mdash;
            Deployment, Engagement, Adoption, ROI &mdash; which correlates with
            net revenue retention.
            <Cite id="gainsight-dear" />
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DEAR.map((d) => (
            <div
              key={d.k}
              className="rounded-md border border-hairline bg-card p-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-accent">{d.k}</span>
                <span className="text-sm font-semibold text-ink">{d.name}</span>
              </div>
              <p className="mt-2 text-sm leading-snug text-muted">{d.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="Score every account, roll into one number" />

        {/* Dimension → signal mapping */}
        <div className="overflow-x-auto rounded-md border border-hairline">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-hairline">
                <th className="px-4 py-2.5 mini-label">Dimension</th>
                <th className="px-4 py-2.5 mini-label">Signal source</th>
                <th className="px-4 py-2.5 mini-label">What you read</th>
              </tr>
            </thead>
            <tbody>
              {DIMENSIONS.map((row) => (
                <tr key={row.label} className="border-b border-hairline last:border-0">
                  <td className="px-4 py-3 font-semibold text-ink">{row.label}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-muted">{row.source}</td>
                  <td className="px-4 py-3 text-muted">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Run-sheet */}
        <ol className="mt-6 space-y-4">
          {RUN_SHEET.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-hairline text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <div className="max-w-2xl">
                <div className="text-[0.95rem] font-semibold text-ink">{step.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          The output is a single number on the{' '}
          <span className="font-medium text-ink">Cockpit health axis</span>.
          Everything else &mdash; segment, priority, cadence &mdash; follows
          from where the account lands.
        </p>
      </div>

      {/* SOURCES FOR THIS AREA */}
      <div className="mt-16">
        <SectionHead label="Sources for this area" title="" />
        <ul className="space-y-3">
          <li className="text-sm">
            <span className="text-ink">
              Hochstein et al. (2023). Customer success management: A formative
              measure and nomological validation.
            </span>{' '}
            <span className="text-muted">
              International Journal of Research in Marketing.
            </span>
          </li>
          <li className="text-sm">
            <span className="text-ink">
              Gainsight. The DEAR Framework for Customer Health Scoring.
            </span>{' '}
            <span className="text-muted">Practitioner eBook.</span>
          </li>
        </ul>
        <Link
          to="/sources"
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          Full reference &amp; links on the Sources page &rarr;
        </Link>
      </div>
    </article>
  )
}
