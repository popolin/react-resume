import type { HighlightEntry } from '../../data/highlights'

interface ImpactCardProps {
  highlight: HighlightEntry
}

export function ImpactCard({ highlight }: ImpactCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/50 p-6 md:p-8 transition-colors hover:border-accent/50 hover:bg-surface">
      <div>
        <h3 className="text-xl font-semibold text-ink tracking-tight">{highlight.title}</h3>
        <p className="mt-3 text-sm md:text-base text-ink-muted leading-relaxed">{highlight.description}</p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {highlight.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-bg px-2.5 py-1 font-mono text-xs text-ink-faint border border-border/70">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
