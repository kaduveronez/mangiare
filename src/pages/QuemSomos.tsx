import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoEquipe from '../assets/foto-equipe.jpg';
import fotoCozinha from '../assets/foto-cozinha.jpg';
import fotoPreparo from '../assets/foto-preparo.jpg';
import fotoEntrega from '../assets/foto-entrega.jpg';
import logoCreme from '../assets/logo-creme-watermark.png';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function Historia() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container">
        <div className="sobre__grid" ref={ref}>
          <div className="fade-in-up">
            <p className="sobre__welcome">Conheça a história da</p>
            <h2 className="sobre__title">Mangiare Refeições</h2>
            <p className="sobre__text">
              Trinta anos atrás, a Mangiare nasceu de uma família que acreditava que comida boa é um direito, não um luxo. Começamos pequenos, com uma cozinha, muito cuidado e a convicção de que nenhum trabalhador merecia chegar ao almoço para encontrar comida fria, sem sabor ou duvidosa.
            </p>
            <p className="sobre__text">
              Esse princípio não mudou. O que mudou foi a escala: hoje entregamos centenas de refeições por dia para empresas de Joinville e região, com a mesma atenção ao detalhe que caracterizava cada prato nos primeiros anos.
            </p>
            <p className="sobre__text">
              Somos uma referência não porque nos autoproclamamos — mas porque clientes renovam contrato ano após ano. Porque gestores de RH nos indicam para outros gestores. Porque colaboradores sentem a diferença no prato.
            </p>
            <span className="sobre__badge">30+ anos de experiência</span>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoEquipe} alt="Equipe Mangiare Refeições na cozinha industrial" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useFadeInUp<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const marcos = [
    { ano: '1993', titulo: 'O início de tudo', descricao: 'A Mangiare nasce de uma cozinha familiar em Joinville, com o sonho de levar comida de verdade para os trabalhadores da cidade.' },
    { ano: '2000', titulo: 'Primeiros contratos corporativos', descricao: 'A empresa firma seus primeiros contratos com indústrias locais, marcando a transição para o atendimento corporativo de médio porte.' },
    { ano: '2008', titulo: 'Modernização da cozinha', descricao: 'Investimento em equipamentos industriais de ponta e implementação de rigoroso sistema de controle de qualidade alimentar.' },
    { ano: '2015', titulo: 'Contratação de nutricionista', descricao: 'Passa a contar com nutricionista dedicada ao desenvolvimento de cardápios, elevando o padrão nutricional de todas as refeições.' },
    { ano: '2020', titulo: 'Expansão regional', descricao: 'Amplia a área de atendimento para municípios vizinhos, investindo em frota própria de Hot Box para garantir qualidade na entrega.' },
    { ano: 'Hoje', titulo: 'Referência em SC', descricao: 'Reconhecida como referência em refeições transportadas no norte de Santa Catarina, com mais de 500 refeições entregues diariamente.' },
  ];

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => { el.removeEventListener('scroll', checkScroll); window.removeEventListener('resize', checkScroll); };
  }, []);

  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0', overflow: 'hidden' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>NOSSA TRAJETÓRIA</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>30 anos escrevendo história</h2>
        </div>

        <div style={{ position: 'relative', marginTop: 48 }}>
          {/* Setas de navegação */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 16 }}>
            <button onClick={() => scroll('left')} aria-label="Anterior" disabled={!canScrollLeft} style={{ width: 40, height: 40, background: canScrollLeft ? 'var(--color-dourado)' : 'rgba(245,185,53,0.3)', color: 'var(--color-preto)', border: 'none', cursor: canScrollLeft ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, transition: 'background 0.2s' }}>
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Próximo" disabled={!canScrollRight} style={{ width: 40, height: 40, background: canScrollRight ? 'var(--color-dourado)' : 'rgba(245,185,53,0.3)', color: 'var(--color-preto)', border: 'none', cursor: canScrollRight ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, transition: 'background 0.2s' }}>
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>

          {/* Linha horizontal */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 28, left: 0, right: 0, height: 2, background: 'rgba(245,185,53,0.25)' }} aria-hidden="true" />

            {/* Carrossel */}
            <div ref={scrollRef} style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', paddingBottom: 8, WebkitOverflowScrolling: 'touch' }} className="timeline-carousel">
              {marcos.map((m, i) => (
                <div key={i} className="fade-in-up timeline-carousel__card" style={{ transitionDelay: `${i * 80}ms`, scrollSnapAlign: 'start', paddingTop: 48, position: 'relative' }}>
                  {/* Ponto na linha */}
                  <div style={{ position: 'absolute', top: 20, left: 24, width: 18, height: 18, background: 'var(--color-dourado)', border: '3px solid var(--color-verde)', boxSizing: 'border-box' }} />
                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '28px 24px', borderBottom: '3px solid var(--color-dourado)', height: '100%' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: 'var(--color-dourado)' }}>{m.ano}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 20, margin: '8px 0 10px' }}>{m.titulo}</h3>
                    <p style={{ color: '#a0b8b0', fontSize: 15, lineHeight: 1.6 }}>{m.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Missao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="missao">
      <div className="missao__content" ref={ref}>
        <div className="missao__watermark" aria-hidden="true">M</div>
        <div className="fade-in-up">
          <p className="missao__label">MISSÃO</p>
          <div className="missao__line" />
          <p className="missao__text">
            Nossa missão é ser a cozinha industrial de referência no setor de refeições transportadas na região norte de Santa Catarina,
            proporcionando alimentação saudável, saborosa e segura para os colaboradores das empresas que confiam em nós.
          </p>
        </div>
      </div>
      <div className="missao__photos">
        <div className="missao__photo">
          <img src={fotoCozinha} alt="Cozinha industrial Mangiare" loading="lazy" width={960} height={720} />
        </div>
        <div className="missao__photo">
          <img src={fotoPreparo} alt="Preparo de refeições" loading="lazy" width={960} height={720} />
        </div>
        <div className="missao__photo">
          <img src={fotoEntrega} alt="Entrega de refeições em Hot Box" loading="lazy" width={960} height={720} />
        </div>
      </div>
    </section>
  );
}

