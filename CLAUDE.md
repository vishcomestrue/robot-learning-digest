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
- **Topic weights:** Quadruped 1.18 · Humanoid 0.95 · Manipulation 0.87. Relative multipliers: after each feedback
  batch apply ±0.1 per rating, then **normalize so the three weights average 1.0** (no cap for now). Ideas matter more
  than robot type, so the liked/disliked themes drive ranking more than these weights.

## Selection
- **No fixed count.** Include every paper that clears the bar (typically 5–8, **never more than 8**): taste picks (closest to my work) + 1–2 **field picks** (biggest papers of the week
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
1. **Collect:** download (with `curl`, not WebFetch, so nothing is truncated) the arXiv catchup page for each
   weekday **with abstracts**: `https://arxiv.org/catchup/cs.RO/YYYY-MM-DD?abs=True` (Mon-Fri). Parse new +
   cross-list entries (skip replacements). The arXiv API and `/search` are blocked for the fetch tool.
2. **Keyword filter** on title **and abstract**: quadruped, legged, locomotion, humanoid, whole-body, loco-manipulation,
   manipulation, dexterous, VLA, imitation, diffusion policy, sim-to-real, teleoperation, mimic, motion prior, AMP, motion tracking, gait, state estimation.
3. **Triage** by title + abstract against the taste profile and keep ~25. **Deep read** the `arxiv.org/abs/<id>` pages,
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
- [x] Rate the test digest (see `feedback_log.md`)
- [x] Add seed papers + authors (inferred; `seeds.md`)
- [x] Weekly runs: cloud routine "Robot Learning Weekly Digest", Sat 02:30 UTC (08:00 IST), Opus 5.5,
      pushes to github.com/vishcomestrue/robot-learning-digest and sends a phone notification
- [x] Digests saved as `digests/YYYY-MM-DD.md`; site at https://vishcomestrue.github.io/robot-learning-digest/
- [ ] Add SuperMimic-series arXiv links to `seeds.md`
- [ ] Verify the first real run on 2026-11-28 pushed successfully
- [ ] Topic-weight cap (deferred)

## Website (one ranked library, not week-by-week)
`site/index.html` renders `site/data.js`, which holds `PROFILE`, `WEEKS` (one entry per run, newest first,
with also-notable) and `PAPERS` (every paper ever picked). The overall score is computed in the browser from
each paper's per-criterion `scores` (0-5) × the current `PROFILE.rubric` × the topic weight, plus a rating boost (in the All tab, field picks use the taste rubric too),
so the whole library re-ranks as weights change.
- Weekly run: append that week's papers to `PAPERS` (with `week` = run date, full `scores` object) and prepend
  a `WEEKS` entry. **Never edit or remove existing entries; skip ids already in PAPERS; a failed run pushes nothing.**
- Feedback: update `PROFILE` (weights, liked/disliked), set `rating`/`ratingNote` on the rated papers, log in
  `feedback_log.md`. The site's feedback line uses arXiv ids: `2611.18305 👍 reason, 2611.24310 meh`.
