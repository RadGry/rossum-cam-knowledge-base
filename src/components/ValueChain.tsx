import type { ReactNode } from 'react'
import { MiniLabel } from './ui'

/* ------------------------------------------------------------------ *
 * The Value Chain — the site's spine.
 * Sales win → ★Contract → Professional Services onboard → ★GO-LIVE
 * (transfer to CAM) → CAM adopt → renew → expand.
 * Colour-coded by owner. The GO-LIVE handoff is the emphasised hinge.
 * Horizontal ribbon on desktop, stacked top→bottom on mobile.
 * ------------------------------------------------------------------ */

type Owner = 'sales' | 'ps' | 'cam'

const OWNER: Record<
  Owner,
  { name: string; text: string; borderTop: string; chipBg: string }
> = {
  sales: {
    name: 'Sales / AE',
    text: 'text-owner-sales',
    borderTop: 'border-t-owner-sales',
    chipBg: 'bg-owner-sales',
  },
  ps: {
    name: 'Professional Services',
    text: 'text-owner-ps',
    borderTop: 'border-t-owner-ps',
    chipBg: 'bg-owner-ps',
  },
  cam: {
    name: 'CAM',
    text: 'text-owner-cam',
    borderTop: 'border-t-owner-cam',
    chipBg: 'bg-owner-cam',
  },
}

function StageCard({
  owner,
  title,
  sub,
  className = '',
}: {
  owner: Owner
  title: string
  sub: string
  className?: string
}) {
  const o = OWNER[owner]
  return (
    <div
      className={`flex h-full flex-col rounded-md border border-hairline border-t-2 ${o.borderTop} bg-card p-4 ${className}`}
    >
      <div className={`mini-label ${o.text}`}>{o.name}</div>
      <div className="mt-2 text-[0.95rem] font-semibold leading-snug text-ink">
        {title}
      </div>
      <div className="mt-1 text-sm text-muted">{sub}</div>
    </div>
  )
}

function StarSVG({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${filled ? 'text-accent' : 'text-muted'}`}
      aria-hidden="true"
    >
      <path
        d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.06L7.3 13.9 2.6 9.35l6.5-.95L12 2.5z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Handoff marker — a star with a caption. GO-LIVE is emphasised. */
function Handoff({
  filled,
  label,
  note,
  vertical = false,
}: {
  filled: boolean
  label: string
  note?: string
  vertical?: boolean
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        vertical ? 'py-2' : 'px-1'
      }`}
    >
      <StarSVG filled={filled} />
      <div
        className={`mt-1 text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.12em] ${
          filled ? 'text-accent' : 'text-muted'
        }`}
      >
        {label}
      </div>
      {note && (
        <div className="mt-0.5 max-w-[7.5rem] text-[0.6875rem] leading-tight text-muted">
          {note}
        </div>
      )}
    </div>
  )
}

/** → connector between the three CAM stages. */
function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div className="flex items-center justify-center text-muted">
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${vertical ? 'rotate-90' : ''}`}
        aria-hidden="true"
      >
        <path
          d="M4 12h14m0 0l-5-5m5 5l-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {(['sales', 'ps', 'cam'] as Owner[]).map((k) => (
        <div key={k} className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${OWNER[k].chipBg}`} />
          <span className="text-xs text-muted">{OWNER[k].name}</span>
        </div>
      ))}
    </div>
  )
}

function DayOneRail({ children }: { children: ReactNode }) {
  return (
    <div className="text-center">
      <div className="border-t-2 border-dotted border-accent/60" />
      <div className="mt-1.5 mini-label text-accent">{children}</div>
    </div>
  )
}

export default function ValueChain() {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <MiniLabel>The value chain</MiniLabel>
        <Legend />
      </div>

      {/* ---------- Desktop ribbon (md+) ---------- */}
      <div className="mt-4 hidden md:block">
        <div className="grid items-stretch gap-3 grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {/* Row 1 — stages + handoffs */}
          <div className="col-start-1 row-start-1">
            <StageCard owner="sales" title="Win the deal" sub="Qualify, scope, close." />
          </div>
          <div className="col-start-2 row-start-1 flex items-center">
            <Handoff filled={false} label="Contract" />
          </div>
          <div className="col-start-3 row-start-1">
            <StageCard
              owner="ps"
              title="Onboard & implement"
              sub="9 wks – 12 mo · configure, train, validate."
            />
          </div>
          <div className="col-start-4 row-start-1 flex items-center">
            <Handoff
              filled
              label="Go-Live"
              note="Account transfers to the CAM"
            />
          </div>
          <div className="col-start-5 row-start-1">
            <StageCard owner="cam" title="Adopt & prove value" sub="Activate, baseline, realize value." />
          </div>
          <div className="col-start-6 row-start-1 flex items-center">
            <Arrow />
          </div>
          <div className="col-start-7 row-start-1">
            <StageCard owner="cam" title="Renew" sub="Protect gross retention · 89%+." />
          </div>
          <div className="col-start-8 row-start-1 flex items-center">
            <Arrow />
          </div>
          <div className="col-start-9 row-start-1">
            <StageCard owner="cam" title="Expand" sub="Grow deliberately · past 100% NRR." />
          </div>

          {/* Row 2 — "present from day one" dotted span: PS → adopt */}
          <div className="col-start-3 col-end-6 row-start-2 pt-3">
            <DayOneRail>CAM present from day one</DayOneRail>
          </div>
        </div>
      </div>

      {/* ---------- Mobile stack (< md) ---------- */}
      <div className="mt-4 md:hidden">
        <div className="flex flex-col">
          <StageCard owner="sales" title="Win the deal" sub="Qualify, scope, close." />
          <Handoff filled={false} label="Contract" vertical />

          {/* Day-one span wraps PS + Go-Live + Adopt */}
          <div className="rounded-md border-l-2 border-dotted border-accent/60 pl-3">
            <div className="pb-2 mini-label text-accent">
              CAM present from day one
            </div>
            <StageCard owner="ps" title="Onboard & implement" sub="9 wks – 12 mo · configure, train, validate." />
            <Handoff filled label="Go-Live" note="Account transfers to the CAM" vertical />
            <StageCard owner="cam" title="Adopt & prove value" sub="Activate, baseline, realize value." />
          </div>

          <Arrow vertical />
          <StageCard owner="cam" title="Renew" sub="Protect gross retention · 89%+." />
          <Arrow vertical />
          <StageCard owner="cam" title="Expand" sub="Grow deliberately · past 100% NRR." />
        </div>
      </div>

      {/* Caption */}
      <p className="mt-5 border-t border-hairline pt-4 text-sm text-muted">
        <span className="font-medium text-ink">No CSM</span> — after go-live the
        CAM is the sole proactive owner.
      </p>
    </div>
  )
}
