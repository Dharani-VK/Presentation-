import { RoadmapMilestone } from '../types';

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'NOW',
    number: '01',
    stageName: 'CURRENT',
    timeframe: 'CURRENT RELEASE',
    title: 'Core Capabilities & Fast-Track Intake',
    subtitle: 'Automated Authorization & Intelligent Intake',
    tagline: 'Authorization • AI Voice • OCR • Fraud Scoring • Decision Support',
    accentColor: '#20df89', // Emerald Green
    status: 'active',
    items: [
      'Authorization matrix',
      'AI voice and chatbot',
      'Auto and text fill',
      'OCR extraction',
      'Fraud risk scoring',
      'Decision making support',
    ],
    keyCapabilities: [
      {
        title: 'Authorization Matrix & Decision Support',
        description: 'Automated rule-based authorization matrices enabling instant approvals and decision-making support.',
      },
      {
        title: 'AI Voice, Chatbot & OCR Extraction',
        description: 'Multi-modal conversational intake with auto-text fill and sub-second document OCR parsing.',
      },
      {
        title: 'Real-Time Fraud Risk Scoring',
        description: 'Intelligent risk evaluation and anomaly detection scoring at the point of FNOL intake.',
      },
    ],
    businessImpact: 'Delivers touchless first notice of loss (FNOL), instant policy checks, and ~30-minute Fast-Track settlements.',
  },
  {
    id: 'NEXT',
    number: '02',
    stageName: 'UPCOMING',
    timeframe: 'NEAR-TERM HORIZON',
    title: 'Workflow Optimization & Process Expansion',
    subtitle: 'Omni-Channel Communication & Extended Loss Types',
    tagline: 'OCR Enhancements • Omni-Channel Comms • Reporting • Complex Losses',
    accentColor: '#00d9ff', // Electric Cyan
    status: 'upcoming',
    items: [
      'OCR extraction enhancement',
      'Email and SMS notification communication management',
      'Reporting analytics',
      'Workflow enhancements / optimization',
      'Other type of loss process (theft and total loss)',
    ],
    keyCapabilities: [
      {
        title: 'Enhanced Document OCR & Parsing',
        description: 'Deep neural OCR for handwritten estimates, garage bills, police FIR reports, and invoices.',
      },
      {
        title: 'Communication & Workflow Optimization',
        description: 'Automated bi-directional Email/SMS notification triggers and streamlined claims pipeline tracking.',
      },
      {
        title: 'Theft & Total Loss Handling',
        description: 'Expanded specialized workflows for total loss evaluations, salvage management, and theft settlements.',
      },
    ],
    businessImpact: 'Expands straight-through processing to complex claim categories and reduces loss adjustment expenses by 25%.',
  },
  {
    id: 'FUTURE',
    number: '03',
    stageName: 'DESTINATION',
    timeframe: 'LONG-TERM VISION',
    title: 'Predictive Ecosystem & Autonomous Journeys',
    subtitle: 'Generative AI & Universal Partner Integrations',
    tagline: 'Parts Master • Predictive Analysis • End-to-End • Gen-AI • Integrations',
    accentColor: '#8b5cf6', // Violet Purple
    status: 'vision',
    items: [
      'Parts master predictive analysis',
      'Automated end to end journey',
      'Gen AI additional capabilities',
      'Third party integration - brokers, service providers',
    ],
    keyCapabilities: [
      {
        title: 'Parts Master Predictive Analysis',
        description: 'Predictive component wear and tear, OEM live pricing, and automated parts procurement benchmarking.',
      },
      {
        title: 'Generative AI Claims Reasoning',
        description: 'Autonomous conversational claims negotiation and intelligent automated resolution reasoning.',
      },
      {
        title: 'Ecosystem Partner Integrations',
        description: 'Seamless API bridges connecting insurance brokers, towing fleets, survey specialists, and third-party TPAs.',
      },
    ],
    businessImpact: 'Creates a fully self-healing, zero-touch claims ecosystem delivering instant digital resolutions.',
  },
];
