import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function Descricao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <h2 className="sobre__title">Refeições com sabor caseiro e qualidade profissional</h2>
            <p className="sobre__text">
              Nossas refeições são preparadas com ingredientes frescos e selecionados, seguindo cardápios variados
              desenvolvidos por nutricionista. Cada prato é pensado para oferecer equilíbrio nutricional sem abrir
              mão do sabor que lembra comida de casa.
            </p>
            <p className="sobre__text">
              Seja para o almoço do dia a dia ou para necessidades específicas, nossas marmitas atendem diferentes
              perfis e preferências alimentares, sempre mantendo a qualidade e o cuidado na preparação.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="sobre__image-placeholder" aria-label="Refeições Mangiare">Foto de refeição</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const fotos = Array.from({ length: 6 }, (_, i) => i);
  const colors = ['#C9B5A0', '#A67C52', '#8B5A3C', '#4A6B5A', '#B8956A', '#6B8F71'];

  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Galeria</h2>
        <div className="galeria__grid">
          {fotos.map(i => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: colors[i] }}
              onClick={() => setLightbox(i)} role="button" tabIndex={0} aria-label={`Ver foto ${i + 1}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}>
              Foto {i + 1}
            </div>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Fechar">✕</button>
            <button className="lightbox__prev" onClick={() => setLightbox((lightbox - 1 + 6) % 6)} aria-label="Anterior">‹</button>
            <div className="lightbox__img" style={{ background: colors[lightbox] }}>Foto {lightbox + 1}</div>
            <button className="lightbox__next" onClick={() => setLightbox((lightbox + 1) % 6)} aria-label="Próxima">›</button>
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
          <p className="contato__subtitle">Fale conosco pelo WhatsApp</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="WhatsApp Mangiare">
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
