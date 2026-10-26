# scripts/evaluate_rouge.py
"""
Automated ROUGE & Text Summarization Evaluation Engine for CAPSTONE 72.
Implements:
- ROUGE-1 (Unigram overlap - Recall, Precision, F1)
- ROUGE-2 (Bigram overlap - Recall, Precision, F1)
- ROUGE-L (Longest Common Subsequence - Recall, Precision, F1)
- Compression Ratio (Summary Length / Source Article Length)
- Aggregate Model Benchmarks & Comparison

Exports:
- data/rouge_scores.json
- csv/04_rouge_evaluation.csv
"""

import json
import re
import csv
from collections import Counter

def tokenize(text):
    """Normalize and tokenize text into lowercase alphanumeric words."""
    cleaned = re.sub(r'[^\w\s]', ' ', text.lower())
    tokens = [w for w in cleaned.split() if w]
    return tokens

def get_ngrams(tokens, n):
    """Extract list of n-grams from token sequence."""
    if len(tokens) < n:
        return []
    return [tuple(tokens[i:i+n]) for i in range(len(tokens) - n + 1)]

def compute_rouge_n(candidate_tokens, reference_tokens, n):
    """Calculate ROUGE-N Recall, Precision, and F1."""
    cand_ngrams = get_ngrams(candidate_tokens, n)
    ref_ngrams = get_ngrams(reference_tokens, n)
    
    if not ref_ngrams or not cand_ngrams:
        return {"precision": 0.0, "recall": 0.0, "f1": 0.0}
    
    ref_counter = Counter(ref_ngrams)
    cand_counter = Counter(cand_ngrams)
    
    # Overlap count (clipping)
    overlap = sum(min(count, ref_counter[ng]) for ng, count in cand_counter.items())
    
    recall = overlap / len(ref_ngrams) if len(ref_ngrams) > 0 else 0.0
    precision = overlap / len(cand_ngrams) if len(cand_ngrams) > 0 else 0.0
    
    if (recall + precision) > 0:
        f1 = (2 * precision * recall) / (precision + recall)
    else:
        f1 = 0.0
        
    return {
        "precision": round(precision, 4),
        "recall": round(recall, 4),
        "f1": round(f1, 4)
    }

def lcs_length(x, y):
    """Computes the length of Longest Common Subsequence between token sequences x and y."""
    m, n = len(x), len(y)
    # Using 1D row array to optimize memory
    dp = [0] * (n + 1)
    for i in range(1, m + 1):
        prev = 0
        for j in range(1, n + 1):
            temp = dp[j]
            if x[i - 1] == y[j - 1]:
                dp[j] = prev + 1
            else:
                dp[j] = max(dp[j], dp[j - 1])
            prev = temp
    return dp[n]

def compute_rouge_l(candidate_tokens, reference_tokens):
    """Calculate ROUGE-L based on Longest Common Subsequence."""
    m = len(reference_tokens)
    n = len(candidate_tokens)
    
    if m == 0 or n == 0:
        return {"precision": 0.0, "recall": 0.0, "f1": 0.0}
        
    lcs = lcs_length(reference_tokens, candidate_tokens)
    
    recall = lcs / m
    precision = lcs / n
    
    if (recall + precision) > 0:
        f1 = (2 * precision * recall) / (precision + recall)
    else:
        f1 = 0.0
        
    return {
        "precision": round(precision, 4),
        "recall": round(recall, 4),
        "f1": round(f1, 4),
        "lcs_length": lcs
    }

