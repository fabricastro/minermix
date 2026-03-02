import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { LineaCard } from './LineaCard'

const lineas = [
  {
    name: 'Alta Montana',
    title: 'Alta Montaña',
    description: 'Para operadores de maquinaria pesada, geólogos y personal en frentes de obra a más de 4.000 msnm. Máxima densidad calórica.',
    kcal: 480,
    ingredients: ['Nuez Pedernal', 'Pistacho 25 de Mayo', 'Pasa de uva', 'Almendra'],
    color: '#8b4513',
    image: '/images/Alta-monta\u00f1a.png',
  },
  {
    name: 'Tecnica',
    title: 'Técnica',
    description: 'Para mecánicos, electricistas, ingenieros de mantenimiento y supervisores técnicos. Concentración y resistencia.',
    kcal: 380,
    ingredients: ['Manzana Calingasta', 'Nuez', 'Pasa de uva', 'Higo'],
    color: '#4a6b7a',
    image: '/images/tecnica.png',
  },
  {
    name: 'Administrativa',
    title: 'Administrativa',
    description: 'Para personal de oficina, seguridad, logística y soporte en campamentos base. Equilibrio y salud.',
    kcal: 290,
    ingredients: ['Manzana', 'Ciruela pasa', 'Almendra', 'Pasa de uva'],
    color: '#3d6b3a',
    image: '/images/administrativo.png',
  },
]

export function Productos() {
  return (
    <section id="productos" className="py-24 md:py-36" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <RevealWrapper>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: '#9a7020' }}>
            Productos
          </p>
        </RevealWrapper>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <RevealWrapper delay={0.08}>
            <h2
              className="font-serif font-bold leading-[1.05] tracking-tight"
              style={{ color: '#0a0f1c', fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              Tres líneas,
              <br />
              tres perfiles.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.14}>
            <p className="max-w-xs text-[14px] leading-[1.75] md:text-right" style={{ color: '#6b6356' }}>
              Cada formulación responde a un perfil de demanda energética específico, con ingredientes seleccionados por origen y aporte nutricional.
            </p>
          </RevealWrapper>
        </div>

        <div
          className="mt-2 h-px w-full"
          style={{ background: 'linear-gradient(to right, rgba(200,151,58,0.3), transparent 70%)' }}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lineas.map((linea, i) => (
            <LineaCard key={linea.name} {...linea} delay={0.07 * i} />
          ))}
        </div>
      </div>
    </section>
  )
}
