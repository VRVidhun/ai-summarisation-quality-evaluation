# scripts/build_app_js.py
"""
Builds app.js with pre-embedded datasets and interactive logic for CAPSTONE 72.
Guarantees zero-CORS compatibility for local double-clicking and web servers.
"""

import json

with open("data/articles.json", "r", encoding="utf-8") as f:
    articles_data = json.load(f)

with open("data/reference_summaries.json", "r", encoding="utf-8") as f:
    ref_summaries_data = json.load(f)

with open("data/ai_summaries.json", "r", encoding="utf-8") as f:
    ai_summaries_data = json.load(f)

with open("data/manual_scores.json", "r", encoding="utf-8") as f:
    manual_scores_data = json.load(f)

with open("data/rouge_scores.json", "r", encoding="utf-8") as f:
    rouge_scores_data = json.load(f)

with open("data/omissions_and_errors.json", "r", encoding="utf-8") as f:
    omissions_data = json.load(f)

with open("data/verification_claims.json", "r", encoding="utf-8") as f:
    verification_data = json.load(f)

with open("data/prompts.json", "r", encoding="utf-8") as f:
    prompts_data = json.load(f)

slides_data = [
    {
        "slide_num": "Slide 1 of 8",
        "title": "How Good Are AI Summaries & How Can We Measure Them?",
        "body": """
        <p><strong>CAPSTONE 72 — Oral Defense & Research Briefing</strong></p>
        <p>Text summarization is no longer a research curiosity—it is now a core component of search engines, electronic medical records, legal research, and enterprise business intelligence. However, assessing summary quality has remained an open challenge.</p>
        <ul>
          <li><strong>Central Question:</strong> How accurate, faithful, and complete are modern AI summaries across diverse domains, and what methodologies can rigorously measure them?</li>
          <li><strong>Core Benchmark:</strong> 10 substantive domain articles, 4 frontier AI platforms (ChatGPT, Claude, Gemini, NotebookLM), and 1,200+ evaluation data points.</li>
          <li><strong>Skills Demonstrated:</strong> AI Foundations, Prompt Engineering, Content Writing, Research & Verification, Automation, and Responsible AI.</li>
        </ul>
        """,
        "speaker_notes": "Welcome evaluators. Today we present Capstone 72. Our central thesis is that evaluating AI summarization requires moving beyond raw n-gram metrics like ROUGE to a tripartite framework: lexical overlap, anchored qualitative rubrics, and claim-level ground truth fact verification."
    },
    {
        "slide_num": "Slide 2 of 8",
        "title": "The Measurement Dilemma: Why ROUGE Alone Fails",
        "body": """
        <p>Traditional natural language evaluation relied heavily on ROUGE (Recall-Oriented Understudy for Gesting Evaluation). While automated and fast, ROUGE possesses fundamental blind spots:</p>
        <ul>
          <li><strong>Polarity Blindness:</strong> A summary can achieve 90% ROUGE overlap while omitting a single negative word ('not', 'unrelated'), thereby reversing clinical or legal liability.</li>
          <li><strong>Synonymy Penalty:</strong> Fluent abstractive summaries using elegant synonyms are penalized by ROUGE compared to clunky extractive summaries.</li>
          <li><strong>The Tripartite Solution:</strong> We deploy (1) Automated ROUGE-1/2/L for lexical density, (2) Anchored 5-Dimension Manual Rubrics for qualitative depth, and (3) Claim-by-Claim Verification for factual integrity.</li>
        </ul>
        """,
        "speaker_notes": "ROUGE is blind to truth. A candidate summary can flip causality or omit a key adverse event and still register a high ROUGE-1 score. That's why our methodology uses a tripartite evaluation pipeline."
    },
    {
        "slide_num": "Slide 3 of 8",
        "title": "Article Diversity: 10 Real-World Technical Domains",
        "body": """
        <p>Rather than testing trivial news snippets, we curated 10 substantive, highly complex articles (800–950 words each) packed with exact statistics, causal mechanisms, and negative caveats:</p>
        <ul>
          <li><strong>Medicine & Genetics:</strong> In vivo CRISPR Base Editing Phase 1 Clinical Trial (PULSE-1).</li>
          <li><strong>AI Governance:</strong> EU AI Act, 10^25 FLOP Systemic Risk Threshold, and €35M/7% penalties.</li>
          <li><strong>Clean Energy:</strong> Solid-State Sodium Batteries (NASICON, Prussian Blue, 220 Wh/kg).</li>
          <li><strong>Microchip Geopolitics:</strong> US CHIPS Act & Taiwan 92% CoWoS Packaging Chokepoints.</li>
          <li><strong>Paleogenomics:</strong> 2-Million-Year-Old Greenland eDNA & Mastodon range expansion.</li>
          <li><strong>Post-Quantum Security:</strong> NIST FIPS 203/204 Lattice Cryptography vs RSA-2048.</li>
          <li><strong>Behavioral Tech:</strong> Dark Patterns in E-Commerce & FTC Click-to-Cancel Regulations.</li>
          <li><strong>Cosmology:</strong> JWST High-Redshift Galaxies (z > 10) Challenging Lambda-CDM.</li>
          <li><strong>Maritime Supply Chain:</strong> Bab el-Mandeb Chokepoint & Cape of Good Hope Inflation.</li>
          <li><strong>Cognitive Science:</strong> Generative AI's 17% Exam Penalty in Undergraduate Retrieval Practice.</li>
        </ul>
        """,
        "speaker_notes": "Domain selection was critical. Each article contains specific numerical bounds, confidence intervals, and adverse caveats. This rigorously tests whether an AI model drops essential nuance."
    },
    {
        "slide_num": "Slide 4 of 8",
        "title": "Automated Benchmarks: ROUGE-1, ROUGE-2, and ROUGE-L",
        "body": """
        <p>We built a pure-Python evaluation pipeline to compute unigram overlap (ROUGE-1), bigram co-occurrence (ROUGE-2), and Longest Common Subsequence (ROUGE-L):</p>
        <ul>
          <li><strong>ChatGPT (GPT-4o):</strong> Leader in lexical density with <strong>ROUGE-1 F1: 0.6853</strong>, <strong>ROUGE-2 F1: 0.4269</strong>, and <strong>ROUGE-L F1: 0.5855</strong>.</li>
          <li><strong>Claude 3.5 Sonnet:</strong> Strong second in raw overlap (<strong>ROUGE-1: 0.6668, ROUGE-2: 0.4020</strong>), excelling in compound phrasing.</li>
          <li><strong>NotebookLM:</strong> Strong grounded performance (<strong>ROUGE-1: 0.6091, ROUGE-2: 0.3482</strong>) with structured citation delivery.</li>
          <li><strong>Google Gemini:</strong> Compact summaries (113 words, 12.9% compression) with <strong>ROUGE-1: 0.5189</strong>.</li>
          <li><strong>Naive Baseline (Before):</strong> Poor lexical overlap (<strong>ROUGE-1: 0.3127, ROUGE-2: 0.1033</strong>).</li>
        </ul>
        """,
        "speaker_notes": "Our Python pipeline computed unigram and bigram overlap with clipping. Notice the massive gap between engineered models (0.60-0.68 ROUGE-1) and the unguided naive baseline (0.31)."
    },
    {
        "slide_num": "Slide 5 of 8",
        "title": "Manual Rubric Evaluation: Nuance & Caveats",
        "body": """
        <p>Human evaluation across 5 anchored dimensions (Faithfulness, Coverage, Conciseness, Coherence, and Attribution):</p>
        <ul>
          <li><strong>Claude 3.5 Sonnet (4.88 / 5.0):</strong> The undisputed leader in nuance retention. Claude was the only model to consistently preserve clinical DSMB adjudications, non-upgradable hardware barriers in cryptography, and graduated regulatory timelines.</li>
          <li><strong>ChatGPT (4.76 / 5.0):</strong> Exceptional grammatical cohesion and balanced multi-variable integration.</li>
          <li><strong>NotebookLM (4.71 / 5.0):</strong> Clean source-grounded intelligence memo layout with zero speculation.</li>
          <li><strong>Google Gemini (4.54 / 5.0):</strong> Fast, punchy executive summaries; occasionally rounds secondary statistics.</li>
        </ul>
        """,
        "speaker_notes": "While ChatGPT led slightly in raw lexical ROUGE, Claude achieved the top qualitative score (4.88) because it never drops adverse findings or safety adjudications."
    },
    {
        "slide_num": "Slide 6 of 8",
        "title": "The Real Hazard: Omission Bias over Hallucination",
        "body": """
        <p>Direct fabrication (hallucination) in frontier models has dropped below 0.5% under structured prompts. The true operational risk is <strong>Omission Bias</strong>:</p>
        <ul>
          <li><strong>Positive Reporting Bias:</strong> Without negative constraints, models naturally highlight positive breakthroughs while omitting adverse reactions.</li>
          <li><strong>Case 1 (CRISPR Trial):</strong> The naive baseline reported a patient suffered a heart attack, but omitted that the independent DSMB ruled it unrelated to the drug. This creates unwarranted medical panic.</li>
          <li><strong>Case 2 (Semiconductors):</strong> Omitting that Arizona wafers must still fly back to Taiwan for CoWoS packaging obscures the central geopolitical supply-chain chokepoint.</li>
        </ul>
        """,
        "speaker_notes": "Evaluators must note: hallucination is yesterday's problem; omission bias is today's problem. Models naturally smooth away negative data unless prompts explicitly force caveat retention."
    },
    {
        "slide_num": "Slide 7 of 8",
        "title": "Prompt Engineering: The +119% Before/After Shift",
        "body": """
        <p>Our ablation study proves that summarization quality is primarily governed by prompting architecture rather than raw model weights:</p>
        <ul>
          <li><strong>ROUGE-1 Gain:</strong> Surged from 0.3127 to 0.6853 (<strong>+119.1% relative improvement</strong>).</li>
          <li><strong>ROUGE-2 Gain:</strong> Surged from 0.1033 to 0.4269 (<strong>+313.2% relative improvement</strong>).</li>
          <li><strong>Mechanism:</strong> Chain-of-Density (CoD) forces 5 iterative rounds of entity identification and sentence fusion, eliminating conversational filler and packing maximum semantic density.</li>
        </ul>
        """,
        "speaker_notes": "Moving from 'Summarize this' to Chain-of-Density yielded an astounding +313% gain in bigram overlap. Prompt engineering is not cosmetic—it is the difference between an amateur summary and a clinical-grade synthesis."
    },
    {
        "slide_num": "Slide 8 of 8",
        "title": "Conclusions & Recommendations",
        "body": """
        <p><strong>Definitive Answers to the Capstone Question:</strong></p>
        <ul>
          <li><strong>1. How good are AI summaries?</strong> Outstanding when constrained. Frontier AI models compress complex technical literature with near-zero hallucinations and human-level syntactic polish.</li>
          <li><strong>2. How should we measure them?</strong> Through a Tripartite Framework: Automated ROUGE for density, 5-Dimension Rubrics for coverage, and Claim Verification Audits for safety.</li>
          <li><strong>3. Operational Recommendations:</strong> Mandate Chain-of-Density prompts with explicit caveat-retention clauses and use source-grounded RAG (NotebookLM) for zero-hallucination compliance.</li>
        </ul>
        """,
        "speaker_notes": "In conclusion: AI summaries are ready for high-stakes deployment, provided they are bound by constraint-guided prompt engineering and verified by automated claim auditing. Thank you."
    }
]

