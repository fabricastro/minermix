'use client'

import { motion } from 'framer-motion'
import { Mountain, Pickaxe, HardHat } from 'lucide-react'

interface MinaCardProps {
  name: string
  operator: string
  featured?: boolean
  stats: { label: string; value: string }[]
  delay?: number
}

export function MinaCard({ name, operator, featured, stats, delay = 0 }: MinaCardProps) {
  const Icon = featured ? Mountain : name === 'Vicuna' ? Pickaxe : HardHat
  return (
    <motion.div
      className="relative flex flex-col overflow-hidden rounded-md"
      style={{
        backgroundColor: featured ? 'rgba(200,151,58,0.08)' : 'rgba(22,33,62,0.5)',
        border: featured ? '1px solid rgba(200,151,58,0.35)' : '1px solid rgba(200,151,58,0.1)',
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {featured && (
        <div
          className="px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
          style={{ backgroundColor: '#c8973a', color: '#0f1520' }}
        >
          Mercado ancla
        </div>
      )}
      <div className="flex flex-col gap-3.5 p-4">
        <div className="flex items-center gap-2.5">
          <Icon size={18} style={{ color: '#c8973a' }} />
          <div>
            <h3 className="font-serif text-base font-bold" style={{ color: '#faf7f0' }}>
              {name}
            </h3>
            <p className="text-[11px]" style={{ color: 'rgba(245,237,214,0.4)' }}>
              {operator}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between py-1"
              style={{ borderBottom: '1px solid rgba(200,151,58,0.06)' }}
            >
              <span className="text-[12px]" style={{ color: 'rgba(245,237,214,0.4)' }}>
                {s.label}
              </span>
              <span className="font-mono text-[12px] font-medium" style={{ color: '#e8b84b' }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
