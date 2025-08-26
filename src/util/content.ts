import { IResume } from '../components/Body';

export const resume: IResume = {
  header: {
    name: 'Michel Popolin de Freitas',
    shortName: 'Michel Popolin',
    email: 'micpopolin@gmail.com',
    city: 'Orlando',
    country: 'United States',
    birthdate: '1981-07-01',
    photo: 'https://avatars.githubusercontent.com/u/8530763',
  },

  contacts: [
    { label: 'Email', link: 'mailto:micpopolin@gmail.com' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/popolin/' },
    { label: 'Github', link: 'https://github.com/popolin' },
  ],
  countries: {
    total: '5',
    map: '',
  },
  degrees: [
    {
      degree:
        'Postgraduation - Specialization in Distributed Systems and Object Orientation',
      school: 'Universidade de Brasília',
      begin: '2005',
      end: '2007',
    },
    {
      degree: "Bachelor's degree in Computer Science",
      school: 'Universidade Paulista',
      begin: '2001',
      end: '2005',
    },
  ],
  skills: [
    {
      category: ['Programming Languages'],
      competency: 'Expert',
      title: 'Java, JavaScript, TypeScript',
    },
    {
      category: ['Programming Languages'],
      competency: 'Advanced',
      title: 'SQL, HTML5, CSS3, JSON, XML',
    },

    // --- Backend Development ---
    {
      category: ['Backend'],
      competency: 'Expert',
      title: 'Node.js, NestJS, Express.js',
    },
    {
      category: ['Backend'],
      competency: 'Advanced',
      title: 'Java EE, JPA, EJB, WebServices, JSP/Servlets',
    },
    {
      category: ['Backend'],
      competency: 'Advanced',
      title: 'REST API Design, GraphQL',
    },

    // --- Frontend Development ---
    {
      category: ['Frontend'],
      competency: 'Expert',
      title: 'Vue.js, React.js',
    },
    {
      category: ['Frontend'],
      competency: 'Advanced',
      title: 'Next.js, Nuxt.js, Microfrontends',
    },
    {
      category: ['Frontend'],
      competency: 'Intermediate',
      title: 'RichFaces, JSF, Bootstrap, Tailwind',
    },

    // --- Mobile Development ---
    {
      category: ['Mobile'],
      competency: 'Advanced',
      title: 'React Native, Ionic, Capacitor',
    },
    {
      category: ['Mobile'],
      competency: 'Intermediate',
      title: 'Java (Android), Swift (iOS)',
    },

    // --- Databases ---
    {
      category: ['Databases'],
      competency: 'Advanced',
      title: 'PostgreSQL, MySQL, SQL Server, Oracle, MongoDB',
    },
    {
      category: ['Databases'],
      competency: 'Intermediate',
      title: 'Caché Database',
    },

    // --- Architecture & Best Practices ---
    {
      category: ['Architecture'],
      competency: 'Expert',
      title: 'Object-Oriented Programming (OOP), SOLID Principles',
    },
    {
      category: ['Architecture'],
      competency: 'Expert',
      title: 'Clean Code, Design Patterns, Software Architecture',
    },
    {
      category: ['Architecture'],
      competency: 'Advanced',
      title: 'Distributed Systems, Microservices',
    },

    // --- Tools & Ecosystem ---
    {
      category: ['Tools'],
      competency: 'Advanced',
      title: 'Git, Docker, Kubernetes, Jenkins, CI/CD',
    },
    {
      category: ['Tools'],
      competency: 'Intermediate',
      title: 'ElasticSearch, Radar.com, Sentry, Grafana',
    },

    // --- Cloud Platforms ---
    {
      category: ['Cloud'],
      competency: 'Intermediate',
      title: 'AWS, Azure',
    },

    // --- Testing ---
    {
      category: ['Testing'],
      competency: 'Advanced',
      title: 'Unit Testing, Integration Testing, End-to-End Testing',
    },
    {
      category: ['Testing'],
      competency: 'Intermediate',
      title: 'Vitest, Jest, Cypress',
    },
  ],
  positions: [
    {
      begin: '2023-04-26',
      company: 'ClearCo (via Taller Technologies)',
      position: 'Senior Software Engineer',
      points: [
        'Worked on software development using NestJS and VueJS.',
        'Created architecture diagrams consolidating documentation.',
        'Developed Feature Flags system, reducing costs by eliminating a prior paid platform.',
        'Participated in Agile ceremonies: daily standups, plannings, retrospectives.',
      ],
    },
    {
      begin: '2022-03-17',
      end: '2023-03-31',
      company: 'PayPal (via Taller Technologies)',
      position: 'Javascript Web Developer',
      points: [
        'Developed signup and onboarding flows in Node.js and ReactJS.',
        'Implemented experiments for user acceptance and feature rollout.',
        'Created and maintained unit/integration tests.',
        'Monitored production features and tracked errors.',
      ],
    },
    {
      begin: '2022-03-14',
      end: '2023-03-18',
      company: 'Clipboard Health (via BairesDev)',
      position: 'Senior Software Engineer',
      points: [
        'Migrated Express endpoints to NestJS as company standard.',
        'Developed mobile apps with React Native, Ionic, and Capacitor.',
        'Integrated geofencing via Radar.com enabling instant healthcare payments.',
        'Analyzed geomonitoring data, investigated inconsistencies, and fixed issues.',
      ],
    },
    {
      begin: '2021-02-22',
      end: '2022-03-15',
      company: 'Digital Trends (via BairesDev)',
      position: 'Senior Software Engineer',
      points: [
        'Refactored architecture for maintainability and readability.',
        'Implemented authentication and authorization with tokens.',
        'Built SEO tools comparing competitors’ metrics.',
        'Integrated systems with Amazon, BestBuy, and marketplaces.',
      ],
    },
    {
      begin: '2015-06-10',
      end: '2021-02-07',
      company: 'Trix Tecnologia',
      position: 'Software Architect',
      points: [
        'Built management systems for clinics and labs.',
        'Integrated PACS servers for imaging exams.',
        'Migrated systems to Node/React stack reducing costs.',
        'Developed mobile apps for healthcare providers and patients.',
      ],
    },
    {
      begin: '2016-06-10',
      end: '2019-02-07',
      company: 'Saint Solutions',
      position: 'Software Architect',
      points: [
        'Developed exchange systems for blockchain and cryptocurrencies.',
        'Ruby on Rails for web development and backend.',
        'Created Android/iOS apps with Java and Swift.',
        'Implemented two-factor authentication and wallet generation.',
      ],
    },
    {
      begin: '2012-07-12',
      end: '2015-06-05',
      company: 'PixIdea Tecnologia',
      position: 'Co-founder / Software Engineer',
      points: [
        'Founded startup, led product development for personal trainers/nutritionists.',
        'Developed Ruby on Rails + Java/Swift apps.',
        'Selected to acceleration program in Silicon Valley 2013.',
        'Raised investment and gained media exposure.',
      ],
    },
    {
      begin: '2008-05',
      end: '2012-07',
      company: 'TBA Group',
      position: 'Java Tech Lead / Architect',
      points: [
        'Led architecture and development for Brazil’s largest telecom operator.',
        'Stack: JSF, RichFaces, JPA, JBoss Seam, WebServices, EJB, and more.',
        'Company link: http://www.b2br.com.br',
      ],
    },
    {
      begin: '2006-08',
      end: '2008-05',
      company: 'NCT Informática',
      position: 'Systems Analyst',
      points: [
        'Worked with the Federal Police to elicit and document system requirements.',
        'Provided hands-on programming support in J2EE and SuperWaba (J2ME).',
        'Company link: http://www.nct.com.br',
      ],
    },
    {
      begin: '2004-10',
      end: '2006-08',
      company: 'Politec Informática',
      position: 'Systems Analyst',
      points: [
        'Delivered four banking projects; defined and implemented reusable frameworks.',
        'Team leadership from architecture through delivery.',
        'Built an Eclipse plugin to streamline Visual SourceSafe usage.',
        'Company link: http://www.politec.com.br',
      ],
    },
    {
      begin: '2003-03',
      end: '2004-10',
      company: 'CastMeta Informática',
      position: 'Java Developer',
      points: [
        'Built a government web system using Caché DB, proprietary framework, EJB, and Hibernate.',
        'Company link: http://www.castmeta.com.br',
      ],
    },
    {
      begin: '2003-02',
      end: '2003-10',
      company: 'Politec Informática',
      position: 'Java Programmer',
      points: [
        'Worked across two banking systems using Struts, JNI, and Hibernate.',
        'Co-created a persistence framework for database access.',
        'Company link: http://www.politec.com.br',
      ],
    },
    {
      begin: '2001-03',
      end: '2002-03',
      company: 'Vivo',
      position: 'Java/Oracle Trainee',
      points: [
        'Developed reports and stored procedures on SQL Server.',
        'Company link: http://www.vivo.com.br',
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
