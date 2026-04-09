import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoAmarelo from '../assets/logo-amarelo.png';

const WHATSAPP_URL = 'https://wa.me/5547996266842?text=Ol%C3%A1!+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o.';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Quem Somos', to: '/quem-somos' },
  { label: 'Soluções', to: '/solucoes', dropdown: [
    { label: 'Restaurante & Marmitas', to: '/solucoes/restaurante-marmitas' },
    { label: 'Refeições Corporativas', to: '/solucoes/refeicoes-corporativas' },
  ]},
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setDrawerOpen(false); setDropdownOpen(false); }, [location]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar__logo">
            Mangiare<span>refeições</span>
          </Link>
          <div className="navbar__links">
            {NAV_LINKS.map(l => (
              l.dropdown ? (
                <div key={l.to} className="nav-dropdown-wrapper"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link to={l.to} className="nav-dropdown-trigger">{l.label}</Link>
                  <div className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}>
                    {l.dropdown.map(sub => (
                      <Link key={sub.to} to={sub.to}>{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              )
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary navbar__cta" aria-label="Pedir cotação via WhatsApp">
            Pedir Cotação
          </a>
          <button className={`navbar__hamburger ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(!drawerOpen)} aria-label="Abrir menu de navegação">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={closeDrawer} />
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          l.dropdown ? (
            <div key={l.to}>
              <Link to={l.to} onClick={closeDrawer}>{l.label}</Link>
              {l.dropdown.map(sub => (
                <Link key={sub.to} to={sub.to} onClick={closeDrawer} style={{ paddingLeft: 24, fontSize: 16 }}>
                  → {sub.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link key={l.to} to={l.to} onClick={closeDrawer}>{l.label}</Link>
          )
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Pedir cotação via WhatsApp" onClick={closeDrawer}>
          Pedir Cotação
        </a>
      </div>
    </>
  );
}
