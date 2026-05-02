// SECTIONS PART 3 — Offer, Objections, Bonus, Guarantee, FAQ, Final CTA, Footer

const OFFER_ITEMS = [
  '9 módulos completos — do Norte Inicial à Receita Extra',
  'Módulo de Identidade Visual e Marca — INPI, logo, IA e estética do espaço',
  'Módulo de Legislação — contador, MEI, alvará e vigilância sanitária',
  'Módulo de Ponto Comercial — como avaliar e negociar antes de assinar',
  'Módulo Financeiro — investimento por orçamento, cadeiras, equipamentos e produtos',
  'Módulo de Atendimento — leitura do cliente, fluxo de cadeira e fidelização',
  'Módulo de Marketing Digital — Google, Instagram e os primeiros clientes',
  'Módulo de Gestão Operacional — rotinas, métricas e os primeiros 90 dias',
  'Módulo de Receita Extra — bebidas, produtos e como aumentar o ticket',
  'Seção “Para o seu perfil” em cada módulo — adaptada à sua situação',
  'Referência rápida de ferramentas por categoria',
  'Acesso imediato após o pagamento',
];

const OfferSection = () => (
  <section id="oferta" style={{ background: 'var(--carvao-deep)', color: 'var(--branco)', padding: '140px 0', position: 'relative', overflow: 'hidden' }} className="grain">
    <div className="container-narrow" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>A OFERTA</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.8vw, 60px)', margin: '16px 0 0', color: 'var(--branco)' }}>
          Tudo que está incluso.
        </h2>
      </div>

      <div style={{
        background: 'var(--carvao)',
        border: '1px solid #2c2c2c',
        position: 'relative',
        padding: '48px 48px 40px',
      }}>
        {/* Corner decorations */}
        <div style={{ position: 'absolute', top: 14, left: 14, color: 'var(--dourado)' }}><DecoCorner size={42} /></div>
        <div style={{ position: 'absolute', top: 14, right: 14, color: 'var(--dourado)' }}><DecoCorner size={42} flip /></div>
        <div style={{ position: 'absolute', bottom: 14, left: 14, color: 'var(--dourado)', transform: 'scaleY(-1)' }}><DecoCorner size={42} /></div>
        <div style={{ position: 'absolute', bottom: 14, right: 14, color: 'var(--dourado)', transform: 'scaleY(-1) scaleX(-1)' }}><DecoCorner size={42} /></div>

        <div style={{ textAlign: 'center', paddingTop: 16 }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 10, letterSpacing: '.4em' }}>MANUALCHAVE · MANUAL Nº 01</div>
          <h3 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 56px)', color: 'var(--branco)', margin: '12px 0 0' }}>
            Guia <span style={{ fontStyle: 'italic', color: 'var(--dourado)' }}>do</span> Barbeiro
          </h3>
          <DecoRule glyph="◆ ◆ ◆" style={{ marginTop: 20, opacity: .9 }} />
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0 0' }}>
          {OFFER_ITEMS.map((it, i) => (
            <li key={i} style={{
              display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14,
              padding: '14px 0', borderBottom: i === OFFER_ITEMS.length - 1 ? 'none' : '1px solid #2a2a2a',
              alignItems: 'flex-start',
            }}>
              <div style={{ color: 'var(--dourado)', fontFamily: 'var(--f-titulo)', fontWeight: 700, fontSize: 16 }}>✓</div>
              <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.92)' }}>{it}</div>
            </li>
          ))}
        </ul>

        <div style={{ borderTop: '1.5px solid var(--dourado)', marginTop: 36, paddingTop: 32, textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--cinza-medio)', fontSize: 10 }}>DE</div>
          <div style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 32, color: 'var(--cinza-medio)', marginTop: 6, textDecoration: 'line-through', textDecorationColor: 'var(--dourado-esc)' }}>
            R$ 49,90
          </div>
          <div style={{ marginTop: 18 }}>
            <div className="eyebrow" style={{ color: 'var(--dourado-clr)', fontSize: 10 }}>POR APENAS</div>
            <div className="display" style={{ fontSize: 'clamp(70px, 9vw, 120px)', color: 'var(--dourado)', fontStyle: 'italic', lineHeight: 1, marginTop: 6 }}>
              R$ 24,<span style={{ fontSize: '0.55em' }}>90</span>
            </div>
            <div style={{ fontFamily: 'var(--f-titulo)', color: 'var(--cinza-medio)', fontSize: 12, marginTop: 6 }}>
              à vista · ou parcelado no cartão
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <a href="#cta-final" className="btn-primary" style={{ fontSize: 16, padding: '20px 36px' }}>
              QUERO O GUIA DO BARBEIRO <span className="arrow">→</span>
            </a>
          </div>
          <div style={{ fontFamily: 'var(--f-titulo)', color: 'var(--cinza-medio)', fontSize: 12, marginTop: 18, letterSpacing: '.08em' }}>
            ACESSO IMEDIATO · GARANTIA DE 7 DIAS · PIX · CARTÃO
          </div>
        </div>

        {/* Locked-in future bonuses — same flow as offer */}
        <div style={{
          marginTop: 28,
          padding: '28px 32px',
          background: 'linear-gradient(180deg, rgba(201,168,76,.10) 0%, rgba(201,168,76,.04) 100%)',
          border: '1px solid var(--dourado-esc)',
          borderLeft: '3px solid var(--dourado)',
        }}>
          <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 10 }}>
            ◆ EXCLUSIVO DESTA PROMOÇÃO
          </div>
          <div style={{ fontFamily: 'var(--f-titulo)', fontWeight: 600, fontSize: 16, color: 'var(--branco)', marginTop: 10, lineHeight: 1.55 }}>
            Quem comprar agora <span style={{ color: 'var(--dourado)' }}>garante acesso gratuito</span>, quando lançados, a:
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0' }}>
            <li style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, padding: '10px 0', fontFamily: 'var(--f-corpo)', fontSize: 14, color: 'rgba(255,255,255,.85)', lineHeight: 1.55 }}>
              <span style={{ color: 'var(--dourado)' }}>◆</span>
              <span><strong style={{ color: 'var(--branco)' }}>Agente Consultor Personalizável</strong> — uma IA treinada para entender seu negócio e evoluir junto com você. Um companheiro pro desafio.</span>
            </li>
            <li style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, padding: '10px 0', fontFamily: 'var(--f-corpo)', fontSize: 14, color: 'rgba(255,255,255,.85)', lineHeight: 1.55 }}>
              <span style={{ color: 'var(--dourado)' }}>◆</span>
              <span><strong style={{ color: 'var(--branco)' }}>Gerenciador de Barbearia</strong> — simples, confiável e intuitivo, pra te colocar um passo à frente desde o primeiro dia.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const OBJECTIONS = [
  {
    q: '“Mas eu já vi conteúdo gratuito sobre isso no YouTube.”',
    a: 'Você viu. E provavelmente ainda está no mesmo ponto. O problema do conteúdo gratuito não é a qualidade — é a falta de ordem e coesão. Cada vídeo no seu contexto, sem conversa entre si, e nenhum considerando o seu orçamento. O guia foi construído para funcionar como um todo. Cada módulo considera o anterior. Isso muda tudo.',
  },
  {
    q: '“R$ 24,90 ainda é dinheiro para mim agora.”',
    a: 'É justo avaliar. Mas pensa o outro lado: quantas horas você já gastou pesquisando sem sair do lugar? Esse tempo tem valor. E um erro em contrato, CNPJ ou precificação custa muito mais do que R$ 24,90 para corrigir. O guia existe para você gastar certo desde o início.',
  },
  {
    q: '“Minha situação é diferente — não sei se funciona para mim.”',
    a: 'Foi exatamente por isso que o guia foi construído com 6 perfis diferentes. Sem verba até com capital disponível. Sem experiência até barbeiro veterano. Cada módulo tem uma seção específica para o seu perfil. Você não vai ler conteúdo que não se aplica a você.',
  },
];

