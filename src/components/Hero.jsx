import { ChevronDown, Radio, Zap, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scanline-grid"
      style={{ background: '#0C0F0C' }}
    >
      {/* Background machine image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.35) saturate(0.4)',
        }}
      />

      {/* Gradient overlay left→right */}
      <div className="hero-gradient absolute inset-0 z-10" />

      {/* Top-left corner accent lines */}
      <div className="absolute top-16 left-0 z-20 hidden lg:block">
        <div style={{ width: '2px', height: '80px', background: 'linear-gradient(to bottom, transparent, #2D5A36)' }} />
      </div>

      {/* Live status bar */}
      <div
        className="absolute top-20 right-6 lg:right-12 z-20 flex flex-col gap-2"
      >
        <StatusPill color="#4A8C56" label="SISTEMA ATIVO" />
        <StatusPill color="#FF8A00" label="TELEMETRIA ON" blinkColor="#FF8A00" />
        <StatusPill color="#4A8C56" label="GPS LINKADO" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Category tag */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs tracking-[0.25em] uppercase px-3 py-1"
              style={{
                fontFamily: 'Space Mono, monospace',
                background: 'rgba(45,90,54,0.15)',
                border: '1px solid rgba(74,140,86,0.4)',
                color: '#4A8C56',
                borderRadius: '2px',
              }}
            >
              PLATAFORMA OPERACIONAL
            </span>
            <div className="flex items-center gap-1.5">
              <span className="blink w-1.5 h-1.5 rounded-full" style={{ background: '#4A8C56' }} />
              <span className="text-xs" style={{ fontFamily: 'Space Mono', color: '#687177' }}>v2.4.1</span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="font-black uppercase leading-none mb-6"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(42px, 7vw, 88px)',
              color: '#E6E6EA',
              letterSpacing: '-0.01em',
              lineHeight: '0.92',
            }}
          >
            Máquinas
            <br />
            <span style={{ color: '#4A8C56' }}>Inteligentes</span>
            <br />
            para Controle
            <br />
            Territorial
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: '48px', height: '2px', background: '#2D5A36' }} />
            <div style={{ width: '8px', height: '8px', border: '2px solid #2D5A36', transform: 'rotate(45deg)' }} />
            <div style={{ width: '24px', height: '2px', background: 'rgba(45,90,54,0.4)' }} />
          </div>

          {/* Subtitle */}
          <p
            className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: '#9AA0A6', fontFamily: 'Barlow, sans-serif' }}
          >
            Equipamentos robustos, conectados e preparados para operações remotas
            em áreas urbanas, industriais, agrícolas e energéticas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo('#equipamentos')}
              className="flex items-center gap-2 px-7 py-3.5 font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                fontFamily: 'Barlow Condensed',
                letterSpacing: '0.12em',
                background: '#2D5A36',
                color: '#E6E6EA',
                border: '1px solid #4A8C56',
                borderRadius: '2px',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1E3A24'; e.currentTarget.style.boxShadow = '0 0 24px rgba(45,90,54,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2D5A36'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Zap size={15} />
              Conhecer Equipamentos
            </button>

            <button
              onClick={() => scrollTo('#contato')}
              className="flex items-center gap-2 px-7 py-3.5 font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                fontFamily: 'Barlow Condensed',
                letterSpacing: '0.12em',
                background: 'transparent',
                color: '#E6E6EA',
                border: '1px solid rgba(230,230,234,0.25)',
                borderRadius: '2px',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(230,230,234,0.6)'; e.currentTarget.style.background = 'rgba(230,230,234,0.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(230,230,234,0.25)'; e.currentTarget.style.background = 'transparent' }}
            >
              Solicitar Proposta
            </button>
          </div>

          {/* Bottom metrics strip */}
          <div className="flex flex-wrap gap-6 lg:gap-10">
            <HeroMetric value="10+" label="Equipamentos" unit="no catálogo" />
            <HeroMetric value="8" label="Setores" unit="atendidos" />
            <HeroMetric value="24/7" label="Monitoramento" unit="remoto" />
            <HeroMetric value="IoT" label="Conectividade" unit="integrada" />
          </div>
        </div>
      </div>

      {/* Telemetry HUD right side — desktop only */}
      <div
        className="absolute right-6 lg:right-12 bottom-24 z-20 hidden lg:flex flex-col gap-2"
        style={{ width: '200px' }}
      >
        <div
          className="p-3"
          style={{
            background: 'rgba(18,18,18,0.85)',
            border: '1px solid rgba(45,90,54,0.3)',
            borderRadius: '4px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.15em' }}>
              FROTA STATUS
            </span>
            <span className="blink w-1.5 h-1.5 rounded-full" style={{ background: '#4A8C56' }} />
          </div>
          <HudRow label="UNIDADES ATIVAS" value="07/10" />
          <HudRow label="EFICIÊNCIA" value="94%" color="#4A8C56" />
          <HudRow label="TEMP MÉD" value="71°C" color="#FF8A00" />
          <HudRow label="HORAS HOJE" value="128.4h" />
          <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(45,90,54,0.2)' }}>
            <div className="flex justify-between mb-1">
              <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#687177' }}>CONECTIVIDADE IoT</span>
              <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#4A8C56' }}>ONLINE</span>
            </div>
            <div style={{ height: '3px', background: 'rgba(45,90,54,0.2)', borderRadius: '2px' }}>
              <div style={{ height: '3px', width: '94%', background: '#2D5A36', borderRadius: '2px' }} />
            </div>
          </div>
        </div>

        {/* Map dot area */}
        <div
          className="p-3"
          style={{
            background: 'rgba(18,18,18,0.85)',
            border: '1px solid rgba(45,90,54,0.3)',
            borderRadius: '4px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.15em' }}>
              LOCALIZAÇÃO GPS
            </span>
            <MapPin size={10} color="#4A8C56" />
          </div>
          <MapMiniDisplay />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <ChevronDown size={16} color="#2D5A36" className="animate-bounce" />
      </div>
    </section>
  )
}

