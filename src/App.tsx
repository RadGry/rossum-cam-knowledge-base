import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Overview', end: true },
  { to: '/customer-health', label: 'Customer Health', end: false },
  { to: '/sources', label: 'Sources', end: false },
]

function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <NavLink to="/" className="flex flex-col leading-none">
          <span className="mini-label text-accent">Rossum CAM</span>
          <span className="mt-1 text-sm font-semibold tracking-tight text-ink">
            Knowledge Base
          </span>
        </NavLink>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `rounded px-2.5 py-1.5 text-sm transition-colors sm:px-3 ${
                  isActive
                    ? 'font-semibold text-accent'
                    : 'text-muted hover:text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <p className="text-xs text-muted">
          An operator&rsquo;s playbook · Radek Gryc · Rossum CAM
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <TopNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
