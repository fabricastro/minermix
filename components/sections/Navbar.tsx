'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Mercado', href: '#mercado' },
  { label: 'Propuesta', href: '#propuesta' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10,15,28,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,151,58,0.1)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#" className="flex items-center">
          <img
            src="/images/logo-minermix.svg"
            alt="MinerMix"
            className="h-8 w-auto"
            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(1.5) hue-rotate(5deg) brightness(0.9)' }}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ color: 'rgba(250,247,240,0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c8973a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,240,0.5)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="border px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200"
            style={{ borderColor: '#c8973a', color: '#c8973a' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c8973a'
              e.currentTarget.style.color = '#0a0f1c'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#c8973a'
            }}
          >
            Contacto
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
          style={{ color: '#faf7f0' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="overflow-hidden md:hidden"
            style={{ backgroundColor: 'rgba(10,15,28,0.99)', borderTop: '1px solid rgba(200,151,58,0.1)' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: 'rgba(250,247,240,0.6)', borderBottom: '1px solid rgba(200,151,58,0.07)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-5">
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="block border px-5 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ borderColor: '#c8973a', color: '#c8973a' }}
                >
                  Contacto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
