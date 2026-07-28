import { FocusHeader, SectionHead, RunSheet, RossumReality, SourcesForArea } from '../components/FocusArea'
import Cite from '../components/Cite'

/* Leading indicators — watched in Tableau, not the renewal date. */
const INDICATORS = [
  { name: 'Declining usage', note: 'Volume trending down against the baseline.' },
  { name: 'Lapsed cadence', note: 'Reviews slipping, meetings cancelled, replies slowing.' },
  { name: 'Slipping STP', note: 'Automation rate falling — value quietly leaking.' },
  { name: 'Departed champion', note: 'Your sponsor left; the relationship is now single-threaded or worse.' },
]

const RUN_SHEET = [
  {
    title: 'Watch leading indicators in Tableau',
    body: 'Declining usage, lapsed cadence, slipping STP, a departed champion — the signals that move inside the pre-churn window. The renewal date is a lagging fact; do not wait for it.',
  },
  {
    title: 'Run a rolling two-quarter-ahead shortlist',
    body: 'Maintain a list of renewals two quarters out, refreshed continuously. Saves and expansions both take time to set up; the date should never surprise you.',
  },
  {
    title: 'Enter each renewal with a value delta',
    body: 'Baseline → delivered, in hours and €. Walking in with proven value turns a price negotiation into a value conversation.',
  },
  {
    title: 'Prioritise saves by uplift',
    body: 'Not every at-risk account is savable, and not every save is worth the hours. Spend the effort where intervention actually changes the outcome.',
  },
]

export default function Renewal() {
  return (
    <article>
      <FocusHeader
        stage="renew"
        title="Renewal"
        lede={
          <>
            The number the comp plan is built on. Protect the 89% floor and push
            a healthy book past 100% net &mdash; by acting inside the pre-churn
            window, not at the renewal date.
          </>
        }
      />

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Predict early enough to act" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            The value of churn prediction is not the score &mdash; it is having it{' '}
            <em>early enough to act</em>, inside the pre-churn window while
            intervention still works. A perfect prediction delivered at the
            renewal date is worthless.
          </p>
          <p>
            The economics are decisive: a 5% cut in churn can lift profit 25% or
            more, and retaining a customer costs roughly 5&ndash;6&times; less than
            acquiring one. Modern retention practice leans on machine-learning
            models to surface risk in that window.
            <Cite id="mamun-2025" />
          </p>
          <p>
            Know the bar. Median net revenue retention sits near 110% and rises
            with ACV &mdash; so a flat book is already underperforming the market.
            <Cite id="benchmarkit-2025" />
          </p>
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="Watch the signals, not the date" />

        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INDICATORS.map((ind) => (
            <div key={ind.name} className="rounded-md border border-hairline bg-card p-4">
              <div className="text-sm font-semibold text-ink">{ind.name}</div>
              <p className="mt-2 text-sm leading-snug text-muted">{ind.note}</p>
            </div>
          ))}
        </div>

        <RunSheet steps={RUN_SHEET} />

        <RossumReality>
          Renewal is <span className="font-medium">65% of variable comp</span>{' '}
          with an 89% threshold plus accelerators &mdash; so 89% is the floor, not
          the target. A healthy book clears it on leading indicators and expands
          past 100% net.
        </RossumReality>
      </div>

      <SourcesForArea
        ids={['mamun-2025', 'benchmarkit-2025']}
        notes={[
          <>
            He &amp; Ding, ensemble churn-prediction model (<em>Scientific
            Reports</em>) — <span className="italic">canonical link to confirm</span>.
          </>,
        ]}
      />
    </article>
  )
}
