import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const funnyMessages = [
  "Parece que este prato não está no cardápio…",
  "Essa receita ainda não foi inventada!",
  "O chef não encontrou essa página na cozinha…",
  "Esse pedido não chegou até nós!",
];

const NotFound = () => {
  const location = useLocation();
  const [message] = useState(
    () => funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );
  const [steam, setSteam] = useState(true);

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => setSteam((s) => !s), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="notfound">
      <div className="notfound__container">
        {/* Plate illustration */}
        <div className="notfound__plate">
          <div className="notfound__plate-circle">
            <div className="notfound__plate-inner">
              <span className="notfound__404">404</span>
              <div className={`notfound__steam ${steam ? "notfound__steam--active" : ""}`}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
          {/* Fork and knife */}
          <div className="notfound__cutlery notfound__cutlery--left">
            <i className="fa-solid fa-utensils"></i>
          </div>
          <div className="notfound__cutlery notfound__cutlery--right">
            <i className="fa-solid fa-wine-glass"></i>
          </div>
        </div>

        <h1 className="notfound__title">Página não encontrada</h1>
        <p className="notfound__message">{message}</p>

        <div className="notfound__actions">
          <Link to="/" className="btn-primary">
            <i className="fa-solid fa-house"></i> Voltar ao Início
          </Link>
          <Link to="/contato" className="notfound__link">
            <i className="fa-solid fa-envelope"></i> Fale Conosco
          </Link>
        </div>

        <p className="notfound__hint">
          Ou explore nosso <Link to="/blog">Blog</Link> e nossas{" "}
          <Link to="/solucoes">Soluções</Link>.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
