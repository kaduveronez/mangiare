import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 3);

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
          <p className="blog-article__meta">{post.date} · 5 min de leitura</p>
          <div className="blog-article__cover" style={{ background: '#C9B5A0' }}>Imagem de capa</div>

          <div className="blog-article__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

            <h2>O que torna a alimentação corporativa essencial</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>

            <h2>Benefícios comprovados para a equipe</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            <ul>
              <li>Aumento de até 20% na produtividade</li>
              <li>Redução do absenteísmo por problemas de saúde</li>
              <li>Melhora no clima organizacional</li>
              <li>Retenção de talentos qualificados</li>
            </ul>

            <blockquote>"Investir na alimentação dos colaboradores é investir no futuro da empresa."</blockquote>

            <h2>Como implementar na sua empresa</h2>
            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sobre">
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40, color: 'var(--color-bordo)' }}>Leia também</h2>
            <div className="blog__grid">
              {related.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card-post">
                  <div className="card-post__thumbnail" style={{ background: '#C9B5A0' }} />
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
