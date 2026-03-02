'use client'

const footerLinks = [
  { label: 'Productos', href: '#productos' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Mercado', href: '#mercado' },
  { label: 'Propuesta', href: '#propuesta' },
  { label: 'Contacto', href: '#cta' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#060a13', borderTop: '1px solid rgba(200,151,58,0.08)' }}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <img
              src="/images/logo-minermix.svg"
              alt="MinerMix"
              className="h-7 w-auto"
              style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(1.5) hue-rotate(5deg) brightness(0.8)' }}
            />
            <p className="max-w-[220px] text-[12px] leading-[1.7]" style={{ color: 'rgba(250,247,240,0.22)' }}>
              Snacks energéticos 100% sanjuaninos para trabajo en altitud extrema.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
                style={{ color: 'rgba(250,247,240,0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c8973a')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,240,0.3)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 flex flex-col gap-1 pt-6 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: '1px solid rgba(200,151,58,0.07)' }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(250,247,240,0.18)' }}>
            © 2026 MinerMix · San Juan, Argentina
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(250,247,240,0.18)' }}>
            Inteligencia Nutricional
          </span>
        </div>
      </div>
    </footer>
  )
}
