import type { ProjectEntry } from '../../data/projects'

interface ProjectCardProps {
  project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8 hover:border-accent/50 transition-colors">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-ink tracking-tight">{project.title}</h3>
        <span className="font-mono text-xs text-ink-faint">{project.company}</span>
      </div>

      <dl className="mt-5 space-y-4 text-sm md:text-base">
        <div>
          <dt className="font-medium text-ink">Problem</dt>
          <dd className="mt-1 text-ink-muted leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Approach</dt>
          <dd className="mt-1 text-ink-muted leading-relaxed">{project.approach}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Role</dt>
          <dd className="mt-1 text-ink-muted leading-relaxed">{project.role}</dd>
        </div>
        {project.impact ? (
          <div>
            <dt className="font-medium text-ink">Impact</dt>
            <dd className="mt-1 text-ink-muted leading-relaxed">{project.impact}</dd>
          </div>
        ) : null}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-md border border-border/70 px-2.5 py-1 font-mono text-xs text-ink-faint">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}
