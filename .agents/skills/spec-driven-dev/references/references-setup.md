# Guia: Pasta references/ do Projeto

A pasta `references/` na raiz do projeto do usuário é a memória de longo prazo da IA.
Documentos aqui são consultados durante o Plan e o Execute para garantir consistência.

---

## Documentos Obrigatórios

### 1. architecture.md

Define a stack tecnológica, a organização de pastas e as regras arquiteturais.

**Deve conter:**

- Stack tecnológica com versões (ex: Next.js 14, App Router, Prisma, PostgreSQL)
- Estrutura de pastas com explicação de cada diretório
- Convenções de nomenclatura (kebab-case para arquivos, PascalCase para componentes)
- Regra Thin Client, Fat Server:
  - Front-end captura intenções de clique e repassa para o servidor
  - Servidor avalia regras de negócio e devolve respostas
  - Nenhuma validação de regra de negócio no client
  - Nenhuma chave de API exposta no front-end
- Padrão de acesso a dados (ex: em Next.js App Router, acesso a dados apenas em Server Components)
- Padrão de tratamento de erros (onde logar, como propagar)

**Template mínimo:**

```markdown
# Arquitetura — [Nome do Projeto]

## Stack
- Framework: Next.js 14 (App Router)
- ORM: Prisma
- Banco: PostgreSQL
- Auth: NextAuth.js
- Estilização: Tailwind CSS

## Estrutura de Pastas
src/
├── app/           # Rotas e pages (App Router)
├── components/    # Componentes React organizados por domínio
│   ├── ui/        # Primitivos reutilizáveis (Button, Input, Modal)
│   ├── auth/      # Componentes de autenticação
│   └── dashboard/ # Componentes do dashboard
├── lib/           # Utilitários, configs, helpers
│   ├── db/        # Schema Prisma e cliente
│   ├── validators/# Schemas Zod
│   └── api/       # Funções de server actions
├── hooks/         # Custom hooks React
└── types/         # TypeScript interfaces e types

## Regras Invioláveis
1. TODA regra de negócio vive no servidor (Server Components, API Routes, Server Actions)
2. O client NUNCA faz fetch direto ao banco — sempre via server action ou API route
3. Chaves de API vivem em .env.local, NUNCA em código client-side
4. Componentes visuais são puros — recebem dados via props, não buscam dados
```

---

### 2. design_system.md

Documenta os padrões visuais para que a IA não invente estilos arbitrários.

**Deve conter:**

- Paleta de cores com tokens (hex, Tailwind classes, CSS variables)
- Tipografia (famílias, tamanhos, pesos)
- Espaçamento (scale de spacing)
- Componentes de estado (loading, error, empty, success)
- Breakpoints responsivos
- Convenções de ícones

**Quando é crítico**: Sempre que o projeto tem identidade visual definida pelo cliente. Sem este documento, a IA produz interfaces genéricas com cores e paddings aleatórios.

---

## Documentos Opcionais

### 3. api-contracts.md

Documenta endpoints de API existentes ou planejados.
Previne que a IA invente endpoints que não existem ou duplique os que já existem.

### 4. conventions.md

Padrões de código que fogem do default do framework.
Ex: "usamos barrel exports em cada pasta de componentes", "preferimos named exports a default exports".

---

## Como a IA Usa Estes Documentos

- **Na fase Plan**: A IA lê `architecture.md` para propor arquivos nos caminhos corretos e respeitar a separação de camadas. Lê `design_system.md` para saber quais componentes visuais já existem.
- **Na fase Execute**: A IA consulta os documentos como referência contínua para manter consistência com o que já foi implementado.
- **Na fase Spec**: Os documentos informam quais padrões e capacidades técnicas estão disponíveis.
