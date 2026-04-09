import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Solucoes from "./pages/Solucoes";
import RestauranteMarmitas from "./pages/RestauranteMarmitas";
import RefeicoesCorporativas from "./pages/RefeicoesCorporativas";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import "./styles/mangiare.css";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/solucoes" element={<Solucoes />} />
      <Route path="/solucoes/restaurante-marmitas" element={<RestauranteMarmitas />} />
      <Route path="/solucoes/refeicoes-corporativas" element={<RefeicoesCorporativas />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
