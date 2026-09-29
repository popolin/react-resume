import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons'
import { siteMeta } from '../../data/siteMeta'

const emailLink = { href: `mailto:${siteMeta.email}`, label: 'Email', icon: Mail }
const links = [
  { href: siteMeta.social.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: siteMeta.social.github, label: 'GitHub', icon: GithubIcon },
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
  includeEmail?: boolean
}

export function SocialLinks({ className = '', iconSize = 18, includeEmail = true }: SocialLinksProps) {
  const items = includeEmail ? [emailLink, ...links] : links

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-ink-muted hover:text-accent-secondary hover:border-accent-secondary transition-colors"
          >
            <Icon size={iconSize} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
