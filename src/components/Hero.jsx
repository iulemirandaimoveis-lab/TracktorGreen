import { ChevronDown, Zap, ArrowRight, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--tg-bg0)' }}
    >
      {/* BG image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.25) saturate(0.3)',
        }}
      />

      {/* Scanline grid overlay */}
      <div
        className="absolute inset-0 z-10 scanline-grid"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient: left heavy, fading right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(105deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.9) 45%, rgba(10,10,10,0.4) 75%, rgba(10,10,10,0.05) 100%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-48"
        style={{ background: 'linear-gradient(to top, var(--tg-bg0), transparent)' }}
      />

      {/* Brand parallelogram accent — top right */}
      <div
        className="absolute top-0 right-0 w-64 h-2 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #4CAF50, rgba(76,175,80,0.3), transparent)' }}
      />
      <div
        className="absolute top-2.5 right-0 w-40 h-px z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(76,175,80,0.4), transparent)' }}
      />

      {/* Live badges — top right */}
      <div className="absolute top-20 right-5 lg:right-10 z-20 flex flex-col gap-1.5">
        <LiveBadge dot="#4CAF50" label="SISTEMA ATIVO" blink />
        <LiveBadge dot="#FF8A00" label="TELEMETRIA ON" blink />
        <LiveBadge dot="#4CAF50" label="GPS LINKADO" />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center max-w-7xl mx-auto px-5 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-2xl">

          {/* Category chip */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="tg-parallelogram px-3 py-1"
              style={{
                background: 'rgba(76,175,80,0.12)',
                border: '1px solid rgba(76,175,80,0.35)',
              }}
            >
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  color: '#4CAF50',
                  textTransform: 'uppercase',
                }}
              >
                PLATAFORMA OPERACIONAL
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="blink" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4CAF50', display: 'block' }} />
              <span style={{ fontFamily: '"Space Mono"', fontSize: '9px', color: '#687177' }}>v2.4.1</span>
            </div>
          </div>

          {/* Eyebrow statement */}
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: '#4CAF50',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            INTELLIGENT SOLUTIONS. ABSOLUTE CONTROL.
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
              fontSize: 'clamp(44px, 7.5vw, 96px)',
              fontWeight: 900,
              color: 'var(--tg-text0)',
              lineHeight: '0.92',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}
          >
            Máquinas
            <br />
            <span style={{ color: '#4CAF50' }}>Inteligentes</span>
            <br />
            para Controle
            <br />
            Territorial
          </h1>

          {/* Brand track divider */}
          <div className="flex items-center gap-2 mb-6">
            <div style={{ width: '48px', height: '2px', background: '#4CAF50' }} />
            <div style={{ width: '24px', height: '1px', background: 'rgba(76,175,80,0.4)' }} />
            <div
              className="tg-parallelogram"
              style={{ width: '12px', height: '10px', background: '#4CAF50', opacity: 0.7 }}
            />
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: '"Barlow", sans-serif',
              fontSize: '15px',
              lineHeight: '1.65',
              color: 'var(--tg-text2)',
              maxWidth: '520px',
              marginBottom: '36px',
            }}
          >
            Equipamentos robustos, conectados e preparados para operações remotas
            em áreas urbanas, industriais, agrícolas e energéticas. Tecnologia
            embarcada, telemetria em tempo real, controle semi-autônomo.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <button
              onClick={() => scrollTo('#equipamentos')}
              className="flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '13px 28px',
                background: '#4CAF50',
                color: '#0A0A0A',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#3d9140' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#4CAF50' }}
            >
              <Zap size={14} />
              Conhecer Equipamentos
            </button>

            <button
              onClick={() => scrollTo('#contato')}
              className="flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '13px 28px',
                background: 'transparent',
                color: '#F0F0F0',
                border: '1px solid rgba(240,240,240,0.25)',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(240,240,240,0.6)'; e.currentTarget.style.background = 'rgba(240,240,240,0.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(240,240,240,0.25)'; e.currentTarget.style.background = 'transparent' }}
            >
              Solicitar Proposta
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Metric strip */}
          <div
            className="flex flex-wrap gap-6 lg:gap-10 pb-2"
            style={{ borderTop: '1px solid rgba(76,175,80,0.15)', paddingTop: '20px' }}
          >
            <HeroMetric value="10+" label="Equipamentos" sub="no catálogo" />
            <HeroMetric value="8" label="Setores" sub="atendidos" />
            <HeroMetric value="24/7" label="Monitoramento" sub="remoto" />
            <HeroMetric value="IoT" label="Conectividade" sub="integrada" />
          </div>
        </div>
      </div>

      {/* HUD panel — desktop right */}
      <div className="absolute right-5 lg:right-10 bottom-20 z-20 hidden lg:flex flex-col gap-2" style={{ width: '208px' }}>
        <HudPanel />
        <MapPanel />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#687177', letterSpacing: '0.25em' }}>SCROLL</span>
        <ChevronDown size={14} color="#4CAF50" className="animate-bounce" />
      </div>
    </section>
  )
}

