

## Plano: Protótipo Mangiare Refeições — Site Institucional + Blog

Protótipo visual completo em React/Vite no Lovable, seguindo fielmente o design system e a estrutura de 8 páginas + blog documentados.

---

### Fase 1 — Fundação (Design System + Layout Global)

1. **Configurar design tokens** — Paleta (bordô, verde, dourado, creme, preto, marrom-escuro), tipografia (Playfair Display + Sofia Sans Semi Condensed via Google Fonts), espaçamentos, bordas e sombras no `index.css` e `tailwind.config.ts`
2. **Navbar global** — Logo creme/dourado, links (Home, Quem Somos, Soluções com dropdown, Blog, Contato), botão CTA "Pedir Cotação" dourado. Transparente → fundo sólido `#0A0A0A` após 80px scroll. Mobile: hamburguer drawer
3. **Footer global** — Logo creme, tagline, links de navegação, redes sociais (Instagram, Facebook), crédito Kadu Veronez, copyright
4. **Componentes reutilizáveis** — PageHero (variantes bordô/verde/dourado), BotãoPrimário, CardDiferencial, CardServiço, CardBlogPost, FormGroup (variantes fundo claro/escuro), CTAWhatsApp, animação fade-in-up com IntersectionObserver + respeito a `prefers-reduced-motion`

---

### Fase 2 — Páginas Institucionais

5. **Home (`/`)** — HeroSection (bg bordô, logo grande, tagline Playfair, CTA dourado WhatsApp), SobreResumo, ServicosCards (2 cards linkando para sub-páginas), DiferenciaisGrid (6 itens resumidos), ClientesLogoWall (10 logos placeholder), FormOrcamento (nome, empresa, e-mail, telefone, mensagem com validação), CTAWhatsApp
6. **Quem Somos (`/quem-somos`)** — PageHero, HistoriaBloco (30+ anos narrativa), MissaoBloco (faixa dourada), ValoresGrid, EquipeFoto
7. **Soluções Hub (`/solucoes`)** — PageHero, 2 SolucaoCards grandes (Restaurante & Marmitas + Refeições Corporativas), EntregaBloco (logística, frota, Hot Box)
8. **Restaurante & Marmitas (`/solucoes/restaurante-marmitas`)** — PageHero, DescricaoServico, GaleriaFotos com lightbox (prev/next, lazy loading), CardapioDestaques, CTACotacao
9. **Refeições Corporativas (`/solucoes/refeicoes-corporativas`)** — PageHero, ArgumentoB2B, DiferenciaisCompletos (6 itens expandidos), ClientesLogoWall, FormOrcamentoB2B (empresa, CNPJ, responsável, nº refeições, e-mail, telefone), CTAWhatsApp
10. **Contato (`/contato`)** — PageHero, FormContato (nome, e-mail, assunto, mensagem), InfoContato (WhatsApp, e-mail, Instagram, endereço com ícones), RedesSociais, MapaLocalizacao (embed Google Maps — R. Minas Gerais, 5300)
11. **Trabalhe Conosco (`/trabalhe-conosco`)** — PageHero, CulturaBloco, GaleriaRefeitórios, FormVagas (nome, e-mail, telefone, área de interesse, mensagem)
12. **Política de Privacidade (`/politica-de-privacidade`)** — TextoLegal (LGPD), ContatoDPO

---

### Fase 3 — Blog

13. **Blog Listagem (`/blog`)** — BlogHero, FiltroCategoria (navegação por categorias), PostCardGrid (9 posts por página com paginação, dados mockados), Sidebar opcional (busca, posts recentes, categorias)
14. **Blog Artigo (`/blog/:slug`)** — ArtigoHeader (título, data, autor, categoria, imagem de capa), ArtigoCorpo (layout editorial com headings, imagens, listas, citações), PostsRelacionados (3 posts da mesma categoria)

---

### Fase 4 — Comportamentos e Polimento

15. **Formulários funcionais** — Validação client-side (campos obrigatórios, e-mail válido), feedback visual de sucesso, todos apontando para `mailto:mangiaree.refeicoes@gmail.com` (simulado no protótipo)
16. **Links externos** — WhatsApp (`wa.me/5547996266842`), Instagram, Facebook, mailto — todos com `target="_blank"` e `aria-label`
17. **Responsividade completa** — Mobile-first de 320px a 1440px, breakpoints em 640/768/1024/1280px
18. **Acessibilidade** — `aria-label` em botões, `alt` descritivo em imagens, contraste WCAG AA (4.5:1)

---

### Notas

- Imagens usarão placeholders (Unsplash de comida/restaurante) — conteúdo real será aplicado no WordPress
- Blog usa dados mockados — no WordPress será alimentado pelo CMS nativo
- Formulários simulam envio (toast de confirmação) — no WordPress usarão plugin de forms
- Logos usarão placeholders SVG com as cores corretas da marca

