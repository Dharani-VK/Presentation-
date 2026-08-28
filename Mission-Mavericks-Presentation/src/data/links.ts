import { EvidenceItem, EcosystemJourney } from '../types';

/**
 * Business-configurable application launch URLs.
 * Update these links with your deployed application endpoints or staging environments.
 */
export const APPLICATION_LINKS = {
  // Live deployed portals
  customerPortal: 'https://claimshield-customer.demo.app',
  repairerPortal: 'https://claimshield-repairer.demo.app',
  claimsHandlerPortal: 'https://claimshield-handler.demo.app',
  
  // Slide 1 Hero Video URL — local project video served from public/video/
  heroOpeningVideoUrl: '/video/MicrosoftTeams-video.mp4',
  heroVideoPoster: '',
  
  // Fast-track primary live application URL
  liveAppShowcaseUrl: 'https://claimshield-plus.demo.app',
};

/**
 * Evidence Hub items with configurable document links, videos, and galleries.
 */
export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'frd',
    title: 'FRD — Functional Requirements Document',
    category: 'FRD',
    icon: 'FileText',
    description: 'Comprehensive business problem definition, stakeholder scope, regulatory matrix, and complete functional capability specifications.',
    actionLabel: 'Open Project Document →',
    type: 'document',
    url: 'https://docs.google.com/document/d/example-claimshield-frd',
    badge: 'v2.4 Final Approved',
  },
  {
    id: 'frs',
    title: 'FRS — Functional Requirements Specification',
    category: 'FRS',
    icon: 'FileCode2',
    description: 'Detailed system schemas, REST API contracts, OCR extraction mapping, decision logic tables, and state-machine transitions.',
    actionLabel: 'Open Project Document →',
    type: 'document',
    url: 'https://docs.google.com/document/d/example-claimshield-frs',
    badge: 'API & Data Contract',
  },
  {
    id: 'process',
    title: 'Process & Journey Blueprints',
    category: 'Process',
    icon: 'GitFork',
    description: 'BPMN 2.0 process models, swimlane interaction flows for Customer/Repairer/Handler, and Fast-Track Straight-Through Processing rules.',
    actionLabel: 'View Process Artefacts →',
    type: 'document',
    url: 'https://miro.com/app/board/example-claimshield-journeys',
    badge: 'BPMN 2.0 Swimlanes',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design System & Prototypes',
    category: 'UI/UX',
    icon: 'Palette',
    description: 'High-fidelity Figma interactive prototypes for Customer Mobile PWA, Garage Repairer Tablet Console, and Claims Handler Cockpit.',
    actionLabel: 'View Designs & Prototypes →',
    type: 'document',
    url: 'https://www.figma.com/file/example-claimshield-design-system',
    badge: 'Figma Design Tokens',
  },
  {
    id: 'videos',
    title: 'Showcase Video Demonstrations',
    category: 'Videos',
    icon: 'Film',
    description: 'Recorded walk-throughs demonstrating ~30-min Fast-Track spot settlement, voice intimation, and garage estimate validation.',
    actionLabel: 'Play Project Videos →',
    type: 'modal-video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    badge: '4 HD Walkthroughs',
  },
  {
    id: 'gallery',
    title: 'Program Milestone Gallery',
    category: 'Gallery',
    icon: 'Images',
    description: 'Photographs, collaborative workshop snapshots, Architecture Review Board milestones, and sprint showcase retrospectives.',
    actionLabel: 'View Photographs →',
    type: 'gallery',
    url: '#gallery',
    badge: '4-Week Photo Archive',
  },
];

/**
 * Video showcase playlist for the Evidence Hub video modal player
 */
