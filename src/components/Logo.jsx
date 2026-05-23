import { useId } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * TGSymbol — exact brand mark
 * Parallelogram (16° lean) + 2 horizontal bars + green block bottom-right
 * Transparent background — adapts to any surface
 */
export function TGSymbol({ size = 48, className = '' }) {
  const { theme } = useTheme()
  const uid = useId()
  const clipId = `tg-sym-clip-${uid.replace(/:/g, '')}`
  const barColor = theme === 'dark' ? '#FFFFFF' : '#1A1A1A'
  const h = Math.round(size * (48 / 70))

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 70 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points="13,0 70,0 57,48 0,48" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {/* Bar 1 — upper track */}
        <rect x="-5" y="8" width="85" height="13" fill={barColor} />
        {/* Bar 2 — lower track */}
        <rect x="-5" y="26" width="85" height="13" fill={barColor} />
        {/* Green territory block — bottom right */}
        <rect x="32" y="33" width="50" height="22" fill="#4CAF50" />
      </g>
    </svg>
  )
}

/**
 * Logo — complete brand lockup
 * variant: 'horizontal' | 'stacked' | 'symbol'
 */
export default function Logo({ className = '', size = 'md', variant = 'horizontal' }) {
  const { theme } = useTheme()

  const cfg = {
    xs:  { iconW: 28, title: '16px', sub: '7px',  gap: '8px'  },
    sm:  { iconW: 34, title: '19px', sub: '7px',  gap: '9px'  },
    md:  { iconW: 44, title: '24px', sub: '8px',  gap: '11px' },
    lg:  { iconW: 58, title: '32px', sub: '9px',  gap: '14px' },
    xl:  { iconW: 72, title: '40px', sub: '10px', gap: '16px' },
  }
  const c = cfg[size] || cfg.md

  const isDark = theme === 'dark'
  const textColor = isDark ? '#FFFFFF' : '#1A1A1A'
  const greenColor = isDark ? '#4CAF50' : '#2E7A1E'
  const taglineColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.38)'

  const wordmark = (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '1px' }}>
      <span
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: c.title,
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: textColor,
          lineHeight: 1,
          display: 'block',
        }}
      >
        TRACKTOR
      </span>
      <span
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: c.title,
          fontWeight: 900,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: greenColor,
          lineHeight: 1,
          display: 'block',
          marginTop: '1px',
        }}
      >
        GREEN
      </span>
      <span
        style={{
          fontFamily: '"Raleway", "Barlow", sans-serif',
          fontSize: c.sub,
          fontWeight: 400,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: taglineColor,
          display: 'block',
          marginTop: '5px',
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
        <TGSymbol size={c.iconW} />
      </div>
    )
  }

  if (variant === 'stacked') {
    return (
      <div className={className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
        <TGSymbol size={c.iconW} />
        {wordmark}
      </div>
    )
  }

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: c.gap }}>
      <TGSymbol size={c.iconW} />
      {wordmark}
    </div>
  )
}
