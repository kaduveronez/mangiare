import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoPrato1 from '../assets/foto-prato-1.jpg';
import fotoPrato2 from '../assets/foto-prato-2.jpg';
import DiferenciaisGrid from '../components/DiferenciaisGrid';
import ClientesLogoWall from '../components/ClientesLogoWall';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function Intro() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }} className="fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)', marginBottom: 16 }}>ALIMENTAÇÃO CORPORATIVA</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)', marginBottom: 20 }}>
            Duas soluções. Um único nível de exigência.
          </h2>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.8 }}>
            Seja qual for o tamanho da sua empresa, o padrão Mangiare não muda: cardápio por nutricionista, ingredientes frescos, entrega pontual em Hot Box e segurança alimentar sem negociação. Escolha a modalidade que mais se encaixa na sua operação.
          </p>
        </div>
      </div>
    </section>
  );
}

function SolucoesCards() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="servicos__grid servicos__grid--2col">
          <Link to="/solucoes/restaurante-marmitas" className="card-servico-big card-servico-big--light fade-in-up">
            <div className="card-servico-big__img-wrapper">
              <img src={fotoPrato1} alt="Prato de refeição individual" loading="lazy" width={800} height={600} />
            </div>
            <h3 className="card-servico-big__title card-servico-big__title--dark">Restaurante & Marmitas</h3>
            <p className="card-servico-big__text card-servico-big__text--dark">
              Refeições individuais com cardápio variado desenvolvido por nutricionista. Opção ideal para empresas
              que não dispõem de refeitório próprio, com a mesma qualidade e cuidado na preparação.
              Atendemos a partir de 50 marmitas por pedido.
            </p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
          <Link to="/solucoes/refeicoes-corporativas" className="card-servico-big card-servico-big--light fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="card-servico-big__img-wrapper">
              <img src={fotoPrato2} alt="Marmita executiva corporativa" loading="lazy" width={800} height={600} />
            </div>
            <h3 className="card-servico-big__title card-servico-big__title--dark">Refeições Corporativas</h3>
            <p className="card-servico-big__text card-servico-big__text--dark">
              Soluções completas de alimentação para empresas de médio e grande porte. Cardápio por nutricionista,
              entrega diária em Hot Box, conformidade com normas de segurança alimentar e mais de 30 anos de experiência.
            </p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const ref = useFadeInUp<HTMLDivElement>();
  const passos = [
    { num: '01', title: 'Consulta inicial', text: 'Analisamos o perfil da sua empresa, número de colaboradores, horários de refeição e necessidades específicas para indicar a solução mais adequada.' },
    { num: '02', title: 'Proposta personalizada', text: 'Elaboramos uma proposta com cardápio, frequência de entrega, logística e valores totalmente adaptados à sua realidade.' },
    { num: '03', title: 'Degustação', text: 'Oferecemos a possibilidade de degustação antes da contratação, para que você e sua equipe conheçam a qualidade das nossas refeições.' },
    { num: '04', title: 'Início do fornecimento', text: 'Com o contrato assinado, iniciamos as entregas conforme combinado — pontualmente, todos os dias, incluindo fins de semana e feriados.' },
    { num: '05', title: 'Acompanhamento contínuo', text: 'Nossa nutricionista realiza visitas quinzenais para avaliar aceitação, coletar feedbacks e ajustar o cardápio conforme necessário.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>O PROCESSO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Como começar com a Mangiare</h2>
        </div>
        <div className="bento-processo">
          {/* 01 — destaque grande: bordo escuro */}
          <div className="fade-in-up bento-processo__destaque" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #2a0610 0%, #5c1020 100%)', border: '1px solid rgba(245,185,53,0.15)', padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', bottom: -16, right: -12, fontSize: 160, color: '#fff', opacity: 0.06, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', marginBottom: 16, display: 'block' }}>01</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 22, marginBottom: 12 }}>{passos[0].title}</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.65)', lineHeight: 1.7, fontSize: 15 }}>{passos[0].text}</p>
          </div>
          {/* 02: preto com leve tint bordo */}
          <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '80ms', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0d10 100%)', border: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px' }}>
            <i className="fa-solid fa-file-lines" style={{ position: 'absolute', bottom: -10, right: -8, fontSize: 120, color: '#fff', opacity: 0.06, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', display: 'block', marginBottom: 10 }}>02</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 8 }}>{passos[1].title}</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.55)', lineHeight: 1.6, fontSize: 14 }}>{passos[1].text}</p>
          </div>
          {/* 03: verde mais escuro que o fundo da seção */}
          <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '160ms', background: 'linear-gradient(135deg, #0a1a10 0%, #0f2818 100%)', border: '1px solid rgba(245,185,53,0.1)', padding: '28px 24px' }}>
            <i className="fa-solid fa-utensils" style={{ position: 'absolute', bottom: -10, right: -8, fontSize: 120, color: 'var(--color-dourado)', opacity: 0.1, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', display: 'block', marginBottom: 10 }}>03</span>
            <h3 style={{ position: 'relative', fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 8 }}>{passos[2].title}</h3>
            <p style={{ position: 'relative', color: 'rgba(245,235,220,0.55)', lineHeight: 1.6, fontSize: 14 }}>{passos[2].text}</p>
          </div>
          {/* 04 — wide: dourado escuro → dourado */}
          <div className="fade-in-up bento-processo__wide" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '240ms', background: 'linear-gradient(135deg, #6b4a00 0%, #c49000 100%)', padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'center' }}>
            <i className="fa-solid fa-truck" style={{ position: 'absolute', bottom: -14, right: -10, fontSize: 150, color: '#000', opacity: 0.08, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(0,0,0,0.3)', flexShrink: 0 }}>04</span>
            <div style={{ position: 'relative' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-preto)', fontSize: 19, marginBottom: 6 }}>{passos[3].title}</h3>
              <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: 1.6, fontSize: 14 }}>{passos[3].text}</p>
            </div>
          </div>
          {/* 05 — full: bordo escuro → preto */}
          <div className="fade-in-up bento-processo__full" style={{ position: 'relative', overflow: 'hidden', transitionDelay: '320ms', background: 'linear-gradient(135deg, #1e0810 0%, #3d1020 50%, #0a0a0a 100%)', border: '1px solid rgba(245,185,53,0.1)', padding: '28px 32px', display: 'flex', gap: 28, alignItems: 'center' }}>
            <i className="fa-solid fa-chart-line" style={{ position: 'absolute', bottom: -16, right: 32, fontSize: 150, color: '#fff', opacity: 0.05, pointerEvents: 'none', lineHeight: 1 }} />
            <span style={{ position: 'relative', fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'rgba(245,185,53,0.7)', flexShrink: 0 }}>05</span>
            <div style={{ position: 'relative' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 19, marginBottom: 6 }}>{passos[4].title}</h3>
              <p style={{ color: 'rgba(245,235,220,0.55)', lineHeight: 1.6, fontSize: 14 }}>{passos[4].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Entrega() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="servicos">
      <div className="container" ref={ref}>
        <div className="servicos__header fade-in-up">
          <h2 className="servicos__title">Entrega Segura e Flexível</h2>
          <p className="servicos__subtitle">Frota própria e motoristas capacitados garantem pontualidade em todas as entregas</p>
        </div>
        <div className="servicos__grid servicos__grid--3col">
          {[
            { icon: 'fa-solid fa-truck', title: 'Frota Própria', text: 'Veículos dedicados exclusivamente ao transporte de refeições, garantindo pontualidade, rastreabilidade e total controle da cadeia de entrega.' },
            { icon: 'fa-solid fa-fire', title: 'Hot Box', text: 'Sistema de transporte térmico profissional que mantém as refeições na temperatura ideal (acima de 65°C) até o momento do consumo, preservando sabor e segurança.' },
            { icon: 'fa-solid fa-calendar-check', title: '7 Dias por Semana', text: 'Entregas diárias em toda Joinville e cidades vizinhas, incluindo fins de semana, feriados e horários extraordinários conforme a necessidade do cliente.' },
          ].map((s, i) => (
            <div key={i} className="card-servico fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="card-servico__icon" aria-hidden="true"><i className={s.icon} /></div>
              <h3 className="card-servico__title">{s.title}</h3>
              <p className="card-servico__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentosAtendidos() {
  const ref = useFadeInUp<HTMLDivElement>();
  const segmentos = [
    { icon: 'fa-solid fa-industry', label: 'Indústrias' },
    { icon: 'fa-solid fa-hard-hat', label: 'Construção Civil' },
    { icon: 'fa-solid fa-boxes-stacked', label: 'Logística' },
    { icon: 'fa-solid fa-building', label: 'Escritórios' },
    { icon: 'fa-solid fa-hospital', label: 'Saúde' },
    { icon: 'fa-solid fa-store', label: 'Comércio' },
    { icon: 'fa-solid fa-graduation-cap', label: 'Educação' },
    { icon: 'fa-solid fa-screwdriver-wrench', label: 'Serviços' },
  ];
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>SEGMENTOS</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Atendemos sua empresa, seja qual for o setor</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 48 }}>
          {segmentos.map((s, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 60}ms`, textAlign: 'center', padding: '28px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '2px solid var(--color-dourado)' }}>
              <i className={s.icon} style={{ fontSize: 28, color: 'var(--color-dourado)', marginBottom: 12, display: 'block' }} />
              <span style={{ color: 'var(--color-creme)', fontSize: 14, fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiferenciaisSolucoes() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="diferenciais">
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label diferenciais__label">POR QUE MANGIARE</p>
          <h2 className="section-title diferenciais__title">O que nos diferencia da concorrência</h2>
        </div>
        <DiferenciaisGrid />
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [aberto, setAberto] = useState<number | null>(null);
  const perguntas = [
    { q: 'Qual o número mínimo de refeições por pedido?', r: 'Atendemos a partir de 50 refeições por pedido. Para contratos corporativos recorrentes, trabalhamos com volumes variados conforme a necessidade da empresa.' },
    { q: 'Vocês atendem finais de semana e feriados?', r: 'Sim! Realizamos entregas 7 dias por semana, incluindo sábados, domingos e feriados nacionais e estaduais. Nosso compromisso é garantir a alimentação do seu time todos os dias.' },
    { q: 'Como funciona a logística de entrega?', r: 'Utilizamos frota própria de Hot Box que mantém as refeições acima de 65°C durante todo o transporte. As entregas são realizadas em horários fixos, definidos previamente com cada cliente.' },
    { q: 'Posso personalizar o cardápio para minha empresa?', r: 'Sim! Nossa nutricionista elabora cardápios personalizados considerando as preferências da sua equipe, restrições alimentares e necessidades nutricionais específicas.' },
    { q: 'Qual a área de atendimento?', r: 'Atendemos Joinville e municípios da região norte de Santa Catarina. Entre em contato para verificar a disponibilidade para sua localização específica.' },
    { q: 'Como funciona a precificação?', r: 'O valor por refeição varia conforme o volume contratado, cardápio escolhido e frequência de entrega. Solicite uma cotação personalizada sem compromisso.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>DÚVIDAS FREQUENTES</p>
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

function ClientesSolucoes() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="clientes">
      <div className="container" ref={ref}>
        <div className="clientes__header fade-in-up">
          <p className="section-label clientes__label">NOSSOS CLIENTES</p>
          <h2 className="clientes__subtitle">Empresas que confiam na Mangiare</h2>
        </div>
        <ClientesLogoWall />
      </div>
    </section>
  );
}

function CTASolucoes() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-bordo)', padding: '64px 0', textAlign: 'center' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ color: 'var(--color-creme)', marginBottom: 16 }}>
          Empresas de referência em Joinville já fazem parte. Você quer ser a próxima?
        </h2>
        <p className="fade-in-up" style={{ color: 'rgba(245,239,200,0.8)', fontSize: 17, maxWidth: 560, margin: '0 auto 32px', transitionDelay: '80ms' }}>
          Solicite uma cotação personalizada e descubra que garantir boa alimentação para seu time é mais simples — e mais barato — do que você imagina.
        </p>
        <div className="fade-in-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '160ms' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Falar no WhatsApp</a>
          <Link to="/contato" className="btn-outline btn-outline--light">Solicitar Cotação</Link>
        </div>
      </div>
    </section>
  );
}

export default function Solucoes() {
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
      <PageHero title="Nossas Soluções" variant="verde" />
      <Intro />
      <SolucoesCards />
      <ComoFunciona />
      <Entrega />
      <SegmentosAtendidos />
      <DiferenciaisSolucoes />
      <FAQ />
      <ClientesSolucoes />
      <CTASolucoes />
    </>
  );
}
