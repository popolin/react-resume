import type { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  bordered?: boolean
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-20 md:py-28 ${bordered ? 'border-t border-border/70' : ''} ${className}`}
    >
      <Container>
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent-secondary uppercase">
            <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>
          <h2 id={`${id}-heading`} className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          {description ? <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  )
}
