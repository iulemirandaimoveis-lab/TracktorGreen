import { useEffect, useRef } from 'react'
import { MapPin, Cpu, Crosshair, Leaf, Shield } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Logo from './Logo'

const PILLARS = [
  {
    icon: MapPin,
    key: 'TERRITÓRIO',
    title: 'Domínio Territorial',
    desc: 'Cobertura operacional de áreas urbanas, rurais, industriais e energéticas. Onde o acesso é difícil, a máquina vai.',
    color: '#4CAF50',
  },
  {
    icon: Cpu,
    key: 'TECNOLOGIA',
    title: 'Camada Tecnológica',
    desc: 'Telemetria em tempo real, IoT embarcado, controle remoto e gestão de frota integrados à estrutura mecânica robusta.',
    color: '#4CAF50',
  },
  {
    icon: Crosshair,
    key: 'CONTROLE',
    title: 'Precisão Operacional',
    desc: 'Operações semi-autônomas com monitoramento contínuo, manutenção preditiva e alertas configuráveis por setor.',
    color: '#FF8A00',
  },
]

const BRAND_VALUES = [
  { label: 'DOMINANT', icon: Shield, color: '#4CAF50' },
  { label: 'INTELLIGENT', icon: Cpu, color: '#4CAF50' },
  { label: 'SUSTAINABLE', icon: Leaf, color: '#4CAF50' },
  { label: 'RELIABLE', icon: Crosshair, color: '#4CAF50' },
  { label: 'INNOVATIVE', icon: MapPin, color: '#FF8A00' },
]

const STATS = [
  { value: '40%', label: 'Redução de risco', sub: 'operacional médio' },
  { value: '3x', label: 'Maior cobertura', sub: 'por operador' },
  { value: '24/7', label: 'Monitoramento', sub: 'contínuo' },
  { value: '100%', label: 'Rastreabilidade', sub: 'da frota' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0E0E0E' }}
    >
      {/* Diagonal stripe accent */}
      <div
        className="absolute inset-0 pointer-events-none brand-stripe-diagonal"
        style={{ opacity: 0.5 }}
      />

      {/* Side rule */}
      <div
        className="absolute left-0 top-20 bottom-20 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(76,175,80,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header row */}
        <div ref={ref} className="section-fade mb-14 grid lg:grid-cols-2 gap-10 items-end">
          <SectionHeader
            tag="O QUE É A TRACKTOR GREEN"
            title="Engenharia mecânica"
            titleGreen="+ camada tecnológica"
          />
          <div>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#9AA0A6' }}>
              TRACKTOR GREEN combina engenharia mecânica robusta com controle remoto avançado,
              telemetria em tempo real e gestão centralizada de frota para modernizar operações
              territoriais em qualquer ambiente severo.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#687177' }}>
              Nossas máquinas são plataformas operacionais conectadas — não apenas equipamentos.
              Projetadas para ambientes extremos, com operação semi-autônoma e integração
              nativa a sistemas de gestão de campo.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-14"
          style={{ background: 'rgba(76,175,80,0.12)', borderRadius: '3px', overflow: 'hidden' }}
        >
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center py-8 px-4"
              style={{ background: '#0E0E0E' }}
            >
              <span
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '52px',
                  fontWeight: 900,
                  color: '#4CAF50',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#F0F0F0',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                {s.label}
              </span>
              <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: '#687177', marginTop: '2px' }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Three pillars */}
        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.key}
                className="card-lift card-shimmer relative p-7"
                style={{
                  background: '#141414',
                  border: '1px solid rgba(76,175,80,0.15)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}
              >
                {/* Index */}
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '16px',
                    fontFamily: '"Space Mono"',
                    fontSize: '9px',
                    color: 'rgba(104,113,119,0.4)',
                  }}
                >
                  0{i + 1}
                </span>

                {/* Top brand bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(to right, ${p.color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}30`,
                    borderRadius: '3px',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={20} color={p.color} />
                </div>

                {/* Tag */}
                <div
                  className="tg-parallelogram inline-block mb-3"
                  style={{
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}30`,
                    padding: '3px 10px',
                    borderRadius: '2px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Space Mono"',
                      fontSize: '8px',
                      color: p.color,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.key}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#F0F0F0',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ fontFamily: '"Barlow"', fontSize: '13px', lineHeight: '1.6', color: '#9AA0A6' }}>
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Brand values row */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 py-6"
          style={{ borderTop: '1px solid rgba(76,175,80,0.12)', borderBottom: '1px solid rgba(76,175,80,0.12)' }}
        >
          {BRAND_VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.label}
                className="tg-parallelogram flex items-center gap-2 px-4 py-2"
                style={{
                  background: i === BRAND_VALUES.length - 1 ? 'rgba(255,138,0,0.08)' : 'rgba(76,175,80,0.08)',
                  border: `1px solid ${v.color}25`,
                  borderRadius: '2px',
                }}
              >
                <Icon size={12} color={v.color} />
                <span
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: v.color,
                    textTransform: 'uppercase',
                  }}
                >
                  {v.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
