# Anti-Patterns in Skill Engineering

A catalog of failure modes observed across hundreds of skill creation attempts.
Read this before writing a skill, and again before shipping one.

---

## Structural Anti-Patterns

### 1. Instruction Theater

**What it is**: A SKILL.md file with 1,500+ lines of verbose instructions, MUSTs in all caps, and deeply nested sections — but no scripts, no schemas, no examples. The author confuses "more instructions" with "better outcomes".

**Why it fails**: LLMs have diminishing returns on instruction length. After ~500 lines, additional instructions compete for attention and degrade the most important ones. The model can't distinguish priority when everything is marked CRITICAL.

**The fix**: Apply the 500-line rule. If the SKILL.md is approaching this limit, it means you're trying to encode procedural knowledge that belongs in `scripts/` or domain knowledge that belongs in `references/`. Move it out. The SKILL.md should be a control panel that routes to resources, not an encyclopedia.

**Diagnostic question**: "If I deleted the bottom half of this SKILL.md, would the model still produce 80% of the correct output?" If yes, the bottom half isn't pulling its weight.

---

### 2. Format Hallucination

**What it is**: Expecting the LLM to produce perfectly structured output (JSON, tables, specific XML) through natural language instructions alone, without providing a JSON Schema or concrete example.

**Why it fails**: LLMs are probabilistic. Without a formal contract, the model will approximate the format — sometimes correctly, sometimes with subtle structural errors that break downstream consumers. The variance is unacceptable for production skills.

**The fix**: For any skill with structured output, create `data_contract/output.schema.json`. Reference it in the SKILL.md: "Validate output against `data_contract/output.schema.json`." Include one concrete example in `examples/` showing the exact expected shape.

**Diagnostic question**: "Can I programmatically verify this output with a JSON Schema validator?" If no, you're relying on luck.

---

### 3. The Monolith

**What it is**: Everything lives in SKILL.md — the workflow, the API documentation, the examples, the error handling, the edge cases, the history. No `references/`, no `scripts/`, no `examples/` directory.

**Why it fails**: Every invocation loads the entire monolith into context, wasting tokens on sections irrelevant to the current task. A skill that handles 5 different file formats loads documentation for all 5 even when the user only needs one.

**The fix**: Progressive Disclosure. SKILL.md contains the core workflow and a decision tree that routes to the right reference file. Each reference file covers one domain, one format, or one variant.

**Diagnostic question**: "Is there a section in this SKILL.md that is only relevant 20% of the time?" If yes, extract it to `references/`.

---

### 4. Script Aversion

**What it is**: Writing elaborate natural language instructions for tasks that are deterministic and repetitive — PDF rotation, CSV parsing, date formatting, file renaming — instead of writing a 30-line Python script.

**Why it fails**: LLMs are stochastic. Every time the model "follows instructions" to parse a CSV, it might handle edge cases differently. A script handles them the same way every time, uses fewer tokens, and runs faster.

**The fix**: Apply the "Degrees of Freedom" heuristic:
- **High freedom** (strategy, analysis, creative work): Use text instructions.
- **Low freedom** (data transforms, file operations, validation): Use a script.

If the task has one correct answer, it should be a script, not an instruction.

**Diagnostic question**: "Would I trust a junior developer to write this logic correctly every time from a verbal description?" If no, write a script.

---

## Process Anti-Patterns

### 5. Assertion-Free Shipping

**What it is**: Creating a skill, manually testing it once ("looks good"), and shipping it without formal assertions or baseline comparison.

**Why it fails**: You're optimizing for n=1. The skill might work perfectly on your test case and fail catastrophically on the next 50 variations. Without assertions, regression is invisible — you won't know when a skill improvement breaks a previously working case.

**The fix**: Follow the TDD pipeline. Write assertions before writing instructions. Run with-skill vs. baseline. If you can't define assertions (subjective output), at minimum run 3 test cases and get human feedback on all of them.

**Diagnostic question**: "If this skill regresses tomorrow, how would I detect it?" If the answer is "a user complains", you need assertions.

---

### 6. Eval Overfitting

**What it is**: Tuning the skill's instructions until all 3 test cases pass perfectly — by adding case-specific hacks rather than generalizing the approach.

**Why it fails**: The skill now works for 3 prompts and nothing else. The instructions are a patchwork of "if the user asks about X, do Y" rules that don't compose. New prompts hit unexpected paths and produce garbage.

**The fix**: When improving a skill after eval feedback:
1. Read ALL test case failures together, not one at a time
2. Identify the common root cause (there usually is one)
3. Fix the principle, not the symptom
4. If you find yourself writing "if...then" logic for specific test cases, stop and rethink

**Diagnostic question**: "Would this fix still work if I changed the test case slightly?" If no, you're overfitting.

---

### 7. Description Neglect

**What it is**: Writing a perfect SKILL.md with great scripts and examples — but leaving the `description` field as a one-line afterthought. "Handles PDF files."

**Why it fails**: The `description` is the ONLY thing the routing system sees. If it doesn't match the user's intent, the skill never triggers, no matter how good the instructions are. This is the most common cause of "my skill isn't being used".

**The fix**: Treat the description as a classifier trained on user queries. It should contain:
- What the skill does (briefly)
- Specific trigger phrases and contexts
- Edge cases where it should activate
- Adjacent domains where it should NOT activate

Run the trigger optimization loop (`scripts/run_loop.py`) with 20 realistic queries before shipping.

**Diagnostic question**: "If a user said [common phrasing for this task], would this description match?" Test at least 10 phrasings.

---

### 8. Baseline Blindness

**What it is**: Running with-skill evals and celebrating a 90% pass rate — without ever checking what the baseline (no skill) achieves.

