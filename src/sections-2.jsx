// SECTIONS PART 2 — Modules, Social proof

const MODULES = [
  { n: '01', t: 'Norte Inicial', d: 'Validação da ideia, escolha do modelo e data de abertura real.' },
  { n: '02', t: 'Identidade Visual e Marca', d: 'INPI, logo, paleta e estética do espaço por orçamento.' },
  { n: '03', t: 'Legislação e Regularização', d: 'Contador, MEI, alvará e vigilância sanitária — sem surpresa.' },
  { n: '03b', t: 'Ponto Comercial', d: 'Como avaliar e negociar antes de assinar qualquer contrato.' },
  { n: '04', t: 'Financeiro, Estrutura e Ferramentas', d: 'Investimento real por faixa. Precificação. Cadeiras e máquinas com marcas e preços.' },
  { n: '05', t: 'Atendimento e Experiência', d: 'Leitura do cliente, fidelização e o que separa quem retém de quem depende de novo cliente.' },
  { n: '06', t: 'Marketing Digital', d: 'Google Meu Negócio, Instagram e os primeiros 50 clientes.' },
  { n: '07', t: 'Gestão Operacional', d: 'Rotinas diárias, 4 métricas essenciais e liderança de equipe.' },
  { n: '08', t: 'Receita Extra', d: 'Bebidas, produtos e ambiente — como aumentar o ticket sem aumentar o espaço.' },
];

const ModulesSection = () => (
  <section id="modulos" style={{ background: 'var(--branco)', padding: '140px 0' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>O ROTEIRO</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', margin: '16px 0 0' }}>
            9 módulos. <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>Na ordem certa</span>. Com lógica entre eles.
          </h2>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--f-corpo)', fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)', maxWidth: 720, marginBottom: 56 }}>
        Não é uma coletânea de dicas. É um material com sequência: você segue a ordem, toma as decisões certas no momento certo, e chega à abertura sem ter desperdiçado dinheiro nem energia com o que não importava ainda.
      </p>

      <div style={{ borderTop: '1.5px solid var(--dourado)' }}>
        {MODULES.map((m, i) => (
          <div key={m.n} style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr auto',
            gap: 32,
            padding: '32px 0',
            borderBottom: '1px solid var(--creme-esc)',
            alignItems: 'center',
            position: 'relative',
            transition: 'background .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--creme)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              fontFamily: 'var(--f-display)',
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: m.n.length > 2 ? 50 : 64,
              color: 'var(--dourado)',
              lineHeight: 1,
            }}>{m.n}</div>
            <div>
              <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 26, fontWeight: 700, color: 'var(--carvao)' }}>
                {m.t}
              </div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', fontSize: 17, color: 'var(--cinza-esc)', marginTop: 4 }}>
                {m.d}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--cinza-medio)' }}>
              <span className="eyebrow" style={{ fontSize: 10 }}>MÓD · {m.n}</span>
              <span style={{ fontSize: 22, color: 'var(--dourado)' }}>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3 credibility numbers */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        marginTop: 64,
      }}>
        {[
          { n: '9', t: 'módulos completos' },
          { n: '6', t: 'perfis de leitor' },
          { n: '15—30', t: 'dias até abrir' },
        ].map((s, i) => (
          <div key={i} style={{
            border: '1px solid var(--creme-esc)', borderTop: '3px solid var(--dourado)',
            padding: '32px 28px', background: 'var(--creme)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: 'var(--f-display)', fontSize: 'clamp(48px, 5vw, 72px)', fontStyle: 'italic',
              fontWeight: 900, color: 'var(--dourado-esc)', lineHeight: .9,
              letterSpacing: '-.02em',
            }}>{s.n}</div>
            <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 14, fontWeight: 600, color: 'var(--carvao)', marginTop: 14, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              {s.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BENEFITS = [
  { ic: '✕', neg: 'Vasculhar vídeo, artigo e grupo de WhatsApp', pos: 'Tudo organizado, na ordem em que você precisa.' },
  { ic: '✕', neg: 'Chutar quanto investir', pos: 'Investimento real por faixa de orçamento, com precificação e reserva.' },
  { ic: '✕', neg: 'Abrir na ilegalidade sem perceber', pos: 'Legislação, CNPJ, alvará e vigilância — em linguagem direta.' },
  { ic: '✕', neg: 'Decidir no escuro', pos: 'Critério claro em cada etapa, do ponto ao primeiro atendimento.' },
  { ic: '✕', neg: 'Conteúdo genérico', pos: 'Orientações específicas para o seu perfil e orçamento.' },
  { ic: '✕', neg: 'Demorar meses para abrir', pos: 'Roteiro de execução para ir da decisão à inauguração em 15 a 30 dias.' },
];

const BenefitsSection = () => (
  <section style={{ background: 'var(--creme-esc)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
        <Eyebrow>A TRANSFORMAÇÃO</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', margin: '16px 0 0' }}>
          O que <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>muda</span>?
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 1, background: 'var(--cinza-medio)', border: '1px solid var(--cinza-medio)' }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--cinza-medio)', gap: 1,
          }}>
            <div style={{ background: 'var(--branco)', padding: '24px 22px' }}>
              <div className="eyebrow" style={{ color: 'var(--cinza-medio)', fontSize: 9, marginBottom: 10 }}>ANTES</div>
              <div style={{
                fontFamily: 'var(--f-corpo)', fontSize: 16, color: 'var(--cinza-esc)',
                textDecoration: 'line-through', textDecorationColor: 'var(--cinza-medio)',
              }}>{b.neg}</div>
            </div>
            <div style={{ background: 'var(--carvao)', color: 'var(--branco)', padding: '24px 22px' }}>
              <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 9, marginBottom: 10 }}>DEPOIS</div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, color: 'var(--branco)' }}>
                {b.pos}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TESTIMONIALS = [
  { name: 'Lucas M.', meta: '27 anos · São Paulo', collaborator: true, photo: 'lucas', img: 'assets/Gemini_Generated_Image_5ypvh65ypvh65ypv(1).png', quote: 'Em 24 dias abri. O módulo financeiro junto com a planilha me salvaram... eu ia gastar errado na reforma antes de ter caixa de reserva.' },
  { name: 'Rodrigo T.', meta: 'barbeiro há 4 anos · interior do RJ', collaborator: true, photo: 'rodrigo', img: 'assets/Gemini_Generated_Image_kocm38kocm38kocm(1).png', tall: true, quote: 'O que me pegou foi a parte de legislação. Eu ia abrir sem alvará sanitário sem saber. Ia levar multa na primeira semana. O guia me mostrou o que fazer antes de assinar o contrato do ponto.' },
  { name: 'Felipe R.', meta: 'sem experiência prévia · Curitiba', photo: 'felipe', quote: 'Tentei montar tudo com conteúdo do YouTube. Eram 15 vídeos, cada um falando uma coisa. O guia é tudo no mesmo lugar, na ordem certa. Em 12 dias já tinha data de abertura marcada.' },
];

