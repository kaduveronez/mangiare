import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoPrato1 from '../assets/foto-prato-1.jpg';
import fotoPrato2 from '../assets/foto-prato-2.jpg';

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
      <SolucoesCards />
      <Entrega />
    </>
  );
}
