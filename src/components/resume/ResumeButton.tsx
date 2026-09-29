import { Download } from 'lucide-react'
import { siteMeta } from '../../data/siteMeta'

interface ResumeButtonProps {
  variant?: 'solid' | 'outline'
  className?: string
}

export function ResumeButton({ variant = 'solid', className = '' }: ResumeButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors'
  const styles =
    variant === 'solid'
      ? 'bg-accent text-accent-ink hover:bg-accent-strong'
      : 'border border-border-strong text-ink hover:border-accent-secondary hover:text-accent-secondary'

  return (
    <a href={siteMeta.resumePath} download={siteMeta.resumeFileName} className={`${base} ${styles} ${className}`}>
      <Download size={16} aria-hidden="true" />
      Download Resume
    </a>
  )
}
