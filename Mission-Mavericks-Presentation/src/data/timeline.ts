export interface JourneySection {
  title: string;
  icon?: string;
  graphic?: {
    type: 'flow' | 'badges' | 'comparison';
    elements: string[];
    highlight?: string;
  };
  items: string[];
}

export interface JourneyMilestone {
  planId: string;
  milestoneNumber: string;
  phase: string;
  title: string;
  tagline: string;
  accentColor: string;
  gradient: string;
  sections: JourneySection[];
  keyTopics?: string[];
  details?: {
    domainLearning?: string[];
    pmoDiscipline?: string[];
    deliverables?: string[];
    insights?: string;
  };
  resourceLink?: {
    label: string;
    url: string;
  };
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    planId: 'MILESTONE 01',
    milestoneNumber: '01',
    phase: 'UNDERSTAND',
    title: 'Domain, Ecosystem & Foundations',
    tagline: 'Insurance Domain • Ecosystem Journeys • Business Gaps • Foundations',
    accentColor: '#1767ff', // Brand blue
    gradient: 'from-brand-blue/30 via-brand-blue/15 to-transparent',
    sections: [
      {
        title: 'Insurance & Claims Domain',
        icon: 'Shield',
        graphic: {
          type: 'badges',
          elements: ['Motor OD & TP', 'IRDAI & IIB Mandates', 'Risk & Compliance'],
        },
        items: [
          'Insurance ecosystem & key stakeholders',
          'Motor insurance products and coverage',
          'End-to-end claims lifecycle',
          'Fraud, risk & compliance concepts',
          'Regulatory bodies: IRDAI, IIB, NCRB & MoRTH',
        ],
      },
      {
        title: 'Claims Ecosystem',
        icon: 'Users',
        graphic: {
          type: 'flow',
          elements: ['Customer', 'Handler', 'Repairer'],
        },
        items: [
          'Customer Journey',
          'Claims Handler Journey',
          'Repairer Journey',
          'Stakeholder interactions and dependencies',
          'Communication and decision points',
        ],
      },
      {
        title: 'Business Understanding',
        icon: 'TrendingUp',
        graphic: {
          type: 'comparison',
          elements: ['Manual Process Friction', 'Digital Transformation'],
        },
        items: [
          'Claims pain points and challenges',
          'Customer experience gaps',
          'Manual process dependencies',
          'Claim processing bottlenecks',
          'Industry best practices',
          'Digital transformation opportunities',
        ],
      },
      {
        title: 'Project Foundations',
        icon: 'Compass',
        graphic: {
          type: 'badges',
          elements: ['FRD Scope', 'BPMN 2.0 Mapping', 'Validation Rules'],
        },
        items: [
          'Functional requirements gathering',
          'Business rules and validations',
          'Process flow mapping',
          'Domain knowledge transfer sessions',
          'Market and solution research',
          'Problem statement definition',
        ],
      },
    ],
    keyTopics: [
      'Insurance ecosystem & key stakeholders',
      'Motor insurance products and coverage',
      'End-to-end claims lifecycle & regulations',
      'Customer, Handler, Surveyor & Repairer Journeys',
    ],
    details: {
      domainLearning: [
        'Insurance ecosystem & key stakeholders',
        'Motor insurance products and coverage',
        'Policy lifecycle and validation processes',
        'End-to-end claims lifecycle',
        'Regulatory bodies: IRDAI, IIB, NCRB & MoRTH',
      ],
      pmoDiscipline: [
        'Functional requirements gathering & FRD mapping',
        'Business rules and validations definition',
        'Domain knowledge transfer & problem statement formulation',
      ],
      deliverables: [
        'Stakeholder Pain Point Matrix',
        'As-Is Process Flow Breakdown',
        'Regulatory Compliance Checklist',
      ],
      insights: 'Deep domain immersion uncovers the root causes of claims latency — fragmented handoffs and repetitive manual verification.',
    },
    resourceLink: {
      label: 'Explore Domain Research & Regulatory Map',
      url: 'https://docs.google.com/document/d/example-claimshield-frd',
    },
  },
  {
    planId: 'MILESTONE 02',
    milestoneNumber: '02',
    phase: 'DESIGN',
    title: 'Current State to Future Vision',
    tagline: 'Current State • Obvious Gaps • Future State • Opportunities',
    accentColor: '#20df89', // Brand green
    gradient: 'from-brand-green/30 via-brand-green/15 to-transparent',
    sections: [
      {
        title: 'Current State',
        icon: 'History',
        graphic: {
          type: 'badges',
          elements: ['Manual Claims', 'Repeated Reviews', '10-14d Settlement'],
        },
        items: [
          'Manual claim processing',
          'Multiple customer touchpoints',
          'Extensive document verification',
          'Repeated document reviews',
          'Rule-based fraud checks',
          'Lengthy settlement cycles',
        ],
      },
      {
        title: 'Obvious Gaps',
        icon: 'AlertTriangle',
        graphic: {
          type: 'badges',
          elements: ['Repetitive Entry', 'Limited Visibility', 'Late Risk Catch'],
        },
        items: [
          'Repetitive data entry',
          'Limited claim visibility',
          'Incomplete document submissions',
          'Fragmented stakeholder communication',
          'Heavy manual decision-making',
          'Late risk and fraud detection',
        ],
      },
      {
        title: 'Future State',
        icon: 'Sparkles',
        graphic: {
          type: 'flow',
          elements: ['Digital FNOL', 'AI & OCR', 'Real-Time Track', 'Fast Payout'],
        },
        items: [
          'Digital-first FNOL experience',
          'AI & OCR-powered processing',
          'Real-time claim tracking',
          'Intelligent validation & decision support',
          'Connected claims ecosystem',
          'Faster and transparent settlements',
        ],
      },
      {
        title: 'Future Opportunities',
        icon: 'Zap',
        graphic: {
          type: 'badges',
          elements: ['Straight-Through STP', 'AI Damage Vision', 'Predictive Risk'],
        },
        items: [
          'Straight Through Processing (STP)',
          'AI-driven fraud detection',
          'Image-based damage assessment',
          'Conversational AI assistance',
          'Predictive risk intelligence',
          'Paperless claims processing',
        ],
      },
    ],
    keyTopics: [
      'Current State manual claim bottlenecks',
      'Obvious operational and communication gaps',
      'Future State digital-first FNOL & real-time tracking',
      'STP & AI-driven fraud detection opportunities',
    ],
    details: {
      domainLearning: [
        'Severity triage rules: minor scratch, minor dent, glass/windshield',
        'Garage network settlement protocols and cashless authorization cycles',
        'Fraud indicators: duplicate claims, staged damage, policy age anomalies',
      ],
      pmoDiscipline: [
        'Functional Requirements Document (FRD) v1.0 draft',
        'Process & Journey BPMN 2.0 modeling sessions',
        'Architecture Review Board (ARB) signoff and feasibility reviews',
      ],
      deliverables: [
        'Target Operating Model & Future State Blueprints',
        'Fast-Track Decision Matrix & Rule Catalog',
        'Wireframes for Customer, Repairer & Handler consoles',
      ],
      insights: 'Transforming complex legacy claims requires isolating high-frequency, low-complexity claims for straight-through automation.',
    },
    resourceLink: {
      label: 'View BPMN 2.0 Process Swimlanes',
      url: 'https://miro.com/app/board/example-claimshield-journeys',
    },
  },
  {
    planId: 'MILESTONE 03',
    milestoneNumber: '03',
    phase: 'BUILD',
    title: 'Platform Engineering & Intelligence',
    tagline: 'User Experience • Core Platform • Digital Intelligence • Connected Solution',
    accentColor: '#ff8a3d', // Brand orange
    gradient: 'from-brand-orange/30 via-brand-orange/15 to-transparent',
    sections: [
      {
        title: 'User Experience',
        icon: 'Layout',
        graphic: {
          type: 'badges',
          elements: ['Frontend Web/App', 'Dashboard Consoles', 'Responsive UX'],
        },
        items: [
          'Frontend development',
          'Dashboard experiences',
          'Workflow interfaces',
          'Responsive design',
        ],
      },
      {
        title: 'Core Platform',
        icon: 'Server',
        graphic: {
          type: 'flow',
          elements: ['APIs', 'Backend Services', 'DB Schema', 'Integrations'],
        },
        items: [
          'Backend services',
          'API development',
          'Database architecture',
          'System integrations',
        ],
      },
      {
        title: 'Digital Intelligence',
        icon: 'Cpu',
        graphic: {
          type: 'flow',
          elements: ['OCR Engine', 'Voice Bot', 'Smart Docs', 'AI Rules'],
        },
        items: [
          'OCR processing',
          'Voice capabilities',
          'Smart document handling',
          'AI-powered features',
        ],
      },
      {
        title: 'Connected Solution',
        icon: 'Network',
        graphic: {
          type: 'badges',
          elements: ['End-to-End Sync', 'Role-Based Flow', 'Live Prototype'],
        },
        items: [
          'Cross-module integration',
          'End-to-end workflows',
          'Role-based experiences',
          'Functional prototype',
        ],
      },
    ],
    keyTopics: [
      'High-fidelity responsive UI & dashboard experiences',
      'Backend services, API dev & database architecture',
      'OCR processing, voice capabilities & smart documents',
      'Cross-module integration & multi-persona functional prototype',
    ],
    details: {
      domainLearning: [
        'Part pricing catalogs, labour rates, and depreciation schedules',
        'Voice prompt engineering for multilingual insurance claim intimation',
        'Confidence score thresholding for automated vs human-in-the-loop review',
      ],
      pmoDiscipline: [
        'Functional Requirements Specification (FRS) detailing schema & APIs',
        'Sprint demos, sprint burn-down tracking, and dependency management',
        'Security, data privacy, and tokenized document storage audits',
      ],
      deliverables: [
        'Functional ClaimShield+ Multi-Persona Working Application',
        'AI Computer Vision & OCR Integration Prototype',
        'Comprehensive Test Cases and Edge-Condition Suite',
      ],
      insights: 'Digital intelligence augments human claims adjusters — turning hours of document decoding into instantaneous, validated insights.',
    },
    resourceLink: {
      label: 'Open Interactive Figma UI/UX Kit',
      url: 'https://www.figma.com/file/example-claimshield-design-system',
    },
  },
  {
    planId: 'MILESTONE 04',
    milestoneNumber: '04',
    phase: 'DELIVER',
    title: 'Testing, Documentation & Showcase',
    tagline: 'Review • Validation • Testing • Documentation • Collaboration • Showcase',
    accentColor: '#8b5cf6', // Brand purple
    gradient: 'from-brand-purple/30 via-brand-purple/15 to-transparent',
    sections: [
      {
        title: 'Review & Refinement',
        icon: 'RefreshCw',
        graphic: {
          type: 'comparison',
          elements: ['Sprint Reviews', 'Refined Experience'],
        },
        items: [
          'Workflow improvements',
          'User experience enhancements',
          'Solution refinements',
        ],
      },
      {
        title: 'Validation',
        icon: 'CheckCircle2',
        graphic: {
          type: 'badges',
          elements: ['OCR Accuracy', 'FRD Alignment', 'Workflow Verification'],
        },
        items: [
          'OCR validation',
          'Requirement validation',
          'Workflow verification',
          'Business alignment checks',
        ],
      },
      {
        title: 'Testing',
        icon: 'FileCode2',
        graphic: {
          type: 'flow',
          elements: ['Test Preparation', 'Functional QA', 'Automation', 'E2E Validated'],
        },
        items: [
          'Test case preparation',
          'Functional testing',
          'Automation testing exploration',
          'End-to-end validation',
        ],
      },
      {
        title: 'Documentation',
        icon: 'FileText',
        graphic: {
          type: 'badges',
          elements: ['FRS & FRD', 'Process Flows', 'Jira MoMs'],
        },
        items: [
          'FRS & FRD documentation',
          'Process flows',
          'Jira tracking',
          'Scrum reports & MoMs',
        ],
      },
      {
        title: 'Collaboration',
        icon: 'Users',
        graphic: {
          type: 'flow',
          elements: ['Engineering', 'QA Leads', 'Stakeholders', 'Sprints'],
        },
        items: [
          'Development coordination',
          'QA collaboration',
          'Stakeholder reviews',
          'Sprint discussions',
        ],
      },
      {
        title: 'Showcase',
        icon: 'Presentation',
        graphic: {
          type: 'badges',
          elements: ['Live Prototype', 'Sprint Walkthrough', 'Executive Deck'],
        },
        items: [
          'Prototype demonstrations',
          'Solution walkthroughs',
          'Sprint reviews',
          'Project presentations',
        ],
      },
    ],
    keyTopics: [
      'End-to-end testing, QA collaboration & OCR validation',
      'Comprehensive FRS & FRD documentation and Jira tracking',
      'Sprint reviews, stakeholder governance & MoMs',
      'Executive demonstrations and solution walkthroughs',
    ],
    details: {
      domainLearning: [
        'Comprehensive business case & ROI quantification for Indian general insurers',
        'Customer satisfaction (CSAT) and Net Promoter Score (NPS) uplift modeling',
        'Operational expense reduction and indemnity leakage minimization',
      ],
      pmoDiscipline: [
        'Final PMO Governance sign-off and retrospective documentation',
        'Artifact repository packaging (Evidence Hub, flows, prototype links)',
        'Executive presentation dress rehearsal and delivery alignment',
      ],
      deliverables: [
        'Production-Ready Presentation & Live Deployed Apps',
        'Complete Evidence Hub (FRD, FRS, BPMN Journeys, UI Kit)',
        'Strategic 4-Phase Expansion Roadmap (UNDERSTAND, DESIGN, BUILD, DELIVER)',
      ],
      insights: 'Rigorous engineering and disciplined PMO execution transformed complex motor claims into an elegant, scalable reality.',
    },
    resourceLink: {
      label: 'Launch ClaimShield+ Live Prototype',
      url: 'https://claimshield-plus.demo.app',
    },
  },
];

// Compatibility alias for existing types if needed
export const TIMELINE_WEEKS = JOURNEY_MILESTONES.map(m => ({
  weekNumber: m.planId,
  phase: m.phase,
  title: m.title,
  tagline: m.tagline,
  accentColor: m.accentColor,
  keyTopics: m.keyTopics || [],
  details: m.details || { domainLearning: [], pmoDiscipline: [], deliverables: [], insights: '' },
}));
