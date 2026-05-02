// SECTIONS PART 1 — Opening, Pain, Solution

const OpeningBlock = () => (
  <section style={{ background: 'var(--branco)', padding: '120px 0', position: 'relative' }}>
    <div className="container-narrow">
      <DecoRule glyph="◆ ◆ ◆" />
      <p style={{
        fontFamily: 'var(--f-display)',
        fontSize: 'clamp(24px, 3vw, 38px)',
        fontStyle: 'italic',
        fontWeight: 700,
        lineHeight: 1.3,
        color: 'var(--carvao)',
        margin: '40px 0 28px',
        textWrap: 'balance',
      }}>
        “Você já pesquisou. Já assistiu vídeo. Já leu artigo. E no final do dia ainda fica com a sensação de que está faltando alguma coisa.”
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 32 }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)' }}>
          Não é falta de vontade. Não é falta de informação. É <strong style={{ color: 'var(--carvao)' }}>excesso de informação sem ordem</strong>, sem contexto, e sem considerar a sua situação específica.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)' }}>
          Quem está abrindo a primeira barbearia não precisa de mais conteúdo. Precisa de um <strong style={{ color: 'var(--carvao)' }}>caminho claro</strong> — o que fazer, em que ordem, e o que considerar dado seu orçamento.
        </p>
      </div>
      <DecoRule glyph="◆" style={{ marginTop: 64 }} />
    </div>
  </section>
);

const PAIN_POINTS = [
  { num: '01', t: 'MEI ou outro CNPJ?', d: 'Cada resposta na internet contradiz a anterior.' },
  { num: '02', t: 'Quanto investir?', d: 'Os números que você acha não consideram a sua faixa.' },
  { num: '03', t: 'Como precificar?', d: 'Sem saber o custo real, qualquer valor é chute.' },
  { num: '04', t: 'Alvará, vigilância, contrato.', d: 'Você sabe que precisa, mas não sabe o que cada um exige. E o que não sabe pode custar R$ 50.000 de multa — ou uma reforma inteira no lixo.' },
];

