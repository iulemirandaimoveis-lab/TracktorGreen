import { useEffect, useRef, useState } from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'

const CATEGORIES = ['Todos', 'Corte e Manutenção', 'Escavação', 'Transporte', 'Compactação', 'Elevação']

const EQUIPMENT = [
  {
    id: 'SAG600',
    name: 'SAG600',
    fullName: 'Cortador Remoto de Relva',
    category: 'Corte e Manutenção',
    tag: 'CONTROLE REMOTO',
    tagColor: '#4A8C56',
    application: 'Áreas verdes, taludes, terrenos inclinados e acessos de difícil entrada manual',
    benefit: 'Operação 100% remota eliminando exposição do operador em terrenos de risco',
    specs: ['Esteiras borracha', 'Motor diesel', 'Controle 500m', 'IP65'],
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=75',
    highlight: true,
  },
  {
    id: 'SE-35',
    name: 'SE-35',
    fullName: 'Mini Escavadora Compacta',
    category: 'Escavação',
    tag: 'COMPACTA',
    tagColor: '#4A8C56',
    application: 'Fundações, valas, obras civis de pequeno porte e espaços confinados',
    benefit: 'Alta potência em espaço reduzido — acessa onde retros convencionais não chegam',
    specs: ['3.5t', '360° giro', 'Balde 0.11m³', 'Profund. 3.2m'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75',
    highlight: false,
  },
  {
    id: 'WZ3CX',
    name: 'WZ3CX',
    fullName: 'Retroescavadora Versátil',
    category: 'Escavação',
    tag: 'VERSÁTIL',
    tagColor: '#4A8C56',
    application: 'Escavação, carregamento e transporte em obras civis e agrícolas',
    benefit: 'Dupla função — carrega na frente e escava atrás — máxima utilidade por equipamento',
    specs: ['Loader frontal', 'Retroescav 4.5m', 'Estabilizadores', 'Peso 7.2t'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    highlight: false,
  },
  {
    id: 'SZ950',
    name: 'SZ950',
    fullName: 'Carregadora de Rodas',
    category: 'Transporte',
    tag: 'ALTA CAPACIDADE',
    tagColor: '#4A8C56',
    application: 'Carregamento de caminhões, movimentação de materiais a granel em obras e pedreiras',
    benefit: 'Mobilidade em rodas com balde de alta capacidade — produtividade superior',
    specs: ['Cap 0.7m³', 'Motor 52hp', 'Rodas todo-terreno', 'Peso 3.8t'],
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=75',
    highlight: false,
  },
  {
    id: 'SH70',
    name: 'SH70',
    fullName: 'Skid Steer Multifuncional',
    category: 'Transporte',
    tag: 'MULTIFUNCIONAL',
    tagColor: '#FF8A00',
    application: 'Escavação, nivelamento, transporte e demolição em espaços restritos',
    benefit: 'Direção deslizante para máxima manobrabilidade — troca de acessórios em 60s',
    specs: ['70hp', 'Carga 800kg', '+20 acessórios', 'Direção deslizante'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75',
    highlight: false,
  },
  {
    id: 'SZJ35',
    name: 'SZJ35',
    fullName: 'Betoneira Autocarregável',
    category: 'Transporte',
    tag: 'AUTOCARREGÁVEL',
    tagColor: '#4A8C56',
    application: 'Produção e transporte de concreto em obras isoladas e de difícil acesso',
    benefit: 'Independência logística — produz, carrega e transporta sem infraestrutura externa',
    specs: ['3.5m³', 'Autocarregável', '4x4', 'Motor diesel'],
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=75',
    highlight: false,
  },
  {
    id: 'SY-1200',
    name: 'SY-1200',
    fullName: 'Rolo Compactador',
    category: 'Compactação',
    tag: 'COMPACTAÇÃO',
    tagColor: '#4A8C56',
    application: 'Compactação de solos, bases de pavimentação e aterros compactados',
    benefit: 'Vibração controlada e alta eficiência de compactação por passada',
    specs: ['1.2t', 'Vibratório', 'Largura 700mm', 'Motor Kohler'],
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=75',
    highlight: false,
  },
  {
    id: 'YH-500',
    name: 'YH-500',
    fullName: 'Mini Dumper de Esteiras',
    category: 'Transporte',
    tag: 'ESTEIRAS',
    tagColor: '#4A8C56',
    application: 'Transporte de materiais em terrenos sem acesso para equipamentos maiores',
    benefit: 'Esteiras garantem acesso a terrenos molhados, inclinados e sem pavimento',
    specs: ['500kg', 'Esteiras borracha', 'Caçamba basculante', 'Motor Honda'],
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=75',
    highlight: false,
  },
  {
    id: 'TZ-12',
    name: 'TZ-12',
    fullName: 'Trator Agrícola Compacto',
    category: 'Corte e Manutenção',
    tag: 'AGRÍCOLA',
    tagColor: '#4A8C56',
    application: 'Lavouras compactas, pomares, pastagens e manutenção de propriedades rurais',
    benefit: 'Compacto para espaços restritos, potente para trabalho pesado em campo',
    specs: ['12hp', '4x4', 'PTO traseiro', 'Implementos múltiplos'],
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=75',
    highlight: false,
  },
  {
    id: 'CPC30',
    name: 'CPC30',
    fullName: 'Empilhador Industrial',
    category: 'Elevação',
    tag: 'CARGA PESADA',
    tagColor: '#FF8A00',
    application: 'Movimentação vertical de cargas em armazéns, portos e centros de distribuição',
    benefit: 'Capacidade de 3 toneladas com acionamento a contrabalancear para alta estabilidade',
    specs: ['3t', 'Altura 4.5m', 'Motor 4cil', 'Mastro triplex'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75',
    highlight: false,
  },
]

export default function Equipment() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = filter === 'Todos' ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === filter)

  return (
    <section
      id="equipamentos"
      className="relative py-24 lg:py-32"
      style={{ background: '#121212' }}
    >
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 256 256" fill="none">
          <circle cx="256" cy="0" r="200" stroke="#2D5A36" strokeWidth="1" />
          <circle cx="256" cy="0" r="150" stroke="#2D5A36" strokeWidth="1" />
          <circle cx="256" cy="0" r="100" stroke="#2D5A36" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="section-fade mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: '32px', height: '2px', background: '#2D5A36' }} />
            <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: '#4A8C56', letterSpacing: '0.2em' }}>
              CATÁLOGO OPERACIONAL
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
              Frota de
              <br />
              <span style={{ color: '#4A8C56' }}>Equipamentos</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#9AA0A6' }}>
              10 plataformas operacionais projetadas para cobrir toda a cadeia de
              manutenção territorial — do corte ao transporte, da escavação à compactação.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 scroll-x overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="flex-shrink-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                fontFamily: 'Barlow Condensed',
                letterSpacing: '0.1em',
                background: filter === cat ? '#2D5A36' : 'transparent',
                color: filter === cat ? '#E6E6EA' : '#687177',
                border: filter === cat ? '1px solid #4A8C56' : '1px solid rgba(104,113,119,0.3)',
                borderRadius: '2px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((eq) => (
            <EquipmentCard
              key={eq.id}
              eq={eq}
              onSelect={() => setSelected(eq)}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6"
          style={{
            background: 'rgba(45,90,54,0.08)',
            border: '1px solid rgba(45,90,54,0.2)',
            borderRadius: '4px',
          }}
        >
          <div>
            <p className="font-bold text-lg uppercase" style={{ fontFamily: 'Barlow Condensed', color: '#E6E6EA', letterSpacing: '0.05em' }}>
              Precisa de um equipamento específico?
            </p>
            <p className="text-sm" style={{ color: '#687177' }}>
              Nossa equipe monta a configuração ideal para sua operação.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 font-semibold uppercase tracking-wider transition-all"
            style={{
              fontFamily: 'Barlow Condensed',
              letterSpacing: '0.1em',
              background: '#2D5A36',
              color: '#E6E6EA',
              border: '1px solid #4A8C56',
              borderRadius: '2px',
              fontSize: '13px',
            }}
          >
            Falar com especialista
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <EquipmentModal eq={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

function EquipmentCard({ eq, onSelect }) {
  return (
    <div
      className="card-lift flex flex-col cursor-pointer"
      style={{
        background: '#191F1A',
        border: '1px solid rgba(45,90,54,0.2)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      onClick={onSelect}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden" style={{ background: '#0C0F0C' }}>
        <img
          src={eq.img}
          alt={eq.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ filter: 'brightness(0.7) saturate(0.6)' }}
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(25,31,26,0.9) 0%, transparent 50%)' }}
        />
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-0.5 text-xs tracking-widest"
            style={{
              fontFamily: 'Space Mono',
              background: `${eq.tagColor}20`,
              border: `1px solid ${eq.tagColor}60`,
              color: eq.tagColor,
              borderRadius: '2px',
              fontSize: '8px',
              letterSpacing: '0.15em',
            }}
          >
            {eq.tag}
          </span>
        </div>
        {/* Model badge */}
        <div className="absolute bottom-3 right-3">
          <span
            style={{
              fontFamily: 'Barlow Condensed',
              fontSize: '22px',
              fontWeight: 900,
              color: 'rgba(230,230,234,0.15)',
              letterSpacing: '-0.02em',
            }}
          >
            {eq.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <span
            className="text-xs uppercase tracking-wider"
            style={{ fontFamily: 'Space Mono', color: '#687177', fontSize: '9px' }}
          >
            {eq.category}
          </span>
          <h3
            className="text-xl font-black uppercase mt-0.5"
            style={{ fontFamily: 'Barlow Condensed', color: '#E6E6EA', letterSpacing: '0.05em' }}
          >
            {eq.name}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: '#9AA0A6' }}>
            {eq.fullName}
          </p>
        </div>

        <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: '#687177' }}>
          {eq.application}
        </p>

        {/* Spec chips */}
        <div className="flex flex-wrap gap-1 mb-4">
          {eq.specs.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5"
              style={{
                fontFamily: 'Space Mono',
                fontSize: '8px',
                background: 'rgba(43,49,58,0.8)',
                border: '1px solid rgba(104,113,119,0.2)',
                color: '#9AA0A6',
                borderRadius: '2px',
                letterSpacing: '0.05em',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Benefit highlight */}
        <div
          className="p-3 mb-4"
          style={{
            background: 'rgba(45,90,54,0.08)',
            border: '1px solid rgba(45,90,54,0.15)',
            borderRadius: '2px',
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: '#9AA0A6' }}>
            <span style={{ color: '#4A8C56', fontFamily: 'Space Mono', fontSize: '8px', letterSpacing: '0.1em' }}>
              DIFERENCIAL ▸{' '}
            </span>
            {eq.benefit}
          </p>
        </div>

        {/* CTA */}
        <button
          className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 group"
          style={{
            fontFamily: 'Barlow Condensed',
            letterSpacing: '0.1em',
            background: 'transparent',
            color: '#4A8C56',
            border: '1px solid rgba(45,90,54,0.3)',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(45,90,54,0.15)'; e.currentTarget.style.borderColor = '#4A8C56' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(45,90,54,0.3)' }}
        >
          Ver detalhes
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}

function EquipmentModal({ eq, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(12,15,12,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{
          background: '#191F1A',
          border: '1px solid rgba(45,90,54,0.4)',
          borderRadius: '4px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={eq.img}
            alt={eq.name}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6) saturate(0.5)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(25,31,26,1) 0%, transparent 60%)' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
            style={{ background: 'rgba(18,18,18,0.8)', border: '1px solid rgba(104,113,119,0.4)', borderRadius: '2px', color: '#9AA0A6' }}
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-6">
            <span
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: '56px',
                fontWeight: 900,
                color: 'rgba(230,230,234,0.12)',
                lineHeight: 1,
              }}
            >
              {eq.id}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.15em' }}>
                {eq.category}
              </span>
              <h3
                className="text-3xl font-black uppercase"
                style={{ fontFamily: 'Barlow Condensed', color: '#E6E6EA', letterSpacing: '0.05em' }}
              >
                {eq.name} — {eq.fullName}
              </h3>
            </div>
            <span
              className="px-2 py-1 text-xs ml-4 flex-shrink-0"
              style={{
                fontFamily: 'Space Mono',
                background: `${eq.tagColor}20`,
                border: `1px solid ${eq.tagColor}60`,
                color: eq.tagColor,
                borderRadius: '2px',
                fontSize: '8px',
                letterSpacing: '0.15em',
              }}
            >
              {eq.tag}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <InfoBlock label="APLICAÇÃO PRINCIPAL" value={eq.application} />
            <InfoBlock label="DIFERENCIAL OPERACIONAL" value={eq.benefit} highlight />
          </div>

          <div className="mb-6">
            <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
              ESPECIFICAÇÕES TÉCNICAS
            </span>
            <div className="flex flex-wrap gap-2">
              {eq.specs.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5"
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '10px',
                    background: 'rgba(43,49,58,0.8)',
                    border: '1px solid rgba(104,113,119,0.3)',
                    color: '#E6E6EA',
                    borderRadius: '2px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => { onClose(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="w-full flex items-center justify-center gap-2 py-3.5 font-semibold uppercase tracking-wider transition-all"
            style={{
              fontFamily: 'Barlow Condensed',
              letterSpacing: '0.12em',
              background: '#2D5A36',
              color: '#E6E6EA',
              border: '1px solid #4A8C56',
              borderRadius: '2px',
              fontSize: '14px',
            }}
          >
            Solicitar Proposta para {eq.name}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

function InfoBlock({ label, value, highlight }) {
  return (
    <div
      className="p-3"
      style={{
        background: highlight ? 'rgba(45,90,54,0.08)' : 'rgba(43,49,58,0.4)',
        border: `1px solid ${highlight ? 'rgba(45,90,54,0.25)' : 'rgba(104,113,119,0.15)'}`,
        borderRadius: '2px',
      }}
    >
      <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: highlight ? '#4A8C56' : '#687177', letterSpacing: '0.15em', display: 'block', marginBottom: '6px' }}>
        {label}
      </span>
      <p className="text-xs leading-relaxed" style={{ color: '#9AA0A6' }}>{value}</p>
    </div>
  )
}
