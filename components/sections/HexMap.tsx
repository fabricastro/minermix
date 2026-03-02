'use client'

import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

const ComposableMap = dynamic(
  () => import('react-simple-maps').then((m) => m.ComposableMap),
  { ssr: false }
)
const Geographies = dynamic(
  () => import('react-simple-maps').then((m) => m.Geographies),
  { ssr: false }
)
const Geography = dynamic(
  () => import('react-simple-maps').then((m) => m.Geography),
  { ssr: false }
)

const GEO_URL = '/data/san-juan.json'

/* Metadata de display (nombre, producto) — solo para el tooltip */
const deptMeta: Record<string, { display: string; product: string }> = {
  IGLESIA:        { display: 'Iglesia',      product: 'Zona minera de alta montaña' },
  JACHAL:         { display: 'Jáchal',       product: 'Nueces, olivos' },
  'VALLE FERTIL': { display: 'Valle Fértil', product: 'Ganadería, turismo' },
  CALINGASTA:     { display: 'Calingasta',   product: 'Manzana · almendras' },
  ULLUM:          { display: 'Ullum',        product: 'Almendras' },
  ALBARDON:       { display: 'Albardón',     product: 'Vitícola' },
  ANGACO:         { display: 'Angaco',       product: 'Olivos' },
  ZONDA:          { display: 'Zonda',        product: 'Nueces' },
  CHIMBAS:        { display: 'Chimbas',      product: 'Higos y ciruelas' },
  CAPITAL:        { display: 'Capital',      product: 'Higos y ciruelas' },
  'SANTA LUCIA':  { display: 'Santa Lucía',  product: 'Higos y ciruelas' },
  RIVADAVIA:      { display: 'Rivadavia',    product: 'Pasas de uva' },
  RAWSON:         { display: 'Rawson',       product: 'Pasas de uva' },
  POCITO:         { display: 'Pocito',       product: 'Pistachos' },
  'SAN MARTIN':   { display: 'San Martín',   product: 'Pasas de uva · 95% nac.' },
  '9 DE JULIO':   { display: '9 de Julio',   product: 'Pasas de uva' },
  CAUCETE:        { display: 'Caucete',      product: 'Pasas de uva' },
  SARMIENTO:      { display: 'Sarmiento',    product: 'Pistachos · 57.5% nac.' },
  '25 DE MAYO':   { display: '25 de Mayo',   product: 'Pistachos' },
}

const NEUTRAL = '#b8b0a0'   /* non-productive departments */
const NEUTRAL_DIM = '#cdc8c0'

const statsCards = [
  { value: '95%',  label: 'pasas nacionales' },
  { value: '#1',   label: 'pistachos del país' },
  { value: '1929', label: 'manzana Calingasta' },
  { value: '100%', label: 'origen local' },
]

interface HexMapProps {
  deptFills: Record<string, string>   // productive dept → ingredient color
  highlightedDepts: string[]          // depts to keep at full opacity
  mapHover: string | null             // dept currently hovered on map (gold)
  hasFilter: boolean                  // whether any filter is active
  onHoverDept: (dept: string | null) => void
}

export function HexMap({
  deptFills,
  highlightedDepts,
  mapHover,
  hasFilter,
  onHoverDept,
}: HexMapProps) {
  const hoveredMeta = mapHover ? deptMeta[mapHover] : null

  return (
    <div className="sticky top-28 flex flex-col gap-5">
      <RevealWrapper delay={0.2}>
        <div
          className="p-4"
          style={{ backgroundColor: 'rgba(200,151,58,0.05)', border: '1px solid rgba(200,151,58,0.1)' }}
        >
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: '#9a7020' }}>
            San Juan · Tierra de Origen
          </p>

          <div className="relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 4600, center: [-68.62, -30.51] }}
              width={340}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const key = geo.properties.departamento as string
                    const isProductive = key in deptFills
                    const isHovered = key === mapHover
                    const isHighlighted = highlightedDepts.includes(key)

                    /* ── Fill ── */
                    let fill: string
                    if (isHovered) {
                      fill = '#c8973a'
                    } else if (isProductive) {
                      fill = deptFills[key]
                    } else {
                      fill = NEUTRAL
                    }

                    /* ── Opacity ── */
                    let opacity: number
                    if (!hasFilter) {
                      opacity = 1
                    } else if (isHovered || isHighlighted) {
                      opacity = 1
                    } else if (isProductive) {
                      opacity = 0.22
                    } else {
                      opacity = 0.12
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => onHoverDept(key)}
                        onMouseLeave={() => onHoverDept(null)}
                        style={{
                          default: {
                            fill,
                            stroke: '#f5edd6',
                            strokeWidth: 0.5,
                            outline: 'none',
                            opacity,
                            transition: 'fill 0.18s ease, opacity 0.18s ease',
                            cursor: isProductive ? 'pointer' : 'default',
                          },
                          hover: {
                            fill: isProductive ? '#c8973a' : NEUTRAL_DIM,
                            stroke: '#f5edd6',
                            strokeWidth: isProductive ? 0.8 : 0.5,
                            outline: 'none',
                            cursor: isProductive ? 'pointer' : 'default',
                          },
                          pressed: { fill: '#c8973a', outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredMeta && (
                <motion.div
                  className="pointer-events-none absolute right-0 bottom-0 left-0 px-3 py-2"
                  style={{ backgroundColor: 'rgba(10,15,28,0.92)' }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.14 }}
                >
                  <span className="text-[13px] font-semibold" style={{ color: '#c8973a' }}>
                    {hoveredMeta.display}
                  </span>
                  <span className="ml-2 text-[12px]" style={{ color: 'rgba(245,237,214,0.65)' }}>
                    {hoveredMeta.product}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </RevealWrapper>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {statsCards.map((stat, i) => (
          <RevealWrapper key={stat.label} delay={0.3 + i * 0.08}>
            <div
              className="flex flex-col items-center p-4 text-center"
              style={{ backgroundColor: 'rgba(200,151,58,0.07)', border: '1px solid rgba(200,151,58,0.1)' }}
            >
              <span className="font-mono text-xl font-bold" style={{ color: '#c8973a' }}>
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: '#9a7020' }}>
                {stat.label}
              </span>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </div>
  )
}
