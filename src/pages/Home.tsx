import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import logoAmarelo from '../assets/logo-amarelo.png';
import logoCreme from '../assets/logo-creme-watermark.png';
import DiferenciaisGrid from '../components/DiferenciaisGrid';
import ClientesLogoWall from '../components/ClientesLogoWall';
import FormField from '../components/FormField';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function Hero() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="hero" id="inicio">
      <div className="hero__video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/5t7xU8pWbso?autoplay=1&mute=1&loop=1&playlist=5t7xU8pWbso&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Mangiare Refeições — vídeo de fundo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="hero__video"
        />
      </div>
      <div className="hero__overlay" />
      <div ref={ref} className="fade-in-up hero__content">
        <div className="hero__logo">
          <img src={logoAmarelo} alt="Logo Mangiare Refeições" className="hero__logo-img" />
        </div>
        <h1 className="hero__tagline">Sabor, nutrição e segurança alimentar para o seu time</h1>
        <p className="hero__subtitle">Refeições transportadas com qualidade e pontualidade para empresas em Joinville e região</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Solicitar cotação via WhatsApp">
          Solicitar Cotação
        </a>
      </div>
      <div className="hero__scroll" aria-hidden="true"><div className="hero__scroll-dot" /></div>
    </section>
  );
}

function SobreResumo() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre" id="sobre">
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
            <span className="sobre__badge">30+ anos de experiência</span>
            <div style={{ marginTop: 24 }}>
              <Link to="/quem-somos" className="btn-outline" aria-label="Conheça nossa história">Conheça nossa história →</Link>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="sobre__image-placeholder" aria-label="Equipe Mangiare Refeições">Foto da equipe</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicosHome() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="servicos" id="servicos">
      <div className="container" ref={ref}>
        <div className="servicos__header fade-in-up">
          <h2 className="servicos__title">Nossos Serviços</h2>
        </div>
        <div className="servicos__grid servicos__grid--2col">
          <Link to="/solucoes/restaurante-marmitas" className="card-servico-big fade-in-up">
            <div className="card-servico-big__img" aria-label="Restaurante e Marmitas"><i className="fa-solid fa-utensils" /></div>
            <h3 className="card-servico-big__title">Restaurante & Marmitas</h3>
            <p className="card-servico-big__text">Refeições de qualidade para o dia a dia, com cardápio variado desenvolvido por nutricionista.</p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
          <Link to="/solucoes/refeicoes-corporativas" className="card-servico-big fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="card-servico-big__img" aria-label="Refeições Corporativas"><i className="fa-solid fa-building" /></div>
            <h3 className="card-servico-big__title">Refeições Corporativas</h3>
            <p className="card-servico-big__text">Soluções completas de alimentação para empresas, a partir de 50 refeições por pedido.</p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function DiferenciaisSection() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="diferenciais" id="diferenciais">
      <img src={logoCreme} alt="" className="diferenciais__watermark" aria-hidden="true" />
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label diferenciais__label">DIFERENCIAIS</p>
          <h2 className="section-title diferenciais__title">O que nos torna únicos</h2>
        </div>
        <DiferenciaisGrid />
      </div>
    </section>
  );
}

function ClientesSection() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="clientes" id="clientes">
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

function FormularioContato() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setForm({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <section className="contato" id="contato">
      <div className="container" ref={ref}>
        <div className="contato__cta fade-in-up">
          <h2 className="contato__title">Precisa de uma cotação?</h2>
          <p className="contato__subtitle">Preencha o formulário ou fale conosco!</p>
        </div>
        <div className="contato__form-grid">
          <form className="contato__form fade-in-up" onSubmit={handleSubmit}>
            <FormField label="Nome" name="nome" required value={form.nome} onChange={set('nome')} variant="dark" placeholder="Seu nome" />
            <FormField label="Empresa" name="empresa" value={form.empresa} onChange={set('empresa')} variant="dark" placeholder="Nome da empresa" />
            <FormField label="E-mail" name="email" type="email" required value={form.email} onChange={set('email')} variant="dark" placeholder="seu@email.com" />
            <FormField label="Telefone" name="telefone" type="tel" value={form.telefone} onChange={set('telefone')} variant="dark" placeholder="(47) 99999-9999" />
            <FormField label="Mensagem" name="mensagem" type="textarea" required value={form.mensagem} onChange={set('mensagem')} variant="dark" placeholder="Como podemos ajudar?" />
            <button type="submit" className="btn-primary">Enviar Solicitação</button>
          </form>
          <div className="contato__info-col fade-in-up" style={{ transitionDelay: '100ms' }}>
            <a href="tel:+5547996266842" className="contato__item" aria-label="Ligar para Mangiare">
              <span className="contato__icon"><i className="fa-solid fa-phone" /></span><span className="contato__info">(47) 99626-6842</span>
            </a>
            <a href="mailto:mangiaree.refeicoes@gmail.com" className="contato__item" aria-label="E-mail Mangiare">
              <span className="contato__icon"><i className="fa-solid fa-envelope" /></span><span className="contato__info">mangiaree.refeicoes@gmail.com</span>
            </a>
            <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" className="contato__item" aria-label="Instagram Mangiare">
              <span className="contato__icon"><i className="fa-brands fa-instagram" /></span><span className="contato__info">@mangiare.refeicoes</span>
            </a>
            <div className="contato__item">
              <span className="contato__icon"><i className="fa-solid fa-location-dot" /></span><span className="contato__info">R. Minas Gerais, 5300, Morro do Meio, Joinville - SC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
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
      <Hero />
      <SobreResumo />
      <ServicosHome />
      <DiferenciaisSection />
      <ClientesSection />
      <FormularioContato />
    </>
  );
}
