# CAPSTONE 72 — AI Summarisation Quality Evaluation
## Research Question: *How good are AI summaries and how can we measure them?*
**Academic & Industry Capstone Project** | **Weightage: 100 Marks**  
**Evaluated Platforms (Free Tier):** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Google Gemini Flash, Google NotebookLM  
**Supporting Tooling:** Google Colab, Google Sheets, Python ROUGE Engine  

---

## 🌟 Executive Overview

This Capstone Project delivers an end-to-end empirical investigation answering the question: **"How good are AI summaries and how can we measure them?"**

Evaluating abstractive text summarization is uniquely challenging because n-gram overlap metrics (like ROUGE) are blind to causal polarity and factual truth. Conversely, humans struggle to objectively score hundreds of texts at scale. To solve this, we designed and deployed a **Tripartite Evaluation Architecture**:
1. **Automated Lexical Overlap:** Pure-Python engine computing ROUGE-1, ROUGE-2, and ROUGE-L with length compression statistics.
2. **Multi-Dimensional Manual Rubrics:** Anchored 1–5 scoring across Faithfulness, Coverage, Conciseness, Coherence, and Attribution.
3. **Claim-by-Claim Verification Audit:** Sentence-by-sentence ground-truth fact-checking isolating omissions and hallucinations.

---

## 🚀 Live Interactive Demo & Web Application

The project includes an interactive, production-grade Web Dashboard and Slide Deck accessible directly in the browser:

