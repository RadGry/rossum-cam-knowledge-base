import ValueChain from '../components/ValueChain'
import { SectionHead, RunSheet, RossumReality, SourcesForArea } from '../components/FocusArea'
import { MiniLabel } from '../components/ui'
import Cite from '../components/Cite'

const RUN_SHEET = [
  {
    title: 'Kick off in week 1',
    body: 'Meet the team while the memory of buying is fresh. Set the tone: this is a dated plan to a number, not an open-ended implementation.',
  },
  {
    title: 'Define success criteria in numbers',
    body: 'Target STP %, hours saved, documents automated — the specific figures that will mean "this worked". Vague goals cannot be reviewed later.',
  },
  {
    title: 'Capture the pre-Rossum baseline',
    body: 'Measure the before: current handling time, cost per document, error rate. Without a baseline there is no value delta to prove at renewal.',
  },
  {
    title: 'Build a Mutual Action Plan',
    body: 'A shared MAP with owners and dates all the way to first value. Both sides sign up to the milestones; it is the contract for the onboarding.',
  },
  {
    title: 'Name a champion and a second contact',
    body: 'Single-threaded relationships die when the person leaves. Line up a champion and a backup from the start.',
  },
  {
    title: 'Set the review cadence',
    body: 'Agree how often you meet and what each review covers, running straight through go-live into the value-review rhythm.',
  },
]

const HANDOFF = [
  'A configured and trained engine — the models and rules Professional Services set up.',
  'The agreed success criteria and the pre-Rossum baseline, in numbers.',
  'The named champion and second contact, with the relationship already warm.',
  'Known risks and open items — what is fragile, what is unfinished, what to watch.',
]

export default function Onboarding() {
  return (
    <article>
      <header className="max-w-2xl">
        <MiniLabel>Focus area</MiniLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Onboarding &amp; Time-to-Value
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          The hinge of the value chain. Gross retention is won or lost here,
          before the account is even yours — so you are present from day one and
          you inherit cleanly at go-live.
        </p>
      </header>

      {/* This page carries the full graphic, not just the mini-map. */}
      <div className="mt-8 rounded-lg border border-hairline bg-card p-5 sm:p-7">
        <ValueChain highlight="onboard" />
      </div>

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Early activation predicts retention" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            Early activation and time-to-first-value are the strongest
            predictors of gross retention. A customer who reaches real value
            quickly survives; one who stalls in implementation is already at
            risk, long before the renewal conversation.
            <Cite id="kth-saas-retention" />
          </p>
          <p>
            The lever is a dated plan co-owned from day one. When both sides
            sign up to milestones and dates, onboarding stops drifting and starts
            converging on a number.
          </p>
        </div>

        <RossumReality>
          This stage is owned by{' '}
          <span className="font-medium">Professional Services — Caroline Hasl&rsquo;s team</span>{' '}
          — and runs 9 weeks to 12 months. Go-live triggers the account transfer
          to you. Be present from day one and capture the baseline yourself: with
          no CSM downstream, a fumble here is not caught by anyone.
        </RossumReality>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="The Mutual Action Plan run-sheet" />
        <RunSheet steps={RUN_SHEET} />

        <div className="mt-8">
          <div className="mini-label text-accent">Go-live handoff checklist</div>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            What you should inherit from Professional Services at the transfer:
          </p>
          <ul className="mt-4 space-y-2">
            {HANDOFF.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="max-w-2xl text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SourcesForArea
        ids={['kth-saas-retention']}
        notes={[
          <>
            <span className="font-medium text-ink">To acquire:</span> Donna
            Weber, <em>Onboarding Matters</em> (book).
          </>,
        ]}
      />
    </article>
  )
}
