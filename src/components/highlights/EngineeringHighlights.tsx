import { Section } from '../layout/Section'
import { ImpactCard } from './ImpactCard'
import { highlights } from '../../data/highlights'

export function EngineeringHighlights() {
  return (
    <Section
      id="impact"
      eyebrow="Highlights"
      title="What I work on"
      description="A few examples from my work in finance, healthcare, and web applications."
    >
      <div className="grid gap-4">
        {highlights.map((highlight) => (
          <ImpactCard key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </Section>
  )
}
