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
        <h1 className="hero__tagline">Excelência em alimentação corporativa.</h1>
        <p className="hero__subtitle">Cardápios nutritivos, pontualidade rigorosa e a confiança das maiores empresas de Joinville.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Solicitar cotação via WhatsApp">
          Pedir Cotação
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
              Empresa familiar com mais de 30 anos no mercado, a Mangiare nasceu de uma convicção simples: colaborador bem alimentado é colaborador presente, produtivo e orgulhoso da empresa em que trabalha.
            </p>
            <p className="sobre__text">
              Somos parceiros de empresas que buscam comida de verdade, caseira, e não industrializada. Cardápios desenvolvidos por nutricionista, entrega diária em Hot Box e pontualidade que pode ser cronometrada — todos os dias, incluindo fins de semana.
            </p>
            <p className="sobre__text">
              As empresas que confiam na Mangiare sabem que alimentação não é custo operacional. É investimento em pessoas.
            </p>
            <span className="sobre__badge">30+ anos de experiência</span>
            <div className="sobre__actions">
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
    <section className="como-funciona">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">COMO FUNCIONA</p>
          <h2 className="section-title section-title--creme">Do pedido ao prato, simples assim</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {passos.map((p, i) => (
            <div key={i} className="como-funciona__step fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="como-funciona__num">{p.num}</div>
              <div className="como-funciona__icon-wrap">
                <i className={p.icon} />
              </div>
              <h3 className="como-funciona__title">{p.title}</h3>
              <p className="como-funciona__text">{p.text}</p>
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
              Almoce no nosso restaurante, peça marmitas avulsas pelo WhatsApp ou monte um pacote personalizado para a sua semana.
              Comida feita no dia, com ingredientes frescos, para quem quer comer bem sem complicação.
            </p>
            <span className="card-servico-big__link">Saiba mais →</span>
          </Link>
          <Link to="/solucoes/refeicoes-corporativas" className="card-servico-big fade-in-up" style={{ transitionDelay: '100ms' }}>
            <div className="card-servico-big__img-wrapper">
              <img src={fotoPrato2} alt="Marmita corporativa" loading="lazy" width={800} height={600} />
            </div>
            <h3 className="card-servico-big__title">Refeições Corporativas</h3>
            <p className="card-servico-big__text">
              Soluções completas para empresas a partir de 30 refeições por pedido. Cardápio por nutricionista,
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
    <section className="banner-cta">
      <img src={fotoCozinha} alt="" className="banner-cta__bg" aria-hidden="true" />
      <div className="banner-cta__overlay" />
      <div className="container" ref={ref}>
        <div className="banner-cta__content">
          <p className="section-label banner-cta__label fade-in-up">CHEGA DE RECLAMAÇÃO DE COMIDA</p>
          <h2 className="section-title banner-cta__title fade-in-up" style={{ transitionDelay: '80ms' }}>
            Sua empresa ainda não oferece esse nível de alimentação?
          </h2>
          <p className="banner-cta__text fade-in-up" style={{ transitionDelay: '160ms' }}>
            Empresas que tratam alimentação como benefício estratégico saem na frente na atração e retenção de talentos. A Mangiare é o passo que faltava — sem burocracia.
          </p>
          <div className="btn-group fade-in-up" style={{ transitionDelay: '240ms' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero fazer parte</a>
            <Link to="/contato" className="btn-outline btn-outline--light">Solicitar Cotação</Link>
          </div>
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
    <section className="section--creme">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--bordo">DEPOIMENTOS</p>
          <h2 className="section-title section-title--verde">O que nossos clientes dizem</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          {depoimentos.map((d, i) => (
            <div key={i} className="card-depoimento fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="card-depoimento__stars">
                {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star" />)}
              </div>
              <p className="card-depoimento__texto">"{d.texto}"</p>
              <div>
                <p className="card-depoimento__nome">{d.nome}</p>
                <p className="card-depoimento__cargo">{d.cargo}</p>
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
    <section className="section--preto">
      <div className="container" ref={ref}>
        <div className="section__header fade-in-up">
          <p className="section-label section-label--dourado">NOSSA COZINHA</p>
          <h2 className="section-title section-title--creme">Feito com carinho, servido com orgulho</h2>
        </div>
        <div className="galeria-home__grid">
          {fotos.map((foto, i) => (
            <div key={i} className="galeria-home__item fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <img src={foto} alt={alts[i]} loading="lazy" width={800} height={600} />
            </div>
          ))}
        </div>
        <div className="galeria-home__footer fade-in-up">
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
            <div className="contato__items-wrap">
              <a href="tel:+5547996266842" className="contato__item" aria-label="Ligar para Mangiare">
                <span className="contato__icon"><i className="fa-solid fa-phone" /></span><span className="contato__info">(47) 99626-6842</span>
              </a>
              <a href="mailto:contato@mangiarefeicoes.com.br" className="contato__item" aria-label="E-mail Mangiare">
                <span className="contato__icon"><i className="fa-solid fa-envelope" /></span><span className="contato__info">contato@mangiarefeicoes.com.br</span>
              </a>
              <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" className="contato__item" aria-label="Instagram Mangiare">
                <span className="contato__icon"><i className="fa-brands fa-instagram" /></span><span className="contato__info">@mangiare.refeicoes</span>
              </a>
              <div className="contato__item">
                <span className="contato__icon"><i className="fa-solid fa-location-dot" /></span><span className="contato__info">R. Luísa Deranhóli Koschnik, 731 - Aventureiro, Joinville - SC, 89225-570</span>
              </div>
            </div>
            <div className="contato__map">
              <iframe
                src="https://maps.google.com/maps?q=R.+Minas+Gerais,+5300,+Morro+do+Meio,+Joinville,+SC,+Brasil&output=embed&hl=pt-BR&z=16"
                title="Localização Mangiare Refeições"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
