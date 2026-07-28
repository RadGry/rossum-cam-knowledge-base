import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MiniLabel } from './ui'
import { ValueChainMini, type StageId } from './ValueChain'
import { sources } from '../data/sources'

/* Shared scaffolding for a focus-area page. Every page is:
 *   FocusHeader → you-are-here mini-map → THE THEORY → DO THIS → SOURCES
 * so the template is identical across all areas. */

export function FocusHeader({
  title,
  lede,
  stage,
}: {
  title: string
  lede: ReactNode
  stage: StageId
}) {
  return (
    <>
      <header className="max-w-2xl">
        <MiniLabel>Focus area</MiniLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{lede}</p>
      </header>
      <div className="mt-8">
        <ValueChainMini highlight={stage} />
      </div>
    </>
  )
}

export function SectionHead({ label, title }: { label: string; title?: string }) {
  return (
    <div className={title ? 'mb-5' : 'mb-4'}>
      <MiniLabel>{label}</MiniLabel>
      {title && (
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h2>
      )}
    </div>
  )
}

/** The numbered run-sheet — the operational payload of a DO THIS block. */
export function RunSheet({
  steps,
}: {
  steps: { title: string; body: ReactNode }[]
}) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
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
  )
}

/** A "Rossum reality" callout — ties theory to the specific role. */
export function RossumReality({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-md border border-hairline border-l-2 border-l-accent bg-accent/[0.03] p-4">
      <div className="mini-label text-accent">Rossum reality</div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink">{children}</p>
    </div>
  )
}

/**
 * SOURCES FOR THIS AREA. `ids` resolve against the source library;
 * `notes` carry gap / to-acquire items and extra links that have no
 * canonical library entry yet.
 */
export function SourcesForArea({
  ids,
  notes,
}: {
  ids: string[]
  notes?: ReactNode[]
}) {
  return (
    <div className="mt-16">
      <SectionHead label="Sources for this area" />
      <ul className="space-y-3">
        {ids.map((id) => {
          const s = sources.find((x) => x.id === id)
          if (!s) return null
          return (
            <li key={id} className="text-sm">
              <Link to={`/sources#${id}`} className="text-ink hover:text-accent">
                {s.authors} ({s.year}). {s.title}.
              </Link>{' '}
              <span className="text-muted">{s.venue}.</span>
            </li>
          )
        })}
        {notes?.map((n, i) => (
          <li key={`note-${i}`} className="text-sm text-muted">
            {n}
          </li>
        ))}
      </ul>
      <Link
        to="/sources"
        className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
      >
        Full reference &amp; links on the Sources page →
      </Link>
    </div>
  )
}
