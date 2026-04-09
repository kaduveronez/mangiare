import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
  { label: 'Trabalhe Conosco', to: '/trabalhe-conosco' },
  { label: 'Privacidade', to: '/politica-de-privacidade' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Link to="/" className="footer__logo">
            Mangiare<span>refeições</span>
          </Link>
          <div className="footer__links">
            {LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          </div>
          <div className="footer__social">
            <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" aria-label="Instagram Mangiare">📸 Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Mangiare">📘 Facebook</a>
          </div>
          <div className="footer__credit">
            Desenvolvido por{' '}
            <a href="https://kaduveronez.com" target="_blank" rel="noopener noreferrer">Kadu Veronez</a>
          </div>
        </div>
        <div className="footer__bottom">
          © 2025 Mangiare Refeições. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
