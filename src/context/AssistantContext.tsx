import { useMemo, useState, type ReactNode } from 'react'
import { AssistantContext } from './assistantContextInstance'

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }),
    [isOpen],
  )

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>
}
