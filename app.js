// app.js - Interactive Application Engine for CAPSTONE 72
// Self-contained datasets embedded to eliminate local browser CORS restrictions

const articlesData = [
  {
    "id": "ART-01",
    "title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
    "domain": "Medicine & Biotechnology",
    "source": "New England Journal of Clinical Genetics",
    "publication_date": "2024-03-15",
    "authors": "Dr. Elena Rostova, Dr. Marcus Thorne, et al.",
    "word_count": 864,
    "reading_time_min": 3.8,
    "abstract": "A breakthrough clinical trial evaluating in vivo adenine base editing targeting the PCSK9 gene in patients with heterozygous familial hypercholesterolemia demonstrates durable LDL-C reductions.",
    "content": "Heterozygous familial hypercholesterolemia (HeFH) is a genetic disorder affecting roughly 1 in 250 individuals globally, characterized by severely elevated low-density lipoprotein cholesterol (LDL-C) and premature cardiovascular disease. While conventional statins and monoclonal PCSK9 antibodies lower circulating LDL-C, lifetime compliance remains suboptimal, and many patients fail to achieve target thresholds below 55 mg/dL. In this multicenter, open-label Phase 1 clinical trial (termed the PULSE-1 Study), investigators evaluated VERVE-101, a novel in vivo adenine base editing therapeutic delivered via lipid nanoparticles (LNPs) targeted to hepatic parenchymal cells.\n\nThe primary objective was to assess safety, tolerability, and pharmacodynamics across four ascending dose cohorts: 0.1 mg/kg, 0.3 mg/kg, 0.45 mg/kg, and 0.6 mg/kg, encompassing 14 adult participants with documented HeFH and refractory coronary artery disease. VERVE-101 precisely converts an adenine to guanine (A-to-G) at a specific splice donor site in the PCSK9 gene in liver hepatocytes, permanently disrupting gene transcription without creating double-stranded DNA breaks, thereby circumventing chromosomal translocations or uncontrollable insertion-deletion (indel) mutagenesis.\n\nAt the highest dose evaluated (0.6 mg/kg, n=4), blood PCSK9 protein concentrations dropped by an average of 84% (95% CI: 76%\u201391%) from baseline at day 28, accompanied by a mean reduction in circulating LDL-C of 55% (95% CI: 43%\u201366%). Importantly, this lipid-lowering efficacy remained stable through 180 days of follow-up with zero regression. In the intermediate 0.45 mg/kg cohort (n=4), mean LDL-C decreased by 39%. Conversely, the lowest dose tiers (0.1 mg/kg and 0.3 mg/kg) showed negligible reductions (<8%), demonstrating a steep sigmoidal dose-response relationship.\n\nSafety evaluations revealed that transient mild-to-moderate infusion-related reactions (IRRs), including low-grade fever and transient rigors, occurred in 5 out of 14 patients (35.7%), all resolving within 24 hours following antihistamine or corticosteroid co-administration. Grade 3 transient alanine aminotransferase (ALT) and aspartate aminotransferase (AST) elevations occurred in two participants receiving the 0.6 mg/kg dose; liver transaminases peaked at day 3 post-infusion and normalized completely by day 14 without clinical sequelae or bilirubin abnormalities. \n\nHowever, one serious adverse event was recorded: a 57-year-old male with pre-existing multi-vessel coronary artery disease in the 0.45 mg/kg cohort experienced a non-fatal myocardial infarction five weeks post-infusion. An independent Data Safety Monitoring Board (DSMB) adjudicated this event as secondary to advanced underlying atherosclerotic disease rather than the genomic editing agent. Comprehensive targeted deep sequencing of circulating genomic DNA from peripheral blood mononuclear cells detected zero off-target base editing across 124 candidate genomic loci.\n\nThe trial investigators concluded that single-course hepatic adenine base editing is clinically feasible and achieves persistent LDL-C suppression comparable to lifelong biweekly antibody injections. Nonetheless, broader Phase 2 cohorts must evaluate long-term off-target stability, potential germline biodistribution concerns, and whether cardiovascular mortality endpoints mirror the dramatic lipid-lowering biomarkers observed in this Phase 1 cohort."
  },
  {
    "id": "ART-02",
    "title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
    "domain": "AI Policy & Law",
    "source": "Journal of Technology Regulation & Governance",
    "publication_date": "2024-05-20",
    "authors": "Sophia Vandermeer & Hendrik Althaus",
    "word_count": 912,
    "reading_time_min": 4.1,
    "abstract": "An in-depth legal analysis of the EU Artificial Intelligence Act, focusing on the categorization of general-purpose AI (GPAI), systemic risk thresholds, and penalties.",
    "content": "The European Parliament and Council reached definitive ratification of the Artificial Intelligence Act (EU AI Act), establishing the world's first comprehensive horizontal regulatory framework for artificial intelligence. Rather than regulating algorithms in the abstract, the regulation adopts a horizontal, risk-differentiated taxonomy that categorizes AI applications into four distinct strata: unacceptable risk (prohibited), high risk (heavily regulated), specific transparency risk, and minimal or no risk.\n\nOf paramount significance for the global technology ecosystem is Title VIIIa, which establishes governance obligations for General-Purpose AI (GPAI) models. While the initial legislative proposal focused exclusively on end-use applications, the explosive emergence of frontier multimodal foundation models compelled European policymakers to create tailored obligations for foundational developers. GPAI models are divided into two operational tiers: baseline general-purpose models and models with 'systemic risk'. A model is presumptively classified as presenting systemic risk if its cumulative computational training capability exceeds 10^25 floating-point operations (FLOPs), a threshold currently encompassing flagship models such as GPT-4, Claude 3 Opus, and Gemini 1.5 Pro.\n\nProviders of standard GPAI models must maintain technical documentation, publish detailed summaries of copyright-protected training corpora, and implement robust policies respecting the EU Copyright Directive. In contrast, providers of systemic-risk GPAI face onerous systemic duties: conducting mandatory adversarial red-teaming, assessing and mitigating systemic hazards (such as CBRN weapon proliferation, autonomous cyber-offense capabilities, and cognitive persuasion), tracking and reporting serious cybersecurity incidents to the newly created European AI Office, and documenting energy efficiency metrics.\n\nEnforcement mechanisms carry formidable statutory penalties designed to command Silicon Valley's undivided attention. Violations of prohibited AI practices (such as biometric categorization based on sensitive traits, social scoring, or untargeted facial scraping) incur administrative fines of up to \u20ac35 million or 7% of global annual turnover, whichever is higher. Non-compliance with GPAI provider obligations or high-risk requirements can yield penalties of up to \u20ac15 million or 3% of global turnover. Supplying misleading information to regulatory bodies is subject to \u20ac7.5 million or 1.5% fines.\n\nThe implementation timeline unfolds along an asymmetric graduated schedule: prohibited practices face statutory bans six months post-enactment; GPAI governance rules apply after 12 months; high-risk system conformity assessments become mandatory after 24 to 36 months depending on existing product safety integration.\n\nCritics argue that the 10^25 FLOP metric is fundamentally arbitrary and will rapidly become obsolete as algorithmic efficiency, algorithmic distillation, and synthetic data techniques compress computational requirements. Furthermore, European venture capital advocates contend that compliance costs could disproportionately hamstring European AI startups relative to well-capitalized American incumbents. Conversely, civil liberties organizations praise the regulation as a landmark triumph for fundamental human rights, transparency, and consumer sovereignty."
  },
  {
    "id": "ART-03",
    "title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
    "domain": "Clean Energy & Materials Science",
    "source": "Advanced Energy Materials Review",
    "publication_date": "2024-04-10",
    "authors": "Prof. Kenji Takahashi, Dr. Rachel Zhao, et al.",
    "word_count": 878,
    "reading_time_min": 3.9,
    "abstract": "Research demonstrates a novel ceramic solid electrolyte paired with a Prussian blue analogue cathode, achieving 220 Wh/kg and bypassing lithium, cobalt, and nickel dependence.",
    "content": "The rapid electrification of global automotive fleets and grid-scale storage has precipitated an unsustainable surge in demand for critical battery minerals, particularly lithium carbonate, battery-grade nickel, and cobalt. With lithium reserves geographically concentrated across the 'Lithium Triangle' of South America and Australia, and cobalt refining tied inextricably to geopolitical vulnerabilities, alternative electrochemical systems have transitioned from academic curiosities to industrial necessities. Among these, sodium-ion battery (NIB) chemistry presents the most compelling value proposition due to sodium's Earth abundance\u2014over 1,000 times greater than lithium\u2014and dramatically lower raw chemical extraction costs.\n\nHowever, conventional liquid-electrolyte sodium-ion cells suffer from two persistent bottlenecks: modest energy density (rarely exceeding 160 Wh/kg) and severe capacity fade induced by sodium dendrite propagation across liquid carbonate electrolytes during high-rate charging. In this study, researchers at the Tokyo Energy Materials Institute demonstrated a breakthrough solid-state sodium battery utilizing a densified NASICON-type solid electrolyte (Na3.2Zr1.9Ca0.1Si2PO12) integrated with a highly stabilized Prussian blue analogue (PBA) cathode (Na2-xFe[Fe(CN)6]) and a thin sodium-metal anode.\n\nThe engineered NASICON ceramic separator exhibited an exceptional room-temperature ionic conductivity of 3.8 \u00d7 10^-3 S/cm, matching commercial liquid electrolytes while delivering a high critical current density of 4.2 mA/cm^2. A 15-nanometer amorphous titanium dioxide (TiO2) buffer layer applied to the sodium metal interface effectively prevented mechanical interfacial delamination and suppressed chemical dendrite nucleation over prolonged cycling.\n\nThe full-cell prototype attained a gravimetric energy density of 220 Wh/kg at cell level\u2014surpassing commercial lithium-iron-phosphate (LFP) cells (typically 170-190 Wh/kg)\u2014while retaining 88.4% of its initial discharge capacity after 1,500 continuous 1C charge-discharge cycles at 25\u00b0C. Furthermore, thermal runaway tests in an accelerating rate calorimeter (ARC) confirmed no self-heating or explosive exothermic venting up to 310\u00b0C, contrasting starkly with conventional lithium-ion liquid cells that trigger catastrophic thermal runaway at 160\u00b0C.\n\nEconomically, the complete elimination of lithium, cobalt, and nickel reduces projected cathode pack material costs by 62% ($24/kWh versus $63/kWh for NMC-811). Furthermore, sodium-ion cells can be safely discharged to zero volts without damaging the copper-free aluminum current collectors on both anode and cathode, substantially simplifying international air transport and battery pack assembly safety protocols.\n\nDespite these promising breakthroughs, industrial scale-up faces substantial manufacturing hurdles. Sintering the NASICON ceramic electrolyte requires high-temperature thermal processing at 1,150\u00b0C, which consumes significant kiln energy and is prone to micro-cracking in roll-to-roll manufacturing. The research consortium is currently partnering with automotive cell manufacturers to develop low-temperature flash-sintering techniques to enable commercial pilot-line production by late 2026."
  },
  {
    "id": "ART-04",
    "title": "The Global Semiconductor Realignment: CHIPS Act Subsidies and Advanced Packaging Bottlenecks",
    "domain": "Geopolitics & Microelectronics",
    "source": "Strategic Semiconductor Quarterly",
    "publication_date": "2024-06-05",
    "authors": "Nathaniel Cross & Lin Wei-Ting",
    "word_count": 890,
    "reading_time_min": 4.0,
    "abstract": "An investigation into US and European CHIPS Act implementation, revealing that advanced 2.5D/3D packaging capacity, not front-end lithography, remains the true AI chip bottleneck.",
    "content": "Over the past three years, Western governments have committed more than $100 billion in direct capital subsidies to onshore advanced semiconductor manufacturing. The United States enacted the $52.7 billion CHIPS and Science Act, while the European Union mobilized a \u20ac43 billion counterpart. Major foundry operators, including TSMC, Intel, and Samsung, responded by announcing mega-fab construction projects in Phoenix (Arizona), Columbus (Ohio), Magdeburg (Germany), and Taylor (Texas). Yet, as these multi-billion-dollar facilities break ground, strategic analysts and industry executives increasingly acknowledge that front-end silicon wafer fabrication represents only half of the semiconductor sovereignty equation.\n\nThe emergence of massive generative AI computing clusters has shifted the critical manufacturing bottleneck from front-end EUV lithography (producing 3nm and 2nm silicon dies) to advanced back-end heterogeneous integration, specifically 2.5D and 3D chiplet packaging. Advanced AI accelerators\u2014including Nvidia's H100, B200, and AMD's Instinct MI300X\u2014cannot function as monolithic silicon chips due to lithographic reticle size limits. Instead, they require multi-die interposers connecting high-bandwidth memory (HBM3e) stacks to primary compute dies via TSMC's proprietary Chip-on-Wafer-on-Substrate (CoWoS) packaging technology.\n\nCrucially, more than 92% of the world's advanced CoWoS packaging capacity remains physically concentrated within Taiwan, primarily at TSMC's Taichung and Longtan facilities. Even if TSMC's Fab 21 in Phoenix successfully produces cutting-edge 4nm and 3nm wafers in the United States by 2025, those completed silicon wafers must still be crated, air-freighted across the Pacific Ocean back to Taiwan for wafer dicing, silicon interposer bonding, and HBM stacking, before being shipped again to assembly integrators in Mexico or Southeast Asia. Consequently, the primary geopolitical vulnerability\u2014potential blockade or conflict across the Taiwan Strait\u2014remains virtually unchanged.\n\nRecognizing this critical vulnerability, the US Department of Commerce allocated $3 billion from the National Advanced Packaging Manufacturing Program (NAPMP). Intel has expanded its Foveros 3D packaging facilities in New Mexico, while Amkor Technology announced a $2 billion packaging and test facility in Peoria, Arizona. TSMC has also announced an advanced packaging unit for its second Phoenix phase, yet full operational commissioning is not slated until 2028.\n\nCompounding physical infrastructure delays is an acute domestic skilled-labor deficit. The Semiconductor Industry Association (SIA) projects a shortage of roughly 67,000 technicians, computer scientists, and microelectronics engineers in the United States by 2030. Furthermore, high domestic construction costs in the US\u2014running approximately 4.5 times higher than in Taiwan\u2014threaten the long-term margin sustainability of onshore operations once federal subsidies expire."
  },
  {
    "id": "ART-05",
    "title": "Ancient Environmental DNA Reveals Greenland\u2019s Two-Million-Year-Old Boreal Ecosystem",
    "domain": "Genomics & Paleontology",
    "source": "Nature Geoscience Explorations",
    "publication_date": "2024-02-18",
    "authors": "Prof. Kurt H. Kj\u00e6r, Dr. Mikkel Winther Pedersen, et al.",
    "word_count": 845,
    "reading_time_min": 3.7,
    "abstract": "Two-million-year-old environmental DNA recovered from Kap K\u00f8benhavn sediment in northern Greenland reconstructs a warm, lush forest ecosystem populated by mastodons, reindeer, and poplar trees.",
    "content": "Paleogenomics reached an extraordinary chronological frontier when an international consortium of geneticists recovered and authenticated two-million-year-old environmental DNA (eDNA) from the Kap K\u00f8benhavn Formation in Peary Land, northern Greenland. Prior to this discovery, the oldest authenticated ancient DNA was extracted from a Siberian mammoth tooth dated to approximately 1.2 million years ago. By applying cutting-edge enzymatic DNA repair protocols and single-stranded shotgun metagenomic sequencing to 41 fine-grained clay and quartz sediment samples, researchers unlocked a vivid biological snapshot of an ecosystem that thrived during an early Pleistocene interglacial epoch.\n\nTwo million years ago, northern Greenland\u2014today a barren polar polar desert with mean annual temperatures hovering around -17\u00b0C\u2014experienced temperatures between 11\u00b0C and 19\u00b0C warmer than today. The sediment deposits, accumulating over 20,000 years in a shallow coastal fjord, yielded identifiable genetic fragments from 102 distinct plant genera and 9 animal species.\n\nThe botanical reconstruction depicts an open boreal forest community dominated by poplar (Populus), birch (Betula), yew (Taxus), and northern white cedar (Thuja), interspersed with arctic and subarctic shrubs. The biological surprise, however, was the presence of Taxus baccata, a temperate conifer species currently restricted to mild southern European and British climates, demonstrating that tree taxa could adapt to high-latitude polar light regimes\u2014including months of continuous summer daylight and winter darkness\u2014provided ambient temperatures were sufficiently warm.\n\nOn the faunal side, the metagenomic signatures confirmed the presence of reindeer (Rangifer), hares, lemmings, and geese. Most astonishingly, researchers identified eDNA belonging to the extinct mastodon (Mammut), an elephant relative previously believed to have been confined to North and Central American temperate woodlands. The discovery proves that mastodons migrated across continental ice bridges into the northernmost reaches of Greenland, expanding their recognized ecological range by thousands of kilometers.\n\nMarine eDNA within the same sediment strata revealed Atlantic horseshoe crabs (Limulus polyphemus) and green algae, organisms whose modern northern boundary lies 1,500 kilometers to the south in warm North Atlantic waters. \n\nFrom an evolutionary standpoint, the findings provide vital clues regarding how biological organisms adapt to rapid climate warming. Because the reconstructed Kap K\u00f8benhavn community has no modern analog\u2014combining temperate and boreal species with high-latitude photoperiods\u2014it suggests that ecological communities do not shift as rigid, monolithic biomes. Instead, individual species re-assort dynamically based on idiosyncratic physiological tolerances, offering critical predictive models as modern anthropogenic global heating approaches Pliocene and Pleistocene benchmarks."
  },
  {
    "id": "ART-06",
    "title": "Post-Quantum Cryptography: NIST Standards and the Transition Away from RSA-2048",
    "domain": "Cybersecurity & Quantum Computing",
    "source": "Communications of the ACM Security Review",
    "publication_date": "2024-08-14",
    "authors": "Dr. Aris Thorne & Michelle De Silva",
    "word_count": 925,
    "reading_time_min": 4.2,
    "abstract": "NIST's release of the first standardized post-quantum cryptographic algorithms signals an urgent deadline for enterprises to migrate away from RSA and ECC before cryptanalytically relevant quantum computers emerge.",
    "content": "For nearly half a century, the global digital economy has rested upon public-key cryptography\u2014principally RSA, Diffie-Hellman, and Elliptic Curve Cryptography (ECC). These mathematical protocols safeguard everything from encrypted TLS/SSL web browsing, banking transactions, and virtual private networks to digital identity signatures and critical infrastructure control grids. However, their underlying security depends entirely on the computational intractability of two mathematical problems: integer factorization and the discrete logarithm problem. In 1994, mathematician Peter Shor proved that a sufficiently powerful quantum computer could solve both problems in polynomial time using Shor's algorithm, rendering modern public-key encryption obsolete.\n\nTo avert this looming cryptographic collapse, the National Institute of Standards and Technology (NIST) concluded an eight-year international competition by releasing the first official Post-Quantum Cryptography (PQC) standards in August 2024. The standardized algorithms include FIPS 203 (ML-KEM, formerly CRYSTALS-Kyber) for general public-key encryption and key encapsulation; FIPS 204 (ML-DSA, formerly CRYSTALS-Dilithium) for general digital signatures; and FIPS 205 (SLH-DSA, formerly SPHINCS+) for stateless hash-based digital signatures. A fourth standard, FIPS 206 (FN-DSA, formerly Falcon), is scheduled for final ratification in late 2024.\n\nUnlike RSA, which relies on number theory, ML-KEM and ML-DSA are anchored in the hardness of lattice-based mathematics\u2014specifically the Learning With Errors over Module Lattices (Module-LWE) problem. Lattice problems remain computationally intractable for both classical and quantum supercomputers because they involve finding the shortest vector in high-dimensional multidimensional geometric lattices, a problem for which no polynomial-time quantum algorithm is known.\n\nThe transition to PQC is driven by an immediate adversary threat known as 'Harvest Now, Decrypt Later' (HNDL). Hostile nation-state intelligence agencies and cybercriminal syndicates are currently intercepting and archiving massive quantities of encrypted corporate, defense, and sovereign communications. Even if a Cryptanalytically Relevant Quantum Computer (CRQC) requires 10 to 15 years to materialize, intercepted data with multi-decade confidentiality requirements\u2014such as military weapon blueprints, intelligence dossiers, and healthcare genomics\u2014will be decrypted retroactively once quantum hardware reaches maturity.\n\nHowever, migrating legacy enterprise architectures presents immense engineering friction. Lattice-based public keys and ciphertexts are substantially larger than their RSA equivalents. For instance, an ML-KEM-768 public key requires 1,184 bytes, compared to 256 bytes for a 2048-bit RSA key. Transmitting larger cryptographic payloads over standard network protocols can trigger IP packet fragmentation, degraded network throughput, and buffer overflows in resource-constrained IoT edge devices. Furthermore, millions of embedded systems, automotive controllers, and hardware security modules (HSMs) possess fixed firmware with non-upgradable cryptographic accelerators, necessitating full physical hardware replacement cycles spanning the next decade."
  },
  {
    "id": "ART-07",
    "title": "Dark Patterns and Algorithmic Choice Architecture in Subscription E-Commerce",
    "domain": "Behavioral Economics & Consumer Protection",
    "source": "Harvard Journal of Consumer Law & Tech",
    "publication_date": "2024-04-28",
    "authors": "Prof. Claudia Vance & Julian M. Sterling",
    "word_count": 850,
    "reading_time_min": 3.9,
    "abstract": "An empirical study of 500 subscription platforms reveals widespread deceptive design interfaces, quantifying consumer welfare losses and analyzing aggressive FTC regulatory crackdowns.",
    "content": "The rapid migration of retail commerce toward recurring subscription models has introduced sophisticated digital design techniques designed to exploit cognitive biases and manipulate consumer decision-making. Termed 'dark patterns' by user experience practitioner Harry Brignull in 2010, these manipulative interface architectures systematically undermine consumer autonomy, steering individuals into unintended purchases, recurring billings, and privacy disclosures. In a comprehensive empirical investigation across the 500 largest direct-to-consumer subscription platforms in North America, researchers cataloged and quantified the prevalence of deceptive choice architecture.\n\nThe study identified five primary deceptive archetypes: 'Roach Motel' (making subscription sign-up frictionless with a single click, while requiring convoluted multi-step cancellation flows involving phone calls or hidden menus), 'Confirmshaming' (emotionally coercive opt-out phrasing such as 'No thanks, I hate saving money'), 'Forced Continuity' (converting free trials to paid recurring tiers without advance notification or renewal disclosures), 'Hidden Costs' (revealing mandatory processing or service surcharges only at the final checkout screen), and 'False Urgency' (countdown timers displaying fabricated inventory scarcity or artificial discount deadlines).\n\nThe quantitative data revealed that 76.4% of analyzed subscription services incorporated at least one manipulative design pattern. Most egregiously, 42.8% of platforms engaged in asymmetric cancellation friction: whereas the mean time to enroll in a subscription was 48 seconds, the cancellation process required an average of 9.4 minutes, navigating a mean of 4.2 confirmation screens containing redundant retention offers. Controlled behavioral experiments involving 2,400 participants demonstrated that users exposed to forced continuity and roach motel patterns were 3.8 times less likely to successfully terminate unwanted recurring subscriptions, resulting in an estimated average annual consumer welfare loss of $164 per subscriber.\n\nRegulatory enforcement has intensified markedly. The US Federal Trade Commission (FTC) enacted an updated 'Click-to-Cancel' rule under Section 5 of the FTC Act, mandating that businesses make cancellation as simple and accessible as enrollment. Under the new rule, if a consumer can subscribe online in three clicks, they must be allowed to terminate the subscription online through an equally direct mechanism, without undergoing mandatory retention questionnaires or phone-based customer service queues.\n\nViolations under the revised framework incur civil penalties of up to $50,120 per violation, in addition to mandatory restitution for affected consumers. Corporate defense counsel argue that aggressive regulatory definitions risk criminalizing legitimate consumer retention offers and promotional messaging. Nonetheless, the empirical findings suggest that without bright-line algorithmic transparency and rigorous enforcement, digital choice architecture will continue to degrade consumer sovereignty in modern subscription markets."
  },
  {
    "id": "ART-08",
    "title": "James Webb Space Telescope Observations of High-Redshift Galaxies Challenge Early Universe Cosmological Models",
    "domain": "Astrophysics & Cosmology",
    "source": "Astrophysical Journal Letters",
    "publication_date": "2024-01-22",
    "authors": "Dr. Beatrice Dupont, Dr. Rajesh Chandra, et al.",
    "word_count": 892,
    "reading_time_min": 4.0,
    "abstract": "JWST discoveries of luminous, massive galaxies at redshifts z > 10 challenge standard Lambda-CDM cosmological assumptions, spurring intense debate over star formation efficiency vs dark matter halo growth.",
    "content": "Since commencing scientific operations in July 2022, the James Webb Space Telescope (JWST) has peered deeper into cosmic time than any previous astronomical observatory. Utilizing its Near-Infrared Camera (NIRCam) and Near-Infrared Spectrograph (NIRSpec), JWST has detected an unexpected abundance of bright, morphologically mature galaxies at redshifts exceeding z = 10\u2014corresponding to merely 300 to 450 million years after the Big Bang. Under the prevailing standard model of cosmology, known as Lambda-Cold Dark Matter (Lambda-CDM), structure formation proceeds hierarchically: small primordial dark matter halos coalesce slowly through gravitational accretion before baryonic gas cools and fragments to ignite the first generations of Population III and II stars.\n\nAccording to theoretical simulations based on Lambda-CDM, the cosmic volume probed by early JWST surveys should contain vanishingly few massive galaxies. Instead, deep photometric surveys\u2014such as the JADES (JWST Advanced Deep Extragalactic Survey) and CEERS (Cosmic Evolution Early Release Science)\u2014have uncovered dozens of candidates, including JADES-GS-z14-0 (spectroscopically confirmed at z = 14.32), which exhibited stellar masses estimated between 10^8 and 10^9 solar masses. \n\nThis unexpected luminosity presents what astrophysicists have characterized as an 'impossible early galaxy' dilemma. If these distant systems possess standard stellar mass-to-light ratios characteristic of local galaxies, the implied baryonic mass conversion efficiency must approach 100%\u2014meaning virtually all available primordial gas in dark matter halos was converted into stars instantaneously, defying known feedback mechanisms such as supernova radiation pressure and stellar winds that normally expel gas and regulate starburst activity.\n\nTwo primary theoretical camps have emerged to reconcile these empirical observations with cosmological theory. The first hypothesis posits that the galaxies are not anomalously massive, but rather anomalously bright. Under this scenario, early stellar populations were dominated by massive, metal-free Population III stars with a top-heavy Initial Mass Function (IMF). Because massive stars radiate exponentially more ultraviolet light per unit mass, a relatively modest stellar population could mimic the luminosity of a galaxy ten times more massive. Alternatively, obscured supermassive black hole seed accretion (Active Galactic Nuclei) could contribute significantly to the observed infrared flux.\n\nThe second, more radical hypothesis posits that the fundamental cosmological parameters of the Lambda-CDM model require modification. Proponents argue that non-Gaussian primordial density fluctuations in the early universe, or dynamical dark energy models, could accelerate early dark matter halo collapse, permitting massive structure formation much earlier than previously conceived.\n\nFollow-up spectroscopic surveys using high-resolution NIRSpec gratings are currently measuring metallicity gradients and stellar velocity dispersions in candidates at z > 12 to definitively break the degeneracy between star formation efficiency, top-heavy IMFs, and cosmological dark matter growth."
  },
  {
    "id": "ART-09",
    "title": "The Red Sea Maritime Crisis: Chokepoint Disruption, Cape of Good Hope Diversions, and Container Freight Inflation",
    "domain": "Global Supply Chain & Geopolitics",
    "source": "Global Trade & Logistics Monitor",
    "publication_date": "2024-07-12",
    "authors": "Tariq Al-Mansoor & Rebecca H. Vance",
    "word_count": 870,
    "reading_time_min": 3.9,
    "abstract": "Attacks on commercial shipping in the Bab el-Mandeb strait diverted 67% of Suez Canal traffic around the Cape of Good Hope, adding 10-14 days to Asia-Europe routes, spiking freight rates, and driving maritime emissions.",
    "content": "The Bab el-Mandeb strait\u2014a narrow 29-kilometer maritime passage connecting the Gulf of Aden to the southern Red Sea\u2014serves as one of the world's most critical geoeconomic chokepoints, historically channeling approximately 12% of total global seaborne trade and nearly 30% of global container traffic. Beginning in late November 2023, asymmetric drone, ballistic missile, and sea-drone attacks launched by Houthi forces from coastal Yemen targeted commercial cargo vessels transiting the corridor, ostensibly in solidarity with Palestinians in Gaza. The resulting maritime insecurity triggered the most disruptive reconfiguration of international shipping lanes since the closure of the Suez Canal during the 1967 Six-Day War.\n\nMajor international ocean carriers\u2014including Maersk, MSC, CMA CGM, Hapag-Lloyd, and COSCO\u2014suspended Red Sea voyages, redirecting vessels around the southern tip of Africa via the Cape of Good Hope. By April 2024, vessel traffic transiting the Suez Canal plummeted by 67% year-over-year, dropping from an average of 72 vessels per day to fewer than 24. \n\nThe detour around the Cape of Good Hope introduces substantial operational friction. For a standard ultra-large container vessel traveling between Shanghai and Rotterdam, circumnavigating Africa adds between 3,500 and 4,000 nautical miles, extending one-way voyage transit times by 10 to 14 days. To maintain weekly service frequency across scheduled liner strings, shipping alliances were forced to inject an estimated 1.2 million TEU (twenty-foot equivalent units) of vessel capacity, effectively absorbing the global fleet's historical supply overhang.\n\nEconomically, the diversion exerted immediate upward pressure on spot freight rates and maritime insurance. Hull and war-risk insurance premiums for Red Sea transits escalated from 0.05% of vessel value in mid-2023 to over 1.0% in early 2024, adding up to $1 million in operational insurance costs per single transit. Concurrently, the Drewry World Container Index spot rate for a 40-foot container from Shanghai to Rotterdam surged from $1,600 in October 2023 to over $5,400 in June 2024\u2014a 237% escalation.\n\nEnvironmental consequences have also been pronounced. Operating container vessels at higher cruising speeds (steaming up from 14 knots to 17 knots) to mitigate voyage delays, combined with extended sailing distances, generated an estimated 35% increase in fuel consumption. Industry analysts project that maritime carbon dioxide emissions along Asia-Europe trade lanes increased by 13.5 million metric tons in the first half of 2024 alone.\n\nThe crisis highlights the acute structural vulnerability of globalized just-in-time supply chains to asymmetric geopolitical disruption. While multinational naval task forces (such as Operation Prosperity Guardian) have intercepted dozens of aerial drones, they have failed to restore commercial insurer confidence, cementing extended African routing as the operational baseline for global maritime commerce well into 2025."
  },
  {
    "id": "ART-10",
    "title": "The Impact of Generative AI on Undergraduate Critical Thinking and Retrieval Practice",
    "domain": "Education & Cognitive Psychology",
    "source": "Journal of Educational Psychology & Tech",
    "publication_date": "2024-09-08",
    "authors": "Dr. Sarah Jenkins, Prof. David O'Connor, et al.",
    "word_count": 885,
    "reading_time_min": 4.0,
    "abstract": "A 1,200-student randomized controlled trial across four universities evaluates generative AI writing assistants, revealing significant short-term assignment gains but a 17% decline in unassisted analytical recall tests.",
    "content": "The rapid integration of Large Language Model (LLM) assistants\u2014such as ChatGPT and Claude\u2014into higher education has sparked intense pedagogical controversy. While ed-tech proponents herald generative AI as a personalized cognitive scaffolding tool that democratizes tutoring and accelerates brainstorming, educational psychologists caution that premature outsourcing of synthesis tasks may induce cognitive offloading, attenuating deep retrieval practice and long-term analytical retention. In a rigorous two-semester randomized controlled trial (RCT) spanning 1,200 undergraduate humanities and social science students across four US universities, researchers investigated the empirical impact of generative AI assistance on student writing performance and independent critical thinking.\n\nParticipants were randomized into three matched cohorts for a 14-week course requiring weekly essay synthesis assignments: Cohort A (Unassisted control, prohibited from using AI tools); Cohort B (AI-augmented with open access to GPT-4 for outlining, drafting, and revising); and Cohort C (AI-structured, where students used an AI tool programmed strictly as a Socratic tutor that probed student reasoning without generating text blocks).\n\nDuring the 14-week instructional period, Cohort B (AI-augmented) achieved statistically significant higher marks on weekly take-home assignments, averaging 88.4% compared to 81.2% for Cohort A and 84.6% for Cohort C (p < 0.001). Rubric evaluations noted that Cohort B essays exhibited superior syntactic polish, broader thematic coverage, and fewer grammatical errors.\n\nHowever, the educational trade-off manifested starkly during unassisted mid-term and final examinations administered in strictly proctored, pen-and-paper settings without digital access. On unassisted multi-source synthesis and critical counter-argument evaluation tests, Cohort B experienced a 17.3% score decline relative to their weekly coursework, averaging only 71.1%. In contrast, Cohort A (Unassisted) retained stable performance (80.4%), while Cohort C (Socratic AI) demonstrated the highest retention and critical reasoning scores, averaging 83.7%.\n\nPost-trial cognitive assessment battery tests revealed that Cohort B students exhibited measurable deficits in source attribution accuracy and argumentative depth when required to spot logical fallacies in complex texts. Eye-tracking and screen-recording data revealed that 68% of Cohort B students engaged in 'copy-paste-skim' behaviors, rarely reading the foundational academic sources cited in their AI-generated outputs.\n\nThe researchers concluded that passive cognitive offloading via generative AI creates an 'illusion of competence'\u2014students conflate the fluent, polished output of the model with their own internal comprehension. Conversely, when AI is restricted to interactive Socratic questioning that forces the learner to retrieve memories and articulate arguments independently, generative technology significantly enhances critical thinking. The study urges academic institutions to transition away from passive AI usage toward structured pedagogical protocols that preserve deliberate cognitive effort."
  }
];
const refSummariesData = {
  "ART-01": {
    "article_id": "ART-01",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "In the Phase 1 PULSE-1 clinical trial involving 14 adults with heterozygous familial hypercholesterolemia (HeFH), researchers evaluated VERVE-101, an in vivo adenine base editing therapy targeting hepatic PCSK9 via lipid nanoparticles. At the top dose (0.6 mg/kg, n=4), blood PCSK9 dropped by 84% and LDL-C fell by 55%, with efficacy stable through 180 days. Intermediate dosing (0.45 mg/kg) yielded a 39% LDL-C reduction, while lower doses (<0.3 mg/kg) showed negligible impact. Adverse events included transient infusion reactions in 35.7% of patients and reversible Grade 3 liver transaminase elevations in two patients. One patient experienced a myocardial infarction five weeks post-infusion, adjudicated as unrelated to the treatment. Targeted deep sequencing detected zero off-target editing across 124 candidate loci. While promising, Phase 2 trials must evaluate long-term safety, germline biodistribution, and clinical cardiovascular mortality outcomes.",
    "word_count": 139,
    "key_facts_retained": [
      "PULSE-1 Phase 1 trial with 14 HeFH patients evaluating VERVE-101 base editing",
      "At 0.6 mg/kg dose: 84% PCSK9 drop and 55% LDL-C reduction stable over 180 days",
      "Adverse events: 35.7% infusion reactions, 2 Grade 3 ALT/AST elevations, 1 adjudicated unrelated MI",
      "Zero off-target base editing detected across 124 candidate genomic loci",
      "Phase 2 required to assess long-term safety, germline biodistribution, and mortality"
    ]
  },
  "ART-02": {
    "article_id": "ART-02",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "The European Union has enacted the AI Act, establishing a risk-tiered horizontal regulatory framework spanning prohibited, high, specific transparency, and minimal risk tiers. Title VIIIa introduces governance for General-Purpose AI (GPAI) foundation models, dividing them into baseline models and 'systemic risk' models\u2014defined by computational training exceeding 10^25 FLOPs (encompassing GPT-4, Claude 3 Opus, and Gemini 1.5 Pro). Baseline providers must supply technical documentation and copyright summaries, whereas systemic-risk developers must conduct adversarial red-teaming, mitigate systemic threats, report serious cybersecurity incidents, and track energy usage. Violations carry severe fines: up to \u20ac35 million or 7% of global turnover for prohibited practices, and up to \u20ac15 million or 3% for GPAI breaches. Implementation follows a staggered schedule from 6 to 36 months. Critics argue the 10^25 FLOP threshold is arbitrary and burdens European startups, while civil groups laud its human rights protections.",
    "word_count": 147,
    "key_facts_retained": [
      "EU AI Act uses four-tier risk structure: prohibited, high, transparency, minimal",
      "GPAI models split into baseline and systemic risk (>10^25 FLOPs)",
      "Systemic obligations include red-teaming, systemic threat mitigation, incident reporting, energy metrics",
      "Fines up to \u20ac35M/7% for prohibited systems; \u20ac15M/3% for GPAI non-compliance",
      "Graduated timeline (6 to 36 months); criticism over arbitrary FLOP metric and startup burdens"
    ]
  },
  "ART-03": {
    "article_id": "ART-03",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "Researchers at the Tokyo Energy Materials Institute developed a solid-state sodium-ion battery that bypasses lithium, cobalt, and nickel supply bottlenecks. The cell couples a densified NASICON ceramic solid electrolyte (Na3.2Zr1.9Ca0.1Si2PO12) with a Prussian blue analogue cathode, a sodium-metal anode, and a 15-nm protective TiO2 buffer layer. The electrolyte delivers high ionic conductivity (3.8 \u00d7 10^-3 S/cm) and suppresses dendrite growth. The prototype achieved a gravimetric energy density of 220 Wh/kg\u2014exceeding commercial LFP batteries\u2014and retained 88.4% capacity after 1,500 cycles at 1C. Thermal tests showed stability up to 310\u00b0C without runaway. Economically, cathode material costs drop by 62% ($24/kWh vs. $63/kWh for NMC-811), and cells can safely discharge to zero volts. However, commercial manufacturing is impeded by high-temperature sintering requirements (1,150\u00b0C) and micro-cracking risks, prompting ongoing research into low-temperature flash-sintering.",
    "word_count": 133,
    "key_facts_retained": [
      "Solid-state sodium battery uses NASICON electrolyte, Prussian blue cathode, and 15-nm TiO2 layer",
      "Energy density reaches 220 Wh/kg (surpassing LFP) with 88.4% capacity retention after 1,500 cycles",
      "Thermal runaway avoided up to 310\u00b0C; zero-volt safe discharge eliminates copper collectors",
      "Cathode material cost falls by 62% ($24/kWh vs $63/kWh for NMC-811)",
      "Scalability bottleneck: 1,150\u00b0C sintering prone to micro-cracking; flash-sintering under development"
    ]
  },
  "ART-04": {
    "article_id": "ART-04",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "Despite over $100 billion in Western semiconductor subsidies through the US ($52.7B) and EU (\u20ac43B) CHIPS Acts, advanced 2.5D/3D heterogeneous packaging remains the critical bottleneck for AI chips. Flagship accelerators like Nvidia's H100/B200 and AMD's MI300X rely on multi-die integration and HBM3e linked via TSMC's proprietary CoWoS technology. Over 92% of global CoWoS packaging capacity is concentrated in Taiwan. Even if US front-end fabs produce 4nm/3nm wafers in Arizona by 2025, silicon dies must still be shipped to Taiwan for packaging before final assembly, leaving geopolitical risks unmitigated. The US has allocated $3 billion toward packaging research, with Intel and Amkor expanding domestic facilities, but TSMC's US packaging unit will not operate until 2028. Furthermore, domestic efforts face a projected 67,000-worker technical deficit by 2030 and US construction costs 4.5 times higher than Taiwan's.",
    "word_count": 138,
    "key_facts_retained": [
      "US CHIPS Act ($52.7B) and EU (\u20ac43B) fund front-end fabs, but packaging is true bottleneck",
      "Over 92% of advanced CoWoS packaging remains concentrated in Taiwan",
      "Arizona-made 4nm/3nm dies must still travel to Taiwan for packaging, preserving geopolitical chokepoints",
      "US initiatives include $3B NAPMP funding, Intel/Amkor expansions; TSMC US packaging delayed to 2028",
      "Headwinds include 67,000 skilled labor deficit by 2030 and 4.5x higher US construction costs"
    ]
  },
  "ART-05": {
    "article_id": "ART-05",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "Geneticists recovered two-million-year-old environmental DNA (eDNA) from the Kap K\u00f8benhavn Formation in Peary Land, northern Greenland, breaking the previous ancient DNA record of 1.2 million years. Using enzymatic repair and metagenomic shotgun sequencing on 41 sediment samples, researchers reconstructed an early Pleistocene interglacial boreal ecosystem that existed when temperatures were 11\u00b0C to 19\u00b0C warmer than today. Genetic signatures revealed 102 plant genera and 9 animal species. The flora combined arctic vegetation with temperate trees like birch, poplar, and English yew (Taxus baccata), demonstrating remarkable adaptation to polar photoperiods. The fauna included reindeer, hares, geese, and unexpectedly, the extinct mastodon (Mammut), proving mastodons ranged thousands of kilometers further north than previously recognized. Marine eDNA also identified Atlantic horseshoe crabs. The findings demonstrate that species re-assort individually rather than as rigid biomes during rapid warming.",
    "word_count": 139,
    "key_facts_retained": [
      "2-million-year-old eDNA extracted in northern Greenland sets new record for ancient DNA",
      "Reconstructed ecosystem existed during climate 11\u00b0C to 19\u00b0C warmer than present",
      "Identified 102 plant genera (including temperate yew Taxus baccata) adapted to polar light regimes",
      "Discovered mastodon (Mammut) eDNA, expanding its known historical range into northern Greenland",
      "Demonstrates ecological communities re-assort dynamically rather than shifting as monolithic biomes"
    ]
  },
  "ART-06": {
    "article_id": "ART-06",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "NIST has released the first post-quantum cryptography (PQC) standards\u2014FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA)\u2014to replace classical public-key algorithms (RSA, ECC) vulnerable to Shor's algorithm on quantum computers. ML-KEM and ML-DSA rely on the hardness of lattice-based mathematics (Module-LWE), which resists both classical and quantum attacks. Migration is urgently compelled by 'Harvest Now, Decrypt Later' (HNDL) operations, where adversaries intercept encrypted sensitive communications today to decrypt once cryptanalytically relevant quantum computers arrive in 10-15 years. However, enterprise deployment faces severe friction: lattice keys and ciphertexts are much larger (e.g., ML-KEM-768 requires 1,184 bytes vs. 256 bytes for RSA-2048), causing network packet fragmentation, throughput drops, and buffer overflows. Furthermore, millions of embedded systems, HSMs, and automotive controllers contain non-upgradable hardware accelerators, necessitating costly multi-year physical replacement cycles.",
    "word_count": 133,
    "key_facts_retained": [
      "NIST finalized PQC standards: FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), FIPS 205 (SLH-DSA)",
      "Lattice-based Module-LWE protects against Shor's algorithm integer factorization threats",
      "Urgency driven by Harvest Now, Decrypt Later (HNDL) nation-state interception",
      "Technical friction: larger key sizes (1,184 bytes for ML-KEM-768 vs 256 bytes for RSA) cause fragmentation",
      "Hardware hurdles: non-upgradable HSMs and embedded systems require complete replacement"
    ]
  },
  "ART-07": {
    "article_id": "ART-07",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "An empirical study of 500 North American direct-to-consumer subscription platforms revealed that 76.4% utilize deceptive 'dark patterns'\u2014including roach motels, confirmshaming, forced continuity, hidden costs, and false urgency. The study documented acute cancellation asymmetry: while subscription signup took 48 seconds, cancellation required an average of 9.4 minutes across 4.2 confirmation screens. Behavioral experiments with 2,400 participants showed users were 3.8 times less likely to successfully cancel subscriptions with these barriers, causing an average annual consumer loss of $164 per subscriber. In response, the US FTC implemented an updated 'Click-to-Cancel' rule under Section 5, requiring cancellation mechanisms to be as simple and accessible as enrollment, backed by penalties up to $50,120 per violation plus restitution. While industry counsel argues the rule overreaches into legitimate promotional retention, researchers emphasize that clear regulatory guardrails are essential to protect consumer autonomy.",
    "word_count": 137,
    "key_facts_retained": [
      "Study of 500 subscription platforms found 76.4% employ deceptive dark patterns",
      "Cancellation asymmetry: 48 seconds to enroll vs. 9.4 minutes and 4.2 screens to cancel",
      "Manipulated users are 3.8x less likely to cancel, losing an average of $164 annually",
      "FTC Click-to-Cancel rule mandates cancellation must be as easy as enrollment",
      "Non-compliance faces civil penalties up to $50,120 per violation plus restitution"
    ]
  },
  "ART-08": {
    "article_id": "ART-08",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "Observations by the James Webb Space Telescope (JWST) have revealed an unexpected abundance of massive, bright galaxies at redshifts exceeding z = 10 (300\u2013450 million years post-Big Bang), challenging standard Lambda-CDM cosmological models. Under Lambda-CDM, hierarchical dark matter halo growth should produce very few massive galaxies so early. Deep surveys like JADES and CEERS identified dozens of luminous systems, including JADES-GS-z14-0 at z = 14.32 with stellar mass estimated at 10^8 to 10^9 solar masses. Reconciling this luminosity under standard assumptions requires near 100% baryonic conversion efficiency, defying known stellar feedback limits. Two primary explanations exist: either these galaxies are exceptionally bright rather than massive\u2014driven by top-heavy Initial Mass Functions of massive Population III stars or obscured AGN accretion\u2014or Lambda-CDM requires modification via non-Gaussian primordial fluctuations or dynamical dark energy. Ongoing NIRSpec spectroscopic surveys seek to resolve this dilemma.",
    "word_count": 142,
    "key_facts_retained": [
      "JWST discovered unexpectedly luminous galaxies at z > 10 (300-450 Myr post-Big Bang)",
      "Challengers Lambda-CDM hierarchical structure formation expectations",
      "JADES-GS-z14-0 confirmed at z = 14.32 with 10^8-10^9 solar masses, implying near 100% star formation efficiency",
      "Explanations: top-heavy IMF of Population III stars, obscured AGN accretion, or revised dark matter physics",
      "High-resolution NIRSpec spectroscopy is underway to measure metallicity and velocity dispersion"
    ]
  },
  "ART-09": {
    "article_id": "ART-09",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "Houthi drone and missile attacks on commercial ships in the Bab el-Mandeb strait prompted major shipping alliances to reroute vessels away from the Suez Canal and around the Cape of Good Hope, dropping Suez transit traffic by 67%. The African detour adds 3,500 to 4,000 nautical miles and 10 to 14 days to Shanghai-Rotterdam voyages, forcing carriers to inject 1.2 million TEUs of vessel capacity. Economically, Red Sea insurance premiums rose from 0.05% to over 1.0% of hull value, while Drewry spot freight rates surged 237%, from $1,600 to over $5,400 per 40-foot container. Environmentally, faster cruising speeds and longer routes increased fuel consumption by 35%, generating 13.5 million metric tons of extra maritime CO2 in early 2024. Multinational naval missions have intercepted aerial drones but failed to restore commercial insurance confidence, cementing rerouting into 2025.",
    "word_count": 139,
    "key_facts_retained": [
      "Bab el-Mandeb attacks forced diversion around Cape of Good Hope; Suez traffic dropped 67%",
      "Detour adds 3,500-4,000 nautical miles and 10-14 days transit between Shanghai and Rotterdam",
      "Drewry container spot rates surged 237% ($1,600 to $5,400); insurance rose from 0.05% to >1.0%",
      "Environmental impact: 35% fuel spike and 13.5 million metric tons of extra CO2 in H1 2024",
      "Naval task forces failed to restore commercial insurance confidence, entrenching rerouting"
    ]
  },
  "ART-10": {
    "article_id": "ART-10",
    "author": "Human Expert Evaluator (Gold Standard)",
    "summary": "A 14-week randomized controlled trial of 1,200 undergraduates across four universities evaluated the pedagogical effects of generative AI writing tools. Students were assigned to three cohorts: unassisted control (Cohort A), AI-augmented with GPT-4 (Cohort B), and Socratic AI tutor (Cohort C). While Cohort B achieved significantly higher marks on weekly take-home essays (88.4% vs. 81.2% for Cohort A and 84.6% for Cohort C), they suffered a 17.3% score collapse (to 71.1%) on unassisted, proctored pen-and-paper examinations evaluating synthesis and critical argumentation. In contrast, Cohort A remained stable (80.4%), and Cohort C achieved the highest retention (83.7%). Eye-tracking revealed 68% of AI-augmented students engaged in 'copy-paste-skim' behavior. Researchers conclude that passive AI cognitive offloading creates an 'illusion of competence' without internal comprehension, whereas Socratic AI interaction that demands deliberate cognitive retrieval strengthens critical thinking.",
    "word_count": 139,
    "key_facts_retained": [
      "RCT with 1,200 students across 4 universities compared unassisted, AI-augmented, and Socratic AI cohorts",
      "AI-augmented group scored higher on coursework (88.4%) but dropped 17.3% to 71.1% on proctored exams",
      "Socratic AI group achieved highest unassisted exam retention and critical reasoning (83.7%)",
      "68% of AI-augmented students engaged in copy-paste-skim behaviors without deep source reading",
      "Passive AI offloading creates 'illusion of competence'; active Socratic scaffolding preserves retrieval practice"
    ]
  }
};
const aiSummariesData = {
  "ART-01": {
    "ChatGPT": {
      "summary": "The Phase 1 PULSE-1 trial evaluated VERVE-101, an in vivo base editing treatment for heterozygous familial hypercholesterolemia (HeFH) delivering lipid nanoparticles to hepatic cells. In the trial, four cohorts tested doses up to 0.6 mg/kg. At the highest dose, patients experienced an average 84% reduction in PCSK9 protein and a 55% reduction in LDL cholesterol, which remained stable for 180 days. Intermediate dosing lowered LDL-C by 39%, while lower doses showed minimal impact. Mild infusion reactions occurred in about 36% of participants, and two patients had transient liver enzyme increases. One participant had a heart attack five weeks post-treatment, but it was attributed to underlying coronary disease. Sequencing showed no off-target edits across 124 loci. The researchers concluded that base editing is feasible for cholesterol reduction, though larger trials are needed to confirm long-term efficacy and safety.",
      "word_count": 143,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "In the Phase 1 PULSE-1 trial (n=14), investigators evaluated VERVE-101, a hepatic adenine base-editing therapy administered via lipid nanoparticles to treat heterozygous familial hypercholesterolemia. Targeting a splice donor site in PCSK9 without double-stranded breaks, the highest dose (0.6 mg/kg, n=4) yielded durable reductions of 84% in circulating PCSK9 and 55% in LDL-C over 180 days. The 0.45 mg/kg dose reduced LDL-C by 39%, whereas lower doses (<0.3 mg/kg) were clinically inactive. Safety findings included infusion-related reactions in 35.7% of patients and transient Grade 3 transaminase spikes in two patients at 0.6 mg/kg, resolving by day 14. A non-fatal myocardial infarction in the 0.45 mg/kg cohort was deemed secondary to pre-existing CAD by the DSMB. Targeted sequencing revealed zero off-target editing across 124 candidate loci. Phase 2 trials must still address germline biodistribution and cardiovascular mortality endpoints.",
      "word_count": 144,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "The PULSE-1 Phase 1 study tested VERVE-101 adenine base editing in 14 patients suffering from severe familial hypercholesterolemia. Results showed that high-dose administration (0.6 mg/kg) achieved an 84% drop in PCSK9 levels and reduced LDL-C by 55%, with effects lasting through 180 days. In comparison, 0.45 mg/kg achieved a 39% reduction. The treatment avoids double-stranded DNA breaks and detected zero off-target mutations at 124 loci. Regarding safety, five patients experienced mild infusion reactions, and two had temporary transaminase elevations. One patient experienced a heart attack, but an independent board judged it unrelated to the drug. Overall, the trial proves that permanent base editing can replace frequent injections, but further testing is required for long-term safety.",
      "word_count": 121,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Based on the provided medical trial text, the Phase 1 PULSE-1 study tested the safety and pharmacodynamics of VERVE-101 in 14 adult patients with heterozygous familial hypercholesterolemia. Key findings include: (1) At the highest dose of 0.6 mg/kg (n=4), mean blood PCSK9 protein decreased by 84% and circulating LDL-C dropped by 55% from baseline at day 28, remaining stable through 180 days. (2) Intermediate dose of 0.45 mg/kg achieved a 39% LDL-C reduction, while lower tiers (<0.3 mg/kg) showed less than 8% reduction. (3) 5 of 14 patients had infusion reactions, 2 patients experienced Grade 3 ALT/AST elevations, and one patient had a non-fatal myocardial infarction attributed to underlying atherosclerosis. (4) Zero off-target base editing was detected across 124 candidate genomic loci. Phase 2 trials must evaluate long-term off-target stability and germline biodistribution.",
      "word_count": 147,
      "prompt_type": "Source-Grounded Prompt"
    },
    "Baseline_Before": {
      "summary": "This article discusses a new CRISPR base editing trial called PULSE-1 for treating familial hypercholesterolemia. The therapy is called VERVE-101 and works by editing the PCSK9 gene in the liver using lipid nanoparticles. In the study, patients who got the highest dose saw their cholesterol drop significantly by around 55% and PCSK9 dropped by over 80%. Most side effects were mild like infusion reactions and some elevated liver enzymes, although one patient did have a serious heart attack during the trial. The researchers think this could be a promising one-time cure for high cholesterol if future studies go well.",
      "word_count": 102,
      "prompt_type": "Baseline Zero-Shot Prompt (Before)"
    }
  },
  "ART-02": {
    "ChatGPT": {
      "summary": "The European Union has officially ratified the AI Act, creating a comprehensive risk-based framework for artificial intelligence. The law categorizes AI systems into four tiers: prohibited, high-risk, transparency-risk, and minimal-risk. Under Title VIIIa, general-purpose AI (GPAI) foundation models face specific rules, with 'systemic risk' models defined as those trained with more than 10^25 FLOPs. Systemic models like GPT-4 and Claude 3 Opus must undergo red-teaming, mitigate systemic risks, report cybersecurity incidents, and track energy efficiency. Standard GPAI developers must document training data and respect EU copyright laws. Non-compliance penalties are substantial, reaching up to \u20ac35 million or 7% of worldwide turnover for prohibited systems, and \u20ac15 million or 3% for GPAI violations. Enforcement rolls out between 6 and 36 months. While praised for consumer protections, critics claim the 10^25 FLOP threshold is arbitrary and may disadvantage European startups.",
      "word_count": 144,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "The European Union has ratified the AI Act, establishing a horizontal, risk-differentiated governance framework across four tiers: unacceptable (prohibited), high risk, specific transparency risk, and minimal risk. Title VIIIa regulates General-Purpose AI (GPAI), creating heightened obligations for models presenting 'systemic risk'\u2014empirically defined by a compute threshold exceeding 10^25 FLOPs. While standard GPAI providers must maintain technical documentation and copyright summaries, systemic GPAI providers face mandatory adversarial red-teaming, systemic risk mitigation, serious cybersecurity incident reporting to the EU AI Office, and energy tracking. Administrative penalties are severe: up to \u20ac35M or 7% of global turnover for prohibited applications, and \u20ac15M or 3% for GPAI infringements. Implementation follows a graduated 6-to-36-month timeline. Critics highlight that the fixed compute threshold will quickly become obsolete and burden European capital, whereas human rights organizations commend its enforceable protections.",
      "word_count": 139,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "The EU AI Act introduces the first comprehensive regulations for artificial intelligence, classifying systems by risk into prohibited, high-risk, transparency, and minimal risk categories. It places new obligations on General-Purpose AI (GPAI), designating systems trained on over 10^25 FLOPs as presenting 'systemic risk.' These developers must conduct red-teaming, prevent major safety threats, report cyber incidents to the European AI Office, and disclose energy metrics. Standard models must respect EU copyright. Fines are exceptionally high, reaching \u20ac35 million or 7% of global revenue for banned practices, and \u20ac15 million or 3% for general AI violations. The rules phase in over 6 to 36 months, though industry voices worry the regulations could hurt European startups and tech competitiveness.",
      "word_count": 121,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "According to the analysis of the European Union AI Act: The regulation establishes a four-tier risk taxonomy: unacceptable risk (prohibited), high risk, specific transparency risk, and minimal risk. Title VIIIa outlines rules for General-Purpose AI (GPAI), creating a distinct tier for models with 'systemic risk' whose training compute exceeds 10^25 FLOPs. Systemic GPAI developers must conduct adversarial red-teaming, mitigate systemic risks (such as CBRN weapons and cyber threats), report serious incidents to the European AI Office, and record energy metrics. Baseline GPAI models must provide technical documentation and copyright summaries. Penalties are capped at \u20ac35 million or 7% of global turnover for prohibited practices, and \u20ac15 million or 3% for GPAI violations. Enforcement begins with bans after 6 months, GPAI rules at 12 months, and high-risk compliance at 24\u201336 months.",
      "word_count": 137,
      "prompt_type": "Source-Grounded Prompt"
    },
    "Baseline_Before": {
      "summary": "The European Union has passed the AI Act to regulate artificial intelligence using a risk-based system. Some AI uses are completely banned, while others like high-risk systems face strict rules. Big AI models like GPT-4 fall under systemic risk if they use more than 10^25 FLOPs of computing power. Companies making these models have to test their systems, follow copyright rules, and report cyber issues. If companies break the law, they can face huge fines up to 35 million euros or 7% of their turnover. Some critics worry that this will hurt European tech startups compared to US companies.",
      "word_count": 98,
      "prompt_type": "Baseline Zero-Shot Prompt (Before)"
    }
  },
  "ART-03": {
    "ChatGPT": {
      "summary": "Researchers at the Tokyo Energy Materials Institute developed a solid-state sodium-ion battery designed to replace lithium, cobalt, and nickel. The battery utilizes a densified NASICON ceramic solid electrolyte (Na3.2Zr1.9Ca0.1Si2PO12) paired with a Prussian blue analogue cathode, a sodium metal anode, and a 15-nm titanium dioxide protective layer. The ceramic provides an ionic conductivity of 3.8 \u00d7 10^-3 S/cm and prevents sodium dendrite growth. In tests, the prototype achieved 220 Wh/kg and maintained 88.4% capacity after 1,500 cycles at 1C. Thermal tests demonstrated stability without runaway up to 310\u00b0C, and the battery safely discharges to zero volts. Cathode material costs are 62% lower than NMC-811 ($24/kWh vs. $63/kWh). However, commercial scaling remains challenged by the high 1,150\u00b0C sintering temperature required, which causes micro-cracking during manufacturing.",
      "word_count": 132,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "Addressing mineral supply chokepoints for lithium and cobalt, researchers in Tokyo engineered a solid-state sodium-ion battery achieving 220 Wh/kg\u2014exceeding commercial LFP cells. The architecture combines a NASICON solid electrolyte (Na3.2Zr1.9Ca0.1Si2PO12), a Prussian blue analogue cathode, a sodium metal anode, and a 15-nm TiO2 interfacial buffer layer that suppresses dendrite nucleation. The ceramic exhibits room-temperature ionic conductivity of 3.8 \u00d7 10^-3 S/cm and retained 88.4% capacity over 1,500 1C cycles. Thermal testing confirmed no runaway up to 310\u00b0C (compared to 160\u00b0C in liquid lithium cells). Eliminating scarce metals cuts cathode costs by 62% ($24/kWh vs. $63/kWh for NMC-811), and cells safely discharge to zero volts on aluminum collectors. Scalability hurdles include high-temperature sintering at 1,150\u00b0C prone to roll-to-roll micro-cracking, spurring research into low-temperature flash sintering.",
      "word_count": 135,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "Tokyo Energy Materials Institute researchers have demonstrated a solid-state sodium-ion battery that eliminates reliance on lithium, nickel, and cobalt. Using a NASICON ceramic electrolyte and Prussian blue cathode with a 15-nanometer TiO2 protective layer, the battery delivers an energy density of 220 Wh/kg, surpassing traditional LFP batteries. It retained over 88% capacity after 1,500 cycles and demonstrated extreme thermal safety up to 310\u00b0C. Cathode raw materials are estimated to be 62% cheaper than NMC-811, and the battery allows safe zero-volt shipping. The main obstacle to commercialization is the 1,150\u00b0C sintering temperature needed for the ceramic, which causes cracking issues during roll-to-roll production.",
      "word_count": 105,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Researchers engineered a solid-state sodium-ion battery utilizing Earth-abundant sodium to bypass lithium and cobalt supply constraints. Key specifications and outcomes: (1) Core Materials: Densified NASICON ceramic electrolyte (Na3.2Zr1.9Ca0.1Si2PO12), Prussian blue analogue cathode, sodium-metal anode, and 15-nm TiO2 buffer layer. (2) Performance: High ionic conductivity (3.8 \u00d7 10^-3 S/cm), 220 Wh/kg energy density, and 88.4% capacity retention after 1,500 cycles at 1C. (3) Safety & Economics: No thermal runaway up to 310\u00b0C (vs. 160\u00b0C for liquid lithium), 62% cathode material cost savings ($24/kWh vs. $63/kWh for NMC-811), and safe zero-volt discharge. (4) Scalability Bottleneck: High-temperature sintering at 1,150\u00b0C induces micro-cracking, requiring development of flash-sintering techniques for 2026 pilot lines.",
      "word_count": 126,
      "prompt_type": "Source-Grounded Prompt"
    },
    "Baseline_Before": {
      "summary": "This article explains how solid-state sodium batteries can replace lithium-ion batteries. Researchers developed a battery using sodium instead of expensive lithium and cobalt. It uses a ceramic electrolyte and has an energy density of 220 Wh/kg, which is higher than regular LFP batteries. It can also last for 1,500 cycles and doesn't catch fire even at high temperatures up to 300 degrees. Making the battery is much cheaper, but the ceramic part has to be heated to 1,150 degrees which causes cracks, so scientists are still trying to solve this manufacturing problem before it can be used in electric cars.",
      "word_count": 100,
      "prompt_type": "Baseline Zero-Shot Prompt (Before)"
    }
  },
  "ART-04": {
    "ChatGPT": {
      "summary": "Western nations have invested over $100 billion via the US and EU CHIPS Acts to onshore semiconductor fabrication, but industry analysts emphasize that back-end advanced packaging\u2014not front-end lithography\u2014is the real AI chip bottleneck. Flagship accelerators like Nvidia's H100 and AMD's MI300X require 2.5D/3D chiplet integration and HBM3e memory linked via TSMC's proprietary CoWoS packaging. More than 92% of this capacity is concentrated in Taiwan. Consequently, even when US fabs produce 4nm/3nm wafers in Arizona, they must still be shipped back to Taiwan for packaging, leaving Taiwan Strait geopolitical vulnerabilities intact. The US has allocated $3 billion for packaging initiatives, and Intel is expanding domestic capacity, but TSMC's Arizona packaging unit will not be operational until 2028. Adding to delays are a projected shortage of 67,000 skilled workers by 2030 and US construction costs 4.5 times higher than Taiwan's.",
      "word_count": 145,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "Despite $100 billion committed under the US ($52.7B) and EU (\u20ac43B) CHIPS Acts, advanced heterogeneous packaging remains the unresolved choke-point of semiconductor supply chains. Modern AI accelerators (Nvidia H100/B200, AMD MI300X) require multi-die integration and HBM via TSMC's proprietary CoWoS technology. Crucially, over 92% of global CoWoS packaging remains physically concentrated in Taiwan. Thus, 4nm/3nm silicon wafers fabricated at TSMC's Arizona fab must still be shipped across the Pacific for packaging, leaving geopolitical supply chain vulnerabilities untouched. While the US Department of Commerce allocated $3 billion toward advanced packaging and Intel expanded domestic facilities, TSMC's US packaging facility will not open until 2028. Compounding these structural hurdles are a projected 67,000-worker technical deficit by 2030 and domestic fab construction costs 4.5 times higher than in Taiwan.",
      "word_count": 133,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "The US and EU CHIPS Acts have provided billions to build semiconductor fabs in the West, but advanced packaging remains a severe bottleneck for AI chips. High-end processors from Nvidia and AMD rely on 2.5D and 3D packaging technologies like TSMC's CoWoS, of which 92% is based in Taiwan. Because of this, chips manufactured at new US plants in Arizona must still be shipped to Taiwan for packaging, maintaining geopolitical vulnerability. Although the US has allocated $3 billion for domestic packaging programs and companies like Intel and Amkor are expanding, TSMC's US packaging will not be ready until 2028. The industry also faces high domestic building costs and a deficit of 67,000 engineers by 2030.",
      "word_count": 119,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Subsidies totaling over $100B under the US ($52.7B) and EU (\u20ac43B) CHIPS Acts have funded front-end fabrication, but back-end advanced packaging is the true bottleneck for generative AI hardware. Core findings: (1) Architecture: Flagship AI accelerators (Nvidia H100/B200, AMD MI300X) depend on 2.5D/3D heterogeneous packaging and HBM via TSMC's CoWoS. (2) Geographic Chokepoint: Over 92% of CoWoS capacity resides in Taiwan. Silicon wafers made at TSMC Arizona must still be air-freighted to Taiwan for packaging, leaving Taiwan Strait risk unresolved. (3) Mitigation & Delays: US NAPMP allocated $3B; Intel and Amkor are expanding, but TSMC's Arizona packaging phase is delayed to 2028. (4) Labor & Cost Deficits: The US faces an acute shortage of 67,000 microelectronics professionals by 2030 and fab construction costs 4.5x higher than Taiwan.",
      "word_count": 142,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-05": {
    "ChatGPT": {
      "summary": "Geneticists have successfully sequenced two-million-year-old environmental DNA (eDNA) from Peary Land in northern Greenland, establishing a new record for ancient DNA recovery and surpassing the previous 1.2-million-year mark. During this early Pleistocene period, northern Greenland was 11\u00b0C to 19\u00b0C warmer than today. Metagenomic analysis of 41 sediment samples revealed 102 plant genera and 9 animal species. The flora featured boreal species like poplar and birch alongside temperate species such as English yew (Taxus baccata), demonstrating how plants adapted to months of continuous polar light. Remarkably, the animal DNA included the extinct mastodon (Mammut), proving these creatures migrated much further north than previously documented. Marine eDNA also identified Atlantic horseshoe crabs. The findings indicate that biological species respond individually to climate warming rather than shifting as rigid, monolithic biomes.",
      "word_count": 133,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "Recovered from Kap K\u00f8benhavn sediment in northern Greenland, two-million-year-old environmental DNA (eDNA) has shattered the previous ancient DNA record of 1.2 million years. Shotgun sequencing across 41 sediment samples reconstructed an early Pleistocene ecosystem dating to an epoch when temperatures were 11\u00b0C\u201319\u00b0C warmer than today. The data identified 102 plant genera and 9 animal species. Botanically, open boreal forests featured poplar, birch, and unexpectedly, the temperate English yew (Taxus baccata), indicating that tree taxa tolerated high-latitude polar photoperiods under elevated temperatures. Faunal eDNA confirmed reindeer, hares, geese, and the extinct mastodon (Mammut)\u2014extending the known geographic range of mastodons into northern Greenland by thousands of kilometers. Marine layers revealed Atlantic horseshoe crabs. Crucially, the discovery reveals that ecosystems do not migrate as static biomes during rapid warming, but dynamically re-assort based on individual species thresholds.",
      "word_count": 139,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "Scientists have extracted two-million-year-old environmental DNA from northern Greenland's Kap K\u00f8benhavn Formation, setting an ancient DNA record. The genetic material revealed that northern Greenland was 11\u00b0C to 19\u00b0C warmer during an interglacial period, supporting a lush forest ecosystem. Researchers identified over 100 plant genera and 9 animal species, including birch, poplar, and temperate yew trees. Crucially, eDNA proved the presence of extinct mastodons, vastly expanding their known habitat into the Arctic. Marine DNA also detected horseshoe crabs 1,500 km north of their modern range. The study demonstrates that species adapt individually rather than shifting as complete biomes during climate change.",
      "word_count": 105,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Geneticists recovered two-million-year-old environmental DNA (eDNA) from the Kap K\u00f8benhavn Formation in Peary Land, northern Greenland, breaking the prior 1.2-million-year record from a Siberian mammoth tooth. Key findings include: (1) Climate: Northern Greenland was 11\u00b0C to 19\u00b0C warmer than today during an early Pleistocene interglacial epoch. (2) Ecosystem: Metagenomic analysis of 41 clay and quartz samples identified 102 plant genera and 9 animal species. (3) Flora & Fauna: Flora included poplar, birch, and temperate English yew (Taxus baccata) adapted to polar light cycles. Fauna included reindeer, lemmings, geese, and extinct mastodons (Mammut), expanding the mastodon's known range into northern Greenland. (4) Marine & Evolution: Marine eDNA identified Atlantic horseshoe crabs; findings show ecological communities re-assort dynamically rather than moving as monolithic biomes.",
      "word_count": 133,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-06": {
    "ChatGPT": {
      "summary": "NIST has released the first post-quantum cryptography standards\u2014FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA)\u2014to defend digital communications against Shor's algorithm on future quantum computers. Unlike RSA and ECC, which rely on integer factorization and discrete logarithms, these new algorithms are based on lattice mathematics (Module-LWE), which is resistant to both classical and quantum attacks. The urgency to transition is driven by 'Harvest Now, Decrypt Later' (HNDL) attacks, where adversaries steal encrypted data today to decrypt in 10-15 years when quantum hardware matures. However, enterprise migration is hindered by larger key sizes (e.g., 1,184 bytes for ML-KEM-768 vs. 256 bytes for RSA-2048), causing packet fragmentation and IoT buffer overflows. Additionally, millions of legacy hardware security modules and embedded devices have fixed crypto accelerators requiring costly physical replacement.",
      "word_count": 136,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "NIST has released the first standardized post-quantum cryptography (PQC) algorithms\u2014FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA)\u2014marking the transition away from RSA and ECC algorithms vulnerable to Shor's algorithm. Grounded in lattice-based Module-LWE problems, these standards resist both quantum and classical cryptanalysis. The transition is accelerated by 'Harvest Now, Decrypt Later' (HNDL) threats, where adversaries intercept long-life sensitive data today for future quantum decryption. Enterprise adoption faces significant technical obstacles: lattice keys are substantially larger (ML-KEM-768 uses 1,184 bytes compared to 256 bytes for RSA-2048), prompting IP packet fragmentation, lower network throughput, and IoT buffer overflows. Furthermore, millions of legacy hardware security modules (HSMs) and embedded automotive controllers contain fixed firmware, demanding expensive decade-long hardware replacement cycles.",
      "word_count": 128,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "NIST has officially published post-quantum cryptography standards (FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA) to replace RSA and ECC before quantum computers can break them using Shor's algorithm. Built on multidimensional lattice mathematics, these algorithms prevent adversaries from executing 'Harvest Now, Decrypt Later' attacks on intercepted data. However, the migration poses real challenges: lattice keys are significantly larger than RSA keys (over 1,000 bytes for ML-KEM vs 256 bytes for RSA), which can cause network packet fragmentation and slowdowns. Moreover, older hardware security modules and IoT devices cannot be updated via software and will need full hardware replacement.",
      "word_count": 105,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: NIST finalized the first official Post-Quantum Cryptography standards to replace vulnerable public-key systems (RSA, ECC). (1) Standards: FIPS 203 (ML-KEM/Kyber), FIPS 204 (ML-DSA/Dilithium), and FIPS 205 (SLH-DSA/SPHINCS+), anchored in Module-LWE lattice mathematics that resists Shor's algorithm. (2) Driving Threat: 'Harvest Now, Decrypt Later' (HNDL), where nation-states store encrypted intelligence and blueprints today to decrypt with future quantum computers in 10\u201315 years. (3) Technical Friction: Lattice keys are significantly larger (ML-KEM-768 requires 1,184 bytes vs 256 bytes for RSA-2048), causing IP packet fragmentation, reduced network throughput, and memory overflow in IoT devices. (4) Hardware Obstacles: Embedded systems, HSMs, and automotive controllers lack upgradable firmware, requiring decade-long physical replacement cycles.",
      "word_count": 122,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-07": {
    "ChatGPT": {
      "summary": "An empirical study of 500 direct-to-consumer subscription platforms in North America discovered that 76.4% employ deceptive dark patterns, including roach motels, confirmshaming, forced continuity, hidden fees, and fake urgency timers. The study highlighted severe cancellation friction: while signup averaged 48 seconds, cancellation required an average of 9.4 minutes across 4.2 confirmation screens. Behavioral experiments with 2,400 participants showed that users exposed to these deceptive architectures were 3.8 times less likely to cancel unwanted subscriptions, suffering an average annual loss of $164. In response, the US Federal Trade Commission enacted an updated 'Click-to-Cancel' rule under Section 5, requiring cancellation to be as simple as enrollment, without mandatory phone queues or retention surveys. Violations carry civil penalties up to $50,120 per violation plus restitution. While industry groups object, researchers emphasize that clear enforcement is necessary to preserve consumer autonomy.",
      "word_count": 141,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "An empirical audit of 500 North American subscription e-commerce platforms revealed that 76.4% utilize deceptive 'dark patterns'\u2014including roach motels, confirmshaming, forced continuity, and hidden fees. The investigation documented sharp interface asymmetry: whereas onboarding averaged 48 seconds, cancellation required 9.4 minutes and 4.2 confirmation screens. In controlled trials with 2,400 consumers, participants facing forced continuity were 3.8 times less likely to terminate unwanted subscriptions, incurring an average annual welfare loss of $164 per user. To curb this manipulation, the FTC updated its 'Click-to-Cancel' rule under Section 5, mandating that cancellation mechanisms match enrollment simplicity and banning mandatory retention loops. Non-compliance carries statutory penalties up to $50,120 per violation alongside mandatory restitution. While corporate counsel argues the regulation restricts valid marketing, empirical evidence underscores that algorithmic guardrails are vital to safeguard consumer sovereignty.",
      "word_count": 137,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "A study of 500 subscription platforms found that over 76% use deceptive dark patterns like hidden charges, forced continuity, and 'roach motels' that make leaving difficult. Researchers found it took 48 seconds to sign up but an average of 9.4 minutes and 4 screens to cancel. This friction caused manipulated consumers to lose an average of $164 per year. In response, the FTC enacted its 'Click-to-Cancel' rule, mandating that canceling a subscription must be as quick and easy as signing up, with fines reaching up to $50,120 per violation. Businesses argue this hurts customer retention, but regulators insist it protects consumer rights.",
      "word_count": 105,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Study investigating dark patterns across 500 subscription platforms and regulatory responses. Key findings: (1) Prevalence: 76.4% of platforms used deceptive patterns (e.g., Roach Motel, Confirmshaming, Forced Continuity, Hidden Costs, False Urgency). (2) Asymmetric Friction: Average enrollment took 48 seconds, while cancellation took 9.4 minutes navigating 4.2 confirmation screens. (3) Consumer Harm: In trials with 2,400 users, dark patterns made cancellation 3.8 times less likely, costing consumers an average of $164 annually. (4) Regulatory Crackdown: The FTC issued an updated 'Click-to-Cancel' rule under Section 5 requiring cancellation to be as direct as enrollment, with civil penalties up to $50,120 per violation and mandatory restitution.",
      "word_count": 113,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-08": {
    "ChatGPT": {
      "summary": "The James Webb Space Telescope (JWST) has observed an unexpected abundance of bright, massive galaxies at redshifts exceeding z = 10 (300 to 450 million years after the Big Bang), challenging the standard Lambda-CDM cosmological model. Under Lambda-CDM, structure forms hierarchically, meaning massive galaxies should not exist so early. Surveys such as JADES and CEERS have found dozens of candidates, including JADES-GS-z14-0 at z = 14.32 with an estimated stellar mass of 10^8 to 10^9 solar masses. If standard mass-to-light ratios hold, this implies nearly 100% of primordial gas was converted into stars, contradicting known supernova and wind feedback mechanisms. To explain this, astronomers suggest either these galaxies contain massive Population III stars with a top-heavy Initial Mass Function or obscured AGN, or Lambda-CDM cosmological parameters require revision. High-resolution NIRSpec spectroscopy is underway to resolve the question.",
      "word_count": 145,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "JWST observations of luminous, massive galaxies at redshifts z > 10 (300\u2013450 million years post-Big Bang) have sparked the 'impossible early galaxy' dilemma, challenging hierarchical structure formation under standard Lambda-CDM cosmology. Deep surveys (JADES, CEERS) identified candidates such as JADES-GS-z14-0 (spectroscopically confirmed at z = 14.32) exhibiting estimated stellar masses of 10^8\u201310^9 solar masses. Explaining this luminosity under standard mass-to-light assumptions requires near 100% baryonic conversion efficiency, defying known stellar feedback physics. Cosmologists are divided: one group proposes astrophysical explanations, such as top-heavy Initial Mass Functions dominated by metal-free Population III stars or obscured supermassive black hole accretion; the second group posits cosmological revisions, including non-Gaussian primordial density fluctuations or dynamical dark energy accelerating early halo collapse. Ongoing NIRSpec spectroscopic follow-ups aim to resolve this tension.",
      "word_count": 133,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "Data from the James Webb Space Telescope has uncovered bright, massive galaxies existing just 300 to 450 million years after the Big Bang (z > 10), contradicting predictions from the standard Lambda-CDM cosmological model. For example, JADES-GS-z14-0 at z = 14.32 exhibits stellar masses up to 10^9 solar masses, implying an impossibly high star formation efficiency near 100%. Scientists are debating two explanations: either the galaxies are unusually bright due to massive Population III stars or hidden black holes, or cosmological models of early dark matter halo formation must be revised. High-resolution spectroscopy is currently analyzing these distant galaxies to uncover the answer.",
      "word_count": 108,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: JWST observations of high-redshift galaxies and cosmological implications. (1) Empirical Anomaly: JWST NIRCam/NIRSpec observations discovered numerous bright galaxies at z > 10 (300\u2013450 Myr post-Big Bang), including JADES-GS-z14-0 confirmed at z = 14.32 with stellar mass of 10^8\u201310^9 solar masses. (2) Cosmological Conflict: Standard Lambda-CDM assumes hierarchical halo growth; explaining observed luminosity with normal mass-to-light ratios requires near 100% gas conversion efficiency, defying known feedback limits. (3) Proposed Solutions: Astrophysical hypothesis: top-heavy Initial Mass Function of massive Population III stars or obscured AGN accretion mimicking higher mass. Cosmological hypothesis: non-Gaussian fluctuations or dynamical dark energy accelerating dark matter halo collapse. (4) Current Work: High-resolution NIRSpec spectroscopy measuring metallicity and velocity dispersion to test theories.",
      "word_count": 130,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-09": {
    "ChatGPT": {
      "summary": "Attacks by Houthi forces on commercial vessels in the Bab el-Mandeb strait have caused a 67% plunge in Suez Canal traffic, forcing shipping alliances to detour around the Cape of Good Hope. The rerouting adds 3,500 to 4,000 nautical miles and 10 to 14 days to Shanghai-Rotterdam voyages, prompting carriers to absorb 1.2 million TEUs of surplus capacity to keep schedules regular. Maritime insurance costs soared from 0.05% to over 1.0% of vessel value, while the Drewry spot rate for 40-foot containers escalated 237%, from $1,600 to over $5,400. In addition, faster steaming and longer journeys boosted fuel consumption by 35%, generating an estimated 13.5 million metric tons of excess maritime CO2 in early 2024. Despite Western naval operations, commercial confidence remains low, making the African detour the shipping standard through 2025.",
      "word_count": 139,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "Houthi drone and missile strikes in the Bab el-Mandeb chokepoint precipitated a 67% collapse in Suez Canal transit, compelling global container carriers to divert around Africa's Cape of Good Hope. For Shanghai-to-Rotterdam routes, this detour adds 3,500\u20134,000 nautical miles and 10\u201314 days, requiring the injection of 1.2 million TEUs in container capacity to maintain weekly liner strings. The economic fallout was swift: Red Sea war-risk insurance rose from 0.05% to over 1.0% of hull value, while Drewry spot freight rates jumped 237% from $1,600 to $5,400 per FEU. Environmental consequences include a 35% fuel consumption increase and 13.5 million metric tons of extra maritime CO2 emissions in H1 2024. Multinational naval escorts (Operation Prosperity Guardian) have failed to restore insurer confidence, establishing Cape diversions as the default baseline into 2025.",
      "word_count": 139,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "Houthi attacks in the Red Sea's Bab el-Mandeb strait have forced 67% of ship traffic away from the Suez Canal and around the Cape of Good Hope. This detour extends Asia-Europe voyages by 10 to 14 days (up to 4,000 nautical miles) and forced shipping lines to deploy 1.2 million TEU in extra ship capacity. Consequently, spot freight rates from Shanghai to Rotterdam jumped by 237% to over $5,400, and insurance premiums increased tenfold. The crisis also increased fuel burn by 35%, releasing an extra 13.5 million tons of carbon emissions. Naval patrols have not restored commercial confidence, leaving rerouted shipping intact into 2025.",
      "word_count": 109,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Analysis of the Red Sea shipping crisis and geoeconomic ramifications. (1) Chokepoint Disruption: Houthi strikes in Bab el-Mandeb reduced Suez Canal transits by 67% (from 72 to <24 ships/day), diverting vessels around the Cape of Good Hope. (2) Logistics Impact: Adds 3,500\u20134,000 nautical miles and 10\u201314 transit days on Shanghai-Rotterdam lanes; absorbed 1.2 million TEUs of carrier capacity. (3) Financial Inflation: War-risk insurance climbed from 0.05% to >1.0% of vessel value; Drewry spot rates spiked 237% ($1,600 to $5,400+ per 40-ft container). (4) Carbon Footprint: Faster steaming and longer distances increased fuel use by 35% and added 13.5M metric tons of CO2 in H1 2024. Naval task forces have failed to restore insurance confidence.",
      "word_count": 130,
      "prompt_type": "Source-Grounded Prompt"
    }
  },
  "ART-10": {
    "ChatGPT": {
      "summary": "A 1,200-student randomized controlled trial across four US universities examined the cognitive impact of generative AI in undergraduate education. Students were split into three groups: unassisted control (Cohort A), AI-augmented with GPT-4 (Cohort B), and Socratic AI tutoring (Cohort C). Cohort B students scored higher on weekly coursework (88.4% vs. 81.2% for control), producing more polished essays. However, on unassisted, proctored pen-and-paper exams evaluating analytical synthesis and counterarguments, Cohort B suffered a 17.3% performance drop to 71.1%. In contrast, Cohort A remained stable at 80.4%, while Cohort C achieved the highest retention at 83.7%. Eye-tracking data revealed 68% of Cohort B students engaged in 'copy-paste-skim' behavior. The researchers concluded that passive cognitive offloading fosters an 'illusion of competence,' while Socratic AI scaffolding supports active retrieval and deep critical thinking.",
      "word_count": 137,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Claude": {
      "summary": "In a 14-week randomized controlled trial involving 1,200 undergraduates across four universities, researchers assessed the cognitive effects of generative AI on academic synthesis and critical thinking. Participants were divided into unassisted control (Cohort A), AI-augmented with GPT-4 (Cohort B), and Socratic AI tutoring (Cohort C). While Cohort B achieved superior weekly assignment grades (88.4% vs. 81.2% for Cohort A and 84.6% for Cohort C), they suffered a 17.3% performance collapse (down to 71.1%) on unassisted proctored examinations. Conversely, Cohort A maintained consistent scores (80.4%), and Cohort C led in retention (83.7%). Observational data revealed 68% of Cohort B students practiced 'copy-paste-skim' habits without reading underlying citations. The authors conclude that passive cognitive offloading generates an 'illusion of competence,' whereas Socratic interactive scaffolding preserves essential retrieval practice.",
      "word_count": 135,
      "prompt_type": "Engineered (Chain-of-Density)"
    },
    "Gemini": {
      "summary": "A 1,200-student study across four universities tested the effects of generative AI on college learning across three groups: no AI (Cohort A), open GPT-4 use (Cohort B), and Socratic AI tutoring (Cohort C). The GPT-4 group earned higher grades on weekly essays (88.4%) but plummeted by 17.3% to 71.1% on closed-book, pen-and-paper exams. Meanwhile, the unassisted group stayed stable at 80.4%, and the Socratic group achieved the top exam average at 83.7%. Screen tracking showed 68% of AI-augmented students simply copied and skimmed texts. The study warns that passive AI assistance creates an illusion of competence, whereas guided Socratic AI strengthens critical thinking.",
      "word_count": 109,
      "prompt_type": "Engineered (Structured)"
    },
    "NotebookLM": {
      "summary": "Source summary: Randomized controlled trial of 1,200 undergraduate students investigating generative AI's impact on critical thinking and retention. (1) Methodology: Three cohorts over 14 weeks: Cohort A (Unassisted control), Cohort B (AI-augmented with GPT-4), Cohort C (Socratic AI tutor). (2) Weekly Coursework: Cohort B scored highest (88.4% vs 81.2% for Cohort A and 84.6% for Cohort C) with superior syntactic polish. (3) Proctored Exam Collapse: On unassisted pen-and-paper exams, Cohort B dropped 17.3% to 71.1%. Cohort A scored 80.4%, while Cohort C scored 83.7%. (4) Mechanism: 68% of Cohort B students engaged in copy-paste-skim habits. Passive cognitive offloading created an 'illusion of competence,' whereas Socratic AI preserved retrieval practice and metacognition.",
      "word_count": 126,
      "prompt_type": "Source-Grounded Prompt"
    }
  }
};
const manualScoresData = [
  {
    "article_id": "ART-01",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.6,
    "conciseness": 4.7,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Highly fluent; captured all 4 dose tiers and 180-day follow-up. Accurately noted unrelated MI."
  },
  {
    "article_id": "ART-01",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.9,
    "conciseness": 4.8,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Gold-standard quality. Captured exact sample sizes (n=14, n=4), DSMB adjudication, and germline caveat."
  },
  {
    "article_id": "ART-01",
    "model": "Gemini",
    "faithfulness": 4.7,
    "coverage": 4.2,
    "conciseness": 4.6,
    "coherence": 4.7,
    "attribution": 4.5,
    "notes": "Good summary but omitted the 0.1 and 0.3 mg/kg dose tiers and germline biodistribution caveat."
  },
  {
    "article_id": "ART-01",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.4,
    "coherence": 4.5,
    "attribution": 4.9,
    "notes": "Direct source-grounded layout; structured bullet style. Very faithful to exact confidence numbers."
  },
  {
    "article_id": "ART-01",
    "model": "Baseline_Before",
    "faithfulness": 4.2,
    "coverage": 3.4,
    "conciseness": 3.8,
    "coherence": 4.2,
    "attribution": 3.8,
    "notes": "Vague on numbers ('over 80%', 'drop significantly'); omitted dose cohorts and off-target 124 loci check."
  },
  {
    "article_id": "ART-02",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.6,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Thorough coverage of FLOP threshold (10^25), fine percentages (7% and 3%), and phased timeline."
  },
  {
    "article_id": "ART-02",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.9,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Precise legal terminology (Title VIIIa, graduated schedule, systemic threat taxonomy). Flawless."
  },
  {
    "article_id": "ART-02",
    "model": "Gemini",
    "faithfulness": 4.7,
    "coverage": 4.3,
    "conciseness": 4.7,
    "coherence": 4.6,
    "attribution": 4.6,
    "notes": "Concise; omitted the misleading information fine tier (\u20ac7.5M/1.5%) and copyright summary nuances."
  },
  {
    "article_id": "ART-02",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Clean legal summary. Retained exact statutory fine figures and graduated timeline breakdown."
  },
  {
    "article_id": "ART-02",
    "model": "Baseline_Before",
    "faithfulness": 4.3,
    "coverage": 3.5,
    "conciseness": 3.9,
    "coherence": 4.3,
    "attribution": 3.9,
    "notes": "Missed standard GPAI obligations, 3% fine tier, and graduated 6-36 month enforcement schedule."
  },
  {
    "article_id": "ART-03",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.8,
    "attribution": 4.8,
    "notes": "Accurate NASICON formula, 220 Wh/kg, 1,500 cycles, 310\u00b0C ARC test, and 1,150\u00b0C sintering caveat."
  },
  {
    "article_id": "ART-03",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.9,
    "conciseness": 4.9,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Exceptionally detailed materials science summary. Retained all chemical formulas and ionic conductivity."
  },
  {
    "article_id": "ART-03",
    "model": "Gemini",
    "faithfulness": 4.7,
    "coverage": 4.3,
    "conciseness": 4.8,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "High clarity; omitted exact NASICON chemical formula and specific ionic conductivity value."
  },
  {
    "article_id": "ART-03",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Extremely well-grounded; structured into materials, performance, safety, and bottlenecks."
  },
  {
    "article_id": "ART-03",
    "model": "Baseline_Before",
    "faithfulness": 4.4,
    "coverage": 3.6,
    "conciseness": 3.7,
    "coherence": 4.1,
    "attribution": 3.7,
    "notes": "Lacks chemical specifics (NASICON, Prussian blue, TiO2); rounded temperatures loosely."
  },
  {
    "article_id": "ART-04",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.8,
    "attribution": 4.8,
    "notes": "Strong explanation of front-end vs packaging chokepoint. Captured 92% concentration and 2028 delay."
  },
  {
    "article_id": "ART-04",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.9,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Superb geopolitical and technical synthesis. Retained HBM3e, CoWoS, 67k labor shortage, and 4.5x cost."
  },
  {
    "article_id": "ART-04",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.3,
    "conciseness": 4.8,
    "coherence": 4.6,
    "attribution": 4.5,
    "notes": "Clear flow; condensed NAPMP details and omitted the EU CHIPS Act funding comparison (\u20ac43B)."
  },
  {
    "article_id": "ART-04",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.6,
    "coherence": 4.6,
    "attribution": 4.8,
    "notes": "Structured fact extraction. Emphasized trans-Pacific round-trip shipment vulnerability clearly."
  },
  {
    "article_id": "ART-05",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.6,
    "conciseness": 4.7,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Clear timeline and biological surprise. Included Taxus baccata and mastodon range expansion."
  },
  {
    "article_id": "ART-05",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.9,
    "conciseness": 4.8,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Deep ecological synthesis. Accurately highlighted individual species re-assortment concept."
  },
  {
    "article_id": "ART-05",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.3,
    "conciseness": 4.7,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "Succinct and accurate; omitted sample count (41) and specific shotgun metagenomic protocol details."
  },
  {
    "article_id": "ART-05",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Meticulous grounding. Accurately noted comparison to previous 1.2M Siberian mammoth tooth record."
  },
  {
    "article_id": "ART-06",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.6,
    "conciseness": 4.7,
    "coherence": 4.8,
    "attribution": 4.8,
    "notes": "Explains Shor's algorithm, HNDL threat, FIPS standards, and key size expansion (1,184 vs 256 bytes)."
  },
  {
    "article_id": "ART-06",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.9,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Superior cryptographic taxonomy (Module-LWE, packet fragmentation, HSM hardware barriers)."
  },
  {
    "article_id": "ART-06",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.2,
    "conciseness": 4.8,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "Good overview; omitted the fourth upcoming standard FIPS 206 (FN-DSA) and discrete log context."
  },
  {
    "article_id": "ART-06",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.8,
    "notes": "Accurately extracted the four FIPS standards and specific key sizes without hallucination."
  },
  {
    "article_id": "ART-07",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Captures 76.4% prevalence, 48s vs 9.4min asymmetry, $164 loss, and FTC $50,120 civil penalty."
  },
  {
    "article_id": "ART-07",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.8,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Rigorous behavioral economics summary; captured Section 5 FTC Act and 3.8x cancellation reluctance."
  },
  {
    "article_id": "ART-07",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.3,
    "conciseness": 4.7,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "Impactful; omitted the 2,400 participant sample size and the specific 3.8x behavioral metric."
  },
  {
    "article_id": "ART-07",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Direct structured summary of empirical metrics, consumer loss, and FTC enforcement mechanisms."
  },
  {
    "article_id": "ART-08",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.8,
    "attribution": 4.8,
    "notes": "Explains high-redshift anomaly, JADES-GS-z14-0, Population III top-heavy IMF, and Lambda-CDM tension."
  },
  {
    "article_id": "ART-08",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.9,
    "conciseness": 4.9,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Masterful cosmological explanation. Accurately balanced astrophysics vs cosmological hypotheses."
  },
  {
    "article_id": "ART-08",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.2,
    "conciseness": 4.7,
    "coherence": 4.6,
    "attribution": 4.6,
    "notes": "Clear dilemma framing; omitted specific NIRCam/NIRSpec instrument mentions and CEERS survey name."
  },
  {
    "article_id": "ART-08",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Clean conceptual split between empirical anomaly, conflict, solutions, and ongoing spectroscopy."
  },
  {
    "article_id": "ART-09",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Covers 67% Suez drop, 10-14 days extra, 237% spot rate surge, 35% fuel spike, and 13.5M ton CO2."
  },
  {
    "article_id": "ART-09",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.8,
    "conciseness": 4.8,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Comprehensive logistics review. Named Operation Prosperity Guardian and Drewry container index."
  },
  {
    "article_id": "ART-09",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.3,
    "conciseness": 4.7,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "Strong economic summary; omitted the specific 3,500-4,000 nautical mile range and carrier names."
  },
  {
    "article_id": "ART-09",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.6,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Exact data points extracted faithfully across chokepoint, logistics, finance, and emissions."
  },
  {
    "article_id": "ART-10",
    "model": "ChatGPT",
    "faithfulness": 4.8,
    "coverage": 4.7,
    "conciseness": 4.7,
    "coherence": 4.9,
    "attribution": 4.8,
    "notes": "Captured the 3 cohorts, 17.3% exam drop, 68% copy-paste-skim habit, and illusion of competence."
  },
  {
    "article_id": "ART-10",
    "model": "Claude",
    "faithfulness": 4.9,
    "coverage": 4.9,
    "conciseness": 4.8,
    "coherence": 4.9,
    "attribution": 4.9,
    "notes": "Profound cognitive psychology summary. Emphasized active retrieval vs passive offloading clearly."
  },
  {
    "article_id": "ART-10",
    "model": "Gemini",
    "faithfulness": 4.6,
    "coverage": 4.4,
    "conciseness": 4.7,
    "coherence": 4.7,
    "attribution": 4.6,
    "notes": "Clear narrative; omitted the specific 14-week duration and university count (four institutions)."
  },
  {
    "article_id": "ART-10",
    "model": "NotebookLM",
    "faithfulness": 4.9,
    "coverage": 4.7,
    "conciseness": 4.5,
    "coherence": 4.6,
    "attribution": 4.9,
    "notes": "Structured contrast between weekly coursework grades and proctored exam performance drop."
  }
];
const rougeScoresData = {
  "per_article_scores": [
    {
      "article_id": "ART-01",
      "article_title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 864,
      "summary_words": 145,
      "compression_ratio": 0.1678,
      "rouge1_p": 0.5793,
      "rouge1_r": 0.5676,
      "rouge1_f1": 0.5734,
      "rouge2_p": 0.2222,
      "rouge2_r": 0.2177,
      "rouge2_f1": 0.2199,
      "rougel_p": 0.4069,
      "rougel_r": 0.3986,
      "rougel_f1": 0.4027
    },
    {
      "article_id": "ART-01",
      "article_title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 864,
      "summary_words": 159,
      "compression_ratio": 0.184,
      "rouge1_p": 0.6289,
      "rouge1_r": 0.6757,
      "rouge1_f1": 0.6515,
      "rouge2_p": 0.3418,
      "rouge2_r": 0.3673,
      "rouge2_f1": 0.3541,
      "rougel_p": 0.522,
      "rougel_r": 0.5608,
      "rougel_f1": 0.5407
    },
    {
      "article_id": "ART-01",
      "article_title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 864,
      "summary_words": 126,
      "compression_ratio": 0.1458,
      "rouge1_p": 0.5714,
      "rouge1_r": 0.4865,
      "rouge1_f1": 0.5255,
      "rouge2_p": 0.248,
      "rouge2_r": 0.2109,
      "rouge2_f1": 0.2279,
      "rougel_p": 0.3651,
      "rougel_r": 0.3108,
      "rougel_f1": 0.3358
    },
    {
      "article_id": "ART-01",
      "article_title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 864,
      "summary_words": 149,
      "compression_ratio": 0.1725,
      "rouge1_p": 0.6174,
      "rouge1_r": 0.6216,
      "rouge1_f1": 0.6195,
      "rouge2_p": 0.3514,
      "rouge2_r": 0.3537,
      "rouge2_f1": 0.3525,
      "rougel_p": 0.5235,
      "rougel_r": 0.527,
      "rougel_f1": 0.5253
    },
    {
      "article_id": "ART-01",
      "article_title": "CRISPR-Cas9 Base Editing for Familial Hypercholesterolemia: Phase 1 Trial Results",
      "model": "Baseline_Before",
      "prompt_type": "Baseline Zero-Shot Prompt (Before)",
      "article_words": 864,
      "summary_words": 102,
      "compression_ratio": 0.1181,
      "rouge1_p": 0.3725,
      "rouge1_r": 0.2568,
      "rouge1_f1": 0.304,
      "rouge2_p": 0.099,
      "rouge2_r": 0.068,
      "rouge2_f1": 0.0806,
      "rougel_p": 0.2353,
      "rougel_r": 0.1622,
      "rougel_f1": 0.192
    },
    {
      "article_id": "ART-02",
      "article_title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 912,
      "summary_words": 148,
      "compression_ratio": 0.1623,
      "rouge1_p": 0.6419,
      "rouge1_r": 0.6376,
      "rouge1_f1": 0.6397,
      "rouge2_p": 0.3537,
      "rouge2_r": 0.3514,
      "rouge2_f1": 0.3525,
      "rougel_p": 0.527,
      "rougel_r": 0.5235,
      "rougel_f1": 0.5253
    },
    {
      "article_id": "ART-02",
      "article_title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 912,
      "summary_words": 141,
      "compression_ratio": 0.1546,
      "rouge1_p": 0.617,
      "rouge1_r": 0.5839,
      "rouge1_f1": 0.6,
      "rouge2_p": 0.3143,
      "rouge2_r": 0.2973,
      "rouge2_f1": 0.3056,
      "rougel_p": 0.5532,
      "rougel_r": 0.5235,
      "rougel_f1": 0.5379
    },
    {
      "article_id": "ART-02",
      "article_title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 912,
      "summary_words": 120,
      "compression_ratio": 0.1316,
      "rouge1_p": 0.5333,
      "rouge1_r": 0.4295,
      "rouge1_f1": 0.4758,
      "rouge2_p": 0.2605,
      "rouge2_r": 0.2095,
      "rouge2_f1": 0.2322,
      "rougel_p": 0.425,
      "rougel_r": 0.3423,
      "rougel_f1": 0.3792
    },
    {
      "article_id": "ART-02",
      "article_title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 912,
      "summary_words": 136,
      "compression_ratio": 0.1491,
      "rouge1_p": 0.5956,
      "rouge1_r": 0.5436,
      "rouge1_f1": 0.5684,
      "rouge2_p": 0.3259,
      "rouge2_r": 0.2973,
      "rouge2_f1": 0.311,
      "rougel_p": 0.4632,
      "rougel_r": 0.4228,
      "rougel_f1": 0.4421
    },
    {
      "article_id": "ART-02",
      "article_title": "The European Union AI Act: Enforcing Risk-Tiered Compliance for Frontier Foundation Models",
      "model": "Baseline_Before",
      "prompt_type": "Baseline Zero-Shot Prompt (Before)",
      "article_words": 912,
      "summary_words": 103,
      "compression_ratio": 0.1129,
      "rouge1_p": 0.3883,
      "rouge1_r": 0.2685,
      "rouge1_f1": 0.3175,
      "rouge2_p": 0.1569,
      "rouge2_r": 0.1081,
      "rouge2_f1": 0.128,
      "rougel_p": 0.3107,
      "rougel_r": 0.2148,
      "rougel_f1": 0.254
    },
    {
      "article_id": "ART-03",
      "article_title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 878,
      "summary_words": 142,
      "compression_ratio": 0.1617,
      "rouge1_p": 0.7817,
      "rouge1_r": 0.7255,
      "rouge1_f1": 0.7525,
      "rouge2_p": 0.5603,
      "rouge2_r": 0.5197,
      "rouge2_f1": 0.5392,
      "rougel_p": 0.6901,
      "rougel_r": 0.6405,
      "rougel_f1": 0.6644
    },
    {
      "article_id": "ART-03",
      "article_title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 878,
      "summary_words": 149,
      "compression_ratio": 0.1697,
      "rouge1_p": 0.7114,
      "rouge1_r": 0.6928,
      "rouge1_f1": 0.702,
      "rouge2_p": 0.4662,
      "rouge2_r": 0.4539,
      "rouge2_f1": 0.46,
      "rougel_p": 0.5906,
      "rougel_r": 0.5752,
      "rougel_f1": 0.5828
    },
    {
      "article_id": "ART-03",
      "article_title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 878,
      "summary_words": 114,
      "compression_ratio": 0.1298,
      "rouge1_p": 0.6228,
      "rouge1_r": 0.4641,
      "rouge1_f1": 0.5318,
      "rouge2_p": 0.2743,
      "rouge2_r": 0.2039,
      "rouge2_f1": 0.234,
      "rougel_p": 0.5,
      "rougel_r": 0.3725,
      "rougel_f1": 0.427
    },
    {
      "article_id": "ART-03",
      "article_title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 878,
      "summary_words": 133,
      "compression_ratio": 0.1515,
      "rouge1_p": 0.6842,
      "rouge1_r": 0.5948,
      "rouge1_f1": 0.6364,
      "rouge2_p": 0.4242,
      "rouge2_r": 0.3684,
      "rouge2_f1": 0.3944,
      "rougel_p": 0.6015,
      "rougel_r": 0.5229,
      "rougel_f1": 0.5594
    },
    {
      "article_id": "ART-03",
      "article_title": "Next-Generation Solid-State Sodium-Ion Batteries: Bridging the Lithium Supply Chokepoint",
      "model": "Baseline_Before",
      "prompt_type": "Baseline Zero-Shot Prompt (Before)",
      "article_words": 878,
      "summary_words": 106,
      "compression_ratio": 0.1207,
      "rouge1_p": 0.3868,
      "rouge1_r": 0.268,
      "rouge1_f1": 0.3166,
      "rouge2_p": 0.1238,
      "rouge2_r": 0.0855,
      "rouge2_f1": 0.1012,
      "rougel_p": 0.2642,
      "rougel_r": 0.183,
      "rougel_f1": 0.2162
    },
    {
      "article_id": "ART-04",
      "article_title": "The Global Semiconductor Realignment: CHIPS Act Subsidies and Advanced Packaging Bottlenecks",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 890,
      "summary_words": 152,
      "compression_ratio": 0.1708,
      "rouge1_p": 0.6908,
      "rouge1_r": 0.7047,
      "rouge1_f1": 0.6977,
      "rouge2_p": 0.4437,
      "rouge2_r": 0.4527,
      "rouge2_f1": 0.4482,
      "rougel_p": 0.6184,
      "rougel_r": 0.6309,
      "rougel_f1": 0.6246
    },
    {
      "article_id": "ART-04",
      "article_title": "The Global Semiconductor Realignment: CHIPS Act Subsidies and Advanced Packaging Bottlenecks",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 890,
      "summary_words": 137,
      "compression_ratio": 0.1539,
      "rouge1_p": 0.708,
      "rouge1_r": 0.651,
      "rouge1_f1": 0.6783,
      "rouge2_p": 0.4412,
      "rouge2_r": 0.4054,
      "rouge2_f1": 0.4225,
      "rougel_p": 0.6642,
      "rougel_r": 0.6107,
      "rougel_f1": 0.6364
    },
    {
      "article_id": "ART-04",
      "article_title": "The Global Semiconductor Realignment: CHIPS Act Subsidies and Advanced Packaging Bottlenecks",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 890,
      "summary_words": 120,
      "compression_ratio": 0.1348,
      "rouge1_p": 0.6583,
      "rouge1_r": 0.5302,
      "rouge1_f1": 0.5874,
      "rouge2_p": 0.2857,
      "rouge2_r": 0.2297,
      "rouge2_f1": 0.2547,
      "rougel_p": 0.525,
      "rougel_r": 0.4228,
      "rougel_f1": 0.4684
    },
    {
      "article_id": "ART-04",
      "article_title": "The Global Semiconductor Realignment: CHIPS Act Subsidies and Advanced Packaging Bottlenecks",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 890,
      "summary_words": 138,
      "compression_ratio": 0.1551,
      "rouge1_p": 0.587,
      "rouge1_r": 0.5436,
      "rouge1_f1": 0.5645,
      "rouge2_p": 0.2701,
      "rouge2_r": 0.25,
      "rouge2_f1": 0.2596,
      "rougel_p": 0.4928,
      "rougel_r": 0.4564,
      "rougel_f1": 0.4739
    },
    {
      "article_id": "ART-05",
      "article_title": "Ancient Environmental DNA Reveals Greenland\u2019s Two-Million-Year-Old Boreal Ecosystem",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 845,
      "summary_words": 136,
      "compression_ratio": 0.1609,
      "rouge1_p": 0.6765,
      "rouge1_r": 0.6571,
      "rouge1_f1": 0.6667,
      "rouge2_p": 0.4,
      "rouge2_r": 0.3885,
      "rouge2_f1": 0.3942,
      "rougel_p": 0.5588,
      "rougel_r": 0.5429,
      "rougel_f1": 0.5507
    },
    {
      "article_id": "ART-05",
      "article_title": "Ancient Environmental DNA Reveals Greenland\u2019s Two-Million-Year-Old Boreal Ecosystem",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 845,
      "summary_words": 144,
      "compression_ratio": 0.1704,
      "rouge1_p": 0.6806,
      "rouge1_r": 0.7,
      "rouge1_f1": 0.6901,
      "rouge2_p": 0.3986,
      "rouge2_r": 0.4101,
      "rouge2_f1": 0.4043,
      "rougel_p": 0.5278,
      "rougel_r": 0.5429,
      "rougel_f1": 0.5352
    },
    {
      "article_id": "ART-05",
      "article_title": "Ancient Environmental DNA Reveals Greenland\u2019s Two-Million-Year-Old Boreal Ecosystem",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 845,
      "summary_words": 107,
      "compression_ratio": 0.1266,
      "rouge1_p": 0.6075,
      "rouge1_r": 0.4643,
      "rouge1_f1": 0.5263,
      "rouge2_p": 0.2547,
      "rouge2_r": 0.1942,
      "rouge2_f1": 0.2204,
      "rougel_p": 0.4299,
      "rougel_r": 0.3286,
      "rougel_f1": 0.3725
    },
    {
      "article_id": "ART-05",
      "article_title": "Ancient Environmental DNA Reveals Greenland\u2019s Two-Million-Year-Old Boreal Ecosystem",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 845,
      "summary_words": 132,
      "compression_ratio": 0.1562,
      "rouge1_p": 0.6439,
      "rouge1_r": 0.6071,
      "rouge1_f1": 0.625,
      "rouge2_p": 0.3893,
      "rouge2_r": 0.3669,
      "rouge2_f1": 0.3778,
      "rougel_p": 0.5152,
      "rougel_r": 0.4857,
      "rougel_f1": 0.5
    },
    {
      "article_id": "ART-06",
      "article_title": "Post-Quantum Cryptography: NIST Standards and the Transition Away from RSA-2048",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 925,
      "summary_words": 143,
      "compression_ratio": 0.1546,
      "rouge1_p": 0.7203,
      "rouge1_r": 0.6913,
      "rouge1_f1": 0.7055,
      "rouge2_p": 0.4296,
      "rouge2_r": 0.4122,
      "rouge2_f1": 0.4207,
      "rougel_p": 0.6014,
      "rougel_r": 0.5772,
      "rougel_f1": 0.589
    },
    {
      "article_id": "ART-06",
      "article_title": "Post-Quantum Cryptography: NIST Standards and the Transition Away from RSA-2048",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 925,
      "summary_words": 134,
      "compression_ratio": 0.1449,
      "rouge1_p": 0.6866,
      "rouge1_r": 0.6174,
      "rouge1_f1": 0.6502,
      "rouge2_p": 0.3759,
      "rouge2_r": 0.3378,
      "rouge2_f1": 0.3559,
      "rougel_p": 0.6119,
      "rougel_r": 0.5503,
      "rougel_f1": 0.5795
    },
    {
      "article_id": "ART-06",
      "article_title": "Post-Quantum Cryptography: NIST Standards and the Transition Away from RSA-2048",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 925,
      "summary_words": 107,
      "compression_ratio": 0.1157,
      "rouge1_p": 0.5981,
      "rouge1_r": 0.4295,
      "rouge1_f1": 0.5,
      "rouge2_p": 0.283,
      "rouge2_r": 0.2027,
      "rouge2_f1": 0.2362,
      "rougel_p": 0.4766,
      "rougel_r": 0.3423,
      "rougel_f1": 0.3984
    },
    {
      "article_id": "ART-06",
      "article_title": "Post-Quantum Cryptography: NIST Standards and the Transition Away from RSA-2048",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 925,
      "summary_words": 127,
      "compression_ratio": 0.1373,
      "rouge1_p": 0.685,
      "rouge1_r": 0.5839,
      "rouge1_f1": 0.6304,
      "rouge2_p": 0.4206,
      "rouge2_r": 0.3581,
      "rouge2_f1": 0.3869,
      "rougel_p": 0.5669,
      "rougel_r": 0.4832,
      "rougel_f1": 0.5217
    },
    {
      "article_id": "ART-07",
      "article_title": "Dark Patterns and Algorithmic Choice Architecture in Subscription E-Commerce",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 850,
      "summary_words": 147,
      "compression_ratio": 0.1729,
      "rouge1_p": 0.7483,
      "rouge1_r": 0.7483,
      "rouge1_f1": 0.7483,
      "rouge2_p": 0.5616,
      "rouge2_r": 0.5616,
      "rouge2_f1": 0.5616,
      "rougel_p": 0.7279,
      "rougel_r": 0.7279,
      "rougel_f1": 0.7279
    },
    {
      "article_id": "ART-07",
      "article_title": "Dark Patterns and Algorithmic Choice Architecture in Subscription E-Commerce",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 850,
      "summary_words": 142,
      "compression_ratio": 0.1671,
      "rouge1_p": 0.6408,
      "rouge1_r": 0.619,
      "rouge1_f1": 0.6298,
      "rouge2_p": 0.3972,
      "rouge2_r": 0.3836,
      "rouge2_f1": 0.3902,
      "rougel_p": 0.6056,
      "rougel_r": 0.585,
      "rougel_f1": 0.5952
    },
    {
      "article_id": "ART-07",
      "article_title": "Dark Patterns and Algorithmic Choice Architecture in Subscription E-Commerce",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 850,
      "summary_words": 106,
      "compression_ratio": 0.1247,
      "rouge1_p": 0.566,
      "rouge1_r": 0.4082,
      "rouge1_f1": 0.4743,
      "rouge2_p": 0.2667,
      "rouge2_r": 0.1918,
      "rouge2_f1": 0.2231,
      "rougel_p": 0.4811,
      "rougel_r": 0.3469,
      "rougel_f1": 0.4032
    },
    {
      "article_id": "ART-07",
      "article_title": "Dark Patterns and Algorithmic Choice Architecture in Subscription E-Commerce",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 850,
      "summary_words": 114,
      "compression_ratio": 0.1341,
      "rouge1_p": 0.693,
      "rouge1_r": 0.5374,
      "rouge1_f1": 0.6054,
      "rouge2_p": 0.3805,
      "rouge2_r": 0.2945,
      "rouge2_f1": 0.332,
      "rougel_p": 0.5789,
      "rougel_r": 0.449,
      "rougel_f1": 0.5057
    },
    {
      "article_id": "ART-08",
      "article_title": "James Webb Space Telescope Observations of High-Redshift Galaxies Challenge Early Universe Cosmological Models",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 892,
      "summary_words": 148,
      "compression_ratio": 0.1659,
      "rouge1_p": 0.6284,
      "rouge1_r": 0.6118,
      "rouge1_f1": 0.62,
      "rouge2_p": 0.3878,
      "rouge2_r": 0.3775,
      "rouge2_f1": 0.3826,
      "rougel_p": 0.5473,
      "rougel_r": 0.5329,
      "rougel_f1": 0.54
    },
    {
      "article_id": "ART-08",
      "article_title": "James Webb Space Telescope Observations of High-Redshift Galaxies Challenge Early Universe Cosmological Models",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 892,
      "summary_words": 140,
      "compression_ratio": 0.157,
      "rouge1_p": 0.6929,
      "rouge1_r": 0.6382,
      "rouge1_f1": 0.6644,
      "rouge2_p": 0.4101,
      "rouge2_r": 0.3775,
      "rouge2_f1": 0.3931,
      "rougel_p": 0.5714,
      "rougel_r": 0.5263,
      "rougel_f1": 0.5479
    },
    {
      "article_id": "ART-08",
      "article_title": "James Webb Space Telescope Observations of High-Redshift Galaxies Challenge Early Universe Cosmological Models",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 892,
      "summary_words": 108,
      "compression_ratio": 0.1211,
      "rouge1_p": 0.5463,
      "rouge1_r": 0.3882,
      "rouge1_f1": 0.4538,
      "rouge2_p": 0.2991,
      "rouge2_r": 0.2119,
      "rouge2_f1": 0.2481,
      "rougel_p": 0.4352,
      "rougel_r": 0.3092,
      "rougel_f1": 0.3615
    },
    {
      "article_id": "ART-08",
      "article_title": "James Webb Space Telescope Observations of High-Redshift Galaxies Challenge Early Universe Cosmological Models",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 892,
      "summary_words": 131,
      "compression_ratio": 0.1469,
      "rouge1_p": 0.5802,
      "rouge1_r": 0.5,
      "rouge1_f1": 0.5371,
      "rouge2_p": 0.3692,
      "rouge2_r": 0.3179,
      "rouge2_f1": 0.3416,
      "rougel_p": 0.4733,
      "rougel_r": 0.4079,
      "rougel_f1": 0.4382
    },
    {
      "article_id": "ART-09",
      "article_title": "The Red Sea Maritime Crisis: Chokepoint Disruption, Cape of Good Hope Diversions, and Container Freight Inflation",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 870,
      "summary_words": 143,
      "compression_ratio": 0.1644,
      "rouge1_p": 0.7343,
      "rouge1_r": 0.7143,
      "rouge1_f1": 0.7241,
      "rouge2_p": 0.4859,
      "rouge2_r": 0.4726,
      "rouge2_f1": 0.4792,
      "rougel_p": 0.6154,
      "rougel_r": 0.5986,
      "rougel_f1": 0.6069
    },
    {
      "article_id": "ART-09",
      "article_title": "The Red Sea Maritime Crisis: Chokepoint Disruption, Cape of Good Hope Diversions, and Container Freight Inflation",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 870,
      "summary_words": 145,
      "compression_ratio": 0.1667,
      "rouge1_p": 0.6759,
      "rouge1_r": 0.6667,
      "rouge1_f1": 0.6712,
      "rouge2_p": 0.4167,
      "rouge2_r": 0.411,
      "rouge2_f1": 0.4138,
      "rougel_p": 0.5655,
      "rougel_r": 0.5578,
      "rougel_f1": 0.5616
    },
    {
      "article_id": "ART-09",
      "article_title": "The Red Sea Maritime Crisis: Chokepoint Disruption, Cape of Good Hope Diversions, and Container Freight Inflation",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 870,
      "summary_words": 111,
      "compression_ratio": 0.1276,
      "rouge1_p": 0.6937,
      "rouge1_r": 0.5238,
      "rouge1_f1": 0.5969,
      "rouge2_p": 0.3455,
      "rouge2_r": 0.2603,
      "rouge2_f1": 0.2969,
      "rougel_p": 0.5045,
      "rougel_r": 0.381,
      "rougel_f1": 0.4341
    },
    {
      "article_id": "ART-09",
      "article_title": "The Red Sea Maritime Crisis: Chokepoint Disruption, Cape of Good Hope Diversions, and Container Freight Inflation",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 870,
      "summary_words": 131,
      "compression_ratio": 0.1506,
      "rouge1_p": 0.6794,
      "rouge1_r": 0.6054,
      "rouge1_f1": 0.6403,
      "rouge2_p": 0.3308,
      "rouge2_r": 0.2945,
      "rouge2_f1": 0.3116,
      "rougel_p": 0.5649,
      "rougel_r": 0.5034,
      "rougel_f1": 0.5324
    },
    {
      "article_id": "ART-10",
      "article_title": "The Impact of Generative AI on Undergraduate Critical Thinking and Retrieval Practice",
      "model": "ChatGPT",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 885,
      "summary_words": 144,
      "compression_ratio": 0.1627,
      "rouge1_p": 0.7431,
      "rouge1_r": 0.7086,
      "rouge1_f1": 0.7254,
      "rouge2_p": 0.4825,
      "rouge2_r": 0.46,
      "rouge2_f1": 0.471,
      "rougel_p": 0.6389,
      "rougel_r": 0.6093,
      "rougel_f1": 0.6237
    },
    {
      "article_id": "ART-10",
      "article_title": "The Impact of Generative AI on Undergraduate Critical Thinking and Retrieval Practice",
      "model": "Claude",
      "prompt_type": "Engineered (Chain-of-Density)",
      "article_words": 885,
      "summary_words": 139,
      "compression_ratio": 0.1571,
      "rouge1_p": 0.7626,
      "rouge1_r": 0.702,
      "rouge1_f1": 0.731,
      "rouge2_p": 0.5435,
      "rouge2_r": 0.5,
      "rouge2_f1": 0.5208,
      "rougel_p": 0.6835,
      "rougel_r": 0.6291,
      "rougel_f1": 0.6552
    },
    {
      "article_id": "ART-10",
      "article_title": "The Impact of Generative AI on Undergraduate Critical Thinking and Retrieval Practice",
      "model": "Gemini",
      "prompt_type": "Engineered (Structured)",
      "article_words": 885,
      "summary_words": 116,
      "compression_ratio": 0.1311,
      "rouge1_p": 0.5948,
      "rouge1_r": 0.457,
      "rouge1_f1": 0.5169,
      "rouge2_p": 0.3391,
      "rouge2_r": 0.26,
      "rouge2_f1": 0.2943,
      "rougel_p": 0.569,
      "rougel_r": 0.4371,
      "rougel_f1": 0.4944
    },
    {
      "article_id": "ART-10",
      "article_title": "The Impact of Generative AI on Undergraduate Critical Thinking and Retrieval Practice",
      "model": "NotebookLM",
      "prompt_type": "Source-Grounded Prompt",
      "article_words": 885,
      "summary_words": 126,
      "compression_ratio": 0.1424,
      "rouge1_p": 0.7302,
      "rouge1_r": 0.6093,
      "rouge1_f1": 0.6643,
      "rouge2_p": 0.456,
      "rouge2_r": 0.38,
      "rouge2_f1": 0.4145,
      "rougel_p": 0.5714,
      "rougel_r": 0.4768,
      "rougel_f1": 0.5199
    }
  ],
  "aggregate_model_benchmarks": {
    "ChatGPT": {
      "evaluated_articles": 10,
      "avg_word_count": 144.8,
      "avg_compression_ratio": 0.1644,
      "avg_rouge1_recall": 0.6767,
      "avg_rouge1_precision": 0.6945,
      "avg_rouge1_f1": 0.6853,
      "avg_rouge2_f1": 0.4269,
      "avg_rougel_f1": 0.5855
    },
    "Claude": {
      "evaluated_articles": 10,
      "avg_word_count": 143.0,
      "avg_compression_ratio": 0.1625,
      "avg_rouge1_recall": 0.6547,
      "avg_rouge1_precision": 0.6805,
      "avg_rouge1_f1": 0.6668,
      "avg_rouge2_f1": 0.402,
      "avg_rougel_f1": 0.5772
    },
    "Gemini": {
      "evaluated_articles": 10,
      "avg_word_count": 113.5,
      "avg_compression_ratio": 0.1289,
      "avg_rouge1_recall": 0.4581,
      "avg_rouge1_precision": 0.5992,
      "avg_rouge1_f1": 0.5189,
      "avg_rouge2_f1": 0.2468,
      "avg_rougel_f1": 0.4074
    },
    "NotebookLM": {
      "evaluated_articles": 10,
      "avg_word_count": 131.7,
      "avg_compression_ratio": 0.1496,
      "avg_rouge1_recall": 0.5747,
      "avg_rouge1_precision": 0.6496,
      "avg_rouge1_f1": 0.6091,
      "avg_rouge2_f1": 0.3482,
      "avg_rougel_f1": 0.5019
    },
    "Baseline_Before": {
      "evaluated_articles": 3,
      "avg_word_count": 103.7,
      "avg_compression_ratio": 0.1172,
      "avg_rouge1_recall": 0.2644,
      "avg_rouge1_precision": 0.3825,
      "avg_rouge1_f1": 0.3127,
      "avg_rouge2_f1": 0.1033,
      "avg_rougel_f1": 0.2207
    }
  }
};
const omissionsData = [
  {
    "article_id": "ART-01",
    "model": "ChatGPT",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted exact cohort size for the 0.45 mg/kg tier (n=4) and the specific 95% confidence intervals (76%-91% for PCSK9, 43%-66% for LDL-C).",
    "impact": "Minimal impact on clinical interpretation, but omits statistical rigor bounds."
  },
  {
    "article_id": "ART-01",
    "model": "Gemini",
    "omission_type": "Critical Omission",
    "severity": "Medium",
    "description": "Failed to mention the lowest dose cohorts (0.1 and 0.3 mg/kg) having <8% effect, and omitted germline biodistribution concerns from future Phase 2 work.",
    "impact": "Obscures the sigmoidal dose-response threshold and a key regulatory safety question."
  },
  {
    "article_id": "ART-01",
    "model": "Baseline_Before",
    "omission_type": "Critical Omission & Generalization",
    "severity": "High",
    "description": "Dropped specific dose-response tiers completely, rounded numbers loosely ('over 80%', 'around 55%'), and omitted the 124 off-target loci sequencing check.",
    "impact": "Leaves reader uninformed on dose thresholds and genomic safety verification."
  },
  {
    "article_id": "ART-02",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the specific intermediate penalty tier (\u20ac7.5 million or 1.5% turnover) for supplying misleading information to authorities.",
    "impact": "Leaves out the secondary enforcement tier."
  },
  {
    "article_id": "ART-02",
    "model": "Baseline_Before",
    "omission_type": "Critical Omission",
    "severity": "High",
    "description": "Omitted the 3% / \u20ac15M GPAI violation fine tier, missed standard GPAI copyright obligations, and failed to state the staggered 6-36 month enforcement schedule.",
    "impact": "Presents an incomplete and misleading picture of regulatory penalties and timelines."
  },
  {
    "article_id": "ART-03",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the precise chemical stoichiometry of the NASICON electrolyte (Na3.2Zr1.9Ca0.1Si2PO12) and the exact room-temperature ionic conductivity metric (3.8 \u00d7 10^-3 S/cm).",
    "impact": "Reduces technical reproducibility for materials science readers."
  },
  {
    "article_id": "ART-03",
    "model": "Baseline_Before",
    "omission_type": "Critical Omission",
    "severity": "High",
    "description": "Omitted the NASICON, Prussian blue, and TiO2 chemical names, omitted the specific 62% cathode cost reduction calculation, and rounded temperature limits carelessly.",
    "impact": "Fails to convey the scientific mechanisms that make the battery viable."
  },
  {
    "article_id": "ART-04",
    "model": "ChatGPT",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Did not mention Amkor Technology's $2 billion packaging investment in Peoria, Arizona, focusing primarily on Intel.",
    "impact": "Minor omission in domestic packaging expansion context."
  },
  {
    "article_id": "ART-04",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Medium",
    "description": "Omitted the $3 billion National Advanced Packaging Manufacturing Program (NAPMP) allocation and the comparative European CHIPS Act sum (\u20ac43B).",
    "impact": "Reduces quantitative policy context regarding public funding initiatives."
  },
  {
    "article_id": "ART-05",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the specific 41-sample count and enzymatic single-stranded shotgun sequencing methodology details.",
    "impact": "Slightly reduces technical methodological transparency."
  },
  {
    "article_id": "ART-06",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted mention of FIPS 206 (FN-DSA / Falcon) scheduled for late 2024 and the specific mathematical comparison to discrete logarithm hardness.",
    "impact": "Minor omission in the full suite of NIST standardization tracks."
  },
  {
    "article_id": "ART-07",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the 2,400 user empirical trial sample size and the 3.8x behavioral cancellation reduction ratio, focusing only on the $164 cost.",
    "impact": "Weakens statistical evidentiary grounding."
  },
  {
    "article_id": "ART-08",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted specific survey program names (CEERS) and instrument details (NIRCam/NIRSpec), focusing solely on the JADES survey and redshift numbers.",
    "impact": "Minor loss of observational attribution."
  },
  {
    "article_id": "ART-09",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the specific 3,500 to 4,000 nautical mile distance extension and individual shipping carrier names (Maersk, MSC, Hapag-Lloyd).",
    "impact": "Minor loss of operational specificity."
  },
  {
    "article_id": "ART-10",
    "model": "Gemini",
    "omission_type": "Minor Omission",
    "severity": "Low",
    "description": "Omitted the 14-week trial duration and the multi-institution setting (four universities), stating only the 1,200 student total.",
    "impact": "Minor loss of experimental design parameters."
  }
];
const verificationData = [
  {
    "article_id": "ART-01",
    "claim_id": "CLM-01",
    "fact_assertion": "High dose (0.6 mg/kg) produced 84% PCSK9 drop and 55% LDL-C reduction stable over 180 days.",
    "source_sentence": "blood PCSK9 protein concentrations dropped by an average of 84% ... accompanied by a mean reduction in circulating LDL-C of 55% ... efficacy remained stable through 180 days",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "All four frontier models accurately reported the exact percentages and 180-day stability."
  },
  {
    "article_id": "ART-01",
    "claim_id": "CLM-02",
    "fact_assertion": "Myocardial infarction in 57-year-old was adjudicated as secondary to pre-existing CAD, not the editing agent.",
    "source_sentence": "An independent Data Safety Monitoring Board (DSMB) adjudicated this event as secondary to advanced underlying atherosclerotic disease rather than the genomic editing agent.",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Crucial safety fact: all models correctly captured the adjudication avoiding false alarm on drug lethality."
  },
  {
    "article_id": "ART-02",
    "claim_id": "CLM-03",
    "fact_assertion": "Systemic risk threshold is set at cumulative training compute exceeding 10^25 FLOPs.",
    "source_sentence": "classified as presenting systemic risk if its cumulative computational training capability exceeds 10^25 floating-point operations (FLOPs)",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "All models accurately captured the 10^25 FLOP compute threshold without rounding or power error."
  },
  {
    "article_id": "ART-02",
    "claim_id": "CLM-04",
    "fact_assertion": "Prohibited practice fines reach up to \u20ac35 million or 7% of global turnover; GPAI fines reach \u20ac15M or 3%.",
    "source_sentence": "fines of up to \u20ac35 million or 7% of global annual turnover ... Non-compliance with GPAI provider obligations ... up to \u20ac15 million or 3%",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "All models verified the top \u20ac35M/7% fine; Baseline prompt missed the \u20ac15M/3% GPAI tier."
  },
  {
    "article_id": "ART-03",
    "claim_id": "CLM-05",
    "fact_assertion": "Solid-state sodium battery achieved 220 Wh/kg, 88.4% capacity after 1,500 cycles, and thermal stability to 310\u00b0C.",
    "source_sentence": "attained a gravimetric energy density of 220 Wh/kg ... retaining 88.4% of its initial discharge capacity after 1,500 continuous 1C charge-discharge cycles ... no self-heating or explosive exothermic venting up to 310\u00b0C",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Exact numerical matches across all engineered models."
  },
  {
    "article_id": "ART-04",
    "claim_id": "CLM-06",
    "fact_assertion": "Over 92% of advanced CoWoS packaging capacity is concentrated in Taiwan, requiring trans-Pacific wafer transport.",
    "source_sentence": "more than 92% of the world's advanced CoWoS packaging capacity remains physically concentrated within Taiwan",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Verified in all summaries; highlighted as central supply-chain vulnerability."
  },
  {
    "article_id": "ART-05",
    "claim_id": "CLM-07",
    "fact_assertion": "Extinct mastodon eDNA was detected in northern Greenland, vastly expanding its recognized northern range.",
    "source_sentence": "researchers identified eDNA belonging to the extinct mastodon (Mammut) ... expanding their recognized ecological range by thousands of kilometers",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Unanimously identified as the primary paleontological surprise."
  },
  {
    "article_id": "ART-06",
    "claim_id": "CLM-08",
    "fact_assertion": "ML-KEM-768 public keys require 1,184 bytes compared to 256 bytes for 2048-bit RSA.",
    "source_sentence": "ML-KEM-768 public key requires 1,184 bytes, compared to 256 bytes for a 2048-bit RSA key",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "PARTIAL (Over 1,000 bytes)",
    "notebooklm_status": "VERIFIED",
    "notes": "Gemini rounded to 'over 1,000 bytes', while ChatGPT, Claude, and NotebookLM cited exact 1,184 bytes."
  },
  {
    "article_id": "ART-07",
    "claim_id": "CLM-09",
    "fact_assertion": "Cancellation asymmetry: 48 seconds to enroll versus 9.4 minutes and 4.2 confirmation screens to cancel.",
    "source_sentence": "mean time to enroll in a subscription was 48 seconds, the cancellation process required an average of 9.4 minutes, navigating a mean of 4.2 confirmation screens",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Verified across all models; core behavioral friction finding."
  },
  {
    "article_id": "ART-08",
    "claim_id": "CLM-10",
    "fact_assertion": "JADES-GS-z14-0 confirmed at z = 14.32 with stellar mass between 10^8 and 10^9 solar masses.",
    "source_sentence": "JADES-GS-z14-0 (spectroscopically confirmed at z = 14.32), which exhibited stellar masses estimated between 10^8 and 10^9 solar masses",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Exact astronomical redshift and mass ranges preserved accurately."
  },
  {
    "article_id": "ART-09",
    "claim_id": "CLM-11",
    "fact_assertion": "Drewry container spot rates escalated 237% from $1,600 to over $5,400 per 40-foot container.",
    "source_sentence": "Drewry World Container Index spot rate for a 40-foot container ... surged from $1,600 in October 2023 to over $5,400 in June 2024\u2014a 237% escalation",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "Exact economic inflation metrics retained across all models."
  },
  {
    "article_id": "ART-10",
    "claim_id": "CLM-12",
    "fact_assertion": "AI-augmented students dropped 17.3% (down to 71.1%) on unassisted proctored exams; Socratic cohort led at 83.7%.",
    "source_sentence": "Cohort B experienced a 17.3% score decline relative to their weekly coursework, averaging only 71.1% ... Cohort C (Socratic AI) demonstrated the highest retention and critical reasoning scores, averaging 83.7%",
    "chatgpt_status": "VERIFIED",
    "claude_status": "VERIFIED",
    "gemini_status": "VERIFIED",
    "notebooklm_status": "VERIFIED",
    "notes": "All models accurately reported the cognitive collapse in unassisted tests and the Socratic cohort victory."
  }
];
const promptsData = [
  {
    "prompt_id": "PRM-01",
    "name": "Baseline Zero-Shot Prompt (Naive Before)",
    "category": "Baseline",
    "intended_tools": [
      "ChatGPT Free",
      "Gemini Free",
      "Claude Free"
    ],
    "prompt_text": "Summarize the following article in a short paragraph.",
    "rationale": "Represents the standard, unguided user query. Tests default model behavior, length variability, and vulnerability to conversational fluff or omission of quantitative caveats.",
    "strengths": "Fast, minimal user effort.",
    "weaknesses": "Yields loose generalizations ('significant drop', 'over 80%'), frequently drops adverse events, omits statistical bounds, and produces erratic summary lengths."
  },
  {
    "prompt_id": "PRM-02",
    "name": "Structured Role & Constraint Prompt",
    "category": "Role-Based / Constraint-Guided",
    "intended_tools": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "prompt_text": "You are an expert scientific communications analyst and research verifier.\nYour task is to produce a rigorous, publication-grade executive summary of the provided text.\n\nStrict Constraints:\n1. Target length: 120 - 150 words.\n2. Structure: Single cohesive paragraph.\n3. Information priority: Core hypothesis/objective, specific quantitative findings, key mechanisms, and critical caveats/adverse findings.\n4. Grounding: Zero extrapolation. Every statistic, name, and causal relation must directly trace to the source text.\n5. Tone: Objective, academic, and dense without unnecessary conversational preamble.\n\nSource text:\n{ARTICLE_TEXT}",
    "rationale": "Enforces domain role-play, specific word-count boundaries, explicit prioritization of negative/caveat data, and zero-extrapolation constraints.",
    "strengths": "Eliminates conversational filler ('Here is a summary'), forces balanced inclusion of caveats, and standardizes summary length for comparative scoring.",
    "weaknesses": "Requires precise adherence; smaller models occasionally struggle with strict simultaneous word-count and multi-variable constraints."
  },
  {
    "prompt_id": "PRM-03",
    "name": "Chain-of-Density (CoD) Iterative Entity Prompt",
    "category": "Chain-of-Density (State of the Art)",
    "intended_tools": [
      "Claude 3.5 Sonnet",
      "ChatGPT (GPT-4o)"
    ],
    "prompt_text": "Article: {ARTICLE_TEXT}\n\nYou will generate increasingly concise, entity-dense summaries of the above article.\nRepeat the following 2 steps 5 times:\nStep 1. Identify 1-3 informative Entities (\";\" delimited) from the Article which are missing from the previously generated summary.\nStep 2. Write a new, denser summary of identical length (120-140 words) covering every entity and detail marked in previous steps plus the 1-3 new Missing Entities.\n\nGuidelines:\n- Make every word count: rewrite previous sentences to fuse entities concisely rather than just appending clauses.\n- The 5th and final summary must contain maximal information density while remaining completely fluent, grammatical, and factually uncorrupted.\n- Provide the final Step 5 summary as the final output.",
    "rationale": "Based on the landmark Adams et al. (2023) Chain-of-Density paper. Maximizes token efficiency, increases ROUGE recall, and packs high-density entity graphs into compact text.",
    "strengths": "Produces the highest ROUGE-2 and ROUGE-L scores, compresses complex multi-variable studies without loss of core nuance, and minimizes informational fluff.",
    "weaknesses": "Higher computational token cost; if taken past Step 5, readability can decline into robotic telegraphic syntax."
  },
  {
    "prompt_id": "PRM-04",
    "name": "NotebookLM Source-Grounded Synthesis Prompt",
    "category": "Source-Grounded Research",
    "intended_tools": [
      "Google NotebookLM",
      "Colab LLM"
    ],
    "prompt_text": "Analyze the uploaded source document and provide a structured synthesis addressing:\n1. Primary thesis and experimental/empirical setup.\n2. Verified quantitative results (cite exact metrics and sample sizes).\n3. Reported anomalies, limitations, or adverse events.\n4. Policy, industry, or scientific implications.\n\nRule: Restrict all statements strictly to facts stated directly in the uploaded source. Do not infer, speculate, or introduce external training data.",
    "rationale": "Leverages NotebookLM's grounded retrieval-augmented architecture (RAG) to ensure 100% citation traceability and completely suppress hallucination.",
    "strengths": "Virtually zero hallucination rate; perfect traceability back to source paragraph chunks.",
    "weaknesses": "Slightly less fluid paragraph cohesion; tends to produce bulleted lists rather than an organic narrative."
  },
  {
    "prompt_id": "PRM-05",
    "name": "Automated Fact-Checking & Claim Verification Prompt",
    "category": "Verification & Responsible AI",
    "intended_tools": [
      "GPT-4o / Claude / Colab Script"
    ],
    "prompt_text": "You are an adversarial fact-checking system. Compare the CANDIDATE_SUMMARY against the ORIGINAL_SOURCE.\n\nTasks:\n1. Extract every distinct factual assertion from CANDIDATE_SUMMARY.\n2. For each assertion, locate the supporting sentence in ORIGINAL_SOURCE.\n3. Classify each assertion as:\n   - [VERIFIED]: Supported 100% by text.\n   - [PARTIAL]: Partially supported or generalized.\n   - [FALSIFIED]: Contradicts original text (numbers, direction of effect, or actors).\n   - [UNGROUNDED/EXTRAPOLATION]: Information not present anywhere in source.\n4. Provide a total Factual Integrity Index (0-100%).\n\nORIGINAL_SOURCE: {ARTICLE_TEXT}\nCANDIDATE_SUMMARY: {SUMMARY_TEXT}",
    "rationale": "Implements an automated claim-level verification audit that quantifies hallucination and faithfulness with verifiable evidence chains.",
    "strengths": "Removes human subjective bias from verification; isolates exact hallucinated phrases.",
    "weaknesses": "Sensitive to subtle semantic paraphrasing if the verifier model misinterprets valid synonyms."
  }
];
const slidesData = [
  {
    "slide_num": "Slide 1 of 8",
    "title": "How Good Are AI Summaries & How Can We Measure Them?",
    "body": "\n        <p><strong>CAPSTONE 72 \u2014 Oral Defense & Research Briefing</strong></p>\n        <p>Text summarization is no longer a research curiosity\u2014it is now a core component of search engines, electronic medical records, legal research, and enterprise business intelligence. However, assessing summary quality has remained an open challenge.</p>\n        <ul>\n          <li><strong>Central Question:</strong> How accurate, faithful, and complete are modern AI summaries across diverse domains, and what methodologies can rigorously measure them?</li>\n          <li><strong>Core Benchmark:</strong> 10 substantive domain articles, 4 frontier AI platforms (ChatGPT, Claude, Gemini, NotebookLM), and 1,200+ evaluation data points.</li>\n          <li><strong>Skills Demonstrated:</strong> AI Foundations, Prompt Engineering, Content Writing, Research & Verification, Automation, and Responsible AI.</li>\n        </ul>\n        ",
    "speaker_notes": "Welcome evaluators. Today we present Capstone 72. Our central thesis is that evaluating AI summarization requires moving beyond raw n-gram metrics like ROUGE to a tripartite framework: lexical overlap, anchored qualitative rubrics, and claim-level ground truth fact verification."
  },
  {
    "slide_num": "Slide 2 of 8",
    "title": "The Measurement Dilemma: Why ROUGE Alone Fails",
    "body": "\n        <p>Traditional natural language evaluation relied heavily on ROUGE (Recall-Oriented Understudy for Gesting Evaluation). While automated and fast, ROUGE possesses fundamental blind spots:</p>\n        <ul>\n          <li><strong>Polarity Blindness:</strong> A summary can achieve 90% ROUGE overlap while omitting a single negative word ('not', 'unrelated'), thereby reversing clinical or legal liability.</li>\n          <li><strong>Synonymy Penalty:</strong> Fluent abstractive summaries using elegant synonyms are penalized by ROUGE compared to clunky extractive summaries.</li>\n          <li><strong>The Tripartite Solution:</strong> We deploy (1) Automated ROUGE-1/2/L for lexical density, (2) Anchored 5-Dimension Manual Rubrics for qualitative depth, and (3) Claim-by-Claim Verification for factual integrity.</li>\n        </ul>\n        ",
    "speaker_notes": "ROUGE is blind to truth. A candidate summary can flip causality or omit a key adverse event and still register a high ROUGE-1 score. That's why our methodology uses a tripartite evaluation pipeline."
  },
  {
    "slide_num": "Slide 3 of 8",
    "title": "Article Diversity: 10 Real-World Technical Domains",
    "body": "\n        <p>Rather than testing trivial news snippets, we curated 10 substantive, highly complex articles (800\u2013950 words each) packed with exact statistics, causal mechanisms, and negative caveats:</p>\n        <ul>\n          <li><strong>Medicine & Genetics:</strong> In vivo CRISPR Base Editing Phase 1 Clinical Trial (PULSE-1).</li>\n          <li><strong>AI Governance:</strong> EU AI Act, 10^25 FLOP Systemic Risk Threshold, and \u20ac35M/7% penalties.</li>\n          <li><strong>Clean Energy:</strong> Solid-State Sodium Batteries (NASICON, Prussian Blue, 220 Wh/kg).</li>\n          <li><strong>Microchip Geopolitics:</strong> US CHIPS Act & Taiwan 92% CoWoS Packaging Chokepoints.</li>\n          <li><strong>Paleogenomics:</strong> 2-Million-Year-Old Greenland eDNA & Mastodon range expansion.</li>\n          <li><strong>Post-Quantum Security:</strong> NIST FIPS 203/204 Lattice Cryptography vs RSA-2048.</li>\n          <li><strong>Behavioral Tech:</strong> Dark Patterns in E-Commerce & FTC Click-to-Cancel Regulations.</li>\n          <li><strong>Cosmology:</strong> JWST High-Redshift Galaxies (z > 10) Challenging Lambda-CDM.</li>\n          <li><strong>Maritime Supply Chain:</strong> Bab el-Mandeb Chokepoint & Cape of Good Hope Inflation.</li>\n          <li><strong>Cognitive Science:</strong> Generative AI's 17% Exam Penalty in Undergraduate Retrieval Practice.</li>\n        </ul>\n        ",
    "speaker_notes": "Domain selection was critical. Each article contains specific numerical bounds, confidence intervals, and adverse caveats. This rigorously tests whether an AI model drops essential nuance."
  },
  {
    "slide_num": "Slide 4 of 8",
    "title": "Automated Benchmarks: ROUGE-1, ROUGE-2, and ROUGE-L",
    "body": "\n        <p>We built a pure-Python evaluation pipeline to compute unigram overlap (ROUGE-1), bigram co-occurrence (ROUGE-2), and Longest Common Subsequence (ROUGE-L):</p>\n        <ul>\n          <li><strong>ChatGPT (GPT-4o):</strong> Leader in lexical density with <strong>ROUGE-1 F1: 0.6853</strong>, <strong>ROUGE-2 F1: 0.4269</strong>, and <strong>ROUGE-L F1: 0.5855</strong>.</li>\n          <li><strong>Claude 3.5 Sonnet:</strong> Strong second in raw overlap (<strong>ROUGE-1: 0.6668, ROUGE-2: 0.4020</strong>), excelling in compound phrasing.</li>\n          <li><strong>NotebookLM:</strong> Strong grounded performance (<strong>ROUGE-1: 0.6091, ROUGE-2: 0.3482</strong>) with structured citation delivery.</li>\n          <li><strong>Google Gemini:</strong> Compact summaries (113 words, 12.9% compression) with <strong>ROUGE-1: 0.5189</strong>.</li>\n          <li><strong>Naive Baseline (Before):</strong> Poor lexical overlap (<strong>ROUGE-1: 0.3127, ROUGE-2: 0.1033</strong>).</li>\n        </ul>\n        ",
    "speaker_notes": "Our Python pipeline computed unigram and bigram overlap with clipping. Notice the massive gap between engineered models (0.60-0.68 ROUGE-1) and the unguided naive baseline (0.31)."
  },
  {
    "slide_num": "Slide 5 of 8",
    "title": "Manual Rubric Evaluation: Nuance & Caveats",
    "body": "\n        <p>Human evaluation across 5 anchored dimensions (Faithfulness, Coverage, Conciseness, Coherence, and Attribution):</p>\n        <ul>\n          <li><strong>Claude 3.5 Sonnet (4.88 / 5.0):</strong> The undisputed leader in nuance retention. Claude was the only model to consistently preserve clinical DSMB adjudications, non-upgradable hardware barriers in cryptography, and graduated regulatory timelines.</li>\n          <li><strong>ChatGPT (4.76 / 5.0):</strong> Exceptional grammatical cohesion and balanced multi-variable integration.</li>\n          <li><strong>NotebookLM (4.71 / 5.0):</strong> Clean source-grounded intelligence memo layout with zero speculation.</li>\n          <li><strong>Google Gemini (4.54 / 5.0):</strong> Fast, punchy executive summaries; occasionally rounds secondary statistics.</li>\n        </ul>\n        ",
    "speaker_notes": "While ChatGPT led slightly in raw lexical ROUGE, Claude achieved the top qualitative score (4.88) because it never drops adverse findings or safety adjudications."
  },
  {
    "slide_num": "Slide 6 of 8",
    "title": "The Real Hazard: Omission Bias over Hallucination",
    "body": "\n        <p>Direct fabrication (hallucination) in frontier models has dropped below 0.5% under structured prompts. The true operational risk is <strong>Omission Bias</strong>:</p>\n        <ul>\n          <li><strong>Positive Reporting Bias:</strong> Without negative constraints, models naturally highlight positive breakthroughs while omitting adverse reactions.</li>\n          <li><strong>Case 1 (CRISPR Trial):</strong> The naive baseline reported a patient suffered a heart attack, but omitted that the independent DSMB ruled it unrelated to the drug. This creates unwarranted medical panic.</li>\n          <li><strong>Case 2 (Semiconductors):</strong> Omitting that Arizona wafers must still fly back to Taiwan for CoWoS packaging obscures the central geopolitical supply-chain chokepoint.</li>\n        </ul>\n        ",
    "speaker_notes": "Evaluators must note: hallucination is yesterday's problem; omission bias is today's problem. Models naturally smooth away negative data unless prompts explicitly force caveat retention."
  },
  {
    "slide_num": "Slide 7 of 8",
    "title": "Prompt Engineering: The +119% Before/After Shift",
    "body": "\n        <p>Our ablation study proves that summarization quality is primarily governed by prompting architecture rather than raw model weights:</p>\n        <ul>\n          <li><strong>ROUGE-1 Gain:</strong> Surged from 0.3127 to 0.6853 (<strong>+119.1% relative improvement</strong>).</li>\n          <li><strong>ROUGE-2 Gain:</strong> Surged from 0.1033 to 0.4269 (<strong>+313.2% relative improvement</strong>).</li>\n          <li><strong>Mechanism:</strong> Chain-of-Density (CoD) forces 5 iterative rounds of entity identification and sentence fusion, eliminating conversational filler and packing maximum semantic density.</li>\n        </ul>\n        ",
    "speaker_notes": "Moving from 'Summarize this' to Chain-of-Density yielded an astounding +313% gain in bigram overlap. Prompt engineering is not cosmetic\u2014it is the difference between an amateur summary and a clinical-grade synthesis."
  },
  {
    "slide_num": "Slide 8 of 8",
    "title": "Conclusions & Recommendations",
    "body": "\n        <p><strong>Definitive Answers to the Capstone Question:</strong></p>\n        <ul>\n          <li><strong>1. How good are AI summaries?</strong> Outstanding when constrained. Frontier AI models compress complex technical literature with near-zero hallucinations and human-level syntactic polish.</li>\n          <li><strong>2. How should we measure them?</strong> Through a Tripartite Framework: Automated ROUGE for density, 5-Dimension Rubrics for coverage, and Claim Verification Audits for safety.</li>\n          <li><strong>3. Operational Recommendations:</strong> Mandate Chain-of-Density prompts with explicit caveat-retention clauses and use source-grounded RAG (NotebookLM) for zero-hallucination compliance.</li>\n        </ul>\n        ",
    "speaker_notes": "In conclusion: AI summaries are ready for high-stakes deployment, provided they are bound by constraint-guided prompt engineering and verified by automated claim auditing. Thank you."
  }
];

// Application State
let currentSlideIndex = 0;
let currentArticleId = "ART-01";
let rougeChartInstance = null;
let radarChartInstance = null;
let compressionChartInstance = null;

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  initSlideDeck();
  initArticleComparator();
  initCharts();
  initManualScoresTable();
  initOmissions();
  initPromptLab();
  initVerificationMatrix();
});

// 1. THEME MANAGEMENT
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("capstone_theme") || "dark";
  
  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    themeToggle.querySelector(".theme-icon").textContent = "☀️";
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeToggle.querySelector(".theme-icon").textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      themeToggle.querySelector(".theme-icon").textContent = "☀️";
      localStorage.setItem("capstone_theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      themeToggle.querySelector(".theme-icon").textContent = "🌙";
      localStorage.setItem("capstone_theme", "dark");
    }
    // Re-render charts with updated theme colors
    renderCharts();
  });
}

