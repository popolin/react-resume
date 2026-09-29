import type { HistoryEntry, HistorySegment } from '../../data/history'
import { historyChapters } from '../../data/history'

function renderSegments(segments: HistorySegment[]) {
  return segments.map((segment, i) =>
    typeof segment === 'string' ? (
      <span key={i}>{segment}</span>
    ) : (
      <a
        key={i}
        href={segment.href}
        target="_blank"
        rel="noreferrer"
        className="text-ink underline decoration-border-strong underline-offset-2 hover:text-accent-secondary hover:decoration-accent-secondary transition-colors"
      >
        {segment.text}
      </a>
    ),
  )
}

interface HistoryRowProps {
  entry: HistoryEntry
}

function HistoryRow({ entry }: HistoryRowProps) {
  return (
    <li className="relative pb-8 pl-8 md:grid md:grid-cols-[7rem_1fr] md:gap-x-12 md:pl-0">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full md:left-[8.5rem] ${
          entry.milestone ? 'bg-accent ring-4 ring-accent/15' : 'border border-accent/60 bg-bg'
        }`}
      />
      <span className="block pt-0.5 font-mono text-xs text-accent-secondary md:text-right">{entry.period}</span>
      <div className={`mt-3 min-w-0 md:mt-0 ${entry.milestone ? 'rounded-2xl border border-accent/25 bg-surface/70 p-5 md:p-6' : ''}`}>
        <h4 className="text-base font-semibold tracking-tight text-ink md:text-lg">{entry.title}</h4>
        <p className="mt-2 text-sm md:text-base text-ink-muted leading-relaxed">{renderSegments(entry.segments)}</p>
        {entry.subItems ? (
          <ul className="mt-4 space-y-4">
            {entry.subItems.map((item) => (
              <li key={item.label} className="text-sm md:text-base leading-relaxed">
                <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-accent-secondary">{item.label}</span>
                <span className="text-ink-muted">{item.text}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

interface HistoryTimelineProps {
  entries: HistoryEntry[]
}

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  return (
    <div className="relative max-w-4xl pl-2">
      <div aria-hidden="true" className="absolute bottom-8 left-2 top-3 w-px -translate-x-1/2 bg-border-strong md:left-[9rem]" />
      {historyChapters.map((chapter) => (
        <section key={chapter.id} aria-labelledby={`chapter-${chapter.id}`} className="relative pb-8 last:pb-0">
          <div className="relative mb-8 pl-8 md:pl-40">
            <span aria-hidden="true" className="absolute left-0 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg ring-4 ring-bg md:left-[8.5rem]" />
            <h3 id={`chapter-${chapter.id}`} className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{chapter.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{chapter.description}</p>
          </div>
          <ol>
            {entries.filter((entry) => entry.chapter === chapter.id).map((entry) => (
              <HistoryRow key={entry.id} entry={entry} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}
