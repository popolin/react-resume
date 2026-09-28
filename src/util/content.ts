import { IResume } from '../components/Body';

export const resume: IResume = {
  header: {
    name: 'Michel Popolin',
    shortName: 'Michel Popolin',
    email: 'micpopolin@gmail.com',
    city: 'Orlando',
    country: 'FL, United States',
    birthdate: '1981-07-01',
    photo: 'https://avatars.githubusercontent.com/u/8530763',
  },

  contacts: [
    { label: 'Email', link: 'mailto:micpopolin@gmail.com' },
    { label: 'Phone', link: 'tel:+16893335000' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/popolin/' },
    { label: 'Github', link: 'https://github.com/popolin' },
  ],
  countries: {
    total: '5',
    map: '',
  },
  degrees: [
    {
      degree: 'Postgraduate Degree in Distributed Computing and OO Architecture',
      school: 'Universidade de Brasília (UnB)',
      link: 'http://ft.unb.br',
      begin: '2005',
      end: '2007',
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      school: 'Universidade Paulista (UNIP)',
      link: 'https://unip.br',
      begin: '2000',
      end: '2004',
    },
  ],
  skills: [
    { category: ['Languages & Runtimes'], competency: 'Expert', title: 'Node.js (v14–v24+), TypeScript, JavaScript (ES6+), Java, Ruby on Rails, HTML5/CSS3' },
    { category: ['Backend & Architecture'], competency: 'Expert', title: 'NestJS, Express.js, GraphQL, RESTful Microservices, BFF, Event-Driven Architecture, Prisma ORM' },
    { category: ['Frontend & Mobile'], competency: 'Expert', title: 'Vue.js 2/3, Vite, React, React Native, Next.js, Ionic, Capacitor' },
    { category: ['Databases, Caching & Messaging'], competency: 'Advanced', title: 'PostgreSQL, MongoDB, RabbitMQ, Redis, Elasticsearch, Google Cloud Pub/Sub' },
    { category: ['DevOps & Observability'], competency: 'Advanced', title: 'AWS, GCP, Docker, Kubernetes, Terraform, Grafana, Sentry, Datadog, Auth0, Bitrise' },
    { category: ['Testing & Quality'], competency: 'Advanced', title: 'Vitest, Playwright, Jest, Unit Testing, E2E Testing Strategies' },
  ],
  positions: [
    {
      begin: '2023-04',
      link: 'https://clear.co',
      company: 'ClearCo',
      position: 'Senior Software Engineer',
      points: [
        'Spearheaded Node.js 16 to Node.js 24 migration and Vue 2 to Vue 3 modernization with Vite, TypeScript, Vitest, and Playwright.',
        'Slashed critical API response times by approximately 86%, from 12 seconds to 1.6 seconds, by eliminating N+1 queries, adding targeted indexes, and bounding I/O concurrency.',
        'Architected event-driven microservice pipelines with GCP Pub/Sub, RabbitMQ, and Redis.',
        'Engineered LLM-powered financial statement analysis pipelines, reducing due diligence review time to under 15 minutes.',
        'Reduced production regressions by approximately 40% with strict typing, automated tests, Grafana, and Sentry.',
      ],
    },
    {
      begin: '2022-05',
      end: '2023-04',
      link: 'https://www.clipboardhealth.com',
      company: 'Clipboard Health',
      position: 'Senior Software Engineer',
      points: [
        'Architected high-throughput NestJS microservices with GraphQL and MongoDB for healthcare shift matching.',
        'Engineered RabbitMQ and Redis geofencing pipelines processing thousands of concurrent telemetry events and automating instant payouts.',
        'Developed mobile features with React Native, Ionic, and Capacitor and configured Bitrise CI/CD.',
        'Led the transition from legacy Express endpoints to modular NestJS microservices in strict TypeScript.',
      ],
    },
    {
      begin: '2022-01',
      end: '2023-03',
      link: 'https://www.paypal.com',
      company: 'PayPal',
      position: 'Senior Software Engineer',
      points: [
        'Engineered high-concurrency Node.js/TypeScript BFF middleware connecting React frontends with core Java payment APIs.',
        'Diagnosed and resolved production memory leaks, race conditions, and asynchronous execution bottlenecks under strict security SLAs.',
      ],
    },
    {
      begin: '2021-02',
      end: '2022-07',
      link: 'https://www.digitaltrends.com',
      company: 'Digital Trends',
      position: 'Senior Software Engineer',
      points: [
        'Refactored a monolithic media engine into modular Node.js/TypeScript microservices with centralized JWT authentication.',
        'Integrated GraphQL APIs with Elasticsearch and Redis to aggregate Amazon and BestBuy product catalogs for search and advertising.',
      ],
    },
    {
      begin: '2015-06',
      end: '2021-02-07',
      link: 'https://www.trixti.com.br',
      company: 'Trix Tecnologia',
      position: 'Tech Lead Engineer',
      points: [
        'Directed backend architecture for a nationwide clinical suite, evolving Java and Ruby on Rails monoliths into Node.js microservices.',
        'Engineered protocol interfaces and stream processing for laboratory equipment, diagnostic hardware, and PACS/DICOM imaging servers.',
        'Built WebSocket and event-driven pipelines synchronizing clinical queue panels with web and mobile clients in real time.',
      ],
    },
  ],
  courses: [
    {
      title: 'Master NestJS 9 - Node.js',
      school: 'Udemy',
      candidate: 'Node.js',
      begin: '2022',
      duration: '',
    },
    {
      title: 'Next.js Dev to Deployment',
      school: 'Udemy',
      candidate: 'Next.js',
      begin: '2022',
      duration: '',
    },
    {
      title: 'Modern GraphQL with Node',
      school: 'Udemy',
      candidate: 'GraphQL',
      begin: '2022',
      duration: '',
    },
    {
      title: 'Microfrontends with React',
      school: 'Udemy',
      candidate: 'React',
      begin: '2022',
      duration: '',
    },
    {
      title: 'Git for Geeks',
      school: 'Udemy',
      candidate: 'Git',
      begin: '2022',
      duration: '',
    },
    {
      title: 'GoStack 14 - NodeJS, ReactJS, React Native',
      school: 'Rocketseat',
      candidate: 'Fullstack',
      begin: '2020',
      duration: '',
    },
    {
      title: 'Sebrae - Empretec',
      school: 'Sebrae',
      candidate: 'Entrepreneurship',
      begin: '2016',
      duration: '',
    },
    {
      title: 'Fellowship Program',
      school: 'Brazil Innovators',
      candidate: 'Innovation',
      begin: '2013',
      duration: '',
    },
    {
      title: 'Enterprise Java Beans',
      school: 'CastMeta',
      candidate: 'Java',
      begin: '2003',
      duration: '',
    },
  ],
  certifications: [
    {
      from: 'Linux Foundation',
      tests: [{ shortName: 'JSNSD', title: 'Node.js Services Developer' }],
    },
    {
      from: 'Oracle',
      tests: [
        {
          shortName: 'SCEA',
          title: 'Sun Certified Enterprise Architect for J2EE 1.3',
        },
        {
          shortName: 'SCWCD',
          title: 'Sun Certified Web Component Developer for J2EE 1.3',
        },
        {
          shortName: 'SCJP 5.0',
          title: 'Sun Certified Java Programmer for Platform 5',
        },
        {
          shortName: 'SCJP 1.4',
          title: 'Sun Certified Java Programmer for Platform 1.4',
        },
        {
          shortName: 'SCJD',
          title: 'Sun Certified Developer for Java 2 Platform',
        },
        {
          shortName: 'SCMAD',
          title:
            'Sun Certified Mobile Application Developer for Java 2 Platform',
        },
        {
          shortName: 'SCJA',
          title: 'Sun Certified Associate for Java Platform',
        },
      ],
    },
    {
      from: 'OMG',
      tests: [
        {
          shortName: 'OCUP',
          title: 'OMG-Certified UML Professional Fundamental',
        },
      ],
    },
  ],
};
