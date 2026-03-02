export function HexIcon({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Hexagon body */}
      <polygon
        points="50,2 93,25 93,75 50,98 7,75 7,25"
        fill="#16213e"
        stroke="#c8973a"
        strokeWidth="3"
      />
      {/* Mountain */}
      <polygon points="50,22 72,60 28,60" fill="none" stroke="#c8973a" strokeWidth="2" />
      <polygon points="50,22 58,42 42,42" fill="#c8973a" opacity="0.6" />
      {/* Peak highlight */}
      <polygon points="50,22 54,32 46,32" fill="#e8b84b" />
      {/* Three fruit circles */}
      <circle cx="38" cy="72" r="5" fill="#c8973a" />
      <circle cx="50" cy="72" r="5" fill="#e8b84b" />
      <circle cx="62" cy="72" r="5" fill="#9a7020" />
    </svg>
  )
}
