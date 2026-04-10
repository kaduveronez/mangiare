import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function ContatoRapido() {
  const ref = useFadeInUp<HTMLDivElement>();
  const canais = [
    { icon: 'fa-brands fa-whatsapp', titulo: 'WhatsApp', detalhe: '(47) 99626-6842', descricao: 'Resposta rápida em horário comercial', href: WHATSAPP_URL, target: '_blank', cor: '#25D366' },
    { icon: 'fa-solid fa-phone', titulo: 'Telefone', detalhe: '(47) 99626-6842', descricao: 'Seg a Sex, 7h às 17h', href: 'tel:+5547996266842', target: '_self', cor: 'var(--color-bordo)' },
    { icon: 'fa-solid fa-envelope', titulo: 'E-mail', detalhe: 'mangiaree.refeicoes@gmail.com', descricao: 'Resposta em até 24 horas', href: 'mailto:mangiaree.refeicoes@gmail.com', target: '_self', cor: 'var(--color-verde)' },
    { icon: 'fa-brands fa-instagram', titulo: 'Instagram', detalhe: '@mangiare.refeicoes', descricao: 'Acompanhe nossos conteúdos', href: 'https://instagram.com/mangiare.refeicoes', target: '_blank', cor: '#E1306C' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>FALE CONOSCO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Resposta rápida, sem enrolação</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {canais.map((c, i) => (
            <a key={i} href={c.href} target={c.target} rel={c.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="fade-in-up"
              style={{ transitionDelay: `${i * 80}ms`, display: 'block', background: 'rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center', textDecoration: 'none', transition: 'background 200ms', borderBottom: `3px solid ${c.cor}` }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              <i className={c.icon} style={{ fontSize: 36, color: c.cor, display: 'block', marginBottom: 16 }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 8 }}>{c.titulo}</h3>
              <p style={{ color: 'var(--color-dourado)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{c.detalhe}</p>
              <p style={{ color: '#a0b8b0', fontSize: 13 }}>{c.descricao}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContatoForm() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setForm({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <section style={{ background: '#f5f0ea', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="contato-page__grid">

          {/* Coluna esquerda — formulário */}
          <div className="fade-in-up" style={{ background: '#fff', padding: '48px 40px', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'var(--color-bordo)', marginBottom: 12 }}>FALE CONOSCO</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-verde)', fontSize: 28, marginBottom: 8 }}>Envie sua mensagem</h2>
            <p style={{ color: '#888', fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>Preencha o formulário e nossa equipe retorna em até 24 horas com uma resposta ou proposta.</p>
            <form className="contato-page__form" onSubmit={handleSubmit}>
              <FormField label="Nome" name="nome" required value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
              <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} placeholder="seu@email.com" />
              <FormField label="Assunto" name="assunto" type="select" value={form.assunto} onChange={set('assunto')} options={['Cotação', 'Dúvida', 'Outro']} />
              <FormField label="Mensagem" name="mensagem" type="textarea" required value={form.mensagem} onChange={set('mensagem')} placeholder="Como podemos ajudar?" />
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                <i className="fa-solid fa-paper-plane" style={{ marginRight: 10 }} />Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Coluna direita — painel escuro com canais */}
          <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(145deg, #2a0610 0%, #4a1020 50%, #0a0a0a 100%)', padding: '48px 40px', display: 'flex', flexDirection: 'column', transitionDelay: '100ms' }}>
            <i className="fa-solid fa-comments" style={{ position: 'absolute', bottom: -24, right: -16, fontSize: 220, color: '#fff', opacity: 0.03, pointerEvents: 'none', lineHeight: 1 }} />

            <div style={{ position: 'relative' }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.8)', marginBottom: 12 }}>CANAIS DE ATENDIMENTO</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 26, marginBottom: 8, lineHeight: 1.3 }}>Prefere falar direto?</h3>
              <p style={{ color: 'rgba(245,235,220,0.5)', fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>Respondemos em até 2 horas em dias úteis. Para urgências, o WhatsApp é o caminho mais rápido.</p>

              {/* WhatsApp CTA */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#25D366', padding: '14px 20px', marginBottom: 32, textDecoration: 'none', transition: 'opacity 200ms' }}
                onMouseOver={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseOut={e => (e.currentTarget.style.opacity = '1')}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: 24, color: '#fff' }} />
                <div>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1 }}>Falar pelo WhatsApp</p>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, marginTop: 3 }}>(47) 99626-6842</p>
                </div>
                <i className="fa-solid fa-arrow-right" style={{ color: '#fff', marginLeft: 'auto', fontSize: 14 }} />
              </a>

              {/* Demais canais */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: 'fa-solid fa-phone', label: 'Telefone', value: '(47) 99626-6842', href: 'tel:+5547996266842' },
                  { icon: 'fa-solid fa-envelope', label: 'E-mail', value: 'mangiaree.refeicoes@gmail.com', href: 'mailto:mangiaree.refeicoes@gmail.com' },
                  { icon: 'fa-brands fa-instagram', label: 'Instagram', value: '@mangiare.refeicoes', href: 'https://instagram.com/mangiare.refeicoes' },
                ].map((c, i) => (
                  <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', transition: 'opacity 200ms' }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <span style={{ width: 36, height: 36, background: 'rgba(245,185,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={c.icon} style={{ fontSize: 16, color: 'var(--color-dourado)' }} />
                    </span>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: 'rgba(245,185,53,0.6)', marginBottom: 2 }}>{c.label.toUpperCase()}</p>
                      <p style={{ color: 'var(--color-creme)', fontSize: 14 }}>{c.value}</p>
                    </div>
                  </a>
                ))}

                {/* Endereço */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, paddingTop: 12 }}>
                  <span style={{ width: 36, height: 36, background: 'rgba(245,185,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: 16, color: 'var(--color-dourado)' }} />
                  </span>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: 'rgba(245,185,53,0.6)', marginBottom: 2 }}>ENDEREÇO</p>
                    <p style={{ color: 'var(--color-creme)', fontSize: 14, lineHeight: 1.5 }}>R. Minas Gerais, 5300<br />Morro do Meio, Joinville – SC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Horarios() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>HORÁRIOS</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Quando nos encontrar</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48, maxWidth: 900, margin: '48px auto 0' }}>
          <div className="fade-in-up" style={{ background: '#fff', padding: '32px 28px', borderLeft: '4px solid var(--color-bordo)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-bordo)', fontSize: 20, marginBottom: 20 }}>Atendimento comercial</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { dia: 'Segunda a Sexta', horario: '7h às 17h' },
                { dia: 'Sábado', horario: '7h às 12h' },
                { dia: 'Domingo e Feriados', horario: 'Fechado' },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0e8e0' }}>
                  <span style={{ color: '#555', fontSize: 15 }}>{h.dia}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-verde)', fontSize: 15 }}>{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in-up" style={{ background: '#fff', padding: '32px 28px', borderLeft: '4px solid var(--color-verde)', transitionDelay: '100ms' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-verde)', fontSize: 20, marginBottom: 20 }}>Entregas</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { dia: 'Segunda a Sexta', horario: 'Horário combinado' },
                { dia: 'Sábado', horario: 'Horário combinado' },
                { dia: 'Domingo e Feriados', horario: 'Conforme contrato' },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0e8e0' }}>
                  <span style={{ color: '#555', fontSize: 15 }}>{h.dia}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-bordo)', fontSize: 15 }}>{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in-up" style={{ background: 'var(--color-bordo)', padding: '32px 28px', transitionDelay: '200ms' }}>
            <i className="fa-brands fa-whatsapp" style={{ fontSize: 40, color: '#25D366', marginBottom: 16, display: 'block' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 20, marginBottom: 12 }}>WhatsApp disponível</h3>
            <p style={{ color: 'rgba(245,239,200,0.8)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Para urgências, nosso WhatsApp está disponível fora do horário comercial.
              Respondemos assim que possível.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14 }}>
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalizacaoSection() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>LOCALIZAÇÃO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Onde estamos</h2>
        </div>
        <div className="sobre__grid" style={{ marginTop: 48 }}>
          <div className="fade-in-up">
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 22, marginBottom: 20 }}>Cozinha industrial Mangiare</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-dourado)', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--color-creme)', fontWeight: 600, marginBottom: 4 }}>Endereço</p>
                  <p style={{ color: '#999', fontSize: 15, lineHeight: 1.6 }}>R. Minas Gerais, 5300<br />Morro do Meio, Joinville – SC<br />CEP: 89.222-280</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <i className="fa-solid fa-map" style={{ color: 'var(--color-dourado)', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--color-creme)', fontWeight: 600, marginBottom: 4 }}>Área de atendimento</p>
                  <p style={{ color: '#999', fontSize: 15, lineHeight: 1.6 }}>Joinville e municípios da região norte de Santa Catarina. Entre em contato para verificar disponibilidade.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <i className="fa-solid fa-car" style={{ color: 'var(--color-dourado)', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--color-creme)', fontWeight: 600, marginBottom: 4 }}>Como chegar</p>
                  <p style={{ color: '#999', fontSize: 15, lineHeight: 1.6 }}>Estacionamento próprio disponível para visitas. Atendimentos presenciais mediante agendamento.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300, border: '1px solid #333' }}>
            <div style={{ textAlign: 'center', color: '#666' }}>
              <i className="fa-solid fa-map-location-dot" style={{ fontSize: 48, marginBottom: 12, display: 'block', color: 'var(--color-dourado)' }} />
              <p style={{ fontSize: 14 }}>R. Minas Gerais, 5300<br />Morro do Meio — Joinville, SC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [aberto, setAberto] = useState<number | null>(null);
  const perguntas = [
    { q: 'Como posso solicitar uma cotação?', r: 'Você pode solicitar uma cotação pelo WhatsApp (47) 99626-6842, pelo formulário nesta página ou diretamente por e-mail. Nossa equipe retorna em até 24 horas com uma proposta personalizada.' },
    { q: 'Qual o prazo de resposta para solicitações?', r: 'Respondemos todas as mensagens em até 24 horas úteis. Para urgências, recomendamos o contato pelo WhatsApp, onde costumamos responder mais rapidamente.' },
    { q: 'É possível visitar a cozinha da Mangiare?', r: 'Sim! Incentivamos visitas à nossa cozinha industrial mediante agendamento prévio. Transparência faz parte dos nossos valores.' },
    { q: 'Existe contrato de fidelidade?', r: 'Trabalhamos com contratos mensais renováveis. Não há cobrança de multa por rescisão, desde que respeitado o aviso prévio estabelecido em contrato.' },
    { q: 'Vocês emitem nota fiscal?', r: 'Sim! Emitimos nota fiscal para todas as transações comerciais, garantindo total formalidade e transparência na parceria.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>DÚVIDAS</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Perguntas frequentes</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '48px auto 0' }}>
          {perguntas.map((p, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 60}ms`, borderBottom: '1px solid #ddd' }}>
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                aria-expanded={aberto === i}
              >
                <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--color-verde)', lineHeight: 1.4 }}>{p.q}</span>
                <i className={`fa-solid fa-chevron-${aberto === i ? 'up' : 'down'}`} style={{ flexShrink: 0, color: 'var(--color-bordo)' }} />
              </button>
              {aberto === i && (
                <p style={{ padding: '0 0 20px', color: '#555', lineHeight: 1.7, fontSize: 15 }}>{p.r}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contato() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in-up');
    if (prefersReducedMotion) { elements.forEach(el => el.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero title="Fale Conosco" variant="bordo" />
      <ContatoForm />
      <Horarios />
      <LocalizacaoSection />
      <FAQ />
    </>
  );
}