export const SHOWCASE_VIDEOS = [
  {
    id: 'video-1',
    title: 'ClaimShield+ End-to-End Walkthrough',
    duration: '03:45',
    category: 'Full Solution',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    description: 'A complete run-through of a minor accident claim resolved in under 30 minutes with spot digital settlement.',
  },
  {
    id: 'video-2',
    title: 'Voice-Assisted FNOL Intake & OCR Extraction',
    duration: '02:15',
    category: 'Customer Feature',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    description: 'Demonstrating hands-free multilingual intimation and instantaneous DL/RC/Policy document parsing.',
  },
  {
    id: 'video-3',
    title: 'Garage Repairer Estimate & Liability Sync',
    duration: '02:30',
    category: 'Repairer Feature',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80',
    description: 'How network repairers upload supplementary photos and receive instant automated assessment approvals.',
  },
  {
    id: 'video-4',
    title: 'Claims Handler AI Cockpit & Fraud Signals',
    duration: '02:50',
    category: 'Handler Feature',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    description: 'Claims adjuster decision cockpit showing damage heatmaps, fraud score triggers, and instant settlement buttons.',
  },
];

/**
 * Gallery media items for Evidence Hub photo viewer
 */
export const GALLERY_PHOTOS = [
  {
    id: 'photo-1',
    title: 'Week 01: Insurance Domain Immersion',
    phase: 'Week 01 — Understand',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80',
    caption: 'Deconstructing Motor OD claims lifecycles and IRDAI regulatory guidelines with team coaches and industry mentors.',
  },
  {
    id: 'photo-2',
    title: 'Week 02: Architecture & BPMN Modeling',
    phase: 'Week 02 — Design',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80',
    caption: 'Mapping 3-persona swimlanes, straight-through processing logic, and ~30-min Fast-Track eligibility rules.',
  },
  {
    id: 'photo-3',
    title: 'Week 03: AI Engine & Prototype Integration',
    phase: 'Week 03 — Build',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&auto=format&fit=crop&q=80',
    caption: 'Developing computer vision damage assessment, OCR pipelines, and responsive multi-persona web consoles.',
  },
  {
    id: 'photo-4',
    title: 'Week 04: Final Retrospective & Showcase Ready',
    phase: 'Week 04 — Deliver',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1000&auto=format&fit=crop&q=80',
    caption: 'Completing end-to-end SLA stress tests and readying ClaimShield+ for executive presentation delivery.',
  },
  {
    id: 'photo-5',
    title: 'Mission Mavericks: Unified Collaboration',
    phase: 'Team Milestone',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80',
    caption: '11 team members united by one vision, one voice, and one victory.',
  },
  {
    id: 'photo-6',
    title: 'Live Claim Simulation & Validation Lab',
    phase: 'QA & Testing',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80',
    caption: 'Simulating live accident damage triage and verifying straight-through payout rails.',
  },
];

/**
 * Ecosystem journeys data for Slide 6
 */
