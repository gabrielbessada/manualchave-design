// SECTIONS PART 2 — Modules, Benefits, Social proof

const MODULES = [
  { n: '01', t: 'Norte Inicial', d: 'Por onde começar de verdade — validação, modelo e data de abertura.' },
  { n: '02', t: 'Identidade Visual e Marca', d: 'INPI, logo, IA, paleta e estética do espaço.' },
  { n: '03', t: 'Legislação e Regularização', d: 'Contador, MEI, alvará, vigilância sanitária e licenças.' },
  { n: '04', t: 'Ponto Comercial', d: 'Como avaliar e negociar o ponto antes de assinar.' },
  { n: '05', t: 'Financeiro, Estrutura e Ferramentas', d: 'Investimento, cadeiras, equipamentos e produtos por orçamento.' },
  { n: '06', t: 'Atendimento e Experiência', d: 'Leitura do cliente, fluxo de cadeira e fidelização.' },
  { n: '07', t: 'Marketing Digital', d: 'Google, Instagram e os primeiros clientes na agenda.' },
  { n: '08', t: 'Gestão Operacional', d: 'Rotinas, métricas, liderança e os primeiros 90 dias.' },
  { n: '09', t: 'Receita Extra', d: 'Bebidas, produtos e ambiente — como aumentar o ticket.' },
];

const ModulesSection = () => (
  <section id="modulos" style={{ background: 'var(--branco)', padding: '140px 0' }}>
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
        <div style={{ maxWidth: 620 }}>
          <Eyebrow>O ÍNDICE</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', margin: '16px 0 0' }}>
            9 módulos, <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>na ordem certa</span>.
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', fontSize: 18, color: 'var(--cinza-esc)', maxWidth: 320 }}>
          Cada módulo se conecta ao anterior. Cada um traz uma seção para o seu perfil.
        </div>
      </div>

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
              fontSize: 64,
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
  { name: 'Lucas M.', meta: '27 anos · São Paulo', collaborator: true, photo: true, quote: 'Eu tinha pesquisado tanta coisa que travei. Não sabia por onde começar de verdade. O guia me deu a ordem certa. Em 18 dias abri. O módulo de financeiro me salvou — eu ia gastar errado na reforma antes de ter caixa de reserva.' },
  { name: 'Rodrigo T.', meta: 'barbeiro há 4 anos · interior do RJ', collaborator: true, photo: true, quote: 'O que me pegou foi a parte de legislação. Eu ia abrir sem alvará sanitário sem saber. Ia levar multa na primeira semana. O guia me mostrou o que fazer antes de assinar o contrato do ponto.' },
  { name: 'André S.', meta: '31 anos · Belo Horizonte', quote: 'Já tinha até nome, logo, tudo. Mas travar no financeiro me segurou por meses. O módulo de precificação foi o que me faltava. Fiz a conta, vi que era viável e abri.' },
  { name: 'Felipe R.', meta: 'sem experiência prévia · Curitiba', quote: 'Tentei montar tudo com conteúdo do YouTube. Eram 15 vídeos, cada um falando uma coisa. O guia é tudo no mesmo lugar, na ordem certa. Em 12 dias já tinha data de abertura marcada.' },
];

const SocialProofSection = () => (
  <section style={{ background: 'var(--branco)', padding: '120px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        padding: '40px 32px', background: 'var(--carvao)', color: 'var(--branco)',
        marginBottom: 80, position: 'relative',
      }}>
        <div className="barber-pole" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4 }} />
        <div>
          <div className="display" style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', color: 'var(--dourado)', fontStyle: 'italic', lineHeight: 1 }}>1000+</div>
          <div className="eyebrow" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 8 }}>BARBEIROS USANDO O GUIA</div>
        </div>
        <div>
          <div className="display" style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', color: 'var(--dourado)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 12, lineHeight: 1 }}>
            4.8 <span style={{ display: 'flex', gap: 4 }}>{[1,2,3,4,5].map(i => <StarIcon key={i} size={20} color="var(--dourado)" />)}</span>
          </div>
          <div className="eyebrow" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 8 }}>AVALIAÇÃO MÉDIA</div>
        </div>
        <div>
          <div className="display" style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', color: 'var(--dourado)', fontStyle: 'italic', lineHeight: 1, letterSpacing: '-.02em' }}>15—30</div>
          <div className="eyebrow" style={{ color: 'var(--branco)', fontSize: 11, marginTop: 8 }}>DIAS ATÉ A INAUGURAÇÃO</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Eyebrow>DEPOIMENTOS</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 50px)', margin: '12px 0 0' }}>
          Já ajudamos <span style={{ color: 'var(--dourado-esc)', fontStyle: 'italic' }}>+1000 sonhadores</span> a darem o primeiro passo.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
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
            }}>“</div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
              {[1,2,3,4,5].map(s => <StarIcon key={s} size={14} color="var(--dourado)" />)}
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
                aspectRatio: '16 / 10',
                background: `
                  linear-gradient(135deg, rgba(26,26,26,.85), rgba(26,26,26,.55)),
                  repeating-linear-gradient(45deg, var(--carvao-med) 0 12px, var(--cinza-esc) 12px 24px)
                `,
                position: 'relative',
                border: '1px solid var(--creme-esc)',
                display: 'grid', placeItems: 'center',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  fontFamily: 'var(--f-titulo)', fontSize: 9, color: 'var(--dourado)',
                  letterSpacing: '.18em', background: 'rgba(0,0,0,.5)', padding: '3px 8px',
                }}>FOTO · BARBEARIA</div>
                <div style={{ textAlign: 'center', color: 'var(--dourado)' }}>
                  <div style={{ display: 'inline-flex', gap: 10, marginBottom: 8 }}>
                    <ScissorsIcon size={28} color="var(--dourado)" />
                    <RazorIcon size={28} color="var(--dourado)" />
                  </div>
                  <div style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
                    placeholder
                  </div>
                </div>
              </div>
            )}

            <figcaption style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid var(--creme-esc)' }}>
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
