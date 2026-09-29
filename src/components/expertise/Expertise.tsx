import { Award } from 'lucide-react'
import { certificationGroups } from '../../data/certifications'
import { Section } from '../layout/Section'
import { SkillGroup } from './SkillGroup'
import { skillGroups } from '../../data/skills'

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical Expertise"
      title="Tools and certifications"
      description="The certifications I’ve earned and the technologies I’ve worked with."
    >
      <div aria-labelledby="certifications-heading">
        <h3 id="certifications-heading" className="text-2xl font-semibold tracking-tight text-ink">
          Certifications
        </h3>
        <div className="mt-6 space-y-4">
          {certificationGroups.map((group) => (
            <article key={group.issuer} className="rounded-xl border border-accent/30 bg-surface/50 p-6 md:p-8">
              <h4 className="flex items-center gap-3 text-lg font-semibold text-accent-secondary">
                <Award size={24} className="shrink-0" aria-hidden="true" />
                {group.issuer}
              </h4>
              <ul className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
                {group.certifications.map((certification) => (
                  <li key={certification.name}>
                    <p className="font-mono text-sm font-medium text-ink">{certification.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{certification.title}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-12" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="text-2xl font-semibold tracking-tight text-ink">
          Technical Skills
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </Section>
  )
}
