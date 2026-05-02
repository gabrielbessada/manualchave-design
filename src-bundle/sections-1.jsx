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
        Você já pesquisou. Já assistiu vídeo. Já leu artigo. E no final do dia ainda fica com a sensação de que está faltando alguma coisa — ou pior, com mais dúvidas do que antes.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 32 }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)' }}>
          Não é falta de informação. É <strong style={{ color: 'var(--carvao)' }}>excesso de informação sem ordem</strong>, sem contexto e sem considerar a sua situação específica.
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
  { num: '01', t: 'MEI ou outro CNPJ?', d: 'Você não sabe o que muda em cada decisão.' },
  { num: '02', t: 'Esse ponto é bom?', d: 'Bom, ruim ou apenas aceitável — você não tem critério.' },
  { num: '03', t: 'Quanto custa?', d: 'Cada resposta na internet é diferente da anterior.' },
  { num: '04', t: 'Como precificar?', d: 'Sem saber o custo, qualquer valor é chute.' },
  { num: '05', t: 'Identidade agora ou depois?', d: 'Quer fazer bonito sem queimar caixa no momento errado.' },
  { num: '06', t: 'Você anda em círculos.', d: 'Lendo, assistindo, pesquisando — sem avançar de verdade.' },
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
                <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, color: 'var(--cinza-esc)', marginTop: 6 }}>
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

const SolutionSection = () => (
  <section style={{
    background: 'var(--carvao-deep)', color: 'var(--branco)',
    padding: '140px 0', position: 'relative', overflow: 'hidden',
  }} className="grain">
    {/* Big watermark number */}
    <div style={{
      position: 'absolute', right: -40, top: 40,
      fontFamily: 'var(--f-display)', fontWeight: 900, fontStyle: 'italic',
      fontSize: 'clamp(180px, 26vw, 360px)',
      color: 'rgba(201,168,76,.06)',
      lineHeight: .8, pointerEvents: 'none', userSelect: 'none',
    }}>9</div>

    <div className="container" style={{ position: 'relative' }}>
      <div style={{ maxWidth: 760 }}>
        <Eyebrow>A SOLUÇÃO</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 68px)', margin: '20px 0 28px', color: 'var(--branco)' }}>
          O <span style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>Guia do Barbeiro</span> resolve exatamente esse problema.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,.8)', maxWidth: 640 }}>
          Não é uma coletânea de dicas soltas. É um material com lógica: você segue a ordem, toma as decisões certas no momento certo e chega na abertura sem ter desperdiçado dinheiro nem energia com o que não importava.
        </p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        marginTop: 64,
      }}>
        {[
          { n: '9', t: 'módulos completos', d: 'Do planejamento ao primeiro cliente.' },
          { n: '6', t: 'perfis de leitor', d: 'Conteúdo adaptado para sua situação.' },
          { n: '15—30', t: 'dias até abrir', d: 'Roteiro passo-a-passo de execução.' },
        ].map((s, i) => (
          <div key={i} style={{
            border: '1px solid #2a2a2a', borderTop: '3px solid var(--dourado)',
            padding: '32px 28px', background: 'rgba(255,255,255,.02)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: 'var(--f-display)', fontSize: 'clamp(48px, 5vw, 72px)', fontStyle: 'italic',
              fontWeight: 900, color: 'var(--dourado)', lineHeight: .9,
              letterSpacing: '-.02em',
            }}>{s.n}</div>
            <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 16, fontWeight: 600, color: 'var(--branco)', marginTop: 14 }}>
              {s.t}
            </div>
            <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 14, color: 'var(--cinza-medio)', marginTop: 6, lineHeight: 1.5 }}>
              {s.d}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Profile classes badges
const PROFILES = [
  { code: 'AG', name: 'Aspirante Guerreiro', tag: 'Sem capital · entrando agora' },
  { code: 'AE', name: 'Aspirante Estrategista', tag: 'Estreante · capital moderado' },
  { code: 'AI', name: 'Aspirante Investidor', tag: 'Estreante · capital adequado' },
  { code: 'VG', name: 'Veterano Guerreiro', tag: 'Experiente · capital limitado' },
  { code: 'VE', name: 'Veterano Estrategista', tag: 'Experiente · capital moderado' },
  { code: 'VF', name: 'Veterano Fundador', tag: 'Experiente · capital adequado' },
];

const ProfilesSection = () => (
  <section style={{ background: 'var(--creme)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 60px' }}>
        <Eyebrow>PARA O SEU PERFIL</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', margin: '16px 0 20px' }}>
          Cada módulo tem uma seção <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>específica</span> para você.
        </h2>
        <p className="lede" style={{ color: 'var(--cinza-esc)' }}>
          O guia foi construído com 6 perfis. Você não lê o que não se aplica a você. Lê o que é seu.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {PROFILES.map(p => (
          <div key={p.code} style={{
            background: 'var(--branco)',
            borderLeft: '3px solid var(--dourado)',
            padding: '20px 22px',
            display: 'flex', gap: 16, alignItems: 'center',
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
              <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 11, color: 'var(--cinza-esc)', marginTop: 4, letterSpacing: '.04em' }}>{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { OpeningBlock, PainSection, SolutionSection, ProfilesSection });