const ObjectionsSection = () => (
  <section style={{ background: 'var(--creme)', padding: '120px 0' }}>
    <div className="container-narrow">
      <div style={{ marginBottom: 48 }}>
        <Eyebrow>RESPOSTAS DIRETAS</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', margin: '12px 0 0' }}>
          Você está pensando isso. <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>Faz sentido.</span>
        </h2>
      </div>

      {OBJECTIONS.map((o, i) => (
        <div key={i} style={{ padding: '32px 0', borderTop: '1px solid var(--creme-esc)', borderBottom: i === OBJECTIONS.length - 1 ? '1px solid var(--creme-esc)' : 'none' }}>
          <div style={{
            fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 'clamp(22px, 2.6vw, 30px)',
            fontWeight: 700, color: 'var(--carvao)', marginBottom: 14, lineHeight: 1.3,
          }}>{o.q}</div>
          <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 17, lineHeight: 1.7, color: 'var(--cinza-esc)' }}>
            {o.a}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const BonusSection = () => (
  <section style={{ background: 'var(--carvao)', color: 'var(--branco)', padding: '60px 0 100px', position: 'relative' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 12px', border: '1px solid var(--dourado)', color: 'var(--dourado)', marginBottom: 20 }}>
            <span style={{ fontSize: 14 }}>⏳</span>
            <span className="eyebrow" style={{ fontSize: 10, color: 'var(--dourado)' }}>OFERTA DE LANÇAMENTO</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 52px)', color: 'var(--branco)' }}>
            <span style={{ fontStyle: 'italic', color: 'var(--dourado)' }}>Um bônus</span> de persistência.
          </h2>
          <p className="lede" style={{ color: 'rgba(255,255,255,.78)', marginTop: 18 }}>
            Quando o período de lançamento encerrar, esses materiais saem da oferta principal.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {[
            { tag: 'BÔNUS', t: 'Brinde de Persistência · 7 dias depois', d: 'Sete dias depois da sua compra, um material extra cai no seu e-mail — feito pra te empurrar quando o cansaço bater e o sonho parecer longe. Porque abrir uma barbearia não é sobre o primeiro dia. É sobre não desistir até a porta abrir.' },
          ].map((b, i) => (
            <div key={i} style={{
              background: 'var(--carvao-med)', padding: '24px 24px 24px 28px',
              borderLeft: '4px solid var(--dourado)',
              display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
            }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--dourado)', fontSize: 10 }}>{b.tag}</div>
                <div style={{ fontFamily: 'var(--f-titulo)', fontSize: 20, fontWeight: 700, color: 'var(--branco)', marginTop: 4 }}>{b.t}</div>
                <div style={{ fontFamily: 'var(--f-corpo)', fontSize: 15, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>{b.d}</div>
              </div>
              <div style={{
                fontFamily: 'var(--f-display)', fontStyle: 'italic', fontWeight: 900,
                fontSize: 14, color: 'var(--carvao)',
                background: 'var(--dourado)', padding: '6px 12px',
                whiteSpace: 'nowrap',
              }}>GRÁTIS</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section style={{ background: 'var(--creme-esc)', padding: '100px 0' }}>
    <div className="container-narrow" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 48, alignItems: 'center' }}>
      <div style={{
        width: 180, height: 180, borderRadius: '50%',
        background: 'var(--carvao)', color: 'var(--dourado)',
        display: 'grid', placeItems: 'center', position: 'relative',
        border: '3px solid var(--dourado)',
      }}>
        <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: 'absolute', inset: 0, animation: 'spin 30s linear infinite' }}>
          <defs>
            <path id="circ" d="M 90,90 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
          </defs>
          <text fill="var(--dourado)" fontFamily="var(--f-titulo)" fontSize="11" letterSpacing="3">
            <textPath xlinkHref="#circ">GARANTIA · 7 DIAS · INCONDICIONAL · MANUALCHAVE · </textPath>
          </text>
        </svg>
        <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
        <div style={{ textAlign: 'center' }}>
          <div className="display" style={{ fontStyle: 'italic', fontSize: 56, color: 'var(--dourado)', lineHeight: 1 }}>7</div>
          <div className="eyebrow" style={{ fontSize: 9, color: 'var(--dourado-clr)', marginTop: 4 }}>DIAS</div>
        </div>
      </div>
      <div>
        <Eyebrow>GARANTIA</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', margin: '12px 0 18px' }}>
          O risco é zero. <span style={{ fontStyle: 'italic', color: 'var(--dourado-esc)' }}>A decisão é sua.</span>
        </h2>
        <p style={{ fontFamily: 'var(--f-corpo)', fontSize: 17, lineHeight: 1.65, color: 'var(--cinza-esc)' }}>
          Compre, acesse, leia. Se por qualquer motivo o Guia do Barbeiro não for o que você esperava, basta pedir o reembolso em até 7 dias após a compra — e você recebe <strong style={{ color: 'var(--carvao)' }}>100% do valor de volta</strong>, sem precisar explicar nada.
        </p>
      </div>
    </div>
  </section>
);

const FAQS = [
  { q: 'Preciso ter experiência como barbeiro para aproveitar o guia?', a: 'Não. O guia tem uma seção em cada módulo para quem nunca trabalhou em barbearia. Quem já tem experiência também tem sua seção própria.' },
  { q: 'Funciona para quem tem pouco dinheiro para investir?', a: 'Sim. O módulo financeiro apresenta o investimento real por três faixas: sem verba, pouca verba e verba ideal. Você vai ver o que é possível dentro do que tem — e a ordem certa de gastar.' },
  { q: 'Como funciona o acesso após a compra?', a: 'Imediato. Assim que o pagamento for confirmado, você recebe o acesso ao material. Sem espera.' },
  { q: 'Posso pagar no Pix ou cartão?', a: 'Sim. Pix, cartão de crédito ou débito. O parcelamento segue as condições da plataforma de pagamento.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Acesse, leia, e se não for o que esperava, peça o reembolso. 100% do valor devolvido, sem burocracia.' },
  { q: 'Já vi muito conteúdo gratuito. O que esse guia tem de diferente?', a: 'Ordem, coesão e personalização. Cada módulo se conecta ao anterior, e cada um tem orientações específicas para o seu perfil. É a diferença entre ter as peças e ter o quebra-cabeça montado.' },
  { q: 'Quanto tempo leva para consumir o guia?', a: 'Você consegue ler o guia completo em uma tarde. Material denso e direto, sem enrolação. Depois da primeira leitura, volta módulo por módulo para executar.' },
  { q: 'Serve para abrir salão de beleza ou outro negócio?', a: 'Não. O Guia do Barbeiro foi desenvolvido especificamente para barbearia. Versões para outros segmentos estão em desenvolvimento pela ManualChave.' },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: '1px solid var(--creme-esc)' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24,
        padding: '24px 0', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--f-titulo)', fontSize: 18, fontWeight: 600, color: 'var(--carvao)' }}>{q}</span>
        <span style={{
          fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1,
          color: 'var(--dourado)', transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s',
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: 'hidden',
        transition: 'max-height .35s ease, padding .35s ease',
        paddingBottom: open ? 24 : 0,
      }}>
        <p style={{ margin: 0, fontFamily: 'var(--f-corpo)', fontSize: 16, lineHeight: 1.65, color: 'var(--cinza-esc)', maxWidth: 720 }}>
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section style={{ background: 'var(--branco)', padding: '120px 0' }}>
    <div className="container-narrow">
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
        <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 50px)', margin: '12px 0 0' }}>
          Tirando do caminho.
        </h2>
      </div>
      <div style={{ borderBottom: '1px solid var(--creme-esc)' }}>
        {FAQS.map((f, i) => <FAQItem key={i} {...f} />)}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section id="cta-final" style={{
    background: 'var(--carvao-deep)', color: 'var(--branco)',
    padding: '140px 0', position: 'relative', overflow: 'hidden',
  }} className="grain">
    <div style={{ position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)', color: 'var(--dourado)', opacity: .3 }}>
      <ScissorsIcon size={48} color="var(--dourado)" />
    </div>
    <div className="container-narrow" style={{ textAlign: 'center', position: 'relative' }}>
      <DecoRule glyph="◆ ◆ ◆" style={{ marginBottom: 28 }} />
      <Eyebrow color="var(--dourado-clr)">A DECISÃO</Eyebrow>
      <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', margin: '20px 0 0', color: 'var(--branco)' }}>
        Você chegou até aqui porque a barbearia <span style={{ fontStyle: 'italic', color: 'var(--dourado)' }}>ainda não saiu do papel</span>.
      </h2>
      <p className="lede" style={{ color: 'rgba(255,255,255,.78)', maxWidth: 640, margin: '32px auto 0' }}>
        Talvez falte clareza. Talvez falte coragem. Mas muito provavelmente falta um <strong style={{ color: 'var(--branco)' }}>roteiro</strong> — algo que te diga o que fazer agora, o que fazer depois, e o que considerar no caminho.
      </p>
      <p style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 'clamp(22px, 2.6vw, 32px)', color: 'var(--dourado-clr)', marginTop: 32, fontWeight: 700 }}>
        Esse material existe. Custa R$ 24,90.
      </p>

      <div style={{ marginTop: 40 }}>
        <a href="#oferta" className="btn-primary" style={{ fontSize: 17, padding: '22px 40px' }}>
          QUERO O GUIA DO BARBEIRO — R$ 24,90 <span className="arrow">→</span>
        </a>
        <div style={{ fontFamily: 'var(--f-titulo)', color: 'var(--cinza-medio)', fontSize: 12, marginTop: 18, letterSpacing: '.08em' }}>
          ACESSO IMEDIATO · GARANTIA DE 7 DIAS · SEM RISCO
        </div>
      </div>

      <DecoRule glyph="◆" style={{ margin: '80px 0 32px' }} />

      <div style={{
        textAlign: 'left', maxWidth: 640, margin: '0 auto',
        padding: '32px 36px', borderLeft: '3px solid var(--dourado)',
        background: 'rgba(255,255,255,.03)',
      }}>
        <div className="eyebrow" style={{ color: 'var(--dourado)' }}>P.S.</div>
        <p style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.85)', marginTop: 12 }}>
          Todo mundo que hoje tem uma barbearia aberta passou pelo mesmo momento que você está agora — com dúvida, com medo, sem saber por onde começar. A diferença entre quem abriu e quem ficou na intenção não foi talento nem dinheiro. <strong style={{ color: 'var(--dourado)' }}>Foi ter um caminho claro.</strong>
        </p>
        <p style={{ fontFamily: 'var(--f-corpo)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.85)', marginTop: 14 }}>
          Se servir — e vai servir — você vai olhar para trás e lembrar que tudo começou com uma decisão de R$ 24,90.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: 'var(--carvao)', color: 'var(--cinza-medio)', padding: '40px 0 24px', borderTop: '1px solid #2a2a2a' }}>
    <BarberStripe height={3} />
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 28, height: 28, border: '1.5px solid var(--dourado)', display: 'grid', placeItems: 'center' }}>
          <span style={{ fontFamily: 'var(--f-display)', fontWeight: 900, color: 'var(--dourado)', fontSize: 14 }}>M</span>
        </div>
        <div className="eyebrow" style={{ color: 'var(--cinza-medio)', fontSize: 10 }}>MANUALCHAVE · MANUAL Nº 01</div>
      </div>
      <div style={{ fontFamily: 'var(--f-corpo)', fontStyle: 'italic', fontSize: 13 }}>
        © 2026 ManualChave · manualchave.com.br
      </div>
      <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--f-titulo)', fontSize: 12, letterSpacing: '.05em' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--cinza-medio)' }}>TERMOS</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--cinza-medio)' }}>PRIVACIDADE</a>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--cinza-medio)' }}>SUPORTE</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { OfferSection, ObjectionsSection, BonusSection, GuaranteeSection, FAQSection, FinalCTASection, Footer });
