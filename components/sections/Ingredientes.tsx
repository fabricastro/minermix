'use client'

import { useState, useMemo } from 'react'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import { IngItem } from './IngItem'
import { HexMap } from './HexMap'

/* ─── Data ──────────────────────────────────────────────────────────────── */
export const ingredientes = [
  {
    id: 'pasas',
    name: 'Pasas de Uva',
    zone: 'Valle del Tulum · San Martín',
    stat: '95% prod. nacional',
    depts: ['SAN MARTIN', 'RIVADAVIA', 'RAWSON', 'CAUCETE', '9 DE JULIO'],
    color: '#c8742a',
  },
  {
    id: 'pistachos',
    name: 'Pistachos',
    zone: '25 de Mayo · Pocito · Sarmiento',
    stat: '57.5% superf. nacional',
    depts: ['25 DE MAYO', 'POCITO', 'SARMIENTO'],
    color: '#7aaa4a',
  },
  {
    id: 'nueces',
    name: 'Nueces',
    zone: 'Pedernal · Valle de Zonda',
    stat: '1.228 tn/año',
    depts: ['ZONDA', 'JACHAL'],
    color: '#c8a82a',
  },
  {
    id: 'almendras',
    name: 'Almendras',
    zone: 'Ullum · Calingasta',
    stat: '500 ha en crecimiento',
    depts: ['ULLUM', 'CALINGASTA'],
    color: '#5ab0c8',
  },
  {
    id: 'manzana',
    name: 'Manzana deshidratada',
    zone: 'Calingasta desde 1929',
    stat: 'Red Delicious',
    depts: ['CALINGASTA'],
    color: '#9dc845',
  },
  {
    id: 'higos',
    name: 'Higos y Ciruelas',
    zone: 'Valles sanjuaninos',
    stat: 'Sin aditivos',
    depts: ['CAPITAL', 'RIVADAVIA', 'SANTA LUCIA', 'CHIMBAS', 'RAWSON'],
    color: '#c87060',
  },
]

/* Dept → color (first-match wins for depts shared between ingredients) */
export const deptFills: Record<string, string> = {}
ingredientes.forEach((ing) => {
  ing.depts.forEach((dept) => {
    if (!deptFills[dept]) deptFills[dept] = ing.color
  })
})

/* ─── Component ─────────────────────────────────────────────────────────── */
export function Ingredientes() {
  /* hovered dept key (from map), hovered ingredient id (from list) */
  const [mapHover, setMapHover] = useState<string | null>(null)
  const [listHover, setListHover] = useState<string | null>(null)

  const hasFilter = mapHover !== null || listHover !== null

  /* Which ingredient IDs are currently "active"? */
  const activeIngIds = useMemo<string[]>(() => {
    if (listHover) return [listHover]
    if (mapHover) {
      return ingredientes
        .filter((ing) => ing.depts.includes(mapHover))
        .map((ing) => ing.id)
    }
    return []
  }, [mapHover, listHover])

  /* Which dept keys should be highlighted on the map? */
  const highlightedDepts = useMemo<string[]>(() => {
    if (mapHover) return [mapHover]
    if (listHover) {
      return ingredientes.find((i) => i.id === listHover)?.depts ?? []
    }
    return []
  }, [mapHover, listHover])

  return (
    <section id="ingredientes" className="py-24 md:py-36" style={{ backgroundColor: '#f5edd6' }}>
      <div className="mx-auto max-w-7xl px-6">
        <RevealWrapper>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em]" style={{ color: '#9a7020' }}>
            Ingredientes
          </p>
        </RevealWrapper>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <RevealWrapper delay={0.08}>
            <h2
              className="font-serif font-bold leading-[1.05] tracking-tight"
              style={{ color: '#0a0f1c', fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              100% origen
              <br />
              San Juan.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.14}>
            <p className="max-w-xs text-[14px] leading-[1.75] md:text-right" style={{ color: '#6b6356' }}>
              Cada ingrediente proviene de las zonas productivas más reconocidas de la provincia.
              Un mapa de calidad que conecta el campo con la mina.
            </p>
          </RevealWrapper>
        </div>

        <div
          className="mt-2 h-px"
          style={{ background: 'linear-gradient(to right, rgba(200,151,58,0.35), transparent 70%)' }}
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
          {/* Lista de ingredientes */}
          <div>
            {ingredientes.map((ing, i) => (
              <IngItem
                key={ing.id}
                name={ing.name}
                zone={ing.zone}
                stat={ing.stat}
                color={ing.color}
                delay={0.04 * i}
                isActive={activeIngIds.includes(ing.id)}
                hasFilter={hasFilter}
                onMouseEnter={() => setListHover(ing.id)}
                onMouseLeave={() => setListHover(null)}
              />
            ))}
          </div>

          {/* Mapa */}
          <HexMap
            deptFills={deptFills}
            highlightedDepts={highlightedDepts}
            mapHover={mapHover}
            hasFilter={hasFilter}
            onHoverDept={setMapHover}
          />
        </div>
      </div>
    </section>
  )
}