**Why it fails**: Modern LLMs are remarkably capable without skills. If the baseline already achieves 85%, your skill is adding 5% for the cost of loading 500 lines of context. That might not be worth it — or worse, it might mean the skill is constraining the model's natural abilities.

**The fix**: Always run A/B: with-skill vs. without-skill (or new skill vs. old skill). The delta is what matters, not the absolute score. A skill that moves pass rate from 40% to 80% is valuable. A skill that moves it from 85% to 90% might not justify its token cost.

**Diagnostic question**: "What does the model do without my skill?" If you don't know, you can't prove your skill helps.

---

## Instruction Anti-Patterns

### 9. The Dictator

**What it is**: A SKILL.md written entirely in imperatives — "ALWAYS do X", "NEVER do Y", "YOU MUST follow Z" — without explaining why any of these rules exist.

**Why it fails**: LLMs respond better to reasoning than commands. When instructions conflict (and they will), the model has no principle to adjudicate — it picks whichever command has more emphasis markers. Explanations give the model a mental model to reason from when facing novel situations the instructions didn't anticipate.

**The fix**: For every rule, add a one-sentence "because". "Use UTC timestamps in all outputs, because downstream consumers parse dates assuming UTC and local times cause silent data corruption." The model can now extrapolate this principle to new situations.

**Diagnostic question**: "If I removed the ALL CAPS and bolding, would the model still follow this instruction?" If not, the instruction is leaning on emphasis rather than clarity.

---

### 10. The Wishful Thinker

**What it is**: Instructions that describe the desired outcome without specifying the mechanism. "Produce a high-quality report." "Ensure the data is clean." "Make it professional."

**Why it fails**: These are outcomes, not instructions. The model needs to know HOW to achieve them. "High-quality" means different things in different contexts, and without specifics, the model defaults to its training distribution — which may or may not match what the user wants.

**The fix**: Decompose outcomes into observable actions:
- "High-quality report" → "Include an executive summary, cite data sources, use the template in `assets/report_template.html`"
- "Clean data" → "Run `scripts/validate.py` on the output, fix any rows where the schema validation fails"
- "Professional" → "Use sentence case for headings, no emojis, formal tone"

**Diagnostic question**: "Could two reasonable people disagree on whether this instruction was followed?" If yes, it's too vague.

---

### 11. The Time Traveler

**What it is**: Referencing tools, APIs, or capabilities that don't exist in the execution environment. "Use the Jira MCP to check ticket status." "Call the Slack API to notify the team." The skill assumes access that may not be available.

**The fix**: Gate instructions on tool availability: "If the Jira MCP is available, check ticket status. Otherwise, ask the user for the ticket details." Or declare dependencies in the frontmatter `compatibility` field and let the routing system handle it.

---

### 12. The Archaeologist

**What it is**: Including a CHANGELOG.md, VERSION.md, README.md, or extensive commented-out sections in the skill package. Skills are for AI agents, not for museum display.

**Why it fails**: Every file in the skill package is a file the model might read, wasting tokens on metadata that provides zero execution value.

**The fix**: The skill package should contain only: SKILL.md, scripts/, references/, examples/, assets/, data_contract/, and evals/. No README (the SKILL.md IS the readme). No CHANGELOG (use git). No commented-out code.

---

## Trigger Anti-Patterns

### 13. Under-Triggering (Silent Failure)

**What it is**: The skill exists and works, but the description is too narrow. Users ask for the skill's functionality in natural language, but the routing system doesn't match because the description uses jargon the user doesn't.

**Example**: Description says "OOXML document manipulation" but users say "edit my Word doc".

**The fix**: Include both technical terms AND colloquial phrasings. "Create, read, edit, or manipulate Word documents (.docx files). Use when: 'Word doc', 'word document', '.docx', editing documents with formatting, tables of contents, headers, or page numbers."

---

### 14. Over-Triggering (False Positive)

**What it is**: The description is so broad that the skill triggers for tangentially related queries, consuming context tokens and potentially confusing the model.

**Example**: A "data analysis" skill that triggers every time someone mentions "data" — including "what's the data plan for my phone?"

**The fix**: Include explicit exclusions in the description. "Use for: statistical analysis, data visualization, pandas operations. Do NOT use for: database administration, data entry, data storage questions." Run the trigger optimization loop with near-miss negative cases.

---

### 15. Keyword Stuffing

**What it is**: Cramming the description with every possible synonym and keyword to maximize triggering. "PDF, portable document format, acrobat, document, file, paper, scan, print, read, write, edit, merge, split, rotate, compress, encrypt, decrypt, sign, annotate, bookmark, watermark, OCR, extract, convert..."

**Why it fails**: Beyond ~1024 characters, the description becomes noise. The routing system performs worse when the description is a keyword soup rather than a coherent sentence that explains the skill's purpose.

**The fix**: Write the description as you would explain the skill to a colleague in 2-3 sentences. Then add specific trigger phrases as a structured list. The optimization loop (`run_loop.py`) will find the right balance empirically.

---

## The Meta Anti-Pattern

### 16. Perfection Paralysis

**What it is**: Spending 10 iterations polishing a skill to 98% pass rate when iteration 3 already had 92%. The marginal improvements are invisible to real users, but each iteration costs significant time and tokens.

**The fix**: Apply the Decision Gate from `references/workflows.md`. If the skill passes all four gates (structural, functional, human, trigger), ship it. Real usage generates better feedback than synthetic evals. You can always iterate later with real-world failure cases.

**Diagnostic question**: "Would a real user notice the difference between this iteration and the last one?" If no, ship it.
