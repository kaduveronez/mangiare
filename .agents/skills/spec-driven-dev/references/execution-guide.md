# Guia: Fase de Execução

A execução é a transcrição do plano aprovado em código.
A IA não toma decisões arquiteturais nesta fase — ela apenas implementa o que foi decidido no Plan.

---

## Princípio Central: Agentes Especializados

Nunca execute backend e frontend na mesma requisição/turno.
Cada camada tem um contexto de execução separado.

### Agente de Backend / Infraestrutura

**Foco**: Segurança, validação, regras de negócio, banco de dados.

**O que este agente FAZ:**
- Criar e modificar tabelas/migrations
- Implementar endpoints, server actions e API routes
- Escrever validação de dados (Zod, joi, etc.)
- Configurar autenticação e autorização
- Sanitizar inputs
- Implementar tratativa de erros com logging

**O que este agente NÃO SABE:**
- CSS, Tailwind, estilos visuais
- Componentes React/Vue/Svelte
- Layout, responsividade, animações
- Estado de UI (modais, tooltips, dropdowns)

### Agente de Frontend / UI

**Foco**: Layout, componentes visuais, estado de interface, Design System.

**O que este agente FAZ:**
- Criar componentes visuais seguindo o Design System
- Gerenciar estado de UI (hooks, stores)
- Implementar responsividade e acessibilidade
- Conectar componentes aos endpoints/actions definidos pelo backend
- Criar protótipos visuais com dados mockados

**O que este agente NÃO PODE:**
- Escrever queries diretas ao banco de dados
- Implementar regras de negócio
- Validar permissões ou autorização
- Armazenar secrets ou chaves de API

---

## Checklist Pré-Execução

Antes de autorizar a execução de qualquer issue:

- [ ] O plano foi revisado e aprovado
- [ ] Os arquivos a criar/modificar estão listados com caminhos exatos
- [ ] Os arquivos que NÃO devem ser tocados estão identificados
- [ ] O agente recomendado (backend/frontend) está declarado
- [ ] Os cenários (feliz, edge cases, erros) estão documentados
- [ ] A pasta `references/` do projeto tem pelo menos `architecture.md`

---

## Checklist Pós-Execução

Após cada issue executada, verificar:

- [ ] Apenas os arquivos listados no plano foram criados/modificados
- [ ] Nenhum arquivo da lista "não tocar" foi alterado
- [ ] Regras de negócio vivem no servidor, não no client
- [ ] Nenhuma chave de API ou secret aparece em código client-side
- [ ] Componentes visuais seguem o Design System documentado
- [ ] Dados mockados foram substituídos por dados reais (se aplicável)

---

## Quando Parar e Voltar ao Plan

A execução deve ser INTERROMPIDA se:

1. A IA precisa criar um arquivo que não estava no plano → Voltar ao Plan, adicionar o arquivo
2. A IA precisa modificar um arquivo que está na lista "não tocar" → Voltar ao Plan, reavaliar escopo
3. Um edge case aparece que não foi previsto nos cenários → Voltar ao Plan, documentar o cenário
4. A implementação de uma issue requer funcionalidade de outra issue → Dependência não mapeada, voltar ao Break