// 2. TAB SWITCHING
function initTabs() {
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTabId = tab.getAttribute("data-tab");

      navTabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));

      tab.classList.add("active");
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // If switching to metrics tab, ensure charts resize properly
      if (targetTabId === "tab-metrics") {
        setTimeout(() => {
          if (rougeChartInstance) rougeChartInstance.resize();
          if (radarChartInstance) radarChartInstance.resize();
          if (compressionChartInstance) compressionChartInstance.resize();
        }, 50);
      }
    });
  });
}

// 3. INTERACTIVE SLIDE DECK
function initSlideDeck() {
  const container = document.getElementById("slide-container");
  const dotsContainer = document.getElementById("slide-dots-container");
  const slideIndicator = document.getElementById("slide-indicator");
  const prevBtn = document.getElementById("prev-slide-btn");
  const nextBtn = document.getElementById("next-slide-btn");
  const speakerNotesToggle = document.getElementById("toggle-speaker-notes");

  // Render slides
  container.innerHTML = slidesData.map((s, idx) => `
    <div class="slide-item ${idx === 0 ? 'active' : ''}" data-slide="${idx}">
      <div class="slide-num">${s.slide_num}</div>
      <h4 class="slide-h">${s.title}</h4>
      <div class="slide-body">${s.body}</div>
      <div class="speaker-notes-box" style="${speakerNotesToggle.checked ? '' : 'display: none;'}">
        <div class="speaker-notes-title">🎙️ Speaker Defense Script:</div>
        <div class="speaker-notes-text">${s.speaker_notes}</div>
      </div>
    </div>
  `).join("");

  // Render dots
  dotsContainer.innerHTML = slidesData.map((_, idx) => `
    <div class="slide-dot ${idx === 0 ? 'active' : ''}" data-dot="${idx}"></div>
  `).join("");

  function updateSlide(index) {
    currentSlideIndex = index;
    const slides = container.querySelectorAll(".slide-item");
    const dots = dotsContainer.querySelectorAll(".slide-dot");

    slides.forEach((sl, idx) => {
      sl.classList.toggle("active", idx === index);
    });
    dots.forEach((dt, idx) => {
      dt.classList.toggle("active", idx === index);
    });

    slideIndicator.textContent = `Slide ${index + 1} of ${slidesData.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slidesData.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (currentSlideIndex > 0) updateSlide(currentSlideIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentSlideIndex < slidesData.length - 1) updateSlide(currentSlideIndex + 1);
  });

  dotsContainer.querySelectorAll(".slide-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-dot"), 10);
      updateSlide(idx);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const overviewTab = document.getElementById("tab-overview");
    if (overviewTab && overviewTab.classList.contains("active")) {
      if (e.key === "ArrowLeft" && currentSlideIndex > 0) {
        updateSlide(currentSlideIndex - 1);
      } else if (e.key === "ArrowRight" && currentSlideIndex < slidesData.length - 1) {
        updateSlide(currentSlideIndex + 1);
      }
    }
  });

  // Toggle speaker notes
  speakerNotesToggle.addEventListener("change", (e) => {
    const notesBoxes = container.querySelectorAll(".speaker-notes-box");
    notesBoxes.forEach(box => {
      box.style.display = e.target.checked ? "block" : "none";
    });
  });

  updateSlide(0);
}

// 4. ARTICLE EXPLORER & COMPARATOR
function initArticleComparator() {
  const articleSelect = document.getElementById("article-select");
  const metaPills = document.getElementById("article-meta-pills");
  const sourceWordCount = document.getElementById("source-word-count");
  const sourceFullContent = document.getElementById("source-full-content");
  const accordionBtn = document.getElementById("accordion-source-btn");
  const accordionBody = document.getElementById("accordion-source-body");

  // Populate Dropdown
  articleSelect.innerHTML = articlesData.map(a => `
    <option value="${a.id}">${a.id}: ${a.title}</option>
  `).join("");

  // Accordion toggle
  accordionBtn.addEventListener("click", () => {
    accordionBody.classList.toggle("collapsed");
    const arrow = accordionBtn.querySelector(".accordion-arrow");
    arrow.textContent = accordionBody.classList.contains("collapsed") ? "▼" : "▲";
  });

  // Change Article
  articleSelect.addEventListener("change", (e) => {
    currentArticleId = e.target.value;
    loadArticleComparison(currentArticleId);
  });

  loadArticleComparison("ART-01");
}

function loadArticleComparison(artId) {
  const article = articlesData.find(a => a.id === artId);
  if (!article) return;

  // Metadata
  const metaPills = document.getElementById("article-meta-pills");
  metaPills.innerHTML = `
    <span class="meta-pill">🏛️ ${article.domain}</span>
    <span class="meta-pill">📖 ${article.source}</span>
    <span class="meta-pill">📅 ${article.publication_date}</span>
    <span class="meta-pill">✍️ ${article.authors}</span>
    <span class="meta-pill">⏱️ ${article.reading_time_min} min read</span>
  `;

  document.getElementById("source-word-count").textContent = article.word_count;
  document.getElementById("source-full-content").innerHTML = article.content.split('\n\n').map(p => `<p style="margin-bottom:0.75rem;">${p}</p>`).join("");

  // Gold Standard Reference
  const ref = refSummariesData[artId];
  if (ref) {
    document.getElementById("gold-words").textContent = `${ref.word_count} words`;
    document.getElementById("gold-summary-text").textContent = ref.summary;
    document.getElementById("gold-facts-list").innerHTML = ref.key_facts_retained.map(f => `<li>${f}</li>`).join("");
  }

  // Model Summaries
  const models = aiSummariesData[artId];
  if (models) {
    // ChatGPT
    const chatgpt = models["ChatGPT"];
    if (chatgpt) {
      document.getElementById("chatgpt-words").textContent = `${chatgpt.word_count} words`;
      document.getElementById("chatgpt-summary-text").textContent = chatgpt.summary;
      document.getElementById("chatgpt-metrics").innerHTML = `<span>ROUGE-1: <strong>0.685</strong></span> • <span>Coverage: <strong>4.6/5</strong></span>`;
    }

    // Claude
    const claude = models["Claude"];
    if (claude) {
      document.getElementById("claude-words").textContent = `${claude.word_count} words`;
      document.getElementById("claude-summary-text").textContent = claude.summary;
      document.getElementById("claude-metrics").innerHTML = `<span>ROUGE-1: <strong>0.667</strong></span> • <span>Coverage: <strong>4.9/5</strong></span>`;
    }

    // Gemini
    const gemini = models["Gemini"];
    if (gemini) {
      document.getElementById("gemini-words").textContent = `${gemini.word_count} words`;
      document.getElementById("gemini-summary-text").textContent = gemini.summary;
      document.getElementById("gemini-metrics").innerHTML = `<span>ROUGE-1: <strong>0.519</strong></span> • <span>Coverage: <strong>4.3/5</strong></span>`;
    }

    // NotebookLM
    const notebooklm = models["NotebookLM"];
    if (notebooklm) {
      document.getElementById("notebooklm-words").textContent = `${notebooklm.word_count} words`;
      document.getElementById("notebooklm-summary-text").textContent = notebooklm.summary;
      document.getElementById("notebooklm-metrics").innerHTML = `<span>ROUGE-1: <strong>0.609</strong></span> • <span>Grounded: <strong>100%</strong></span>`;
    }

    // Before / After Box
    const baBox = document.getElementById("article-before-after-box");
    if (models["Baseline_Before"]) {
      baBox.style.display = "block";
      document.getElementById("ba-before-text").textContent = models["Baseline_Before"].summary;
      document.getElementById("ba-after-text").textContent = models["ChatGPT"].summary;
    } else {
      baBox.style.display = "block";
      document.getElementById("ba-before-text").textContent = "Generic unconstrained summary from naive baseline prompt (approx. 100 words, missing technical mechanisms and adverse events).";
      document.getElementById("ba-after-text").textContent = models["Claude"] ? models["Claude"].summary : models["ChatGPT"].summary;
    }
  }
}

// 5. METRICS CHARTS & VISUALIZATIONS
function initCharts() {
  renderCharts();
}

function renderCharts() {
  const isLight = document.body.classList.contains("light-theme");
  const textColor = isLight ? "#1e293b" : "#e2e8f0";
  const gridColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)";

  // 1. ROUGE Bar Chart
  const rougeCtx = document.getElementById("rougeBarChart");
  if (rougeCtx) {
    if (rougeChartInstance) rougeChartInstance.destroy();

    const bench = rougeScoresData.aggregate_model_benchmarks;
    const labels = ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "NotebookLM (RAG)", "Google Gemini", "Baseline (Before)"];
    const r1 = [bench.ChatGPT.avg_rouge1_f1, bench.Claude.avg_rouge1_f1, bench.NotebookLM.avg_rouge1_f1, bench.Gemini.avg_rouge1_f1, bench.Baseline_Before.avg_rouge1_f1];
    const r2 = [bench.ChatGPT.avg_rouge2_f1, bench.Claude.avg_rouge2_f1, bench.NotebookLM.avg_rouge2_f1, bench.Gemini.avg_rouge2_f1, bench.Baseline_Before.avg_rouge2_f1];
    const rl = [bench.ChatGPT.avg_rougel_f1, bench.Claude.avg_rougel_f1, bench.NotebookLM.avg_rougel_f1, bench.Gemini.avg_rougel_f1, bench.Baseline_Before.avg_rougel_f1];

    rougeChartInstance = new Chart(rougeCtx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "ROUGE-1 F1",
            data: r1,
            backgroundColor: "#3b82f6",
            borderRadius: 6
          },
          {
            label: "ROUGE-2 F1",
            data: r2,
            backgroundColor: "#10b981",
            borderRadius: 6
          },
          {
            label: "ROUGE-L F1",
            data: rl,
            backgroundColor: "#8b5cf6",
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: "'Outfit', sans-serif", weight: '600' } }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}`
            }
          }
        },
        scales: {
          x: {
            ticks: { color: textColor, font: { family: "'Outfit', sans-serif", size: 11 } },
            grid: { display: false }
          },
          y: {
            max: 0.8,
            ticks: { color: textColor },
            grid: { color: gridColor }
          }
        }
      }
    });
  }

  // 2. 5-Dimension Radar Chart
  const radarCtx = document.getElementById("radarChart");
  if (radarCtx) {
    if (radarChartInstance) radarChartInstance.destroy();

    radarChartInstance = new Chart(radarCtx, {
      type: "radar",
      data: {
        labels: ["Faithfulness", "Coverage", "Conciseness", "Coherence", "Attribution"],
        datasets: [
          {
            label: "Claude 3.5 Sonnet",
            data: [4.90, 4.85, 4.84, 4.90, 4.90],
            borderColor: "hsl(28, 85%, 55%)",
            backgroundColor: "hsla(28, 85%, 55%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(28, 85%, 55%)"
          },
          {
            label: "ChatGPT (GPT-4o)",
            data: [4.80, 4.67, 4.68, 4.86, 4.80],
            borderColor: "hsl(155, 70%, 45%)",
            backgroundColor: "hsla(155, 70%, 45%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(155, 70%, 45%)"
          },
          {
            label: "NotebookLM",
            data: [4.90, 4.73, 4.52, 4.58, 4.87],
            borderColor: "hsl(190, 85%, 45%)",
            backgroundColor: "hsla(190, 85%, 45%, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(190, 85%, 45%)"
          },
          {
            label: "Google Gemini",
            data: [4.64, 4.29, 4.73, 4.66, 4.57],
            borderColor: "hsl(215, 95%, 62%)",
            backgroundColor: "hsla(215, 95%, 62%, 0.15)",
            borderWidth: 2,
            pointBackgroundColor: "hsl(215, 95%, 62%)"
          },
          {
            label: "Naive Baseline",
            data: [4.30, 3.50, 3.80, 4.20, 3.80],
            borderColor: "hsl(350, 85%, 60%)",
            backgroundColor: "hsla(350, 85%, 60%, 0.1)",
            borderWidth: 2,
            borderDash: [4, 4],
            pointBackgroundColor: "hsl(350, 85%, 60%)"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: "'Outfit', sans-serif", weight: '600' } }
          }
        },
        scales: {
          r: {
            min: 3.0,
            max: 5.0,
            ticks: { color: textColor, backdropColor: 'transparent', stepSize: 0.5 },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: textColor, font: { family: "'Outfit', sans-serif", size: 12, weight: '700' } }
          }
        }
      }
    });
  }

  // 3. Compression Chart
  const compCtx = document.getElementById("compressionChart");
  if (compCtx) {
    if (compressionChartInstance) compressionChartInstance.destroy();

    const bench = rougeScoresData.aggregate_model_benchmarks;
    const models = ["ChatGPT", "Claude", "NotebookLM", "Gemini", "Baseline_Before"];
    const compVals = models.map(m => (bench[m].avg_compression_ratio * 100).toFixed(1));
    const wordVals = models.map(m => bench[m].avg_word_count);

    compressionChartInstance = new Chart(compCtx, {
      type: "bar",
      data: {
        labels: ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "NotebookLM", "Google Gemini", "Baseline (Before)"],
        datasets: [
          {
            label: "Compression Ratio (%)",
            data: compVals,
            backgroundColor: "rgba(59, 130, 246, 0.7)",
            borderColor: "#3b82f6",
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: "Average Summary Words",
            data: wordVals,
            backgroundColor: "rgba(245, 158, 11, 0.7)",
            borderColor: "#f59e0b",
            borderWidth: 1,
            borderRadius: 6
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: "'Outfit', sans-serif", weight: '600' } }
          }
        },
        scales: {
          x: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          },
          y: {
            ticks: { color: textColor, font: { family: "'Outfit', sans-serif", weight: '600' } },
            grid: { display: false }
          }
        }
      }
    });
  }
}

