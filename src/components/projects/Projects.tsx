import { Section } from '../layout/Section'
import { CaseStudy } from './CaseStudy'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Case Studies"
      title="A few projects in detail"
      description="What needed fixing, what I worked on, and how it turned out."
    >
      <div className="space-y-6">
        {projects.filter((project) => project.caseStudy).map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
