import { Section } from '../layout/Section'
import { ExperienceItem } from './ExperienceItem'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience"
      description="Where I’ve worked and what I did there."
    >
      <ol className="ml-1">
        {experience.map((entry, i) => (
          <ExperienceItem key={entry.id} entry={entry} isLast={i === experience.length - 1} />
        ))}
      </ol>
    </Section>
  )
}
