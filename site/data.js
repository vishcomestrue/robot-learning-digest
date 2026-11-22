// Robot Learning Digest: one paper library. Weekly runs ONLY APPEND to PAPERS and WEEKS.
// Overall score is computed in the browser from `scores` (each 0-5) using the CURRENT rubric and
// topic weights below, so the whole library re-ranks as taste changes.
window.PROFILE = {
  updated: "2026-11-22",
  weights: { Quadruped: 1.2, Humanoid: 1.2, Manipulation: 1.1 },
  rubric: {
    taste:   { taste: 0.35, novelty: 0.20, evidence: 0.20, signal: 0.15, reuse: 0.10 },
    field:   { taste: 0.00, novelty: 0.20, evidence: 0.20, signal: 0.50, reuse: 0.10 }
  },
  ratingBoost: { "👍": 0.3, "meh": -0.1, "👎": -0.5 },
  themes: [
    "RL locomotion on hard terrain", "Multi-embodiment / cross-morphology", "State estimation & proprioception",
    "Sim-to-real, sysid, training infra", "Perceptive locomotion", "Fall recovery & robustness",
    "Humanoid locomotion", "AMP / motion imitation (SuperMimic, XMimic)", "VLA & dexterous manipulation (secondary)"
  ],
  labs: ["ETH RSL (Hutter, Rudin)", "Berkeley/CMU (Malik, Pathak, Kumar)", "MIT Improbable AI (Agrawal)",
         "Kevin Zakka (mjlab)", "Stanford (Bohg, Karen Liu)", "Physical Intelligence / GDM",
         "Guillaume Bellegarda", "Nico Bohlinger / Jan Peters"],
  liked: ["perceptive loco w/ proprio fallback", "fall recovery", "cross-humanoid transfer",
          "proprio terrain estimation", "real-robot data quality", "terrain-adaptive gaits", "motion imitation"],
  disliked: []
};

// One entry per weekly run (newest first). `notable` = also-notable ids/titles, not scored.
window.WEEKS = [
  { date: "2026-11-21", start: "2026-11-14", end: "2026-11-20", note: "Test run (rated all 👍)",
    notable: [
      { id: "2611.24011", title: "WAM-Policy" },
      { id: "2611.23118", title: "RWM audit" },
      { id: "2611.26444", title: "Mind2Act World" }
    ] }
];

