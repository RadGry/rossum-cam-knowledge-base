import { FocusHeader, SectionHead, RunSheet, SourcesForArea } from '../components/FocusArea'
import Cite from '../components/Cite'

const RUN_SHEET = [
  {
    title: 'Trigger from a value review',
    body: 'The opening comes from proven value, not the calendar. When a review shows the base case delivered, that is the moment headroom becomes credible.',
  },
  {
    title: 'SPICED the need',
    body: 'Situation, Pain, Impact, Critical event, Decision. Structure the conversation so the expansion answers a real, quantified problem — not a quota.',
  },
  {
    title: 'MEDDPICC qualify',
    body: 'For anything complex, qualify hard: Metrics, Economic buyer, Decision criteria and process, Paper process, Identify pain, Champion, Competition. Know it is real before you invest the cycle.',
  },
  {
    title: 'Build the value case',
    body: 'Tie the expansion to numbers the buyer already accepts from the base deployment. Extend the proven ROI; do not start a new argument.',
  },
  {
    title: 'MAP to close',
    body: 'A mutual action plan with owners and dates carries expansion the same way it carried onboarding — to a dated decision.',
  },
]

const MOTIONS = [
  { name: 'More volume', note: 'More documents, more entities, higher tiers of the same use case.' },
  { name: 'More features', note: 'Add-ons and capabilities that deepen the existing deployment.' },
  { name: 'Tier upgrade', note: 'Move up the plan as scale and reliance grow.' },
  { name: 'New use cases', note: 'AP → AR, order management, purchase orders — new document flows.' },
  { name: 'Mother-company play', note: 'Land in a subsidiary, expand to the parent (Walt → DoorDash).' },
  { name: 'Ecosystem cross-sell', note: 'Coupa-ecosystem adjacencies where Rossum already fits.' },
]

export default function Expansion() {
  return (
    <article>
      <FocusHeader
        stage="expand"
        title="Expansion"
        lede={
          <>
            Growth is a motion, not a wait. A healthy book expands past 100% net
            &mdash; deliberately, from proven value, rather than by hoping the
            customer asks.
          </>
        }
      />

      {/* THE THEORY */}
      <div className="mt-14">
        <SectionHead label="The theory" title="Expand only from proven value" />
        <div className="max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-ink">
          <p>
            Winning by Design&rsquo;s <span className="font-medium">Bow-Tie</span>{' '}
            gives retention and expansion equal weight to acquisition &mdash; the
            recurring-revenue engine is what happens <em>after</em> the first
            sale. Expansion is a core motion, not an afterthought.
            <Cite id="wbd-bowtie" />
          </p>
          <p>
            <span className="font-medium">SPICED</span> structures the discovery
            conversation so an expansion answers a real need;
            <Cite id="wbd-spiced" /> <span className="font-medium">MEDDPICC</span>{' '}
            qualifies the complex deals so you spend cycles only where they will
            close.
            <Cite id="meddpicc" />
          </p>
          <p>
            The precondition under all of it: expand only from{' '}
            <span className="font-medium">proven value</span>. Without a delivered
            base case, an expansion is just an upsell the customer will remember
            resenting.
          </p>
        </div>
      </div>

      {/* DO THIS */}
      <div className="mt-16">
        <SectionHead label="Do this" title="The expansion play" />
        <RunSheet steps={RUN_SHEET} />

        <div className="mt-8">
          <div className="mini-label text-accent">The motions</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MOTIONS.map((m) => (
              <div key={m.name} className="rounded-md border border-hairline bg-card p-4">
                <div className="text-sm font-semibold text-ink">{m.name}</div>
                <p className="mt-2 text-sm leading-snug text-muted">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SourcesForArea ids={['wbd-bowtie', 'wbd-spiced', 'meddpicc']} />
    </article>
  )
}
