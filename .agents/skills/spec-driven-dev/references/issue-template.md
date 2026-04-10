# Template: Issues (Quebra de Tarefas)

Use este template ao fragmentar a spec.md em tarefas individuais.
Cada issue deve ser atômica — pequena o suficiente para não afogar a janela de contexto da IA.

---

## Regras de Fragmentação

### 1. Protótipos Visuais Primeiro

Cada rota/página da spec vira UMA issue exclusivamente visual.
Sem lógica de negócio, sem integração com API, sem estado complexo.

**Objetivo**: Ter o layout funcional com dados mockados antes de conectar qualquer backend.

**Porque isso funciona**: A IA produz componentes visuais com alta qualidade quando não precisa pensar simultaneamente em regras de negócio. Misturar as duas preocupações é o padrão que gera código espaguete.

### 2. Isolamento Funcional de Comportamentos

Cada behavior da spec.md vira UMA issue separada.
Nunca agrupe dois behaviors em uma mesma issue, mesmo que pareçam relacionados.

**Exemplo errado**: "Implementar login e recuperação de senha"
**Exemplo correto**: Issue separada para "Fazer Login" + Issue separada para "Recuperar Senha"

### 3. Infraestrutura como Issue Própria

Setup de banco de dados, configuração de autenticação, setup de ambiente — cada um é uma issue isolada que precede as issues de comportamento.

---

## Formato Padrão de Issue

```markdown
# ISSUE-001: [Título descritivo]

## Tipo
[prototipo-visual | comportamento | infraestrutura | integracao]

## Descrição
[O que deve ser feito, em 2-3 frases claras.]

## Critérios de Aceite
- [ ] [Critério verificável 1]
- [ ] [Critério verificável 2]
- [ ] [Critério verificável 3]

## Dependências
- ISSUE-XXX (se houver)

## Contexto da Spec
> [Trecho relevante da spec.md que originou esta issue]

## Notas
[Qualquer observação relevante para quem for implementar — humano ou IA.]
```

---

## Ordem de Execução Recomendada

```
1. Issues de infraestrutura (banco, auth, ambiente)
2. Issues de protótipo visual (layout de cada página)
3. Issues de comportamento (funcionalidades isoladas)
4. Issues de integração (conectar front ↔ back)
```

Esta ordem garante que cada camada tenha fundação sólida antes de avançar.

---

## Critérios de Qualidade

Uma quebra de issues é considerada completa quando:

1. **Cobertura total**: Todo behavior e toda rota da spec tem pelo menos uma issue
2. **Atomicidade**: Nenhuma issue mistura preocupações de camadas diferentes
3. **Dependências explícitas**: Cada issue declara de quem depende
4. **Critérios verificáveis**: Todo critério de aceite é binário (passou ou não passou)