export const ECOSYSTEM_JOURNEYS: EcosystemJourney[] = [
  {
    id: 'customer',
    title: 'Customer Journey',
    subtitle: 'A simpler journey, when it can be.',
    iconName: 'User',
    color: '#00d9ff', // Cyan
    summary: 'Intuitive mobile-first self-service for stress-free intimation, real-time tracking, voice guidance, and instant fast-track spot payouts.',
    features: [
      {
        title: 'Voice-Assisted FNOL',
        description: 'Multi-lingual voice guidance allows effortless claim intimation right from the accident spot without complex form filling.',
        icon: 'Mic',
      },
      {
        title: '30-Min Fast-Track',
        description: 'Instant AI triage for eligible minor scratches, minor dents, and windshield claims directly into spot payment.',
        icon: 'Zap',
      },
      {
        title: 'Full Status Transparency',
        description: 'Real-time stage tracking with instant WhatsApp/SMS milestones and zero chasing for claim updates.',
        icon: 'Eye',
      },
    ],
    flowSteps: [
      { id: 'c1', label: 'FNOL Intake', sublabel: 'Voice / Photo capture' },
      { id: 'c2', label: 'Auto Validate', sublabel: 'Policy & DL verification' },
      { id: 'c3', label: 'AI Damage Assess', sublabel: 'Severity classification' },
      { id: 'c4', label: 'Live Tracking', sublabel: 'Real-time milestone visibility' },
      { id: 'c5', label: 'Spot Settlement', sublabel: 'Direct bank transfer', highlight: true },
    ],
    frictionSolved: 'Eliminates paperwork confusion, lengthy call-center queues, and anxiety over claim progress.',
  },
  {
    id: 'repairer',
    title: 'Repairer Journey',
    subtitle: 'Less chasing. More visibility.',
    iconName: 'Wrench',
    color: '#20df89', // Green
    summary: 'Dedicated digital workspace for network garages to intimate intake, upload supplementary photos, track survey approvals, and submit invoices.',
    features: [
      {
        title: 'Instant Supplementary Upload',
        description: 'High-res image and video uploads directly from the garage bay with automated timestamping.',
        icon: 'UploadCloud',
      },
      {
        title: 'Digital Liability Sheets',
        description: 'Transparent parts vs labour liability breakdowns synced directly with insurer schedules.',
        icon: 'FileCheck',
      },
      {
        title: 'Real-Time Settlement Tracking',
        description: 'Cashless payment tracking and transparent invoice sign-offs without manual back-and-forth phone calls.',
        icon: 'CreditCard',
      },
    ],
    flowSteps: [
      { id: 'r1', label: 'Intimate Intake', sublabel: 'Vehicle arrives at garage', highlight: true },
      { id: 'r2', label: 'Upload Photos', sublabel: 'Damaged parts & estimate' },
      { id: 'r3', label: 'Survey Sync', sublabel: 'Virtual or physical surveyor' },
      { id: 'r4', label: 'Approval Memo', sublabel: 'Approved work scope' },
      { id: 'r5', label: 'Digital Invoice', sublabel: 'Final bill submission' },
      { id: 'r6', label: 'Settlement', sublabel: 'Cashless garage payout', highlight: true },
    ],
    frictionSolved: 'Eliminates endless surveyor follow-ups, dispute-prone physical estimate sheets, and delayed garage payment cycles.',
  },
  {
    id: 'handler',
    title: 'Claims Handler Journey',
    subtitle: 'Less repetitive work. Better decision support.',
    iconName: 'ShieldAlert',
    color: '#8b5cf6', // Purple
    summary: 'An intelligent unified decision cockpit equipped with AI document extraction, fraud risk scoring, and auto-allocated workload queues.',
    features: [
      {
        title: 'Smart Auto Allocation',
        description: 'Claims automatically routed based on adjuster specialization, geography, and current workload capacity.',
        icon: 'Layers',
      },
      {
        title: 'Document OCR Intelligence',
        description: 'Instant text extraction and validation from driving licences, RC books, repair estimates, and FIR filings.',
        icon: 'FileSearch',
      },
      {
        title: 'AI Fraud Scoring Signals',
        description: 'Early risk anomaly flags analyzing repeat claimant patterns, suspicious damages, and policy timing discrepancies.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Human-in-the-Loop Cockpit',
        description: 'One-click decision support that empowers adjusters to approve standard items while focusing on complex exceptions.',
        icon: 'CheckCircle2',
      },
    ],
    flowSteps: [
      { id: 'h1', label: 'Auto Allocation', sublabel: 'Rule & capacity routing' },
      { id: 'h2', label: 'OCR Validation', sublabel: 'DL / RC / Policy extraction' },
      { id: 'h3', label: 'AI Damage Triage', sublabel: 'Parts & labour estimate' },
      { id: 'h4', label: 'Fraud Scoring', sublabel: 'Risk signal evaluation' },
      { id: 'h5', label: 'Decision Review', sublabel: 'One-click adjuster approval' },
      { id: 'h6', label: 'Disbursement', sublabel: 'Automated settlement order', highlight: true },
    ],
    frictionSolved: 'Eliminates tedious manual typing, disparate legacy system lookups, and human error in damage estimation.',
  },
];
