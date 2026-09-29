import type { ExperienceEntry } from '../../data/experience'

interface ExperienceItemProps {
  entry: ExperienceEntry
  isLast: boolean
}

const emphasisStyles = {
  primary: {
    wrapper: 'pb-14',
    title: 'text-2xl md:text-3xl',
    company: 'text-lg',
    dot: 'h-3.5 w-3.5',
  },
  secondary: {
    wrapper: 'pb-12',
    title: 'text-xl md:text-2xl',
    company: 'text-base',
    dot: 'h-3 w-3',
  },
  compact: {
    wrapper: 'pb-10',
    title: 'text-lg md:text-xl',
    company: 'text-sm',
    dot: 'h-2.5 w-2.5',
  },
} as const

export function ExperienceItem({ entry, isLast }: ExperienceItemProps) {
  const styles = emphasisStyles[entry.emphasis]

  return (
    <li className={`relative pl-8 md:pl-10 ${styles.wrapper} ${isLast ? '' : 'border-l border-border'} -ml-px`}>
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 -translate-x-1/2 rounded-full bg-bg border-2 border-accent ${styles.dot}`}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className={`font-semibold text-ink tracking-tight ${styles.title}`}>{entry.title}</h3>
        <span className="font-mono text-xs text-ink-faint whitespace-nowrap">
          {entry.start} – {entry.end}
        </span>
      </div>

      <div className={`mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-muted ${styles.company}`}>
        {entry.companyUrl ? (
          <a href={entry.companyUrl} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-accent-secondary transition-colors">
            {entry.company}
          </a>
        ) : (
          <span className="font-medium text-ink">{entry.company}</span>
        )}
        <span aria-hidden="true">·</span>
        <span>{entry.location}</span>
      </div>

      <p className="mt-4 max-w-2xl text-sm md:text-base text-ink-muted leading-relaxed">{entry.context}</p>

      <ul className="mt-5 space-y-3">
        {entry.contributions.map((c) => (
          <li key={c.label} className="flex gap-3 text-sm md:text-base">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/70" aria-hidden="true" />
            <p className="text-ink-muted">
              <span className="font-medium text-ink">{c.label}.</span> {c.detail}
            </p>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {entry.technologies.map((tech) => (
          <li key={tech} className="rounded-md border border-border/70 px-2.5 py-1 font-mono text-xs text-ink-faint">
            {tech}
          </li>
        ))}
      </ul>
    </li>
  )
}
