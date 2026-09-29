import { createContext } from 'react'

export interface AssistantContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const AssistantContext = createContext<AssistantContextValue | null>(null)
