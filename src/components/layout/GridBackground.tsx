import type { ReactNode } from 'react'

interface GridBackgroundProps {
  children: ReactNode
}

export function GridBackground({ children }: GridBackgroundProps) {
  return <div className="grid-bg min-h-dvh">{children}</div>
}
