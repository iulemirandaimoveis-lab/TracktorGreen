const WORDS = [
  'AUTONOMIA', 'TERRITÓRIO', 'TECNOLOGIA', 'CONTROLE', 'INTELIGÊNCIA',
  'ROBUSTEZ', 'PRECISÃO', 'EFICIÊNCIA', 'SUSTENTABILIDADE', 'CONECTIVIDADE',
  'TELEMETRIA', 'FROTA', 'CAMPO', 'HÍBRIDO', 'MONITORAMENTO',
]

export default function BrandTicker({ inverted = false }) {
  const line = WORDS.join('  ·  ') + '  ·  '

  return (
    <div
      className="ticker-wrap py-2.5 overflow-hidden"
      style={{
        background: inverted ? 'var(--tg-green)' : 'var(--tg-ticker-bg)',
        borderTop: inverted ? 'none' : '1px solid var(--tg-border)',
        borderBottom: inverted ? 'none' : '1px solid var(--tg-border)',
      }}
    >
      <div className="ticker-inner">
        {/* Double the content for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: inverted ? '#0A0A0A' : 'var(--tg-ticker-color)',
              paddingRight: '0',
            }}
          >
            {line}&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}
