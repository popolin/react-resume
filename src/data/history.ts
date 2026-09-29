export type HistorySegment = string | { text: string; href: string }

export const historyChapters = [
  { id: 'spark', title: 'The spark', description: 'MS-DOS, AOL, and getting up early to use the internet.' },
  { id: 'career', title: 'Turning curiosity into a career', description: 'College at night, courses on weekends, and my first programming jobs.' },
  { id: 'own-path', title: 'Building my own path', description: 'Starting a company, visiting Silicon Valley, and working in healthcare.' },
  { id: 'new-chapter', title: 'A new chapter', description: 'Becoming a father, working abroad, and moving with my family.' },
] as const

export interface HistoryEntry {
  id: string
  period: string
  title: string
  chapter: (typeof historyChapters)[number]['id']
  milestone?: boolean
  segments: HistorySegment[]
  subItems?: { label: string; text: string }[]
}

export const historyTimeline: HistoryEntry[] = [
  {
    id: 'first-computer',
    title: 'My first computer',
    chapter: 'spark',
    period: 'The 90s',
    segments: [
      'Got my very first computer. Back then, running a game meant dealing with MS-DOS — it was tricky, but magical.',
    ],
  },
  {
    id: 'first-internet',
    title: 'My first internet connection',
    chapter: 'spark',
    period: '1994',
    segments: [
      'Connected to the internet for the first time. Websites were just starting in Brazil, and opening a single image could take several minutes.',
    ],
  },
  {
    id: 'aol',
    title: 'The sound of dial-up',
    chapter: 'spark',
    period: '1995',
    segments: [
      'Subscribed to my first internet provider: AOL. I can still hear that unforgettable dial-up tone trying to connect. I even installed it from a floppy disk.',
    ],
  },
  {
    id: 'first-course',
    title: 'My first computer course',
    chapter: 'spark',
    period: '1995',
    segments: [
      "Took my very first computer course: MS-DOS, Word, Excel, and PowerPoint. My teacher's name was Abi, and I still remember the excitement of learning those tools.",
    ],
  },
  {
    id: 'irc',
    title: 'Finding a community online',
    chapter: 'spark',
    period: '1996',
    segments: [
      'A friend of mine, Rogério, introduced me to ',
      { text: 'IRC', href: 'https://pt.wikipedia.org/wiki/Internet_Relay_Chat' },
      '. I spent hours chatting with people online and even woke up super early to connect — since internet time was expensive back then.',
    ],
  },
  {
    id: 'web-design',
    title: 'Discovering web design',
    chapter: 'career',
    period: 'Age 19',
    segments: [
      'Took a Web Design course at ',
      { text: 'Studio Online', href: 'https://www.studioonline.com.br' },
      ', learning Photoshop, Dreamweaver, and other tools. My teacher, Fred, was a big inspiration.',
    ],
  },
  {
    id: 'unip',
    title: 'Starting my Computer Science degree',
    chapter: 'career',
    period: 'Age 20',
    segments: [
      'Began my Computer Science degree at ',
      { text: 'UNIP', href: 'http://unip.br' },
      ', where I first learned about algorithms, programming logic, and coding basics.',
    ],
  },
  {
    id: 'senac',
    title: 'Delphi, databases, and my first website',
    chapter: 'career',
    period: '2001',
    segments: [
      'Alongside my degree, I studied ',
      { text: 'MER', href: 'https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model' },
      ' and ',
      { text: 'Delphi', href: 'https://en.wikipedia.org/wiki/Delphi_(software)' },
      ' at ',
      { text: 'Senac', href: 'https://www.senac.br' },
      ' to explore different career paths. That same year, I built my first website — a simple static page full of information about September 11.',
    ],
  },
  {
    id: 'first-jobs',
    title: 'Work, study, repeat',
    chapter: 'career',
    period: '2001',
    segments: [
      'Landed my first roles: mornings as a Database Reports Trainee at ',
      { text: 'Vivo', href: 'https://pt.wikipedia.org/wiki/TCO' },
      ', and afternoons as a Call Center Attendant at ',
      { text: 'Banco do Brasil', href: 'https://www.bbts.com.br' },
      '. At the same time, I was studying at night and taking a Java course at ',
      { text: 'Blue Star', href: 'http://bluestar.technology' },
      ' on weekends.',
    ],
  },
  {
    id: 'unimed',
    title: 'My first project, built solo',
    chapter: 'career',
    period: 'Early 2002',
    segments: [
      'Became a Java Programmer at ',
      { text: 'Unimed', href: 'https://www.unimed.coop.br' },
      ', where I developed a Swing application to exchange POP/SMTP information between hospitals and other branches — my first real project, done solo.',
    ],
  },
  {
    id: 'java-marathon',
    title: 'Winning the Java Marathon',
    chapter: 'career',
    milestone: true,
    period: 'Age 22',
    segments: ['Won the Java Marathon at the Catholic University of Brasília — a proud milestone early in my career 🏆.'],
  },
  {
    id: 'own-company',
    title: 'Starting my own company',
    chapter: 'own-path',
    period: 'Age 31',
    segments: ['Started my own company, focused on startups.'],
  },
  {
    id: 'techmission',
    title: 'Taking my startup to Silicon Valley',
    chapter: 'own-path',
    milestone: true,
    period: '2013',
    segments: [
      'At 32, my startup was selected for ',
      {
        text: 'TechMission',
        href: 'https://revistapegn.globo.com/Startups/noticia/2013/08/conheca-startups-vencedoras-da-techmission-2013.html',
      },
      ', an acceleration program in Silicon Valley. It was my first experience with an accelerator in Silicon Valley.',
    ],
  },
  {
    id: 'trix',
    title: 'Building software for clinics and labs',
    chapter: 'own-path',
    period: '2015',
    segments: [
      'Joined Trix Tecnologia to build apps for clinics and laboratories. The work also took me to different parts of Brazil.',
    ],
  },
  {
    id: '2021',
    title: 'Becoming a father and working with U.S. teams',
    chapter: 'new-chapter',
    milestone: true,
    period: '2021',
    segments: ['Two incredible things happened in my life:'],
    subItems: [
      {
        label: 'Personal',
        text: 'My daughter was born — the biggest love of my life and my greatest source of inspiration. ❤️',
      },
      {
        label: 'Professional',
        text: 'I started working for U.S.-based companies such as Digital Trends, Clipboard Health, and PayPal, marking another major milestone and opening the door to global projects.',
      },
    ],
  },
  {
    id: 'clearco',
    title: 'Joining Clearco',
    chapter: 'new-chapter',
    period: '2023',
    segments: ['Joined Clearco, a Canadian company, to work on financial software.'],
  },
  {
    id: 'toronto',
    title: 'Meeting the team in Toronto',
    chapter: 'new-chapter',
    period: '2024',
    segments: ['Traveled to Toronto to meet my team in person.'],
  },
  {
    id: 'moved-us',
    title: 'A new home for our family',
    chapter: 'new-chapter',
    milestone: true,
    period: '2025',
    segments: [
      'My family and I moved to the U.S. It was something I had wanted to do for a long time.',
    ],
  },
]

export const likes = ['Movies 🎬', 'Playing tennis', 'Working out', 'Spending time with family']

export const dreams = [
  'Being proud of my journey',
  'Enabling a brighter future',
  'Always doing better',
  'Educating my daughter to be a kind and good person 💖',
]
