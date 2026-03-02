export function BagSVG({
  name,
  gradientFrom,
  gradientTo,
  accentColor = '#c8973a',
  fruitColors = ['#5a3a1a', '#c8973a', '#a0522d'],
  width = 160,
  height = 240,
  className = '',
}: {
  name: string
  gradientFrom: string
  gradientTo: string
  accentColor?: string
  fruitColors?: string[]
  width?: number
  height?: number
  className?: string
}) {
  const id = name.replace(/\s/g, '-').toLowerCase()
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 240"
      className={className}
      aria-label={`Bolsa MinerMix ${name}`}
      role="img"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect x="8" y="8" width="144" height="224" rx="8" />
        </clipPath>
      </defs>

      {/* Bag body */}
      <rect
        x="8"
        y="8"
        width="144"
        height="224"
        rx="8"
        fill={`url(#bg-${id})`}
        stroke={accentColor}
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Top seal band */}
      <rect x="8" y="8" width="144" height="32" rx="8" fill="rgba(255,255,255,0.08)" />
      {/* Ziploc lines */}
      <line x1="20" y1="28" x2="140" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="20" y1="32" x2="140" y2="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* MINERMIX text on top band */}
      <text
        x="80"
        y="22"
        textAnchor="middle"
        fill="#c8973a"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3"
        fontFamily="sans-serif"
      >
        {'MINERMIX'}
      </text>

      {/* Transparent window showing fruits */}
      <rect
        x="28"
        y="55"
        width="104"
        height="70"
        rx="4"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      />
      {/* Fruit ellipses */}
      <ellipse cx="48" cy="78" rx="10" ry="8" fill={fruitColors[0]} opacity="0.85" />
      <ellipse cx="72" cy="85" rx="9" ry="7" fill={fruitColors[1]} opacity="0.85" />
      <ellipse cx="96" cy="76" rx="11" ry="8" fill={fruitColors[2]} opacity="0.85" />
      <ellipse cx="112" cy="88" rx="8" ry="6" fill={fruitColors[0]} opacity="0.7" />
      <ellipse cx="56" cy="92" rx="8" ry="6" fill={fruitColors[1]} opacity="0.7" />
      <ellipse cx="82" cy="96" rx="9" ry="6" fill={fruitColors[2]} opacity="0.6" />

      {/* Label rectangle */}
      <rect x="24" y="145" width="112" height="36" rx="3" fill={accentColor} opacity="0.9" />
      <text
        x="80"
        y="161"
        textAnchor="middle"
        fill="#0f1520"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.5"
        fontFamily="sans-serif"
      >
        {name.toUpperCase()}
      </text>
      <text
        x="80"
        y="174"
        textAnchor="middle"
        fill="#0f1520"
        fontSize="6"
        fontWeight="500"
        fontFamily="sans-serif"
        opacity="0.7"
      >
        {'San Juan · Argentina'}
      </text>

      {/* Hex icon at bottom */}
      <polygon
        points="80,200 92,207 92,221 80,228 68,221 68,207"
        fill="none"
        stroke={accentColor}
        strokeWidth="1"
        opacity="0.6"
      />
      <polygon
        points="80,206 86,210 86,218 80,222 74,218 74,210"
        fill={accentColor}
        opacity="0.3"
      />
    </svg>
  )
}
