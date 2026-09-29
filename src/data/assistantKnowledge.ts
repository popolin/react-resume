import { certificationGroups } from './certifications'

import { siteMeta } from './siteMeta'

export interface KnowledgeEntry {
  id: string
  keywords: string[]
  answer: string
}

/**
 * Local knowledge base the AI assistant matches against.
 * Content is derived only from the résumé and site copy — no fabricated experience.
 * Replace `assistantService`'s local matcher with a real LLM call once a backend exists;
 * this file can be passed along as grounding context/system data at that point.
 */
export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'contact',
    keywords: [
      'contact',
      'reach',
      'get in touch',
      'hire',
      'hiring',
      'email',
      'linkedin',
      'connect',
      'available',
      'opportunity',
      'opportunities',
    ],
    answer: `You can reach Michel directly by email at ${siteMeta.email} or connect on LinkedIn (${siteMeta.social.linkedin}). His résumé is also downloadable from the Resume button on this site, and the footer has the same contact links.`,
  },
  {
    id: 'backend-experience',
    keywords: ['backend', 'back-end', 'back end', 'server-side', 'server side'],
    answer:
      "Michel has 24+ years of backend engineering experience, with deep specialization in Node.js (v14–v24+) and TypeScript, plus a strong foundation in Java and Ruby on Rails. He's built high-concurrency BFF services at PayPal, event-driven pipelines at Clearco, and GraphQL/NestJS platforms at Clipboard Health.",
  },
  {
    id: 'node-typescript',
    keywords: ['node', 'nodejs', 'node.js', 'typescript'],
    answer:
      'Michel has worked with Node.js across versions 14 through 24+ and TypeScript 4.x/5.x for most of the last decade, including leading a Node 16 → 24 runtime migration with strict TypeScript adoption at Clearco.',
  },
  {
    id: 'fintech',
    keywords: ['fintech', 'financial', 'payments', 'payment'],
    answer:
      'Yes. Michel currently works at Clearco on financial ingestion pipelines — where he cut critical API response times by ~86% — and previously built high-concurrency payment middleware at PayPal supporting millions of onboarding transactions.',
  },
  {
    id: 'clearco',
    keywords: ['clearco', 'clearbanc'],
    answer:
      'At Clearco, Michel led a Node.js runtime migration (v16 → v24) and a frontend migration from Vue 2 to Vue 3, cut critical API response times by ~86% (12s → 1.6s), designed event-driven pipelines on GCP Pub/Sub, RabbitMQ, and Redis, and built the downstream service consuming the data team\u2019s LLM-powered financial statement parsing pipeline, helping cut review time from hours to under 15 minutes.',
  },
  {
    id: 'distributed-systems',
    keywords: ['distributed', 'microservices', 'event-driven', 'event driven', 'architecture'],
    answer:
      'Distributed systems are a core specialty: event-driven microservices with GCP Pub/Sub, RabbitMQ, and Redis at Clearco and Clipboard Health, plus a postgraduate degree in Distributed Computing and OO Architecture from Universidade de Brasília.',
  },
  {
    id: 'mobile',
    keywords: ['mobile', 'react native', 'ios', 'android', 'frontend', 'front-end', 'front end'],
    answer:
      "While backend and distributed systems are the core focus, Michel has real full-stack and mobile experience: React and Vue frontends (PayPal, Digital Trends, and a Vue 2 → 3 modernization at Clearco), plus cross-platform mobile features with React Native, Ionic, and Capacitor at Clipboard Health.",
  },
  {
    id: 'apis',
    keywords: ['api', 'apis', 'graphql', 'rest', 'restful', 'bff'],
    answer:
      'Extensive API experience: GraphQL (Apollo and NestJS GraphQL) with complex nested resolvers at Clipboard Health, RESTful microservices and BFF middleware at PayPal and Clearco, and REST/GraphQL device-integration APIs at Trix Tecnologia.',
  },
  {
    id: 'ai-llm',
    keywords: ['ai', 'llm', 'artificial intelligence', 'machine learning', 'rag'],
    answer:
      "AI is a current, additional capability rather than Michel's primary identity as a Senior Software Engineer. At Clearco, the data team built an LLM-powered pipeline for automated financial statement parsing, and Michel built the downstream service that reads the processed results into onboarding workflows, helping cut due-diligence review time from hours to under 15 minutes. He also actively works with AI-assisted development tools.",
  },
  {
    id: 'industries',
    keywords: ['industries', 'industry', 'domains', 'sectors'],
    answer:
      'Michel has worked across fintech (Clearco, PayPal), healthtech (Clipboard Health, Trix Tecnologia), digital media (Digital Trends), and earlier in his career, telecom, banking, and government systems (Global Web, Politec, CastMeta, NCT, TCO/VIVO).',
  },
  {
    id: 'entrepreneurship',
    keywords: ['startup', 'founder', 'entrepreneur', 'entrepreneurship', 'pixidea', 'own company'],
    answer:
      'Yes — Michel co-founded PixIdea Tecnologia (2012–2015), a startup building software for personal trainers and nutritionists across Ruby on Rails, Java, and Swift. The company was selected for a Silicon Valley acceleration program in 2013 and raised investment.',
  },
  {
    id: 'java-enterprise',
    keywords: ['java', 'enterprise', 'legacy', 'telecom', 'banking', 'government', 'ejb', 'jsf'],
    answer:
      "Before specializing in Node.js, Michel spent about a decade in enterprise Java: leading architecture for Brazil's largest telecom operator at Global Web (JSF, JBoss Seam, EJB), and delivering banking and government systems at Politec, CastMeta, and NCT Informática.",
  },
  {
    id: 'recent-experience',
    keywords: ['recent', 'current', 'currently', 'now', 'latest'],
    answer:
      "Michel is currently a Senior Software Engineer at Clearco, remote from Toronto, since April 2023 — focused on runtime and frontend modernization, event-driven architecture, and production reliability for financial ingestion pipelines.",
  },
  {
    id: 'healthtech',
    keywords: ['healthtech', 'health tech', 'healthcare', 'medical', 'clipboard'],
    answer:
      'Healthtech experience spans Clipboard Health (GraphQL/NestJS healthcare shift-matching with real-time geofencing telemetry and mobile features) and Trix Tecnologia (direct integration with laboratory equipment, diagnostic devices, and PACS/DICOM imaging servers).',
  },
  {
    id: 'device-integration',
    keywords: ['device', 'hardware', 'iot', 'telemetry', 'dicom', 'pacs', 'websocket'],
    answer:
      "At Trix Tecnologia, Michel engineered low-level protocol interfaces and stream processing connecting directly to medical laboratory equipment, diagnostic hardware, and PACS/DICOM imaging servers, plus WebSocket pipelines for real-time patient queue panels.",
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'certification', 'certifications', 'certificate', 'certificates', ...certificationGroups.flatMap((group) => [group.issuer.toLowerCase(), ...group.certifications.map((certification) => certification.name.toLowerCase())])],
    answer:
      'Michel holds a postgraduate degree in Distributed Computing and OO Architecture (Universidade de Brasília, 2005–2007), a Bachelor\u2019s in Computer Science (Universidade Paulista, 2000–2004). Certifications: ' + certificationGroups.map((group) => `${group.issuer}: ${group.certifications.map((certification) => `${certification.name} — ${certification.title}`).join('; ')}`).join('. '),
  },
  {
    id: 'testing-quality',
    keywords: ['testing', 'quality', 'test coverage', 'vitest', 'playwright', 'jest'],
    answer:
      'Michel established automated testing strategies using Vitest, Playwright, and Jest, and led unit/E2E test coverage standards during API and frontend modernization at Clipboard Health and Clearco — part of a reliability push that cut production regressions by ~40% at Clearco.',
  },
]
