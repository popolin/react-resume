import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { siteMeta } from '../../data/siteMeta'
import { Container } from './Container'
import { getActiveSection } from './activeSection'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#work', label: 'Case Studies' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      setScrolled(window.scrollY > 8)
      const sections = NAV_LINKS.flatMap((link) => {
        const element = document.getElementById(link.href.slice(1))
        return element ? [{ href: link.href, top: element.getBoundingClientRect().top }] : []
      })
      setActiveHref(getActiveSection(
        sections,
        window.innerHeight,
        window.scrollY,
        document.documentElement.scrollHeight,
      ))
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }
    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(document.body)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      observer.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border/70' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <a
          href="#home"
          className="inline-flex shrink-0 items-center justify-center rounded-lg transition-opacity hover:opacity-80"
          aria-label={`${siteMeta.name}, home`}
        >
          <img
            src="/logo.png"
            alt="Popolin"
            width={2172}
            height={724}
            className="h-auto w-32 md:w-36"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'location' : undefined}
              className={`whitespace-nowrap border-b-2 py-2 text-sm transition-colors ${
                activeHref === link.href
                  ? 'border-accent-secondary bg-accent/10 text-accent-secondary'
                  : 'border-transparent text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteMeta.resumePath}
            download={siteMeta.resumeFileName}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink hover:bg-accent-strong transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-border-strong p-2 text-ink"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border/70 bg-bg"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeHref === link.href ? 'location' : undefined}
                  className={`rounded-lg border-l-2 px-3 py-3 text-base transition-colors ${
                    activeHref === link.href
                      ? 'border-accent-secondary bg-accent/10 text-accent-secondary'
                      : 'border-transparent text-ink-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteMeta.resumePath}
                download={siteMeta.resumeFileName}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-3 text-center text-base font-medium text-accent-ink transition-colors hover:bg-accent-strong"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
