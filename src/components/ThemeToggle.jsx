import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 focus:outline-none ${className}`}
      style={{
        padding: '7px 12px',
        background: 'var(--tg-green-dim)',
        border: '1px solid var(--tg-border)',
        borderRadius: '2px',
        cursor: 'pointer',
        color: 'var(--tg-text2)',
        transition: 'border-color 0.2s ease, color 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--tg-green)'; e.currentTarget.style.color = 'var(--tg-green)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--tg-border)'; e.currentTarget.style.color = 'var(--tg-text2)' }}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      <span
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '8px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {isDark ? 'CLARO' : 'ESCURO'}
      </span>
    </button>
  )
}
