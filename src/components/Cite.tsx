import { Link } from 'react-router-dom'
import { sources } from '../data/sources'

/**
 * Superscript citation marker. Numbered by position in the source library,
 * linking to the matching anchor on the Sources page.
 */
export default function Cite({ id }: { id: string }) {
  const index = sources.findIndex((s) => s.id === id)
  if (index === -1) return null
  const source = sources[index]
  return (
    <Link
      to={`/sources#${id}`}
      title={`${source.authors} (${source.year})`}
      className="ml-0.5 align-super text-[0.65em] font-semibold text-accent hover:underline"
    >
      [{index + 1}]
    </Link>
  )
}
