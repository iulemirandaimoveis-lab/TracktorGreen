import { useTheme } from '../context/ThemeContext'
import logoColor from '../assets/logo-color.png'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'
import logoIcon  from '../assets/logo-icon.png'

const HEIGHT_RATIO = 100 / 300  // approx aspect ratio of the horizontal logos

/**
 * variant: 'horizontal' | 'symbol'
 * size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 */
export default function Logo({ className = '', size = 'md', variant = 'horizontal' }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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
  const src = isDark ? logoWhite : logoColor

  return (
    <img
      src={src}
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
