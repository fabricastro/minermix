import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { ClipboardCheck, FlaskConical, FileCheck, Package, Thermometer, Leaf, ShieldCheck, Timer } from 'lucide-react'

const pasos = [
  {
    num: '01',
    title: 'Registro como Proveedor Calificado',
    desc: 'Inscripción en el Registro de Proveedores Mineros (REPROMIN) de San Juan, habilitando la operación comercial con operadoras.',
    Icon: ClipboardCheck,
  },
  {
    num: '02',
    title: 'Período Piloto 90 días',
    desc: 'Kit de degustación entregado al servicio de catering JSC en Veladero. Evaluación de aceptación, logística y condiciones de almacenamiento.',
    Icon: FlaskConical,
  },
  {
    num: '03',
    title: 'Contrato de Provisión Regular',
    desc: 'Entregas quincenales con logística optimizada. Adaptación de volúmenes según demanda estacional y rotación de personal.',
    Icon: FileCheck,
  },
]

const envaseSpecs = [
  { Icon: Package,      label: 'Formato 90g ziploc' },
  { Icon: Thermometer,  label: 'Resistencia −20°C' },
  { Icon: Leaf,         label: 'Material compostable EN 13432' },
  { Icon: ShieldCheck,  label: 'Sin octógonos Ley 27.642' },
  { Icon: Timer,        label: 'Vida útil 12 meses' },
]

const normativas = [
  'Dec. 249/2007 — Régimen de compras mineras',
  'Ley 27.642 — Etiquetado frontal de alimentos',
  'Ley Compre Local — Preferencia para proveedores sanjuaninos',
]

export function Propuesta() {
  return (
    <section id="propuesta" className="py-24 md:py-36" style={{ backgroundColor: '#faf9f6' }}>
      <div className="mx-auto max-w-7xl px-6">
        <RevealWrapper>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: '#9a7020' }}>
            Propuesta comercial
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.08}>
          <h2
            className="mt-3 font-serif font-bold leading-[1.05] tracking-tight"
            style={{ color: '#0a0f1c', fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
          >
            Del campo a la mina.
          </h2>
        </RevealWrapper>

        <div
          className="mt-2 h-px"
          style={{ background: 'linear-gradient(to right, rgba(200,151,58,0.35), transparent 70%)' }}
        />

        <div className="mt-14 grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Steps */}
          <div className="relative flex flex-col gap-0 md:col-span-3">
            {pasos.map((paso, i) => (
              <RevealWrapper key={paso.num} delay={0.07 * i}>
                <div className="relative flex gap-6 pb-12">
                  {/* Vertical line */}
                  {i < pasos.length - 1 && (
                    <div
                      className="absolute left-[19px] top-[38px] bottom-0 w-px"
                      style={{ backgroundColor: 'rgba(200,151,58,0.15)' }}
                    />
                  )}

                  {/* Step circle */}
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center"
                    style={{ backgroundColor: '#c8973a' }}
                  >
                    <paso.Icon size={16} style={{ color: '#0a0f1c' }} />
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[28px] font-bold leading-none opacity-10"
                        style={{ color: '#0a0f1c' }}
                      >
                        {paso.num}
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: '#9a7020' }}>
                        Paso {paso.num}
                      </span>
                    </div>
                    <h3 className="font-serif text-[17px] font-bold" style={{ color: '#0a0f1c' }}>
                      {paso.title}
                    </h3>
                    <p className="text-[14px] leading-[1.75]" style={{ color: '#6b6356' }}>
                      {paso.desc}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <RevealWrapper delay={0.18}>
              <div style={{ backgroundColor: '#0a0f1c' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid rgba(200,151,58,0.14)' }}>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: '#c8973a' }}>
                    Envase
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  {envaseSpecs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <spec.Icon size={13} style={{ color: '#c8973a' }} />
                      <span className="text-[13px]" style={{ color: 'rgba(250,247,240,0.75)' }}>
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.24}>
              <div className="flex flex-col gap-0">
                <span className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: '#9a7020' }}>
                  Marco normativo
                </span>
                {normativas.map((n) => (
                  <div
                    key={n}
                    className="py-3 text-[13px] leading-snug"
                    style={{
                      borderBottom: '1px solid rgba(200,151,58,0.1)',
                      color: '#0a0f1c',
                    }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
