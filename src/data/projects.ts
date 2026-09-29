export interface ProjectEntry {
  id: string
  title: string
  company: string
  problem: string
  approach: string
  role: string
  caseStudy?: {
    outcome: string
    decisions: { title: string; detail: string }[]
  }
  impact?: string
  technologies: string[]
}

export const projects: ProjectEntry[] = [
  {
    id: 'latency-overhaul',
    caseStudy: {
      outcome: '~12s → ~1.6s',
      decisions: [
        { title: 'Fix the query patterns', detail: 'I removed N+1 PostgreSQL queries and added indexes where they were missing.' },
        { title: 'Bound concurrent I/O', detail: 'I added concurrency limits to pipelines that were starting too many I/O operations at once.' },
      ],
    },
    impact: 'Reduced response times on the affected critical API endpoints by approximately 86%.',
    title: 'Bringing API response times down',
    company: 'Clearco',
    problem:
      'Some critical API endpoints took about 12 seconds to respond. The pipelines had N+1 queries, missing PostgreSQL indexes, and no limits on concurrent I/O.',
    approach:
      'Refactored the affected pipelines, eliminated N+1 query patterns, added targeted PostgreSQL indexes, and bounded concurrent I/O — bringing response times down to ~1.6 seconds, a ~86% reduction.',
    role: 'I investigated the slow endpoints and implemented the fixes in the ingestion pipeline.',
    technologies: ['Node.js', 'PostgreSQL', 'Prisma', 'Grafana', 'Sentry'],
  },
  {
    id: 'runtime-frontend-modernization',
    caseStudy: {
      outcome: '~40% fewer regressions',
      decisions: [
        { title: 'Modernize runtime and frontend', detail: 'I led the move from Node.js 16 to 24 and from Vue 2 to Vue 3 with Vite.' },
        { title: 'Add tests and stricter types', detail: 'I used strict TypeScript 5.x, Vitest unit tests, and Playwright end-to-end tests to check the changes during the rollout.' },
      ],
    },
    impact: 'The upgrades and testing work helped reduce production regressions by about 40%. Builds also got faster.',
    title: 'Upgrading Node.js and Vue at Clearco',
    company: 'Clearco',
    problem:
      'The backend ran on Node.js 16 and the frontend on Vue 2. Keeping those versions was making builds and security updates harder.',
    approach:
      'Migrated the backend fleet from Node.js 16 to 24, and led the frontend migration from Vue 2 to Vue 3 using Vite and strict TypeScript 5.x, backed by Vitest and Playwright test suites — cutting production regressions by ~40%.',
    role: 'I planned the migration and coordinated the rollout across teams, leading the runtime and frontend changes.',
    technologies: ['Node.js', 'TypeScript', 'Vue.js', 'Vite', 'Vitest', 'Playwright', 'Docker', 'Kubernetes'],
  },
  {
    id: 'ai-financial-review',
    title: 'AI-Powered Financial Statement Analysis',
    company: 'Clearco',
    problem:
      'Manual review of merchant financial statements for due diligence took hours per case, slowing down onboarding decisions.',
    approach:
      "The data team designed and built the LLM-powered parsing pipeline. Michel's part was downstream: building the backend service that reads from the processed statements table onward, feeding parsed results into the onboarding workflow.",
    role: 'Owned the downstream integration reading processed statement data into onboarding — not the LLM parsing pipeline itself, which was built by the data team.',
    technologies: ['Node.js', 'PostgreSQL', 'GCP Pub/Sub', 'Grafana'],
  },
  {
    id: 'shift-matching',
    caseStudy: {
      outcome: 'Real-time shift coordination',
      decisions: [
        { title: 'Model nested queries with GraphQL', detail: 'I designed the NestJS GraphQL schemas and resolvers for nested shift-matching queries.' },
        { title: 'Process telemetry through events', detail: 'I built pipelines using RabbitMQ and Redis to process Radar.com location events for payout calculations.' },
        { title: 'Build and release mobile features', detail: 'I built features with React Native, Ionic, and Capacitor, and set up Bitrise CI/CD alongside the GraphQL backend.' },
      ],
    },
    title: 'Shift matching at Clipboard Health',
    company: 'Clipboard Health',
    problem:
      'The platform needed to match healthcare workers to shifts and calculate payouts from location events. That meant handling nested queries and large volumes of telemetry, along with the mobile features workers used.',
    approach:
      'Designed NestJS/GraphQL schemas and resolvers for nested entity queries, built event-driven workflows on RabbitMQ and Redis for real-time telemetry from Radar.com, and shipped cross-platform mobile features with React Native, Ionic, and Capacitor on a Bitrise CI/CD pipeline.',
    role: 'I was responsible for the backend architecture and delivered mobile features for shift matching and telemetry processing.',
    impact:
      'Workers and facilities had more confidence in advance payout calculations and better communication when a shift needed a replacement.',
    technologies: ['NestJS', 'GraphQL', 'MongoDB', 'RabbitMQ', 'Redis', 'React Native', 'Ionic', 'Capacitor', 'Bitrise'],
  },
  {
    id: 'clinical-suite',
    title: 'Clinical Device Integration Suite',
    company: 'Trix Tecnologia',
    problem:
      'A nationwide clinical software suite needed direct, real-time integration with laboratory equipment, diagnostic devices, and PACS/DICOM imaging servers, on top of an aging Java and Ruby on Rails codebase.',
    approach:
      'Engineered low-level protocol interfaces and stream processing for hardware and lab device communication, built WebSocket and event-driven messaging pipelines to sync patient queue panels in real time, and led the incremental evolution of legacy components into modular Node.js microservices.',
    role: 'Tech lead directing back-end architecture for the full clinical suite.',
    technologies: ['Node.js', 'Java', 'Ruby on Rails', 'WebSockets', 'GraphQL', 'PACS/DICOM Protocols', 'REST APIs'],
  },
]
