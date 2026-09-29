import type { ProjectEntry } from '../../data/projects'

export function CaseStudy({ project }: { project: ProjectEntry }) {
  if (!project.caseStudy) return null

  return (
    <article aria-labelledby={`${project.id}-title`} className="overflow-hidden rounded-2xl border border-border bg-surface/50">
      <div className="grid gap-6 border-b border-border p-6 md:p-8 lg:grid-cols-[1fr_20rem] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-secondary">{project.company} · Case study</p>
          <h3 id={`${project.id}-title`} className="mt-3 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
        </div>
        <div className="rounded-xl border border-accent/25 bg-accent/5 p-5">
          <p className="text-xl font-semibold text-accent-secondary md:text-2xl">{project.caseStudy.outcome}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.impact}</p>
        </div>
      </div>
      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <dl className="space-y-6 text-sm md:text-base">
          <div>
            <dt className="font-medium text-ink">The challenge</dt>
            <dd className="mt-2 leading-relaxed text-ink-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">My contribution</dt>
            <dd className="mt-2 leading-relaxed text-ink-muted">{project.role}</dd>
          </div>
        </dl>
        <div>
          <h4 className="font-medium text-ink">Engineering decisions</h4>
          <ul className="mt-4 space-y-5">
            {project.caseStudy.decisions.map((decision) => (
              <li key={decision.title} className="flex gap-4">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/70" />
                <div>
                  <h5 className="text-sm font-medium text-ink md:text-base">{decision.title}</h5>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{decision.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul aria-label="Technologies used" className="flex flex-wrap gap-2 border-t border-border px-6 py-5 md:px-8">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-xs text-ink-muted">{technology}</li>
        ))}
      </ul>
    </article>
  )
}
