import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoPrato1 from '../assets/foto-prato-1.jpg';
import fotoPrato2 from '../assets/foto-prato-2.jpg';
import fotoPrato3 from '../assets/foto-prato-3.jpg';
import fotoPrato4 from '../assets/foto-prato-4.jpg';
import fotoPrato5 from '../assets/foto-prato-5.jpg';
import fotoPrato6 from '../assets/foto-prato-6.jpg';
import fotoPreparo from '../assets/foto-preparo.jpg';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';
const fotos = [fotoPrato1, fotoPrato2, fotoPrato3, fotoPrato4, fotoPrato5, fotoPrato6];
const fotosAlt = [
  'Prato com arroz, feijão, frango e salada',
  'Marmita executiva com bife, arroz e legumes',
  'Peixe grelhado com arroz e salada',
  'Feijoada com arroz e couve',
  'Macarrão ao molho de tomate',
  'Frango grelhado com arroz e vegetais',
];

function Descricao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <h2 className="sobre__title">Refeições com sabor caseiro e qualidade profissional</h2>
            <p className="sobre__text">
              Nossas refeições são preparadas diariamente com ingredientes frescos e selecionados, seguindo cardápios variados
              desenvolvidos por nutricionista. Cada prato é pensado para oferecer equilíbrio nutricional sem abrir
              mão do sabor que lembra comida de casa.
            </p>
            <p className="sobre__text">
              Atendemos empresas que não dispõem de refeitório próprio com marmitas individuais a partir de 50 unidades
              por pedido. Todas as refeições são transportadas em Hot Box, garantindo temperatura adequada e segurança
              alimentar até o momento do consumo.
            </p>
            <p className="sobre__text">
              Nosso cardápio varia diariamente e inclui opções de carne, frango, peixe e vegetariano,
              sempre acompanhados de arroz, feijão, salada fresca e guarnição do dia.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoPreparo} alt="Preparo de marmitas na cozinha Mangiare" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Nossos Pratos</h2>
        <div className="galeria__grid">
          {fotos.map((foto, i) => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)} role="button" tabIndex={0} aria-label={`Ver ${fotosAlt[i]}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}>
              <img src={foto} alt={fotosAlt[i]} loading="lazy" width={800} height={600} />
            </div>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Fechar">
              <i className="fa-solid fa-xmark" />
            </button>
            <button className="lightbox__prev" onClick={() => setLightbox((lightbox - 1 + 6) % 6)} aria-label="Anterior">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <div className="lightbox__img">
              <img src={fotos[lightbox]} alt={fotosAlt[lightbox]} />
            </div>
            <button className="lightbox__next" onClick={() => setLightbox((lightbox + 1) % 6)} aria-label="Próxima">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function RestauranteMarmitas() {
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
      <PageHero title="Restaurante & Marmitas" variant="bordo" />
      <Descricao />
      <Galeria />
      <section className="contato" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="contato__title">Peça já sua refeição</h2>
          <p className="contato__subtitle">Entre em contato pelo WhatsApp e solicite uma cotação personalizada</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="WhatsApp Mangiare">
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
