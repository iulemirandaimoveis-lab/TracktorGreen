import { useEffect, useRef } from 'react'
import {
  ShieldCheck, TrendingUp, Radio, UserMinus,
  LayoutDashboard, Hammer, Layers, ArrowRight
} from 'lucide-react'

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Redução de Risco Operacional',
    desc: 'Operadores fora das zonas de perigo. Máquinas teleoperadas em ambientes de risco eliminam acidentes com pessoal em campo.',
    metric: '–40%',
    metricLabel: 'acidentes reportados',
    color: '#4CAF50',
  },
  {
    icon: TrendingUp,
    title: 'Maior Produtividade em Campo',
    desc: 'Operação contínua sem fadiga, pausas mínimas e cobertura de área superior por hora de máquina trabalhada.',
    metric: '3x',
    metricLabel: 'cobertura de área',
    color: '#4CAF50',
  },
  {
    icon: Radio,
    title: 'Operação Remota e Semi-Autônoma',
    desc: 'Controle por radiofrequência de até 1km, câmera em tempo real e rotas pré-programadas com retorno automático.',
    metric: '1km',
    metricLabel: 'alcance de controle',
    color: '#FF8A00',
  },
  {
    icon: UserMinus,
    title: 'Menor Exposição de Operadores',
    desc: 'Ambientes com agrotóxicos, gases, terrenos instáveis e tráfego intenso — operados remotamente com total segurança.',
    metric: '100%',
    metricLabel: 'operações de risco cobertas',
    color: '#4CAF50',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestão Centralizada de Frota',
    desc: 'Um único dashboard para monitorar toda a frota: horas, consumo, alertas, manutenção e desempenho por equipamento.',
    metric: '24/7',
    metricLabel: 'monitoramento ativo',
    color: '#4CAF50',
  },
  {
    icon: Hammer,
    title: 'Máquinas para Ambientes Severos',
    desc: 'Construídas para trabalho pesado em campo: esteiras de alta tração, proteção IP65, refrigeração ativa e estrutura reforçada.',
    metric: 'IP65',
    metricLabel: 'proteção mínima padrão',
    color: '#4CAF50',
  },
  {
    icon: Layers,
    title: 'Base Mecânica + Camada Tech',
    desc: 'Equipamentos provados em campo com a camada tecnológica TRACKTOR GREEN sobreposta: telemetria, IoT, controle e analytics.',
    metric: '10+',
    metricLabel: 'sensores por máquina',
    color: '#FF8A00',
  },
]

export default function WhyUs() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="porque"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#121212' }}
    >
      {/* Large background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Barlow Condensed',
          fontSize: 'clamp(120px, 20vw, 240px)',
          fontWeight: 900,
          color: 'rgba(30,58,36,0.06)',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
        }}
      >
        CONTROLE
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="section-fade mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: 'rgba(76,175,80,0.35)' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: '#4CAF50', letterSpacing: '0.2em' }}>
              DIFERENCIAIS
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: '#F0F0F0',
                lineHeight: '0.95',
              }}
            >
              Por que
              <br />
              <span style={{ color: '#4CAF50' }}>Tracktor Green</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#9AA0A6' }}>
              Sete argumentos objetivos para substituir operações convencionais
              por plataformas de controle territorial inteligente.
            </p>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {REASONS.slice(0, 6).map((r, i) => (
            <ReasonCard key={r.title} r={r} index={i} />
          ))}
        </div>

        {/* Last card — full width accent */}
        <div
          className="card-lift relative flex flex-col lg:flex-row items-start lg:items-center gap-6 p-8"
          style={{
            background: 'rgba(45,90,54,0.08)',
            border: '1px solid rgba(74,140,86,0.3)',
            borderRadius: '4px',
          }}
        >
          <div
            className="w-14 h-14 flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,138,0,0.1)', border: '1px solid rgba(255,138,0,0.3)', borderRadius: '4px' }}
          >
            <Layers size={26} color="#FF8A00" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                style={{
                  fontFamily: 'Barlow Condensed',
                  fontSize: '20px',
                  fontWeight: 900,
                  color: '#FF8A00',
                }}
              >
                10+
              </span>
              <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.1em' }}>
                SENSORES POR MÁQUINA
              </span>
            </div>
            <h3
              className="text-xl font-bold uppercase mb-2"
              style={{ fontFamily: 'Barlow Condensed', color: '#F0F0F0', letterSpacing: '0.05em' }}
            >
              Base Mecânica Confiável + Camada Tecnológica Própria
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#9AA0A6' }}>
              Equipamentos provados em operações reais de campo, agora com a camada de inteligência
              TRACKTOR GREEN: telemetria embarcada, protocolos IoT industriais, controle remoto
              de alta segurança e analytics operacional integrado — uma plataforma única,
              não um conjunto de softwares colados sobre hardware convencional.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 font-semibold uppercase tracking-wider transition-all"
              style={{
                fontFamily: 'Barlow Condensed',
                letterSpacing: '0.1em',
                background: '#FF8A00',
                color: '#121212',
                border: 'none',
                borderRadius: '2px',
                fontSize: '13px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#CC6E00' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FF8A00' }}
            >
              Quero saber mais
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ r, index }) {
  const Icon = r.icon
  return (
    <div
      className="card-lift p-6 relative"
      style={{
        background: '#141414',
        border: '1px solid rgba(45,90,54,0.18)',
        borderRadius: '4px',
      }}
    >
      <span
        className="absolute top-4 right-4"
        style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'rgba(104,113,119,0.35)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Metric */}
      <div className="flex items-end gap-2 mb-4">
        <span
          style={{
            fontFamily: 'Barlow Condensed',
            fontSize: '42px',
            fontWeight: 900,
            color: r.color,
            lineHeight: 1,
          }}
        >
          {r.metric}
        </span>
        <span
          style={{
            fontFamily: 'Space Mono',
            fontSize: '7px',
            color: '#687177',
            letterSpacing: '0.08em',
            paddingBottom: '6px',
            maxWidth: '80px',
            lineHeight: '1.4',
          }}
        >
          {r.metricLabel}
        </span>
      </div>

      <div
        className="w-8 h-8 flex items-center justify-center mb-4"
        style={{
          background: `${r.color}15`,
          border: `1px solid ${r.color}30`,
          borderRadius: '3px',
        }}
      >
        <Icon size={16} color={r.color} />
      </div>

      <h3
        className="text-base font-bold uppercase mb-2"
        style={{ fontFamily: 'Barlow Condensed', color: '#F0F0F0', letterSpacing: '0.05em', fontSize: '16px' }}
      >
        {r.title}
      </h3>

      <p className="text-xs leading-relaxed" style={{ color: '#9AA0A6', fontSize: '12px' }}>
        {r.desc}
      </p>

      <div
        className="absolute bottom-0 left-0 h-px"
        style={{ right: 0, background: `linear-gradient(to right, ${r.color}40, transparent)` }}
      />
    </div>
  )
}
