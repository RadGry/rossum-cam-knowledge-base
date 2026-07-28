import { FocusHeader, SectionHead, RunSheet, SourcesForArea } from '../components/FocusArea'
import Cite from '../components/Cite'

/* Keränen & Jalkala's 5-step value assessment. */
const KERANEN = [
  { n: 1, name: 'Value potential', note: 'What the solution could deliver for this customer.' },
  { n: 2, name: 'Baseline', note: 'The pre-Rossum state — the number to measure against.' },
  { n: 3, name: 'Performance evaluation', note: 'What has actually been delivered so far.' },
  { n: 4, name: 'Long-term realization', note: 'Value compounding over the relationship, not one snapshot.' },
  { n: 5, name: 'Data management', note: 'Keeping the evidence current and defensible.' },
]

const QBR_BLOCKS = [
  { name: 'Executive summary', note: 'Where the account stands, in three lines a sponsor can repeat.' },
  { name: 'KPIs vs the business case', note: 'Delivered results against the numbers the deal was signed on.' },
  { name: 'What drove the results', note: 'The causes — so wins can be repeated and misses fixed.' },
  { name: 'Risks', note: 'What could derail value or renewal, named honestly.' },
  { name: 'Next-quarter goals', note: '3–5 goals with owners — the forward-looking half of the meeting.' },
  { name: 'Next steps', note: 'Who does what by when, captured before anyone leaves the room.' },
]

const RUN_SHEET = [
  {
    title: 'Anchor on the health score',
    body: 'Open on where the account sits and why. The review is a checkpoint on health, not a status update on tickets.',
  },
  {
    title: 'Run the six blocks',
    body: 'Executive summary, KPIs vs the original business case, what drove the results, risks, next-quarter goals with owners, and next steps.',
  },
  {
    title: 'Spend half the time forward-looking',
    body: 'Reporting the past defends nothing on its own. Give at least half the meeting to next quarter — goals, expansion, the plan.',
  },
  {
    title: 'Carry a value delta into every review',
    body: 'Baseline → delivered, in hours and €. The delta is the single most persuasive artifact you own at renewal.',
  },
  {
    title: 'Send a one-page recap within 24 hours',
    body: 'Summary, decisions, owners, dates. It arms your champion to sell the value internally when you are not in the room.',
  },
]

export default function ValueReviews() {
  return (
    <article>
      <FocusHeader
        stage="adopt"
        title="Value Reviews / QBRs"
        lede={
          <>
            Value that is not shown is not counted. The review is the cadence
            where you prove it — defending the renewal and seeding the next
            expansion in the same meeting.
          </>
        }
      />

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Assess value as a process, not an event" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            Keränen &amp; Jalkala frame B2B value assessment as five steps &mdash;
            value potential, baseline, performance evaluation, long-term
            realization, and data management. Value is a process you manage over
            the relationship, not a figure you assert once.
            <Cite id="keranen-jalkala-2013" />
          </p>
          <p>
            A quarterly business review is where that process surfaces. Anchor it
            on the health score, and spend at least half the time looking forward
            &mdash; a review that only reports the past defends nothing.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {KERANEN.map((k) => (
            <div key={k.n} className="rounded-md border border-hairline bg-card p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-accent">{k.n}</span>
                <span className="text-sm font-semibold text-ink">{k.name}</span>
              </div>
              <p className="mt-2 text-sm leading-snug text-muted">{k.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="The six-block QBR" />

        <div className="mb-6 overflow-x-auto rounded-md border border-hairline">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-hairline">
                <th className="px-4 py-2.5 mini-label">Block</th>
                <th className="px-4 py-2.5 mini-label">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {QBR_BLOCKS.map((b, i) => (
                <tr key={b.name} className="border-b border-hairline last:border-0">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-ink">
                    <span className="mr-2 text-accent">{i + 1}</span>
                    {b.name}
                  </td>
                  <td className="px-4 py-3 text-muted">{b.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RunSheet steps={RUN_SHEET} />
      </div>

      <SourcesForArea ids={['keranen-jalkala-2013']} />
    </article>
  )
}
