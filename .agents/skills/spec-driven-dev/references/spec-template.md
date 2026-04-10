# Template: spec.md

Use este template como estrutura obrigatória ao gerar o documento de especificação.
Cada seção é obrigatória. Não pule nenhuma.

---

```markdown
# Especificação: [Nome do Projeto]

## 1. Visão Geral do Escopo

[Um parágrafo definindo O QUE o software faz.]

### 1.1 O que este software NÃO faz

[Lista explícita de funcionalidades fora do escopo. Isso previne scope creep e evita que a IA tente implementar coisas não solicitadas.]

- Não faz X
- Não faz Y

---

## 2. Mapeamento de Rotas / Páginas

| Rota / Tela        | Descrição                                      |
|---------------------|-------------------------------------------------|
| `/`                 | Landing page com...                             |
| `/dashboard`        | Painel principal com...                         |
| `/configuracoes`    | Tela de configurações do usuário                |

---

## 3. Componentização Visual

Para cada rota/tela, listar os componentes visuais que a compõem.

### 3.1 `/dashboard`

- **Sidebar**: Menu lateral com navegação principal
- **Header**: Barra superior com busca e perfil do usuário
- **TabelaDados**: Grid principal com dados filtráveis
- **ModalDetalhes**: Modal acionado ao clicar em uma linha

### 3.2 `/configuracoes`

- **FormPerfil**: Formulário de edição de dados pessoais
- **SecaoNotificacoes**: Toggles de preferências de notificação

---

## 4. Comportamentos (Behaviors)

Cada comportamento é uma ação EXATA que o usuário realiza.
Nunca use descrições vagas como "o usuário edita o perfil".

| ID       | Ação                                    | Descrição Precisa                                                              |
|----------|-----------------------------------------|--------------------------------------------------------------------------------|
| BHV-001  | Fazer login                             | Usuário insere email e senha, servidor valida credenciais e retorna JWT        |
| BHV-002  | Recuperar senha                         | Usuário informa email, servidor envia link com token de 15min para redefinição |
| BHV-003  | Alterar email                           | Usuário altera email e recebe link de confirmação no novo endereço             |
| BHV-004  | Publicar alerta geolocalizado           | Usuário preenche formulário, faz upload de foto, servidor geotagga e publica   |

---

## 5. Regras de Negócio Críticas

[Liste aqui qualquer regra que a IA PRECISA respeitar durante a implementação.]

- Toda validação de regra de negócio ocorre no servidor (Thin Client, Fat Server)
- O front-end captura intenções e repassa para o servidor
- Chaves de API e tokens nunca são expostos no client-side
```

---

## Critérios de Qualidade

Uma spec.md é considerada completa quando:

1. **Escopo fechado**: Existe seção explícita do que NÃO faz
2. **Rotas mapeadas**: Toda URL/tela listada com descrição
3. **Componentes nomeados**: Cada rota tem seus componentes visuais listados
4. **Comportamentos precisos**: Cada behavior tem ação + descrição exata (não vaga)
5. **Regras de negócio**: Pelo menos a regra Thin Client/Fat Server documentada
