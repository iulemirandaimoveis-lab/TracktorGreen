/**
 * TGSymbol — fiel ao brand mark oficial:
 * Paralelogramo inclinado (lean ~15°), fundo escuro, duas barras brancas horizontais,
 * bloco verde sólido no canto inferior-direito.
 */
function TGSymbol({ size = 44 }) {
  // Viewbox 64×44, paralelogramo: top-left(12,0) top-right(64,0) bot-right(52,44) bot-left(0,44)
  const h = size * (44 / 64)
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="tg-sym-clip">
          <polygon points="12,0 64,0 52,44 0,44" />
        </clipPath>
      </defs>

      {/* Background parallelogram — charcoal dark */}
      <polygon points="12,0 64,0 52,44 0,44" fill="#1A1A1A" />

      <g clipPath="url(#tg-sym-clip)">
        {/* White bar 1 — top track stripe */}
        <rect x="-4" y="8" width="80" height="10" fill="#FFFFFF" />
        {/* White bar 2 — middle track stripe */}
        <rect x="-4" y="23" width="80" height="10" fill="#FFFFFF" />
        {/* Green block — bottom-right (territory accent) */}
        <rect x="30" y="31" width="48" height="22" fill="#4CAF50" />
      </g>
    </svg>
  )
}

/**
 * Logo — horizontal layout (default) ou stacked.
 * variant: 'horizontal' | 'stacked' | 'symbol'
 * theme: 'dark' (branco+verde no dark bg) | 'light' (preto+verde no light bg) | 'mono-white' | 'mono-black'
 */
export default function Logo({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'dark',
}) {
  const cfg = {
    sm:  { iconSize: 28, title: '18px', sub: '7px',  gap: '8px'  },
    md:  { iconSize: 36, title: '22px', sub: '8px',  gap: '10px' },
    lg:  { iconSize: 48, title: '30px', sub: '9px',  gap: '12px' },
    xl:  { iconSize: 64, title: '40px', sub: '10px', gap: '14px' },
  }
  const c = cfg[size] || cfg.md

  const colors = {
    dark:       { tracktor: '#FFFFFF', green: '#4CAF50', sub: 'rgba(255,255,255,0.35)' },
    light:      { tracktor: '#1A1A1A', green: '#2D6B2D', sub: 'rgba(0,0,0,0.4)'       },
    'mono-white': { tracktor: '#FFFFFF', green: '#FFFFFF', sub: 'rgba(255,255,255,0.4)' },
    'mono-black': { tracktor: '#1A1A1A', green: '#1A1A1A', sub: 'rgba(0,0,0,0.4)'     },
  }
  const col = colors[theme] || colors.dark

  const textBlock = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1,
        gap: '1px',
      }}
    >
      {/* TRACKTOR */}
      <span
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: c.title,
          fontWeight: 900,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: col.tracktor,
          lineHeight: 1,
          display: 'block',
        }}
      >
        TRACKTOR
      </span>
      {/* GREEN */}
      <span
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: c.title,
          fontWeight: 900,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: col.green,
          lineHeight: 1,
          display: 'block',
          marginTop: '1px',
        }}
      >
        GREEN
      </span>
      {/* Tagline */}
      <span
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: c.sub,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: col.sub,
          display: 'block',
          marginTop: '4px',
          whiteSpace: 'nowrap',
        }}
      >
        TERRITORY. TECHNOLOGY. CONTROL.
      </span>
    </div>
  )

  if (variant === 'symbol') {
    return (
      <div className={className}>
        <TGSymbol size={c.iconSize} />
      </div>
    )
  }

  if (variant === 'stacked') {
    return (
      <div
        className={className}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
      >
        <TGSymbol size={c.iconSize} />
        {textBlock}
      </div>
    )
  }

  // Default: horizontal
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: c.gap }}
    >
      <TGSymbol size={c.iconSize} />
      {textBlock}
    </div>
  )
}
