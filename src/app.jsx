// APP — orchestrates everything

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "C",
  "accentHue": "dourado",
  "density": "comfortable"
}/*EDITMODE-END*/;

function App(){
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent color tweak
  React.useEffect(() => {
    const map = {
      dourado: { d: '#C9A84C', e: '#A07830', l: '#E8C97A' },
      cobre:   { d: '#B86F3C', e: '#8C4A22', l: '#E0A07A' },
      claro:   { d: '#E0C575', e: '#B8985A', l: '#F2DC9C' },
    };
    const c = map[tweaks.accentHue] || map.dourado;
    document.documentElement.style.setProperty('--dourado', c.d);
    document.documentElement.style.setProperty('--dourado-esc', c.e);
    document.documentElement.style.setProperty('--dourado-clr', c.l);
  }, [tweaks.accentHue]);

  return (
    <>
      <Hero tweaks={tweaks} />
      <OpeningBlock />
      <PainSection />
      <SolutionSection />
      <ProfilesSection />
      <ModulesSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <BonusSection />
      <ObjectionsSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <ManualChaveSection />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Headline">
          <TweakRadio
            label="Variação"
            value={tweaks.headline}
            onChange={v => setTweak('headline', v)}
            options={[
              { value: 'A', label: 'Energia' },
              { value: 'B', label: 'Direta' },
              { value: 'C', label: 'Dor + promessa' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Cor de acento">
          <TweakRadio
            label="Tom"
            value={tweaks.accentHue}
            onChange={v => setTweak('accentHue', v)}
            options={[
              { value: 'dourado', label: 'Dourado' },
              { value: 'cobre', label: 'Cobre' },
              { value: 'claro', label: 'Claro' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
