# Issues — Find My Pet

## Infraestrutura

### ISSUE-001: Setup do Banco de Dados
**Tipo**: infraestrutura
**Descrição**: Criar schema Prisma com tabelas users, alerts, alert_photos e contact_messages. Configurar conexão com PostgreSQL.
**Critérios de Aceite**:
- [ ] Schema Prisma criado com todas as tabelas e relações
- [ ] Migration executada com sucesso
- [ ] Seed com dados de teste funcional
**Dependências**: Nenhuma

### ISSUE-002: Setup de Autenticação
**Tipo**: infraestrutura
**Descrição**: Configurar NextAuth.js com provider de credenciais (email/senha). Implementar hash de senha com bcrypt e JWT com expiração de 7 dias.
**Critérios de Aceite**:
- [ ] NextAuth configurado e funcional
- [ ] Rota de API /api/auth/* respondendo
- [ ] Hash de senha usando bcrypt (nunca plaintext)
- [ ] JWT com expiração de 7 dias
**Dependências**: ISSUE-001

### ISSUE-003: Setup de Storage para Fotos
**Tipo**: infraestrutura
**Descrição**: Configurar Supabase Storage para upload de fotos. Criar bucket "alert-photos" com políticas de acesso.
**Critérios de Aceite**:
- [ ] Bucket criado e acessível via API
- [ ] Upload funcional retornando URL pública
- [ ] Limite de 3 fotos por alerta, máx 5MB cada
**Dependências**: Nenhuma

---

## Protótipos Visuais

### ISSUE-004: Protótipo — Landing Page (/)
**Tipo**: prototipo-visual
**Descrição**: Layout da landing page com HeroSection, MapaPreview (estático), ListaAlertasRecentes (dados mockados) e Footer. Sem lógica, sem fetch.
**Critérios de Aceite**:
- [ ] Todos os componentes da spec renderizados
- [ ] Responsivo (mobile e desktop)
- [ ] Dados mockados hardcoded
- [ ] Design System respeitado
**Dependências**: Nenhuma

### ISSUE-005: Protótipo — Mapa Interativo (/mapa)
**Tipo**: prototipo-visual
**Descrição**: Layout do mapa fullscreen com FiltroLateral e CardAlertaPopup. Mapa renderizado com pins mockados. Sem integração com API.
**Critérios de Aceite**:
- [ ] Mapa renderizado com biblioteca (Leaflet ou Mapbox)
- [ ] Pins mockados visíveis
- [ ] Filtro lateral funcional (apenas UI, sem fetch)
- [ ] Popup ao clicar no pin
**Dependências**: Nenhuma

### ISSUE-006: Protótipo — Formulário de Alerta (/alerta/novo)
**Tipo**: prototipo-visual
**Descrição**: Layout do FormularioAlerta com UploadFoto (preview local), SeletorLocalizacao (mapa clicável) e BotaoPublicar. Sem submissão real.
**Critérios de Aceite**:
- [ ] Todos os campos do formulário renderizados
- [ ] Upload de foto com preview local funcional
- [ ] Mapa clicável para selecionar localização
- [ ] Botão de publicar presente (sem ação)
**Dependências**: Nenhuma

### ISSUE-007: Protótipo — Detalhes do Alerta (/alerta/:id)
**Tipo**: prototipo-visual
**Descrição**: Layout com GaleriaFotos, DetalhesAnimal, MapaLocalizacao, BotaoContato e BadgeStatus. Dados mockados.
**Critérios de Aceite**:
- [ ] Carousel de fotos funcional
- [ ] Mapa com pin mockado
- [ ] Badge de status renderizado
- [ ] Botão de contato presente (sem ação)
**Dependências**: Nenhuma

### ISSUE-008: Protótipo — Meus Alertas (/meus-alertas)
**Tipo**: prototipo-visual
**Descrição**: Layout da TabelaAlertas com BotaoMarcarEncontrado, BotaoEditar e BotaoExcluir. Dados mockados em tabela.
**Critérios de Aceite**:
- [ ] Tabela renderizada com dados mockados
- [ ] Botões de ação presentes (sem funcionalidade)
- [ ] Responsivo
**Dependências**: Nenhuma

---

## Comportamentos

### ISSUE-009: Comportamento — Registrar Conta (BHV-001)
**Tipo**: comportamento
**Descrição**: Implementar registro com email e senha. Servidor valida unicidade, cria hash, retorna JWT. Frontend exibe feedback de sucesso/erro.
**Critérios de Aceite**:
- [ ] Validação de email único no servidor
- [ ] Senha com hash bcrypt
- [ ] JWT retornado e armazenado
- [ ] Mensagem de erro se email já existir
**Dependências**: ISSUE-001, ISSUE-002

### ISSUE-010: Comportamento — Fazer Login (BHV-002)
**Tipo**: comportamento
**Descrição**: Implementar login com email e senha. Servidor valida credenciais e retorna JWT com expiração de 7 dias.
**Critérios de Aceite**:
- [ ] Login funcional com credenciais válidas
- [ ] Mensagem de erro genérica para credenciais inválidas (sem revelar se email existe)
- [ ] JWT com expiração de 7 dias
- [ ] Redirect para /meus-alertas após login
**Dependências**: ISSUE-001, ISSUE-002

### ISSUE-011: Comportamento — Cadastrar Alerta (BHV-003)
**Tipo**: comportamento
**Descrição**: Implementar submissão do formulário de alerta. Upload de fotos para storage, geotag da localização, persistência no banco.
**Critérios de Aceite**:
- [ ] Fotos uploadadas para Supabase Storage
- [ ] Coordenadas salvas no banco
- [ ] Alerta visível no mapa após criação
- [ ] Validação de campos obrigatórios no servidor
**Dependências**: ISSUE-001, ISSUE-003, ISSUE-006

### ISSUE-012: Comportamento — Contatar Dono (BHV-005)
**Tipo**: comportamento
**Descrição**: Implementar formulário de contato que envia email ao dono via servidor. Email do dono NUNCA exposto na interface.
**Critérios de Aceite**:
- [ ] Email enviado ao dono via server action
- [ ] Email do dono não aparece no frontend
- [ ] Feedback de "mensagem enviada" exibido
- [ ] Rate limit de 3 mensagens por hora por usuário
**Dependências**: ISSUE-001, ISSUE-007

### ISSUE-013: Comportamento — Marcar como Encontrado (BHV-006)
**Tipo**: comportamento
**Descrição**: Implementar mudança de status do alerta. Apenas o dono pode alterar. Badge atualizado em tempo real.
**Critérios de Aceite**:
- [ ] Apenas o dono consegue alterar o status (verificação no servidor)
- [ ] Badge atualizado na interface
- [ ] Alerta permanece visível por 30 dias após "encontrado"
**Dependências**: ISSUE-001, ISSUE-008

---

## Integração

### ISSUE-014: Integração — Conectar Mapa com API
**Tipo**: integracao
**Descrição**: Substituir dados mockados do mapa por dados reais da API. Implementar filtros funcionais com fetch.
**Critérios de Aceite**:
- [ ] Pins reais carregados do banco
- [ ] Filtros funcionais (espécie, raio, data)
- [ ] Clustering funcional com dados reais
**Dependências**: ISSUE-005, ISSUE-011

### ISSUE-015: Integração — Conectar Landing com API
**Tipo**: integracao
**Descrição**: Substituir dados mockados da landing por alertas reais. MapaPreview com últimos 10 alertas.
**Critérios de Aceite**:
- [ ] Alertas recentes carregados do banco
- [ ] Mapa com pins reais
- [ ] Performance: carregamento < 2s
**Dependências**: ISSUE-004, ISSUE-011
