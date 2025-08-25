
A) Reduce hallucinations (quality/precision)
	•	Judge/Critic modules: a second model pass that scores the Draft against rules (e.g., “no API changes, keep types, handle errors”). Only accept ≥ threshold; else revise.
	•	Schema‑/type‑constrained outputs: force JSON/TS types for plans and patches (e.g., {changes: Patch[], risks: string[]}) and reject/repair malformed outputs.
	•	Self‑consistency: run N small Drafts with different seeds; pick best by a Judge or tests.
	•	Static checks loop: after Draft, run tsc/eslint/tests and feed diagnostics back into Critique (automated “verification” step).
	•	Spec‑trace prompts: require the model to annotate each change with a rationale and referenced evidence lines (evidence: [file#Lx-Ly]).

B) Stronger context (grounding, RAG)
	•	Retriever module: pluggable sources—selection, current file, /docs/**/*.md, repo search (ripgrep), and (later) web/GitHub. Merge top‑k into a single context.md.
	•	Citation enforcement: Draft must cite retrieved chunks ([doc:build.md §CI]); Judge rejects uncited claims.
	•	Context de‑dup & budgeter: score, deduplicate, and cap tokens; keep only the most relevant snippets per step.

C) Memory & focus (don’t forget prior findings)
	•	Short‑term working memory: compact previous turn’s Plan/Critique into a 10–20 line “context ledger” passed to next calls.
	•	Decision log: persist accepted decisions (APIs chosen, constraints) as a small JSON; every step must check it.
	•	Instruction pinning: a tiny, always‑included rule set (e.g., style, error policy) injected into every signature.

D) Safer refactors (guardrails)
	•	Patch generator + apply preview: produce unified diffs; refuse files outside workspace or changes exceeding a risk threshold.
	•	AST‑aware checks: quick AST parse to ensure exports/types remain compatible before proposing Final.

E) Proactive help (UX + next steps)
	•	Next‑step suggester: a lightweight module that, given task + critique, emits 2–3 actionable options (e.g., “Generate tests?”, “Create TODO?”, “Draft CI config prompt?”).
	•	Confidence meter: simple score (0–1) computed from Judge metrics + tool checks; show when low and suggest a follow‑up.

F) Performance & determinism
	•	Caching: memoize Retrieval results per file + hash; skip re‑fetching.
	•	Knobs per step: lower temperature for Draft, slightly higher for Plan; cap max tokens; timeouts with fallbacks.

G) Evaluation & tuning (lightweight)
	•	Golden mini‑set: keep 5–10 real refactor tasks; log Plan/Draft/Critique, Judge scores, and tool failures to track regressions.
	•	A/B routing: try two prompt variants for Plan; pick by Judge or tool outcome.

⸻
