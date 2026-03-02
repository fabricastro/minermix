export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-px w-8"
        style={{ backgroundColor: '#c8973a' }}
      />
      <span
        className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: light ? '#e8b84b' : '#c8973a' }}
      >
        {children}
      </span>
    </div>
  )
}
