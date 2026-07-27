import type { ReactNode } from 'react'

/** UPPERCASE letter-spaced mini-label — sits above headings/values. */
export function MiniLabel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mini-label ${className}`}>{children}</div>
}

/** Flat card: hairline border, no shadow, small radius. */
export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-md border border-hairline bg-card ${className}`}
    >
      {children}
    </div>
  )
}

/** A titled page section with the mini-label convention. */
export function Section({
  label,
  title,
  children,
  className = '',
}: {
  label: string
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <MiniLabel>{label}</MiniLabel>
      {title && (
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
        </h2>
      )}
      <div className={title ? 'mt-4' : 'mt-3'}>{children}</div>
    </section>
  )
}
