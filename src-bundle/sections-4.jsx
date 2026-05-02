// PRODUCTS SECTION — ManualChave brand block + 3 standardized product covers

const ProductCover = ({ accent, title1, title2, icon, ribbon }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    aspectRatio: '3 / 4',
    background: '#1A1A1A',
    color: '#fff',
    overflow: 'hidden',
    boxShadow: '0 24px 48px -16px rgba(0,0,0,.55)',
  }}>
    {/* Inner border frame */}
    <div style={{
      position: 'absolute', inset: 12,
      border: `1px solid ${accent}`,
      pointerEvents: 'none',
    }} />
    {/* Top + bottom solid bars */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: accent }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: accent }} />

    {/* Ribbon */}
    {ribbon && (
      <div style={{
        position: 'absolute', top: 18, right: -36,
        background: accent, color: '#1A1A1A',
        fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 9,
        letterSpacing: '.18em', padding: '4px 40px',
        transform: 'rotate(35deg)', zIndex: 3,
      }}>{ribbon}</div>
    )}

    {/* Cover content — 3-row grid */}
    <div style={{
      position: 'absolute', inset: 24,
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      textAlign: 'center',
    }}>
      {/* Top row */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DecoCorner size={26} color={accent} />
          <DecoCorner size={26} color={accent} flip />
        </div>
        <div className="eyebrow" style={{ color: accent, fontSize: 8, letterSpacing: '.32em', marginTop: 10 }}>
          MANUALCHAVE
        </div>
      </div>

      {/* Middle row — content */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 14, padding: '12px 4px' }}>
        <div style={{
          fontFamily: 'var(--f-display)', fontStyle: 'italic',
          fontSize: 'clamp(10px, 1.05vw, 12px)', color: accent, opacity: .85,
        }}>O guia definitivo para abrir</div>

        <div className="display" style={{
          fontSize: 'clamp(22px, 2.4vw, 30px)', color: '#fff', lineHeight: .95,
          fontStyle: 'italic',
        }}>
          {title1}<br/>
          <span style={{ color: accent, fontWeight: 900 }}>{title2}</span>
        </div>

        <div style={{ width: 36, height: 1, background: accent, opacity: .6 }} />

        <div>{icon}</div>

        <div className="mono" style={{
          fontSize: 8, letterSpacing: '.3em', color: accent, opacity: .7,
        }}>VOL · DA COLEÇÃO</div>
      </div>

      {/* Bottom row */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <DecoCorner size={22} color={accent} style={{ transform: 'scaleY(-1)' }} />
          <div className="eyebrow" style={{ color: accent, fontSize: 8 }}>EDIÇÃO 2026</div>
          <DecoCorner size={22} color={accent} flip style={{ transform: 'scaleY(-1) scaleX(-1)' }} />
        </div>
      </div>
    </div>
  </div>
);

const ScissorsBig = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
    <circle cx="9" cy="22" r="4" stroke={color} strokeWidth="1.4"/>
    <circle cx="23" cy="22" r="4" stroke={color} strokeWidth="1.4"/>
    <path d="M11.8 19.2 L26 5" stroke={color} strokeWidth="1.4"/>
    <path d="M20.2 19.2 L6 5" stroke={color} strokeWidth="1.4"/>
    <path d="M16 13 L20 17" stroke={color} strokeWidth="1.4"/>
  </svg>
);

const HairDryer = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.4">
    <path d="M5 10 L20 6 L20 18 L5 14 Z"/>
    <circle cx="13" cy="12" r="3"/>
    <path d="M20 11 L25 9 L25 15 L20 13"/>
    <path d="M11 18 L11 24 M9 24 L13 24"/>
    <path d="M11 14 L11 18"/>
  </svg>
);

const TweezerEye = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.4">
    <path d="M4 16 Q16 6 28 16 Q16 26 4 16 Z"/>
    <circle cx="16" cy="16" r="3.5"/>
    <circle cx="16" cy="16" r="1.2" fill={color} stroke="none"/>
    <path d="M10 2 L16 12" />
    <path d="M22 2 L16 12" />
  </svg>
);

