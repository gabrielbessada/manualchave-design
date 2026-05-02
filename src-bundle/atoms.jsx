// Reusable atoms

const Eyebrow = ({ children, color, style }) => (
  <div className="eyebrow" style={{ color: color || 'var(--dourado)', ...style }}>{children}</div>
);

const DecoRule = ({ glyph = '◆ ◆ ◆', color, style }) => (
  <div className="deco-rule" style={{ color: color || 'var(--dourado)', ...style }}>
    <span className="line"></span>
    <span className="glyph mono">{glyph}</span>
    <span className="line"></span>
  </div>
);

// Decorative art-deco corner ornament (SVG)
const DecoCorner = ({ size = 60, color = 'currentColor', flip = false, style }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ transform: flip ? 'scaleX(-1)' : 'none', ...style }}>
    <g stroke={color} strokeWidth="1" fill="none">
      <path d="M0 0 L60 0 L60 8 L8 8 L8 60 L0 60 Z" fill={color} stroke="none" opacity="0.0"/>
      <path d="M0 0 L60 0" />
      <path d="M0 0 L0 60" />
      <path d="M4 4 L56 4" opacity=".55" />
      <path d="M4 4 L4 56" opacity=".55" />
      <circle cx="12" cy="12" r="2" fill={color} stroke="none" />
      <path d="M20 4 L20 12 L28 12" />
      <path d="M4 20 L12 20 L12 28" />
    </g>
  </svg>
);

// Razor blade vector
const RazorIcon = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 2 L26 7 L26 25 L16 30 L6 25 L6 7 Z" stroke={color} strokeWidth="1.4"/>
    <path d="M16 7 L22 10 L22 22 L16 25 L10 22 L10 10 Z" stroke={color} strokeWidth=".8" opacity=".6"/>
    <circle cx="16" cy="16" r="1.2" fill={color}/>
    <path d="M16 11 L16 13 M16 19 L16 21 M11 16 L13 16 M19 16 L21 16" stroke={color} strokeWidth=".8"/>
  </svg>
);

const ScissorsIcon = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="9" cy="22" r="4" stroke={color} strokeWidth="1.4"/>
    <circle cx="23" cy="22" r="4" stroke={color} strokeWidth="1.4"/>
    <path d="M11.8 19.2 L26 5" stroke={color} strokeWidth="1.4"/>
    <path d="M20.2 19.2 L6 5" stroke={color} strokeWidth="1.4"/>
    <path d="M16 13 L20 17" stroke={color} strokeWidth="1.4"/>
  </svg>
);

const CombIcon = ({ size = 28, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="4" y="6" width="24" height="6" stroke={color} strokeWidth="1.4"/>
    <path d="M6 12 L6 22 M9 12 L9 24 M12 12 L12 22 M15 12 L15 24 M18 12 L18 22 M21 12 L21 24 M24 12 L24 22 M27 12 L27 24" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const StarIcon = ({ size = 14, color = 'currentColor', filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="1.5">
    <path d="M12 2 L15 9 L22 9.5 L17 14.5 L18.5 22 L12 18 L5.5 22 L7 14.5 L2 9.5 L9 9 Z"/>
  </svg>
);

// Vintage barber pole stripe (vertical bar)
const BarberStripe = ({ height = 4, style }) => (
  <div className="barber-pole" style={{ width: '100%', height, ...style }} />
);

// Section title block — eyebrow + heading + optional kicker
const SectionTitle = ({ eyebrow, title, kicker, align = 'left', dark = false, eyebrowColor }) => {
  const fg = dark ? 'var(--branco)' : 'var(--carvao)';
  return (
    <div style={{ textAlign: align, color: fg }}>
      {eyebrow && <Eyebrow color={eyebrowColor || 'var(--dourado)'}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="display" style={{
          fontSize: 'clamp(32px, 4.4vw, 56px)',
          margin: '14px 0 0',
          color: fg,
        }}>
          {title}
        </h2>
      )}
      {kicker && (
        <p className="lede" style={{
          margin: '20px 0 0',
          color: dark ? 'rgba(255,255,255,.78)' : 'var(--cinza-esc)',
          maxWidth: 680,
          ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
        }}>
          {kicker}
        </p>
      )}
    </div>
  );
};

// Highlight box from design system
const HighlightBox = ({ kind = 'dica', title, children }) => {
  const map = {
    dica:      { bg: '#1A1A1A', text: '#FFFFFF', border: '#C9A84C', label: 'DICA', labelColor: '#C9A84C' },
    atencao:   { bg: '#F5F0E8', text: '#1A1A1A', border: '#C9A84C', label: 'ATENÇÃO', labelColor: '#A07830' },
    checklist: { bg: '#EDE5D4', text: '#1A1A1A', border: '#A07830', label: 'CHECKLIST', labelColor: '#A07830' },
  };
  const s = map[kind];
  return (
    <div style={{
      background: s.bg, color: s.text,
      borderLeft: `4px solid ${s.border}`,
      padding: '20px 24px',
    }}>
      <div className="eyebrow" style={{ color: s.labelColor, marginBottom: 8 }}>{title || s.label}</div>
      <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 15, lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
};

// Class badge — emoji + code, design-system style
const ClassBadge = ({ symbol, code, name }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12,
    background: 'var(--creme)',
    borderLeft: '3px solid var(--dourado)',
    padding: '12px 16px',
    minWidth: 220,
  }}>
    <div style={{
      width: 44, height: 44, borderRadius: 2,
      background: 'var(--carvao)', color: 'var(--dourado)',
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em',
    }}>{code}</div>
    <div>
      <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 14, fontWeight: 700, color: 'var(--carvao)' }}>
        <span style={{ marginRight: 6, fontSize: 16 }}>{symbol}</span>{name}
      </div>
      <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 11, color: 'var(--cinza-esc)', marginTop: 2 }}>
        Perfil {code.startsWith('A') ? 'Aspirante' : 'Veterano'}
      </div>
    </div>
  </div>
);

Object.assign(window, {
  Eyebrow, DecoRule, DecoCorner, RazorIcon, ScissorsIcon, CombIcon, StarIcon,
  BarberStripe, SectionTitle, HighlightBox, ClassBadge,
});
