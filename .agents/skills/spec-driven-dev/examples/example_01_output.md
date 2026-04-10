# Especificação: Find My Pet

## 1. Visão Geral do Escopo

Aplicação web que permite a usuários cadastrar alertas de animais perdidos com foto e geolocalização, visualizar animais perdidos na região em um mapa interativo e entrar em contato com o dono para coordenar o resgate. O sistema requer autenticação e permite que o dono atualize o status do animal para "encontrado".

### 1.1 O que este software NÃO faz

- Não é um marketplace de adoção de animais
- Não faz reconhecimento facial/visual de animais
- Não gerencia clínicas veterinárias ou vacinas
- Não tem sistema de pagamento ou doações
- Não envia notificações push (v1)

---

## 2. Mapeamento de Rotas / Páginas

| Rota / Tela            | Descrição                                                    |
|------------------------|--------------------------------------------------------------|
| `/`                    | Landing page com mapa da região e alertas recentes           |
| `/login`               | Tela de login com email/senha                                |
| `/registro`            | Tela de cadastro de novo usuário                             |
| `/mapa`                | Mapa interativo com pins de animais perdidos filtráveis      |
| `/alerta/novo`         | Formulário de cadastro de animal perdido                     |
| `/alerta/:id`          | Página de detalhes do alerta com fotos, mapa e contato       |
| `/meus-alertas`        | Lista de alertas do usuário logado com ações de gerenciamento|
| `/perfil`              | Configurações do perfil do usuário                           |

---

## 3. Componentização Visual

### 3.1 `/` (Landing)
- **HeroSection**: Título, subtítulo e CTA para cadastrar alerta
- **MapaPreview**: Mapa com pins dos últimos 10 alertas da região
- **ListaAlertasRecentes**: Cards dos alertas mais recentes
- **Footer**: Links institucionais e contato

### 3.2 `/mapa`
- **MapaInterativo**: Mapa fullscreen com clusters de pins
- **FiltroLateral**: Filtros por espécie, raio de distância, data
- **CardAlertaPopup**: Card resumido que aparece ao clicar no pin

### 3.3 `/alerta/novo`
- **FormularioAlerta**: Campos de nome, espécie, descrição, data do desaparecimento
- **UploadFoto**: Upload de até 3 fotos com preview
- **SeletorLocalizacao**: Mapa para marcar o ponto onde o animal foi visto por último
- **BotaoPublicar**: Submissão do formulário

### 3.4 `/alerta/:id`
- **GaleriaFotos**: Carousel de fotos do animal
- **DetalhesAnimal**: Nome, espécie, descrição, data
- **MapaLocalizacao**: Mapa com pin do último avistamento
- **BotaoContato**: Abre modal com formulário de contato com o dono
- **BadgeStatus**: Indicador "Perdido" ou "Encontrado"

### 3.5 `/meus-alertas`
- **TabelaAlertas**: Lista de alertas do usuário com status e ações
- **BotaoMarcarEncontrado**: Altera status para "encontrado"
- **BotaoEditar**: Redireciona para edição do alerta
- **BotaoExcluir**: Remove o alerta com confirmação

---

## 4. Comportamentos (Behaviors)

| ID       | Ação                          | Descrição Precisa                                                                                     |
|----------|-------------------------------|-------------------------------------------------------------------------------------------------------|
| BHV-001  | Registrar conta               | Usuário preenche nome, email e senha. Servidor valida unicidade do email, cria hash da senha e retorna JWT |
| BHV-002  | Fazer login                   | Usuário insere email e senha. Servidor valida credenciais e retorna JWT com expiração de 7 dias       |
| BHV-003  | Cadastrar alerta              | Usuário preenche formulário, faz upload de fotos, marca localização no mapa. Servidor geotagga, salva fotos em storage e publica o alerta |
| BHV-004  | Visualizar mapa de alertas    | Usuário acessa /mapa. Servidor retorna alertas ativos dentro do raio selecionado. Frontend renderiza pins no mapa com clustering |
| BHV-005  | Contatar dono                 | Usuário clica em "Contatar" no alerta. Servidor envia email ao dono com a mensagem, sem expor o email do dono na interface |
| BHV-006  | Marcar como encontrado        | Dono clica em "Marcar como encontrado" em /meus-alertas. Servidor altera status para "encontrado". Alerta permanece visível mas com badge atualizado |
| BHV-007  | Filtrar alertas               | Usuário seleciona filtros (espécie, raio, data). Frontend envia parâmetros ao servidor que retorna lista filtrada |
| BHV-008  | Salvar rascunho de alerta     | Usuário começa a preencher formulário e sai da página. Dados são salvos em localStorage. Ao retornar, formulário é pré-preenchido |

---

## 5. Regras de Negócio Críticas

- Toda validação de regra de negócio ocorre no servidor (Thin Client, Fat Server)
- O front-end captura intenções e repassa para o servidor
- Email do dono NUNCA é exposto na interface — contato ocorre via servidor
- Upload de fotos é feito para storage externo (S3/Supabase Storage), não salvo em banco
- Apenas o dono do alerta pode alterar status ou excluir
- Alertas marcados como "encontrado" ficam visíveis por 30 dias, depois são arquivados
