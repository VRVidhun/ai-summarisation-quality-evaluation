# CAPSTONE 72 — PRESENTATION DECK & SPEAKER TRANSCRIPT
## "How Good Are AI Summaries and How Can We Measure Them?"
**Oral Defense & Presentation Script**  
**Evaluation Weightage:** 100 Marks  
**Duration:** 15–20 Minutes  

---

### Slide 1: Title & Executive Introduction
- **Slide Title:** CAPSTONE 72 — AI Summarisation Quality Evaluation
- **Visuals:** Project title, author names, evaluation badges (6 AI Skills, 4 AI Platforms, 100 Marks Weightage).
- **Speaker Script:**
> *"Good morning, esteemed evaluators and colleagues. Today, we address one of the most critical questions in modern artificial intelligence: 'How good are AI summaries, and how can we measure them?' As generative models are deployed across healthcare, legal analysis, and executive decision-making, understanding whether we can trust an AI's abstractive synthesis is no longer just an academic curiosity—it is a critical reliability requirement. In this capstone, we conducted a rigorous benchmark across 10 complex domain articles, 4 frontier AI platforms, and multiple evaluation methodologies to deliver an evidence-based answer."*

---

### Slide 2: The Core Problem: Why Measuring Summaries Is Hard
- **Slide Title:** Beyond Word Overlap: The Tripartite Evaluation Dilemma
- **Visuals:** Diagram showing Extractive vs Abstractive tradeoffs; ROUGE blind spots; Hallucination vs Omission.
- **Speaker Script:**
> *"Why is measuring AI summaries so notoriously difficult? In traditional NLP, metrics like ROUGE-1, ROUGE-2, and ROUGE-L measured n-gram overlap against human references. But here is the fatal flaw: a model can score high on ROUGE while completely reversing causal polarity—for example, dropping the word 'not' in a drug contraindication. Conversely, an AI can generate an elegant, publication-quality synthesis using synonyms that scores poorly on ROUGE. Therefore, our methodology implements a Tripartite Architecture: automated lexical ROUGE, multi-dimensional anchored manual rubrics, and claim-by-claim ground truth fact auditing."*

---

### Slide 3: Methodology & Experimental Matrix
- **Slide Title:** Comprehensive Benchmark Setup
- **Visuals:** Grid of 10 Articles across 10 Domains; 4 AI Tools (ChatGPT GPT-4o, Claude 3.5 Sonnet, Gemini Flash, NotebookLM); Automation Tools (Google Colab, Google Sheets).
- **Speaker Script:**
> *"To ensure real-world validity, we selected 10 substantive, highly complex articles spanning CRISPR biotechnology, the EU AI Act, solid-state sodium batteries, semiconductor packaging geopolitics, 2-million-year-old ancient eDNA, post-quantum cryptography, behavioral dark patterns, JWST cosmological anomalies, the Red Sea supply chain crisis, and generative AI's impact on cognitive psychology. Each article was evaluated across 4 free-tier AI tools: ChatGPT, Claude, Gemini, and NotebookLM, compared against human gold-standard reference summaries."*

---

### Slide 4: Automated Benchmarks: ROUGE & Compression
- **Slide Title:** Automated Quantitative Results
- **Visuals:** Bar charts and tables showing ROUGE-1 F1, ROUGE-2 F1, ROUGE-L F1, and compression ratios.
- **Speaker Script:**
> *"Looking at the quantitative results: ChatGPT (GPT-4o) achieved the highest lexical overlap under Chain-of-Density prompting, with a ROUGE-1 F1 of 0.6853 and ROUGE-2 F1 of 0.4269. Claude 3.5 Sonnet followed closely at 0.6668 ROUGE-1 and 0.4020 ROUGE-2. Google NotebookLM delivered strong ROUGE scores at 0.6091 while maintaining structured grounding. Gemini produced the most compact summaries at 113 words, but sacrificed some bigram overlap (0.2468 ROUGE-2) due to aggressive conciseness. Most dramatically, our unguided naive baseline scored only 0.3127 ROUGE-1 and 0.1033 ROUGE-2."*

---

### Slide 5: Manual Evaluation & Model Profiling
- **Slide Title:** Qualitative Excellence: The 5-Dimension Rubric
- **Visuals:** Radar chart comparing Faithfulness, Coverage, Conciseness, Coherence, and Attribution.
- **Speaker Script:**
> *"When human evaluators scored the summaries on our 1-to-5 anchored rubric, Claude 3.5 Sonnet took the lead with a 4.88 out of 5.0. Claude stood out for its remarkable ability to preserve technical caveats—such as clinical DSMB adjudications, non-upgradable hardware barriers in cryptography, and statutory fine tiers. ChatGPT scored 4.76, demonstrating exceptional syntactic fluency. NotebookLM scored 4.71, achieving the cleanest traceability back to source texts. Gemini scored 4.54, excelling at high-speed executive overviews."*

---

### Slide 6: Omission & Error Analysis: The Real Threat
- **Slide Title:** The Anatomy of AI Summary Failures
- **Visuals:** Taxonomy breakdown of 100 omissions; Case study on Article 1 (Clinical Heart Attack) and Article 4 (Taiwan Packaging).
- **Speaker Script:**
> *"Here is perhaps our most important finding: in 2026, direct hallucination in frontier models is rare (<0.5% under structured prompts). The true risk is Omission Bias. Without explicit constraints, models systematically exhibit 'positive reporting bias'—they celebrate medical breakthroughs while omitting adverse reactions, or praise semiconductor subsidies while omitting that completed wafers still have to be flown to Taiwan for packaging. Our taxonomy proves that omission severity is the true metric of summary danger."*

---

### Slide 7: Prompt Engineering: Before vs After Impact
- **Slide Title:** The Power of Chain-of-Density & Constraints
- **Visuals:** Side-by-side comparison of Naive Baseline vs Engineered Summary; +119% ROUGE-1, +313% ROUGE-2 callouts.
- **Speaker Script:**
> *"To prove that summarization quality is deeply dependent on prompt engineering, we conducted a controlled Before/After ablation study. Moving from a naive 'Summarize this' prompt to our Chain-of-Density structured prompt resulted in an astounding +119% gain in ROUGE-1 and a +313% gain in ROUGE-2 bigram co-occurrence. It transformed vague summaries into dense, publication-grade syntheses with zero conversational fluff."*

---

### Slide 8: The Interactive Demo & Verification Center
- **Slide Title:** Live Demonstration & Open Artifacts
- **Visuals:** Screenshot / Walkthrough of the Web Dashboard, Google Colab Notebook, and Google Sheets CSV exports.
- **Speaker Script:**
> *"To allow evaluators to inspect our data firsthand, we built a comprehensive, interactive Web Dashboard. It features a side-by-side comparator for all 10 articles, dynamic radar and ROUGE charts, an interactive prompt engineering lab, a claim-by-claim verification auditor, and an export center where you can download all 6 CSV datasets and the runnable Google Colab notebook."*

---

### Slide 9: Conclusion & Definitive Recommendations
- **Slide Title:** How Good Are AI Summaries & How to Measure Them
- **Visuals:** Key takeaway bullet points and decision-support matrix.
- **Speaker Script:**
> *"In conclusion: How good are AI summaries? When properly prompted, they are state of the art—exceeding average human speed and syntactic polish, while maintaining near-zero hallucination. How should we measure them? Never rely on ROUGE alone; use a Tripartite Framework combining automated lexical overlap, multi-variable manual rubrics, and claim-level verification audits. We encourage organizations to implement Chain-of-Density prompts and mandatory caveat-retention constraints across all production deployments. Thank you, and we welcome your questions."*
