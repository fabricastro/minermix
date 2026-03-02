'use client'

import { motion } from 'framer-motion'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

const stats = [
  { value: '+27%', label: 'metabolismo basal', desc: 'gasto calórico en altitud extrema' },
  { value: '−20°C', label: 'temperatura', desc: 'condiciones habituales de operación' },
  { value: '12 h', label: 'turno continuo', desc: 'sin acceso a comedor' },
  { value: '5×', label: 'demanda energética', desc: 'vs. nivel del mar' },
]

export function Problema() {
  return (
    <section className="relative py-24 md:py-36" style={{ backgroundColor: '#0a0f1c' }}>
      {/* Thin gold separator from Hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: '80%', maxWidth: 900, height: 1, backgroundColor: 'rgba(200,151,58,0.08)' }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Left */}
          <div className="md:col-span-4">
            <RevealWrapper>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: '#c8973a' }}>
                El desafío
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.08}>
              <h2
                className="mt-4 font-serif font-bold leading-[1.05] tracking-tight"
                style={{ color: '#faf7f0', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
              >
                El trabajo en altitud
                <br />
                exige más.
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={0.16}>
              <p className="mt-5 text-[15px] leading-[1.8]" style={{ color: 'rgba(250,247,240,0.42)' }}>
                A más de 4.000 msnm el cuerpo enfrenta hipoxia, frío
                intenso y esfuerzo físico constante. La demanda calórica
                se dispara. Los snacks convencionales no están pensados
                para este contexto. MinerMix sí.
              </p>
            </RevealWrapper>
          </div>

          {/* Right: stats */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(200,151,58,0.08)' }}>
              {stats.map((stat, i) => (
                <RevealWrapper key={stat.label} delay={0.06 + i * 0.06}>
                  <div
                    className="flex flex-col gap-2 p-7 md:p-9"
                    style={{ backgroundColor: '#0a0f1c' }}
                  >
                    <motion.span
                      className="font-mono font-bold leading-none"
                      style={{ color: '#c8973a', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: '#e8b84b' }}>
                      {stat.label}
                    </span>
                    <span className="text-[13px] leading-relaxed" style={{ color: 'rgba(250,247,240,0.38)' }}>
                      {stat.desc}
                    </span>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
