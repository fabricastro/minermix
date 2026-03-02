'use client'

import { motion } from 'framer-motion'

interface IngItemProps {
  name: string
  zone: string
  stat: string
  color: string
  delay?: number
  isActive: boolean
  hasFilter: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function IngItem({
  name,
  zone,
  stat,
  color,
  delay = 0,
  isActive,
  hasFilter,
  onMouseEnter,
  onMouseLeave,
}: IngItemProps) {
  const dimmed = hasFilter && !isActive

  return (
    <motion.div
      className="grid grid-cols-[1fr_auto] items-center gap-4 py-4 cursor-default select-none"
      style={{
        borderBottom: '1px solid rgba(200,151,58,0.1)',
        borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
        paddingLeft: isActive ? 10 : 0,
        opacity: dimmed ? 0.28 : 1,
        transition: 'opacity 0.2s ease, border-left-color 0.2s ease, padding-left 0.2s ease',
      }}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: dimmed ? 0.28 : 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col gap-0.5">
        <span
          className="text-[15px] font-semibold transition-colors duration-200"
          style={{ color: isActive ? color : '#0a0f1c' }}
        >
          {name}
        </span>
        <span className="font-mono text-[11px]" style={{ color: '#9a7020' }}>
          {zone}
        </span>
      </div>
      <span
        className="font-mono text-[11px] font-medium text-right transition-colors duration-200"
        style={{ color: isActive ? color : 'rgba(107,99,86,0.7)' }}
      >
        {stat}
      </span>
    </motion.div>
  )
}
