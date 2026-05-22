import { useEffect, useRef } from 'react'
import { Sun, Wheat, HardHat, Landmark, Network, Factory, Package, Scissors } from 'lucide-react'

const SECTORS = [
  { icon: Sun, label: 'Energia Solar', desc: 'Roçagem em parques fotovoltaicos sem risco de dano à infraestrutura', color: '#FF8A00' },
  { icon: Wheat, label: 'Agricultura', desc: 'Manutenção de pastagens, lavouras e propriedades de médio e grande porte', color: '#4A8C56' },
  { icon: HardHat, label: 'Construção', desc: 'Obras civis, terraplanagem, compactação e movimentação de materiais', color: '#4A8C56' },
  { icon: Landmark, label: 'Municípios', desc: 'Gestão pública de manutenção urbana, parques, praças e vias públicas', color: '#4A8C56' },
  { icon: Network, label: 'Infraestrutura', desc: 'Rodovias, ferrovias, linhas de transmissão e dutos de distribuição', color: '#FF8A00' },
  { icon: Factory, label: 'Indústria', desc: 'Pátios industriais, movimentação de cargas e áreas de preservação interna', color: '#4A8C56' },
  { icon: Package, label: 'Logística', desc: 'Armazéns, portos, centros de distribuição e terminais multimodais', color: '#4A8C56' },
  { icon: Scissors, label: 'Manutenção Territorial', desc: 'Serviços contínuos de roçagem, nivelamento e conservação de áreas verdes', color: '#4A8C56' },
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
      style={{ background: '#0E120E' }}
    >
      {/* Gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(45,90,54,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="section-fade mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: '#2D5A36' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: '#4A8C56', letterSpacing: '0.2em' }}>
              MERCADOS ATENDIDOS
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-black uppercase leading-none"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: '#E6E6EA',
                lineHeight: '0.95',
              }}
            >
              Setores
              <br />
              <span style={{ color: '#4A8C56' }}>Atendidos</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#9AA0A6' }}>
              Do campo à cidade, da geração de energia à logística industrial —
              a TRACKTOR GREEN opera onde a manutenção territorial é crítica.
            </p>
          </div>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SECTORS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="card-lift group p-5 flex flex-col items-center text-center cursor-default"
                style={{
                  background: 'rgba(18,18,18,0.8)',
                  border: '1px solid rgba(43,49,58,0.6)',
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
                    color: '#E6E6EA',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.label}
                </h3>

                <p style={{ color: '#687177', fontSize: '11px', lineHeight: '1.5' }}>
                  {s.desc}
                </p>

                {/* Sector index */}
                <span
                  className="mt-3"
                  style={{ fontFamily: 'Space Mono', fontSize: '8px', color: 'rgba(104,113,119,0.3)' }}
                >
                  S{String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom full-width banner */}
        <div
          className="mt-10 p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(30,58,36,0.5) 0%, rgba(43,49,58,0.4) 100%)',
            border: '1px solid rgba(45,90,54,0.3)',
            borderRadius: '4px',
          }}
        >
          <div>
            <p
              className="font-black uppercase mb-1"
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: '28px',
                color: '#E6E6EA',
                letterSpacing: '0.05em',
              }}
            >
              Seu setor não está na lista?
            </p>
            <p style={{ color: '#9AA0A6', fontSize: '14px' }}>
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
              background: '#2D5A36',
              color: '#E6E6EA',
              border: '1px solid #4A8C56',
              borderRadius: '2px',
              fontSize: '14px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1E3A24' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#2D5A36' }}
          >
            Consultar Especialista
          </button>
        </div>
      </div>
    </section>
  )
}