// Standardized product card — ALL three identical structure
const ProductCard = ({ accent, accentSoft, accentLabel, vol, name, tagline, available, ctaLabel, ctaHref, onSubscribe, sent, subscribeColor }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  return (
    <div style={{
      background: available ? `linear-gradient(180deg, rgba(201,168,76,.08), rgba(201,168,76,.02))` : `rgba(255,255,255,.02)`,
      border: available ? '2px solid var(--dourado)' : `1px solid ${accent}`,
      padding: 28,
      display: 'flex', flexDirection: 'column',
      gap: 24,
      position: 'relative',
    }}>
      {/* Cover — fixed aspect, never clipped */}
      <div style={{ width: '100%' }}>
        <ProductCover {...{ accent, ...arguments[0].cover }} />
      </div>

      {/* Info block — STANDARDIZED across cards */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <div>
          <div className="eyebrow" style={{ color: accentLabel, fontSize: 11, marginBottom: 8 }}>VOL · {vol}</div>
          <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 20, fontWeight: 700, color: 'var(--branco)', marginBottom: 6 }}>
            {name}
          </div>
          <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,.65)', minHeight: 40, lineHeight: 1.4 }}>
            {tagline}
          </div>
        </div>

        {/* CTA area — fixed minimum height for alignment */}
        <div style={{ marginTop: 'auto', minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {available ? (
            <a href={ctaHref} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '14px 18px' }}>
              {ctaLabel} <span className="arrow">→</span>
            </a>
          ) : !open ? (
            <button onClick={() => setOpen(true)} style={{
              width: '100%', padding: '14px 18px', border: `1.5px solid ${accent}`,
              color: accent, background: 'transparent', fontFamily: 'var(--f-titulo)',
              fontWeight: 600, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = subscribeColor || '#1A1A1A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent; }}
            >QUERO DESCONTO NO LANÇAMENTO</button>
          ) : sent ? (
            <div style={{ padding: '14px', background: accentSoft, border: `1px solid ${accent}`, color: '#fff', fontSize: 13, textAlign: 'center' }}>
              ✓ Pronto. Você está na lista do desconto.
            </div>
          ) : (
            <div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 12.5, color: 'rgba(255,255,255,.7)', textAlign: 'left', lineHeight: 1.5, marginBottom: 10 }}>
                Deixe seu e-mail e garanta desconto exclusivo no lançamento — ou presenteie alguém que você sabe que tem esse sonho.
              </div>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="seu@email.com" style={{
                width: '100%', padding: '12px 14px', background: '#0d0d0d', border: `1px solid ${accent}`,
                color: '#fff', fontFamily: 'var(--f-corpo)', fontSize: 13, marginBottom: 8,
                outline: 'none', boxSizing: 'border-box',
              }} />
              <button onClick={() => onSubscribe()} style={{
                width: '100%', padding: '12px 18px', background: accent,
                color: subscribeColor || '#1A1A1A', border: 'none', fontFamily: 'var(--f-titulo)',
                fontWeight: 700, fontSize: 12, letterSpacing: '.12em', cursor: 'pointer',
              }}>GARANTIR DESCONTO</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simpler version using direct render (avoid arguments hack)
const StandardCard = ({ accent, accentLabel, vol, name, tagline, cover, available, ctaLabel, ctaHref, sent, onSubscribe, subscribeColor, ribbon }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  return (
    <div style={{
      background: available ? 'linear-gradient(180deg, rgba(201,168,76,.08), rgba(201,168,76,.02))' : 'rgba(255,255,255,.02)',
      border: available ? '2px solid var(--dourado)' : `1px solid ${accent}`,
      padding: 28,
      display: 'flex', flexDirection: 'column',
      gap: 24,
      position: 'relative',
    }}>
      <ProductCover {...cover} ribbon={ribbon} />

      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <div>
          <div className="eyebrow" style={{ color: accentLabel, fontSize: 11, marginBottom: 8 }}>VOL · {vol}</div>
          <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 20, fontWeight: 700, color: 'var(--branco)', marginBottom: 6 }}>{name}</div>
          <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,.65)', minHeight: 42, lineHeight: 1.45 }}>
            {tagline}
          </div>
        </div>

        <div style={{ marginTop: 'auto', minHeight: 110, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {available ? (
            <a href={ctaHref} className="btn-primary" style={{ width: '100%', boxSizing: 'border-box', justifyContent: 'center', fontSize: 13, padding: '14px 18px' }}>
              {ctaLabel} <span className="arrow">→</span>
            </a>
          ) : !open ? (
            <button onClick={() => setOpen(true)} style={{
              width: '100%', padding: '14px 18px', border: `1.5px solid ${accent}`,
              color: accent, background: 'transparent', fontFamily: 'var(--f-titulo)',
              fontWeight: 600, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all .2s',
            }}>QUERO DESCONTO NO LANÇAMENTO</button>
          ) : sent ? (
            <div style={{ padding: '14px', background: 'rgba(255,255,255,.06)', border: `1px solid ${accent}`, color: '#fff', fontSize: 13, textAlign: 'center' }}>
              ✓ Pronto. Você está na lista do desconto.
            </div>
          ) : (
            <div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 12.5, color: 'rgba(255,255,255,.7)', textAlign: 'left', lineHeight: 1.5, marginBottom: 10 }}>
                Deixe seu e-mail e garanta desconto exclusivo no lançamento — ou presenteie alguém que você sabe que tem esse sonho.
              </div>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="seu@email.com" style={{
                width: '100%', padding: '12px 14px', background: '#0d0d0d', border: `1px solid ${accent}`,
                color: '#fff', fontFamily: 'var(--f-corpo)', fontSize: 13, marginBottom: 8,
                outline: 'none', boxSizing: 'border-box',
              }} />
              <button onClick={onSubscribe} style={{
                width: '100%', padding: '12px 18px', background: accent,
                color: subscribeColor || '#1A1A1A', border: 'none', fontFamily: 'var(--f-titulo)',
                fontWeight: 700, fontSize: 12, letterSpacing: '.12em', cursor: 'pointer',
              }}>GARANTIR DESCONTO</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ManualChaveSection = () => {
  const [sentA, setSentA] = React.useState(false);
  const [sentB, setSentB] = React.useState(false);

  return (
    <section style={{
      background: '#1A1A1A', color: '#fff',
      padding: '120px 0 80px', position: 'relative',
    }} className="grain">
      <BarberStripe height={4} style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      {/* BLOCO 1 — Quem é a ManualChave */}
      <div className="container-narrow" style={{ textAlign: 'center', marginBottom: 100 }}>
        <DecoRule glyph="◆ ◆ ◆" style={{ marginBottom: 32 }} />
        <div style={{
          fontFamily: 'var(--f-display)', fontStyle: 'italic',
          fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: .9,
          letterSpacing: '-.01em', color: 'var(--branco)',
        }}>
          manual<span style={{ fontWeight: 900, fontStyle: 'normal', color: 'var(--dourado)' }}>chave</span>
        </div>
        <p className="lede" style={{ color: 'rgba(255,255,255,.78)', maxWidth: 640, margin: '32px auto 0', fontSize: 18 }}>
          A ManualChave nasceu para eliminar o caos de quem quer abrir um negócio no setor de beleza e estética no Brasil. Sem conteúdo genérico, sem informação solta. <strong style={{ color: 'var(--branco)' }}>Guias completos, personalizados por perfil e orçamento</strong> — do planejamento ao primeiro cliente.
        </p>
        <div style={{
          marginTop: 36, padding: '28px 32px',
          borderLeft: '3px solid var(--dourado)',
          background: 'rgba(255,255,255,.03)',
          textAlign: 'left',
          maxWidth: 640, margin: '36px auto 0',
        }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 10, marginBottom: 10 }}>NOSSA MISSÃO</div>
          <div style={{
            fontFamily: 'var(--f-display)', fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.4vw, 26px)', lineHeight: 1.4,
            color: 'var(--branco)',
          }}>
            Transformar a jornada de abertura de negócio numa experiência <span style={{ color: 'var(--dourado)' }}>orientada</span> — não num teste de resistência.
          </div>
        </div>
      </div>

      {/* BLOCO 2 — Próximos lançamentos */}
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow color="var(--dourado)">PRÓXIMOS LANÇAMENTOS</Eyebrow>
          <h2 className="display" style={{
            fontSize: 'clamp(36px, 4.6vw, 60px)',
            margin: '16px 0 16px', color: 'var(--branco)',
          }}>
            O Guia do Barbeiro <span style={{ fontStyle: 'italic', color: 'var(--dourado)' }}>é apenas o começo.</span>
          </h2>
          <p className="lede" style={{ color: 'rgba(255,255,255,.7)', maxWidth: 620, margin: '0 auto' }}>
            Estamos construindo o ecossistema completo para quem quer abrir no setor de beleza. Cada guia segue a mesma metodologia — conteúdo real, adaptado para o seu perfil e orçamento.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          alignItems: 'stretch',
        }}>
          <StandardCard
            accent="#C9A84C"
            accentLabel="var(--dourado)"
            vol="I"
            name="Guia do Barbeiro"
            tagline="Do zero à abertura — em 9 módulos."
            cover={{ accent: '#C9A84C', title1: 'GUIA do', title2: 'BARBEIRO', icon: <ScissorsBig color="#C9A84C" /> }}
            ribbon="DISPONÍVEL"
            available
            ctaLabel="COMPRAR POR R$ 24,90"
            ctaHref="#oferta"
          />

          <StandardCard
            accent="#C4856A"
            accentLabel="#C4856A"
            vol="II"
            name="Guia do Salão"
            tagline="Para quem quer abrir um salão de beleza completo."
            cover={{ accent: '#C4856A', title1: 'GUIA do', title2: 'SALÃO', icon: <HairDryer color="#C4856A" /> }}
            ribbon="EM BREVE"
            sent={sentA}
            onSubscribe={() => setSentA(true)}
          />

          <StandardCard
            accent="#8B4558"
            accentLabel="#B86880"
            vol="III"
            name="Guia da Designer"
            tagline="Para quem trabalha com sobrancelhas e estética facial."
            cover={{ accent: '#8B4558', title1: 'GUIA da', title2: 'DESIGNER', icon: <TweezerEye color="#8B4558" /> }}
            ribbon="EM BREVE"
            sent={sentB}
            onSubscribe={() => setSentB(true)}
            subscribeColor="#fff"
          />
        </div>
      </div>

      {/* BLOCO 3 — rodapé da seção */}
      <div className="container-narrow" style={{ textAlign: 'center', marginTop: 80 }}>
        <DecoRule glyph="◆" style={{ marginBottom: 28 }} />
        <p style={{
          fontFamily: 'var(--f-corpo)', fontStyle: 'italic',
          fontSize: 17, color: 'rgba(255,255,255,.75)',
          maxWidth: 640, margin: '0 auto 32px',
        }}>
          Todos os guias seguem a mesma metodologia do Guia do Barbeiro: <strong style={{ color: 'var(--branco)', fontStyle: 'normal' }}>9 módulos, 6 perfis</strong>, personalizado para o seu orçamento.
        </p>
        <div style={{
          fontFamily: 'var(--f-display)', fontStyle: 'italic',
          fontSize: 32, lineHeight: 1, color: 'var(--branco)',
        }}>
          manual<span style={{ fontWeight: 900, fontStyle: 'normal', color: 'var(--dourado)' }}>chave</span>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ManualChaveSection });
