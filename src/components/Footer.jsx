import Logo from './Logo'
import { ArrowUp } from 'lucide-react'

const LINKS = {
  'Plataforma': ['Home', 'Equipamentos', 'Aplicações', 'Telemetria', 'Por que TG'],
  'Setores': ['Energia Solar', 'Agricultura', 'Construção', 'Municípios', 'Infraestrutura'],
  'Empresa': ['Sobre a TG', 'Parceiros', 'Frota de Suporte', 'Política de Dados', 'Contato'],
}

const FUTURE_PAGES = [
  { path: '/equipamentos', label: 'Catálogo completo com filtros e especificações técnicas detalhadas' },
  { path: '/aplicacoes', label: 'Cases por setor com métricas operacionais reais' },
  { path: '/telemetria', label: 'Dashboard interativo para gestão de frota contratada' },
  { path: '/sobre', label: 'História, missão, equipe técnica e certificações' },
  { path: '/contato', label: 'Formulário completo + agendamento de demonstração' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: '#080B08', borderTop: '1px solid rgba(45,90,54,0.2)' }}>
      {/* Top band */}
      <div
        className="py-2 px-5 lg:px-8 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(45,90,54,0.1)', background: 'rgba(18,18,18,0.5)' }}
      >
        <div className="flex items-center gap-2">
          <span className="blink w-1.5 h-1.5 rounded-full" style={{ background: '#4A8C56' }} />
          <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.2em' }}>
            SISTEMA ONLINE — TRACKTOR GREEN CENTRAL
          </span>
        </div>
        <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177' }}>
          {new Date().getFullYear()} © TG
        </span>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#687177' }}>
              Plataforma de operações territoriais inteligentes. Máquinas robustas,
              conectadas e prontas para ambientes severos — do campo à cidade.
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['AUTONOMIA', 'HÍBRIDO', 'ROBUSTEZ', 'INTELIGÊNCIA', 'EFICIÊNCIA'].map((kw) => (
                <span
                  key={kw}
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '7px',
                    letterSpacing: '0.12em',
                    color: '#4A8C56',
                    background: 'rgba(45,90,54,0.1)',
                    border: '1px solid rgba(45,90,54,0.2)',
                    padding: '3px 7px',
                    borderRadius: '2px',
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#2D5A36', letterSpacing: '0.2em' }}>
              TERRITORY · TECHNOLOGY · CONTROL
            </p>
          </div>

          {/* Nav links */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <span
                style={{
                  fontFamily: 'Barlow Condensed',
                  fontSize: '11px',
                  color: '#4A8C56',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {group}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'Barlow',
                        fontSize: '13px',
                        color: '#687177',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = '#9AA0A6' }}
                      onMouseLeave={(e) => { e.target.style.color = '#687177' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Future structure */}
        <div
          className="p-5 mb-8"
          style={{
            background: 'rgba(43,49,58,0.3)',
            border: '1px solid rgba(45,90,54,0.15)',
            borderRadius: '4px',
          }}
        >
          <span style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#4A8C56', letterSpacing: '0.15em', display: 'block', marginBottom: '10px' }}>
            ESTRUTURA DE PÁGINAS FUTURAS
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FUTURE_PAGES.map((p) => (
              <div key={p.path}>
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '8px',
                    color: '#2D5A36',
                    background: 'rgba(45,90,54,0.1)',
                    border: '1px solid rgba(45,90,54,0.2)',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    display: 'inline-block',
                    marginBottom: '4px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.path}
                </span>
                <p style={{ fontFamily: 'Barlow', fontSize: '10px', color: '#687177', lineHeight: '1.4' }}>
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(45,90,54,0.15)' }}
        >
          <p style={{ fontFamily: 'Space Mono', fontSize: '9px', color: '#687177', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} TRACKTOR GREEN. Todos os direitos reservados.
            Desenvolvido com tecnologia de operações territoriais inteligentes.
          </p>

          <div className="flex items-center gap-4">
            <span style={{ fontFamily: 'Space Mono', fontSize: '8px', color: '#4A8C56', letterSpacing: '0.1em' }}>
              TG-PLATFORM v2.4.1
            </span>
            <button
              onClick={scrollTop}
              className="w-8 h-8 flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(45,90,54,0.15)',
                border: '1px solid rgba(45,90,54,0.3)',
                borderRadius: '2px',
                color: '#4A8C56',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(45,90,54,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(45,90,54,0.15)' }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
