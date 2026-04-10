# Template: Plano de Execução

Use este template ao gerar o plano de execução para cada issue.
O plano é um mapa — NUNCA contém código fonte. Apenas descreve O QUE será feito, ONDE e POR QUÊ.

---

## Por Que o Plano Existe

A IA tende a "adivinhar" onde deve mexer quando recebe uma tarefa genérica.
O plano elimina essa adivinhação ao listar os arquivos exatos, as estruturas de dados e os cenários antes que qualquer código seja escrito.

Se o plano vier confuso ou sugerir mexer em arquivos sem relação com a issue, corrija o plano antes de autorizar a execução. O custo de corrigir um plano é 10x menor que corrigir código errado.

---

## Formato Padrão de Plano

```markdown
# Plano: ISSUE-XXX — [Título]

## 1. Cenários

### 1.1 Caminho Feliz
[Descreva o fluxo completo quando tudo funciona corretamente.]

### 1.2 Casos Extremos (Edge Cases)
- [Caso 1: ex. campo de email vazio]
- [Caso 2: ex. token expirado]
- [Caso 3: ex. conexão perdida durante upload]

### 1.3 Tratativa de Erros
- [Erro 1: ex. servidor retorna 500 → exibir mensagem genérica + logar no Sentry]
- [Erro 2: ex. validação falha → highlight no campo + mensagem específica]

---

## 2. Estrutura de Dados

### Tabelas / Collections

| Entidade     | Campo          | Tipo        | Notas                        |
|--------------|----------------|-------------|------------------------------|
| users        | id             | UUID        | PK                           |
| users        | email          | VARCHAR(255)| UNIQUE, NOT NULL             |
| users        | password_hash  | VARCHAR(255)| bcrypt                       |
| reset_tokens | token          | VARCHAR(64) | Expira em 15min              |
| reset_tokens | user_id        | UUID        | FK → users.id                |

### Types / Interfaces (se aplicável)

```typescript
interface ResetPasswordRequest {
  email: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}
```

---

## 3. Arquivos a CRIAR

| Caminho                                    | Finalidade                                    |
|--------------------------------------------|-----------------------------------------------|
| `src/components/auth/ResetPasswordForm.tsx` | Formulário de recuperação de senha             |
| `src/api/auth/reset-password.ts`           | Endpoint de solicitação de reset               |
| `src/lib/validators/auth.ts`               | Schema de validação com Zod                    |

## 4. Arquivos a MODIFICAR

| Caminho                        | O que Muda                          | O que Mantém Intacto               |
|--------------------------------|-------------------------------------|-------------------------------------|
| `src/app/routes.ts`            | Adicionar rota /reset-password      | Todas as rotas existentes           |
| `src/lib/db/schema.ts`         | Adicionar tabela reset_tokens       | Tabelas users e sessions existentes |

## 5. Arquivos que NÃO devem ser tocados

[Liste explicitamente arquivos que poderiam ser tentadores de modificar mas NÃO devem ser alterados nesta issue.]

- `src/components/auth/LoginForm.tsx` — escopo separado
- `src/middleware/auth.ts` — sem impacto nesta issue

---

## 6. Agente Recomendado

[Indicar qual tipo de agente/contexto deve executar este plano.]

- **Backend**: Criar tabela, endpoint e validação
- **Frontend**: Criar componente visual (após backend pronto)
```

---

## Regras do Plano

1. **Zero código fonte**: O plano descreve, não implementa
2. **Caminhos exatos**: Todo arquivo usa path completo relativo à raiz do projeto
3. **Coluna "O que Mantém"**: Obrigatória em arquivos modificados — previne o efeito cobertor curto
4. **Cenários completos**: Caminho feliz + edge cases + erros são obrigatórios
5. **Agente declarado**: Especificar se a execução é backend, frontend ou ambos

---

## Critérios de Qualidade

Um plano é considerado aprovável quando:

1. **Sem código**: Nenhuma linha de implementação presente
2. **Arquivos explícitos**: Todo arquivo tem caminho exato e finalidade clara
3. **Proteção do existente**: Arquivos modificados declaram o que mantém intacto
4. **Cenários cobertos**: Pelo menos 2 edge cases e 2 tratativas de erro
5. **Não toca no que não deve**: Lista de arquivos intocáveis presente
