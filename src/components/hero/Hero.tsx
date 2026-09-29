import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { ResumeButton } from '../resume/ResumeButton'

const PRINCIPLES = [
  'I like staying close to the code.',
  'I enjoy figuring out why something is slow or broken.',
  'I work with older systems as well as new ones.',
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hero-brand-detail"
      />
      <Container className="grid gap-16 lg:grid-cols-[1.1fr_0.8fr] lg:items-center">
        <div>
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink text-balance"
          >
            Michel Popolin
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 font-mono text-xs md:text-sm tracking-wide text-accent-secondary"
          >
            Senior Software Engineer · Full-Stack &amp; Distributed Systems
          </motion.p>

          <motion.p
            custom={1.5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-2 text-sm text-ink-muted"
          >
            Based in Orlando, FL, USA
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 max-w-xl text-xl md:text-2xl font-medium text-ink leading-relaxed text-balance"
          >
            I’ve been building software for over 24 years, and I still enjoy the work.
          </motion.p>

          <motion.p
            custom={2.5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-xl text-base text-ink-muted leading-relaxed"
          >
            My work has taken me from Java applications in Brazil to payment systems, healthcare software,
            and financial platforms. These days, I work mostly with Node.js, TypeScript, React, and Vue.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink hover:bg-accent-strong transition-colors"
            >
              View Experience
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <ResumeButton variant="outline" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">How I work</p>
          <ul className="mt-5 space-y-3">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/70" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
