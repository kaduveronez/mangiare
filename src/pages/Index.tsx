import { useState, useEffect, useCallback } from 'react';
import '../styles/mangiare.css';
import { useFadeInUp } from '../hooks/useIntersectionObserver';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Missão', href: '#missao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

const SERVICOS = [
  { icon: '🍽️', title: 'Refeições Transportadas', text: 'Soluções completas a partir de 50 unidades por pedido. Cardápio variado desenvolvido por nutricionista, com total segurança alimentar.' },
  { icon: '🥡', title: 'Refeições Individuais', text: 'Para empresas sem refeitório próprio, oferecemos marmitas garantindo a mesma qualidade e cuidado na preparação das refeições.' },
  { icon: '🚚', title: 'Entrega Segura e Flexível', text: 'Frota própria, Hot Box, entregas diárias incluindo fins de semana e feriados em Joinville e região.' },
];

const DIFERENCIAIS = [
  { title: 'Cardápio', text: 'Cardápios personalizados, ajustados às preferências e necessidades de cada cliente, sempre com acompanhamento nutricional especializado.' },
  { title: 'Equipamento', text: 'Dispomos de equipamentos profissionais de alta qualidade para a produção das refeições.' },
  { title: 'Transporte em Hot Box', text: 'Garantimos que todas as refeições sejam transportadas em Hot Box, assegurando temperatura adequada e qualidade até o consumo.' },
  { title: 'Segurança Alimentar', text: 'Seguimos rigorosas boas práticas de higiene supervisionadas pela equipe nutricional.' },
  { title: 'Controle de Qualidade', text: 'Visitas quinzenais nas empresas para controle rigoroso de qualidade em todo o processo de entrega e consumo.' },
  { title: 'Refeições Especiais', text: 'Churrasco de inauguração de refeitório e preparação especial na sexta-feira do mês.' },
];

const CLIENTES = [
  'Braspress', 'Construtora Tedesco', 'Giltar', 'Dup', 'Seta Soluções Visuais',
  'Liquigás', 'EBS', 'TNC', 'TransOliveira', 'Magnetron',
];

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#inicio" className="navbar__logo">
            Mangiare<span>refeições</span>
          </a>
          <div className="navbar__links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__cta"
            aria-label="Pedir cotação via WhatsApp"
          >
            Pedir Cotação
          </a>
          <button
            className={`navbar__hamburger ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Abrir menu de navegação"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={closeDrawer} />
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeDrawer}>{l.label}</a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Pedir cotação via WhatsApp"
          onClick={closeDrawer}
        >
          Pedir Cotação
        </a>
      </div>
    </>
  );
}

/* ─── Hero ─── */
function Hero() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="hero" id="inicio">
      <div ref={ref} className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="hero__logo">
          <div className="hero__logo-placeholder" aria-label="Logo Mangiare Refeições">M</div>
        </div>
        <h1 className="hero__tagline">Sabor, nutrição e segurança alimentar para o seu time</h1>
        <p className="hero__subtitle">
          Refeições transportadas com qualidade e pontualidade para empresas em Joinville e região
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Solicitar cotação via WhatsApp"
        >
          Solicitar Cotação
        </a>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-dot" />
      </div>
    </section>
  );
}

/* ─── Sobre ─── */
function Sobre() {
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
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="sobre__image-placeholder" aria-label="Equipe Mangiare Refeições">
              Foto da equipe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Serviços ─── */
function Servicos() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="servicos" id="servicos">
      <div className="container" ref={ref}>
        <div className="servicos__header fade-in-up">
          <h2 className="servicos__title">Nossos Serviços</h2>
        </div>
        <div className="servicos__grid">
          {SERVICOS.map((s, i) => (
            <div key={i} className="card-servico fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="card-servico__icon" aria-hidden="true">{s.icon}</div>
              <h3 className="card-servico__title">{s.title}</h3>
              <p className="card-servico__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Missão ─── */
function Missao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="missao" id="missao">
      <div className="missao__content" ref={ref}>
        <div className="missao__watermark" aria-hidden="true">M</div>
        <div className="fade-in-up">
          <p className="missao__label">MISSÃO</p>
          <div className="missao__line" />
          <p className="missao__text">
            Nossa missão é ser a cozinha industrial de referência no setor de refeições transportadas na região norte
            de Santa Catarina.
          </p>
        </div>
      </div>
      <div className="missao__photos">
        <div className="missao__photo">Foto 1</div>
        <div className="missao__photo">Foto 2</div>
        <div className="missao__photo">Foto 3</div>
      </div>
    </section>
  );
}

/* ─── Diferenciais ─── */
function Diferenciais() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="diferenciais__watermark" aria-hidden="true">M</div>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label diferenciais__label">DIFERENCIAIS</p>
          <h2 className="section-title diferenciais__title">O que nos torna únicos</h2>
        </div>
        <div className="diferenciais__grid">
          {DIFERENCIAIS.map((d, i) => (
            <div key={i} className="card-diferencial fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <h3 className="card-diferencial__title">{d.title}</h3>
              <p className="card-diferencial__text">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Clientes ─── */
function Clientes() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="clientes" id="clientes">
      <div className="container" ref={ref}>
        <div className="clientes__header fade-in-up">
          <p className="section-label clientes__label">NOSSOS CLIENTES</p>
          <h2 className="clientes__subtitle">Empresas que confiam na Mangiare</h2>
        </div>
        <div className="clientes__grid">
          {CLIENTES.map((c, i) => (
            <div key={i} className="clientes__item fade-in-up" style={{ transitionDelay: `${i * 60}ms` }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contato ─── */
function Contato() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="contato" id="contato">
      <div className="container" ref={ref}>
        <div className="contato__cta fade-in-up">
          <h2 className="contato__title">Precisa de uma cotação?</h2>
          <p className="contato__subtitle">Fale conosco e saiba mais!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Fale conosco no WhatsApp"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
        <div className="contato__grid">
          <a href="tel:+5547996266842" className="contato__item fade-in-up" aria-label="Ligar para Mangiare">
            <span className="contato__icon">📱</span>
            <span className="contato__info">(47) 99626-6842</span>
          </a>
          <a href="mailto:mangiaree.refeicoes@gmail.com" className="contato__item fade-in-up" style={{ transitionDelay: '100ms' }} aria-label="Enviar e-mail para Mangiare">
            <span className="contato__icon">📧</span>
            <span className="contato__info">mangiaree.refeicoes@gmail.com</span>
          </a>
          <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" className="contato__item fade-in-up" style={{ transitionDelay: '200ms' }} aria-label="Instagram Mangiare">
            <span className="contato__icon">📸</span>
            <span className="contato__info">@mangiare.refeicoes</span>
          </a>
          <div className="contato__item fade-in-up" style={{ transitionDelay: '300ms' }}>
            <span className="contato__icon">📍</span>
            <span className="contato__info">R. Minas Gerais, 5300, Morro do Meio, Joinville - SC</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            Mangiare<span>refeições</span>
          </div>
          <div className="footer__links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="footer__credit">
            Desenvolvido por{' '}
            <a href="https://kaduveronez.com" target="_blank" rel="noopener noreferrer">
              Kadu Veronez
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          © 2025 Mangiare Refeições. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Index() {
  // Observe all fade-in-up elements
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in-up');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Missao />
      <Diferenciais />
      <Clientes />
      <Contato />
      <Footer />
    </>
  );
}
