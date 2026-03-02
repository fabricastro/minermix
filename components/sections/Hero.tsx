'use client'

import { motion } from 'framer-motion'
import { BagsScene } from './BagsScene'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0a0f1c', minHeight: '100svh' }}
    >
      {/* Warm radial glow — bottom left */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: '-5%',
          left: '-10%',
          width: '55%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(200,151,58,0.07) 0%, transparent 68%)',
        }}
      />
      {/* Cool radial glow — top right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-10%',
          right: '-5%',
          width: '45%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(30,60,100,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Main layout */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-20 pb-0 md:grid md:min-h-[100svh] md:grid-cols-12 md:items-center md:gap-8 md:pt-0">
        {/* Left: text — 5 cols */}
        <div className="flex flex-col py-14 md:col-span-5 md:py-0">
          <motion.p
            className="font-mono text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: '#c8973a' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            San Juan · Argentina
          </motion.p>

          <motion.h1
            className="mt-5 font-serif font-bold leading-[1.0] tracking-tight"
            style={{
              color: '#faf7f0',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Energia real
            <br />
            <em style={{ color: '#c8973a', fontStyle: 'italic' }}>de la tierra.</em>
          </motion.h1>

          <motion.div
            className="mt-6 h-px w-12"
            style={{ backgroundColor: 'rgba(200,151,58,0.45)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          />

          <motion.p
            className="mt-6 max-w-sm text-[15px] leading-[1.8]"
            style={{ color: 'rgba(250,247,240,0.45)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            Snacks formulados con frutos secos sanjuaninos para el
            rendimiento en altitud extrema. Tres lineas, tres perfiles
            de demanda energetica.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#productos"
              className="px-7 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200"
              style={{ backgroundColor: '#c8973a', color: '#0a0f1c' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e8b84b')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c8973a')}
            >
              Ver productos
            </a>
            <a
              href="#mercado"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-200"
              style={{ color: 'rgba(250,247,240,0.32)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c8973a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,240,0.32)')}
            >
              El mercado →
            </a>
          </motion.div>
        </div>

        {/* Right: product scene — 7 cols */}
        <motion.div
          className="flex items-end justify-center pb-8 md:col-span-7 md:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <BagsScene />
        </motion.div>
      </div>

      {/* Stats band */}
      <motion.div
        className="relative"
        style={{ borderTop: '1px solid rgba(200,151,58,0.12)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.95 }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6">
          {[
            { val: '4.500 msnm', lbl: 'altitud operativa' },
            { val: '90g · ziploc', lbl: 'formato de bolsa' },
            { val: '0 octógonos', lbl: 'Ley 27.642 cumplida' },
          ].map((s, i) => (
            <div
              key={s.lbl}
              className="flex flex-col gap-0.5 px-4 py-5 sm:px-7"
              style={{ borderRight: i < 2 ? '1px solid rgba(200,151,58,0.1)' : 'none' }}
            >
              <span className="font-mono text-[13px] font-bold sm:text-sm" style={{ color: '#c8973a' }}>
                {s.val}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'rgba(250,247,240,0.28)' }}>
                {s.lbl}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
