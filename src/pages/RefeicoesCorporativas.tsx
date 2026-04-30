import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoCreme from '../assets/logo-creme-watermark.png';
import fotoRefeitorio from '../assets/foto-refeitorio-1.jpg';
import fotoCozinha from '../assets/foto-cozinha.jpg';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import DiferenciaisGrid from '../components/DiferenciaisGrid';
import ClientesLogoWall from '../components/ClientesLogoWall';
import FormField from '../components/FormField';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function ArgumentoB2B() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up" style={{ maxWidth: 800 }}>
            <h2 className="sobre__title">A alimentação corporativa que o seu RH vai querer assinar de olhos fechados</h2>
            <p className="sobre__text">
              Gestores que já passaram por fornecedores problemáticos sabem o custo real de uma refeição ruim: reclamação coletiva, queda de moral, absenteísmo, reunião de emergência.
            </p>
            <p className="sobre__text">
              Atendemos empresas de todos os portes a partir de 50 refeições por pedido. Cardápio por nutricionista, entrega diária em Hot Box com temperatura controlada, conformidade total com normas sanitárias e um ponto de contato único para tudo. O seu trabalho é gerir pessoas — o nosso é garantir que elas almocem bem.
            </p>
            <p className="sobre__text">
              Realizamos visitas quinzenais para acompanhamento in loco e montamos um cardápio flexível conforme as preferências da sua equipe. Para eventos, inaugurações ou datas comemorativas, também estamos prontos.
            </p>
            <div className="metricas">
              <div className="metrica fade-in-up" style={{ transitionDelay: '100ms' }}>
                <span className="metrica__numero">50+</span>
                <span className="metrica__label">refeições/dia mínimo</span>
              </div>
              <div className="metrica fade-in-up" style={{ transitionDelay: '200ms' }}>
                <span className="metrica__numero">30+</span>
                <span className="metrica__label">anos de experiência</span>
              </div>
              <div className="metrica fade-in-up" style={{ transitionDelay: '300ms' }}>
                <span className="metrica__numero">10+</span>
                <span className="metrica__label">empresas atendidas</span>
              </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoRefeitorio} alt="Refeitório corporativo atendido pela Mangiare" className="sobre__image" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosRH() {
  const ref = useFadeInUp<HTMLDivElement>();
  const beneficios = [
    { icon: 'fa-solid fa-chart-line', titulo: 'Produtividade mensurável', texto: 'Colaborador que almoça bem no local não perde 40 minutos no trânsito e volta ao trabalho descansado e focado. O ganho de produtividade é real — e cumulativo ao longo do ano.' },
    { icon: 'fa-solid fa-user-check', titulo: 'Retenção que aparece no balanço', texto: 'Alimentação está entre os 3 benefícios mais valorizados em pesquisas de clima. Empresas que oferecem refeição de qualidade têm turnover menor — e economia real em recrutamento.' },
    { icon: 'fa-solid fa-shield-halved', titulo: 'Zero burocracia para o RH', texto: 'Um fornecedor, uma nota fiscal, um ponto de contato. A Mangiare cuida de tudo: planejamento, produção, qualidade e entrega. Seu RH fica livre para o que importa de verdade.' },
    { icon: 'fa-solid fa-file-invoice', titulo: 'Compliance total incluído', texto: 'Conformidade com vigilância sanitária, normas da ANVISA e BPF já estão no pacote. Nada de auditoria surpresa te pegando de calça curta por causa de alimentação.' },
    { icon: 'fa-solid fa-heart-pulse', titulo: 'Menos atestados médicos', texto: 'Cardápios balanceados, supervisionados por nutricionista, reduzem doenças relacionadas à má alimentação. Menos absenteísmo, menos pressão sobre o plano de saúde.' },
    { icon: 'fa-solid fa-clock', titulo: 'Pontualidade que dá para cronometrar', texto: 'Horário de entrega fixo, respeitado todos os dias do ano — incluindo feriados. Seus turnos ficam mais previsíveis quando a refeição chega sempre no mesmo horário.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>PARA O RH E GESTÃO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>O que acontece quando sua empresa para de ignorar a alimentação</h2>
        </div>
        <div className="diferenciais__grid" style={{ marginTop: 48 }}>
          {beneficios.map((b, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: 'rgba(255,255,255,0.06)', padding: '28px 24px', borderTop: '3px solid var(--color-dourado)' }}>
              <i className={b.icon} style={{ fontSize: 28, color: 'var(--color-dourado)', marginBottom: 14, display: 'block' }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 19, marginBottom: 10 }}>{b.titulo}</h3>
              <p style={{ color: '#a0b8b0', fontSize: 14, lineHeight: 1.7 }}>{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function ProcessoCorporativo() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0', position: 'relative', overflow: 'hidden' }}>
      <img src={fotoCozinha} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} aria-hidden="true" />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>DA COZINHA AO REFEITÓRIO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Nossa cadeia de qualidade</h2>
          <p className="fade-in-up" style={{ color: 'rgba(245,235,220,0.5)', fontSize: 16, maxWidth: 560, margin: '16px auto 0', textAlign: 'center', lineHeight: 1.7, transitionDelay: '80ms' }}>
            Cada etapa tem um responsável, um padrão e um controle. Do ingrediente à mesa, sem atalhos.
          </p>
        </div>
        <div className="bento-cadeia">

          {/* 01 — Seleção: tall esquerdo, verde escuro */}
          <div className="fade-in-up bento-cadeia__destaque" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(145deg, #071510 0%, #0f2a1a 50%, #1a4028 100%)', border: '1px solid rgba(245,185,53,0.15)', padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 320 }}>
            <i className="fa-solid fa-seedling" style={{ position: 'absolute', bottom: -20, right: -16, fontSize: 180, color: '#fff', opacity: 0.04, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', marginBottom: 20, display: 'block' }}>01</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 22, marginBottom: 12 }}>Seleção de ingredientes</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.55)', fontSize: 15, lineHeight: 1.7 }}>Priorizamos fornecedores locais e ingredientes frescos, comprados diariamente. Nada que entra na nossa cozinha fica em estoque — o frescor é parte do processo, não um detalhe.</p>
          </div>

          {/* 02 — Produção: wide topo direito, bordo */}
          <div className="fade-in-up bento-cadeia__wide" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '80ms', background: 'linear-gradient(135deg, #2a0610 0%, #5c1020 100%)', border: '1px solid rgba(245,185,53,0.1)', padding: '32px 28px' }}>
            <i className="fa-solid fa-fire-burner" style={{ position: 'absolute', bottom: -12, right: -8, fontSize: 140, color: '#fff', opacity: 0.05, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', display: 'block', marginBottom: 16 }}>02</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 20, marginBottom: 10 }}>Produção controlada</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.55)', fontSize: 14, lineHeight: 1.6 }}>Cozinha industrial com equipamentos modernos e produção diária. Temperatura, higiene e rastreabilidade monitoradas em cada lote — porque uma falha aqui chega no prato do seu colaborador.</p>
          </div>

          {/* 03 — Embalagem: dourado escuro */}
          <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '160ms', background: 'linear-gradient(135deg, #4a3200 0%, #8a6200 100%)', border: '1px solid rgba(245,185,53,0.15)', padding: '28px 24px' }}>
            <i className="fa-solid fa-box-open" style={{ position: 'absolute', bottom: -10, right: -8, fontSize: 120, color: '#000', opacity: 0.1, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(0,0,0,0.35)', display: 'block', marginBottom: 14 }}>03</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 18, marginBottom: 8 }}>Embalagem térmica</h3>
            <p style={{ position: 'relative', color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6 }}>Embalagens certificadas que preservam temperatura e isolam contaminação, em conformidade com ANVISA.</p>
          </div>

          {/* 04 — Entrega: preto com tint bordo */}
          <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '240ms', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0d10 100%)', border: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px' }}>
            <i className="fa-solid fa-truck-fast" style={{ position: 'absolute', bottom: -10, right: -8, fontSize: 120, color: '#fff', opacity: 0.05, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', display: 'block', marginBottom: 14 }}>04</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 8 }}>Entrega rastreada</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.5)', fontSize: 13, lineHeight: 1.6 }}>Frota própria de Hot Box, no horário exato combinado. Sem atraso, sem desculpa — todos os dias.</p>
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
    { q: 'A Mangiare atende empresas de qualquer porte?', r: 'Sim. Atendemos desde pequenas empresas com 30 colaboradores até grandes indústrias. O cardápio e a logística são adaptados ao volume e às necessidades de cada cliente.' },
    { q: 'Oferecem copeira para servir as refeições?', r: 'Sim, oferecemos copeiras treinadas e responsáveis para cuidarem de refeitórios a partir de 50 pessoas.' },
    { q: 'Vocês fornecem louças e utensílios?', r: 'Sim, montamos todo seu refeitório, desde buffet, pratos, talheres, suqueiras... Isso é por nossa conta.' },
    { q: 'Qual o prazo para início do fornecimento após o contrato?', r: 'Em geral, iniciamos o fornecimento em até 5 dias úteis após a assinatura do contrato, necessários para adequar o cardápio e o planejamento logístico.' },
    { q: 'Como é feito o controle de qualidade das refeições?', r: 'Nossa nutricionista realiza visitas quinzenais ao local de consumo para avaliar aceitação e coletar feedbacks. Internamente, monitoramos temperatura, validade e condições de higiene em todas as etapas.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>DÚVIDAS</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Perguntas frequentes de gestores</h2>
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

function FormB2B() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ empresa: '', cnpj: '', responsavel: '', refeicoes: '', email: '', telefone: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.');
    setForm({ empresa: '', cnpj: '', responsavel: '', refeicoes: '', email: '', telefone: '' });
  };

  return (
    <section className="contato">
      <div className="container" ref={ref}>
        <div className="contato__cta fade-in-up">
          <h2 className="contato__title">Solicite sua proposta corporativa</h2>
          <p className="contato__subtitle">Preencha os dados abaixo. Nossa equipe monta uma proposta personalizada e envia em até 24 horas — sem pressão, sem compromisso.</p>
        </div>
        <form className="contato__form contato__form--centered fade-in-up" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormField label="Empresa" name="empresa" required value={form.empresa} onChange={set('empresa')} variant="dark" placeholder="Nome da empresa" />
            <FormField label="CNPJ" name="cnpj" value={form.cnpj} onChange={set('cnpj')} variant="dark" placeholder="00.000.000/0000-00" />
          </div>
          <div className="form-row">
            <FormField label="Responsável" name="responsavel" required value={form.responsavel} onChange={set('responsavel')} variant="dark" placeholder="Nome do responsável" />
            <FormField label="Nº de refeições/dia" name="refeicoes" value={form.refeicoes} onChange={set('refeicoes')} variant="dark" placeholder="Ex: 80" />
          </div>
          <div className="form-row">
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} variant="dark" placeholder="seu@empresa.com" />
            <FormField label="Telefone" name="telefone" type="tel" value={form.telefone} onChange={set('telefone')} variant="dark" placeholder="(47) 99999-9999" />
          </div>
          <button type="submit" className="btn-primary">Enviar Solicitação</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline--light" aria-label="WhatsApp">
            Ou fale pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function RefeicoesCorporativas() {
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
      <PageHero title="Refeições Corporativas" variant="verde" />
      <ArgumentoB2B />
      <BeneficiosRH />
      <ProcessoCorporativo />
      <section className="diferenciais">
        <img src={logoCreme} alt="" className="diferenciais__watermark" aria-hidden="true" />
        <div className="container">
          <div className="diferenciais__header fade-in-up">
            <p className="section-label diferenciais__label">DIFERENCIAIS</p>
            <h2 className="section-title diferenciais__title">Por que escolher a Mangiare</h2>
          </div>
          <DiferenciaisGrid />
        </div>
      </section>
      <FAQ />
      <section className="clientes">
        <div className="container">
          <div className="clientes__header fade-in-up">
            <p className="section-label clientes__label">NOSSOS CLIENTES</p>
            <h2 className="clientes__subtitle">Empresas que confiam na Mangiare</h2>
          </div>
          <ClientesLogoWall />
        </div>
      </section>
      <FormB2B />
    </>
  );
}
