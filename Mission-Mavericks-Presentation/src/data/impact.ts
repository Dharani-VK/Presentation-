export interface ImpactSection {
  id: 'benefits' | 'outcomes' | 'pmo';
  title: string;
  iconName: string;
  themeColor: 'green' | 'cyan' | 'purple';
  points: string[];
}

export const IMPACT_SECTIONS: ImpactSection[] = [
  {
    id: 'benefits',
    title: 'Business Benefits',
    iconName: 'TrendingUp',
    themeColor: 'green',
    points: [
      'Improved TAT & SLA',
      'Higher Team Productivity',
      'Reduced Claims Handling Cost',
      'Lower Operational Cost',
      'Better Customer Experience',
    ],
  },
  {
    id: 'outcomes',
    title: 'Business Outcomes',
    iconName: 'Target',
    themeColor: 'cyan',
    points: [
      'Seamless Stakeholder Connectivity',
      'Better Process Control',
      'Real-time Visibility & Insights',
      'Improved Quality & Compliance',
      'Scalable & Future-Ready Platform',
    ],
  },
  {
    id: 'pmo',
    title: 'PMO',
    iconName: 'Briefcase',
    themeColor: 'purple',
    points: [
      'Phased Milestone & Sprint Planning',
      'Scope & Requirement Management',
      'Risk, Quality & Stage-Gate Governance',
      'KPI Tracking & Value Realization',
    ],
  },
];