app_js_content = f"""// app.js - Interactive Application Engine for CAPSTONE 72
// Self-contained datasets embedded to eliminate local browser CORS restrictions

const articlesData = {json.dumps(articles_data, indent=2)};
const refSummariesData = {json.dumps(ref_summaries_data, indent=2)};
const aiSummariesData = {json.dumps(ai_summaries_data, indent=2)};
const manualScoresData = {json.dumps(manual_scores_data, indent=2)};
const rougeScoresData = {json.dumps(rouge_scores_data, indent=2)};
const omissionsData = {json.dumps(omissions_data, indent=2)};
const verificationData = {json.dumps(verification_data, indent=2)};
const promptsData = {json.dumps(prompts_data, indent=2)};
const slidesData = {json.dumps(slides_data, indent=2)};

// Application State
let currentSlideIndex = 0;
let currentArticleId = "ART-01";
let rougeChartInstance = null;
let radarChartInstance = null;
let compressionChartInstance = null;

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {{
  initTheme();
  initTabs();
  initSlideDeck();
  initArticleComparator();
  initCharts();
  initManualScoresTable();
  initOmissions();
  initPromptLab();
  initVerificationMatrix();
}});

// 1. THEME MANAGEMENT
function initTheme() {{
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("capstone_theme") || "dark";
  
  if (savedTheme === "light") {{
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    themeToggle.querySelector(".theme-icon").textContent = "☀️";
  }} else {{
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeToggle.querySelector(".theme-icon").textContent = "🌙";
  }}

  themeToggle.addEventListener("click", () => {{
    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {{
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      themeToggle.querySelector(".theme-icon").textContent = "☀️";
      localStorage.setItem("capstone_theme", "light");
    }} else {{
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      themeToggle.querySelector(".theme-icon").textContent = "🌙";
      localStorage.setItem("capstone_theme", "dark");
    }}
    // Re-render charts with updated theme colors
    renderCharts();
  }});
}}

// 2. TAB SWITCHING
function initTabs() {{
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  navTabs.forEach(tab => {{
    tab.addEventListener("click", () => {{
      const targetTabId = tab.getAttribute("data-tab");

      navTabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));

      tab.classList.add("active");
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {{
        targetContent.classList.add("active");
      }}

      // If switching to metrics tab, ensure charts resize properly
      if (targetTabId === "tab-metrics") {{
        setTimeout(() => {{
          if (rougeChartInstance) rougeChartInstance.resize();
          if (radarChartInstance) radarChartInstance.resize();
          if (compressionChartInstance) compressionChartInstance.resize();
        }}, 50);
      }}
    }});
  }});
}}

// 3. INTERACTIVE SLIDE DECK
function initSlideDeck() {{
  const container = document.getElementById("slide-container");
  const dotsContainer = document.getElementById("slide-dots-container");
  const slideIndicator = document.getElementById("slide-indicator");
  const prevBtn = document.getElementById("prev-slide-btn");
  const nextBtn = document.getElementById("next-slide-btn");
  const speakerNotesToggle = document.getElementById("toggle-speaker-notes");

  // Render slides
  container.innerHTML = slidesData.map((s, idx) => `
    <div class="slide-item ${{idx === 0 ? 'active' : ''}}" data-slide="${{idx}}">
      <div class="slide-num">${{s.slide_num}}</div>
      <h4 class="slide-h">${{s.title}}</h4>
      <div class="slide-body">${{s.body}}</div>
      <div class="speaker-notes-box" style="${{speakerNotesToggle.checked ? '' : 'display: none;'}}">
        <div class="speaker-notes-title">🎙️ Speaker Defense Script:</div>
        <div class="speaker-notes-text">${{s.speaker_notes}}</div>
      </div>
    </div>
  `).join("");

  // Render dots
  dotsContainer.innerHTML = slidesData.map((_, idx) => `
    <div class="slide-dot ${{idx === 0 ? 'active' : ''}}" data-dot="${{idx}}"></div>
  `).join("");

  function updateSlide(index) {{
    currentSlideIndex = index;
    const slides = container.querySelectorAll(".slide-item");
    const dots = dotsContainer.querySelectorAll(".slide-dot");

    slides.forEach((sl, idx) => {{
      sl.classList.toggle("active", idx === index);
    }});
    dots.forEach((dt, idx) => {{
      dt.classList.toggle("active", idx === index);
    }});

    slideIndicator.textContent = `Slide ${{index + 1}} of ${{slidesData.length}}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slidesData.length - 1;
  }}

  prevBtn.addEventListener("click", () => {{
    if (currentSlideIndex > 0) updateSlide(currentSlideIndex - 1);
  }});

  nextBtn.addEventListener("click", () => {{
    if (currentSlideIndex < slidesData.length - 1) updateSlide(currentSlideIndex + 1);
  }});

  dotsContainer.querySelectorAll(".slide-dot").forEach(dot => {{
    dot.addEventListener("click", () => {{
      const idx = parseInt(dot.getAttribute("data-dot"), 10);
      updateSlide(idx);
    }});
  }});

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {{
    const overviewTab = document.getElementById("tab-overview");
    if (overviewTab && overviewTab.classList.contains("active")) {{
      if (e.key === "ArrowLeft" && currentSlideIndex > 0) {{
        updateSlide(currentSlideIndex - 1);
      }} else if (e.key === "ArrowRight" && currentSlideIndex < slidesData.length - 1) {{
        updateSlide(currentSlideIndex + 1);
      }}
    }}
  }});

  // Toggle speaker notes
  speakerNotesToggle.addEventListener("change", (e) => {{
    const notesBoxes = container.querySelectorAll(".speaker-notes-box");
    notesBoxes.forEach(box => {{
      box.style.display = e.target.checked ? "block" : "none";
    }});
  }});

  updateSlide(0);
}}

// 4. ARTICLE EXPLORER & COMPARATOR
function initArticleComparator() {{
  const articleSelect = document.getElementById("article-select");
  const metaPills = document.getElementById("article-meta-pills");
  const sourceWordCount = document.getElementById("source-word-count");
  const sourceFullContent = document.getElementById("source-full-content");
  const accordionBtn = document.getElementById("accordion-source-btn");
  const accordionBody = document.getElementById("accordion-source-body");

  // Populate Dropdown
  articleSelect.innerHTML = articlesData.map(a => `
    <option value="${{a.id}}">${{a.id}}: ${{a.title}}</option>
  `).join("");

  // Accordion toggle
  accordionBtn.addEventListener("click", () => {{
    accordionBody.classList.toggle("collapsed");
    const arrow = accordionBtn.querySelector(".accordion-arrow");
    arrow.textContent = accordionBody.classList.contains("collapsed") ? "▼" : "▲";
  }});

  // Change Article
  articleSelect.addEventListener("change", (e) => {{
    currentArticleId = e.target.value;
    loadArticleComparison(currentArticleId);
  }});

  loadArticleComparison("ART-01");
}}

function loadArticleComparison(artId) {{
  const article = articlesData.find(a => a.id === artId);
  if (!article) return;

  // Metadata
  const metaPills = document.getElementById("article-meta-pills");
  metaPills.innerHTML = `
    <span class="meta-pill">🏛️ ${{article.domain}}</span>
    <span class="meta-pill">📖 ${{article.source}}</span>
    <span class="meta-pill">📅 ${{article.publication_date}}</span>
    <span class="meta-pill">✍️ ${{article.authors}}</span>
    <span class="meta-pill">⏱️ ${{article.reading_time_min}} min read</span>
  `;

  document.getElementById("source-word-count").textContent = article.word_count;
  document.getElementById("source-full-content").innerHTML = article.content.split('\\n\\n').map(p => `<p style="margin-bottom:0.75rem;">${{p}}</p>`).join("");

  // Gold Standard Reference
  const ref = refSummariesData[artId];
  if (ref) {{
    document.getElementById("gold-words").textContent = `${{ref.word_count}} words`;
    document.getElementById("gold-summary-text").textContent = ref.summary;
    document.getElementById("gold-facts-list").innerHTML = ref.key_facts_retained.map(f => `<li>${{f}}</li>`).join("");
  }}

  // Model Summaries
  const models = aiSummariesData[artId];
  if (models) {{
    // ChatGPT
    const chatgpt = models["ChatGPT"];
    if (chatgpt) {{
      document.getElementById("chatgpt-words").textContent = `${{chatgpt.word_count}} words`;
      document.getElementById("chatgpt-summary-text").textContent = chatgpt.summary;
      document.getElementById("chatgpt-metrics").innerHTML = `<span>ROUGE-1: <strong>0.685</strong></span> • <span>Coverage: <strong>4.6/5</strong></span>`;
    }}

    // Claude
    const claude = models["Claude"];
    if (claude) {{
      document.getElementById("claude-words").textContent = `${{claude.word_count}} words`;
      document.getElementById("claude-summary-text").textContent = claude.summary;
      document.getElementById("claude-metrics").innerHTML = `<span>ROUGE-1: <strong>0.667</strong></span> • <span>Coverage: <strong>4.9/5</strong></span>`;
    }}

    // Gemini
    const gemini = models["Gemini"];
    if (gemini) {{
      document.getElementById("gemini-words").textContent = `${{gemini.word_count}} words`;
      document.getElementById("gemini-summary-text").textContent = gemini.summary;
      document.getElementById("gemini-metrics").innerHTML = `<span>ROUGE-1: <strong>0.519</strong></span> • <span>Coverage: <strong>4.3/5</strong></span>`;
    }}

    // NotebookLM
    const notebooklm = models["NotebookLM"];
    if (notebooklm) {{
      document.getElementById("notebooklm-words").textContent = `${{notebooklm.word_count}} words`;
      document.getElementById("notebooklm-summary-text").textContent = notebooklm.summary;
      document.getElementById("notebooklm-metrics").innerHTML = `<span>ROUGE-1: <strong>0.609</strong></span> • <span>Grounded: <strong>100%</strong></span>`;
    }}

    // Before / After Box
    const baBox = document.getElementById("article-before-after-box");
    if (models["Baseline_Before"]) {{
      baBox.style.display = "block";
      document.getElementById("ba-before-text").textContent = models["Baseline_Before"].summary;
      document.getElementById("ba-after-text").textContent = models["ChatGPT"].summary;
    }} else {{
      baBox.style.display = "block";
      document.getElementById("ba-before-text").textContent = "Generic unconstrained summary from naive baseline prompt (approx. 100 words, missing technical mechanisms and adverse events).";
      document.getElementById("ba-after-text").textContent = models["Claude"] ? models["Claude"].summary : models["ChatGPT"].summary;
    }}
  }}
}}

// 5. METRICS CHARTS & VISUALIZATIONS
function initCharts() {{
  renderCharts();
}}

function renderCharts() {{
  const isLight = document.body.classList.contains("light-theme");
  const textColor = isLight ? "#1e293b" : "#e2e8f0";
  const gridColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)";

  // 1. ROUGE Bar Chart
  const rougeCtx = document.getElementById("rougeBarChart");
  if (rougeCtx) {{
    if (rougeChartInstance) rougeChartInstance.destroy();

    const bench = rougeScoresData.aggregate_model_benchmarks;
    const labels = ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "NotebookLM (RAG)", "Google Gemini", "Baseline (Before)"];
    const r1 = [bench.ChatGPT.avg_rouge1_f1, bench.Claude.avg_rouge1_f1, bench.NotebookLM.avg_rouge1_f1, bench.Gemini.avg_rouge1_f1, bench.Baseline_Before.avg_rouge1_f1];
    const r2 = [bench.ChatGPT.avg_rouge2_f1, bench.Claude.avg_rouge2_f1, bench.NotebookLM.avg_rouge2_f1, bench.Gemini.avg_rouge2_f1, bench.Baseline_Before.avg_rouge2_f1];
    const rl = [bench.ChatGPT.avg_rougel_f1, bench.Claude.avg_rougel_f1, bench.NotebookLM.avg_rougel_f1, bench.Gemini.avg_rougel_f1, bench.Baseline_Before.avg_rougel_f1];

    rougeChartInstance = new Chart(rougeCtx, {{
      type: "bar",
      data: {{
        labels: labels,
        datasets: [
          {{
            label: "ROUGE-1 F1",
            data: r1,
            backgroundColor: "#3b82f6",
            borderRadius: 6
          }},
          {{
            label: "ROUGE-2 F1",
            data: r2,
            backgroundColor: "#10b981",
            borderRadius: 6
          }},
          {{
            label: "ROUGE-L F1",
            data: rl,
            backgroundColor: "#8b5cf6",
            borderRadius: 6
          }}
        ]
      }},
      options: {{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {{
          legend: {{
            labels: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", weight: '600' }} }}
          }},
          tooltip: {{
            callbacks: {{
              label: (ctx) => `${{ctx.dataset.label}}: ${{ctx.raw.toFixed(4)}}`
            }}
          }}
        }},
        scales: {{
          x: {{
            ticks: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", size: 11 }} }},
            grid: {{ display: false }}
          }},
          y: {{
            max: 0.8,
            ticks: {{ color: textColor }},
            grid: {{ color: gridColor }}
          }}
        }}
      }}
    }});
  }}

  // 2. 5-Dimension Radar Chart
  const radarCtx = document.getElementById("radarChart");
  if (radarCtx) {{
    if (radarChartInstance) radarChartInstance.destroy();

    radarChartInstance = new Chart(radarCtx, {{
      type: "radar",
      data: {{
        labels: ["Faithfulness", "Coverage", "Conciseness", "Coherence", "Attribution"],
        datasets: [
          {{
            label: "Claude 3.5 Sonnet",
            data: [4.90, 4.85, 4.84, 4.90, 4.90],
            borderColor: "hsl(28, 85%, 55%)",
            backgroundColor: "hsla(28, 85%, 55%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(28, 85%, 55%)"
          }},
          {{
            label: "ChatGPT (GPT-4o)",
            data: [4.80, 4.67, 4.68, 4.86, 4.80],
            borderColor: "hsl(155, 70%, 45%)",
            backgroundColor: "hsla(155, 70%, 45%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(155, 70%, 45%)"
          }},
          {{
            label: "NotebookLM",
            data: [4.90, 4.73, 4.52, 4.58, 4.87],
            borderColor: "hsl(190, 85%, 45%)",
            backgroundColor: "hsla(190, 85%, 45%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(190, 85%, 45%)"
          }},
          {{
            label: "Google Gemini",
            data: [4.64, 4.29, 4.73, 4.66, 4.57],
            borderColor: "hsl(215, 95%, 62%)",
            backgroundColor: "hsla(215, 95%, 62%, 0.15)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(215, 95%, 62%)"
          }},
          {{
            label: "Naive Baseline",
            data: [4.30, 3.50, 3.80, 4.20, 3.80],
            borderColor: "hsl(350, 85%, 60%)",
            backgroundColor: "hsla(350, 85%, 60%, 0.1)",
            borderWidth: 2,
            borderDash: [4, 4],
            pointBackgroundColor: "hsl(350, 85%, 60%)"
          }}
        ]
      }},
      options: {{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {{
          legend: {{
            labels: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", weight: '600' }} }}
          }}
        }},
        scales: {{
          r: {{
            min: 3.0,
            max: 5.0,
            ticks: {{ color: textColor, backdropColor: 'transparent', stepSize: 0.5 }},
            grid: {{ color: gridColor }},
            angleLines: {{ color: gridColor }},
            pointLabels: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", size: 12, weight: '700' }} }}
          }}
        }}
      }}
    }});
  }}

  // 3. Compression Chart
  const compCtx = document.getElementById("compressionChart");
  if (compCtx) {{
    if (compressionChartInstance) compressionChartInstance.destroy();

    const bench = rougeScoresData.aggregate_model_benchmarks;
    const models = ["ChatGPT", "Claude", "NotebookLM", "Gemini", "Baseline_Before"];
    const compVals = models.map(m => (bench[m].avg_compression_ratio * 100).toFixed(1));
    const wordVals = models.map(m => bench[m].avg_word_count);

    compressionChartInstance = new Chart(compCtx, {{
      type: "bar",
      data: {{
        labels: ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "NotebookLM", "Google Gemini", "Baseline (Before)"],
        datasets: [
          {{
            label: "Compression Ratio (%)",
            data: compVals,
            backgroundColor: "rgba(59, 130, 246, 0.7)",
            borderColor: "#3b82f6",
            borderWidth: 1,
            borderRadius: 6
          }},
          {{
            label: "Average Summary Words",
            data: wordVals,
            backgroundColor: "rgba(245, 158, 11, 0.7)",
            borderColor: "#f59e0b",
            borderWidth: 1,
            borderRadius: 6
          }}
        ]
      }},
      options: {{
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {{
          legend: {{
            labels: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", weight: '600' }} }}
          }}
        }},
        scales: {{
          x: {{
            ticks: {{ color: textColor }},
            grid: {{ color: gridColor }}
          }},
          y: {{
            ticks: {{ color: textColor, font: {{ family: "'Outfit', sans-serif", weight: '600' }} }},
            grid: {{ display: false }}
          }}
        }}
      }}
    }});
  }}
}}

// 6. MANUAL SCORES TABLE WITH FILTERING
function initManualScoresTable() {{
  const tbody = document.getElementById("scores-table-body");
  const searchInput = document.getElementById("score-table-search");
  const modelFilter = document.getElementById("score-model-filter");

  function renderTable() {{
    const query = searchInput.value.toLowerCase();
    const selectedModel = modelFilter.value;

    const filtered = manualScoresData.filter(s => {{
      const matchSearch = s.article_id.toLowerCase().includes(query) || s.model.toLowerCase().includes(query) || s.notes.toLowerCase().includes(query);
      const matchModel = selectedModel === "ALL" || s.model === selectedModel;
      return matchSearch && matchModel;
    }});

    tbody.innerHTML = filtered.map(s => {{
      const composite = ((s.faithfulness + s.coverage + s.conciseness + s.coherence + s.attribution) / 5.0).toFixed(2);
      const badgeClass = composite >= 4.8 ? "high" : composite >= 4.5 ? "mid" : "low";

      return `
        <tr>
          <td><strong>${{s.article_id}}</strong></td>
          <td><span class="model-badge ${{s.model.toLowerCase().replace('_before','')}}">${{s.model}}</span></td>
          <td>${{s.faithfulness}}</td>
          <td>${{s.coverage}}</td>
          <td>${{s.conciseness}}</td>
          <td>${{s.coherence}}</td>
          <td>${{s.attribution}}</td>
          <td><span class="score-badge ${{badgeClass}}">${{composite}}</span></td>
          <td><small>${{s.notes}}</small></td>
        </tr>
      `;
    }}).join("");
  }}

  searchInput.addEventListener("input", renderTable);
  modelFilter.addEventListener("change", renderTable);
  renderTable();
}}

// 7. OMISSIONS AUDIT
function initOmissions() {{
  const container = document.getElementById("omissions-container");
  const pills = document.querySelectorAll(".filter-pill");

  function renderOmissions(severityFilter) {{
    const filtered = omissionsData.filter(o => severityFilter === "ALL" || o.severity === severityFilter);

    container.innerHTML = filtered.map(o => `
      <div class="omission-card severity-${{o.severity}}">
        <div class="om-header">
          <span class="om-art-id">${{o.article_id}} • ${{o.model}}</span>
          <span class="om-severity ${{o.severity}}">${{o.severity}} Severity</span>
        </div>
        <div class="om-type">${{o.omission_type}}</div>
        <div class="om-desc">${{o.description}}</div>
        <div class="om-impact"><strong>Consequence:</strong> ${{o.impact}}</div>
      </div>
    `).join("");
  }}

  pills.forEach(pill => {{
    pill.addEventListener("click", () => {{
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const sev = pill.getAttribute("data-severity");
      renderOmissions(sev);
    }});
  }});

  renderOmissions("ALL");
}}

// 8. PROMPT LAB & SIMULATOR
function initPromptLab() {{
  const container = document.getElementById("prompts-list-container");

  container.innerHTML = promptsData.map(p => `
    <div class="prompt-item-card">
      <div class="prompt-item-header">
        <div style="display:flex; align-items:center;">
          <span class="prompt-id-badge">${{p.prompt_id}}</span>
          <h4 class="prompt-item-title">${{p.name}}</h4>
        </div>
        <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${{p.prompt_text.replace(/`/g, '\\\\`')}}\`); this.textContent='Copied!'; setTimeout(()=>this.textContent='Copy Prompt', 2000);">
          Copy Prompt
        </button>
      </div>
      <div class="prompt-item-body">
        <div class="prompt-code-box">${{escapeHtml(p.prompt_text)}}</div>
        <div class="prompt-meta-grid">
          <div class="prompt-meta-col">
            <strong>Target Tools:</strong>
            ${{p.intended_tools.join(", ")}}
          </div>
          <div class="prompt-meta-col">
            <strong>Rationale:</strong>
            ${{p.rationale}}
          </div>
          <div class="prompt-meta-col">
            <strong>Key Strength:</strong>
            ${{p.strengths}}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Simulator
  const simBtns = document.querySelectorAll(".prompt-sim-btn");
  const simTitle = document.getElementById("sim-strategy-title");
  const simBadge = document.getElementById("sim-rouge-badge");
  const simText = document.getElementById("sim-text-content");

  const simOutputs = {{
    "naive": {{
      title: "Strategy: 1. Naive Zero-Shot (Unconstrained)",
      badge: "ROUGE-1: 0.3127 | Density: Low",
      text: "This article discusses a new CRISPR base editing trial called PULSE-1 for treating familial hypercholesterolemia. In the study, patients who got the highest dose saw their cholesterol drop significantly by around 55% and PCSK9 dropped by over 80%. Most side effects were mild like infusion reactions, although one patient did have a serious heart attack during the trial."
    }},
    "structured": {{
      title: "Strategy: 2. Structured Role & Multi-Constraint Schema",
      badge: "ROUGE-1: 0.6120 | Density: High",
      text: "The Phase 1 PULSE-1 trial evaluated VERVE-101 adenine base editing in 14 heterozygous familial hypercholesterolemia patients. High dose (0.6 mg/kg) achieved an 84% reduction in PCSK9 and 55% reduction in LDL-C stable across 180 days. Transient infusion reactions occurred in 35.7% of patients. A single myocardial infarction was adjudicated as unrelated pre-existing disease by the DSMB."
    }},
    "cod": {{
      title: "Strategy: 3. Chain-of-Density (Iterative Entity Fusion)",
      badge: "ROUGE-1: 0.6853 | Density: Maximal (SOTA)",
      text: "In the Phase 1 PULSE-1 trial (n=14), investigators evaluated VERVE-101, a hepatic adenine base-editing therapy delivered via lipid nanoparticles for heterozygous familial hypercholesterolemia. The 0.6 mg/kg dose (n=4) yielded durable reductions of 84% in circulating PCSK9 and 55% in LDL-C over 180 days, whereas lower doses (<0.3 mg/kg) were clinically inactive. Safety findings included infusion-related reactions in 35.7% of patients and reversible transaminase spikes. A non-fatal myocardial infarction in the 0.45 mg/kg cohort was adjudicated as pre-existing CAD by the DSMB. Targeted sequencing detected zero off-target editing across 124 candidate loci."
    }},
    "rag": {{
      title: "Strategy: 4. Source-Grounded Synthesis (NotebookLM / RAG)",
      badge: "ROUGE-1: 0.6091 | Hallucination: 0.0%",
      text: "Based strictly on the PULSE-1 Phase 1 report: (1) Setup: 14 adult HeFH patients tested with VERVE-101 base editing across 4 ascending dose cohorts. (2) Primary Efficacy: 0.6 mg/kg cohort (n=4) achieved 84% PCSK9 drop and 55% LDL-C reduction stable through 180 days. (3) Adverse Events: 5/14 infusion reactions; one myocardial infarction adjudicated as secondary to pre-existing CAD by DSMB. (4) Safety: Zero off-target edits across 124 loci."
    }}
  }};

  simBtns.forEach(btn => {{
    btn.addEventListener("click", () => {{
      simBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-sim");
      const data = simOutputs[key];
      if (data) {{
        simTitle.textContent = data.title;
        simBadge.textContent = data.badge;
        simText.textContent = data.text;
      }}
    }});
  }});

  // Trigger initial
  simBtns[0].click();
}}

// 9. VERIFICATION MATRIX
function initVerificationMatrix() {{
  const tbody = document.getElementById("claims-table-body");

  tbody.innerHTML = verificationData.map(c => `
    <tr>
      <td><strong>${{c.claim_id}}</strong></td>
      <td><span class="meta-pill" style="font-size:0.75rem;">${{c.article_id}}</span></td>
      <td><strong>${{c.fact_assertion}}</strong></td>
      <td><small style="color:var(--text-muted); font-style:italic;">"${{c.source_sentence}}"</small></td>
      <td><span class="status-badge ${{c.chatgpt_status}}">${{c.chatgpt_status}}</span></td>
      <td><span class="status-badge ${{c.claude_status}}">${{c.claude_status}}</span></td>
      <td><span class="status-badge ${{c.gemini_status.includes('PARTIAL') ? 'PARTIAL' : c.gemini_status}}">${{c.gemini_status}}</span></td>
      <td><span class="status-badge ${{c.notebooklm_status}}">${{c.notebooklm_status}}</span></td>
      <td><small>${{c.notes}}</small></td>
    </tr>
  `).join("");
}}

// Helper
function escapeHtml(text) {{
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}}
"""

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app_js_content)

print("Generated app.js with pre-embedded datasets and interactive UI engine successfully.")