function MVV() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>IDENTIDADE</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Missão, Visão e Valores</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          <div className="fade-in-up" style={{ background: 'var(--color-bordo)', padding: '40px 32px', color: 'var(--color-creme)' }}>
            <i className="fa-solid fa-bullseye" style={{ fontSize: 32, marginBottom: 16, display: 'block' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 16 }}>Missão</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.9, fontSize: 15 }}>
              Nutrir pessoas com refeições saborosas, seguras e nutritivas, sendo o parceiro alimentar de confiança das empresas do norte de Santa Catarina.
            </p>
          </div>
          <div className="fade-in-up" style={{ background: 'var(--color-verde)', padding: '40px 32px', color: 'var(--color-creme)', transitionDelay: '100ms' }}>
            <i className="fa-solid fa-eye" style={{ fontSize: 32, marginBottom: 16, display: 'block' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 16 }}>Visão</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.9, fontSize: 15 }}>
              Ser reconhecida como a principal referência em refeições transportadas da região, expandindo nossa atuação com qualidade, inovação e responsabilidade alimentar.
            </p>
          </div>
          <div className="fade-in-up" style={{ background: '#2C1810', padding: '40px 32px', color: 'var(--color-creme)', transitionDelay: '200ms' }}>
            <i className="fa-solid fa-gem" style={{ fontSize: 32, marginBottom: 16, display: 'block' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 16 }}>Valores</h3>
            <ul style={{ lineHeight: 1.9, opacity: 0.9, fontSize: 15 }}>
              <li>• Qualidade sem compromisso</li>
              <li>• Pontualidade como compromisso</li>
              <li>• Segurança alimentar acima de tudo</li>
              <li>• Respeito às pessoas e ao alimento</li>
              <li>• Transparência com clientes e parceiros</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Valores() {
  const ref = useFadeInUp<HTMLDivElement>();
  const valores = [
    { icon: 'fa-solid fa-award', title: 'Qualidade', text: 'Ingredientes selecionados e preparo artesanal em cada refeição. Nossos cardápios são desenvolvidos por nutricionista, garantindo equilíbrio nutricional e sabor em todos os pratos.' },
    { icon: 'fa-solid fa-clock', title: 'Pontualidade', text: 'Entregas no horário certo, todos os dias, incluindo fins de semana e feriados. Nossa frota própria e motoristas capacitados asseguram que as refeições chegam sempre no momento combinado.' },
    { icon: 'fa-solid fa-shield-halved', title: 'Segurança Alimentar', text: 'Rigorosas práticas de higiene e controle de qualidade supervisionadas por nutricionista. Seguimos todas as normas sanitárias e realizamos visitas quinzenais de acompanhamento.' },
    { icon: 'fa-solid fa-heart', title: 'Carinho', text: 'Cada refeição é preparada como se fosse para nossa própria família. O carinho no preparo e no atendimento é o que nos diferencia há mais de 30 anos.' },
    { icon: 'fa-solid fa-handshake', title: 'Parceria', text: 'Tratamos nossos clientes como parceiros de longo prazo. Nos adaptamos às suas necessidades, horários e preferências para construir uma relação duradoura.' },
    { icon: 'fa-solid fa-leaf', title: 'Responsabilidade', text: 'Comprometidos com o meio ambiente, priorizamos fornecedores locais, reduzimos desperdícios e utilizamos embalagens adequadas para um impacto mínimo no planeta.' },
  ];
  return (
    <section className="diferenciais">
      <img src={logoCreme} alt="" className="diferenciais__watermark" aria-hidden="true" />
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label diferenciais__label">NOSSOS VALORES</p>
          <h2 className="section-title diferenciais__title">O que nos guia todo dia</h2>
        </div>
        <div className="diferenciais__grid">
          {valores.map((v, i) => (
            <div key={i} className="card-diferencial fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div style={{ marginBottom: 14 }}>
                <i className={v.icon} style={{ fontSize: 28, color: 'var(--color-dourado)' }} />
              </div>
              <h3 className="card-diferencial__title">{v.title}</h3>
              <p className="card-diferencial__text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificacoes() {
  const ref = useFadeInUp<HTMLDivElement>();
  const selos = [
    { icon: 'fa-solid fa-certificate', titulo: 'Vigilância Sanitária', descricao: 'Regularizada junto à ANVISA e Vigilância Sanitária Municipal de Joinville.' },
    { icon: 'fa-solid fa-user-nurse', titulo: 'Nutricionista CRN', descricao: 'Cardápios desenvolvidos e supervisionados por nutricionista registrada no CRN.' },
    { icon: 'fa-solid fa-thermometer', titulo: 'Controle de Temperatura', descricao: 'Monitoramento contínuo de temperatura em todas as etapas de produção e transporte.' },
    { icon: 'fa-solid fa-broom', titulo: 'BPF Certificado', descricao: 'Adoção das Boas Práticas de Fabricação em toda a cadeia produtiva.' },
  ];
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>CONFORMIDADE</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Segurança e certificações</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {selos.map((s, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, textAlign: 'center', padding: '32px 20px', background: 'rgba(255,255,255,0.04)', borderBottom: '3px solid var(--color-dourado)' }}>
              <i className={s.icon} style={{ fontSize: 36, color: 'var(--color-dourado)', marginBottom: 16, display: 'block' }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 10 }}>{s.titulo}</h3>
              <p style={{ color: '#999', fontSize: 14, lineHeight: 1.6 }}>{s.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAQuemSomos() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-dourado)', padding: '64px 0', textAlign: 'center' }}>
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ color: 'var(--color-preto)', marginBottom: 16 }}>
          Pronto para fazer parte das empresas que levam alimentação a sério?
        </h2>
        <p className="fade-in-up" style={{ color: '#333', fontSize: 17, maxWidth: 560, margin: '0 auto 32px', transitionDelay: '80ms' }}>
          Agora que você conhece nossa história, descubra qual solução faz mais sentido para o porte e as necessidades da sua empresa.
        </p>
        <div className="fade-in-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '160ms' }}>
          <Link to="/solucoes" className="btn-primary" style={{ background: 'var(--color-bordo)', color: '#fff' }}>Ver Soluções</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: 'var(--color-bordo)', color: 'var(--color-bordo)' }}>Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default function QuemSomos() {
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
      <PageHero title="Quem Somos" variant="bordo" />
      <Historia />
      <Timeline />
      <Missao />
      <MVV />
      <Valores />
      <Certificacoes />
      <CTAQuemSomos />
    </>
  );
}
