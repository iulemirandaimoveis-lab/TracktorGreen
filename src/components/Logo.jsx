export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: { text: 'text-lg', sub: 'text-[7px]', icon: 28 },
    md: { text: 'text-2xl', sub: 'text-[8px]', icon: 36 },
    lg: { text: 'text-3xl', sub: 'text-[9px]', icon: 44 },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Symbol mark — geometric T tracks icon */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="2" fill="#1E3A24"/>
        {/* Top horizontal bars */}
        <rect x="6" y="8" width="32" height="5" rx="1" fill="#E6E6EA"/>
        <rect x="6" y="15" width="20" height="3" rx="1" fill="#4A8C56"/>
        {/* Left vertical */}
        <rect x="6" y="21" width="10" height="16" rx="1" fill="#E6E6EA"/>
        {/* Bottom right accent */}
        <rect x="20" y="28" width="18" height="5" rx="1" fill="#4A8C56"/>
        <rect x="26" y="21" width="12" height="5" rx="1" fill="#2D5A36"/>
      </svg>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`${s.text} font-black tracking-widest uppercase`}
            style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#E6E6EA', letterSpacing: '0.12em' }}
          >
            TRACKTOR
          </span>
          <span
            className={`${s.text} font-black tracking-widest uppercase`}
            style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#4A8C56', letterSpacing: '0.12em' }}
          >
            GREEN
          </span>
        </div>
        <span
          className={`${s.sub} tracking-[0.22em] uppercase mt-0.5`}
          style={{ fontFamily: 'Space Mono, monospace', color: '#687177' }}
        >
          TERRITORY · TECHNOLOGY · CONTROL
        </span>
      </div>
    </div>
  )
}
