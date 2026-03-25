'use client'

import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

const badges = ['100% San Juan', 'Sin octógonos', 'Biodegradable', 'Compre Local']

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 md:py-40"
      style={{ backgroundColor: '#0a0f1c' }}
    >
      {/* Centered glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '70%',
          height: '80%',
          background: 'radial-gradient(ellipse, rgba(200,151,58,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <RevealWrapper>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: '#c8973a' }}>
            Contacto
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2
            className="mt-5 font-serif font-bold leading-[1.0] tracking-tight"
            style={{ color: '#faf7f0', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Llevemos la energía
            <br />
            <em style={{ color: '#c8973a' }}>sanjuanina a la montaña.</em>
          </h2>
        </RevealWrapper>
{/* 
        <RevealWrapper delay={0.18}>
          <p className="mt-6 max-w-md text-[15px] leading-[1.8]" style={{ color: 'rgba(250,247,240,0.45)' }}>
            Agendá una reunión y recibí un kit de degustación con las tres líneas MinerMix.
          </p>
        </RevealWrapper> */}

        <RevealWrapper delay={0.26}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <motion.a
              href="mailto:Myfamily.5444@gmail.com?subject=Solicitud%20de%20reuni%C3%B3n%20MinerMix"
              onClick={() => track('click_email_contacto')}
              className="inline-block px-10 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ backgroundColor: '#c8973a', color: '#0a0f1c' }}
              whileHover={{ backgroundColor: '#e8b84b' }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar reunión
            </motion.a>
            <motion.a
              href="https://wa.me/5492644860541?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20MinerMix"
              onClick={() => track('click_whatsapp_contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ border: '1px solid rgba(200,151,58,0.4)', color: '#c8973a' }}
              whileHover={{ borderColor: '#c8973a', color: '#e8b84b' }}
              whileTap={{ scale: 0.98 }}
            >
              WhatsApp
            </motion.a>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.34}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em]"
                style={{ borderColor: 'rgba(200,151,58,0.2)', color: 'rgba(232,184,75,0.55)' }}
              >
                {b}
              </span>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