function StatusPill({ label, color, blinkColor }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5"
      style={{
        background: 'rgba(18,18,18,0.7)',
        border: `1px solid ${color}40`,
        borderRadius: '2px',
        backdropFilter: 'blur(8px)',
      }}
    >
      <span
        className={blinkColor ? 'blink' : ''}
        style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, display: 'block', flexShrink: 0 }}
      />
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color, letterSpacing: '0.15em' }}>{label}</span>
    </div>
  )
}

function HeroMetric({ value, label, unit }) {
  return (
    <div className="flex flex-col">
      <span
        style={{
          fontFamily: 'Barlow Condensed',
          fontSize: '28px',
          fontWeight: 800,
          color: '#E6E6EA',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.12em', marginTop: '2px' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.08em' }}>
        {unit}
      </span>
    </div>
  )
}

function HudRow({ label, value, color = '#E6E6EA' }) {
  return (
    <div className="flex justify-between items-center py-0.5">
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#687177' }}>{label}</span>
      <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color, fontWeight: 700 }}>{value}</span>
    </div>
  )
}

function MapMiniDisplay() {
  const dots = [
    { x: 30, y: 40 }, { x: 55, y: 25 }, { x: 80, y: 55 },
    { x: 45, y: 65 }, { x: 70, y: 75 }, { x: 20, y: 70 },
    { x: 90, y: 30 },
  ]
  return (
    <div
      className="relative dashboard-grid"
      style={{
        height: '70px',
        background: 'rgba(30,58,36,0.1)',
        borderRadius: '2px',
        border: '1px solid rgba(45,90,54,0.15)',
        overflow: 'hidden',
      }}
    >
      {dots.map((d, i) => (
        <div
          key={i}
          className={i === 0 ? 'map-dot' : ''}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i === 0 ? '#4A8C56' : 'rgba(74,140,86,0.4)',
            transform: 'translate(-50%,-50%)',
          }}
        />
      ))}
      {/* Grid lines */}
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(45,90,54,0.08) 0px, rgba(45,90,54,0.08) 1px, transparent 1px, transparent 14px)' }} />
    </div>
  )
}
