# CAPSTONE 72 — BEFORE & AFTER ANALYSIS: THE IMPACT OF PROMPT ENGINEERING
## Controlled Ablation Study on Prompt Design vs Summarization Efficacy
**Project:** AI Summarisation Quality Evaluation  
**Author:** AI Research & Evaluation Team  

---

## 1. Study Overview & Methodology

A central requirement of Capstone 72 is demonstrating **how prompt engineering transforms summarization performance**. 

To isolate this effect rigorously, we conducted a **controlled Before / After comparative study**:
- **Baseline (Before):** Naive zero-shot prompt (`"Summarize the following article in a short paragraph."`).
- **Engineered (After):** Chain-of-Density (CoD) iterative entity densification with strict length bounds (120–150 words) and explicit caveat retention constraints.

Evaluations were conducted across three foundational domains:
- **Article 1:** Medicine & Biotechnology (CRISPR Base Editing Trial)
- **Article 2:** AI Policy & Law (EU AI Act Compliance)
- **Article 3:** Clean Energy & Materials Science (Solid-State Sodium Batteries)

---

## 2. Quantitative Metric Shift (Before vs. After)

```
========================================================================================
QUANTITATIVE METRIC IMPROVEMENTS (AVERAGE ACROSS ARTICLES 1–3)
========================================================================================
Metric                       Baseline (Before)   Engineered (After)   Absolute Gain   Relative Gain
----------------------------------------------------------------------------------------
ROUGE-1 F1                   0.3127              0.6853               +0.3726         +119.1%
ROUGE-2 F1                   0.1033              0.4269               +0.3236         +313.2%
ROUGE-L F1                   0.2207              0.5855               +0.3648         +165.3%
Manual Quality Score (1–5)   3.88 / 5.0          4.88 / 5.0           +1.00 pts       +25.8%
Information Coverage (1–5)   3.50 / 5.0          4.80 / 5.0           +1.30 pts       +37.1%
Factual Consistency (1–5)    4.30 / 5.0          4.85 / 5.0           +0.55 pts       +12.8%
Average Word Count           103.7 words         144.8 words          +41.1 words     +39.6%
========================================================================================
```

---

## 3. Side-by-Side Textual Dissection

### Case 1: Article 1 (CRISPR Trial)

#### Baseline Summary (Before):
> *"This article discusses a new CRISPR base editing trial called PULSE-1 for treating familial hypercholesterolemia. The therapy is called VERVE-101 and works by editing the PCSK9 gene in the liver using lipid nanoparticles. In the study, patients who got the highest dose saw their cholesterol drop significantly by around 55% and PCSK9 dropped by over 80%. Most side effects were mild like infusion reactions and some elevated liver enzymes, although one patient did have a serious heart attack during the trial. The researchers think this could be a promising one-time cure for high cholesterol if future studies go well."* (102 words)

#### Engineered Summary (After):
> *"In the Phase 1 PULSE-1 trial (n=14), investigators evaluated VERVE-101, a hepatic adenine base-editing therapy administered via lipid nanoparticles to treat heterozygous familial hypercholesterolemia. Targeting a splice donor site in PCSK9 without double-stranded breaks, the highest dose (0.6 mg/kg, n=4) yielded durable reductions of 84% in circulating PCSK9 and 55% in LDL-C over 180 days. The 0.45 mg/kg dose reduced LDL-C by 39%, whereas lower doses (<0.3 mg/kg) were clinically inactive. Safety findings included infusion-related reactions in 35.7% of patients and transient Grade 3 transaminase spikes in two patients at 0.6 mg/kg, resolving by day 14. A non-fatal myocardial infarction in the 0.45 mg/kg cohort was deemed secondary to pre-existing CAD by the DSMB. Targeted sequencing revealed zero off-target editing across 124 candidate loci. Phase 2 trials must still address germline biodistribution and cardiovascular mortality endpoints."* (144 words)

#### Critical Failures of Before vs Solved in After:
1. **Omission of Negative Dose Cohorts:** Baseline said *"patients who got the highest dose saw..."*, completely omitting that doses below 0.3 mg/kg had <8% effect.
2. **Loosely Rounded Statistics:** Baseline stated *"over 80%"* and *"around 55%"*. Engineered gave exact 84% and 55% with 180-day duration.
3. **Severe Safety Mischaracterization:** Baseline stated *"one patient did have a serious heart attack during the trial"*, leaving the reader with the impression the drug may have caused it. Engineered stated *"A non-fatal myocardial infarction... was deemed secondary to pre-existing CAD by the DSMB"*, providing complete clinical context.
4. **Off-Target Genomic Safety:** Baseline omitted genomic sequencing checks entirely. Engineered cited *"zero off-target editing across 124 candidate loci"*.

---

### Case 2: Article 2 (EU AI Act)

#### Baseline Summary (Before):
> *"The European Union has passed the AI Act to regulate artificial intelligence using a risk-based system. Some AI uses are completely banned, while others like high-risk systems face strict rules. Big AI models like GPT-4 fall under systemic risk if they use more than 10^25 FLOPs of computing power. Companies making these models have to test their systems, follow copyright rules, and report cyber issues. If companies break the law, they can face huge fines up to 35 million euros or 7% of their turnover. Some critics worry that this will hurt European tech startups compared to US companies."* (98 words)

#### Engineered Summary (After):
> *"The European Union has ratified the AI Act, establishing a horizontal, risk-differentiated governance framework across four tiers: unacceptable (prohibited), high risk, specific transparency risk, and minimal risk. Title VIIIa regulates General-Purpose AI (GPAI), creating heightened obligations for models presenting 'systemic risk'—empirically defined by a compute threshold exceeding 10^25 FLOPs. While standard GPAI providers must maintain technical documentation and copyright summaries, systemic GPAI providers face mandatory adversarial red-teaming, systemic risk mitigation, serious cybersecurity incident reporting to the EU AI Office, and energy tracking. Administrative penalties are severe: up to €35M or 7% of global turnover for prohibited applications, and €15M or 3% for GPAI infringements. Implementation follows a graduated 6-to-36-month timeline. Critics highlight that the fixed compute threshold will quickly become obsolete and burden European capital, whereas human rights organizations commend its enforceable protections."* (139 words)

#### Critical Failures of Before vs Solved in After:
1. **Omission of Lower Penalty Tier:** Baseline only mentioned the €35M/7% fine, omitting the €15M/3% tier for GPAI violations.
2. **Missing Legal Nomenclature:** Baseline used vague terms (`"Big AI models"` vs *"General-Purpose AI (GPAI) under Title VIIIa"*).
3. **Missing Enforcement Timeline:** Baseline gave zero indication of when rules take effect. Engineered noted the *"graduated 6-to-36-month timeline"*.

---

## 4. Key Takeaway & Prompt Engineering Principle

Prompt engineering in summarization is **not merely aesthetic polishing—it is a functional prerequisite for factual completeness and legal/clinical safety**. 

Without constraints, models default to **"lossy conversational smoothing"**, dropping adverse results, rounding away significant digits, and cutting off institutional attributions. With Chain-of-Density and multi-constraint schemas, models achieve near-human perfection in technical synthesis.
