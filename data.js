/* ============================================================
   ALL THE CONTENT OF YOUR RESEARCH SITE LIVES IN THIS FILE.

   HOW TO ADD SOMETHING
   - New project:      copy one { ... } block in "projects", paste it at the top, edit it.
   - New paper:        copy one block in "publications".
   - New talk:         copy one block in "talks".
   - Upcoming event:   copy one block in "news" and set upcoming: true.
   - New job:          copy one block in "industry".
   - New activity:     copy one block in "community" (ACM-W, WiML, anything you are building).
   - New research area: add a block to "areas", then use its id in a project's "areas" list.

   "areas" on a project or paper must use ids from the "areas" list below.
   Save the file and refresh the page.
   ============================================================ */
const SITE = {
  name: "Dr. Priyanka Gautam",
  role: "AI & network science researcher",
  tagline: "I study how connected systems fail, recover and spread influence — from power grids to people.",
  email: "priyankagautam099@gmail.com",
  photo: "img/portrait.jpg",
  banner: "img/banner.jpg", // wide photo shown at the top of every page; replace the file to change it
  // Photos shown on each page. To add one: put the picture in the img folder and add a line here.
  photos: {
    talks: [
      { src: "img/minkwic-talk.jpg", caption: "MINK WIC 2025 — invited talk on generative AI and workforce transformation" },
      { src: "img/minkwic-group.jpg", caption: "With attendees at MINK WIC" },
      { src: "img/kdsc-group.jpg", caption: "Kansas Data Science Conference (KDSC) 2026" },
      { src: "img/kdsc-team.jpg", caption: "At KDSC 2026" },
      { src: "img/3mt.jpg", caption: "Three Minute Thesis (3MT), Kansas State University" },
      { src: "img/mit-hackathon.jpg", caption: "At MIT Sloan for a hackathon" }
    ],
    community: [
      { src: "img/acmw-leadership-group.jpg", caption: "ACM-W K-State — Women in Leadership panel, Women's History Month" },
      { src: "img/acmw-leadership-panel.jpg", caption: "Women in Leadership: Inspiring Change, Driving Impact" },
      { src: "img/acmw-womens-day.jpg", caption: "ACM-W K-State Women's Day event" },
      { src: "img/acmw-speaker.jpg", caption: "ACM-W K-State industry speaker session" },
      { src: "img/acmw-hour-of-ai.jpg", caption: "Hour of AI with ACM-W K-State" }
    ]
  },
  cvFile: "", // put your CV PDF in this folder and write its name here, e.g. "Priyanka_Gautam_CV.pdf"
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=7uzapiUAAAAJ&hl=en" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/priyankagautam08/" },
    { label: "GitHub", url: "https://github.com/Priyankagautam08" },
    { label: "Portfolio", url: "https://priyankagautam08.github.io/" }
  ],

  // Home page text. Each line is one paragraph; links are written as <a href="...">text</a>.
  about: [
    'Welcome to my site! I recently completed my Ph.D. in Electrical and Computer Engineering at <a href="https://www.k-state.edu/">Kansas State University</a>.',
    'My doctoral research was funded by the <a href="https://www.nsf.gov/">U.S. National Science Foundation (NSF)</a> through <a href="https://nsfepscor.ku.edu/track-1-arise">Kansas NSF EPSCoR ARISE</a> (Adaptive and Resilient Infrastructures driven by Social Equity), a five-year, $24 million statewide initiative supported by NSF EPSCoR and the Kansas Board of Regents.',
    'ARISE brings together researchers across Kansas to help communities withstand and recover from large-scale disasters. Within it, I built graph-theoretic and machine learning frameworks for interdependent infrastructure, with the aim of making the systems people depend on more resilient and more equitable.',
    'Most recently, I completed a year-round internship at the <a href="https://www.nlr.gov/">National Laboratory of the Rockies</a> (NLR, formerly the National Renewable Energy Laboratory, NREL), where I worked on explainable AI for power systems: graph neural networks that detect anomalies in grid sensor data and explain their results in terms operators can act on.',
    'Before my Ph.D. I worked in industry at Accenture and eClerx, building machine learning systems for workforce analytics and financial services (see <a href="#industry">Industry</a>). I hold an M.Tech. in Computer Science and Engineering from <a href="https://iitgn.ac.in/">IIT Gandhinagar</a> and a B.Tech. in Information Technology from AKTU.',
    'I welcome collaboration with researchers working on network science, graph learning and infrastructure resilience.'
  ],

  // Industry page, newest first.
  industry: [
    { org: "National Laboratory of the Rockies (formerly NREL)", url: "https://www.nlr.gov/",
      role: "Ph.D. Intern – AI/ML Software Developer", period: "Jun 2025 – Apr 2026", place: "Colorado, USA",
      text: "AI/ML research on graph-based models for critical infrastructure, anomaly detection and energy system resilience, applying GNNs and deep learning to real-world sensor data for grid modernization.",
      bullets: [
        "Designed and trained GNN models (PyTorch Geometric, DGL) on large-scale sensor datasets for anomaly detection, failure propagation modeling and critical component identification.",
        "Built end-to-end graph learning pipelines on HPC infrastructure for node-level prediction and sensor placement.",
        "Developed an explainable-AI dashboard (SensorMap + COMBINEX) for power grid anomaly monitoring, turning GNN scores into minimal, actionable interventions for operators."
      ] },
    { org: "Accenture AI (Accenture Applied Intelligence)", url: "https://www.accenture.com/",
      role: "Data Scientist", period: "Sep 2021 – Aug 2022", place: "Gurugram, India",
      text: "Part of the Human Capital Analytics team, working on workforce strategy and planning with machine learning and automation.",
      bullets: [
        "Designed and deployed end-to-end ML pipelines on Azure ML for job-role classification and workforce forecasting, increasing planning automation by 50%.",
        "Fine-tuned transformer models (BERT variants) for NLP-based classification, improving accuracy from 70% to 90%.",
        "Delivered Power BI and Tableau dashboards that turned model outputs into recommendations for executive stakeholders."
      ] },
    { org: "eClerx", url: "https://eclerx.com/",
      role: "Associate Process Manager – data science and applied AI", period: "Jul 2019 – Sep 2021", place: "Mumbai, India",
      text: "Text extraction, pattern matching, predictive modelling and metadata extraction for business problems in financial services, including automation tools for loan-document and invoice extraction.",
      bullets: [
        "Led a loan document extraction system that captured structured fields (rates, covenants, maturity dates) from unstructured legal agreements, reducing manual review by more than 60%.",
        "Built a table-detection module with K-Means clustering and NER models (spaCy, fine-tuned transformers) for financial attribute extraction.",
        "Integrated OCR pipelines (Tesseract, AWS Textract) with NLP post-processing for legacy scanned documents."
      ] },
    { org: "Morgan Stanley (client engagement through eClerx)", url: "https://www.morganstanley.com/",
      role: "Applied AI Engineer", period: "2020 – 2021", place: "India",
      text: "Equity pricing data and analytics supporting trading workflows.",
      bullets: [
        "Engineered ETL pipelines for equity pricing data from Hadoop (Hive, HUE).",
        "Developed ML-based pricing and forecasting models for equities, and prototyped LSTM and Transformer architectures for time-series forecasting of prices and volatility signals.",
        "Performed large-scale data reconciliation across financial systems for pricing consistency and risk compliance."
      ] },
    { org: "Webisdom Management Services Pvt. Ltd.", url: "",
      role: "Software Engineer", period: "Jun 2016 – Oct 2016", place: "Noida, India",
      text: "", bullets: [] }
  ],

  areas: [
    { id: "infra", label: "Infrastructure resilience", color: "#2F6F8F",
      blurb: "Finding the nodes and links whose failure matters most across interdependent power, water, transport and emergency-service networks." },
    { id: "influence", label: "Influence in dynamic networks", color: "#8A4FA3",
      blurb: "How ideas and behaviours spread through connected people, and how to choose the right seed nodes as a network changes over time." },
    { id: "causal", label: "Causal network analysis", color: "#B5523B",
      blurb: "Moving beyond network structure to ask which nodes causally drive what happens in a network." },
    { id: "energy", label: "Explainable AI for energy", color: "#3F7D54",
      blurb: "Graph learning for anomaly detection in energy systems, with explanations operators can inspect and act on." }
  ],

  projects: [
    { title: "Criticality analysis in interdependent infrastructure",
      areas: ["infra"], status: "Published",
      summary: "A graph neural network framework that evaluates the robustness of interconnected infrastructure and identifies its most critical nodes and links.",
      details: [
        "Covers power, water, transport and emergency services in one model.",
        "97.24% node classification accuracy and 99.01% link classification accuracy on a network of more than 1,300 nodes serving a coastal community of 500,000 residents.",
        "The functionality-graph extension scales the analysis across multiple infrastructure sectors."
      ],
      papers: "IJDRR 2026 · IEEE GreenTech 2024 · IEEE SmartGridComm 2023" },

    { title: "Influence maximization in temporal graphs",
      areas: ["influence"], status: "Published",
      summary: "A GNN-LSTM model that predicts candidate seed nodes for influence maximization as a network changes in both structure and time.",
      details: [
        "Adapts to structural and temporal change instead of recomputing from scratch.",
        "Cuts the computational cost of finding good seed nodes.",
        "Applications include marketing and public health campaigns."
      ],
      papers: "AAAI 2025 Workshop · arXiv 2025" },

    { title: "A causal perspective on network influence",
      areas: ["causal", "influence"], status: "Published",
      summary: "Goes beyond purely structural measures of influence to ask which nodes causally drive spread in a network.",
      details: [
        "Combines causal reasoning with graph-based influence analysis."
      ],
      papers: "IEEE Access 2026" },

    { title: "Explainable AI for power grid anomaly monitoring",
      areas: ["energy", "infra"], status: "NLR (formerly NREL) internship",
      summary: "GNN models for anomaly detection, failure propagation and critical component identification on large-scale sensor data.",
      details: [
        "End-to-end graph learning pipelines on HPC infrastructure.",
        "An explainable-AI dashboard (SensorMap + COMBINEX) that turns model scores into minimal, actionable interventions operators can inspect.",
        "Node-level prediction and sensor placement with supervised and semi-supervised learning."
      ],
      papers: "" }
  ],

  // type: "journal" | "conference" | "preprint"
  publications: [
    { title: "Beyond Structure: A Causal Perspective on Network Influence",
      authors: "P. Gautam, S. Munikoti, M. Halappanavar, S. M. Ferdous, B. Natarajan",
      venue: "IEEE Access", year: 2026, type: "journal", areas: ["causal", "influence"],
      link: "https://ieeexplore.ieee.org/abstract/document/11687743" },
    { title: "Scalable Criticality Analysis in Interdependent Infrastructure Systems using Functionality Graphs",
      authors: "P. Gautam, R. Madbhavi, B. Natarajan",
      venue: "International Journal of Disaster Risk Reduction", year: 2026, type: "journal", areas: ["infra"],
      link: "https://www.sciencedirect.com/science/article/pii/S2212420926003729" },
    { title: "GNN-Based Candidate Node Predictor for Influence Maximization in Temporal Graphs",
      authors: "P. Gautam, B. Natarajan, S. Munikoti, S. M. Ferdous, M. Halappanavar",
      venue: "AAAI 2025 Workshop; arXiv preprint", year: 2025, type: "preprint", areas: ["influence"],
      link: "https://arxiv.org/pdf/2503.23713" },
    { title: "GNN-based Criticality Analysis in Interconnected Infrastructure Networks",
      authors: "P. Gautam, B. Natarajan",
      venue: "IEEE Green Technologies Conference (GreenTech), Springdale, AR, pp. 213-217", year: 2024, type: "conference", areas: ["infra"],
      link: "https://ieeexplore.ieee.org/abstract/document/10520547" },
    { title: "A Transductive Graph Neural Network learning for Grid Resilience Analysis",
      authors: "P. Gautam, A. Sreejith, B. Natarajan",
      venue: "IEEE SmartGridComm, Glasgow, UK, pp. 1-6", year: 2023, type: "conference", areas: ["infra", "energy"],
      link: "https://ieeexplore.ieee.org/abstract/document/10333912" }
  ],

  talks: [
    { year: 2025, event: "MINK WIC Conference", place: "", kind: "Invited talk",
      title: "Generative AI and Workforce Transformation: Opportunities, Risks, and the Future of Technology (with S. Malallah and H. Küçük McGinty)" },
    { year: 2024, event: "IEEE GreenTech Conference", place: "Springdale, AR", kind: "Paper presentation",
      title: "GNN-based Criticality Analysis in Interconnected Infrastructure Networks" },
    { year: 2024, event: "NSF-EPSCoR ARISE Annual Symposium", place: "Kansas State University, Olathe", kind: "Poster",
      title: "Critical Nodes/Link Identification in Interconnected Systems" },
    { year: 2024, event: "Three Minute Thesis (3MT)", place: "Kansas State University, Olathe", kind: "Talk",
      title: "Ensuring the Heartbeat of Our City: Strategic System Hardening for Infrastructure Networks" },
    { year: 2024, event: "Joint Mathematics Meetings (JMM)", place: "San Diego, CA", kind: "Group session",
      title: "MRC Social Week progress session" },
    { year: 2023, event: "AMS MRC on Complex Social Systems", place: "Beaver Hollow Conference Center, NY", kind: "Group presentation",
      title: "Inferring Network Structure in Models of Opinion Dynamics" },
    { year: 2023, event: "ARISE Annual Symposium", place: "Wichita State University", kind: "Poster",
      title: "GNN-based ML framework for Scalable Resilience Computation with Uncertainties" }
  ],

  community: [
    { org: "ACM-W Student Chapter, Kansas State University", role: "Founder & Chair", period: "2023 – present",
      text: "Founded and lead a student chapter that supports women in computing through coding workshops, mentorship programs and an industry speaker series.",
      link: "" },
    { org: "Women in Machine Learning (WiML) Workshop", role: "Reviewer", period: "2025 – present",
      text: "Review research submissions in machine learning and AI for the WiML workshop.",
      link: "" },
    { org: "Women in Engineering Program, Kansas State University", role: "Mentor", period: "2023 – present",
      text: "Mentor undergraduate students on AI/ML career paths, research and internships.",
      link: "" }
  ],

  awards: [
    { title: "AAAS NSF EPSCoR Travel Award", date: "March 2026" },
    { title: "Kansas State University Graduate Student Travel Fellowship", date: "Feb 2025" },
    { title: "JMM Conference Travel Award (Joint Mathematics Meetings, San Francisco)", date: "Oct 2024" },
    { title: "AMS MRC Research Week Award", date: "March 2023" }
  ],

  // upcoming: true shows the item under "Upcoming"
  news: [
    { date: "2026", upcoming: false, text: "Completed my Ph.D. in Electrical and Computer Engineering at Kansas State University." },
    { date: "2026", upcoming: false, text: "New paper in IEEE Access: \"Beyond Structure: A Causal Perspective on Network Influence.\"" },
    { date: "2026", upcoming: false, text: "New paper in the International Journal of Disaster Risk Reduction on scalable criticality analysis with functionality graphs." },
    { date: "March 2026", upcoming: false, text: "Received the AAAS NSF EPSCoR Travel Award to present at the NSF-EPSCoR Annual Summit, New Orleans, LA." },
    { date: "Feb 2025", upcoming: false, text: "Received the K-State Graduate Student Travel Fellowship for AAAI." }
  ]
};
