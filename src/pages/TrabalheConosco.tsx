import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import FormField from '../components/FormField';
import fotoRefeitorio1 from '../assets/foto-refeitorio-1.jpg';
import fotoRefeitorio2 from '../assets/foto-refeitorio-2.jpg';
import fotoRefeitorio3 from '../assets/foto-refeitorio-3.jpg';
import fotoRefeitorio4 from '../assets/foto-refeitorio-4.jpg';

function Cultura() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="fade-in-up" style={{ maxWidth: 800 }}>
          <h2 className="sobre__title">Faça parte da nossa equipe</h2>
          <p className="sobre__text">
            Na Mangiare, acreditamos que grandes refeições são feitas por grandes pessoas. Somos uma empresa familiar
            com mais de 30 anos de história, que valoriza o trabalho em equipe, o respeito e o compromisso com a qualidade.
          </p>
          <p className="sobre__text">
            Nosso ambiente de trabalho é acolhedor e colaborativo. Investimos no desenvolvimento dos nossos colaboradores
            e oferecemos oportunidades de crescimento nas áreas de cozinha, logística e administração.
          </p>
          <p className="sobre__text">
            Se você é apaixonado por culinária, busca estabilidade e quer fazer parte de uma equipe dedicada que
            alimenta milhares de trabalhadores todos os dias, gostaríamos de conhecer você.
          </p>
        </div>
      </div>
    </section>
  );
}

const galeriaFotos = [fotoRefeitorio1, fotoRefeitorio2, fotoRefeitorio3, fotoRefeitorio4];
const galeriaAlt = ['Refeitório corporativo', 'Buffet de refeições', 'Cozinha industrial com marmitas', 'Ingredientes frescos na cozinha'];

function GaleriaRefeitorio() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Nosso ambiente</h2>
        <div className="galeria__grid galeria__grid--4">
          {galeriaFotos.map((foto, i) => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <img src={foto} alt={galeriaAlt[i]} loading="lazy" width={800} height={600} />
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
          <p className="servicos__subtitle">Preencha o formulário abaixo com seus dados</p>
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
