import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import logoAmarelo from '../assets/logo-amarelo.png';
import logoCreme from '../assets/logo-creme-watermark.png';
import fotoEquipe from '../assets/foto-equipe.jpg';
import fotoPrato1 from '../assets/foto-prato-1.jpg';
import fotoPrato2 from '../assets/foto-prato-2.jpg';
import fotoPrato3 from '../assets/foto-prato-3.jpg';
import fotoCozinha from '../assets/foto-cozinha.jpg';
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
        <h1 className="hero__tagline">O padrão de alimentação que seu time merece — e que as melhores empresas já oferecem</h1>
        <p className="hero__subtitle">Mais de 500 refeições por dia. Cardápio por nutricionista. Zero falhas na pontualidade. É assim que empresas sérias alimentam seus times em Joinville.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Solicitar cotação via WhatsApp">
          Quero fazer parte
        </a>
      </div>
      <div className="hero__scroll" aria-hidden="true"><div className="hero__scroll-dot" /></div>
    </section>
  );
}

function Numeros() {
  const ref = useFadeInUp<HTMLDivElement>();
  const stats = [
    { numero: '30+', label: 'Anos de experiência' },
    { numero: '10+', label: 'Empresas atendidas' },
    { numero: '500+', label: 'Refeições por dia' },
    { numero: '100%', label: 'Supervisionado por nutricionista' },
  ];
  return (
    <section style={{ background: 'var(--color-bordo)', padding: '48px 0' }}>
      <div className="container" ref={ref}>
        <div className="metricas" style={{ justifyContent: 'space-around', flexWrap: 'wrap', gap: 32 }}>
          {stats.map((s, i) => (
            <div key={i} className="metrica fade-in-up" style={{ transitionDelay: `${i * 80}ms`, alignItems: 'center', textAlign: 'center' }}>
              <span className="metrica__numero" style={{ color: 'var(--color-dourado)', fontSize: 'clamp(36px, 5vw, 56px)' }}>{s.numero}</span>
              <span className="metrica__label" style={{ color: 'var(--color-creme)', fontSize: 15, marginTop: 4 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
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
              Empresa familiar com mais de 30 anos no mercado, a Mangiare nasceu de uma convicção simples: colaborador bem alimentado é colaborador presente, produtivo e orgulhoso da empresa em que trabalha.
            </p>
            <p className="sobre__text">
              Hoje, somos o parceiro de alimentação de escolha para gestores que não aceitam compromisso. Cardápios desenvolvidos por nutricionista, entrega diária em Hot Box e pontualidade que pode ser cronometrada — todos os dias, incluindo fins de semana.
            </p>
            <p className="sobre__text">
              As empresas que confiam na Mangiare sabem que alimentação não é custo operacional. É investimento em gente.
            </p>
            <span className="sobre__badge">30+ anos de experiência</span>
            <div style={{ marginTop: 24 }}>
              <Link to="/quem-somos" className="btn-outline" aria-label="Conheça nossa história">Conheça nossa história →</Link>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoEquipe} alt="Equipe Mangiare Refeições na cozinha industrial" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const ref = useFadeInUp<HTMLDivElement>();
  const passos = [
    { num: '01', icon: 'fa-solid fa-phone', title: 'Entre em contato', text: 'Fale conosco pelo WhatsApp ou preencha o formulário. Nossa equipe responde em até 24 horas com uma proposta personalizada.' },
    { num: '02', icon: 'fa-solid fa-utensils', title: 'Personalizamos o cardápio', text: 'Nossa nutricionista elabora um cardápio equilibrado e variado, adaptado ao perfil e preferências da sua equipe.' },
    { num: '03', icon: 'fa-solid fa-fire', title: 'Preparamos com cuidado', text: 'Cada refeição é produzida diariamente com ingredientes frescos e selecionados, seguindo rigorosos padrões de higiene.' },
    { num: '04', icon: 'fa-solid fa-truck', title: 'Entregamos pontualmente', text: 'Nossa frota própria de Hot Box garante que as refeições chegam na temperatura ideal, no horário combinado, todos os dias.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>COMO FUNCIONA</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Do pedido ao prato, simples assim</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {passos.map((p, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms`, textAlign: 'center', padding: '0 16px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'var(--color-dourado)', marginBottom: 12 }}>{p.num}</div>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(245,185,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className={p.icon} style={{ fontSize: 22, color: 'var(--color-dourado)' }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--color-creme)', marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: '#a0b8b0', fontSize: 15, lineHeight: 1.6 }}>{p.text}</p>
            </div>
          ))}
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
          <p className="servicos__subtitle">Soluções completas em alimentação corporativa para a sua empresa</p>
        </div>
        <div className="servicos__grid servicos__grid--2col">
          <Link to="/solucoes/restaurante-marmitas" className="card-servico-big fade-in-up">
            <div className="card-servico-big__img-wrapper">
              <img src={fotoPrato1} alt="Prato de refeição completa" loading="lazy" width={800} height={600} />
            </div>
            <h3 className="card-servico-big__title">Restaurante & Marmitas</h3>
            <p className="card-servico-big__text">
              Refeições individuais com cardápio variado, preparadas com ingredientes frescos e acompanhamento nutricional.
              Ideal para empresas que buscam praticidade sem abrir mão da qualidade.
            </p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
          <Link to="/solucoes/refeicoes-corporativas" className="card-servico-big fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="card-servico-big__img-wrapper">
              <img src={fotoPrato2} alt="Marmita corporativa" loading="lazy" width={800} height={600} />
            </div>
            <h3 className="card-servico-big__title">Refeições Corporativas</h3>
            <p className="card-servico-big__text">
              Soluções completas para empresas a partir de 50 refeições por pedido. Cardápio por nutricionista,
              entrega em Hot Box e total conformidade com normas de segurança alimentar.
            </p>
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

function BannerCTA() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={fotoCozinha} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} aria-hidden="true" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.75)' }} />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1, padding: '80px var(--container-px)', textAlign: 'center' }}>
        <p className="section-label fade-in-up" style={{ color: 'var(--color-dourado)', marginBottom: 16 }}>CHEGA DE RECLAMAÇÃO DE COMIDA</p>
        <h2 className="section-title fade-in-up" style={{ color: 'var(--color-creme)', marginBottom: 20, transitionDelay: '80ms' }}>
          Sua empresa ainda não oferece esse nível de alimentação?
        </h2>
        <p className="fade-in-up" style={{ color: '#ccc', maxWidth: 600, margin: '0 auto 32px', fontSize: 17, transitionDelay: '160ms' }}>
          Empresas que tratam alimentação como benefício estratégico saem na frente na atração e retenção de talentos. A Mangiare é o passo que faltava — sem burocracia, sem falhas, sem desculpas.
        </p>
        <div className="fade-in-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '240ms' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero fazer parte</a>
          <Link to="/contato" className="btn-outline btn-outline--light">Solicitar Cotação</Link>
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const ref = useFadeInUp<HTMLDivElement>();
  const depoimentos = [
    { nome: 'Ana Paula Ferreira', cargo: 'Gerente de RH — Indústria Têxtil, Joinville', texto: 'Antes da Mangiare, alimentação era meu maior problema na empresa. Reclamação todo dia. Agora, em dois anos, não recebi uma única queixa. As refeições chegam quentes, no horário, e o pessoal fala bem até para quem visita a fábrica.' },
    { nome: 'Carlos Eduardo Matos', cargo: 'Diretor Administrativo — Construtora, região Norte SC', texto: 'Já renovei contrato quatro vezes. Não fico com fornecedor que decepciona. A Mangiare nunca me deu motivo para trocar — mesma qualidade no primeiro dia e no décimo segundo mês. Isso é raro no mercado.' },
    { nome: 'Fernanda Lopes', cargo: 'Supervisora de Operações — Transportadora, Joinville', texto: 'Opero com turnos noturnos e horários atípicos. A Mangiare se adaptou sem reclamar. Já passei por três auditorias de segurança alimentar e nunca tivemos ocorrência. Para mim, isso não tem preço.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>DEPOIMENTOS</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>O que nossos clientes dizem</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          {depoimentos.map((d, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms`, background: '#fff', padding: '32px 28px', borderTop: '4px solid var(--color-dourado)' }}>
              <div style={{ marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star" style={{ color: 'var(--color-dourado)', fontSize: 14, marginRight: 2 }} />)}
              </div>
              <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>"{d.texto}"</p>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-bordo)', fontSize: 16 }}>{d.nome}</p>
                <p style={{ fontSize: 13, color: '#888' }}>{d.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaleriaHome() {
  const ref = useFadeInUp<HTMLDivElement>();
  const fotos = [fotoPrato1, fotoPrato2, fotoPrato3, fotoEquipe];
  const alts = ['Prato completo com arroz, feijão e proteína', 'Marmita executiva Mangiare', 'Refeição balanceada com salada', 'Equipe Mangiare na cozinha'];
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up" style={{ marginBottom: 40 }}>
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>NOSSA COZINHA</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Feito com carinho, servido com orgulho</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 8 }}>
          {fotos.map((foto, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={foto} alt={alts[i]} loading="lazy" width={800} height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 400ms', display: 'block' }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
        <div className="fade-in-up" style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/solucoes/restaurante-marmitas" className="btn-outline btn-outline--light">Ver todos os pratos →</Link>
        </div>
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
          <h2 className="contato__title">Solicite sua proposta — sem compromisso</h2>
          <p className="contato__subtitle">Preencha o formulário e nossa equipe envia uma proposta personalizada em até 24 horas. Simples assim.</p>
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
      <Numeros />
      <SobreResumo />
      <ComoFunciona />
      <ServicosHome />
      <DiferenciaisSection />
      <BannerCTA />
      <Depoimentos />
      <GaleriaHome />
      <ClientesSection />
      <FormularioContato />
    </>
  );
}
