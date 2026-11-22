// Digest data. The weekly run appends a new week object to DIGESTS (newest first).
window.PROFILE = {
  updated: "2026-11-22",
  weights: { Quadruped: 1.2, Humanoid: 1.2, Manipulation: 1.1 },
  themes: [
    "RL locomotion on hard terrain", "Multi-embodiment / cross-morphology", "State estimation & proprioception",
    "Sim-to-real, sysid, training infra", "Perceptive locomotion", "Fall recovery & robustness",
    "Humanoid locomotion", "AMP / motion imitation (SuperMimic, XMimic)", "VLA & dexterous manipulation (secondary)"
  ],
  labs: ["ETH RSL (Hutter, Rudin)", "Berkeley/CMU (Malik, Pathak, Kumar)", "MIT Improbable AI (Agrawal)",
         "Kevin Zakka (mjlab)", "Stanford (Bohg, Karen Liu)", "Physical Intelligence / GDM", "Guillaume Bellegarda"],
  liked: ["perceptive loco w/ proprio fallback","fall recovery","cross-humanoid transfer","proprio terrain estimation","real-robot data quality","terrain-adaptive gaits","motion imitation"], disliked: []
};

window.DIGESTS = [
  {
    week: "2026-11-14 → 2026-11-20",
    date: "2026-11-21",
    note: "Test run. Rated: all 👍",
    papers: [
      { id: "2611.18305", title: "PROOF: Perceptive legged locomotion with OOD fallback to proprioception",
        authors: "", topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "real robot",
        code: "", score: null,
        why: "Perceptive locomotion policy that detects when its terrain perception goes out of distribution and falls back to a proprioceptive controller. This is exactly the bridge between where your work is now (proprioceptive) and where it's going (exteroceptive)." },
      { id: "2611.23916", title: "ReLoco: Unified humanoid locomotion and fall recovery",
        authors: "", topic: "Humanoid", tag: "Must-read", pick: "taste", evidence: "real robot",
        code: "", score: null,
        why: "One humanoid policy that handles both walking and getting back up after falls. Fall recovery is in your rank-higher list, and a single unified policy avoids brittle switching between controllers." },
      { id: "2611.18003", title: "Body-aligned virtual joints to reuse training recipes across humanoids",
        authors: "", topic: "Humanoid", tag: "Skim", pick: "taste", evidence: "sim + real",
        code: "", score: null,
        why: "Puts different humanoids into a shared virtual-joint space so the same reward and training recipe transfers between them. Fits your strong multi-embodiment thread (ManyQuadrupeds, URMA, embodiment scaling)." },
      { id: "2611.24310", title: "SBEE: Proprioceptive base state and terrain elevation estimation",
        authors: "", topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "real robot",
        code: "", score: null,
        why: "Estimates base state and local terrain elevation from proprioception alone. Your reading (MUSE, Legolas, concurrent estimator, SLR) suggests this state-estimation direction is on-taste." },
      { id: "2611.22388", title: "Hidden Variables Behind Real-Robot Data Quality",
        authors: "AgiBot", topic: "Manipulation", tag: "FYI", pick: "field", evidence: "real robot",
        code: "", score: null,
        why: "Large-scale study of which hidden factors in teleoperated real-robot data actually drive policy quality. This is the field pick: it matters for anyone collecting VLA/manipulation data." },
      { id: "2611.25958", title: "Bellegarda: terrain-adaptive gaits",
        authors: "Bellegarda et al.", topic: "Quadruped", tag: "Must-read", pick: "taste", evidence: "",
        code: "", score: null,
        why: "You promoted this from Also notable. Terrain-aware gait selection for legged robots. Details to fill in on the next deep read." },
      { id: "2611.20452", title: "XMimic / XSoma",
        authors: "", topic: "Humanoid", tag: "Must-read", pick: "taste", evidence: "",
        code: "", score: null,
        why: "You promoted this from Also notable. A motion-imitation paper in the Mimic family, which matches your interest in AMP-style motion priors. Details to fill in on the next deep read." }
    ],
    alsoNotable: [
      { id: "2611.24011", title: "WAM-Policy" },
      { id: "2611.23118", title: "RWM audit" },
      { id: "2611.26444", title: "Mind2Act World" }
    ]
  }
];
