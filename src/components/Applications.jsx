import { useEffect, useRef } from 'react'
import { Sun, Route, Building2, Wheat, Factory, Landmark, HardHat, Globe } from 'lucide-react'

const APPS = [
  {
    icon: Sun,
    title: 'Usinas Solares',
    desc: 'Manutenção de gramíneas sob painéis fotovoltaicos com cortadores remotos — sem risco de danos à estrutura e sem interrupção de geração.',
    tags: ['SAG600', 'TZ-12'],
    color: '#FF8A00',
    highlight: true,
  },
  {
    icon: Route,
    title: 'Rodovias e Estradas',
    desc: 'Conservação de faixas de domínio, taludes e acostamentos com operação remota. Redução de acidentes com pessoal em pista.',
    tags: ['SAG600', 'SY-1200', 'WZ3CX'],
    color: '#4CAF50',
  },
  {
    icon: Building2,
    title: 'Loteamentos',
    desc: 'Limpeza e regularização de terrenos, movimentação de solo e compactação de vias em projetos de urbanização.',
    tags: ['SE-35', 'SZ950', 'SY-1200'],
    color: '#4CAF50',
  },
  {
    icon: Wheat,
    title: 'Grandes Fazendas',
    desc: 'Manutenção de pastagens, carreadores e acessos internos. Integração com gestão agrícola via telemetria de campo.',
    tags: ['TZ-12', 'SAG600', 'SH70'],
    color: '#4CAF50',
  },
  {
    icon: Factory,
    title: 'Indústrias',
    desc: 'Movimentação de cargas, manutenção de pátios e áreas verdes internas com frotas conectadas e monitoradas em tempo real.',
    tags: ['CPC30', 'SH70', 'SAG600'],
    color: '#4CAF50',
  },
  {
    icon: Landmark,
    title: 'Operações Municipais',
    desc: 'Prefeituras e concessionárias operam frotas para roçagem, obras e coleta de resíduos com gestão centralizada e relatórios automáticos.',
    tags: ['SAG600', 'YH-500', 'WZ3CX'],
    color: '#FF8A00',
    highlight: true,
  },
  {
    icon: HardHat,
    title: 'Obras Civis',
    desc: 'Escavação, transporte, compactação e concretagem em um único ecossistema de máquinas gerenciadas remotamente.',
    tags: ['SE-35', 'WZ3CX', 'SZJ35', 'SY-1200'],
    color: '#4CAF50',
  },
  {
    icon: Globe,
    title: 'Áreas Remotas',
    desc: 'Operações em regiões de difícil acesso com conectividade IoT, controle satelital e autonomia de combustível ampliada.',
    tags: ['SAG600', 'YH-500', 'TZ-12'],
    color: '#4CAF50',
  },
]

export default function Applications() {
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
      id="aplicacoes"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--tg-section-alt)' }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(45,90,54,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div ref={ref} className="section-fade mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: 'var(--tg-green-strong)' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: 'var(--tg-green)', letterSpacing: '0.2em' }}>
              APLICAÇÕES DE CAMPO
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: 'var(--tg-text0)',
                lineHeight: '0.95',
              }}
            >
              Onde a Tracktor
              <br />
              <span style={{ color: 'var(--tg-green)' }}>Green opera</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--tg-text2)' }}>
              Do agronegócio à infraestrutura urbana — nossa frota cobre os principais
              ambientes operacionais com eficiência e controle total.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {APPS.map((app, i) => {
            const Icon = app.icon
            return (
              <div
                key={app.title}
                className="card-lift relative p-6 group"
                style={{
                  background: app.highlight ? 'var(--tg-green-dim)' : 'var(--tg-bg2)',
                  border: app.highlight ? '1px solid var(--tg-green-strong)' : '1px solid var(--tg-border-card)',
                  borderRadius: '4px',
                }}
              >
                <span
                  className="absolute top-3 right-4"
                  style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text3)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${app.color}15`,
                    border: `1px solid ${app.color}30`,
                    borderRadius: '4px',
                  }}
                >
                  <Icon size={18} color={app.color} />
                </div>

                <h3
                  className="text-base font-bold uppercase mb-2"
                  style={{
                    fontFamily: 'Barlow Condensed',
                    color: 'var(--tg-text0)',
                    letterSpacing: '0.06em',
                    fontSize: '17px',
                  }}
                >
                  {app.title}
                </h3>

                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--tg-text2)', fontSize: '12px' }}>
                  {app.desc}
                </p>

                <div className="flex flex-wrap gap-1">
                  {app.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'Space Mono',
                        fontSize: '8px',
                        background: 'var(--tg-bg4)',
                        border: '1px solid var(--tg-border-card)',
                        color: 'var(--tg-text3)',
                        padding: '2px 6px',
                        borderRadius: '2px',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to right, ${app.color}60, transparent)`,
                    opacity: app.highlight ? 0.6 : 0,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
