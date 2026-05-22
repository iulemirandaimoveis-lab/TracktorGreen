/**
 * Cabeçalho de seção padronizado com a identidade visual TG:
 * — linha verde + tag em Space Mono
 * — título em Barlow Condensed bold
 * — subtexto opcional
 * — barras de track pattern no topo (opcional)
 */
export default function SectionHeader({
  tag,
  title,
  titleGreen,
  sub,
  center = false,
  children,
  className = '',
}) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {/* Tag row */}
      <div
        className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
      >
        {/* Track accent bars — matches the logo stripes */}
        {!center && (
          <div className="flex flex-col gap-1">
            <div style={{ width: '32px', height: '2px', background: '#4CAF50' }} />
            <div style={{ width: '20px', height: '1px', background: 'rgba(76,175,80,0.4)' }} />
          </div>
        )}
        {center && (
          <div style={{ width: '20px', height: '2px', background: '#4CAF50' }} />
        )}
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '10px',
            color: '#4CAF50',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </span>
        {center && (
          <div style={{ width: '20px', height: '2px', background: '#4CAF50' }} />
        )}
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: 'clamp(34px, 5vw, 62px)',
          fontWeight: 900,
          color: '#F0F0F0',
          lineHeight: '0.95',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          marginBottom: sub || children ? '0' : '0',
        }}
      >
        {title}
        {titleGreen && (
          <>
            <br />
            <span style={{ color: '#4CAF50' }}>{titleGreen}</span>
          </>
        )}
      </h2>

      {/* Sub text */}
      {sub && (
        <p
          className="mt-5 leading-relaxed"
          style={{
            color: '#9AA0A6',
            fontFamily: '"Barlow", sans-serif',
            fontSize: '14px',
            maxWidth: center ? '520px' : '480px',
            margin: center ? '20px auto 0' : '20px 0 0',
          }}
        >
          {sub}
        </p>
      )}

      {children}
    </div>
  )
}
