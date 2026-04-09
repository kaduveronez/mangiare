import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import DiferenciaisGrid from '../components/DiferenciaisGrid';
import ClientesLogoWall from '../components/ClientesLogoWall';
import FormField from '../components/FormField';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function ArgumentoB2B() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="fade-in-up" style={{ maxWidth: 800 }}>
          <h2 className="sobre__title">Alimentação corporativa que faz diferença</h2>
          <p className="sobre__text">
            Oferecer refeições de qualidade aos colaboradores é investir em produtividade, saúde e retenção de talentos.
            A Mangiare atende empresas de todos os portes com soluções flexíveis, a partir de 50 refeições por pedido.
          </p>
          <p className="sobre__text">
            Nossa operação é pensada para gestores e equipes de RH que buscam eficiência, compliance com normas de
            segurança alimentar e um parceiro confiável para o dia a dia da alimentação corporativa.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormB2B() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ empresa: '', cnpj: '', responsavel: '', refeicoes: '', email: '', telefone: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.');
    setForm({ empresa: '', cnpj: '', responsavel: '', refeicoes: '', email: '', telefone: '' });
  };

  return (
    <section className="contato">
      <div className="container" ref={ref}>
        <div className="contato__cta fade-in-up">
          <h2 className="contato__title">Solicite um orçamento corporativo</h2>
          <p className="contato__subtitle">Preencha os dados abaixo</p>
        </div>
        <form className="contato__form contato__form--centered fade-in-up" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormField label="Empresa" name="empresa" required value={form.empresa} onChange={set('empresa')} variant="dark" />
            <FormField label="CNPJ" name="cnpj" value={form.cnpj} onChange={set('cnpj')} variant="dark" />
          </div>
          <div className="form-row">
            <FormField label="Responsável" name="responsavel" required value={form.responsavel} onChange={set('responsavel')} variant="dark" />
            <FormField label="Nº de refeições/dia" name="refeicoes" value={form.refeicoes} onChange={set('refeicoes')} variant="dark" />
          </div>
          <div className="form-row">
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} variant="dark" />
            <FormField label="Telefone" name="telefone" type="tel" value={form.telefone} onChange={set('telefone')} variant="dark" />
          </div>
          <button type="submit" className="btn-primary">Enviar Solicitação</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline--light" aria-label="WhatsApp">
            Ou fale pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

export default function RefeicoesCorporativas() {
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
      <PageHero title="Refeições Corporativas" variant="verde" />
      <ArgumentoB2B />
      <section className="diferenciais">
        <div className="diferenciais__watermark" aria-hidden="true">M</div>
        <div className="container">
          <div className="diferenciais__header fade-in-up">
            <p className="section-label diferenciais__label">DIFERENCIAIS</p>
            <h2 className="section-title diferenciais__title">Por que escolher a Mangiare</h2>
          </div>
          <DiferenciaisGrid />
        </div>
      </section>
      <section className="clientes">
        <div className="container">
          <div className="clientes__header fade-in-up">
            <p className="section-label clientes__label">NOSSOS CLIENTES</p>
            <h2 className="clientes__subtitle">Empresas que confiam na Mangiare</h2>
          </div>
          <ClientesLogoWall />
        </div>
      </section>
      <FormB2B />
    </>
  );
}
