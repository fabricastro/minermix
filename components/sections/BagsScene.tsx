'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const bags = [
  {
    name: 'Alta Montana',
    label: 'Alta Montaña',
    kcal: '480 kcal',
    image: '/images/Alta-monta\u00f1a.png',
    rotate: -6,
    rotateY: 12,
    translateY: 28,
    delay: 0.15,
    z: 2,
    accentColor: '#c4713a',
  },
  {
    name: 'Tecnica',
    label: 'Técnica',
    kcal: '380 kcal',
    image: '/images/tecnica.png',
    rotate: 0,
    rotateY: 0,
    translateY: 0,
    delay: 0.3,
    z: 3,
    accentColor: '#7a9aaa',
  },
  {
    name: 'Administrativa',
    label: 'Administrativa',
    kcal: '290 kcal',
    image: '/images/administrativo.png',
    rotate: 6,
    rotateY: -12,
    translateY: 28,
    delay: 0.22,
    z: 2,
    accentColor: '#5a8a4a',
  },
]

export function BagsScene() {
  return (
    <div
      className="relative mx-auto flex items-end justify-center"
      style={{
        perspective: '1400px',
        maxWidth: 580,
        minHeight: 360,
        perspectiveOrigin: '50% 80%',
      }}
    >
      {bags.map((bag, i) => (
        <motion.div
          key={bag.name}
          className="relative cursor-pointer"
          style={{
            zIndex: bag.z,
            marginLeft: i === 0 ? 0 : -44,
            transformStyle: 'preserve-3d',
          }}
          initial={{
            opacity: 0,
            y: 80 + bag.translateY,
            rotateY: bag.rotateY,
            rotateZ: bag.rotate,
          }}
          animate={{
            opacity: 1,
            y: bag.translateY,
            rotateY: bag.rotateY,
            rotateZ: bag.rotate,
          }}
          transition={{ duration: 1.1, delay: bag.delay, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: bag.translateY - 20,
            rotateY: 0,
            rotateZ: 0,
            scale: 1.05,
            zIndex: 10,
            transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Bag image */}
          <div
            className="relative"
            style={{
              width: i === 1 ? 200 : 168,
              height: i === 1 ? 295 : 250,
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 8px 20px rgba(0,0,0,0.45))',
            }}
          >
            <Image
              src={bag.image}
              alt={`MinerMix ${bag.label}`}
              fill
              className="object-contain"
              sizes="200px"
              priority
            />
          </div>

          {/* Label */}
          <div className="mt-3 flex flex-col items-center gap-0.5">
            <span
              className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: bag.accentColor }}
            >
              {bag.label}
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: 'rgba(200,151,58,0.5)' }}
            >
              {bag.kcal}
            </span>
          </div>

          {/* Ground shadow */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: 36,
              width: '70%',
              height: 16,
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 72%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
