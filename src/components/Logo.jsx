import logoColor from '../assets/logo-color.png'
import logoIcon  from '../assets/logo-icon.png'

/**
 * variant: 'horizontal' | 'symbol'
 * size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 */
export default function Logo({ className = '', size = 'md', variant = 'horizontal' }) {
  const widths = { xs: 100, sm: 130, md: 170, lg: 220, xl: 280 }
  const iconWidths = { xs: 32, sm: 40, md: 52, lg: 66, xl: 82 }

  if (variant === 'symbol') {
    const w = iconWidths[size] || iconWidths.md
    return (
      <img
        src={logoIcon}
        alt="TRACKTOR GREEN icon"
        width={w}
        className={className}
        style={{ display: 'block' }}
      />
    )
  }

  const w = widths[size] || widths.md

  return (
    <img
      src={logoColor}
      alt="TRACKTOR GREEN"
      width={w}
      className={className}
      style={{ display: 'block' }}
    />
  )
}

/** Standalone icon export (kept for backward compat) */
export function TGSymbol({ size = 48, className = '' }) {
  const iconWidths = { 48: 48, default: size }
  return (
    <img
      src={logoIcon}
      alt=""
      aria-hidden="true"
      width={size}
      className={className}
      style={{ display: 'block' }}
    />
  )
}
