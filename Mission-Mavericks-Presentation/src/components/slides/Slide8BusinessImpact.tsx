import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Briefcase,
  Zap,
  DollarSign,
  Percent,
  Sparkles,
  Gauge,
  Network,
  GitMerge,
  Activity,
  ShieldCheck,
  BarChart3,
  Layers,
  CalendarCheck,
  FileCheck2,
  ShieldAlert,
  LucideIcon,
} from 'lucide-react';

interface MetricItem {
  icon: LucideIcon;
  label: string;
}

interface PillarConfig {
  id: string;
  title: string;
  cardIcon: LucideIcon;
  theme: {
    primary: string; // Hex for inline / custom styling
    secondary: string;
    textPrimary: string;
    borderGlow: string;
    topGradient: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    cardBg: string;
    cardBorder: string;
    cardShadow: string;
    rowBg: string;
    rowBorder: string;
    rowHoverBg: string;
    rowHoverBorder: string;
    rowHoverShadow: string;
    watermarkColor: string;
  };
  watermarkType: 'circular' | 'circuit' | 'governance';
  items: MetricItem[];
  animationInitial: { opacity: number; x?: number; y?: number };
  baseDelay: number;
}

export const Slide8BusinessImpact: React.FC = () => {
  const pillars: PillarConfig[] = [
    {
      id: 'benefits',
      title: 'BUSINESS BENEFITS',
      cardIcon: TrendingUp,
      theme: {
        primary: '#36E5B0',
        secondary: '#10B981',
        textPrimary: 'text-[#36E5B0]',
        borderGlow: 'hover:border-[#36E5B0]/60',
        topGradient: 'from-[#36E5B0] to-[#10B981]',
        badgeBg: 'bg-[#36E5B0]/10',
        badgeBorder: 'border-[#36E5B0]/30',
        badgeText: 'text-[#36E5B0]',
        cardBg: 'bg-[#040f23]/80',
        cardBorder: 'border-[#36E5B0]/25',
        cardShadow: 'hover:shadow-[0_0_35px_rgba(54,229,176,0.18)]',
        rowBg: 'bg-[#071a38]/60',
        rowBorder: 'border-[#173a67]/50',
        rowHoverBg: 'hover:bg-[#0c2f5d]/85',
        rowHoverBorder: 'hover:border-[#36E5B0]/60',
        rowHoverShadow: 'hover:shadow-[0_0_18px_rgba(54,229,176,0.22)]',
        watermarkColor: '#36E5B0',
      },
      watermarkType: 'circular',
      items: [
        { icon: Zap, label: 'Improved TAT & SLA' },
        { icon: TrendingUp, label: 'Higher Team Productivity' },
        { icon: DollarSign, label: 'Reduced Claims Handling Cost' },
        { icon: Percent, label: 'Lower Operational Cost' },
        { icon: Sparkles, label: 'Better Customer Experience' },
        { icon: Gauge, label: 'Accelerated Time-to-Value' },
      ],
      animationInitial: { opacity: 0, x: -40 },
      baseDelay: 0.15,
    },
    {
      id: 'outcomes',
      title: 'BUSINESS OUTCOMES',
      cardIcon: Target,
      theme: {
        primary: '#00D9FF',
        secondary: '#3B82F6',
        textPrimary: 'text-[#00D9FF]',
        borderGlow: 'hover:border-[#00D9FF]/60',
        topGradient: 'from-[#00D9FF] to-[#3B82F6]',
        badgeBg: 'bg-[#00D9FF]/10',
        badgeBorder: 'border-[#00D9FF]/30',
        badgeText: 'text-[#00D9FF]',
        cardBg: 'bg-[#040f23]/80',
        cardBorder: 'border-[#00D9FF]/25',
        cardShadow: 'hover:shadow-[0_0_35px_rgba(0,217,255,0.18)]',
        rowBg: 'bg-[#071a38]/60',
        rowBorder: 'border-[#173a67]/50',
        rowHoverBg: 'hover:bg-[#0c2f5d]/85',
        rowHoverBorder: 'hover:border-[#00D9FF]/60',
        rowHoverShadow: 'hover:shadow-[0_0_18px_rgba(0,217,255,0.22)]',
        watermarkColor: '#00D9FF',
      },
      watermarkType: 'circuit',
      items: [
        { icon: Network, label: 'Seamless Stakeholder Connectivity' },
        { icon: GitMerge, label: 'Better Process Control' },
        { icon: Activity, label: 'Real-time Visibility & Insights' },
        { icon: ShieldCheck, label: 'Improved Quality & Compliance' },
        { icon: BarChart3, label: 'Data-Driven Decision Making' },
        { icon: Layers, label: 'Scalable & Future-Ready Platform' },
      ],
      animationInitial: { opacity: 0, y: 40 },
      baseDelay: 0.25,
    },
    {
      id: 'governance',
      title: 'PMO GOVERNANCE',
      cardIcon: Briefcase,
      theme: {
        primary: '#8B5CF6',
        secondary: '#6366F1',
        textPrimary: 'text-[#8B5CF6]',
        borderGlow: 'hover:border-[#8B5CF6]/60',
        topGradient: 'from-[#8B5CF6] to-[#6366F1]',
        badgeBg: 'bg-[#8B5CF6]/10',
        badgeBorder: 'border-[#8B5CF6]/30',
        badgeText: 'text-[#8B5CF6]',
        cardBg: 'bg-[#040f23]/80',
        cardBorder: 'border-[#8B5CF6]/25',
        cardShadow: 'hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]',
        rowBg: 'bg-[#071a38]/60',
        rowBorder: 'border-[#173a67]/50',
        rowHoverBg: 'hover:bg-[#0c2f5d]/85',
        rowHoverBorder: 'hover:border-[#8B5CF6]/60',
        rowHoverShadow: 'hover:shadow-[0_0_18px_rgba(139,92,246,0.22)]',
        watermarkColor: '#8B5CF6',
      },
      watermarkType: 'governance',
      items: [
        { icon: Briefcase, label: 'Project Planning & Tracking' },
        { icon: CalendarCheck, label: 'Phased Milestone & Sprint Planning' },
        { icon: FileCheck2, label: 'Scope & Requirement Management' },
        { icon: Layers, label: 'Documentation & Standards' },
        { icon: ShieldAlert, label: 'Risk, Quality & Stage-Gate Governance' },
        { icon: Gauge, label: 'KPI Tracking & Value Realization' },
      ],
      animationInitial: { opacity: 0, x: 40 },
      baseDelay: 0.35,
    },
  ];

  // Subtle Watermark Graphic Renderer
  const renderWatermark = (type: 'circular' | 'circuit' | 'governance', color: string) => {
    switch (type) {
      case 'circuit':
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 500"
            fill="none"
          >
            <path
              d="M30 40 H180 V120 H360 V220 H200 V300 H320 V440"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M70 180 V260 H150 V380 H280"
              stroke={color}
              strokeWidth="1.5"
            />
            <circle cx="180" cy="120" r="5" fill={color} />
            <circle cx="360" cy="220" r="6" fill={color} />
            <circle cx="200" cy="300" r="5" fill={color} />
            <circle cx="150" cy="380" r="4" fill={color} />
            <circle cx="280" cy="380" r="5" fill={color} />
            <rect x="25" y="35" width="10" height="10" stroke={color} strokeWidth="1.5" fill="none" />
            <rect x="315" y="435" width="10" height="10" stroke={color} strokeWidth="1.5" fill="none" />
          </svg>
        );
      case 'governance':
      case 'circular':
      default:
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 500"
            fill="none"
          >
            <circle cx="320" cy="100" r="180" stroke={color} strokeWidth="1.5" strokeDasharray="8 8" />
            <circle cx="320" cy="100" r="120" stroke={color} strokeWidth="1.5" />
            <circle cx="320" cy="100" r="60" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="80" cy="420" r="150" stroke={color} strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="80" cy="420" r="90" stroke={color} strokeWidth="1.5" />
            <line x1="140" y1="100" x2="380" y2="100" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
            <line x1="320" y1="0" x2="320" y2="280" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-[1480px] h-[calc(100vh-8.2rem)] min-h-[580px] max-h-[820px] mx-auto flex flex-col justify-between items-center px-3 sm:px-6 lg:px-8 py-2 sm:py-3 select-none">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[12%] w-[420px] h-[320px] rounded-full bg-[#36E5B0]/10 blur-[130px]" />
        <div className="absolute top-[18%] left-[45%] w-[450px] h-[340px] rounded-full bg-[#00D9FF]/10 blur-[140px]" />
        <div className="absolute top-[12%] right-[10%] w-[420px] h-[320px] rounded-full bg-[#8B5CF6]/12 blur-[130px]" />
      </div>

      {/* 1. Slide Header & Metadata */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center flex flex-col items-center shrink-0 mb-3 lg:mb-4"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black font-display tracking-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] flex items-center justify-center gap-2.5 flex-wrap">
          <span>BUSINESS IMPACT</span>
          <span className="bg-gradient-to-r from-[#00D9FF] via-[#5B92FA] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.4)]">
            &amp; PMO
          </span>
        </h1>
        <p className="text-[11px] sm:text-xs lg:text-[13px] font-bold tracking-widest text-[#94a3b8] font-display uppercase mt-1.5 max-w-4xl px-4 leading-relaxed">
          Delivering quantifiable operational benefits, connected stakeholder outcomes, and disciplined stage-gate PMO governance.
        </p>
      </motion.div>

      {/* 2. Symmetrical 3-Column Glass Cards Grid */}
      <div className="relative z-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 min-h-0">
        {pillars.map((pillar) => {
          const HeaderIcon = pillar.cardIcon;

          return (
            <motion.div
              key={pillar.id}
              initial={pillar.animationInitial}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.65,
                delay: pillar.baseDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl lg:rounded-3xl ${pillar.theme.cardBg} border ${pillar.theme.cardBorder} ${pillar.theme.borderGlow} backdrop-blur-2xl shadow-2xl ${pillar.theme.cardShadow} transition-all duration-300 flex flex-col p-4 sm:p-5 lg:p-6 overflow-hidden`}
            >
              {/* 3px Top Gradient Highlight Bar */}
              <div
                className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${pillar.theme.topGradient} shadow-sm`}
              />

              {/* Watermark Graphic Layer */}
              {renderWatermark(pillar.watermarkType, pillar.theme.watermarkColor)}

              {/* Card Header */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4 shrink-0 pb-3 border-b border-white/[0.07]">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${pillar.theme.badgeBg} border ${pillar.theme.badgeBorder} ${pillar.theme.badgeText} shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  <HeaderIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <h2
                  className={`text-base sm:text-lg lg:text-xl font-black font-display tracking-wider ${pillar.theme.textPrimary} uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]`}
                >
                  {pillar.title}
                </h2>
              </div>

              {/* 6 Structured Metric Rows (Perfect Row-by-Row Horizontal Alignment) */}
              <div className="relative z-10 flex-1 grid grid-rows-6 gap-2 sm:gap-2.5 min-h-0">
                {pillar.items.map((item, rowIdx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={rowIdx}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: pillar.baseDelay + 0.15 + rowIdx * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        x: 4,
                        transition: { duration: 0.18 },
                      }}
                      className={`row-item group/row flex items-center gap-3 sm:gap-3.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl ${pillar.theme.rowBg} border ${pillar.theme.rowBorder} ${pillar.theme.rowHoverBg} ${pillar.theme.rowHoverBorder} ${pillar.theme.rowHoverShadow} backdrop-blur-md transition-all duration-200 cursor-default`}
                    >
                      {/* Left Square-Rounded Icon Badge */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center ${pillar.theme.badgeBg} border ${pillar.theme.badgeBorder} ${pillar.theme.badgeText} shrink-0 group-hover/row:scale-110 group-hover/row:border-opacity-80 transition-all duration-200`}
                      >
                        <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Right Item Label */}
                      <span className="text-xs sm:text-[13px] lg:text-sm font-bold font-display text-white/95 group-hover/row:text-white tracking-wide truncate transition-colors duration-200">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
