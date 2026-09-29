import { Section } from '../layout/Section'
import { HistoryTimeline } from './HistoryTimeline'
import { PersonalNotes } from './PersonalNotes'
import { historyTimeline, likes, dreams } from '../../data/history'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Beyond the résumé"
      description="Some things that don’t fit on a résumé: my first computer, people I remember, and moving to the U.S. with my family."
    >
      <HistoryTimeline entries={historyTimeline} />
      <p className="mt-6 text-sm text-ink-faint italic">
        There are more stories, but I’ll save those for a conversation.
      </p>

      <div className="mt-16">
        <PersonalNotes likes={likes} dreams={dreams} />
      </div>
    </Section>
  )
}
