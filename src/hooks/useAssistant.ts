import { useContext } from 'react'
import { AssistantContext } from '../context/assistantContextInstance'

export function useAssistant() {
  const ctx = useContext(AssistantContext)
  if (!ctx) throw new Error('useAssistant must be used within AssistantProvider')
  return ctx
}
