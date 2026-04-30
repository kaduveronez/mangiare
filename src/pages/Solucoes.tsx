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
    <section className="intro-section">
      <div className="container" ref={ref}>
        <div className="intro-section__inner fade-in-up">
          <p className="section-label section-label--bordo intro-section__label">ALIMENTAÇÃO CORPORATIVA</p>
          <h2 className="section-title section-title--verde intro-section__title">
            Duas soluções. Um único nível de exigência.
          </h2>
          <p className="intro-section__text">
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
              Três modalidades para pessoa física e empresas: restaurante aberto ao público no nosso refeitório, marmitas
              avulsas sob demanda e pacotes personalizados (semanais ou mensais) montados do seu jeito.
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
    <section className="como-funciona">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">O PROCESSO</p>
          <h2 className="section-title section-title--creme">Como começar com a Mangiare</h2>
        </div>
        <div className="bento-processo">
          {/* 01 — destaque grande */}
          <div className="bento-card bento-card--destaque bento-processo__destaque fade-in-up">
            <i className="fa-solid fa-magnifying-glass bento-card__bg-icon" style={{ bottom: -16, right: -12, fontSize: 160 }} />
            <span className="bento-card__num">01</span>
            <h3 className="bento-card__title">{passos[0].title}</h3>
            <p className="bento-card__text">{passos[0].text}</p>
          </div>
          {/* 02 */}
          <div className="bento-card bento-card--dark fade-in-up" style={{ transitionDelay: '80ms' }}>
            <i className="fa-solid fa-file-lines bento-card__bg-icon" style={{ bottom: -10, right: -8, fontSize: 120 }} />
            <span className="bento-card__num">02</span>
            <h3 className="bento-card__title bento-card__title--sm">{passos[1].title}</h3>
            <p className="bento-card__text bento-card__text--sm">{passos[1].text}</p>
          </div>
          {/* 03 */}
          <div className="bento-card bento-card--verde-escuro fade-in-up" style={{ transitionDelay: '160ms' }}>
            <i className="fa-solid fa-utensils bento-card__bg-icon bento-card__bg-icon--dourado" style={{ bottom: -10, right: -8, fontSize: 120 }} />
            <span className="bento-card__num">03</span>
            <h3 className="bento-card__title bento-card__title--sm">{passos[2].title}</h3>
            <p className="bento-card__text bento-card__text--sm">{passos[2].text}</p>
          </div>
          {/* 04 — wide */}
          <div className="bento-card bento-card--dourado bento-processo__wide fade-in-up" style={{ transitionDelay: '240ms' }}>
            <i className="fa-solid fa-truck bento-card__bg-icon bento-card__bg-icon--dark" style={{ bottom: -14, right: -10, fontSize: 150 }} />
            <span className="bento-card__num bento-card__num--inline bento-card__num--preto">04</span>
            <div className="bento-card__body">
              <h3 className="bento-card__title bento-card__title--preto">{passos[3].title}</h3>
              <p className="bento-card__text bento-card__text--preto">{passos[3].text}</p>
            </div>
          </div>
          {/* 05 — full */}
          <div className="bento-card bento-card--escuro bento-processo__full fade-in-up" style={{ transitionDelay: '320ms' }}>
            <i className="fa-solid fa-chart-line bento-card__bg-icon" style={{ bottom: -16, right: 32, fontSize: 150, opacity: 0.05 }} />
            <span className="bento-card__num bento-card__num--inline">05</span>
            <div className="bento-card__body">
              <h3 className="bento-card__title bento-card__title--preto" style={{ color: 'var(--color-creme)' }}>{passos[4].title}</h3>
              <p className="bento-card__text bento-card__text--sm">{passos[4].text}</p>
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
    <section className="section--preto">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">SEGMENTOS</p>
          <h2 className="section-title section-title--creme">Atendemos sua empresa, seja qual for o setor</h2>
        </div>
        <div className="segmentos__grid">
          {segmentos.map((s, i) => (
            <div key={i} className="segmento-card fade-in-up" style={{ transitionDelay: `${i * 60}ms` }}>
              <i className={`${s.icon} segmento-card__icon`} />
              <span className="segmento-card__label">{s.label}</span>
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
    { q: 'Qual o número mínimo de refeições por pedido?', r: 'Atendemos a partir de 30 refeições por pedido. Para contratos corporativos recorrentes, trabalhamos com volumes variados conforme a necessidade da empresa.' },
    { q: 'Vocês atendem finais de semana e feriados?', r: 'Sim! Realizamos entregas 7 dias por semana, incluindo sábados, domingos e feriados nacionais e estaduais. Nosso compromisso é garantir a alimentação do seu time todos os dias.' },
    { q: 'Como funciona a logística de entrega?', r: 'Utilizamos frota própria de Hot Box que mantém as refeições acima de 65°C durante todo o transporte. As entregas são realizadas em horários fixos, definidos previamente com cada cliente.' },
    { q: 'Posso personalizar o cardápio para minha empresa?', r: 'Sim! Nossa nutricionista elabora cardápios personalizados considerando as preferências da sua equipe, restrições alimentares e necessidades nutricionais específicas.' },
    { q: 'Qual a área de atendimento?', r: 'Atendemos Joinville e municípios da região norte de Santa Catarina. Entre em contato para verificar a disponibilidade para sua localização específica.' },
    { q: 'Como funciona a precificação?', r: 'O valor por refeição varia conforme o volume contratado, cardápio escolhido e frequência de entrega. Solicite uma cotação personalizada sem compromisso.' },
  ];
  return (
    <section className="section--creme">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--bordo">DÚVIDAS FREQUENTES</p>
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
    <section className="cta-section">
      <div className="container" ref={ref}>
        <h2 className="section-title section-title--creme fade-in-up" style={{ marginBottom: 16 }}>
          Empresas de referência em Joinville já fazem parte. Você quer ser a próxima?
        </h2>
        <p className="cta-section__text fade-in-up" style={{ transitionDelay: '80ms' }}>
          Solicite uma cotação personalizada e descubra que garantir boa alimentação para seu time é mais simples — e mais barato — do que você imagina.
        </p>
        <div className="btn-group fade-in-up" style={{ transitionDelay: '160ms' }}>
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
