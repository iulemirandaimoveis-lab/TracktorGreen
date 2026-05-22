import { useEffect, useRef } from 'react'
import { MapPin, Cpu, Crosshair, Leaf, Wifi } from 'lucide-react'

const PILLARS = [
  {
    icon: MapPin,
    key: 'TERRITÓRIO',
    title: 'Domínio Territorial',
    desc: 'Cobertura operacional de áreas urbanas, rurais, industriais e energéticas com eficiência máxima e mínimo de recursos humanos expostos.',
    color: '#4A8C56',
  },
  {
    icon: Cpu,
    key: 'TECNOLOGIA',
    title: 'Camada Tecnológica',
    desc: 'Telemetria em tempo real, conectividade IoT, controle remoto e gestão centralizada de frota integrados à estrutura mecânica.',
    color: '#4A8C56',
  },
  {
    icon: Crosshair,
    key: 'CONTROLE',
    title: 'Precisão Operacional',
    desc: 'Operações semi-autônomas com monitoramento contínuo, manutenção preditiva e alertas operacionais configuráveis por setor.',
    color: '#FF8A00',
  },
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
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0E120E' }}
    >
      {/* Vertical accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(45,90,54,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="section-fade mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: '#2D5A36' }} />
            <span
              style={{
                fontFamily: 'Space Mono',
                fontSize: '10px',
                color: '#4A8C56',
                letterSpacing: '0.2em',
              }}
            >
              O QUE É A TRACKTOR GREEN
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: '#E6E6EA',
                lineHeight: '0.95',
              }}
            >
              Engenharia mecânica
              <br />
              <span style={{ color: '#4A8C56' }}>+ camada</span>
              <br />
              tecnológica própria
            </h2>

            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#9AA0A6' }}>
                TRACKTOR GREEN combina engenharia mecânica robusta com controle remoto avançado,
                telemetria em tempo real, sustentabilidade operacional e gestão centralizada de
                frota para modernizar operações territoriais em qualquer ambiente.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#687177' }}>
                Nossas máquinas não são apenas equipamentos — são plataformas operacionais
                conectadas, projetadas para ambientes severos, com capacidade de operação
                semi-autônoma e integração nativa com sistemas de gestão de campo.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 lg:mb-20"
          style={{ background: 'rgba(45,90,54,0.15)', borderRadius: '4px', overflow: 'hidden' }}
        >
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center py-8 px-4"
              style={{ background: '#0E120E' }}
            >
              <span
                style={{
                  fontFamily: 'Barlow Condensed',
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#4A8C56',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                className="mt-1 text-sm font-semibold uppercase tracking-wider"
                style={{ fontFamily: 'Barlow Condensed', color: '#E6E6EA', letterSpacing: '0.08em' }}
              >
                {s.label}
              </span>
              <span
                className="text-xs mt-0.5"
                style={{ fontFamily: 'Space Mono', color: '#687177' }}
              >
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Three pillars */}
        <div className="grid lg:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.key}
                className="card-lift relative p-8"
                style={{
                  background: 'rgba(18,18,18,0.8)',
                  border: '1px solid rgba(45,90,54,0.2)',
                  borderRadius: '4px',
                }}
              >
                {/* Index */}
                <span
                  className="absolute top-4 right-5"
                  style={{ fontFamily: 'Space Mono', fontSize: '9px', color: 'rgba(104,113,119,0.5)' }}
                >
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{
                    background: 'rgba(45,90,54,0.15)',
                    border: `1px solid ${p.color}40`,
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={22} color={p.color} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block mb-3 px-2 py-0.5 text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: 'Space Mono',
                    color: p.color,
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    borderRadius: '2px',
                  }}
                >
                  {p.key}
                </span>

                <h3
                  className="text-xl font-bold uppercase mb-3"
                  style={{ fontFamily: 'Barlow Condensed', color: '#E6E6EA', letterSpacing: '0.05em' }}
                >
                  {p.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: '#9AA0A6' }}>
                  {p.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(to right, ${p.color}40, transparent)` }}
                />
              </div>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p
            className="text-2xl lg:text-3xl font-black uppercase tracking-widest"
            style={{ fontFamily: 'Barlow Condensed', color: 'rgba(74,140,86,0.3)', letterSpacing: '0.25em' }}
          >
            AUTONOMIA · HÍBRIDO · ROBUSTEZ · INTELIGÊNCIA · EFICIÊNCIA · CONTROLE
          </p>
        </div>
      </div>
    </section>
  )
}
