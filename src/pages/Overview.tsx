import ValueChain from '../components/ValueChain'
import { MiniLabel } from '../components/ui'

export default function Overview() {
  return (
    <div>
      <header className="max-w-2xl">
        <MiniLabel>Overview</MiniLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          An operator&rsquo;s playbook for the Commercial Account Manager
        </h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          The job is no longer to manage accounts and wait for problems. It is
          to realize value on purpose. With low switching costs and no CSM in
          the loop, the CAM is the sole proactive owner after go-live &mdash; so
          the work shifts from reactive account management to proactive value
          realization: baseline the value, prove it on a cadence, and expand
          from what you have proven.
        </p>
      </header>

      <div className="mt-10 rounded-lg border border-hairline bg-card p-5 sm:p-7">
        <ValueChain />
      </div>
    </div>
  )
}
