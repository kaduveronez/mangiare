# CI/CD Pipeline for Skill Engineering

This document defines the exact pipeline that governs skill creation and iteration.
The pipeline is sequential and mandatory. No step can be skipped without explicit user override.

---

## Pipeline Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: INTENT                                                        │
│  ┌──────────┐   ┌──────────────┐   ┌──────────────┐                    │
│  │ Interview │──▶│ Data Contract │──▶│Golden Dataset│                    │
│  └──────────┘   │ (Schemas)    │   │ (Examples)   │                    │
│                  └──────────────┘   └──────────────┘                    │
├─────────────────────────────────────────────────────────────────────────┤
│  PHASE 2: BUILD                                                         │
│  ┌───────────┐   ┌───────────┐   ┌──────────┐   ┌──────────────┐      │
│  │ Write Eval│──▶│ Draft Skill│──▶│ Structure│──▶│ Quick        │      │
│  │ Assertions│   │ (SKILL.md) │   │ Resources│   │ Validate     │      │
│  └───────────┘   └───────────┘   └──────────┘   └──────────────┘      │
├─────────────────────────────────────────────────────────────────────────┤
│  PHASE 3: BENCHMARK & ITERATE                                           │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────────┐    │
│  │ Run Evals│──▶│ Grade &  │──▶│ Human    │──▶│ Improve &        │    │
│  │ (A vs B) │   │ Aggregate│   │ Review   │   │ Re-run           │    │
│  └──────────┘   └──────────┘   └──────────┘   └──────────────────┘    │
├─────────────────────────────────────────────────────────────────────────┤
│  PHASE 4: SHIP                                                          │
│  ┌───────────────┐   ┌──────────┐   ┌──────────┐                      │
│  │ Optimize      │──▶│ Package  │──▶│ Deliver  │                      │
│  │ Description   │   │ (.skill) │   │ to User  │                      │
│  └───────────────┘   └──────────┘   └──────────┘                      │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## PHASE 1: INTENT — Define What Success Looks Like Before Writing a Single Instruction

### Step 1.1: Interview the User (Product Manager)

The user is the Product Manager; you are the Chief Engineer. Your job is to extract a clear specification, not to start building immediately.

Questions to resolve before proceeding:

| Question | Why It Matters |
|---|---|
| What capability does this skill enable? | Defines the skill's scope boundary |
| What user phrases should trigger it? | Feeds directly into the `description` field |
| What is the expected output format? | Determines whether data contracts are needed |
| Are outputs objectively verifiable? | Determines whether quantitative evals apply |
| What tools or external resources does it need? | Identifies script and reference dependencies |
| What should this skill NOT do? | Prevents over-triggering and scope creep |

Adapt question depth to the user's technical fluency. If the user is non-technical, translate jargon into plain language. If the user is highly technical, use precise terminology.

Do not proceed to Step 1.2 until you can articulate the skill's purpose in one sentence.

### Step 1.2: Define Data Contracts (When Applicable)

Data contracts apply when the skill's output has a deterministic structure (JSON, tables, filled forms, structured documents). Skip this step for subjective-output skills (creative writing, art, open-ended advice).

Create two files:

**`data_contract/input.schema.json`** — What the skill expects to receive:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SkillNameInput",
  "type": "object",
  "properties": { },
  "required": [ ]
}
```

**`data_contract/output.schema.json`** — What the skill must produce:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "SkillNameOutput",
  "type": "object",
  "properties": { },
  "required": [ ]
}
```

Schemas serve two purposes: they constrain the LLM's output at design time, and they enable programmatic assertion checking at eval time (e.g., "Is the output valid against output.schema.json?").

### Step 1.3: Collect the Golden Dataset

Request 2-3 examples of ideal input-output pairs from the user. These are not test cases — they are the "north star" that the skill will be optimized against.

Save examples to `examples/`:
```
examples/
├── example_01_input.md   (or .json, .txt, etc.)
├── example_01_output.md
├── example_02_input.md
└── example_02_output.md
```

If the user cannot provide examples, collaborate to create them. A skill without examples is a skill without a compass.

---

## PHASE 2: BUILD — Construct the Skill from the Outside In

### Step 2.1: Write Eval Assertions First (TDD)

Before writing any instruction in SKILL.md, define what success looks like. Save to `evals/evals.json`:

```json
{
  "skill_name": "my-skill",
  "evals": [
    {
      "id": 1,
      "prompt": "Realistic user prompt",
      "expected_output": "Human-readable success description",
      "files": [],
      "expectations": [
        "The output is a valid JSON file conforming to output.schema.json",
        "The script scripts/process.py was invoked",
        "The summary section contains at least 3 bullet points"
      ]
    }
  ]
}
```

