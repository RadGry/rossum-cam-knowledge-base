import { MiniLabel } from '../components/ui'
import { sources } from '../data/sources'

export default function Sources() {
  return (
    <div>
      <header className="max-w-2xl">
        <MiniLabel>Sources</MiniLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          The library
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          Every claim on the site traces back to one of these. The canonical
          link is authoritative and never rots; a PDF link appears only where
          the work is openly licensed for redistribution.
        </p>
      </header>

      <ol className="mt-10 divide-y divide-hairline border-y border-hairline">
        {sources.map((s, i) => (
          <li
            key={s.id}
            id={s.id}
            className="scroll-mt-24 py-5 target:bg-accent/5"
          >
            <div className="flex gap-4">
              <span className="mt-0.5 flex-none text-sm font-semibold text-accent">
                [{i + 1}]
              </span>
              <div>
                <div className="text-[0.95rem] font-semibold leading-snug text-ink">
                  {s.title}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {s.authors} · {s.year} · <span className="italic">{s.venue}</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <a
                    href={s.canonicalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Canonical link ↗
                  </a>
                  {s.pdfUrl && (
                    <a
                      href={s.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      PDF ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
