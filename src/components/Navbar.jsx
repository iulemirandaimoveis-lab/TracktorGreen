import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Equipamentos', href: '#equipamentos' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Telemetria', href: '#telemetria' },
  { label: 'Por que TG', href: '#porque' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(18,18,18,0.97)'
          : 'rgba(18,18,18,0.7)',
        borderBottom: scrolled
          ? '1px solid rgba(45,90,54,0.25)'
          : '1px solid transparent',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="focus:outline-none">
          <Logo size="sm" />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-1.5 text-sm font-medium tracking-wider uppercase transition-colors duration-200 focus:outline-none"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.08em',
                  color: active === link.href ? '#4A8C56' : '#9AA0A6',
                  fontSize: '13px',
                }}
              >
                {link.label}
                {active === link.href && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{ background: '#2D5A36' }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); handleNav('#contato') }}
          className="hidden lg:flex items-center gap-2 px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none"
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            letterSpacing: '0.1em',
            background: '#2D5A36',
            color: '#E6E6EA',
            border: '1px solid #4A8C56',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1E3A24'; e.currentTarget.style.borderColor = '#5CB85C' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#2D5A36'; e.currentTarget.style.borderColor = '#4A8C56' }}
        >
          Solicitar Proposta
          <ChevronRight size={14} />
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-tg-gray-light focus:outline-none"
          style={{ color: '#9AA0A6' }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ background: 'rgba(18,18,18,0.98)', borderColor: 'rgba(45,90,54,0.2)' }}
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-6 py-3.5 text-sm uppercase tracking-wider transition-colors duration-150"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    letterSpacing: '0.08em',
                    color: active === link.href ? '#4A8C56' : '#9AA0A6',
                    borderLeft: active === link.href ? '2px solid #2D5A36' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="px-5 pt-3 pb-4">
              <button
                onClick={() => handleNav('#contato')}
                className="w-full py-3 text-sm font-semibold uppercase tracking-wider"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  background: '#2D5A36',
                  color: '#E6E6EA',
                  border: '1px solid #4A8C56',
                  borderRadius: '2px',
                }}
              >
                Solicitar Proposta
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
