import { useState, useEffect } from 'react';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import PageHero from '../components/PageHero';
import fotoPrato1 from '../assets/foto-prato-1.jpg';
import fotoPrato2 from '../assets/foto-prato-2.jpg';
import fotoPrato3 from '../assets/foto-prato-3.jpg';
import fotoPrato4 from '../assets/foto-prato-4.jpg';
import fotoPrato5 from '../assets/foto-prato-5.jpg';
import fotoPrato6 from '../assets/foto-prato-6.jpg';
import fotoPreparo from '../assets/foto-preparo.jpg';
import fotoCozinha from '../assets/foto-cozinha.jpg';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';
const fotos = [fotoPrato1, fotoPrato2, fotoPrato3, fotoPrato4, fotoPrato5, fotoPrato6];
const fotosAlt = [
  'Prato com arroz, feijão, frango e salada',
  'Marmita executiva com bife, arroz e legumes',
  'Peixe grelhado com arroz e salada',
  'Feijoada com arroz e couve',
  'Macarrão ao molho de tomate',
  'Frango grelhado com arroz e vegetais',
];

function Descricao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <h2 className="sobre__title">A marmita que faz o colaborador querer chegar na hora do almoço</h2>
            <p className="sobre__text">
              Cada refeição é preparada no dia, com ingredientes comprados frescos toda manhã. O cardápio muda diariamente — desenvolvido por nutricionista para equilibrar nutrição e sabor — porque ninguém merece comer a mesma coisa toda semana.
            </p>
            <p className="sobre__text">
              Atendemos empresas a partir de 50 marmitas por pedido, entregues em Hot Box com temperatura controlada. Quando a marmita chega à empresa, ela ainda está quente como saiu da cozinha. Isso não é sorte — é processo.
            </p>
            <p className="sobre__text">
              Proteína do dia, arroz, feijão, salada fresca e guarnição. Opções de frango, carne, peixe e vegetariano alternados ao longo da semana. Comida de verdade, não comida de bandeja.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoPreparo} alt="Preparo de marmitas na cozinha Mangiare" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OQueInclui() {
  const ref = useFadeInUp<HTMLDivElement>();
  const componentes = [
    { icon: 'fa-solid fa-drumstick-bite', titulo: 'Proteína principal', descricao: 'Frango, carne bovina, peixe ou opção vegetariana — rodízio semanal para variar o cardápio e atender diferentes preferências.' },
    { icon: 'fa-solid fa-bowl-rice', titulo: 'Arroz e feijão', descricao: 'Dupla clássica da culinária brasileira, preparada diariamente com temperos naturais e sem conservantes.' },
    { icon: 'fa-solid fa-carrot', titulo: 'Guarnição do dia', descricao: 'Macarrão, polenta, farofa, purê ou legumes refogados — a guarnição muda diariamente para surpreender.' },
    { icon: 'fa-solid fa-leaf', titulo: 'Salada fresca', descricao: 'Folhas verdes, tomate, pepino e outros vegetais da estação, temperados na hora da montagem para máxima frescura.' },
    { icon: 'fa-solid fa-lemon', titulo: 'Sobremesa inclusa', descricao: 'Fruta da estação ou sobremesa caseira acompanha algumas modalidades. Consulte disponibilidade para o seu pedido.' },
    { icon: 'fa-solid fa-bottle-water', titulo: 'Embalagem adequada', descricao: 'Marmitas seladas em embalagens térmicas que mantêm a temperatura e preservam a qualidade até o consumo.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>COMPOSIÇÃO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>O que vem em cada marmita</h2>
        </div>
        <div className="diferenciais__grid" style={{ marginTop: 48 }}>
          {componentes.map((c, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: 'rgba(255,255,255,0.06)', padding: '28px 24px', borderLeft: '3px solid var(--color-dourado)' }}>
              <i className={c.icon} style={{ fontSize: 26, color: 'var(--color-dourado)', marginBottom: 14, display: 'block' }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 18, marginBottom: 10 }}>{c.titulo}</h3>
              <p style={{ color: '#a0b8b0', fontSize: 14, lineHeight: 1.7 }}>{c.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <h2 className="section-title fade-in-up" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Nossos Pratos</h2>
        <div className="galeria__grid">
          {fotos.map((foto, i) => (
            <div key={i} className="galeria__item fade-in-up" style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)} role="button" tabIndex={0} aria-label={`Ver ${fotosAlt[i]}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}>
              <img src={foto} alt={fotosAlt[i]} loading="lazy" width={800} height={600} />
            </div>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Fechar">
              <i className="fa-solid fa-xmark" />
            </button>
            <button className="lightbox__prev" onClick={() => setLightbox((lightbox - 1 + 6) % 6)} aria-label="Anterior">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <div className="lightbox__img">
              <img src={fotos[lightbox]} alt={fotosAlt[lightbox]} />
            </div>
            <button className="lightbox__next" onClick={() => setLightbox((lightbox + 1) % 6)} aria-label="Próxima">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function NossaProducao() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-preto)', padding: 'var(--space-section-y) 0', position: 'relative', overflow: 'hidden' }}>
      <img src={fotoCozinha} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} aria-hidden="true" />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <p className="section-label" style={{ color: 'var(--color-dourado)', marginBottom: 12 }}>NOSSA COZINHA</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 'clamp(26px, 3.5vw, 36px)', marginBottom: 20 }}>
              Do frescor dos ingredientes ao prato do seu colaborador
            </h2>
            <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: 16 }}>
              Toda manhã, nossa equipe chega cedo para começar o preparo. Ingredientes frescos são higienizados,
              cortados e cozinhados com os temperos artesanais que são a assinatura da Mangiare há mais de 30 anos.
            </p>
            <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: 24 }}>
              Antes de cada entrega, a nutricionista verifica temperatura, aparência e apresentação de cada lote.
              Só depois de aprovado, o pedido é montado nas Hot Boxes e enviado para a sua empresa.
            </p>
            <ul style={{ listStyle: 'none' }}>
              {['Ingredientes comprados diariamente', 'Produção no dia do consumo', 'Controle de temperatura em todas as etapas', 'Aprovação da nutricionista antes de cada entrega'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-creme)', fontSize: 15, marginBottom: 10 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-dourado)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoPreparo} alt="Preparo de marmitas na cozinha Mangiare" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoPedir() {
  const ref = useFadeInUp<HTMLDivElement>();
  const passos = [
    { icon: 'fa-solid fa-phone', titulo: 'Entre em contato', texto: 'Fale pelo WhatsApp ou preencha o formulário com o número de refeições e seus dados de contato.' },
    { icon: 'fa-solid fa-handshake', titulo: 'Receba a proposta', texto: 'Nossa equipe envia uma proposta personalizada em até 24 horas, com cardápio e valores.' },
    { icon: 'fa-solid fa-calendar', titulo: 'Agende a entrega', texto: 'Definimos os horários e a frequência das entregas conforme a rotina da sua empresa.' },
    { icon: 'fa-solid fa-star', titulo: 'Aproveite!', texto: 'Receba refeições quentes e saborosas todos os dias, no horário combinado, com total pontualidade.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>SIMPLES ASSIM</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Como pedir suas marmitas</h2>
        </div>
        <div className="servicos__grid servicos__grid--4col" style={{ marginTop: 48 }}>
          {passos.map((p, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-bordo)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <i className={p.icon} style={{ fontSize: 24, color: '#fff' }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-bordo)', fontSize: 18, marginBottom: 10 }}>{p.titulo}</h3>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const ref = useFadeInUp<HTMLDivElement>();
  const depoimentos = [
    { nome: 'Rodrigo Alves', cargo: 'Sócio — Metalúrgica, Joinville', texto: 'Antes eu tinha cozinheira, mas lidava com falta, reclamação de cardápio e problema de vigilância sanitária. Troquei para a Mangiare há 3 anos. Nunca mais perdi tempo com isso. Economizo na conta e duermo melhor.' },
    { nome: 'Mariana Costa', cargo: 'Gerente de Produção — Fábrica de Plásticos, SC', texto: 'Minha equipe do segundo turno sempre reclamava de comida fria e sem gosto. Dois meses depois da Mangiare, as reclamações sumiram e o pessoal começou a comentar da comida positivamente. Pareceu besteira, mas mudou o clima da fábrica.' },
    { nome: 'Luiz Henrique', cargo: 'Administrador — Galpão Logístico, Joinville', texto: 'Nosso volume de colaboradores varia muito semana a semana. A Mangiare se adapta sem drama. Já cancelei pedido de última hora por causa de operação e eles resolveram. Isso é parceria de verdade.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>DEPOIMENTOS</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Quem já pediu, aprovou</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          {depoimentos.map((d, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms`, background: 'rgba(255,255,255,0.06)', padding: '32px 28px', borderTop: '4px solid var(--color-dourado)' }}>
              <div style={{ marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star" style={{ color: 'var(--color-dourado)', fontSize: 13, marginRight: 2 }} />)}
              </div>
              <p style={{ fontStyle: 'italic', color: '#c0d0c8', lineHeight: 1.7, marginBottom: 20, fontSize: 15 }}>"{d.texto}"</p>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--color-dourado)', fontSize: 15 }}>{d.nome}</p>
                <p style={{ fontSize: 13, color: '#a0b8b0' }}>{d.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="contato" style={{ textAlign: 'center' }}>
      <div className="container" ref={ref}>
        <h2 className="contato__title fade-in-up">Pronto para acabar com as reclamações de comida?</h2>
        <p className="contato__subtitle fade-in-up" style={{ transitionDelay: '80ms' }}>
          Fale pelo WhatsApp agora e receba uma proposta personalizada em minutos. Sem burocracia, sem enrolação.
        </p>
        <div className="fade-in-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '160ms' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="WhatsApp Mangiare">
            Falar no WhatsApp
          </a>
          <a href="mailto:contato@mangiarefeicoes.com.br" className="btn-outline btn-outline--light">
            Enviar por E-mail
          </a>
        </div>
      </div>
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
      <OQueInclui />
      <Galeria />
      <NossaProducao />
      <ComoPedir />
      <Depoimentos />
      <CTA />
    </>
  );
}
