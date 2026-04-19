import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <section className="sobre" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="sobre__title">Post não encontrado</h1>
          <Link to="/blog" className="btn-primary" style={{ marginTop: 24 }}>Voltar ao Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="blog-article">
        <div className="blog-article__container">
          <nav className="blog-article__breadcrumb">
            <Link to="/blog">Blog</Link> › <span>{post.category}</span> › <span>{post.title}</span>
          </nav>
          <span className="card-post__category">{post.category}</span>
          <h1 className="blog-article__title">{post.title}</h1>
          <p className="blog-article__meta">{post.date} · {post.readTime}</p>
          <div className="blog-article__cover" style={{ background: 'transparent', padding: 0, overflow: 'hidden' }}>
            <img
              src={post.cover}
              alt={post.title}
              width={1280}
              height={768}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div
            className="blog-article__body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {related.length > 0 && (
        <section className="sobre">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Leia também</h2>
            <div className="blog__grid">
              {related.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card-post">
                  <div
                    className="card-post__thumbnail"
                    style={{
                      backgroundImage: `url(${p.cover})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="card-post__body">
                    <span className="card-post__category">{p.category}</span>
                    <h3 className="card-post__title">{p.title}</h3>
                    <p className="card-post__excerpt">{p.excerpt}</p>
                    <span className="card-post__date">{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