def main():
    with open("data/articles.json", "r", encoding="utf-8") as f:
        articles = {a["id"]: a for a in json.load(f)}
        
    with open("data/reference_summaries.json", "r", encoding="utf-8") as f:
        references = json.load(f)
        
    with open("data/ai_summaries.json", "r", encoding="utf-8") as f:
        ai_summaries = json.load(f)

    results = []
    model_aggregates = {}

    for art_id, models in ai_summaries.items():
        ref_text = references[art_id]["summary"]
        ref_tokens = tokenize(ref_text)
        art_word_count = articles[art_id]["word_count"]
        
        for model_name, sdata in models.items():
            summary_text = sdata["summary"]
            cand_tokens = tokenize(summary_text)
            
            r1 = compute_rouge_n(cand_tokens, ref_tokens, 1)
            r2 = compute_rouge_n(cand_tokens, ref_tokens, 2)
            rl = compute_rouge_l(cand_tokens, ref_tokens)
            
            cand_len = len(cand_tokens)
            compression_ratio = round(cand_len / art_word_count, 4)
            
            row = {
                "article_id": art_id,
                "article_title": articles[art_id]["title"],
                "model": model_name,
                "prompt_type": sdata["prompt_type"],
                "article_words": art_word_count,
                "summary_words": cand_len,
                "compression_ratio": compression_ratio,
                "rouge1_p": r1["precision"],
                "rouge1_r": r1["recall"],
                "rouge1_f1": r1["f1"],
                "rouge2_p": r2["precision"],
                "rouge2_r": r2["recall"],
                "rouge2_f1": r2["f1"],
                "rougel_p": rl["precision"],
                "rougel_r": rl["recall"],
                "rougel_f1": rl["f1"]
            }
            results.append(row)
            
            # Aggregate stats
            if model_name not in model_aggregates:
                model_aggregates[model_name] = {
                    "count": 0,
                    "r1_f1_sum": 0.0,
                    "r2_f1_sum": 0.0,
                    "rl_f1_sum": 0.0,
                    "r1_r_sum": 0.0,
                    "r1_p_sum": 0.0,
                    "compression_sum": 0.0,
                    "length_sum": 0
                }
            agg = model_aggregates[model_name]
            agg["count"] += 1
            agg["r1_f1_sum"] += r1["f1"]
            agg["r2_f1_sum"] += r2["f1"]
            agg["rl_f1_sum"] += rl["f1"]
            agg["r1_r_sum"] += r1["recall"]
            agg["r1_p_sum"] += r1["precision"]
            agg["compression_sum"] += compression_ratio
            agg["length_sum"] += cand_len

    # Compute averages
    summary_report = {}
    for mname, stats in model_aggregates.items():
        n = stats["count"]
        summary_report[mname] = {
            "evaluated_articles": n,
            "avg_word_count": round(stats["length_sum"] / n, 1),
            "avg_compression_ratio": round(stats["compression_sum"] / n, 4),
            "avg_rouge1_recall": round(stats["r1_r_sum"] / n, 4),
            "avg_rouge1_precision": round(stats["r1_p_sum"] / n, 4),
            "avg_rouge1_f1": round(stats["r1_f1_sum"] / n, 4),
            "avg_rouge2_f1": round(stats["r2_f1_sum"] / n, 4),
            "avg_rougel_f1": round(stats["rl_f1_sum"] / n, 4)
        }

    output_data = {
        "per_article_scores": results,
        "aggregate_model_benchmarks": summary_report
    }

    # Save JSON
    with open("data/rouge_scores.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2)

    # Save CSV
    with open("csv/04_rouge_evaluation.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            "Article ID", "Article Title", "Model", "Prompt Type",
            "Article Words", "Summary Words", "Compression Ratio",
            "ROUGE-1 Precision", "ROUGE-1 Recall", "ROUGE-1 F1",
            "ROUGE-2 Precision", "ROUGE-2 Recall", "ROUGE-2 F1",
            "ROUGE-L Precision", "ROUGE-L Recall", "ROUGE-L F1"
        ])
        for r in results:
            writer.writerow([
                r["article_id"], r["article_title"], r["model"], r["prompt_type"],
                r["article_words"], r["summary_words"], r["compression_ratio"],
                r["rouge1_p"], r["rouge1_r"], r["rouge1_f1"],
                r["rouge2_p"], r["rouge2_r"], r["rouge2_f1"],
                r["rougel_p"], r["rougel_r"], r["rougel_f1"]
            ])

    print("=" * 60)
    print("CAPSTONE 72 - AUTOMATED ROUGE BENCHMARK SUMMARY")
    print("=" * 60)
    for mname, s in summary_report.items():
        print(f"Model: {mname:<16} (Evaluated: {s['evaluated_articles']} articles)")
        print(f"  Avg Words: {s['avg_word_count']:<6} | Compression: {s['avg_compression_ratio']*100:.1f}%")
        print(f"  ROUGE-1 F1: {s['avg_rouge1_f1']:.4f} | ROUGE-2 F1: {s['avg_rouge2_f1']:.4f} | ROUGE-L F1: {s['avg_rougel_f1']:.4f}")
        print("-" * 60)

if __name__ == "__main__":
    main()