function LiveBadge({ dot, label, blink }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 10px',
        background: 'rgba(10,10,10,0.75)',
        border: `1px solid ${dot}35`,
        borderRadius: '2px',
        backdropFilter: 'blur(8px)',
      }}
    >
      <span
        className={blink ? 'blink' : ''}
        style={{ width: '5px', height: '5px', borderRadius: '50%', background: dot, display: 'block', flexShrink: 0 }}
      />
      <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: dot, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  )
}

function HeroMetric({ value, label, sub }) {
  return (
    <div>
      <div
        style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: '32px',
          fontWeight: 900,
          color: 'var(--tg-text0)',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#4CAF50', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px' }}>
        {label}
      </div>
      <div style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#687177', letterSpacing: '0.08em' }}>
        {sub}
      </div>
    </div>
  )
}

function HudPanel() {
  return (
    <div
      style={{
        background: 'rgba(10,10,10,0.88)',
        border: '1px solid rgba(76,175,80,0.25)',
        borderRadius: '3px',
        padding: '12px',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#4CAF50', letterSpacing: '0.15em' }}>FROTA STATUS</span>
        <span className="blink" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4CAF50', display: 'block' }} />
      </div>
      {/* Brand track stripes accent */}
      <div style={{ height: '3px', marginBottom: '10px', display: 'flex', gap: '2px' }}>
        <div style={{ flex: 3, background: '#4CAF50', borderRadius: '1px' }} />
        <div style={{ flex: 1, background: 'rgba(76,175,80,0.3)', borderRadius: '1px' }} />
      </div>
      <HudRow label="UNIDADES ATIVAS" value="07/10" />
      <HudRow label="EFICIÊNCIA" value="94%" color="#4CAF50" />
      <HudRow label="TEMP MÉD" value="71°C" color="#FF8A00" />
      <HudRow label="HORAS HOJE" value="128.4h" />
      <HudRow label="ALERTAS" value="2" color="#FF8A00" />
      <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(76,175,80,0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontFamily: '"Space Mono"', fontSize: '7px', color: '#687177' }}>CONECTIVIDADE IoT</span>
          <span style={{ fontFamily: '"Space Mono"', fontSize: '7px', color: '#4CAF50' }}>ONLINE</span>
        </div>
        <div style={{ height: '3px', background: 'rgba(76,175,80,0.15)', borderRadius: '1px' }}>
          <div style={{ height: '3px', width: '94%', background: '#4CAF50', borderRadius: '1px' }} />
        </div>
      </div>
    </div>
  )
}

function MapPanel() {
  const dots = [
    { x: 30, y: 38, active: true }, { x: 55, y: 22 }, { x: 80, y: 52 },
    { x: 45, y: 62 }, { x: 72, y: 72 }, { x: 20, y: 68 }, { x: 88, y: 28 },
  ]
  return (
    <div
      style={{
        background: 'rgba(10,10,10,0.88)',
        border: '1px solid rgba(76,175,80,0.25)',
        borderRadius: '3px',
        padding: '10px',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#4CAF50', letterSpacing: '0.12em' }}>LOCALIZAÇÃO GPS</span>
        <MapPin size={9} color="#4CAF50" />
      </div>
      <div
        className="dashboard-grid"
        style={{
          height: '72px',
          background: 'rgba(26,58,26,0.15)',
          borderRadius: '2px',
          border: '1px solid rgba(76,175,80,0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {dots.map((d, i) => (
          <div
            key={i}
            className={d.active ? 'map-dot' : ''}
            style={{
              position: 'absolute',
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.active ? '8px' : '5px',
              height: d.active ? '8px' : '5px',
              borderRadius: '50%',
              background: d.active ? '#4CAF50' : 'rgba(76,175,80,0.35)',
              border: d.active ? '1px solid #5CB85C' : 'none',
              transform: 'translate(-50%,-50%)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function HudRow({ label, value, color = '#F0F0F0' }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 0' }}>
      <span style={{ fontFamily: '"Space Mono"', fontSize: '7px', color: '#687177', letterSpacing: '0.06em' }}>{label}</span>
      <span style={{ fontFamily: '"Space Mono"', fontSize: '9px', color, fontWeight: 700 }}>{value}</span>
    </div>
  )
}
