import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { Mountain, TrendingUp, ShieldCheck, Leaf } from 'lucide-react'

const stats = [
  { value: '5.500+', label: 'trabajadores activos', sublabel: 'en San Juan hoy' },
  { value: '17.000+', label: 'proyección 2030', sublabel: 'con nuevos proyectos' },
  { value: 'US$35B', label: 'inversión confirmada', sublabel: 'en la provincia' },
  { value: '4.000+', label: 'metros sobre el mar', sublabel: 'altitud operativa promedio' },
]

const pillars = [
  {
    Icon: Mountain,
    title: 'Formulado para la altitud',
    desc: 'Nuestras líneas están diseñadas para los requerimientos calóricos de la minería de alta montaña: hipoxia, frío extremo y turnos prolongados sin acceso a comedor.',
  },
  {
    Icon: TrendingUp,
    title: 'Mercado en expansión',
    desc: 'San Juan concentra el mayor pipeline de proyectos mineros de Argentina. La demanda de colaciones especializadas crecerá exponencialmente en la próxima década.',
  },
  {
    Icon: ShieldCheck,
    title: 'Cumplimiento normativo',
    desc: 'Formulado para cumplir el Dec. 249/2007 de higiene minera y la Ley 27.642 de etiquetado frontal. Sin octógonos. Habilitación SENASA/ANMAT.',
  },
  {
    Icon: Leaf,
    title: 'Compre local — 100%',
    desc: 'Satisface el requisito de proveedores sanjuaninos desde el día uno. Materia prima 100% provincial, cadena de valor integrada en San Juan.',
  },
]

export function MercadoMinero() {
  return (
    <section id="mercado" className="py-24 md:py-36" style={{ backgroundColor: '#0c1525' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <RevealWrapper>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: '#c8973a' }}>
            Mercado objetivo
          </p>
        </RevealWrapper>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <RevealWrapper delay={0.08}>
            <h2
              className="font-serif font-bold leading-[1.05] tracking-tight"
              style={{ color: '#faf7f0', fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              San Juan, provincia minera
              <br />
              <em style={{ color: '#c8973a' }}>por excelencia.</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.14}>
            <p className="max-w-sm text-[14px] leading-[1.75] md:text-right" style={{ color: 'rgba(250,247,240,0.42)' }}>
              La provincia concentra el mayor número de proyectos mineros de Argentina. Miles de trabajadores en condiciones extremas requieren una nutrición que sólo MinerMix provee.
            </p>
          </RevealWrapper>
        </div>

        <div
          className="mt-2 h-px"
          style={{ background: 'linear-gradient(to right, rgba(200,151,58,0.3), transparent 70%)' }}
        />

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: 'rgba(200,151,58,0.06)' }}>
          {stats.map((stat, i) => (
            <RevealWrapper key={stat.label} delay={0.06 * i}>
              <div className="flex flex-col gap-2 p-7 md:p-10" style={{ backgroundColor: '#0c1525' }}>
                <span
                  className="font-mono font-bold leading-none"
                  style={{ color: '#c8973a', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
                >
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: '#e8b84b' }}>
                  {stat.label}
                </span>
                <span className="text-[12px]" style={{ color: 'rgba(250,247,240,0.3)' }}>
                  {stat.sublabel}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <RevealWrapper key={pillar.title} delay={0.1 + i * 0.07}>
              <div
                className="flex gap-5 p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(200,151,58,0.1)',
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  style={{ backgroundColor: 'rgba(200,151,58,0.12)' }}
                >
                  <pillar.Icon size={17} style={{ color: '#c8973a' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-[15px] font-bold" style={{ color: '#faf7f0' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(250,247,240,0.42)' }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Quote */}
        <RevealWrapper delay={0.4}>
          <div
            className="mt-10 px-6 py-7 text-center md:px-14"
            style={{ borderLeft: '3px solid rgba(200,151,58,0.35)', backgroundColor: 'rgba(200,151,58,0.04)' }}
          >
            <p className="font-serif text-lg font-bold italic md:text-xl" style={{ color: 'rgba(232,184,75,0.82)' }}>
              "De la tierra sanjuanina al bolsillo del minero."
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(250,247,240,0.28)' }}>
              MinerMix · San Juan, Argentina
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
