import { Link } from 'react-router-dom';
import logoFooter from '../assets/logo-footer.svg';

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
            <img src={logoFooter} alt="Mangiare Refeições" className="footer__logo-img" />
          </Link>
          <div className="footer__links">
            {LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          </div>
          <div className="footer__social">
            <a href="https://instagram.com/mangiare.refeicoes" target="_blank" rel="noopener noreferrer" aria-label="Instagram Mangiare"><i className="fa-brands fa-instagram" /> Instagram</a>
            <a href="https://www.facebook.com/Mangiaree.refeicoes/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Mangiare"><i className="fa-brands fa-facebook" /> Facebook</a>
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