const SocialProofSection = () => (
  <section style={{ background: 'var(--branco)', paddingBottom: 120 }}>
    {/* Stats: full-bleed, encostado direto na seção anterior (sem padding-top, sem container) */}
    <div className="stats-bar stats-fullbleed" style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      padding: '44px 48px', background: 'var(--carvao)', color: 'var(--branco)',
      marginBottom: 80, position: 'relative',
    }}>
      <div className="barber-pole" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4 }} />
      <div>
        <div className="display stat-num" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', color: 'var(--dourado)', fontStyle: 'italic', lineHeight: 1 }}>1000+</div>
        <div className="eyebrow stat-label" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 10 }}>GUIAS ENTREGUES</div>
      </div>
      <div>
        <div className="display stat-num" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', color: 'var(--dourado)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1, flexWrap: 'wrap' }}>
          4.8 <span style={{ display: 'flex', gap: 3 }}>{[1,2,3,4,5].map(i => <StarIcon key={i} size={16} color="var(--dourado)" />)}</span>
        </div>
        <div className="eyebrow stat-label" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 10 }}>AVALIAÇÃO MÉDIA</div>
      </div>
      <div>
        <div className="display stat-num" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', color: 'var(--dourado)', fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em' }}>18 dias</div>
        <div className="eyebrow stat-label" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 10 }}>TEMPO MÉDIO ATÉ A ABERTURA</div>
      </div>
    </div>

    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Eyebrow>QUEM JÁ USOU</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 50px)', margin: '12px 0 0' }}>
          O que dizem <span style={{ color: 'var(--dourado-esc)', fontStyle: 'italic' }}>os que já abriram</span>.
        </h2>
      </div>

      <div className=”testimonials-grid” style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'stretch' }}>
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} style={{
            margin: 0, padding: '32px 28px',
            background: 'var(--creme)',
            borderTop: '3px solid var(--dourado)',
            position: 'relative',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              position: 'absolute', top: 12, right: 16,
              fontFamily: 'var(--f-display)', fontSize: 80, fontStyle: 'italic',
              color: 'var(--dourado)', opacity: .25, lineHeight: .8, fontWeight: 900,
            }}>”</div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
              {[1,2,3,4,5].map(s => <StarIcon key={s} size={14} color=”var(--dourado)” />)}
            </div>
            <blockquote style={{
              margin: 0, fontFamily: 'var(--f-corpo)', fontSize: 16, fontStyle: 'italic',
              lineHeight: 1.6, color: 'var(--carvao)',
            }}>
              “{t.quote}”
            </blockquote>

            {t.photo && (
              <div style={{
                marginTop: 20,
                ...(t.tall
                  ? { width: '100%', aspectRatio: '3 / 4' }
                  : { aspectRatio: '4 / 3' }),
                background: t.img
                  ? `url(${t.img}) center/cover no-repeat`
                  : `linear-gradient(135deg, rgba(26,26,26,.85), rgba(26,26,26,.55)),
                     repeating-linear-gradient(45deg, var(--carvao-med) 0 12px, var(--cinza-esc) 12px 24px)`,
                position: 'relative',
                border: '1px solid var(--creme-esc)',
                display: 'grid', placeItems: 'center',
                overflow: 'hidden',
              }}>
                {!t.img && (
                  <>
                    <div style={{
                      position: 'absolute', top: 8, left: 8,
                      fontFamily: 'var(--f-titulo)', fontSize: 9, color: 'var(--dourado)',
                      letterSpacing: '.18em', background: 'rgba(0,0,0,.5)', padding: '3px 8px',
                    }}>FOTO · BARBEARIA</div>
                    <div style={{ textAlign: 'center', color: 'var(--dourado)' }}>
                      <div style={{ display: 'inline-flex', gap: 10, marginBottom: 8 }}>
                        <ScissorsIcon size={28} color=”var(--dourado)” />
                        <RazorIcon size={28} color=”var(--dourado)” />
                      </div>
                      <div style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                        placeholder
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            <figcaption style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--creme-esc)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 14, color: 'var(--carvao)' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 12, color: 'var(--cinza-esc)', marginTop: 2 }}>{t.meta}</div>
                </div>
                {t.collaborator && (
                  <div style={{ position: 'relative' }}
                    onMouseEnter={e => {
                      const tip = e.currentTarget.querySelector('.collab-tip');
                      if (tip) tip.style.opacity = '1';
                    }}
                    onMouseLeave={e => {
                      const tip = e.currentTarget.querySelector('.collab-tip');
                      if (tip) tip.style.opacity = '0';
                    }}
                    onClick={e => {
                      const tip = e.currentTarget.querySelector('.collab-tip');
                      if (tip) tip.style.opacity = tip.style.opacity === '1' ? '0' : '1';
                    }}
                  >
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'var(--carvao)', color: 'var(--dourado)',
                      padding: '4px 10px',
                      fontFamily: 'var(--f-titulo)', fontSize: 9, fontWeight: 700,
                      letterSpacing: '.18em', cursor: 'help', userSelect: 'none',
                    }}>
                      COLABORADOR
                      <span style={{
                        display: 'inline-grid', placeItems: 'center',
                        width: 14, height: 14, borderRadius: '50%',
                        border: '1px solid var(--dourado)', fontSize: 9, lineHeight: 1,
                      }}>?</span>
                    </div>
                    <div className="collab-tip" style={{
                      position: 'absolute', bottom: 'calc(100% + 10px)', right: 0,
                      width: 240, padding: '12px 14px',
                      background: 'var(--carvao)', color: 'var(--branco)',
                      fontFamily: 'var(--f-corpo)', fontSize: 12, lineHeight: 1.5,
                      borderLeft: '3px solid var(--dourado)',
                      boxShadow: '0 12px 30px -12px rgba(0,0,0,.4)',
                      opacity: 0, transition: 'opacity .2s ease',
                      pointerEvents: 'none', zIndex: 5,
                    }}>
                      Cliente que, usando o guia, saiu do campo das ideias <strong style={{ color: 'var(--dourado)' }}>e ainda somou para o desenvolvimento do material</strong>.
                    </div>
                  </div>
                )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { ModulesSection, BenefitsSection, SocialProofSection });
