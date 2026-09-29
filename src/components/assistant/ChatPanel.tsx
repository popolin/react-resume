import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, Sparkles, X } from 'lucide-react'
import { useAssistant } from '../../hooks/useAssistant'
import { askAssistant, suggestedQuestions, type AssistantMessage } from '../../services/assistantService'

const INTRO: AssistantMessage = {
  role: 'assistant',
  content:
    "Hi, I'm a small assistant trained only on Michel's résumé and site content. Ask me about his backend experience, specific companies, or industries.",
}

export function ChatPanel() {
  const assistant = useAssistant()
  const [messages, setMessages] = useState<AssistantMessage[]>([INTRO])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (assistant.isOpen) {
      inputRef.current?.focus()
    }
  }, [assistant.isOpen])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isThinking])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') assistant.close()
    }
    if (assistant.isOpen) document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [assistant])

  async function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isThinking) return

    const nextMessages: AssistantMessage[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(nextMessages)
    setInput('')
    setIsThinking(true)

    const answer = await askAssistant(trimmed, nextMessages)
    setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
    setIsThinking(false)
  }

  return (
    <AnimatePresence>
      {assistant.isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Ask Michel's AI assistant about his experience"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 flex h-[min(34rem,80vh)] flex-col rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50 sm:inset-x-auto sm:right-8 sm:bottom-8 sm:w-[26rem]"
        >
          <header className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent-secondary" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-ink">Ask about Michel</p>
                <p className="text-xs text-ink-faint">Grounded in résumé &amp; site content</p>
              </div>
            </div>
            <button
              type="button"
              onClick={assistant.close}
              aria-label="Close assistant"
              className="rounded-full p-2 text-ink-muted hover:bg-surface-hover hover:text-ink transition-colors"
            >
              <X size={16} />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto bg-accent text-accent-ink'
                    : 'bg-bg border border-border/70 text-ink-muted'
                }`}
              >
                {message.content}
              </div>
            ))}
            {isThinking && (
              <div className="max-w-[85%] rounded-xl border border-border/70 bg-bg px-4 py-2.5 text-sm text-ink-faint">
                Thinking…
              </div>
            )}

            {messages.length === 1 && (
              <div className="pt-2">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">Try asking</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 5).map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-border-strong px-3 py-1.5 text-left text-xs text-ink-muted hover:border-accent-secondary hover:text-ink transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            className="flex items-center gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask about Michel's experience…"
              aria-label="Ask about Michel's experience"
              className="flex-1 rounded-full border border-border-strong bg-bg px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-secondary"
            />
            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              aria-label="Send message"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink disabled:opacity-40 hover:bg-accent-strong transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