// scores: taste (fit to my profile), novelty, evidence (real-world), signal (outside: HF, venue, lab, project page), reuse (code/data/models)
// rating: my feedback ("👍" | "👎" | "meh" | null)
window.PAPERS = [
  { id: "2611.18305", week: "2026-11-21",
    title: "PROOF: Perceptive Robustness via Out-of-Distribution Fallback for Legged Locomotion",
    authors: "Siyuan Wang, Dongjie Zhu, Jinxuan Lu, Wenjun Xu, Jiankun Wang", venue: "CoRL 2026",
    topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "real robot (Unitree Go2 + D435)", code: "",
    scores: { taste: 5, novelty: 4, evidence: 5, signal: 3, reuse: 1 }, rating: "👍", ratingNote: "Really good paper",
    why: "Teacher-student perceptive locomotion where the student predicts exteroceptive features with uncertainty and suppresses them on OOD inputs (occlusion, reflections, bad lighting), falling back to proprioception. Does parkour when vision is good and stays stable when it isn't. This is the proprio-to-extero bridge your work is heading toward." },
  { id: "2611.23916", week: "2026-11-21",
    title: "ReLoco: Unified Humanoid Locomotion and Fall Recovery via Behavior-Conditioned Motion Priors",
    authors: "Lequn Fu, Yufeng Hu, Yijun Zhong, Jie Zhang, Xiao Li, Lingxiang Ji, Zhiyuan Xu, Jian Tang, Shiqi Li", venue: "",
    topic: "Humanoid", tag: "Must-read", pick: "taste", evidence: "real robot (Tiangong 3.0, 64.5 kg)", code: "",
    scores: { taste: 5, novelty: 4, evidence: 5, signal: 2, reuse: 1 }, rating: "👍", ratingNote: "Decent; haven't gone deep into AMPs yet",
    why: "One proprioceptive humanoid policy for walking, getting up from any fallen posture and resuming commands, using behavior-conditioned adversarial motion priors (posture selects the expert motion pool; shared discriminator with two heads). Reports ~97% get-up and push-recovery success on hardware with no controller switching. A good entry point to AMPs." },
  { id: "2611.18003", week: "2026-11-21",
    title: "Reusing Locomotion Training Recipes Across Humanoids via Body-Aligned Virtual Joints",
    authors: "Sol Choi, Mingon Kim, Seokin Seo, Jongeun Choi, Donghyeon Kim, Yisoo Lee", venue: "",
    topic: "Humanoid", tag: "Skim", pick: "taste", evidence: "real robot (Unitree G1) + 2 other humanoids", code: "",
    scores: { taste: 4, novelty: 3, evidence: 4, signal: 2, reuse: 1 }, rating: "👍", ratingNote: "Good paper",
    why: "RL recipes (rewards, architectures, hyperparameters) break across humanoids because joint coordinates differ. A body-aligned virtual joint space plus a deterministic kinematic layer lets one unmodified recipe train stably on three humanoids, and cuts heading drift ~6x on the G1. Fits your multi-embodiment thread." },
  { id: "2611.24310", week: "2026-11-21",
    title: "SBEE: Proprioceptive Simultaneous Base and Terrain Elevation Estimation for Legged Robot Locomotion",
    authors: "Michael Maravgakis, Stylianos Piperakis, Panos Trahanias", venue: "",
    topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "sim (MuJoCo quadruped + biped) + ANYmal-D GrandTour dataset", code: "",
    scores: { taste: 5, novelty: 3, evidence: 3, signal: 2, reuse: 3 }, rating: "👍", ratingNote: "Really important",
    why: "Couples a left-invariant EKF for the floating base with a grid elevation map in a two-way loop: foot-contact heights and revisited cells act like SLAM loop closures, curbing vertical drift. 22% lower trajectory error than the best proprioceptive baseline over 296 m. Billed as open source (no repo link yet). Directly useful for blind stair and slope work." },
  { id: "2611.22388", week: "2026-11-21",
    title: "Hidden Variables Behind Real-Robot Data Quality: Lessons from Hundreds of Thousands of Hours",
    authors: "Maniformer Real-World Manipulation Team et al. (AgiBot)", venue: "",
    topic: "Manipulation", tag: "FYI", pick: "field", evidence: "real robot (dual-arm, π0.5 fine-tuning)", code: "https://teleop.agibot.com/",
    scores: { taste: 2, novelty: 4, evidence: 5, signal: 4, reuse: 2 }, rating: "👍", ratingNote: "",
    why: "How data-collection design (reachability, teleop control, consistency) shapes demo quality. Parallel body-part teleop cuts task time 43-53%; compliant control raises success; demos must capture the visual cues behind actions; camera miscalibration at inference failed 30/30 trials. The field pick for anyone collecting VLA data." },
  { id: "2611.25958", week: "2026-11-21",
    title: "Learning optimal gaits and styles for terrain-adaptive quadruped locomotion",
    authors: "Guillaume Bellegarda, Auke Ijspeert (EPFL)", venue: "",
    topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "sim (no hardware mentioned)", code: "https://guillaume10.github.io/terrain-gaits",
    scores: { taste: 4, novelty: 4, evidence: 2, signal: 3, reuse: 1 }, rating: "👍", ratingNote: "Should have been in the list",
    why: "RL with CPG-style oscillator networks learns 11 quadruped gaits and the body style each needs; a second policy picks the gait that best optimizes a chosen criterion (cost of transport, stability, smoothness). Zero-shot to unseen terrains and 5x heavier robots, even bipedal modes. Promoted by you from Also notable." },
  { id: "2611.20452", week: "2026-11-21",
    title: "XMimic and XSoma: Learning Humanoid Motion Tracking and Locomotion in Under a Minute",
    authors: "Nico Bohlinger, Jan Peters (TU Darmstadt)", venue: "",
    topic: "Humanoid", tag: "Must-read", pick: "taste", evidence: "sim (Unitree G1)", code: "",
    scores: { taste: 5, novelty: 4, evidence: 2, signal: 3, reuse: 2 }, rating: "👍", ratingNote: "Should have been in the list",
    why: "Speeds up SuperMimic (learned world model + analytic policy gradients through short imagined rollouts) with multi-GPU training and a fully JAX + MuJoCo Warp compiled loop. Tracks 40 LAFAN1 clips on the G1 in 0.86 min; XSoma hits its locomotion target in 0.77 min. Part of the SuperMimic series you flagged." }
];
