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
    <section className="como-funciona">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">FALE CONOSCO</p>
          <h2 className="section-title section-title--creme">Resposta rápida, sem enrolação</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {canais.map((c, i) => (
            <a key={i} href={c.href} target={c.target} rel={c.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="canal-card fade-in-up"
              style={{ transitionDelay: `${i * 80}ms`, borderBottom: `3px solid ${c.cor}` }}
            >
              <i className={`${c.icon} canal-card__icon`} style={{ color: c.cor }} />
              <h3 className="canal-card__titulo">{c.titulo}</h3>
              <p className="canal-card__detalhe">{c.detalhe}</p>
              <p className="canal-card__desc">{c.descricao}</p>
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
    <section className="section--offwhite">
      <div className="container" ref={ref}>
        <div className="contato-page__grid">

          {/* Coluna esquerda — formulário */}
          <div className="form-panel fade-in-up">
            <p className="form-panel__label">FALE CONOSCO</p>
            <h2 className="form-panel__title">Envie sua mensagem</h2>
            <p className="form-panel__subtitle">Preencha o formulário e nossa equipe retorna em até 24 horas com uma resposta ou proposta.</p>
            <form className="contato-page__form" onSubmit={handleSubmit}>
              <FormField label="Nome" name="nome" required value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
              <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} placeholder="seu@email.com" />
              <FormField label="Assunto" name="assunto" type="select" value={form.assunto} onChange={set('assunto')} options={['Cotação', 'Dúvida', 'Outro']} />
              <FormField label="Mensagem" name="mensagem" type="textarea" required value={form.mensagem} onChange={set('mensagem')} placeholder="Como podemos ajudar?" />
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
                <i className="fa-solid fa-paper-plane" style={{ marginRight: 10 }} />Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Coluna direita — contatos + mapa */}
          <div className="contato-right-col fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="contato-info-panel">
              <p className="contato-info-panel__label">CONTATO</p>
              {[
                { icon: 'fa-solid fa-phone', label: 'Telefone', value: '(47) 99626-6842', href: 'tel:+5547996266842', static: false },
                { icon: 'fa-solid fa-envelope', label: 'E-mail', value: 'mangiaree.refeicoes@gmail.com', href: 'mailto:mangiaree.refeicoes@gmail.com', static: false },
                { icon: 'fa-brands fa-instagram', label: 'Instagram', value: '@mangiare.refeicoes', href: 'https://instagram.com/mangiare.refeicoes', static: false },
                { icon: 'fa-solid fa-location-dot', label: 'Endereço', value: 'R. Minas Gerais, 5300, Morro do Meio, Joinville – SC', href: null, static: true },
              ].map((c, i) =>
                c.static ? (
                  <div key={i} className="contato-info-item contato-info-item--static">
                    <span className="contato-info-item__icon"><i className={c.icon} /></span>
                    <div>
                      <p className="contato-info-item__label">{c.label.toUpperCase()}</p>
                      <p className="contato-info-item__value">{c.value}</p>
                    </div>
                  </div>
                ) : (
                  <a key={i} href={c.href!} target={c.href!.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="contato-info-item">
                    <span className="contato-info-item__icon"><i className={c.icon} /></span>
                    <div>
                      <p className="contato-info-item__label">{c.label.toUpperCase()}</p>
                      <p className="contato-info-item__value">{c.value}</p>
                    </div>
                  </a>
                )
              )}
            </div>
            <div className="contato-map-embed">
              <iframe
                src="https://maps.google.com/maps?q=R.+Minas+Gerais,+5300,+Morro+do+Meio,+Joinville,+SC,+Brasil&output=embed&hl=pt-BR&z=16"
                title="Localização Mangiare Refeições"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
    <section className="section--creme">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--bordo">HORÁRIOS</p>
          <h2 className="section-title section-title--verde">Quando nos encontrar</h2>
        </div>
        <div className="horarios-grid">
          <div className="horario-card horario-card--branco horario-card--bordo-l fade-in-up">
            <h3 className="horario-card__title horario-card__title--bordo">Atendimento comercial</h3>
            <div className="horario-card__rows">
              {[
                { dia: 'Segunda a Sexta', horario: '7h às 17h' },
                { dia: 'Sábado', horario: '7h às 12h' },
                { dia: 'Domingo e Feriados', horario: 'Fechado' },
              ].map((h, i) => (
                <div key={i} className="horario-row">
                  <span className="horario-row__dia">{h.dia}</span>
                  <span className="horario-row__hora horario-row__hora--verde">{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="horario-card horario-card--branco horario-card--verde-l fade-in-up" style={{ transitionDelay: '100ms' }}>
            <h3 className="horario-card__title horario-card__title--verde">Entregas</h3>
            <div className="horario-card__rows">
              {[
                { dia: 'Segunda a Sexta', horario: 'Horário combinado' },
                { dia: 'Sábado', horario: 'Horário combinado' },
                { dia: 'Domingo e Feriados', horario: 'Conforme contrato' },
              ].map((h, i) => (
                <div key={i} className="horario-row">
                  <span className="horario-row__dia">{h.dia}</span>
                  <span className="horario-row__hora horario-row__hora--bordo">{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="horario-card horario-card--cta fade-in-up" style={{ transitionDelay: '200ms' }}>
            <i className="fa-brands fa-whatsapp horario-card__whatsapp-icon" />
            <h3 className="horario-card__title horario-card__title--creme">WhatsApp disponível</h3>
            <p className="horario-card__cta-text">
              Para urgências, nosso WhatsApp está disponível fora do horário comercial. Respondemos assim que possível.
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
    <section className="section--preto">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">LOCALIZAÇÃO</p>
          <h2 className="section-title section-title--creme">Onde estamos</h2>
        </div>
        <div className="sobre__grid" style={{ marginTop: 48 }}>
          <div className="fade-in-up">
            <h3 className="section-title section-title--creme" style={{ fontSize: 22, marginBottom: 20 }}>Cozinha industrial Mangiare</h3>
            <div className="localizacao__info-list">
              {[
                { icon: 'fa-solid fa-location-dot', label: 'Endereço', value: <>R. Minas Gerais, 5300<br />Morro do Meio, Joinville – SC<br />CEP: 89.222-280</> },
                { icon: 'fa-solid fa-map', label: 'Área de atendimento', value: 'Joinville e municípios da região norte de Santa Catarina. Entre em contato para verificar disponibilidade.' },
                { icon: 'fa-solid fa-car', label: 'Como chegar', value: 'Estacionamento próprio disponível para visitas. Atendimentos presenciais mediante agendamento.' },
              ].map((item, i) => (
                <div key={i} className="localizacao__item">
                  <i className={`${item.icon} localizacao__icon`} />
                  <div>
                    <p className="localizacao__label">{item.label}</p>
                    <p className="localizacao__value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="localizacao__map fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="localizacao__map-inner">
              <i className="fa-solid fa-map-location-dot localizacao__map-icon" />
              <p className="localizacao__map-text">R. Minas Gerais, 5300<br />Morro do Meio — Joinville, SC</p>
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
    <section className="section--creme">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--bordo">DÚVIDAS</p>
          <h2 className="section-title section-title--verde">Perguntas frequentes</h2>
        </div>
        <div className="faq__list">
          {perguntas.map((p, i) => (
            <div key={i} className="faq__item fade-in-up" style={{ transitionDelay: `${i * 60}ms` }}>
              <button className="faq__btn" onClick={() => setAberto(aberto === i ? null : i)} aria-expanded={aberto === i}>
                <span className="faq__question">{p.q}</span>
                <i className={`fa-solid fa-chevron-${aberto === i ? 'up' : 'down'} faq__icon`} />
              </button>
              {aberto === i && <p className="faq__answer">{p.r}</p>}
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
