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
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
        {!center && (
          <div className="flex flex-col gap-1">
            <div style={{ width: '32px', height: '2px', background: 'var(--tg-green)' }} />
            <div style={{ width: '20px', height: '1px', background: 'var(--tg-green-mid)' }} />
          </div>
        )}
        {center && (
          <div style={{ width: '20px', height: '2px', background: 'var(--tg-green)' }} />
        )}
        <span
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '10px',
            color: 'var(--tg-green)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </span>
        {center && (
          <div style={{ width: '20px', height: '2px', background: 'var(--tg-green)' }} />
        )}
      </div>

      <h2
        style={{
          fontFamily: '"Barlow Condensed", "Raleway", sans-serif',
          fontSize: 'clamp(34px, 5vw, 62px)',
          fontWeight: 900,
          color: 'var(--tg-text0)',
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
            <span style={{ color: 'var(--tg-green)' }}>{titleGreen}</span>
          </>
        )}
      </h2>

      {sub && (
        <p
          className="mt-5 leading-relaxed"
          style={{
            color: 'var(--tg-text2)',
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
