import { Mail } from 'lucide-react'
import { Container } from './Container'
import { siteMeta } from '../../data/siteMeta'
import { SocialLinks } from '../contact/SocialLinks'
import { ResumeButton } from '../resume/ResumeButton'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border/70 pt-12 pb-28 md:pt-16">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Let’s talk</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
              I’d be happy to hear from you. Send me an email or say hello on LinkedIn.
            </p>
            <a
              href={`mailto:${siteMeta.email}`}
              className="mt-5 inline-flex max-w-full items-center gap-3 text-base font-medium text-ink transition-colors hover:text-accent-secondary md:text-lg"
            >
              <Mail size={20} className="shrink-0" aria-hidden="true" />
              <span className="break-all">{siteMeta.email}</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <SocialLinks includeEmail={false} />
            <ResumeButton variant="outline" />
          </div>
        </div>
        <p className="mt-10 border-t border-border/70 pt-6 font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {siteMeta.name}. Built with React &amp; Tailwind.
        </p>
      </Container>
    </footer>
  )
}
