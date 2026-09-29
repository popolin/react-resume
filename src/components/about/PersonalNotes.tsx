interface PersonalListProps {
  title: string
  items: string[]
}

function PersonalList({ title, items }: PersonalListProps) {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-6">
      <h4 className="font-mono text-xs uppercase tracking-widest text-accent-secondary">{title}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm md:text-base text-ink-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface PersonalNotesProps {
  likes: string[]
  dreams: string[]
}

export function PersonalNotes({ likes, dreams }: PersonalNotesProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <PersonalList title="I like" items={likes} />
      <PersonalList title="I dream of" items={dreams} />
    </div>
  )
}
