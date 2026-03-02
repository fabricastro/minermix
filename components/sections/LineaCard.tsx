'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LineaCardProps {
  name: string
  title: string
  description: string
  kcal: number
  ingredients: string[]
  color: string
  image: string
  delay?: number
}

export function LineaCard({
  name,
  title,
  description,
  kcal,
  ingredients,
  color,
  image,
  delay = 0,
}: LineaCardProps) {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.05)',
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.1)' }}
    >
      {/* Image area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: 300,
          backgroundColor: '#0a0f1c',
          background: 'linear-gradient(180deg, #0d1425 0%, #0a0f1c 50%, #0c1220 100%)',
        }}
      >
        {/* Warm glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(200,151,58,0.12) 0%, transparent 65%)',
          }}
        />

        <motion.div
          className="relative"
          style={{ width: 160, height: 240 }}
          whileHover={{ scale: 1.05, y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={`MinerMix ${name}`}
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 18px 40px rgba(0,0,0,0.55)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
            }}
            sizes="160px"
          />
        </motion.div>

        {/* Kcal badge */}
        <div
          className="absolute top-4 right-4 px-2.5 py-1 font-mono text-[11px] font-bold"
          style={{ backgroundColor: color, color: '#faf7f0' }}
        >
          {kcal} kcal
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-4">
        <h3 className="font-serif text-xl font-bold" style={{ color: '#0a0f1c' }}>
          {title}
        </h3>
        <p className="text-[14px] leading-[1.75]" style={{ color: '#6b6356' }}>
          {description}
        </p>
      </div>

      {/* Ingredients */}
      <div
        className="flex flex-wrap gap-1.5 px-6 py-4"
        style={{ borderTop: '1px solid rgba(200,151,58,0.1)' }}
      >
        {ingredients.map((ing) => (
          <span
            key={ing}
            className="px-2.5 py-1 font-mono text-[10px] font-medium"
            style={{ backgroundColor: 'rgba(200,151,58,0.09)', color: '#9a7020' }}
          >
            {ing}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
