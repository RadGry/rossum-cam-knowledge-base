import { FocusHeader, SectionHead, RunSheet, SourcesForArea } from '../components/FocusArea'
import Cite from '../components/Cite'

/* The four Cockpit segments — health × potential. */
const SEGMENTS = [
  { name: 'Grow', dot: 'bg-seg-grow', text: 'text-seg-grow', note: 'High health, high potential — invest.' },
  { name: 'Rescue & Grow', dot: 'bg-seg-rescue', text: 'text-seg-rescue', note: 'Low health, high potential — fix, then grow.' },
  { name: 'Retain', dot: 'bg-seg-retain', text: 'text-seg-retain', note: 'High health, low potential — hold the line.' },
  { name: 'Stabilize', dot: 'bg-seg-stabilize', text: 'text-seg-stabilize', note: 'Low health, low potential — steady, low-touch.' },
]

const LISTS = [
  {
    name: 'Renewal shortlist',
    detail: 'Everything renewing this quarter. Enter each with a value delta in hand — no surprises.',
  },
  {
    name: 'Real-expansion list',
    detail: 'Accounts with proven value and headroom. A genuine need you can name, not a hopeful upsell.',
  },
  {
    name: 'Route-to-support list',
    detail: 'Reactive work that does not move a number. Hand it off cleanly; do not let it eat proactive hours.',
  },
]

const RUN_SHEET = [
  {
    title: 'Segment the whole book',
    body: 'Place every account on health × potential. That lands it in one of four segments and sets the default posture — invest, rescue, hold, or steady.',
  },
  {
    title: 'Triage weekly into three lists',
    body: 'Once a week, sort the accounts that need attention into the renewal shortlist, the real-expansion list, and the route-to-support list. Everything else waits.',
  },
  {
    title: 'Rank by uplift, not by risk or volume',
    body: 'Order each list by where your hours actually move the number — the accounts that will respond to intervention — not by who is loudest or who looks most likely to churn regardless.',
  },
  {
    title: 'Spend the week top-down',
    body: 'Work the ranked lists from the top. Protect the block; the point of the sort is to stop the day being set by whoever emails first.',
  },
]

export default function Prioritisation() {
  return (
    <article>
      <FocusHeader
        stage="adopt"
        title="Prioritisation"
        lede={
          <>
            A hundred accounts, one of you, and no CSM. Prioritisation is the
            whole game: deciding where the hours go so the ones that move the
            number get them.
          </>
        }
      />

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Target by uplift, not by risk" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            The intuitive move &mdash; pour effort into the highest-risk accounts
            &mdash; is often wasted. Ascarza&rsquo;s <em>retention futility</em>{' '}
            result shows that targeting by churn risk frequently fails: many
            high-risk customers will leave whatever you do, and some of the
            effort even backfires.
            <Cite id="ascarza-2018-futility" />
          </p>
          <p>
            The metric that matters is <span className="font-medium">uplift</span>{' '}
            &mdash; who will <em>respond</em> to your intervention. Prioritise the
            accounts where your time changes the outcome, not the ones with the
            scariest risk score.
            <Cite id="ascarza-2018-enhanced-retention" />
          </p>
          <p>
            Sorting the book makes this operational. Two axes &mdash; health and
            potential &mdash; put every account into one of four segments, which
            is exactly what the AM Cockpit does.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {SEGMENTS.map((s) => (
            <div key={s.name} className="rounded-md border border-hairline bg-card p-4">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                <span className={`text-sm font-semibold ${s.text}`}>{s.name}</span>
              </div>
              <p className="mt-2 text-sm leading-snug text-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="Weekly triage into three lists" />

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {LISTS.map((l) => (
            <div key={l.name} className="rounded-md border border-hairline bg-card p-4">
              <div className="text-sm font-semibold text-ink">{l.name}</div>
              <p className="mt-2 text-sm leading-snug text-muted">{l.detail}</p>
            </div>
          ))}
        </div>

        <RunSheet steps={RUN_SHEET} />

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          The sort lives in the{' '}
          <span className="font-medium text-ink">AM Cockpit</span> — the
          segment an account lands in is what turns a hundred names into a
          week&rsquo;s plan.
        </p>
      </div>

      <SourcesForArea
        ids={['ascarza-2018-futility', 'ascarza-2018-enhanced-retention']}
        notes={[
          <>
            Free preprint of &ldquo;Retention Futility&rdquo; (SSRN):{' '}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2759170"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent hover:underline"
            >
              papers.ssrn.com ↗
            </a>
          </>,
        ]}
      />
    </article>
  )
}
