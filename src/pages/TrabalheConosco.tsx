import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';

function Cultura() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="fade-in-up" style={{ maxWidth: 800 }}>
          <h2 className="sobre__title">Faça parte da nossa equipe</h2>
          <p className="sobre__text">
            Na Mangiare, acreditamos que grandes refeições são feitas por grandes pessoas. Somos uma empresa familiar
            que valoriza o trabalho em equipe, o respeito e o compromisso com a qualidade.
          </p>
          <p className="sobre__text">
            Se você é apaixonado por culinária, logística ou administração e quer fazer parte de uma equipe dedicada,
            gostaríamos de conhecer você. Preencha o formulário abaixo e entraremos em contato.
          </p>
        </div>
      </div>
    </section>
  );
}

function GaleriaRefeitorio() {
  const ref = useFadeInUp<HTMLDivElement>();
  const colors = ['#C9B5A0', '#A67C52', '#8B5A3C', '#4A6B5A'];
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Nosso ambiente</h2>
        <div className="galeria__grid galeria__grid--4">
          {colors.map((c, i) => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: c }}>
              Foto {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormVagas() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
    setForm({ nome: '', email: '', telefone: '', area: '', mensagem: '' });
  };

  return (
    <section className="servicos">
      <div className="container" ref={ref}>
        <div className="servicos__header fade-in-up">
          <h2 className="servicos__title">Envie sua candidatura</h2>
        </div>
        <form className="contato__form contato__form--centered fade-in-up" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormField label="Nome" name="nome" required value={form.nome} onChange={set('nome')} variant="dark" placeholder="Seu nome completo" />
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} variant="dark" placeholder="seu@email.com" />
          </div>
          <div className="form-row">
            <FormField label="Telefone" name="telefone" type="tel" value={form.telefone} onChange={set('telefone')} variant="dark" placeholder="(47) 99999-9999" />
            <FormField label="Área de interesse" name="area" type="select" value={form.area} onChange={set('area')} variant="dark" options={['Cozinha', 'Logística', 'Administração', 'Outro']} />
          </div>
          <FormField label="Mensagem" name="mensagem" type="textarea" value={form.mensagem} onChange={set('mensagem')} variant="dark" placeholder="Conte-nos sobre você e sua experiência..." />
          <button type="submit" className="btn-primary">Enviar Candidatura</button>
        </form>
      </div>
    </section>
  );
}

export default function TrabalheConosco() {
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
      <PageHero title="Trabalhe Conosco" variant="dourado" />
      <Cultura />
      <GaleriaRefeitorio />
      <FormVagas />
    </>
  );
}
