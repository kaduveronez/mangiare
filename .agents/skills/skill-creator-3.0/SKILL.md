---
name: skill-creator 3
description: >
  Orchestrator for creating, testing, and optimizing skills through a rigorous
  engineering pipeline: data contracts, TDD-driven evals, blind benchmarking,
  and trigger optimization. Use ALWAYS when the user wants to create a skill
  from scratch, improve or rewrite an existing skill, run evals or benchmarks
  on a skill, optimize a skill's description for better triggering, package a
  skill for distribution, or debug why a skill isn't performing well. Also use
  when the user says "turn this into a skill", "make a skill for X", "my skill
  isn't triggering", "test my skill", "benchmark this skill", or any variation
  of skill lifecycle management. Do NOT use for: installing skills, general
  prompt engineering unrelated to skills, or MCP server creation.
---

# Skill Creator 3.0

You are the **Chief Engineer**. The user is the **Product Manager**.
Your job: turn the user's intent into a tested, benchmarked, optimized skill.

## How This Skill Works

This skill orchestrates a 4-phase pipeline. Each phase has a clear entry condition, deliverables, and exit gate. The full pipeline is documented in `references/workflows.md` — read it at the start of every engagement.

```
INTENT ──▶ BUILD ──▶ BENCHMARK & ITERATE ──▶ SHIP
```

Before writing any skill code, always read:
- `references/workflows.md` — The CI/CD pipeline (phases, scripts, decision gates)
- `references/anti_patterns.md` — What NOT to do (read before drafting, again before shipping)

---

## ACT I — INTENT: Understand Before You Build

**Entry**: User has an idea for a skill (or an existing skill to improve).
**Exit**: You can state the skill's purpose in one sentence, and have contracts + examples.

### 1. Interview

Extract a clear specification. Adapt your language to the user's technical fluency — if they're non-technical, skip jargon; if they're engineers, be precise.

Key questions (ask naturally, not as a checklist):
- What should this skill enable?
- What phrases should trigger it? What should NOT trigger it?
- What's the expected output format?
- Can the user provide 2-3 examples of ideal input → output?
- Are outputs objectively verifiable, or subjective?

If the conversation already contains a workflow the user wants to capture ("turn this into a skill"), extract answers from the conversation history first. Only ask for what's missing.

### 2. Data Contracts (When Applicable)

For skills with structured output (JSON, tables, forms, documents with fixed sections), create:

```
data_contract/
├── input.schema.json    # What the skill expects
└── output.schema.json   # What the skill must produce
```

Skip this for subjective-output skills (creative writing, art, open-ended advice). The distinction matters: a skill that generates reports needs a contract; a skill that writes poetry doesn't.

See `references/workflows.md` → Phase 1, Step 1.2 for schema templates.

### 3. Golden Dataset

Collect 2-3 ideal input-output pairs from the user. Save to `examples/`. These are the north star — the skill will be optimized against them.

If the user can't provide examples, collaborate to create them together. A skill without examples is a skill without a compass.

---

## ACT II — BUILD: Test-Driven Skill Construction

**Entry**: You have a clear spec, contracts (if applicable), and examples.
**Exit**: A structurally valid skill with eval assertions ready to run.

### 4. Write Assertions First (TDD)

Before writing a single instruction in SKILL.md, define success. Save to `evals/evals.json`.

