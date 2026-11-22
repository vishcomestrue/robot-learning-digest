# Robot Learning Weekly Digest: project context

Handoff from a claude.ai session (2026-11-22). Read this first.

## Goal
Every Saturday 08:00 IST, produce a digest of the **5** most important arXiv papers from the
previous Saturday 00:00 to Friday 23:59 IST, in quadruped, humanoid and manipulation robot learning.
My ratings come from skimming, so treat them as a taste signal, not a quality verdict. The agent learns my taste from feedback over time.

## About me (taste profile)
- **Current work:** RL for humanoid locomotion on slopes and stairs. Broadly exploring legged
  locomotion on quadrupeds and humanoids. Proprioceptive now, moving toward exteroceptive
  (depth, height maps, vision).
- **Rank higher:** perceptive / terrain-aware locomotion, sim-to-real for legged robots, reward and
  curriculum design, teacher-student and privileged-information methods, fall recovery, AMP / motion-imitation priors (track the SuperMimic family and XMimic/XSoma),
  proprioceptive state + terrain estimation, Bellegarda's work.
- **Seed papers (loved):** see `seeds.md` (themes inferred from ~65 papers in my thesis/vault folders).
- **Followed authors / labs:** see `seeds.md` (ETH RSL, Berkeley/CMU, MIT Improbable AI, Zakka, Stanford).
- **Topic weights:** Quadruped 1.2 · Humanoid 1.2 · Manipulation 1.1 (adjusted from feedback, ±0.1 per rating).

## Selection
- **No fixed count.** Include every paper that clears the bar (typically 5–8): taste picks (closest to my work) + 1–2 **field picks** (biggest papers of the week
  outside my core area, mainly manipulation, judged by outside signals).
- Plus an "also notable" list: up to 5 titles, one line each.

## Scoring rubric (each 0–5)
| Criterion | Weight |
|---|---|
| Taste fit (seeds, liked themes, authors) | 35% |
| Novelty | 20% |
| Real-world evidence (hardware, sim-to-real) | 20% |
| Outside signal (HF Daily Papers upvotes, code/project page, lab) | 15% |
| Reusability (code, data, models) | 10% |
Field picks: swap Taste fit for Outside signal ×2.

## Pipeline (what worked in the test run)
1. **Collect:** arXiv daily catchup pages, one per weekday:
   `https://arxiv.org/catchup/cs.RO/YYYY-MM-DD` (Mon–Fri). Pages are long, so read each in **two
   passes** (they truncate around 100k chars). The arXiv API and `/search` are blocked by robots
   for the fetch tool; `/list/cs.RO/pastweek` only shows the latest day, partially.
2. **Keyword filter:** quadruped, legged, locomotion, humanoid, whole-body, loco-manipulation,
   manipulation, dexterous, VLA, imitation, diffusion policy, sim-to-real, teleoperation, mimic, motion prior, AMP, motion tracking, gait, state estimation.
3. **Triage** by title against the taste profile and keep ~25. **Deep read** the `arxiv.org/abs/<id>` pages,
   and the project page / PDF to check for code.
4. **Outside signal:** `https://huggingface.co/papers` (fetch the date pages for each day of the week,
   e.g. `https://huggingface.co/papers/date/YYYY-MM-DD`).

## Digest format (per paper)
Title · authors (lab) · arXiv link · code/project link
Tag: Must-read / Skim / FYI · Pick type: taste/field · Evidence: sim / real robot (which)
Why read: 3–4 lines on what it does, what's new, why it matters to me.

## Feedback protocol
I reply like `1 👍, 3 👎 too engineering-y, 5 meh`.
👍 → add the paper's themes/authors to liked, +0.1 topic weight · 👎 + reason → add to disliked, −0.1 ·
"meh" → small novelty penalty for that theme. Log every rating in `feedback_log.md`.

## Test run: week of Nov 14–20, 2026 (rated 2026-11-22)
1. PROOF, perceptive legged locomotion with OOD fallback to proprioception (2611.18305), Must-read
2. ReLoco, unified humanoid locomotion + fall recovery (2611.23916), Must-read
3. Body-aligned virtual joints to reuse training recipes across humanoids (2611.18003), Skim
4. SBEE, proprioceptive base + terrain elevation estimation (2611.24310), Skim
5. Hidden Variables Behind Real-Robot Data Quality, AgiBot (2611.22388), FYI field pick
Also notable: 2611.25958 (Bellegarda terrain gaits), 2611.20452 (XMimic/XSoma),
2611.24011 (WAM-Policy), 2611.23118 (RWM audit), 2611.26444 (Mind2Act World).

## Open items
- [x] Rate the test digest: all 👍; SBEE-style is useful; keep the manipulation slot; promote Bellegarda + XSoma (see `feedback_log.md`)
- [x] Add seed papers + authors (inferred; `seeds.md`)
- [ ] Decide where weekly runs happen: claude.ai cloud scheduled task (laptop can be off)
      vs. local cron on this laptop (misses weeks when it's off)
- [ ] Save digests as `digests/YYYY-MM-DD.md` in this folder

## Website
`site/index.html` (open in a browser) renders `site/data.js`. Each weekly run must prepend a week object to
`DIGESTS` in `site/data.js` and update `PROFILE` (weights, liked/disliked). The site's rate buttons produce
a feedback line for me to paste back here.
