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
import fotoRefeitorio1 from '../assets/foto-refeitorio-1.jpg';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+restaurante+e+marmitas+da+Mangiare.';
const fotos = [fotoPrato1, fotoPrato2, fotoPrato3, fotoPrato4, fotoPrato5, fotoPrato6];
const fotosAlt = [
  'Prato com arroz, feijão, frango e salada',
  'Marmita executiva com bife, arroz e legumes',
  'Peixe grelhado com arroz e salada',
  'Feijoada com arroz e couve',
  'Macarrão ao molho de tomate',
  'Frango grelhado com arroz e vegetais',
];

function Intro() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section className="sobre">
      <div className="container" ref={ref}>
        <div className="sobre__grid">
          <div className="fade-in-up">
            <p className="section-label" style={{ color: 'var(--color-bordo)', marginBottom: 12 }}>RESTAURANTE & MARMITAS</p>
            <h2 className="sobre__title">Três jeitos de comer bem todos os dias</h2>
            <p className="sobre__text">
              A mesma cozinha que abastece grandes empresas há mais de 30 anos também abre as portas para você. Seja almoçando no nosso refeitório, pedindo uma marmita avulsa para o trabalho ou montando um pacote mensal sob medida — a comida é sempre a mesma: feita no dia, com ingredientes frescos e tempero de quem cozinha de verdade.
            </p>
            <p className="sobre__text">
              <strong>Restaurante</strong> para quem está por perto e quer almoçar sem pressa. <strong>Marmitas avulsas</strong> para quem prefere comer no escritório ou em casa. <strong>Pacotes personalizados</strong> para quem quer organizar a semana inteira sem ter que pensar.
            </p>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoRefeitorio1} alt="Refeitório Mangiare aberto ao público" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TresModalidades() {
  const ref = useFadeInUp<HTMLDivElement>();
  const modalidades = [
    {
      icon: 'fa-solid fa-utensils',
      titulo: 'Restaurante',
      subtitulo: 'Almoce no nosso refeitório',
      descricao: 'Nosso refeitório é aberto ao público de segunda a sexta, no horário do almoço. Cardápio do dia com proteína à escolha, arroz, feijão, guarnições, saladas variadas e sobremesa. Ambiente tranquilo, atendimento rápido e a mesma comida que servimos para nossos clientes corporativos.',
      bullets: ['Aberto de seg a sex, das 11h às 14h', 'Self-service com cardápio do dia', 'Sobremesa e suco inclusos', 'Estacionamento no local'],
      cta: 'Ver cardápio do dia',
    },
    {
      icon: 'fa-solid fa-box',
      titulo: 'Marmitas avulsas',
      subtitulo: 'Peça quantas quiser, quando quiser',
      descricao: 'Sem fidelidade, sem mínimo de pedido alto. Peça 1, 5 ou 20 marmitas para retirar ou receber em casa/no trabalho. Ideal para quem trabalha em home office, equipes pequenas, eventos pontuais ou para quem só quer matar a saudade de comida caseira no meio da semana.',
      bullets: ['Sem fidelidade — peça quando quiser', 'Retirada no local ou entrega', 'Embalagem térmica que mantém o calor', 'Pedido pelo WhatsApp até 10h do dia'],
      cta: 'Pedir marmita avulsa',
    },
    {
      icon: 'fa-solid fa-calendar-check',
      titulo: 'Pacotes personalizados',
      subtitulo: 'Monte sua rotina semanal ou mensal',
      descricao: 'A solução para quem quer comer bem todo dia sem precisar pensar. Monte um pacote do seu jeito: quantas marmitas por semana, quais dias, com ou sem proteína específica, restrições alimentares atendidas. Pague no fechamento, receba sempre no horário combinado.',
      bullets: ['Frequência sob medida (3x, 5x semana, etc)', 'Desconto progressivo por volume', 'Cardápio adaptável a restrições', 'Faturamento mensal facilitado'],
      cta: 'Montar meu pacote',
    },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>NOSSAS MODALIDADES</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Escolha como prefere comer</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          {modalidades.map((m, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 100}ms`, background: '#fff', padding: '36px 28px', borderTop: '4px solid var(--color-bordo)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 64, height: 64, background: 'var(--color-bordo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <i className={m.icon} style={{ fontSize: 26, color: 'var(--color-creme)' }} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-bordo)', fontSize: 24, marginBottom: 6 }}>{m.titulo}</h3>
              <p style={{ color: 'var(--color-verde)', fontSize: 14, fontWeight: 600, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5 }}>{m.subtitulo}</p>
              <p style={{ color: '#2C1810', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{m.descricao}</p>
              <ul style={{ listStyle: 'none', marginBottom: 24, flexGrow: 1 }}>
                {m.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#2C1810', fontSize: 14, marginBottom: 8 }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-bordo)', flexShrink: 0, marginTop: 4 }} />
                    {b}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center', display: 'block' }}>
                {m.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OQueInclui() {
  const ref = useFadeInUp<HTMLDivElement>();
  const componentes = [
    { icon: 'fa-solid fa-drumstick-bite', titulo: 'Proteína do dia', descricao: 'Frango, carne bovina, peixe ou opção vegetariana — rodízio variado ao longo da semana, sempre fresco e bem temperado.' },
    { icon: 'fa-solid fa-bowl-rice', titulo: 'Arroz e feijão', descricao: 'A dupla clássica brasileira preparada todos os dias, com tempero artesanal da casa, sem conservantes.' },
    { icon: 'fa-solid fa-carrot', titulo: 'Guarnição variada', descricao: 'Massas, polentas, farofas, purês, legumes refogados — guarnição diferente todos os dias para nunca enjoar.' },
    { icon: 'fa-solid fa-leaf', titulo: 'Salada fresca', descricao: 'Folhas, tomate, pepino, cenoura e vegetais da estação, montados na hora para garantir o frescor e a crocância.' },
    { icon: 'fa-solid fa-lemon', titulo: 'Sobremesa', descricao: 'Fruta da estação ou doce caseiro acompanha o cardápio — varia conforme a modalidade escolhida.' },
    { icon: 'fa-solid fa-wheat-awn-circle-exclamation', titulo: 'Restrições alimentares', descricao: 'Atendemos pedidos sem glúten, sem lactose, vegetarianos e vegano. Avise no pedido que adaptamos pra você.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>O CARDÁPIO</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>O que tem no seu prato</h2>
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
              A mesma cozinha que serve indústrias serve você
            </h2>
            <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: 16 }}>
              Não importa se você é um colaborador almoçando no nosso refeitório, alguém pedindo uma marmita avulsa ou uma família que assina pacote semanal — a comida sai da mesma cozinha, feita pelas mesmas mãos, com os mesmos ingredientes frescos comprados toda manhã.
            </p>
            <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: 24 }}>
              Nossa nutricionista assina o cardápio e acompanha cada etapa: da escolha dos fornecedores ao controle de temperatura no momento da entrega. É esse cuidado que nos rendeu a confiança de empresas há três décadas — e é o mesmo cuidado que você prova em cada prato.
            </p>
            <ul style={{ listStyle: 'none' }}>
              {['Ingredientes frescos comprados todo dia', 'Produção no mesmo dia do consumo', 'Controle de temperatura em todas as etapas', 'Cardápio assinado por nutricionista'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-creme)', fontSize: 15, marginBottom: 10 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-dourado)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: '100ms' }}>
            <img src={fotoPreparo} alt="Preparo de refeições na cozinha Mangiare" className="sobre__image" loading="lazy" width={960} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoPedir() {
  const ref = useFadeInUp<HTMLDivElement>();
  const passos = [
    { icon: 'fa-solid fa-comments', titulo: 'Fale com a gente', texto: 'Mande mensagem no WhatsApp dizendo qual modalidade interessa: almoço no restaurante, marmita avulsa ou pacote personalizado.' },
    { icon: 'fa-solid fa-list-check', titulo: 'Combine o pedido', texto: 'Para marmitas e pacotes, definimos quantidades, dias, restrições alimentares e endereço de entrega ou retirada.' },
    { icon: 'fa-solid fa-truck', titulo: 'Receba ou retire', texto: 'Marmitas saem quentes, em embalagem térmica. Para pacotes, entrega no horário combinado todos os dias da semana.' },
    { icon: 'fa-solid fa-utensils', titulo: 'Bom apetite!', texto: 'Comida fresca, no ponto, com aquele sabor de refeição feita por quem gosta de cozinhar. Simples assim.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>SIMPLES ASSIM</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>Como pedir</h2>
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
    { nome: 'Camila Souza', cargo: 'Cliente do restaurante — Joinville', texto: 'Trabalho perto e almoço no refeitório da Mangiare quase todo dia. Comida gostosa, atendimento rápido e nunca enjoa porque o cardápio muda. É como almoçar na casa de uma tia que cozinha bem.' },
    { nome: 'Eduardo Martins', cargo: 'Pacote semanal de marmitas', texto: 'Faço home office e contratei o pacote de 5 marmitas por semana. Chegam sempre no horário, ainda quentes. Resolveu meu almoço sem precisar parar pra cozinhar ou pedir delivery caro todo dia.' },
    { nome: 'Patrícia Lemos', cargo: 'Marmita avulsa para evento', texto: 'Precisei de 30 marmitas para uma confraternização da empresa em cima da hora. A Mangiare resolveu em 2 dias, com cardápio especial e tudo entregue no horário. Salvou o evento.' },
  ];
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-dourado)' }}>DEPOIMENTOS</p>
          <h2 className="section-title" style={{ color: 'var(--color-creme)' }}>Quem prova, volta</h2>
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
        <h2 className="contato__title fade-in-up">Bateu fome? Fala com a gente</h2>
        <p className="contato__subtitle fade-in-up" style={{ transitionDelay: '80ms' }}>
          Restaurante, marmita avulsa ou pacote personalizado — escolha como prefere e mande mensagem agora. Resposta rápida pelo WhatsApp.
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
      <Intro />
      <TresModalidades />
      <OQueInclui />
      <Galeria />
      <NossaProducao />
      <ComoPedir />
      <Depoimentos />
      <CTA />
    </>
  );
}
