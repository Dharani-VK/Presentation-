export interface TimelineWeek {
  weekNumber: string;
  phase: string;
  title: string;
  tagline: string;
  accentColor: string;
  keyTopics: string[];
  details: {
    domainLearning: string[];
    pmoDiscipline: string[];
    deliverables: string[];
    insights: string;
  };
}

export interface RoadmapMilestone {
  id: 'NOW' | 'NEXT' | 'FUTURE';
  timeframe: string;
  title: string;
  subtitle: string;
  tagline: string;
  accentColor: string;
  status: 'active' | 'upcoming' | 'vision';
  items: string[];
  keyCapabilities: {
    title: string;
    description: string;
  }[];
  businessImpact: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  category: 'FRD' | 'FRS' | 'Process' | 'UI/UX' | 'Videos' | 'Gallery';
  icon: string;
  description: string;
  actionLabel: string;
  type: 'document' | 'modal-video' | 'gallery' | 'link';
  url: string;
  previewImage?: string;
  badge?: string;
}

export interface JourneyStep {
  id: string;
  label: string;
  sublabel?: string;
  highlight?: boolean;
  icon?: string;
}

export interface EcosystemJourney {
  id: 'customer' | 'repairer' | 'handler';
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  summary: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  flowSteps: JourneyStep[];
  frictionSolved: string;
}
