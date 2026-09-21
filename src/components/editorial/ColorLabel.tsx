import { motion } from 'framer-motion'

const colorClasses = {
  magenta: 'bg-orb-magenta',
  yellow: 'bg-orb-yellow',
  cyan: 'bg-orb-cyan',
  orange: 'bg-orb-orange',
  green: 'bg-orb-green text-orb-white',
} as const

interface ColorLabelProps {
  text: string
  color: keyof typeof colorClasses
  className?: string
}

export function ColorLabel({ text, color, className = '' }: ColorLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className={`inline-block border-2 border-orb-black px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-orb-black shadow-hard-sm ${colorClasses[color]} ${className}`}
    >
      {text}
    </motion.span>
  )
}
