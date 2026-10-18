/* Edit this file to update research entries. Unverified author lists and resource links are omitted. */
window.ACADEMIC_CONTENT = [
  {
    id: 'surgintent', year: '2026', category: 'surgical', shortTitle: 'SurgIntent',
    title: 'Towards Higher-Level Surgical Intelligence: A Comprehensive Benchmark and Multi-Agent Framework for Surgical Intent Understanding',
    authors: 'Pengfei Hao, Shuaibo Li, Yihu Li, Hao Shen, Hongqiu Wang, Sicheng Yang, Jing Hao, Qifan Liang, Zhizhuo Kou, Xiaofeng Jiang, Junhang Zhang, Yixuan Yuan, Lei Zhu',
    venue: 'ICLR 2027 submission', status: 'Manuscript not yet public', manuscript: true,
    description: 'Surgical intent understanding through a surgeon-reviewed video benchmark and a knowledge-guided multi-agent framework.',
    links: [],
    figure: 'assets/surgintent-agent.webp', figureFull: 'assets/surgintent-agent.png',
    figureAlt: 'Figure 3 from the SurgIntent manuscript showing visual evidence extraction, surgical knowledge retrieval, hypothesis generation, and iterative intent reasoning.',
    figureCaption: 'Figure 3. Overview of SurgIntent-Agent.',
    figures: [
      {src: 'assets/surgintent-dataset.webp', fullSize: 'assets/surgintent-dataset.png', alt: 'Figure 2 from the SurgIntent manuscript showing data sources, surgeon annotation, dataset composition, and examples of the four intent understanding dimensions.', caption: 'Figure 2. Overview of SurgIntent-VidQA.'},
      {src: 'assets/surgintent-levels.webp', fullSize: 'assets/surgintent-levels.png', alt: 'Figure 1 from the SurgIntent manuscript showing object, action, reason, and plan as four levels of surgical video understanding.', caption: 'Figure 1. Levels of surgical video understanding.'}
    ],
    abstract: 'In recent years, surgical video understanding has progressed from instrument, action, and phase recognition to multimodal video question answering. However, to achieve higher-level surgical intelligence that can assist surgical maneuvers and support clinical decision-making, models need to understand the clinical intent underlying surgical actions: why an ongoing maneuver is performed and which subsequent surgical objective it prepares for. Therefore, we introduce the Surgical Intent Understanding task for endoscopic surgical videos, which jointly evaluates four clinical capabilities: anatomical localization, interpretation of instrument roles, interpretation of instrument coordination, and inference of subsequent surgical objectives. In consultation with experienced surgeons, we define four corresponding evaluation dimensions and construct the SurgIntent-VidQA dataset, comprising 603 video clips and 2,520 surgeon-annotated and reviewed five-option, single-answer questions across four procedure types in liver and lung surgery. Based on this dataset, we establish SurgIntent-Bench for systematic evaluation. We further propose SurgIntent-Agent, a knowledge-guided multi-agent framework that generates candidate intent hypotheses using surgical knowledge, acquires video evidence through targeted questions, and iteratively verifies and refines its predictions. We train the agents using supervised fine-tuning and direct preference optimization. Systematic evaluation on SurgIntent-Bench covers mainstream general-purpose, open-source video, medical, and task-specific fine-tuned multimodal large language models. SurgIntent-Agent achieves an overall accuracy of 67.62%, outperforming the strongest general-purpose model (61.32%) and task-specific SFT baseline (63.72%) by 6.30 and 3.90 percentage points, respectively. Ablation studies further support the contributions of surgical knowledge, visual evidence extraction, and preference optimization.',
    results: [ ['SurgIntent-Agent', '67.62%'], ['Task-specific SFT baseline', '63.72%'], ['Strongest evaluated general-purpose model', '61.32%'] ],
    resultNote: 'Overall accuracy on SurgIntent-Bench. Results are from the submitted manuscript; the comparisons refer to the evaluated models and benchmark.'
  },
  {
    id: 'braf-mllm', year: '2026', category: 'medical', shortTitle: 'BRAF-MLLM',
    title: 'Toward Thyroid Cancer BRAF V600E Mutation Prediction via Multimodal Large Language Model: Dataset and Model Development',
    authors: 'Pengfei Hao, Shuaibo Li, Hongqiu Wang, Sixu He, Chunwang Huang, Lei Zhu', venue: 'MICCAI 2026', status: '', manuscript: false,
    description: 'Tumor-centric multimodal alignment for BRAF V600E mutation prediction using thyroid ultrasound and clinical information.',
    links: [ {label: 'Paper', url: 'https://papers.miccai.org/miccai-2026/1072-Paper2492.html'} ],
    abstract: 'This work introduces MM-BRAF, a multimodal dataset for thyroid cancer BRAF V600E mutation prediction, integrating ultrasound images, annotated tumor regions, ultrasound reports, BRAF mutation status, and clinicopathological records. The BRAF-MLLM framework uses Tumor-centric Multimodal Dual-scale Alignment (TMDA) to capture subtle signatures through fine-grained, dual-scale cross-modal alignment. The work also establishes a benchmark for this prediction task.',
    abstractLabel: 'Research summary'
  },
  {
    id: 'hermes', year: '2026', category: 'forensics', shortTitle: 'Hermes', compact: true,
    title: 'Hermes: An Evidence-Driven Agentic Framework for Trustworthy and Explainable AI-Generated Video Detection',
    authors: 'Shuaibo Li, Pengfei Hao, Hongtao Wu, Jianfeng Dong, Ping Li, Xiaohong Liu, Lei Zhu',
    venue: 'ICML 2026', status: '', manuscript: false,
    links: [ {label: 'Paper', url: 'https://proceedings.mlr.press/v306/li26be.html'} ]
  },
  {
    id: 'synerdetect', year: '2026', category: 'forensics', shortTitle: 'SynerDetect', compact: true,
    title: 'SynerDetect: Hierarchical Synergistic Learning for Generalizable AI-Generated Image Detection',
    authors: 'Shuaibo Li, Yijun Yang, Zhaohu Xing, Hongqiu Wang, Pengfei Hao, Xingyu Li, Zekai Liu, Qing Zhang, Lei Zhu',
    venue: 'AAAI 2026', status: 'Oral', manuscript: false,
    links: [ {label: 'Paper', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/37568'} ]
  },
  {
    id: 'surgery-r1', year: '2025', category: 'surgical', shortTitle: 'Surgery-R1',
    title: 'Surgery-R1: Advancing Surgical-VQLA with Reasoning Multimodal Large Language Model via Reinforcement Learning',
    authors: 'Pengfei Hao, Shuaibo Li, Hongqiu Wang, Zhizhuo Kou, Junhang Zhang, Guang Yang, Lei Zhu',
    venue: 'arXiv 2025', status: 'Major revision at Medical Image Analysis', manuscript: true,
    description: 'Supervised and reinforcement fine-tuning for surgical visual question localized-answering, with a multimodal coherence reward.',
    links: [ {label: 'Paper', url: 'https://arxiv.org/abs/2506.19469'}, {label: 'PDF', url: 'https://arxiv.org/pdf/2506.19469'} ],
    figure: 'assets/surgery-r1-framework.webp', figureFull: 'assets/surgery-r1-framework.png',
    figureAlt: 'Figure 2 from the Surgery-R1 paper showing supervised fine-tuning, reinforcement fine-tuning with GRPO, and the multimodal coherence reward.',
    figureCaption: 'Figure 2. Surgery-R1 training framework with supervised and reinforcement fine-tuning.',
    figureGalleryTitle: 'Dataset and qualitative examples',
    figures: [
      {src: 'assets/surgery-r1-overview.webp', fullSize: 'assets/surgery-r1-overview.png', alt: 'Figure 1 from the Surgery-R1 paper showing the Surgical-VQLA task, a reasoning example, and dataset composition.', caption: 'Figure 1. Surgical-VQLA, reasoning examples, and dataset composition.'},
      {src: 'assets/surgery-r1-data-construction.webp', fullSize: 'assets/surgery-r1-data-construction.png', alt: 'Figure 3 from the Surgery-R1 paper showing the data construction workflow, sub-question generation, data processing, and surgeon review.', caption: 'Figure 3. Construction of the Surgery-R1-54k dataset.'},
      {src: 'assets/surgery-r1-qualitative.webp', fullSize: 'assets/surgery-r1-qualitative.png', alt: 'Figure 4 from the Surgery-R1 paper comparing reasoning after SFT and after SFT plus reinforcement fine-tuning across surgical image examples.', caption: 'Figure 4. Qualitative comparison of SFT and SFT+RFT reasoning.'}
    ],
    abstract: 'Surgery-R1 studies reasoning for visual question localized-answering in robotic surgery. The work constructs Surgery-R1-54k, a dataset containing paired visual question answering, grounding question answering, and chain-of-thought data. The model is trained in two stages: supervised fine-tuning followed by reinforcement fine-tuning using Group Relative Policy Optimization. A task-specific reward system includes a multimodal coherence reward to mitigate positional hallucination by encouraging consistency between textual reasoning and visual localization.',
    abstractLabel: 'Research summary'
  },
  {
    id: 'surgical-mamballm', year: '2025', category: 'surgical', shortTitle: 'Surgical-MambaLLM',
    title: 'Surgical-MambaLLM: Mamba2-enhanced Multimodal Large Language Model for VQLA in Robotic Surgery',
    authors: 'Pengfei Hao, Hongqiu Wang, Shuaibo Li, Zhaohu Xing, Guang Yang, Kaishun Wu, Lei Zhu',
    venue: 'MICCAI 2025', status: 'Early acceptance', manuscript: false,
    description: 'Instrument-aware scanning and bidirectional Mamba2 integration connect surgical visual details with language.',
    links: [ {label: 'Paper', url: 'https://arxiv.org/abs/2509.16618'}, {label: 'PDF', url: 'https://papers.miccai.org/miccai-2025/paper/2478_paper.pdf'} ],
    figure: 'assets/surgical-mamballm-figure.webp', figureAlt: 'Figure 1 from the Surgical-MambaLLM paper, showing the framework architecture.',
    abstract: 'Surgical-MambaLLM combines Mamba2 with large language models for surgical visual question localized-answering. Its Cross-modal Bidirectional Mamba2 Integration module models dependencies between visual and textual features, while a Surgical Instrument Perception scanning strategy captures spatial information associated with surgical instruments. The framework is evaluated on EndoVis17-VQLA and EndoVis18-VQLA.',
    abstractLabel: 'Research summary'
  },
  {
    id: 'medical-deepfake', year: '2025', category: 'medical', shortTitle: 'Medical Deepfake Detection', compact: true,
    title: 'Toward Medical Deepfake Detection: A Comprehensive Dataset and Novel Method',
    authors: 'Shuaibo Li, Zhaohu Xing, Hongqiu Wang, Pengfei Hao, Xingyu Li, Zekai Liu, Lei Zhu',
    venue: 'MICCAI 2025', status: 'Oral', manuscript: false,
    links: [ {label: 'Paper', url: 'https://papers.miccai.org/miccai-2025/0935-Paper2888.html'} ]
  },
  {
    id: 'envr-lpkg', year: '2025', category: 'surgical', shortTitle: 'EnVR-LPKG',
    title: 'Enhancing Visual Reasoning with LLM-Powered Knowledge Graphs for Visual Question Localized-Answering in Robotic Surgery',
    authors: 'Pengfei Hao, Hongqiu Wang, Guang Yang, Lei Zhu',
    venue: 'IEEE JBHI 2025', status: 'Vol. 29, No. 12, pp. 9027–9040', manuscript: false,
    description: 'LLM-powered knowledge graphs support visual reasoning and localized answers in surgical scenes.',
    links: [ {label: 'Paper', url: 'https://doi.org/10.1109/JBHI.2025.3538324'} ],
    abstract: 'EnVR-LPKG incorporates large-language-model-powered knowledge graphs into surgical visual question localized-answering. Structured knowledge helps the model reason about surgical instruments and scenes, supporting both textual answers and visual localization. The framework is evaluated on the EndoVis17-VQLA and EndoVis18-VQLA datasets.',
    abstractLabel: 'Research summary'
  }
];
