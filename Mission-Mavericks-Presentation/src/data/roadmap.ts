import { RoadmapMilestone } from '../types';

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    id: 'NOW',
    timeframe: 'CURRENT RELEASE (HORIZON 1)',
    title: 'Core Motor OD Ecosystem',
    subtitle: 'Foundation & Fast-Track Automation',
    tagline: 'Motor OD ecosystem • Three journeys • Fast-track • AI + Automation',
    accentColor: '#20df89', // Green
    status: 'active',
    items: [
      'Comprehensive Motor OD end-to-end claims lifecycle',
      '3 unified persona portals (Customer, Repairer, Claims Handler)',
      '~30-Minute Fast-Track automated journey for minor damages',
      'Voice-assisted FNOL intake & intelligent document OCR extraction',
      'Initial AI damage severity classification & automated liability sheet',
    ],
    keyCapabilities: [
      {
        title: '3-Persona Connected Workspace',
        description: 'Synchronous state across customer mobile, repairer garage console, and claims handler dashboard.',
      },
      {
        title: '~30-Minute Fast-Track STP',
        description: 'Straight-Through Processing for minor scratches, minor dents, and windshield claims without human delays.',
      },
      {
        title: 'Multi-Modal Intake',
        description: 'Voice intake, smartphone photo capture, document scanning, and automated policy verification.',
      },
    ],
    businessImpact: 'Reduces minor claim cycle times from 5–7 days to under 30 minutes, freeing 40% of adjuster bandwidth.',
  },
  {
    id: 'NEXT',
    timeframe: 'NEAR-TERM HORIZON (HORIZON 2)',
    title: 'Integrations & Advanced Analytics',
    subtitle: 'Connected Network & Expanded STP',
    tagline: 'Integrations • Analytics • Expanded Straight-Through Processing',
    accentColor: '#00d9ff', // Cyan
    status: 'upcoming',
    items: [
      'Deep Core Insurance system integrations (Guidewire, Duck Creek, Tcs BaNCS)',
      'Live OEM part catalog integration & dynamic garage labour rate benchmarking',
      'Expanded Straight-Through Processing (STP) thresholds up to medium severity',
      'Real-time fraud scoring network with cross-insurer loss intelligence',
      'Comprehensive executive analytics cockpit with loss ratio & SLA heatmaps',
    ],
    keyCapabilities: [
      {
        title: 'Enterprise Core Connectors',
        description: 'Bi-directional webhooks and REST adapters for legacy policy and claims master engines.',
      },
      {
        title: 'Telemetry & IoT Ingestion',
        description: 'Connected vehicle crash telemetry (OBD-II, connected car APIs) for instant automatic FNOL generation.',
      },
      {
        title: 'Dynamic Garage SLA Scoring',
        description: 'Automated garage performance ranking based on turnaround time, customer ratings, and estimate accuracy.',
      },
    ],
    businessImpact: 'Expands straight-through claims volume by 65% while reducing loss adjustment expense (LAE) by 22%.',
  },
  {
    id: 'FUTURE',
    timeframe: 'LONG-TERM VISION (HORIZON 3)',
    title: 'Autonomous & Predictive Claims',
    subtitle: 'Self-Healing Ecosystem & Multi-Line Scale',
    tagline: 'Predictive claims • Advanced AI • Intelligent cross-line automation',
    accentColor: '#8b5cf6', // Purple
    status: 'vision',
    items: [
      'Autonomous drone & satellite imagery analysis for catastrophe (CAT) claims',
      'Predictive component failure and preemptive claim prevention alerts',
      'Cross-line expansion: Health, Property, Commercial Motor, and Marine',
      'Zero-touch automated digital settlement via instant central bank rails',
      'Autonomous conversational claims negotiation agents powered by reasoning AI',
    ],
    keyCapabilities: [
      {
        title: 'Predictive Loss Prevention',
        description: 'Proactive driver hazard alerts and weather-triggered early claim reserves.',
      },
      {
        title: 'Multi-Line Architecture',
        description: 'Unifying motor, health, and property claim lifecycles into a single intelligent automation platform.',
      },
      {
        title: 'Zero-Touch Micro-Settlements',
        description: 'Real-time smart contract / instant payment disbursement on damage detection validation.',
      },
    ],
    businessImpact: 'Transforms insurance from a reactive reimbursement service into a proactive, friction-free protection ecosystem.',
  },
];
