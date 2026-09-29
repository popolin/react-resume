export interface ExperienceEntry {
  id: string
  company: string
  companyUrl?: string
  title: string
  location: string
  start: string
  end: string
  emphasis: 'primary' | 'secondary' | 'compact'
  context: string
  contributions: {
    label: string
    detail: string
  }[]
  technologies: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'clearco',
    company: 'Clearco',
    companyUrl: 'https://clear.co/',
    title: 'Senior Software Engineer',
    location: 'Toronto, ON (Remote)',
    start: 'Apr 2023',
    end: 'Present',
    emphasis: 'primary',
    context:
      'Clearco runs financial ingestion pipelines that process high volumes of merchant data, alongside a frontend fleet sitting on an aging Vue 2 codebase — both under strict reliability requirements.',
    contributions: [
      {
        label: 'Runtime & frontend modernization',
        detail:
          'Spearheaded the Node.js runtime migration from v16 to v24 and led frontend architecture modernization from legacy Vue 2 to Vue 3 with Vite, TypeScript 5.x, Vitest, and Playwright, eliminating EoL security risks and speeding up builds.',
      },
      {
        label: 'Performance & latency optimization',
        detail:
          'Cut critical API response times by ~86% (from ~12s to ~1.6s) by refactoring legacy pipelines, fixing N+1 PostgreSQL queries, adding targeted indexes, and bounding I/O concurrency.',
      },
      {
        label: 'Event-driven architecture',
        detail:
          'Architected low-latency microservice pipelines on GCP Pub/Sub, RabbitMQ, and Redis for distributed message queuing and asynchronous task orchestration.',
      },
      {
        label: 'AI pipeline integration',
        detail:
          'Built the downstream service reading from the processed financial-statement table into onboarding workflows, consuming an LLM-powered parsing pipeline built by the data team — part of a push that cut due-diligence review time from hours to under 15 minutes.',
      },
      {
        label: 'Quality & reliability',
        detail:
          'Reduced production regressions by ~40% through strict TypeScript typing, comprehensive Vitest/Playwright unit and E2E suites, and real-time observability via Grafana and Sentry.',
      },
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'Vue.js',
      'Vite',
      'NestJS',
      'GCP Pub/Sub',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'Prisma',
      'Vitest',
      'Playwright',
      'LLM APIs',
      'Docker',
      'Kubernetes',
      'Grafana',
      'Sentry',
      'AWS',
      'GCP',
    ],
  },
  {
    id: 'clipboard-health',
    company: 'Clipboard Health',
    companyUrl: 'https://www.clipboardhealth.com/',
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA (Remote)',
    start: 'May 2022',
    end: 'Apr 2023',
    emphasis: 'secondary',
    context:
      'Clipboard Health matches healthcare workers with facility shifts in real time. Legacy REST endpoints and ad-hoc schemas were becoming a bottleneck as query complexity and geofencing volume grew.',
    contributions: [
      {
        label: 'GraphQL & microservices',
        detail:
          'Architected high-throughput NestJS microservices on GraphQL and MongoDB, designing optimized schemas and resolvers for complex healthcare shift-matching queries.',
      },
      {
        label: 'Real-time telemetry pipelines',
        detail:
          'Engineered geofencing event pipelines with RabbitMQ and Redis caching to process thousands of concurrent location telemetry events (via Radar.com), automating instant payout calculations.',
      },
      {
        label: 'Full-stack & mobile engineering',
        detail:
          'Built cross-platform mobile features with React Native, Ionic, and Capacitor, and configured Bitrise CI/CD to sync seamlessly with the GraphQL backend.',
      },
      {
        label: 'API modernization',
        detail:
          'Led the migration of legacy Express endpoints to modular NestJS microservices in strict TypeScript, implementing company-wide testing standards.',
      },
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'Radar.com Telemetry',
      'Vitest',
      'Jest',
      'React Native',
      'Ionic',
      'Capacitor',
      'Bitrise',
      'AWS',
      'Datadog',
    ],
  },
  {
    id: 'paypal',
    company: 'PayPal',
    companyUrl: 'https://www.paypal.com/',
    title: 'Senior Software Engineer',
    location: 'San Diego, CA (Remote)',
    start: 'Jan 2022',
    end: 'Mar 2023',
    emphasis: 'secondary',
    context:
      'PayPal onboarding needed a middleware layer connecting React frontends to core Java payment APIs, serving millions of global transactions under strict security requirements.',
    contributions: [
      {
        label: 'Full-stack & middleware layer',
        detail:
          'Engineered high-concurrency Node.js/TypeScript BFF middleware services connecting React frontends with core Java payment APIs for global merchant onboarding.',
      },
      {
        label: 'High-concurrency resilience',
        detail:
          'Diagnosed and resolved production memory leaks, race conditions, and async execution bottlenecks across high-traffic microservices under strict security SLAs.',
      },
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'React.js',
      'Java Core APIs',
      'RESTful Microservices',
      'High-Concurrency Systems',
      'BFF Architecture',
    ],
  },
  {
    id: 'digital-trends',
    company: 'Digital Trends',
    companyUrl: 'https://www.digitaltrends.com/',
    title: 'Senior Software Engineer',
    location: 'Portland, OR (Remote)',
    start: 'Feb 2021',
    end: 'Jul 2022',
    emphasis: 'compact',
    context:
      'A media platform with a monolithic engine struggling to keep up with high-traffic catalog search and ad delivery.',
    contributions: [
      {
        label: 'Monolith refactoring',
        detail:
          'Refactored a monolithic media engine into modular Node.js/TypeScript microservices with centralized JWT-based authentication.',
      },
      {
        label: 'Search & ad platforms',
        detail:
          'Integrated GraphQL APIs with Elasticsearch and Redis caching to aggregate multi-catalog product data (Amazon, BestBuy) for high-speed product search and programmatic ad execution.',
      },
    ],
    technologies: ['Node.js', 'TypeScript', 'GraphQL', 'React.js', 'Redis', 'Elasticsearch', 'REST APIs', 'JWT/OAuth', 'AWS'],
  },
  {
    id: 'trix',
    company: 'Trix Tecnologia',
    title: 'Tech Lead Engineer',
    location: 'Brasília, DF, Brazil',
    start: 'Jun 2015',
    end: 'Feb 2021',
    emphasis: 'compact',
    context:
      'A nationwide clinical software suite needed direct integration with laboratory and diagnostic hardware, plus a path off an aging Java/Rails monolith.',
    contributions: [
      {
        label: 'Architecture evolution',
        detail:
          'Directed backend system architecture for a nationwide clinical suite, leading the evolution of legacy Java and Ruby on Rails monoliths into scalable Node.js microservices.',
      },
      {
        label: 'Hardware & telemetry integration',
        detail:
          'Engineered low-level protocol interfaces and stream processing to interface directly with medical laboratory equipment, diagnostic hardware, and PACS/DICOM imaging servers.',
      },
      {
        label: 'Real-time systems',
        detail:
          'Built WebSocket and event-driven messaging pipelines to synchronize clinical patient queue panels with web and mobile clients in real time.',
      },
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'Java',
      'Ruby on Rails',
      'Streams/Buffers',
      'WebSockets',
      'PACS/DICOM Protocols',
      'GraphQL',
      'REST APIs',
      'SQL',
    ],
  },
  {
    id: 'pixidea',
    company: 'PixIdea Tecnologia',
    title: 'Co-founder / Software Engineer',
    location: 'Brasília, DF, Brazil',
    start: 'Jul 2012',
    end: 'Jun 2015',
    emphasis: 'compact',
    context:
      'Co-founded a startup building software for personal trainers and nutritionists, going through fundraising and an international accelerator.',
    contributions: [
      {
        label: 'Founding & product',
        detail: 'Founded the startup and led product development for a platform serving personal trainers and nutritionists.',
      },
      {
        label: 'Cross-platform engineering',
        detail: 'Developed the product across Ruby on Rails, Java, and Swift.',
      },
      {
        label: 'Silicon Valley acceleration',
        detail: 'Selected for an acceleration program in Silicon Valley in 2013.',
      },
      {
        label: 'Fundraising & exposure',
        detail: 'Raised investment and gained media exposure for the company.',
      },
    ],
    technologies: ['Ruby on Rails', 'Java', 'Swift'],
  },
  {
    id: 'global-web',
    company: 'Global Web',
    companyUrl: 'https://www.globalweb.com.br/',
    title: 'Java Tech Lead / Architect',
    location: 'Brasília, DF, Brazil',
    start: 'May 2008',
    end: 'Jul 2012',
    emphasis: 'compact',
    context: "Led architecture and development for enterprise Java systems at Brazil's largest telecom operator.",
    contributions: [
      {
        label: 'Architecture & leadership',
        detail: "Led architecture and development for Brazil's largest telecom operator.",
      },
      {
        label: 'Enterprise Java stack',
        detail: 'Delivered systems on JSF, RichFaces, JPA, JBoss Seam, WebServices, and EJB.',
      },
    ],
    technologies: ['Java', 'JSF', 'RichFaces', 'JPA', 'JBoss Seam', 'WebServices', 'EJB'],
  },
  {
    id: 'nct',
    company: 'NCT Informática',
    companyUrl: 'https://www.nct.com.br/',
    title: 'Systems Analyst',
    location: 'Brasília, DF, Brazil',
    start: 'Aug 2006',
    end: 'May 2008',
    emphasis: 'compact',
    context: 'Worked with the Federal Police to gather requirements and build the systems that supported them.',
    contributions: [
      {
        label: 'Requirements engineering',
        detail: 'Worked directly with the Federal Police to elicit and document system requirements.',
      },
      {
        label: 'Hands-on development',
        detail: 'Provided hands-on programming support in J2EE and SuperWaba (J2ME).',
      },
    ],
    technologies: ['J2EE', 'SuperWaba (J2ME)'],
  },
  {
    id: 'politec-analyst',
    company: 'Politec Informática',
    companyUrl: 'https://en.wikipedia.org/wiki/Politec',
    title: 'Systems Analyst',
    location: 'Brasília, DF, Brazil',
    start: 'Oct 2004',
    end: 'Aug 2006',
    emphasis: 'compact',
    context: 'Delivered banking projects and led teams from architecture through delivery.',
    contributions: [
      {
        label: 'Banking delivery',
        detail: 'Delivered four banking projects, defining and implementing reusable frameworks.',
      },
      {
        label: 'Team leadership',
        detail: 'Led teams from architecture through delivery.',
      },
      {
        label: 'Tooling',
        detail: 'Built an Eclipse plugin to streamline Visual SourceSafe usage.',
      },
    ],
    technologies: ['Java', 'Eclipse', 'Visual SourceSafe'],
  },
  {
    id: 'castmeta',
    company: 'CastMeta Informática',
    companyUrl: 'https://www.cast4it.com/en',
    title: 'Java Developer',
    location: 'Brasília, DF, Brazil',
    start: 'Mar 2003',
    end: 'Oct 2004',
    emphasis: 'compact',
    context: 'Built a government web system on an enterprise Java stack.',
    contributions: [
      {
        label: 'Government systems',
        detail: 'Built a government web system using Caché DB, a proprietary framework, EJB, and Hibernate.',
      },
    ],
    technologies: ['Java', 'Caché DB', 'EJB', 'Hibernate'],
  },
  {
    id: 'politec-programmer',
    company: 'Politec Informática',
    companyUrl: 'https://en.wikipedia.org/wiki/Politec',
    title: 'Java Programmer',
    location: 'Brasília, DF, Brazil',
    start: 'Feb 2003',
    end: 'Oct 2003',
    emphasis: 'compact',
    context: 'Worked across two banking systems early in his Java career.',
    contributions: [
      {
        label: 'Banking systems',
        detail: 'Worked across two banking systems using Struts, JNI, and Hibernate.',
      },
      {
        label: 'Persistence framework',
        detail: 'Co-created a persistence framework for database access.',
      },
    ],
    technologies: ['Java', 'Struts', 'JNI', 'Hibernate'],
  },
  {
    id: 'unimed-co',
    company: 'Unimed CO',
    companyUrl: 'https://www.unimed.coop.br/site/web/centrooeste',
    title: 'Java Programmer Trainee',
    location: 'Brasília, DF, Brazil',
    start: 'Mar 2002',
    end: 'Feb 2003',
    emphasis: 'compact',
    context: 'First hands-on project: a desktop application connecting hospital branches.',
    contributions: [
      {
        label: 'Desktop application',
        detail: 'Developed a desktop app to handle transfer of internal files such as authorizations, costs, and blockers.',
      },
      {
        label: 'Reliability',
        detail: 'Built with Java and Swing, ensuring reliability and better integration between Unimed branches.',
      },
    ],
    technologies: ['Java', 'Swing'],
  },
  {
    id: 'tco',
    company: 'TCO (currently VIVO)',
    companyUrl: 'https://en.wikipedia.org/wiki/Centro-Oeste_Celular',
    title: 'SQL Server Trainee',
    location: 'Brasília, DF, Brazil',
    start: 'Mar 2001',
    end: 'Mar 2002',
    emphasis: 'compact',
    context: 'First professional role, focused on reporting and data.',
    contributions: [
      {
        label: 'Reporting & procedures',
        detail: 'Developed reports and stored procedures on SQL Server.',
      },
    ],
    technologies: ['SQL Server'],
  },
]
