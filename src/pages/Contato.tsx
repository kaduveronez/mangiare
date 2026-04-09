import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';

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
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="contato-page__grid">
          <form className="contato-page__form fade-in-up" onSubmit={handleSubmit}>
            <h2 className="sobre__title" style={{ marginBottom: 24 }}>Envie sua mensagem</h2>
            <FormField label="Nome" name="nome" required value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} placeholder="seu@email.com" />
            <FormField label="Assunto" name="assunto" type="select" value={form.assunto} onChange={set('assunto')} options={['Cotação', 'Dúvida', 'Outro']} />
            <FormField label="Mensagem" name="mensagem" type="textarea" required value={form.mensagem} onChange={set('mensagem')} placeholder="Como podemos ajudar?" />
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
          </form>
          <div className="contato-page__info fade-in-up" style={{ transitionDelay: '100ms' }}>
            <h3 className="sobre__title" style={{ fontSize: 28, marginBottom: 24 }}>Informações de contato</h3>
            <div className="contato-page__items">
              <a href="tel:+5547996266842" className="contato__item contato__item--light" aria-label="Telefone">
                <span className="contato__icon"><i className="fa-solid fa-phone" /></span><span className="contato__info contato__info--dark">(47) 99626-6842</span>
              </a>
              <a href="mailto:mangiaree.refeicoes@gmail.com" className="contato__item contato__item--light" aria-label="E-mail">
                <span className="contato__icon"><i className="fa-solid fa-envelope" /></span><span className="contato__info contato__info--dark">mangiaree.refeicoes@gmail.com</span>
              </a>
              <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" className="contato__item contato__item--light" aria-label="Instagram">
                <span className="contato__icon"><i className="fa-brands fa-instagram" /></span><span className="contato__info contato__info--dark">@mangiare.refeicoes</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contato__item contato__item--light" aria-label="Facebook">
                <span className="contato__icon"><i className="fa-brands fa-facebook" /></span><span className="contato__info contato__info--dark">Facebook</span>
              </a>
              <div className="contato__item contato__item--light">
                <span className="contato__icon"><i className="fa-solid fa-location-dot" /></span><span className="contato__info contato__info--dark">R. Minas Gerais, 5300, Morro do Meio, Joinville – SC</span>
              </div>
            </div>
            <div className="mapa-placeholder" aria-label="Localização no mapa">Google Maps</div>
          </div>
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
    </>
  );
}
