import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';

function SolucoesCards() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="servicos__grid servicos__grid--2col">
          <Link to="/solucoes/restaurante-marmitas" className="card-servico-big fade-in-up">
            <div className="card-servico-big__img"><i className="fa-solid fa-utensils" /></div>
            <h3 className="card-servico-big__title">Restaurante & Marmitas</h3>
            <p className="card-servico-big__text">Refeições de qualidade para o dia a dia, com cardápio variado desenvolvido por nutricionista. Opção ideal para clientes individuais e pequenas empresas.</p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
          <Link to="/solucoes/refeicoes-corporativas" className="card-servico-big fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="card-servico-big__img"><i className="fa-solid fa-building" /></div>
            <h3 className="card-servico-big__title">Refeições Corporativas</h3>
            <p className="card-servico-big__text">Soluções completas de alimentação para empresas, a partir de 50 refeições por pedido. Ideal para indústrias, construtoras e operações de grande porte.</p>
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
        </div>
        <div className="servicos__grid servicos__grid--3col">
          {[
            { icon: 'fa-solid fa-truck', title: 'Frota Própria', text: 'Veículos dedicados exclusivamente ao transporte de refeições, garantindo pontualidade e rastreabilidade.' },
            { icon: 'fa-solid fa-fire', title: 'Hot Box', text: 'Sistema de transporte térmico que mantém as refeições na temperatura ideal até o momento do consumo.' },
            { icon: 'fa-solid fa-location-dot', title: 'Joinville e Região', text: 'Entregas diárias em toda Joinville e cidades vizinhas, incluindo fins de semana e feriados.' },
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
