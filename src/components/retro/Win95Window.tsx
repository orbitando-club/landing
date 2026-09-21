import type { PointerEvent, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { motion, useDragControls, useReducedMotion } from 'framer-motion'
import { TitleBar } from './TitleBar'

interface Win95WindowProps {
  title: string
  children: ReactNode
  className?: string
  onMinimize?: () => void
}

function useViewportDragConstraints(enabled: boolean) {
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  })

  useEffect(() => {
    if (!enabled) return

    const update = () => {
      setConstraints({
        left: -window.innerWidth * 0.38,
        right: window.innerWidth * 0.38,
        top: -64,
        bottom: window.innerHeight * 0.58,
      })
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [enabled])

  return constraints
}

export function Win95Window({
  title,
  children,
  className = '',
  onMinimize,
}: Win95WindowProps) {
  const reducedMotion = useReducedMotion()
  const dragControls = useDragControls()
  const constraints = useViewportDragConstraints(true)

  const handleDragStart = (event: PointerEvent) => {
    dragControls.start(event)
  }

  return (
    <motion.div
      className="w-full min-w-0"
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.08}
      dragConstraints={constraints}
      whileDrag={{ scale: 1.01, zIndex: 60 }}
      style={{ touchAction: 'none' }}
      onDragStart={() => {
        document.body.style.cursor = 'grabbing'
      }}
      onDragEnd={() => {
        document.body.style.cursor = ''
      }}
      {...(!reducedMotion
        ? {
            initial: { opacity: 0, scale: 0.96, y: 12 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.35, ease: 'easeOut' as const },
          }
        : {})}
    >
      <div
        className={`w-full overflow-hidden border-2 border-orb-black bg-orb-white shadow-hard ${className}`}
      >
        <TitleBar title={title} onMinimize={onMinimize} onDragStart={handleDragStart} />
        <div className="rainbow-rule" />
        {children}
      </div>
    </motion.div>
  )
}