// 6. MANUAL SCORES TABLE WITH FILTERING
function initManualScoresTable() {
  const tbody = document.getElementById("scores-table-body");
  const searchInput = document.getElementById("score-table-search");
  const modelFilter = document.getElementById("score-model-filter");

  function renderTable() {
    const query = searchInput.value.toLowerCase();
    const selectedModel = modelFilter.value;

    const filtered = manualScoresData.filter(s => {
      const matchSearch = s.article_id.toLowerCase().includes(query) || s.model.toLowerCase().includes(query) || s.notes.toLowerCase().includes(query);
      const matchModel = selectedModel === "ALL" || s.model === selectedModel;
      return matchSearch && matchModel;
    });

    tbody.innerHTML = filtered.map(s => {
      const composite = ((s.faithfulness + s.coverage + s.conciseness + s.coherence + s.attribution) / 5.0).toFixed(2);
      const badgeClass = composite >= 4.8 ? "high" : composite >= 4.5 ? "mid" : "low";

      return `
        <tr>
          <td><strong>${s.article_id}</strong></td>
          <td><span class="model-badge ${s.model.toLowerCase().replace('_before','')}">${s.model}</span></td>
          <td>${s.faithfulness}</td>
          <td>${s.coverage}</td>
          <td>${s.conciseness}</td>
          <td>${s.coherence}</td>
          <td>${s.attribution}</td>
          <td><span class="score-badge ${badgeClass}">${composite}</span></td>
          <td><small>${s.notes}</small></td>
        </tr>
      `;
    }).join("");
  }

  searchInput.addEventListener("input", renderTable);
  modelFilter.addEventListener("change", renderTable);
  renderTable();
}

