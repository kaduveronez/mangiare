import { useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoEquipe from '../assets/foto-equipe.jpg';
import fotoCozinha from '../assets/foto-cozinha.jpg';
import fotoPreparo from '../assets/foto-preparo.jpg';
import fotoEntrega from '../assets/foto-entrega.jpg';

function Historia() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container">
        <div className="sobre__grid" ref={ref}>
          <div className="fade-in-up">
            <p className="sobre__welcome">Seja bem-vindo à</p>
            <h2 className="sobre__title">Mangiare Refeições!</h2>
            <p className="sobre__text">
              Com uma trajetória de mais de 30 anos de experiência no ramo alimentício, somos uma empresa familiar
              especializada no fornecimento de refeições transportadas, prezando pela excelência em sabor, nutrição
              e segurança alimentar.
            </p>
            <p className="sobre__text">
              Nossa história começou com a paixão pela culinária e o compromisso de oferecer alimentação de qualidade
              para trabalhadores de Joinville e região. Ao longo das décadas, crescemos e nos consolidamos como referência
              no setor de refeições transportadas no norte de Santa Catarina.
            </p>
            <p className="sobre__text">
              Hoje, atendemos mais de 10 empresas diariamente, com uma equipe dedicada que prepara cada refeição com
              o mesmo cuidado e carinho de sempre. Nossa cozinha industrial segue rigorosos padrões de higiene e
              segurança alimentar, supervisionados por nutricionista.
            </p>
            <span className="sobre__badge">30+ anos de experiência</span>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoEquipe} alt="Equipe Mangiare Refeições na cozinha industrial" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Missao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="missao">
      <div className="missao__content" ref={ref}>
        <div className="missao__watermark" aria-hidden="true">M</div>
        <div className="fade-in-up">
          <p className="missao__label">MISSÃO</p>
          <div className="missao__line" />
          <p className="missao__text">
            Nossa missão é ser a cozinha industrial de referência no setor de refeições transportadas na região norte de Santa Catarina,
            proporcionando alimentação saudável, saborosa e segura para os colaboradores das empresas que confiam em nós.
          </p>
        </div>
      </div>
      <div className="missao__photos">
        <div className="missao__photo">
          <img src={fotoCozinha} alt="Cozinha industrial Mangiare" loading="lazy" width={960} height={720} />
        </div>
        <div className="missao__photo">
          <img src={fotoPreparo} alt="Preparo de refeições" loading="lazy" width={960} height={720} />
        </div>
        <div className="missao__photo">
          <img src={fotoEntrega} alt="Entrega de refeições em Hot Box" loading="lazy" width={960} height={720} />
        </div>
      </div>
    </section>
  );
}

function Valores() {
  const ref = useFadeInUp<HTMLDivElement>();
  const valores = [
    { title: 'Qualidade', text: 'Ingredientes selecionados e preparo artesanal em cada refeição. Nossos cardápios são desenvolvidos por nutricionista, garantindo equilíbrio nutricional e sabor em todos os pratos.' },
    { title: 'Pontualidade', text: 'Entregas no horário certo, todos os dias, incluindo fins de semana e feriados. Nossa frota própria e motoristas capacitados asseguram que as refeições chegam sempre no momento combinado.' },
    { title: 'Segurança Alimentar', text: 'Rigorosas práticas de higiene e controle de qualidade supervisionadas por nutricionista. Seguimos todas as normas sanitárias e realizamos visitas quinzenais de acompanhamento.' },
  ];
  return (
    <section className="diferenciais">
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label diferenciais__label">NOSSOS VALORES</p>
          <h2 className="section-title diferenciais__title">O que nos guia</h2>
        </div>
        <div className="diferenciais__grid">
          {valores.map((v, i) => (
            <div key={i} className="card-diferencial fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3 className="card-diferencial__title">{v.title}</h3>
              <p className="card-diferencial__text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function QuemSomos() {
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
      <PageHero title="Quem Somos" variant="bordo" />
      <Historia />
      <Missao />
      <Valores />
    </>
  );
}
