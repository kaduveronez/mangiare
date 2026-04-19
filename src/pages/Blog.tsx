import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useFadeInUp } from '../hooks/useIntersectionObserver';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

function PostDestaque() {
  const ref = useFadeInUp<HTMLDivElement>();
  const post = BLOG_POSTS[0];
  if (!post) return null;
  return (
    <section style={{ background: 'var(--color-verde)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <p className="section-label fade-in-up" style={{ color: 'var(--color-dourado)', marginBottom: 24 }}>ARTIGO EM DESTAQUE</p>
        <div className="sobre__grid fade-in-up" style={{ transitionDelay: '80ms' }}>
          <div style={{ minHeight: 280, overflow: 'hidden' }}>
            <img
              src={post.cover}
              alt={post.title}
              loading="lazy"
              width={1280}
              height={768}
              style={{ width: '100%', height: '100%', minHeight: 280, objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
            <span style={{ background: 'var(--color-dourado)', color: 'var(--color-preto)', padding: '4px 12px', fontSize: 12, fontWeight: 700, letterSpacing: 1, display: 'inline-block', width: 'fit-content' }}>{post.category}</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-creme)', fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.3 }}>{post.title}</h2>
            <p style={{ color: '#a0b8b0', lineHeight: 1.7, fontSize: 16 }}>{post.excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <span style={{ color: '#a0b8b0', fontSize: 13 }}><i className="fa-solid fa-calendar" style={{ marginRight: 6 }} />{post.date}</span>
              <Link to={`/blog/${post.slug}`} className="btn-primary" style={{ fontSize: 14, padding: '10px 24px' }}>
                Ler artigo completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostsGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in-up');
    if (prefersReducedMotion) { elements.forEach(el => el.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section className="sobre">
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <h2 className="section-title fade-in-up" style={{ color: 'var(--color-bordo)', marginBottom: 24 }}>Todos os artigos</h2>
          <div className="blog__filters fade-in-up" style={{ transitionDelay: '80ms' }}>
            {BLOG_CATEGORIES.map(cat => (
              <button key={cat}
                className={`blog__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="blog__grid">
          {filtered.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="card-post fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div
                className="card-post__thumbnail"
                style={{
                  backgroundImage: `url(${post.cover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="card-post__body">
                <span className="card-post__category">{post.category}</span>
                <h3 className="card-post__title">{post.title}</h3>
                <p className="card-post__excerpt">{post.excerpt}</p>
                <span className="card-post__date">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length >= 6 && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-outline" aria-label="Carregar mais posts">Carregar mais</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Temas() {
  const ref = useFadeInUp<HTMLDivElement>();
  const temas = [
    { icon: 'fa-solid fa-building', categoria: 'Corporativo', descricao: 'Alimentação no trabalho, gestão de benefícios e estratégias de RH para empresas.' },
    { icon: 'fa-solid fa-apple-whole', categoria: 'Nutrição', descricao: 'Cardápios balanceados, nutrientes essenciais e alimentação saudável no dia a dia.' },
    { icon: 'fa-solid fa-shield-halved', categoria: 'Segurança Alimentar', descricao: 'Normas sanitárias, controle de qualidade e boas práticas no manuseio de alimentos.' },
  ];
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0', borderTop: '1px solid #e8ddd0' }}>
      <div className="container" ref={ref}>
        <div className="diferenciais__header fade-in-up">
          <p className="section-label" style={{ color: 'var(--color-bordo)' }}>TEMAS</p>
          <h2 className="section-title" style={{ color: 'var(--color-verde)' }}>O que você encontra aqui</h2>
        </div>
        <div className="servicos__grid servicos__grid--3col" style={{ marginTop: 48 }}>
          {temas.map((t, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`, background: '#fff', padding: '32px 28px', borderTop: '3px solid var(--color-bordo)', textAlign: 'center' }}>
              <i className={t.icon} style={{ fontSize: 36, color: 'var(--color-bordo)', display: 'block', marginBottom: 16 }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-verde)', fontSize: 20, marginBottom: 12 }}>{t.categoria}</h3>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>{t.descricao}</p>
              <button
                onClick={() => {}}
                style={{ marginTop: 16, background: 'none', border: 'none', color: 'var(--color-bordo)', fontWeight: 600, cursor: 'pointer', fontSize: 14 }}
              >
                Ver artigos →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const ref = useFadeInUp<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setEmail('');
  };

  return (
    <section style={{ background: 'var(--color-bordo)', padding: 'var(--space-section-y) 0' }}>
      <div className="container" ref={ref}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <i className="fa-solid fa-envelope-open-text fade-in-up" style={{ fontSize: 48, color: 'var(--color-dourado)', marginBottom: 20, display: 'block' }} />
          <h2 className="section-title fade-in-up" style={{ color: 'var(--color-creme)', marginBottom: 12, transitionDelay: '80ms' }}>
            Gestores que cuidam de pessoas se informam antes de decidir
          </h2>
          <p className="fade-in-up" style={{ color: 'rgba(245,239,200,0.8)', marginBottom: 32, fontSize: 16, lineHeight: 1.7, transitionDelay: '160ms' }}>
            Conteúdo prático sobre nutrição corporativa, segurança alimentar e gestão de benefícios. Sem spam. Só o que vale o seu tempo.
          </p>
          {enviado ? (
            <div className="fade-in-up" style={{ background: 'rgba(255,255,255,0.15)', padding: '24px 32px', transitionDelay: '240ms' }}>
              <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-dourado)', fontSize: 32, marginBottom: 12, display: 'block' }} />
              <p style={{ color: 'var(--color-creme)', fontWeight: 600, fontSize: 16 }}>Obrigado! Você está na nossa lista.</p>
            </div>
          ) : (
            <form className="fade-in-up" onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '240ms' }}>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                style={{ flex: '1 1 280px', padding: '14px 20px', fontSize: 15, border: 'none', outline: 'none', background: 'rgba(255,255,255,0.15)', color: 'var(--color-creme)', maxWidth: 360 }}
              />
              <button type="submit" className="btn-primary">Assinar newsletter</button>
            </form>
          )}
          <p className="fade-in-up" style={{ color: 'rgba(245,239,200,0.5)', fontSize: 12, marginTop: 16, transitionDelay: '320ms' }}>
            Sem spam. Cancelamento a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTABlog() {
  const ref = useFadeInUp<HTMLDivElement>();
  return (
    <section style={{ background: 'var(--color-creme)', padding: 'var(--space-section-y) 0', textAlign: 'center', borderTop: '1px solid #e8ddd0' }}>
      <div className="container" ref={ref}>
        <p className="section-label fade-in-up" style={{ color: 'var(--color-bordo)', marginBottom: 12 }}>QUER SABER MAIS?</p>
        <h2 className="section-title fade-in-up" style={{ color: 'var(--color-verde)', marginBottom: 16, transitionDelay: '80ms' }}>
          Informação é o primeiro passo. O segundo é ligar pra gente.
        </h2>
        <p className="fade-in-up" style={{ color: '#666', fontSize: 16, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7, transitionDelay: '160ms' }}>
          Você já sabe por que alimentação corporativa importa. Agora descubra como funciona na prática — solicite uma cotação sem compromisso e conheça a Mangiare de perto.
        </p>
        <div className="fade-in-up" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '240ms' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar Cotação</a>
          <Link to="/solucoes" className="btn-outline">Ver Soluções</Link>
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
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
      <PageHero title="Blog" variant="verde" />
      <PostDestaque />
      <PostsGrid />
      <Temas />
      <Newsletter />
      <CTABlog />
    </>
  );
}