Good assertions are:
- **Discriminating**: They pass when the skill works and fail when it doesn't. "Output exists" is not discriminating.
- **Verifiable**: They can be checked programmatically or by reading outputs. "Output is good" is not verifiable.
- **Independent**: Each tests a different dimension. Don't write 5 assertions that all check the same thing.

For subjective-output skills: skip formal assertions and rely on human review in Phase 3. Don't force quantitative evals onto qualitative work.

### Step 2.2: Draft the Skill

Now write the SKILL.md and supporting resources. Follow the Progressive Disclosure architecture:

**Level 1 — Frontmatter (Always in context, ~100 words):**
```yaml
---
name: my-skill
description: >
  [What it does] + [When to use it] + [When NOT to use it].
  Max 1024 characters. This is a classifier trigger, not documentation.
---
```

**Level 2 — SKILL.md Body (Loaded on trigger, <500 lines):**
Acts as a control panel. Contains the core workflow, decision tree, and pointers to Level 3 resources. Does NOT contain large reference tables, API documentation, or long examples — those go in `references/`.

**Level 3 — Bundled Resources (Loaded on demand, unlimited):**

| Directory | Purpose | Freedom Level |
|---|---|---|
| `references/` | Domain knowledge, schemas, API docs, heuristics | High (context) |
| `scripts/` | Deterministic execution — PDF processing, data transforms, validation | Low (code) |
| `examples/` | Golden Dataset, few-shot examples | Medium (patterns) |
| `assets/` | Templates, icons, fonts used in output | N/A (static) |
| `data_contract/` | JSON Schemas for input/output | Low (contracts) |
| `evals/` | Test cases and assertion definitions | N/A (testing) |

The critical heuristic: **if the same code appears in 2+ test run transcripts, extract it to `scripts/`**. Do not let the LLM reinvent the wheel every invocation.

### Step 2.3: Quick Validate

Run the structural validator:
```bash
python -m scripts.quick_validate <skill-name-or-path>
```

This checks: frontmatter exists, name is kebab-case (≤64 chars), description ≤1024 chars, SKILL.md ≤500 lines.

---

## PHASE 3: BENCHMARK & ITERATE — Prove the Skill Works with Data

### Step 3.1: Run Eval Cases (With-Skill vs. Baseline)

For each eval in `evals/evals.json`, spawn TWO parallel subagents in the same turn:

| Run | Configuration | What It Tests |
|---|---|---|
| **With-skill** | Agent reads SKILL.md and follows its instructions | Skill effectiveness |
| **Baseline** | Same prompt, no skill (or old skill version) | What happens without the skill |

Directory structure:
```
<skill-name>-workspace/
└── iteration-1/
    ├── eval-descriptive-name/
    │   ├── with_skill/
    │   │   ├── outputs/
    │   │   └── timing.json
    │   ├── without_skill/
    │   │   ├── outputs/
    │   │   └── timing.json
    │   └── eval_metadata.json
    └── benchmark.json
```

Save `timing.json` from each subagent's completion notification immediately — this data is ephemeral.

### Step 3.2: Grade (The Tribunal of Agents)

After all runs complete, invoke the three-agent tribunal:

**Agent 1 — Grader** (read `agents/grader.md`):
- Evaluates each assertion against the transcript and outputs
- Produces `grading.json` with pass/fail + evidence per assertion
- Critiques the evals themselves (flags non-discriminating assertions)
- For programmatically verifiable assertions, write and run a script — don't eyeball it

**Agent 2 — Blind Comparator** (read `agents/comparator.md`, optional):
- Receives both outputs without knowing which is which
- Scores on a rubric (correctness, completeness, organization, usability)
- Produces `comparison.json` with winner and reasoning
- Use this when quantitative pass rates are close and you need a tiebreaker

**Agent 3 — Post-hoc Analyzer** (read `agents/analyzer.md`):
- Reads the benchmark data and surfaces hidden patterns
- Detects: non-discriminating assertions, flaky evals, time/token tradeoffs
- Produces `analysis.json` with actionable improvement suggestions

### Step 3.3: Aggregate into Benchmark

```bash
python -m scripts.aggregate_benchmark <workspace>/iteration-N --skill-name <name>
```

This produces `benchmark.json` and `benchmark.md` with:
- Per-configuration stats: mean ± stddev for pass_rate, time, tokens
- Delta between configurations

See `references/schemas.md` for the exact `benchmark.json` schema the viewer expects.

### Step 3.4: Human Review (Non-Negotiable)

Generate the eval viewer BEFORE making any edits yourself. The human's judgment is the ground truth.

