import type { SkillGroupEntry } from '../../data/skills'

interface SkillGroupProps {
  group: SkillGroupEntry
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface/50 p-6">
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent-secondary">{group.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className="rounded-md border border-border-strong px-2.5 py-1.5 text-sm text-ink-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