Good assertions are **discriminating** (pass when skill works, fail when it doesn't), **verifiable** (checkable programmatically or by reading outputs), and **independent** (each tests a different dimension).

For subjective skills: skip formal assertions, rely on human review in ACT III. Don't force quantitative evals onto qualitative work.

See `references/schemas.md` for the `evals.json` schema.

### 5. Draft the Skill

Follow the **Progressive Disclosure** architecture — three levels of loading:

| Level | What | Token Budget | When Loaded |
|---|---|---|---|
| **1. Frontmatter** | `name` + `description` | ~100 words | Always in context |
| **2. SKILL.md body** | Core workflow + routing | <500 lines | On skill trigger |
| **3. Resources** | references/, scripts/, examples/ | Unlimited | On demand |

**The description is a classifier**, not documentation. Max 1024 characters. Focus exclusively on trigger conditions: when to use, when not to use, specific phrases. Everything else goes in the body.

**The SKILL.md body is a control panel**, not an encyclopedia. It contains the core workflow, decision trees, and pointers to Level 3 resources. If you're approaching 500 lines, you're putting things in SKILL.md that belong in `references/`.

**Level 3 resources** are the skill's memory and hands:

| Directory | Purpose | When to Use |
|---|---|---|
| `references/` | Domain knowledge, schemas, heuristics | Context the model needs but not on every invocation |
| `scripts/` | Deterministic execution (Python/Bash) | Tasks with one correct answer — don't let the LLM guess |
| `examples/` | Golden Dataset, few-shot patterns | Input-output pairs that define quality |
| `assets/` | Templates, fonts, icons | Static files used in output |
| `data_contract/` | JSON Schemas | Structural contracts for I/O |
| `evals/` | Test cases and assertions | Testing infrastructure |

**Critical heuristic**: if a script appears in 2+ test run transcripts, extract it to `scripts/`. Don't let the LLM reinvent the wheel.

#### Writing Principles

- **Explain the why.** "Use UTC timestamps because downstream consumers parse dates assuming UTC" beats "ALWAYS use UTC". The model can extrapolate principles to novel situations; it can't extrapolate commands.
- **Match freedom to fragility.** Open field → text instructions. Narrow bridge with cliffs → script. See `references/anti_patterns.md` → "Script Aversion".
- **Prefer examples over explanations.** A concrete input-output pair teaches format, style, and structure in 10 lines. A verbal description of the same thing takes 50 and leaves ambiguity.
- **Keep it lean.** Every line in SKILL.md competes for attention. If a paragraph isn't pulling its weight, cut it. Read `references/anti_patterns.md` → "Instruction Theater" before drafting.

### 6. Validate Structure

```bash
python -m scripts.quick_validate <skill-name-or-path>
```

Checks: frontmatter present, name kebab-case ≤64 chars, description ≤1024 chars, no angle brackets in description.

---

## ACT III — BENCHMARK & ITERATE: Prove It Works with Data

**Entry**: A structurally valid skill with assertions.
**Exit**: Positive delta in benchmark, satisfied user, optimized trigger.

### 7. Run Evals (A/B)

For each eval, spawn TWO parallel subagents in the same turn:
- **With-skill**: Agent reads SKILL.md and executes the task
- **Baseline**: Same prompt, no skill (new skill) or old skill version (improvement)

Save results to `<skill-name>-workspace/iteration-N/`. Save `timing.json` from each subagent notification immediately — the data is ephemeral.

See `references/workflows.md` → Phase 3, Step 3.1 for directory structure and subagent prompts.

### 8. Grade with the Tribunal

Invoke the agent tribunal after all runs complete:

1. **Grader** (`agents/grader.md`): Evaluates assertions → `grading.json`. For programmatic assertions, write a verification script — don't eyeball it.
2. **Blind Comparator** (`agents/comparator.md`, optional): A/B test without revealing which output came from which configuration → `comparison.json`. Use when pass rates are close.
3. **Post-hoc Analyzer** (`agents/analyzer.md`): Surfaces hidden patterns — non-discriminating assertions, flaky evals, time/token tradeoffs → `analysis.json`.

Then aggregate:
```bash
python -m scripts.aggregate_benchmark <workspace>/iteration-N --skill-name <name>
```

### 9. Human Review

Generate the eval viewer and present it to the user BEFORE making any edits yourself:

```bash
# Headless/Cowork:
python <skill-creator-path>/eval-viewer/generate_review.py \
  <workspace>/iteration-N \
  --skill-name "my-skill" \
  --benchmark <workspace>/iteration-N/benchmark.json \
  --static <output-path>/review.html

# Browser environment:
nohup python <skill-creator-path>/eval-viewer/generate_review.py \
  <workspace>/iteration-N \
  --skill-name "my-skill" \
  --benchmark <workspace>/iteration-N/benchmark.json \
  > /dev/null 2>&1 &
```

For iteration 2+, add `--previous-workspace <workspace>/iteration-<N-1>`.

Tell the user: "I've prepared the results for your review. The Outputs tab shows each test case; the Benchmark tab shows quantitative comparison. When you're done reviewing, let me know."

### 10. Iterate

Read `feedback.json`. Empty feedback = satisfied. Focus improvements on cases with specific complaints.

**How to improve well** (read `references/anti_patterns.md` → "Eval Overfitting" before editing):

1. **Generalize from feedback** — Fix the root cause across all cases, not case-specific hacks.
2. **Read the transcripts** — If the model wastes tokens following unproductive instructions, remove them.
3. **Extract repeated work** — If all runs independently wrote the same helper, bundle it as a script.
4. **Draft, then critique** — Write your revision, then re-read it with fresh eyes. Ask: "Am I overfitting? Am I adding theater? Would I trust this instruction to work on 1,000 different prompts?"

Re-run ALL evals into `iteration-<N+1>/`. Repeat until the Decision Gate passes (see `references/workflows.md`).

### 11. Optimize the Trigger

After the skill is functionally complete and the user is satisfied:

1. Generate 20 trigger eval queries (10 should-trigger, 10 should-not-trigger). Make them realistic, detailed, and focused on edge cases — not toy examples.
2. Present to user for review using `assets/eval_review.html`.
3. Run the optimization loop:
```bash
python -m scripts.run_loop \
  --eval-set <path-to-eval.json> \
  --skill-path <path-to-skill> \
  --model <model-id> \
  --max-iterations 5 --verbose
```
4. Apply `best_description` to frontmatter. Show before/after to the user.

### 12. Package and Deliver

```bash
python -m scripts.package_skill <path/to/skill-folder>
```

Present the `.skill` file via `present_files` if available. Otherwise provide the path.

---

## Quick Decision Tree

```
User wants to...
├── Create a new skill         → Start at ACT I, Step 1
├── Improve an existing skill  → Snapshot the old skill, start at ACT I (quick interview), then ACT III
├── Test/benchmark a skill     → Start at ACT III, Step 7
├── Optimize trigger only      → Start at ACT III, Step 11
├── Debug poor performance     → Read transcripts, check anti-patterns, then ACT III
└── "Just vibe with me"        → Adapt. Skip formalism, keep the user happy, iterate informally.
```

---

## Environment Adaptations

**Claude Code**: Full pipeline. Subagents, browser viewer, description optimization — everything works.

**Cowork (Headless)**: Use `--static` for eval viewer. Feedback downloads as file. Description optimization works via `claude -p`.

**Claude.ai (No Subagents)**: Run test cases sequentially in-process. Skip baselines and benchmarking. Present results inline. Focus on qualitative feedback. Skip description optimization (requires `claude -p`).

---

## Communication Style

Adapt to the user's technical level. Default to plain language with brief term explanations. Use jargon only when the user signals familiarity. Never overwhelm a non-technical user with schema definitions or JSON structures — abstract them behind simple explanations.

The skill creator will be used by people ranging from terminal-first engineers to first-time non-technical users. Meet them where they are.

---

## Reference Map

| Need | Read |
|---|---|
| Full CI/CD pipeline with exact commands | `references/workflows.md` |
| What NOT to do (before drafting and before shipping) | `references/anti_patterns.md` |
| JSON schemas for all data structures | `references/schemas.md` |
| How to grade assertions | `agents/grader.md` |
| How to run blind A/B comparison | `agents/comparator.md` |
| How to analyze benchmark patterns | `agents/analyzer.md` |
