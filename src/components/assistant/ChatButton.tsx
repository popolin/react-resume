import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useAssistant } from '../../hooks/useAssistant'

export function ChatButton() {
  const assistant = useAssistant()

  if (assistant.isOpen) return null

  return (
    <motion.button
      type="button"
      onClick={assistant.open}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-accent transition-colors hover:bg-accent-strong px-5 py-3.5 text-sm font-medium text-accent-ink shadow-lg shadow-black/30 md:bottom-8 md:right-8"
      aria-haspopup="dialog"
      aria-label="Open AI assistant to ask about Michel's experience"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden sm:inline">Ask my AI Assistant</span>
    </motion.button>
  )
}
