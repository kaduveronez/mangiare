# Anti-Patterns do Desenvolvimento com IA

Catálogo dos 5 erros mais comuns ao delegar desenvolvimento para IA, e como o workflow Spec-Driven os neutraliza.

---

## 1. Sobrecarga de Contexto

**O que é**: Passar uma funcionalidade inteira de uma vez lota a janela de contexto, fazendo a IA "engasgar" e produzir implementações incompletas ou incorretas.

**Como ocorre**: "Crie o sistema completo de autenticação com login, registro, recuperação de senha, 2FA, sessões e logout."

**Como o workflow previne**: A fase Break fragmenta o escopo em issues atômicas. Cada issue cabe confortavelmente na janela de contexto. A IA recebe uma tarefa por vez — nunca o sistema inteiro.

---

## 2. Código Bagunçado e Redundante

**O que é**: Sem planejamento, a IA esquece componentes que já criou e tenta reinventar a roda, gerando duplicação que dobra o trabalho de manutenção.

**Como ocorre**: A IA cria um `Button.tsx` na issue 3, esquece dele na issue 7, e cria um `CustomButton.tsx` com a mesma funcionalidade.

**Como o workflow previne**: A fase Plan exige que a IA pesquise o projeto antes de propor arquivos novos. O campo "Arquivos a MODIFICAR" obriga a buscar o que já existe. O `design_system.md` na pasta `references/` documenta componentes reutilizáveis.

---

## 3. Desobediência a Arquivos

**O que é**: Pedir uma funcionalidade genérica faz a IA adivinhar onde deve mexer, frequentemente alterando os arquivos errados.

**Como ocorre**: "Crie o sistema de recuperação de senha" — a IA decide por conta própria modificar o middleware de autenticação, o layout principal e três componentes não relacionados.

**Como o workflow previne**: O plano de execução lista explicitamente QUAIS arquivos criar, QUAIS modificar e QUAIS não tocar. A IA na fase Execute apenas transcreve o plano — não decide onde mexer.

---

## 4. Efeito "Cobertor Curto"

**O que é**: A ausência de isolamento faz com que ajustar uma funcionalidade quebre outra.

**Como ocorre**: Ao implementar notificações, a IA mexe no hook de autenticação "para facilitar", quebrando o login silenciosamente.

**Como o workflow previne**: A coluna "O que Mantém Intacto" no plano e a lista de "Arquivos que NÃO devem ser tocados" criam uma zona de proteção explícita. A fase Break garante que cada issue tem escopo isolado.

---

## 5. Falhas Críticas de Segurança

**O que é**: A IA expõe lógica de negócio, chaves de API e validações no front-end, tornando a aplicação vulnerável a manipulações no navegador.

**Como ocorre**: Validação de cupom de desconto feita em JavaScript no client — qualquer usuário pode abrir o DevTools e forçar `isValid = true`.

**Como o workflow previne**: A regra "Thin Client, Fat Server" é documentada no `architecture.md` da pasta `references/`. O front-end captura intenções e repassa para o servidor. O campo "Agente Recomendado" no plano separa explicitamente o que é responsabilidade do backend vs. frontend.

---

## Sinais de Alerta Durante a Execução

Se durante a fase Execute qualquer um destes sinais aparecer, PARE e revise o plano:

- IA sugere criar arquivo que já existe no projeto
- IA modifica arquivo que não está listado no plano
- Lógica de validação de negócio aparece em arquivo `.tsx` ou `.vue`
- Chaves de API ou secrets aparecem em código client-side
- Um componente visual contém chamadas diretas ao banco de dados
- A IA diz "vou ajustar isso aqui também para facilitar" — isso é scope creep