- **Launch Locally:**  
  Run Python's built-in HTTP server:
  ```powershell
  python -m http.server 8080
  ```
  Then open [http://localhost:8080](http://localhost:8080) in your web browser, or double-click `index.html` directly.

### Web Dashboard Features:
1. **Overview & Presentation Deck:** 8 interactive defense slides with speaker notes and KPI scorecards.
2. **Multi-Model Comparator:** Side-by-side inspection of all 10 articles, human reference summaries, and 4 AI outputs with entity highlights.
3. **Metrics & ROUGE Engine:** Interactive Chart.js visualizations (ROUGE bar charts, 5-dimension radar charts, compression curves, and filterable scoring table).
4. **Omissions & Error Audit:** Filterable taxonomy cards analyzing Critical vs Minor omissions across models.
5. **Prompt Engineering Lab:** Complete prompt repository with one-click copy buttons and an interactive prompt simulator.
6. **Verification Matrix:** Claim-by-claim ground-truth audit across 12 high-priority factual assertions.
7. **Downloads & Export Center:** One-click downloads of all CSV datasets, Colab notebooks, and markdown reports.

---

## 📊 Core Benchmark Results

```
========================================================================================
MODEL BENCHMARK SUMMARY (10 ARTICLES EVALUATED)
========================================================================================
Model                 ROUGE-1 F1   ROUGE-2 F1   ROUGE-L F1   Manual Score   Avg Length
----------------------------------------------------------------------------------------
ChatGPT (GPT-4o)      0.6853       0.4269       0.5855       4.76 / 5.0     144.8 words
Claude 3.5 Sonnet     0.6668       0.4020       0.5772       4.88 / 5.0     143.0 words
NotebookLM (RAG)      0.6091       0.3482       0.5019       4.71 / 5.0     131.7 words
Google Gemini Flash   0.5189       0.2468       0.4074       4.54 / 5.0     113.5 words
Naive Baseline        0.3127       0.1033       0.2207       3.88 / 5.0     103.7 words
========================================================================================
```

### Key Quantitative Findings:
- **Prompt Engineering Impact:** Moving from a naive zero-shot prompt to an engineered Chain-of-Density prompt produced a **+119.1% gain in ROUGE-1 F1** and a **+313.2% gain in ROUGE-2 F1**.
- **Nuance Leadership:** **Claude 3.5 Sonnet** earned the highest manual score (**4.88/5.0**), never dropping adverse clinical trial events or legal fine structures.
- **Lexical Density Leadership:** **ChatGPT (GPT-4o)** achieved the highest raw n-gram overlap (**0.6853 ROUGE-1 F1**).
- **Zero Hallucination:** **Google NotebookLM** achieved **0.0% hallucination** due to source-grounded retrieval.

---

## 📁 Repository Directory Structure

```
Ai project app/
├── index.html                        # Interactive Web Dashboard & Presentation Demo
├── style.css                         # Custom HSL design system, dark/light theme, animations
├── app.js                            # Interactive UI logic, embedded datasets & Chart.js code
├── README.md                         # Project overview and navigation guide
│
├── data/                             # Raw structured JSON datasets
│   ├── articles.json                 # 10 domain articles with full metadata
│   ├── reference_summaries.json      # Gold-standard human expert reference summaries
│   ├── ai_summaries.json             # Model summaries (ChatGPT, Claude, Gemini, NotebookLM)
│   ├── manual_scores.json            # 5-criteria anchored evaluation scores
│   ├── rouge_scores.json             # ROUGE-1, ROUGE-2, ROUGE-L, and compression metrics
│   ├── omissions_and_errors.json     # Taxonomy of omissions and error classifications
│   ├── verification_claims.json      # Claim-level ground-truth verification data
│   └── prompts.json                  # Complete prompt engineering repository
│
├── csv/                              # Ready for Google Sheets / Excel import
│   ├── 01_article_list.csv           # 10 Articles metadata
│   ├── 02_all_summaries.csv          # All human and AI generated summaries
│   ├── 03_manual_scores.csv          # Manual scores across 5 dimensions
│   ├── 04_rouge_evaluation.csv       # ROUGE-1/2/L precision, recall, F1, and compression
│   ├── 05_omissions_analysis.csv     # Omission severity audit
│   └── 06_verification_matrix.csv    # Fact-checking claim audit matrix
│
├── colab/                            # Google Colab Integration
│   └── AI_Summarisation_Evaluation_Colab.ipynb # Executable Jupyter Notebook with ROUGE & charts
│
├── docs/                             # Academic & Presentation Deliverables
│   ├── CAPSTONE_72_FINAL_REPORT.md   # Comprehensive 20+ page academic final report
│   ├── PROMPT_LIBRARY.md             # Standardized prompt templates and engineering guide
│   ├── VERIFICATION_REPORT.md        # Fact-checking claim verification audit report
│   ├── BEFORE_AFTER_ANALYSIS.md      # Controlled prompt engineering ablation study
│   └── PRESENTATION_TRANSCRIPT.md    # Slide-by-slide speaker defense notes and transcript
│
└── scripts/                          # Python automation & evaluation pipeline
    ├── evaluate_rouge.py             # Pure-Python ROUGE-1, ROUGE-2, ROUGE-L engine
    ├── build_capstone_dataset.py     # Dataset compiler & CSV exporter
    ├── generate_colab_notebook.py    # Colab .ipynb generator
    └── build_app_js.py               # Web app asset builder
```

---

## 🛠️ Required AI Skills Mapping

| Skill / Domain | Implementation in Capstone 72 |
| :--- | :--- |
| **1. AI Foundations** | Analysis of transformer self-attention, context window loss, abstractive vs extractive trade-offs, and token compression dynamics. |
| **2. Prompt Engineering** | Development of 5 prompt archetypes: Baseline Zero-Shot, Multi-Constraint Schema, Chain-of-Density (CoD), RAG Grounding, and Adversarial Verification. |
| **3. Content Writing** | 10 gold-standard human reference summaries crafted to adhere to rigorous journalistic and clinical standards. |
| **4. Research & Verification** | Primary source ground-truthing, claim extraction, and verification auditing across 12 high-priority facts. |
| **5. Automation** | Pure-Python ROUGE evaluation engine (`scripts/evaluate_rouge.py`) and Google Colab Jupyter Notebook pipeline. |
| **6. Responsible AI** | Hallucination auditing, omission severity taxonomy (Critical vs Minor), positive reporting bias analysis, and safety-critical failure modes. |

---

## 🎓 Evaluator Checklist & Submission Verification

- [x] **10 Articles Selected:** Spanning Medicine, AI Law, Energy, Chips, Paleogenomics, Cryptography, Dark Patterns, Cosmology, Supply Chain, and Education.
- [x] **Reference Summaries Written:** Gold-standard human expert summaries with key retained anchor facts.
- [x] **AI Summaries Generated:** Multi-model outputs from ChatGPT, Claude, Gemini, and NotebookLM.
- [x] **Manual Scoring Matrix:** Anchored 1–5 scale evaluating Faithfulness, Coverage, Conciseness, Coherence, and Attribution.
- [x] **ROUGE Metrics Computed:** Automated ROUGE-1, ROUGE-2, ROUGE-L F1 scores and compression ratios.
- [x] **Omissions Analysed:** Severity taxonomy distinguishing critical omissions from minor contextual details.
- [x] **Interactive Presentation:** Slide deck viewer with speaker defense notes.
- [x] **Prompt Library:** 5 documented prompt templates with design rationales and failure analysis.
- [x] **Verification Report:** Sentence-by-sentence fact-checking audit.
- [x] **Before/After Analysis:** Controlled prompt engineering ablation study (+119% ROUGE gain).
- [x] **Final Demo:** Fully responsive, interactive web dashboard with Chart.js analytics and export center.
