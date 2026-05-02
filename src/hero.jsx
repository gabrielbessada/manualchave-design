// HERO

const Hero = ({ tweaks }) => {
  const headline = tweaks.headline;
  const headlines = {
    A: { l1: 'Você não precisa de mais', l2: 'informação. Precisa de', l3: 'um caminho.' },
    B: { l1: 'Tudo que você precisa', l2: 'para abrir sua barbearia.', l3: 'Em um único lugar.' },
    C: { l1: 'Você não precisa de', l2: 'mais informação. Precisa', l3: 'de um caminho.' },
  };
  const h = headlines[headline] || headlines.C;

  return (
    <section style={{
      position: 'relative',
      background: 'var(--carvao-deep)',
      color: 'var(--branco)',
      overflow: 'hidden',
      borderBottom: '1px solid #2a2a2a',
    }} className="grain">

      {/* Top bar — barbershop pole */}
      <div className="barber-pole" style={{ height: 6, width: '100%' }} />

      {/* Top nav */}
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 32px', position: 'relative', zIndex: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, border: '1.5px solid var(--dourado)',
            display: 'grid', placeItems: 'center', borderRadius: 2,
          }}>
            <div style={{
              fontFamily: 'var(--f-display)', fontWeight: 900,
              color: 'var(--dourado)', fontSize: 18, lineHeight: 1,
            }}>M</div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 9 }}>MANUALCHAVE</div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 16, fontWeight: 700, color: 'var(--branco)', lineHeight: 1 }}>
              Guia do Barbeiro
            </div>
          </div>
        </div>
        <div className="eyebrow" style={{ color: 'var(--cinza-medio)', fontSize: 10 }}>
          EDIÇÃO 2026
        </div>
      </div>

      {/* Decorative ornaments */}
      <div style={{ position: 'absolute', top: 80, left: 24, color: 'var(--dourado)', opacity: .35 }}>
        <DecoCorner size={70} />
      </div>
      <div style={{ position: 'absolute', top: 80, right: 24, color: 'var(--dourado)', opacity: .35 }}>
        <DecoCorner size={70} flip />
      </div>

      {/* Main hero content */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
        gap: 64, alignItems: 'center',
        padding: '60px 32px 80px',
        position: 'relative',
      }}>

        {/* LEFT — copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 12px', border: '1px solid var(--dourado)', color: 'var(--dourado)' }}>
            <RazorIcon size={14} />
            <span className="eyebrow" style={{ fontSize: 10, color: 'var(--dourado)' }}>O MANUAL DEFINITIVO · 2026</span>
          </div>

          <h1 className="display" style={{
            fontSize: 'clamp(40px, 6.4vw, 84px)',
            margin: '28px 0 0',
            color: 'var(--branco)',
          }}>
            <span style={{ display: 'block' }}>{h.l1}</span>
            <span style={{ display: 'block', color: 'var(--dourado)', fontStyle: 'italic' }}>{h.l2}</span>
            <span style={{ display: 'block' }}>{h.l3}</span>
          </h1>

          <p className="lede" style={{ marginTop: 28, color: 'rgba(255,255,255,.78)', maxWidth: 540 }}>
            Do planejamento ao primeiro cliente — legislação, financeiro, identidade visual e gestão — em um guia que se adapta ao <em style={{ color: 'var(--dourado-clr)' }}>seu perfil</em> e <em style={{ color: 'var(--dourado-clr)' }}>orçamento</em>. Não ao contrário.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 36, alignItems: 'center' }}>
            <a href="#oferta" className="btn-primary">
              QUERO O GUIA DO BARBEIRO — R$ 19,90
              <span className="arrow">→</span>
            </a>
            <a href="#modulos" className="btn-ghost">VER OS 9 MÓDULOS</a>
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 28, color: 'var(--cinza-medio)', fontSize: 12, fontFamily: 'var(--f-titulo)', flexWrap: 'wrap' }}>
            <span>✓ Acesso imediato</span>
            <span>✓ 7 dias de garantia</span>
            <span>✓ Pix ou cartão</span>
            <span>✓ 9 módulos completos</span>
          </div>
        </div>

        {/* RIGHT — ebook 3D mockup */}
        <div style={{ position: 'relative', perspective: 1400, minHeight: 480 }}>
          <EbookMockup />
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div style={{
        borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a',
        padding: '14px 0', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: 48, color: 'var(--dourado)', whiteSpace: 'nowrap', animation: 'marquee 36s linear infinite' }}>
          {Array.from({ length: 3 }).flatMap((_, k) => (
            ['LEGISLAÇÃO', '◆', 'FINANCEIRO', '◆', 'PRECIFICAÇÃO', '◆', 'IDENTIDADE VISUAL', '◆', 'PONTO COMERCIAL', '◆', 'MARKETING DIGITAL', '◆', 'ATENDIMENTO', '◆', 'GESTÃO', '◆', 'ABERTURA EM 15 DIAS', '◆']
              .map((t, i) => (
                <span key={`${k}-${i}`} className="eyebrow" style={{ fontSize: 11, color: i % 2 ? 'var(--dourado)' : 'var(--branco)' }}>{t}</span>
              ))
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
};

const EbookMockup = () => (
  <div style={{
    position: 'relative',
    transform: 'rotateY(-22deg) rotateX(6deg) rotateZ(-2deg)',
    transformStyle: 'preserve-3d',
    width: 320, height: 460,
    margin: '0 auto',
    filter: 'drop-shadow(40px 40px 60px rgba(0,0,0,.5))',
  }}>
    {/* Spine / depth */}
    <div style={{
      position: 'absolute', left: -10, top: 4, bottom: 4, width: 20,
      background: 'linear-gradient(90deg, #0a0a0a, #1a1a1a 60%, #2a2a2a)',
      transform: 'rotateY(-90deg) translateZ(-160px)',
    }}/>
    {/* Cover */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'var(--carvao)',
      border: '1px solid #333',
      boxShadow: 'inset 0 0 0 8px var(--carvao), inset 0 0 0 9px var(--dourado)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 32,
    }}>
      {/* Top decoration */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <DecoCorner size={36} color="var(--dourado)" />
          <DecoCorner size={36} color="var(--dourado)" flip />
        </div>
        <div style={{ marginTop: 18, textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 9, letterSpacing: '.32em' }}>MANUALCHAVE · MANUAL Nº 01</div>
          <DecoRule glyph="◆" style={{ marginTop: 10, opacity: .8 }} />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', color: 'var(--dourado-clr)', fontSize: 11, letterSpacing: '.08em' }}>O guia definitivo para abrir</div>
        <div className="display" style={{ fontSize: 44, color: 'var(--branco)', marginTop: 8, lineHeight: .92 }}>
          GUIA<br/><span style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>do</span><br/>BARBEIRO
        </div>
        <div style={{ marginTop: 18, display: 'inline-block' }}>
          <ScissorsIcon size={32} color="var(--dourado)" />
        </div>
        <div className="eyebrow" style={{ color: 'var(--dourado-clr)', fontSize: 9, marginTop: 14, letterSpacing: '.3em' }}>
          DO ZERO À INAUGURAÇÃO
        </div>
      </div>

      <div>
        <DecoRule glyph="◆ ◆ ◆" style={{ marginBottom: 14, opacity: .8 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 8 }}>EDIÇÃO 2026</div>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 8 }}>9 MÓDULOS · 6 PERFIS</div>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 8 }}>VOL · I</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <DecoCorner size={28} color="var(--dourado)" style={{ transform: 'scaleY(-1)' }} />
          <DecoCorner size={28} color="var(--dourado)" flip style={{ transform: 'scaleY(-1) scaleX(-1)' }} />
        </div>
      </div>
    </div>

    {/* Glare */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(120deg, rgba(255,255,255,.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,.04) 60%, rgba(0,0,0,.2))',
      pointerEvents: 'none',
    }}/>
  </div>
);

Object.assign(window, { Hero, EbookMockup });
