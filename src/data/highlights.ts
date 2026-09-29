export interface HighlightEntry {
  id: string
  title: string
  description: string
  tags: string[]
}

export const highlights: HighlightEntry[] = [
  {
    id: 'distributed-systems',
    title: 'Distributed & Event-Driven Systems',
    description:
      'I’ve built services that pass work through GCP Pub/Sub and RabbitMQ, with Redis for queuing and caching. Much of that work has been on financial data pipelines.',
    tags: ['Pub/Sub', 'RabbitMQ', 'Redis', 'Microservices'],
  },
  {
    id: 'fintech',
    title: 'Fintech Platforms & Performance',
    description:
      'At PayPal, I worked on payment middleware. At Clearco, query and concurrency fixes brought slow API responses from about 12 seconds down to 1.6 seconds.',
    tags: ['PayPal', 'Clearco', '-86% latency'],
  },
  {
    id: 'healthtech',
    title: 'Healthtech & Device Integration',
    description:
      'At Trix, I connected clinical software to lab equipment and medical imaging systems. At Clipboard Health, I worked on shift matching and location events.',
    tags: ['Clipboard Health', 'Trix Tecnologia', 'DICOM/PACS'],
  },
  {
    id: 'modernization',
    title: 'Platform & Frontend Modernization',
    description:
      'At Clearco, I led upgrades from Node.js 16 to 24 and Vue 2 to Vue 3. That work, together with stricter typing and better tests, helped cut production regressions by about 40%.',
    tags: ['Node.js', 'Vue 3', '-40% regressions'],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack & API Architecture',
    description:
      'My work includes GraphQL and REST APIs, React and Vue applications, and mobile features built with React Native and Ionic.',
    tags: ['GraphQL', 'NestJS', 'BFF', 'React Native'],
  },
  {
    id: 'ai-reliability',
    title: 'Financial statement integration',
    description:
      'The data team at Clearco built the LLM parsing pipeline. I built the service that takes its processed results into onboarding. The combined effort brought review time from hours to under 15 minutes.',
    tags: ['Node.js', 'PostgreSQL', 'LLM integration'],
  },
]
