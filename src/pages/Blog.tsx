import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogPosts';

export default function Blog() {
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
    <>
      <PageHero title="Blog" variant="verde" />
      <section className="sobre">
        <div className="container">
          <div className="blog__filters fade-in-up">
            {BLOG_CATEGORIES.map(cat => (
              <button key={cat}
                className={`blog__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="blog__grid">
            {filtered.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card-post fade-in-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="card-post__thumbnail" style={{ background: '#C9B5A0' }} />
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
    </>
  );
}
