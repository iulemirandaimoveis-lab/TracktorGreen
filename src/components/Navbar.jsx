import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

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

  // Track active section on scroll
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { threshold: 0.3 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
        background: scrolled ? 'var(--tg-nav-bg)' : 'rgba(10,10,10,0.6)',
        borderBottom: scrolled ? '1px solid var(--tg-border)' : '1px solid transparent',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Brand stripe — top edge (matches logo top bar) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, #4CAF50 0%, rgba(76,175,80,0.3) 50%, transparent 100%)',
        }}
      />

      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="focus:outline-none flex-shrink-0">
          <Logo size="sm" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="relative px-4 py-1.5 focus:outline-none transition-colors duration-200"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--tg-green)' : 'var(--tg-text2)',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--tg-text0)' }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--tg-text2)' }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: '12px',
                        right: '12px',
                        height: '2px',
                        background: 'var(--tg-green)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Theme toggle — desktop */}
        <ThemeToggle className="hidden lg:flex" />

        {/* CTA */}
        <button
          onClick={() => handleNav('#contato')}
          className="hidden lg:flex items-center gap-2 focus:outline-none transition-all duration-200"
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '9px 20px',
            background: '#4CAF50',
            color: '#0A0A0A',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#3d9140' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#4CAF50' }}
        >
          Solicitar Proposta
          <ArrowRight size={13} />
        </button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 focus:outline-none"
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
          style={{
            background: 'var(--tg-bg0)',
            borderTop: '1px solid var(--tg-border)',
          }}
        >
          {/* Theme toggle — mobile */}
          <div className="px-5 pt-3 pb-1">
            <ThemeToggle />
          </div>
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-6 py-3.5 transition-colors duration-150 focus:outline-none"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--tg-green)' : 'var(--tg-text2)',
                      borderLeft: isActive ? '2px solid var(--tg-green)' : '2px solid transparent',
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
            <li className="px-5 pt-3 pb-5">
              <button
                onClick={() => handleNav('#contato')}
                className="w-full py-3 focus:outline-none"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: '#4CAF50',
                  color: '#0A0A0A',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
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