const PainSection = () => (
  <section style={{ background: 'var(--creme)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 40 }}>
          <Eyebrow>SE VOCÊ ESTÁ AQUI</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', margin: '16px 0 24px' }}>
            Você sabe que <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>quer abrir</span>.
            Mas todo passo abre uma nova dúvida.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)' }}>
            Isso não é falta de vontade.<br/>É falta de um <strong style={{ color: 'var(--carvao)' }}>roteiro</strong>.
          </p>
        </div>

        <div>
          {PAIN_POINTS.map((p, i) => (
            <div key={p.num} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr',
              gap: 24, padding: '28px 0',
              borderTop: '1px solid var(--creme-esc)',
              borderBottom: i === PAIN_POINTS.length - 1 ? '1px solid var(--creme-esc)' : 'none',
              alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--f-display)', fontSize: 32, fontStyle: 'italic',
                color: 'var(--dourado)', fontWeight: 700, lineHeight: 1,
              }}>{p.num}</div>
              <div>
                <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 20, fontWeight: 700, color: 'var(--carvao)' }}>
                  {p.t}
                </div>
                <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, color: 'var(--cinza-esc)', marginTop: 6, lineHeight: 1.6 }}>
                  {p.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Single transition line — replaces the "premissas" block
const TransitionLine = () => (
  <section style={{ background: 'var(--creme)', padding: '40px 0 120px' }}>
    <div className="container-narrow" style={{ textAlign: 'center' }}>
      <DecoRule glyph="◆" style={{ marginBottom: 36 }} />
      <p style={{
        fontFamily: 'var(--f-display)', fontStyle: 'italic', fontWeight: 700,
        fontSize: 'clamp(26px, 3.4vw, 44px)', lineHeight: 1.3,
        color: 'var(--carvao)', margin: 0, textWrap: 'balance',
      }}>
        Mais conteúdo não resolve isso. <span style={{ color: 'var(--dourado-esc)' }}>Um caminho claro, na ordem certa, adaptado à sua realidade</span> — resolve.
      </p>
      <DecoRule glyph="◆" style={{ marginTop: 36 }} />
    </div>
  </section>
);

// SolutionSection — now an Antes/Depois (Without/With the guide) block
const BEFORE_AFTER = [
  {
    b: '15 vídeos no YouTube, cada um falando uma coisa diferente.',
    a: 'Tudo na ordem certa, módulo a módulo, do planejamento à abertura.',
  },
  {
    b: 'Chute no investimento inicial — sem saber o que vem depois.',
    a: 'Investimento real por faixa — a partir de R$ 2.000, com o que cada uma inclui e o que priorizar primeiro.',
  },
  {
    b: 'Assinar o contrato do ponto sem checar a vigilância sanitária antes.',
    a: 'Checklist de legislação antes de assinar qualquer coisa — sem surpresa cara.',
  },
  {
    b: 'Precificar com base no concorrente — sem saber se está lucrando.',
    a: 'Fórmula de precificação passo a passo, adaptada ao seu custo fixo real.',
  },
  {
    b: 'Meses de planejamento. A barbearia continua no papel.',
    a: 'Roteiro de 15 a 30 dias. Data de abertura definida.',
  },
];

const SolutionSection = () => (
  <section style={{
    background: 'var(--carvao-deep)', color: 'var(--branco)',
    padding: '140px 0', position: 'relative', overflow: 'hidden',
  }} className="grain">
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ maxWidth: 760, marginBottom: 64 }}>
        <Eyebrow>A TRANSFORMAÇÃO</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', margin: '20px 0 0', color: 'var(--branco)' }}>
          O que muda quando você tem <span style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>o caminho</span>.
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
        background: '#2a2a2a', border: '1px solid #2a2a2a',
      }}>
        {/* Column headers */}
        <div style={{ background: 'var(--carvao)', padding: '20px 28px' }}>
          <div className="eyebrow" style={{ color: 'var(--cinza-medio)', fontSize: 11, letterSpacing: '.3em' }}>SEM O GUIA</div>
        </div>
        <div style={{ background: 'var(--carvao)', padding: '20px 28px', borderLeft: '2px solid var(--dourado)' }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 11, letterSpacing: '.3em' }}>COM O GUIA</div>
        </div>

        {/* Rows */}
        {BEFORE_AFTER.map((row, i) => (
          <React.Fragment key={i}>
            <div style={{
              background: 'rgba(255,255,255,.02)', padding: '24px 28px',
              display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--f-display)', fontStyle: 'italic', fontWeight: 700,
                fontSize: 22, color: 'var(--cinza-medio)', lineHeight: 1,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontFamily: 'var(--f-corpo)', fontSize: 15.5, lineHeight: 1.6,
                color: 'rgba(255,255,255,.55)',
                textDecoration: 'line-through', textDecorationColor: 'rgba(255,255,255,.25)',
              }}>{row.b}</div>
            </div>
            <div style={{
              background: 'rgba(201,168,76,.04)', padding: '24px 28px',
              borderLeft: '2px solid var(--dourado)',
              display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--f-display)', fontStyle: 'italic', fontWeight: 900,
                fontSize: 22, color: 'var(--dourado)', lineHeight: 1,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{
                fontFamily: 'var(--f-corpo)', fontSize: 16, lineHeight: 1.6,
                color: 'var(--branco)',
              }}>{row.a}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

// Profile classes
const PROFILES = [
  { code: 'AG', name: 'Aspirante Guerreiro', tag: 'Entrando agora, sem capital. O caminho existe — é mais lento, mas existe.' },
  { code: 'AE', name: 'Aspirante Estrategista', tag: 'Estreante com algum capital. Use a margem para eliminar riscos, não para apressar.' },
  { code: 'AI', name: 'Aspirante Investidor', tag: 'Estreante com capital adequado. O desafio é gastar certo — não gastar tudo.' },
  { code: 'VG', name: 'Veterano Guerreiro', tag: 'Sabe fazer o serviço. Agora precisa aprender a gerir o negócio.' },
  { code: 'VE', name: 'Veterano Estrategista', tag: 'Experiente, capital moderado. O próximo passo não precisa ser perfeito — precisa acontecer.' },
  { code: 'VF', name: 'Veterano Fundador', tag: 'Experiência e capital. Seu único inimigo é a arrogância de pular etapas.' },
];

const ProfilesSection = () => (
  <section style={{ background: 'var(--creme)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 60px' }}>
        <Eyebrow>PARA QUEM É</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', margin: '16px 0 20px' }}>
          O guia foi construído com 6 perfis. <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>Você lê o que é seu</span>.
        </h2>
        <p className="lede" style={{ color: 'var(--cinza-esc)' }}>
          Não existe uma resposta certa para quem tem R$ 2.000 e para quem tem R$ 35.000. Não existe o mesmo caminho para quem nunca tocou em uma máquina e para quem barbeia há 8 anos. Cada módulo tem uma seção específica para o seu perfil.
        </p>
      </div>

      <div className="profiles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {PROFILES.map(p => (
          <div key={p.code} style={{
            background: 'var(--branco)',
            borderLeft: '3px solid var(--dourado)',
            padding: '22px 22px',
            display: 'flex', gap: 16, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 72, height: 72, flexShrink: 0,
              display: 'grid', placeItems: 'center',
              position: 'relative',
            }}>
              <img src={window.__resources && window.__resources['profile' + p.code] || `assets/profile-${p.code}.png`} alt={p.name} style={{
                width: 72, height: 72,
                objectFit: 'contain',
                display: 'block',
              }} />
              <div style={{
                position: 'absolute', bottom: -6, right: -4,
                fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 9,
                letterSpacing: '.08em', color: 'var(--carvao)',
                background: 'var(--dourado)',
                padding: '2px 6px',
              }}>{p.code}</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 15, color: 'var(--carvao)' }}>{p.name}</div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 13.5, color: 'var(--cinza-esc)', marginTop: 6, lineHeight: 1.55 }}>{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { OpeningBlock, PainSection, TransitionLine, SolutionSection, ProfilesSection });
