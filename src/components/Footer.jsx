import Logo from './Logo'
import { ArrowUp } from 'lucide-react'

const LINKS = {
  'Plataforma': ['Home', 'Equipamentos', 'Aplicações', 'Telemetria', 'Por que TG'],
  'Setores': ['Energia Solar', 'Agricultura', 'Construção', 'Municípios', 'Infraestrutura'],
  'Empresa': ['Sobre a TG', 'Parceiros', 'Frota de Suporte', 'Política de Dados', 'Contato'],
}

const FUTURE_PAGES = [
  { path: '/equipamentos', label: 'Catálogo com filtros e specs técnicas detalhadas' },
  { path: '/aplicacoes', label: 'Cases por setor com métricas operacionais reais' },
  { path: '/telemetria', label: 'Dashboard interativo para frotas contratadas' },
  { path: '/sobre', label: 'História, missão, equipe técnica e certificações' },
  { path: '/contato', label: 'Formulário completo + agendamento de demo em campo' },
]

const KW = ['AUTONOMIA', 'HÍBRIDO', 'ROBUSTEZ', 'INTELIGÊNCIA', 'EFICIÊNCIA', 'CONTROLE', 'TERRITÓRIO']

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--tg-bg0)', borderTop: '1px solid var(--tg-border)' }}>
      <div style={{ height: '2px', background: 'linear-gradient(to right, var(--tg-green) 0%, var(--tg-green-mid) 50%, transparent 100%)' }} />
      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--tg-green-mid) 0%, var(--tg-green-dim) 40%, transparent 100%)' }} />

      <div
        className="px-5 lg:px-8 py-2.5 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--tg-border)', background: 'var(--tg-bg4)' }}
      >
        <div className="flex items-center gap-2">
          <span className="blink" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--tg-green)', display: 'block' }} />
          <span style={{ fontFamily: '"Space Mono"', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.18em' }}>
            SISTEMA ONLINE — TRACKTOR GREEN CENTRAL DE CONTROLE
          </span>
        </div>
        <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: 'var(--tg-text3)' }}>
          {new Date().getFullYear()} © TG
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-5" />

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: '"Barlow"', color: 'var(--tg-text3)' }}>
              Plataforma de operações territoriais inteligentes. Máquinas robustas,
              conectadas e prontas para ambientes severos — do campo à cidade.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {KW.map((kw) => (
                <span
                  key={kw}
                  className="tg-parallelogram"
                  style={{
                    fontFamily: '"Space Mono"',
                    fontSize: '7px',
                    letterSpacing: '0.12em',
                    color: 'var(--tg-green)',
                    background: 'var(--tg-green-dim)',
                    border: '1px solid var(--tg-green-mid)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>

            <p
              style={{
                fontFamily: '"Space Mono"',
                fontSize: '8px',
                color: 'var(--tg-green-strong)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              TERRITORY · TECHNOLOGY · CONTROL
            </p>
          </div>

          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <span
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--tg-green)',
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
                        fontFamily: '"Barlow"',
                        fontSize: '13px',
                        color: 'var(--tg-text3)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        display: 'block',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = 'var(--tg-text2)' }}
                      onMouseLeave={(e) => { e.target.style.color = 'var(--tg-text3)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="p-5 mb-8"
          style={{
            background: 'var(--tg-green-dim)',
            border: '1px solid var(--tg-border)',
            borderRadius: '3px',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div style={{ width: '20px', height: '2px', background: 'var(--tg-green)' }} />
            <div style={{ width: '12px', height: '1px', background: 'var(--tg-green-mid)' }} />
            <span style={{ fontFamily: '"Space Mono"', fontSize: '9px', color: 'var(--tg-green)', letterSpacing: '0.15em' }}>
              ESTRUTURA DE PÁGINAS FUTURAS
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {FUTURE_PAGES.map((p) => (
              <div key={p.path}>
                <span
                  className="tg-parallelogram inline-block"
                  style={{
                    fontFamily: '"Space Mono"',
                    fontSize: '8px',
                    color: 'var(--tg-green)',
                    background: 'var(--tg-green-dim)',
                    border: '1px solid var(--tg-green-mid)',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    marginBottom: '5px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.path}
                </span>
                <p style={{ fontFamily: '"Barlow"', fontSize: '10px', color: 'var(--tg-text3)', lineHeight: '1.4' }}>
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid var(--tg-border)' }}
        >
          <div className="flex items-center gap-4">
            <Logo size="sm" variant="symbol" />
            <p style={{ fontFamily: '"Space Mono"', fontSize: '9px', color: 'var(--tg-text3)', letterSpacing: '0.06em' }}>
              © {new Date().getFullYear()} TRACKTOR GREEN. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span style={{ fontFamily: '"Space Mono"', fontSize: '8px', color: 'var(--tg-green)', letterSpacing: '0.1em' }}>
              TG-PLATFORM v2.4.1
            </span>
            <button
              onClick={scrollTop}
              className="flex items-center justify-center w-8 h-8 transition-all duration-200 focus:outline-none"
              style={{
                background: 'var(--tg-green-dim)',
                border: '1px solid var(--tg-border)',
                borderRadius: '2px',
                color: 'var(--tg-green)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--tg-green-mid)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--tg-green-dim)' }}
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
