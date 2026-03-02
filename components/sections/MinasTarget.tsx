import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { MinaCard } from './MinaCard'

const minas = [
  {
    name: 'Veladero',
    operator: 'Barrick Gold \u2013 Shandong Gold JV',
    featured: true,
    stats: [
      { label: 'Altitud', value: '4.000-4.850 msnm' },
      { label: 'Trabajadores', value: '4.460' },
      { label: 'Regimen', value: '14/14 dias' },
      { label: 'Estado', value: 'Operativa' },
      { label: 'Oportunidad', value: '60% compra local' },
    ],
  },
  {
    name: 'Vicuna',
    operator: 'BHP / Lundin Mining',
    stats: [
      { label: 'Altitud', value: '4.050-5.200 msnm' },
      { label: 'Trabajadores', value: '900 \u2192 12.000*' },
      { label: 'Inversion', value: 'US$18.000M' },
      { label: 'Estado', value: 'Pre-construccion' },
      { label: 'Inicio', value: '2027' },
    ],
  },
  {
    name: 'Hualilan',
    operator: 'Challenger Gold',
    stats: [
      { label: 'Altitud', value: '800-1.700 msnm' },
      { label: 'Trabajadores', value: '169 \u2192 450' },
      { label: 'Distancia', value: '120km de capital' },
      { label: 'Estado', value: 'Inicio 2026' },
      { label: 'Oportunidad', value: 'Piloto ideal' },
    ],
  },
]

const totals = [
  { value: '5.529+', label: 'trabajadores hoy' },
  { value: '17.000+', label: 'proyeccion 2030' },
  { value: 'US$35B', label: 'inversion total' },
]

export function MinasTarget() {
  return (
    <section id="minas" className="py-20 md:py-28" style={{ backgroundColor: '#16213e' }}>
      <div className="mx-auto max-w-7xl px-6">
        <RevealWrapper>
          <p
            className="font-mono text-[11px] font-medium uppercase tracking-[0.25em]"
            style={{ color: '#e8b84b' }}
          >
            Mercado objetivo
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.08}>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-[2.5rem]" style={{ color: '#faf7f0' }}>
            Grandes minas, gran demanda.
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={0.12}>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(245,237,214,0.5)' }}>
            San Juan concentra los principales proyectos mineros de Argentina,
            con miles de trabajadores que requieren alimentacion energetica especializada.
          </p>
        </RevealWrapper>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {minas.map((mina, i) => (
            <MinaCard key={mina.name} {...mina} delay={0.06 * i} />
          ))}
        </div>

        {/* Totals */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 py-6 md:gap-16">
          {totals.map((t, i) => (
            <RevealWrapper key={t.label} delay={0.2 + i * 0.06}>
              <div className="flex flex-col items-center text-center">
                <span className="font-mono text-2xl font-bold" style={{ color: '#c8973a' }}>
                  {t.value}
                </span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider" style={{ color: 'rgba(245,237,214,0.4)' }}>
                  {t.label}
                </span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
