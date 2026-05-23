import { useEffect, useRef } from 'react'
import { Sun, Wheat, HardHat, Landmark, Network, Factory, Package, Scissors } from 'lucide-react'

const SECTORS = [
  { icon: Sun, label: 'Energia Solar', desc: 'Roçagem em parques fotovoltaicos sem risco de dano à infraestrutura', color: '#FF8A00' },
  { icon: Wheat, label: 'Agricultura', desc: 'Manutenção de pastagens, lavouras e propriedades de médio e grande porte', color: '#4CAF50' },
  { icon: HardHat, label: 'Construção', desc: 'Obras civis, terraplanagem, compactação e movimentação de materiais', color: '#4CAF50' },
  { icon: Landmark, label: 'Municípios', desc: 'Gestão pública de manutenção urbana, parques, praças e vias públicas', color: '#4CAF50' },
  { icon: Network, label: 'Infraestrutura', desc: 'Rodovias, ferrovias, linhas de transmissão e dutos de distribuição', color: '#FF8A00' },
  { icon: Factory, label: 'Indústria', desc: 'Pátios industriais, movimentação de cargas e áreas de preservação interna', color: '#4CAF50' },
  { icon: Package, label: 'Logística', desc: 'Armazéns, portos, centros de distribuição e terminais multimodais', color: '#4CAF50' },
  { icon: Scissors, label: 'Manutenção Territorial', desc: 'Serviços contínuos de roçagem, nivelamento e conservação de áreas verdes', color: '#4CAF50' },
]

export default function Sectors() {
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
      id="setores"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--tg-section-alt)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(45,90,54,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div ref={ref} className="section-fade mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: 'var(--tg-green-strong)' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: 'var(--tg-green)', letterSpacing: '0.2em' }}>
              MERCADOS ATENDIDOS
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
              Setores
              <br />
              <span style={{ color: 'var(--tg-green)' }}>Atendidos</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--tg-text2)' }}>
              Do campo à cidade, da geração de energia à logística industrial —
              a TRACKTOR GREEN opera onde a manutenção territorial é crítica.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SECTORS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="card-lift group p-5 flex flex-col items-center text-center cursor-default"
                style={{
                  background: 'var(--tg-bg2)',
                  border: '1px solid var(--tg-border-card)',
                  borderRadius: '4px',
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}30`,
                    borderRadius: '50%',
                  }}
                >
                  <Icon size={20} color={s.color} />
                </div>

                <h3
                  className="font-bold uppercase mb-2"
                  style={{
                    fontFamily: 'Barlow Condensed',
                    fontSize: '15px',
                    color: 'var(--tg-text0)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.label}
                </h3>

                <p style={{ color: 'var(--tg-text3)', fontSize: '11px', lineHeight: '1.5' }}>
                  {s.desc}
                </p>

                <span
                  className="mt-3"
                  style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'var(--tg-text3)' }}
                >
                  S{String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>

        <div
          className="mt-10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{
            background: 'var(--tg-green-dim)',
            border: '1px solid var(--tg-border)',
            borderRadius: '4px',
          }}
        >
          <div>
            <p
              className="font-black uppercase mb-1"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: '28px',
                color: 'var(--tg-text0)',
                letterSpacing: '0.05em',
              }}
            >
              Seu setor não está na lista?
            </p>
            <p style={{ color: 'var(--tg-text2)', fontSize: '14px' }}>
              A TRACKTOR GREEN desenvolve soluções customizadas para operações específicas.
              Fale com nossa equipe técnica.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-8 py-3 font-semibold uppercase tracking-wider transition-all"
            style={{
              fontFamily: 'Barlow Condensed',
              letterSpacing: '0.12em',
              background: 'var(--tg-green-strong)',
              color: 'var(--tg-text0)',
              border: '1px solid var(--tg-green)',
              borderRadius: '2px',
              fontSize: '14px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--tg-green-mid)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--tg-green-strong)' }}
          >
            Consultar Especialista
          </button>
        </div>
      </div>
    </section>
  )
}