```bash
# Browser environment:
nohup python <skill-creator-path>/eval-viewer/generate_review.py \
  <workspace>/iteration-N \
  --skill-name "my-skill" \
  --benchmark <workspace>/iteration-N/benchmark.json \
  > /dev/null 2>&1 &

# Headless/Cowork environment:
python <skill-creator-path>/eval-viewer/generate_review.py \
  <workspace>/iteration-N \
  --skill-name "my-skill" \
  --benchmark <workspace>/iteration-N/benchmark.json \
  --static <output-path>/review.html
```

For iteration 2+, add `--previous-workspace <workspace>/iteration-<N-1>`.

The viewer has two tabs:
- **Outputs**: Side-by-side review of each test case with feedback textboxes
- **Benchmark**: Quantitative dashboard with pass rates, timing, analyst notes

### Step 3.5: Read Feedback and Iterate

Read `feedback.json` from the viewer. Empty feedback = user is satisfied.

When improving the skill:
1. **Generalize** — Fix the root cause, not the symptom. The skill will run on many different prompts.
2. **Trim fat** — Read the transcripts. If the skill wastes tokens on unproductive steps, cut those instructions.
3. **Explain the why** — Instead of rigid MUSTs, explain reasoning. LLMs with good theory of mind follow principles better than rules.
4. **Extract repeated work** — If all test runs independently wrote the same helper script, bundle it in `scripts/`.

After improving, re-run ALL evals into `iteration-<N+1>/` with fresh baselines. Repeat until:
- User feedback is empty on all cases
- Delta in benchmark.json is positive
- No meaningful progress is being made

---

## PHASE 4: SHIP — Optimize, Package, Deliver

### Step 4.1: Optimize the Description (Trigger Classifier)

The `description` field is the skill's classifier. Optimize it as a classification problem.

1. **Generate eval queries**: Create 20 queries — 10 should-trigger, 10 should-not-trigger. Queries must be realistic and detailed. Focus should-not-trigger on near-misses, not obviously unrelated queries.

2. **Review with user**: Present queries using `assets/eval_review.html` for editing.

3. **Run optimization loop**:
```bash
python -m scripts.run_loop \
  --eval-set <path-to-trigger-eval.json> \
  --skill-path <path-to-skill> \
  --model <model-id-powering-this-session> \
  --max-iterations 5 \
  --verbose
```

The loop uses 60/40 train/test split, evaluates each query 3x for reliability, selects best description by test score to prevent overfitting.

4. **Apply result**: Update frontmatter with `best_description`.

### Step 4.2: Package

```bash
python -m scripts.package_skill <path/to/skill-folder>
```

### Step 4.3: Deliver

Present the `.skill` file to the user via `present_files` if available, or provide the path for download.

---

## Decision Gate: Is the Skill Ready?

| Gate | Criterion |
|---|---|
| **Structural** | `quick_validate.py` passes |
| **Functional** | benchmark.json shows positive pass_rate delta vs. baseline |
| **Human** | User feedback is empty on all test cases |
| **Trigger** | Description optimization achieves ≥80% on held-out test set |

If any gate fails, loop back to Phase 3.

---

## Environment-Specific Adaptations

### Claude Code (Full Pipeline)
All phases work as described.

### Cowork (Headless)
- Use `--static` flag for eval viewer
- Feedback downloads as `feedback.json` file
- Description optimization works via `claude -p` subprocess

### Claude.ai (No Subagents)
- Run test cases sequentially, in-process
- Skip baseline runs
- Present results inline in conversation
- Skip quantitative benchmarking and description optimization
- Focus on qualitative human feedback

---

## Quick Reference: Scripts

| Script | Purpose | Phase |
|---|---|---|
| `scripts/quick_validate.py` | Structural validation | 2 |
| `scripts/aggregate_benchmark.py` | Aggregate grading into benchmark.json | 3 |
| `scripts/run_eval.py` | Test description triggering | 4 |
| `scripts/improve_description.py` | Propose improved descriptions | 4 |
| `scripts/run_loop.py` | Full trigger optimization loop | 4 |
| `scripts/generate_report.py` | HTML report for trigger optimization | 4 |
| `scripts/package_skill.py` | Package into .skill file | 4 |
| `eval-viewer/generate_review.py` | Human review viewer | 3 |

## Quick Reference: Agent Protocols

| Agent | File | Input | Output |
|---|---|---|---|
| Grader | `agents/grader.md` | Transcript + outputs + assertions | `grading.json` |
| Blind Comparator | `agents/comparator.md` | Two outputs (anonymized) | `comparison.json` |
| Post-hoc Analyzer | `agents/analyzer.md` | Benchmark data + skills + transcripts | `analysis.json` |
