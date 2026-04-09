

## Plano: Transformar Single-Page em Site Multi-Página

O projeto atual é uma landing page single-page com 7 seções e navegação por âncoras. O escopo real exige 10 rotas separadas com React Router. O design system (CSS, tokens, fontes) já está correto e será preservado integralmente.

---

### Arquitetura

```text
src/
├── components/
│   ├── Navbar.tsx          (global, com dropdown Soluções + React Router links)
│   ├── Footer.tsx          (global, links para todas as rotas)
│   ├── PageHero.tsx        (reutilizável: variantes bordô/verde/dourado)
│   ├── ScrollToTop.tsx     (scroll to top on route change)
│   ├── DiferenciaisGrid.tsx (reutilizado em Home e Corporativas)
│   ├── ClientesLogoWall.tsx (reutilizado em Home e Corporativas)
│   └── FormField.tsx       (campo de formulário reutilizável)
├── pages/
│   ├── Home.tsx
│   ├── QuemSomos.tsx
│   ├── Solucoes.tsx
│   ├── RestauranteMarmitas.tsx
│   ├── RefeicoesCorporativas.tsx
│   ├── Contato.tsx
│   ├── TrabalheConosco.tsx
│   ├── PoliticaPrivacidade.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── NotFound.tsx
├── data/
│   └── blogPosts.ts        (6 posts mockados)
├── styles/
│   └── mangiare.css        (expandido com novos estilos)
└── App.tsx                  (BrowserRouter + todas as rotas)
```

---

### Etapas de Implementação

**1. Componentes Globais**
- Extrair `Navbar` e `Footer` de `Index.tsx` para componentes separados
- Navbar: trocar `<a href="#ancora">` por `<Link to="/rota">`, adicionar dropdown "Soluções" com sub-links (Restaurante & Marmitas, Refeições Corporativas)
- Footer: links React Router para todas as 8 páginas + Facebook
- Criar `ScrollToTop.tsx` (useEffect com window.scrollTo no useLocation)
- Criar `PageHero` com prop `variant` (bordo/verde/dourado) e `title`

**2. Componentes Reutilizáveis**
- `DiferenciaisGrid` — extrair os 6 cards (usado na Home e em Refeições Corporativas)
- `ClientesLogoWall` — extrair os 10 logos (usado na Home e em Refeições Corporativas)
- `FormField` — input/textarea/select com variante claro/escuro

**3. Página Home (`/`)**
- Manter Hero, Sobre (com botão "Conheça nossa história" → `/quem-somos`), Serviços (2 cards grandes linkando para sub-páginas em vez de 3 cards), Diferenciais, Clientes, Formulário de orçamento (nome, empresa, e-mail, telefone, mensagem com preventDefault + alert) + grid de contatos

**4. Quem Somos (`/quem-somos`)**
- PageHero bordô + história expandida + faixa missão dourada + valores (3 cards) + foto equipe

**5. Soluções Hub (`/solucoes`)**
- PageHero verde + 2 cards grandes lado a lado + seção entrega (frota, Hot Box)

**6. Restaurante & Marmitas (`/solucoes/restaurante-marmitas`)**
- PageHero bordô + descrição serviço + galeria 6 fotos com lightbox (modal prev/next) + CTA WhatsApp

**7. Refeições Corporativas (`/solucoes/refeicoes-corporativas`)**
- PageHero verde + argumento B2B + DiferenciaisGrid + ClientesLogoWall + formulário B2B (empresa, CNPJ, responsável, nº refeições, e-mail, telefone) + CTA WhatsApp

**8. Contato (`/contato`)**
- PageHero bordô + layout 2 colunas (formulário claro + info contato) + placeholder mapa

**9. Trabalhe Conosco (`/trabalhe-conosco`)**
- PageHero dourado (texto verde) + cultura + galeria 4 fotos + formulário vagas (fundo verde escuro)

**10. Política de Privacidade (`/politica-de-privacidade`)**
- PageHero bordô + texto legal LGPD (max-width 800px, fundo branco)

**11. Blog Listagem (`/blog`)**
- PageHero verde + filtro categorias (pills) + grid 6 cards mockados (3×2 desktop) + botão "Carregar mais"

**12. Blog Artigo (`/blog/:slug`)**
- Breadcrumb + header editorial + corpo Lorem Ipsum + 3 posts relacionados

**13. CSS Expandido**
- Adicionar estilos para: `.page-hero` variantes, formulários (claro e escuro), `.card-post`, lightbox modal, `.nav-dropdown`, layout editorial do blog, página de privacidade

---

### O que NÃO muda
- Design system (cores, fontes, tokens, espaçamentos) — preservado 100%
- Hook `useIntersectionObserver` — reutilizado em todas as páginas
- Classe `.fade-in-up` — aplicada em todas as seções e cards
- Zero backend — formulários usam preventDefault + alert

