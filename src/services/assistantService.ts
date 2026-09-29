import { knowledgeBase } from '../data/assistantKnowledge'

export interface AssistantMessage {
  role: 'user' | 'assistant'
  content: string
}

const FALLBACK_ANSWER =
  "I don't have that in Michel's résumé or site content yet. Try asking about his backend experience, a specific company, distributed systems, APIs, or industries like fintech and healthtech."

function scoreEntry(query: string, keywords: string[]): number {
  const normalized = query.toLowerCase()
  return keywords.reduce((score, keyword) => (normalized.includes(keyword) ? score + keyword.length : score), 0)
}

/**
 * Local, offline matcher grounded strictly in `knowledgeBase`.
 * This is the seam for a future LLM integration: swap the body of
 * `askAssistant` for a call to a backend endpoint (never call an LLM
 * provider directly from the client, and never embed API keys here).
 */
async function localMatch(query: string): Promise<string> {
  let best: { score: number; answer: string } | null = null

  for (const entry of knowledgeBase) {
    const score = scoreEntry(query, entry.keywords)
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: entry.answer }
    }
  }

  return best?.answer ?? FALLBACK_ANSWER
}

const ASSISTANT_API_URL = import.meta.env.VITE_ASSISTANT_API_URL as string | undefined

async function remoteMatch(query: string, history: AssistantMessage[]): Promise<string> {
  const response = await fetch(ASSISTANT_API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, history }),
  })

  if (!response.ok) {
    throw new Error(`Assistant request failed with status ${response.status}`)
  }

  const data = (await response.json()) as { answer: string }
  return data.answer
}

export async function askAssistant(query: string, history: AssistantMessage[] = []): Promise<string> {
  if (ASSISTANT_API_URL) {
    try {
      return await remoteMatch(query, history)
    } catch {
      return await localMatch(query)
    }
  }

  return localMatch(query)
}

export const suggestedQuestions = [
  "What is Michel's backend experience?",
  'What experience does Michel have with Node.js and TypeScript?',
  'Has Michel worked in fintech?',
  'What did Michel work on at Clearco?',
  'Does Michel have experience with distributed systems?',
  "What is Michel's mobile development experience?",
  'What experience does Michel have with APIs?',
  'Has Michel worked with AI or LLM integrations?',
  'What industries has Michel worked in?',
  "What is Michel's most recent experience?",
]