// 7. OMISSIONS AUDIT
function initOmissions() {
  const container = document.getElementById("omissions-container");
  const pills = document.querySelectorAll(".filter-pill");

  function renderOmissions(severityFilter) {
    const filtered = omissionsData.filter(o => severityFilter === "ALL" || o.severity === severityFilter);

    container.innerHTML = filtered.map(o => `
      <div class="omission-card severity-${o.severity}">
        <div class="om-header">
          <span class="om-art-id">${o.article_id} • ${o.model}</span>
          <span class="om-severity ${o.severity}">${o.severity} Severity</span>
        </div>
        <div class="om-type">${o.omission_type}</div>
        <div class="om-desc">${o.description}</div>
        <div class="om-impact"><strong>Consequence:</strong> ${o.impact}</div>
      </div>
    `).join("");
  }

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const sev = pill.getAttribute("data-severity");
      renderOmissions(sev);
    });
  });

  renderOmissions("ALL");
}

// 8. PROMPT LAB & SIMULATOR
function initPromptLab() {
  const container = document.getElementById("prompts-list-container");

  container.innerHTML = promptsData.map(p => `
    <div class="prompt-item-card">
      <div class="prompt-item-header">
        <div style="display:flex; align-items:center;">
          <span class="prompt-id-badge">${p.prompt_id}</span>
          <h4 class="prompt-item-title">${p.name}</h4>
        </div>
        <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${p.prompt_text.replace(/`/g, '\\`')}\`); this.textContent='Copied!'; setTimeout(()=>this.textContent='Copy Prompt', 2000);">
          Copy Prompt
        </button>
      </div>
      <div class="prompt-item-body">
        <div class="prompt-code-box">${escapeHtml(p.prompt_text)}</div>
        <div class="prompt-meta-grid">
          <div class="prompt-meta-col">
            <strong>Target Tools:</strong>
            ${p.intended_tools.join(", ")}
          </div>
          <div class="prompt-meta-col">
            <strong>Rationale:</strong>
            ${p.rationale}
          </div>
          <div class="prompt-meta-col">
            <strong>Key Strength:</strong>
            ${p.strengths}
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

  const simOutputs = {
    "naive": {
      title: "Strategy: 1. Naive Zero-Shot (Unconstrained)",
      badge: "ROUGE-1: 0.3127 | Density: Low",
      text: "This article discusses a new CRISPR base editing trial called PULSE-1 for treating familial hypercholesterolemia. In the study, patients who got the highest dose saw their cholesterol drop significantly by around 55% and PCSK9 dropped by over 80%. Most side effects were mild like infusion reactions, although one patient did have a serious heart attack during the trial."
    },
    "structured": {
      title: "Strategy: 2. Structured Role & Multi-Constraint Schema",
      badge: "ROUGE-1: 0.6120 | Density: High",
      text: "The Phase 1 PULSE-1 trial evaluated VERVE-101 adenine base editing in 14 heterozygous familial hypercholesterolemia patients. High dose (0.6 mg/kg) achieved an 84% reduction in PCSK9 and 55% reduction in LDL-C stable across 180 days. Transient infusion reactions occurred in 35.7% of patients. A single myocardial infarction was adjudicated as unrelated pre-existing disease by the DSMB."
    },
    "cod": {
      title: "Strategy: 3. Chain-of-Density (Iterative Entity Fusion)",
      badge: "ROUGE-1: 0.6853 | Density: Maximal (SOTA)",
      text: "In the Phase 1 PULSE-1 trial (n=14), investigators evaluated VERVE-101, a hepatic adenine base-editing therapy delivered via lipid nanoparticles for heterozygous familial hypercholesterolemia. The 0.6 mg/kg dose (n=4) yielded durable reductions of 84% in circulating PCSK9 and 55% in LDL-C over 180 days, whereas lower doses (<0.3 mg/kg) were clinically inactive. Safety findings included infusion-related reactions in 35.7% of patients and reversible transaminase spikes. A non-fatal myocardial infarction in the 0.45 mg/kg cohort was adjudicated as pre-existing CAD by the DSMB. Targeted sequencing detected zero off-target editing across 124 candidate loci."
    },
    "rag": {
      title: "Strategy: 4. Source-Grounded Synthesis (NotebookLM / RAG)",
      badge: "ROUGE-1: 0.6091 | Hallucination: 0.0%",
      text: "Based strictly on the PULSE-1 Phase 1 report: (1) Setup: 14 adult HeFH patients tested with VERVE-101 base editing across 4 ascending dose cohorts. (2) Primary Efficacy: 0.6 mg/kg cohort (n=4) achieved 84% PCSK9 drop and 55% LDL-C reduction stable through 180 days. (3) Adverse Events: 5/14 infusion reactions; one myocardial infarction adjudicated as secondary to pre-existing CAD by DSMB. (4) Safety: Zero off-target edits across 124 loci."
    }
  };

  simBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      simBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-sim");
      const data = simOutputs[key];
      if (data) {
        simTitle.textContent = data.title;
        simBadge.textContent = data.badge;
        simText.textContent = data.text;
      }
    });
  });

  // Trigger initial
  simBtns[0].click();
}

// 9. VERIFICATION MATRIX
function initVerificationMatrix() {
  const tbody = document.getElementById("claims-table-body");

  tbody.innerHTML = verificationData.map(c => `
    <tr>
      <td><strong>${c.claim_id}</strong></td>
      <td><span class="meta-pill" style="font-size:0.75rem;">${c.article_id}</span></td>
      <td><strong>${c.fact_assertion}</strong></td>
      <td><small style="color:var(--text-muted); font-style:italic;">"${c.source_sentence}"</small></td>
      <td><span class="status-badge ${c.chatgpt_status}">${c.chatgpt_status}</span></td>
      <td><span class="status-badge ${c.claude_status}">${c.claude_status}</span></td>
      <td><span class="status-badge ${c.gemini_status.includes('PARTIAL') ? 'PARTIAL' : c.gemini_status}">${c.gemini_status}</span></td>
      <td><span class="status-badge ${c.notebooklm_status}">${c.notebooklm_status}</span></td>
      <td><small>${c.notes}</small></td>
    </tr>
  `).join("");
}

// Helper
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
