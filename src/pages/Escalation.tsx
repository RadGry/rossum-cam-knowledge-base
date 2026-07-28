import { FocusHeader, SectionHead, RunSheet, RossumReality, SourcesForArea } from '../components/FocusArea'

const TRIAGE = [
  { name: 'Severity', note: 'How badly is the customer blocked right now — can they work at all?' },
  { name: 'Account value', note: 'What is at stake commercially — ARR, expansion, reference weight.' },
  { name: 'Health', note: 'How much goodwill is in the bank, and how close to the edge is this account.' },
]

const RUN_SHEET = [
  {
    title: 'Triage on severity × value × health',
    body: 'Decide the response: mobilise now, route to support, or hold. Loudness is not an input — a calm sev-1 outranks an angry cosmetic bug.',
  },
  {
    title: 'Classify it honestly — and say which',
    body: 'Is this a fix, a roadmap item, or the current reality? Name it out loud. Most damage comes from letting a customer believe a "reality" is a "fix coming soon".',
  },
  {
    title: 'Speak the client’s language',
    body: 'Translate into their terms — STP rate, exception rate, severity tiers — not internal ticket status. They should hear that you understand the operational impact.',
  },
  {
    title: 'Reset expectations where no fix exists',
    body: 'When it is reality or a distant roadmap item, say so plainly and reset. A straight "no, but here is the workaround" beats an over-promise that fails next month.',
  },
  {
    title: 'Convert via a one-off TSA consultation',
    body: 'Where a configuration change would resolve it, route to a paid technical consult. It fixes the problem and can seed a services conversation.',
  },
]

export default function Escalation() {
  return (
    <article>
      <FocusHeader
        stage="adopt"
        title="Escalation & De-escalation"
        lede={
          <>
            The daily reality of the role. Proportional response and honest
            expectation management &mdash; being straight about what is a fix,
            what is roadmap, and what is just how it works.
          </>
        }
      />

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Proportional response beats loudest-wins" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            Deploy effort in proportion to what is actually at stake &mdash; triage
            by severity, account value, and health, not by the volume of the
            complaint. The angriest email is rarely the biggest risk.
          </p>
          <p>
            The research on service loyalty is blunt &mdash; Dixon, Toman &amp;
            DeLisi&rsquo;s <em>The Effortless Experience</em> finds that customers
            reward <span className="font-medium">reduced effort</span> and
            straight answers far more than manufactured delight. Being honest
            about a limitation builds more loyalty than over-promising a fix.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {TRIAGE.map((t) => (
            <div key={t.name} className="rounded-md border border-hairline bg-card p-4">
              <div className="text-sm font-semibold text-ink">{t.name}</div>
              <p className="mt-2 text-sm leading-snug text-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="The escalation run-sheet" />
        <RunSheet steps={RUN_SHEET} />

        <RossumReality>
          Thin support; many commercial accounts have no TSA; the engine can
          misread values; a release can break a working setup; finance teams are
          under month-end pressure. Calibrate accordingly &mdash; &ldquo;can&rsquo;t
          log in&rdquo; is a sev-1; &ldquo;wrong value after training&rdquo; is
          not, and saying so plainly is part of the job.
        </RossumReality>
      </div>

      <SourcesForArea
        ids={[]}
        notes={[
          <>
            Dixon, Toman &amp; DeLisi, <em>The Effortless Experience</em> (book,
            Portfolio/Penguin, 2013).
          </>,
          <>
            <span className="font-medium text-ink">To acquire:</span> Chris Voss,{' '}
            <em>Never Split the Difference</em> (book).
          </>,
        ]}
      />
    </article>
  )
}
