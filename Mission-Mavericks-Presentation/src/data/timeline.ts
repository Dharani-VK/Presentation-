export interface JourneyMilestone {
  planId: string;
  milestoneNumber: string;
  phase: string;
  title: string;
  tagline: string;
  accentColor: string;
  gradient: string;
  keyTopics: string[];
  details: {
    domainLearning: string[];
    pmoDiscipline: string[];
    deliverables: string[];
    insights: string;
  };
  resourceLink?: {
    label: string;
    url: string;
  };
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    planId: 'PLAN 01',
    milestoneNumber: 'MILESTONE 01',
    phase: 'UNDERSTAND',
    title: 'Deconstructing the Claims Landscape',
    tagline: 'Insurance • Motor • Claims • Stakeholders • Pain Points',
    accentColor: '#1767ff', // Brand blue
    gradient: 'from-brand-blue/30 to-brand-cyan/10',
    keyTopics: [
      'Indian General Insurance Industry & Market Dynamics',
      'Motor Own Damage (OD) vs Third Party (TP) lifecycles',
      'Deep dive into IRDAI & IIB regulatory mandates',
      'Stakeholder friction mapping across Customer, Repairer, and Claims Handler',
      'Root-cause analysis of delays, paperwork, and status blackholes',
    ],
    details: {
      domainLearning: [
        'Indian General Insurance ecosystem & market dynamics',
        'Motor OD product structures, deductibles, and endorsement handling',
        'IRDAI turnaround time (TAT) compliance standards and guidelines',
        'IIB database integration points and historical vehicle loss profiles',
        'Claims lifecycle: FNOL, survey, estimate, approval, invoice & settlement',
      ],
      pmoDiscipline: [
        'Stakeholder problem statement charter & business case',
        'Initial risk log and scope boundary definition',
        'Daily standup cadence and sprint backlog grooming',
      ],
      deliverables: [
        'Stakeholder Pain Point Matrix',
        'As-Is Process Flow Breakdown',
        'Regulatory Compliance Checklist',
      ],
      insights: 'Milestone 01 proved that claims delays are not caused by malicious friction, but by fragmented handoffs and repetitive manual verifications.',
    },
    resourceLink: {
      label: 'Explore Domain Research & Regulatory Map',
      url: 'https://docs.google.com/document/d/example-claimshield-frd',
    },
  },
  {
    planId: 'PLAN 02',
    milestoneNumber: 'MILESTONE 02',
    phase: 'DESIGN',
    title: 'Architecting the Future State',
    tagline: 'Current State • Future State • Journeys • Opportunities',
    accentColor: '#20df89', // Brand green
    gradient: 'from-brand-green/30 to-emerald-900/10',
    keyTopics: [
      'Current State vs Future State journey mapping',
      'Opportunity identification for Straight-Through Processing (STP)',
      'Designing the ~30-Minute Fast-Track eligibility framework',
      'Cross-stakeholder interaction models (Customer, Repairer, Handler)',
      'Architecture blueprint for AI-assisted validation and OCR extraction',
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
      insights: 'Designing for simplicity required deep domain discipline — isolating high-frequency, low-complexity claims for straight-through automation.',
    },
    resourceLink: {
      label: 'View BPMN 2.0 Process Swimlanes',
      url: 'https://miro.com/app/board/example-claimshield-journeys',
    },
  },
  {
    planId: 'PLAN 03',
    milestoneNumber: 'MILESTONE 03',
    phase: 'BUILD',
    title: 'Developing the Intelligent Solution',
    tagline: 'UI/UX • Workflow • AI • Automation • Prototype',
    accentColor: '#ff8a3d', // Brand orange
    gradient: 'from-brand-orange/30 to-red-900/10',
    keyTopics: [
      'High-fidelity UI/UX design systems and responsive component kits',
      'Voice-assisted FNOL intake & intelligent document OCR extraction',
      'AI damage assessment algorithms and automated liability estimation',
      'Early fraud risk validation and handler decision-support cockpit',
      'Real-time status synchronization across all three stakeholder interfaces',
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
      insights: 'AI provides superpowers to human claims adjusters — turning hours of document decoding into instantaneous, validated insights.',
    },
    resourceLink: {
      label: 'Open Interactive Figma UI/UX Kit',
      url: 'https://www.figma.com/file/example-claimshield-design-system',
    },
  },
  {
    planId: 'PLAN 04',
    milestoneNumber: 'MILESTONE 04',
    phase: 'DELIVER',
    title: 'Refining, Validating & Showcasing',
    tagline: 'Refine • Validate • Document • QA • Showcase',
    accentColor: '#8b5cf6', // Brand purple
    gradient: 'from-brand-purple/30 to-indigo-900/10',
    keyTopics: [
      'End-to-end stress testing and SLA timing verification (~30 min fast-track)',
      'Finalizing enterprise PMO documentation (FRD, FRS, Architecture)',
      'Simulated end-to-end claim journeys from accident to spot payment',
      'High-energy showcase deck, video assets, and interactive demonstrations',
      'Readying ClaimShield+ for real-world insurer adoption and pilot rollout',
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
        'Production-Ready Showcase Presentation & Live Deployed Apps',
        'Complete Evidence Hub (FRD, FRS, BPMN Journeys, UI Kit)',
        'Strategic 3-Horizon Expansion Roadmap (NOW, NEXT, FUTURE)',
      ],
      insights: 'Four weeks of relentless dedication transformed a complex insurance headache into an elegant, scalable, intelligent reality.',
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
  keyTopics: m.keyTopics,
  details: m.details,
}));
