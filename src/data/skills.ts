export interface SkillGroupEntry {
  id: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroupEntry[] = [
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js (v14–v24+)', 'TypeScript (v4/v5)', 'JavaScript (ES6+)', 'Java', 'Ruby on Rails', 'NestJS', 'Express.js'],
  },
  {
    id: 'apis',
    title: 'APIs & Integration',
    items: ['GraphQL (Apollo Server/Client)', 'RESTful Microservices', 'BFF Pattern', 'Prisma ORM', 'Hardware/Device Telemetry', 'DICOM/PACS Protocols'],
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    items: ['React', 'Vue.js (Vue 2/3, Vite)', 'React Native', 'Ionic', 'Capacitor', 'JWT/OAuth', 'Auth0'],
  },
  {
    id: 'data-messaging',
    title: 'Data & Messaging',
    items: ['PostgreSQL (v13–v18)', 'MongoDB', 'SQL', 'Elasticsearch', 'Google Cloud Pub/Sub', 'RabbitMQ', 'Redis'],
  },
  {
    id: 'architecture',
    title: 'Architecture & Systems',
    items: [
      'Distributed Systems',
      'Event-Driven Architecture',
      'Microservices',
      'WebSockets',
      'V8 Runtime Internals',
      'Root-Cause Analysis',
      'Memory Leak Debugging (ENOMEM)',
      'High Availability',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Testing',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Grafana', 'Sentry', 'Datadog', 'Bitrise (CI/CD)', 'Vitest', 'Playwright', 'Jest'],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Engineering',
    items: ['LLM Pipeline Integration', 'AI-Assisted Development', 'Automated Document Parsing'],
  },
]
