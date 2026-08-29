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
  Network,
  GitMerge,
  Activity,
  ShieldCheck,
  Layers,
  CalendarCheck,
  FileCheck2,
  ShieldAlert,
  Gauge,
  BarChart3,
} from 'lucide-react';

export const Slide8EvidenceHub: React.FC = () => {
  const businessBenefits = [
    { id: 'b1', title: 'Improved TAT & SLA', icon: Zap },
    { id: 'b2', title: 'Higher Team Productivity', icon: TrendingUp },
    { id: 'b3', title: 'Reduced Claims Handling Cost', icon: DollarSign },
    { id: 'b4', title: 'Lower Operational Cost', icon: Percent },
    { id: 'b5', title: 'Better Customer Experience', icon: Sparkles },
    { id: 'b6', title: 'Accelerated Time-to-Value', icon: Gauge },
  ];

  const businessOutcomes = [
    { id: 'o1', title: 'Seamless Stakeholder Connectivity', icon: Network },
    { id: 'o2', title: 'Better Process Control', icon: GitMerge },
    { id: 'o3', title: 'Real-time Visibility & Insights', icon: Activity },
    { id: 'o4', title: 'Improved Quality & Compliance', icon: ShieldCheck },
    { id: 'o5', title: 'Data-Driven Decision Making', icon: BarChart3 },
    { id: 'o6', title: 'Scalable & Future-Ready Platform', icon: Layers },
  ];

  const pmoItems = [
    { id: 'p1', title: 'Project Planning & Tracking', icon: Briefcase },
    { id: 'p2', title: 'Phased Milestone & Sprint Planning', icon: CalendarCheck },
    { id: 'p3', title: 'Scope & Requirement Management', icon: FileCheck2 },
    { id: 'p4', title: 'Documentation & Standards', icon: Layers },
    { id: 'p5', title: 'Risk, Quality & Stage-Gate Governance', icon: ShieldAlert },
    { id: 'p6', title: 'KPI Tracking & Value Realization', icon: Gauge },
  ];

  // Base constants from user palette
  const BG_NAVY = '#07152E';
  const TEXT_SLATE = '#94A3B8';

  // Card 1 Extended Palette (Mint & Emerald)
  const C1_PRIMARY = '#36E5B0';
  const C1_SECONDARY = '#10B981';

  // Card 2 Extended Palette (Cyan & Royal Blue)
  const C2_PRIMARY = '#00D9FF';
  const C2_SECONDARY = '#3B82F6';

  // Card 3 Extended Palette (Neon Violet & Indigo)
  const C3_PRIMARY = '#8B5CF6';
  const C3_SECONDARY = '#6366F1';

  return (
    <div className="w-full max-w-[1480px] mx-auto h-[calc(100vh-8.2rem)] flex flex-col justify-between py-1 px-2 sm:px-4 select-none relative overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-aurora-mesh opacity-30 pointer-events-none -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-gradient-to-b from-[#00D9FF]/10 to-transparent rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* ── Slide Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-2 shrink-0"
      >
        <div
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest mb-1 shadow-lg"
          style={{ background: BG_NAVY, borderColor: 'rgba(148,163,184,0.3)', color: TEXT_SLATE }}
        >
          <BarChart3 className="w-3 h-3" style={{ color: C1_PRIMARY }} />
          <span>ENTERPRISE VALUE ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black font-display tracking-tight text-white uppercase leading-tight">
          BUSINESS IMPACT{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${C2_PRIMARY}, ${C3_PRIMARY})` }}>
            & PMO
          </span>
        </h2>
        <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-display max-w-2xl mx-auto mt-0.5" style={{ color: TEXT_SLATE }}>
          Delivering quantifiable operational benefits, connected stakeholder outcomes, and disciplined stage-gate PMO governance.
        </p>
      </motion.div>

      {/* ── Three Cards with Symmetrical Rows & Columns ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 xl:gap-4 items-stretch flex-1 min-h-0">

        {/* ════════════════════════════════════════════════════════
            CARD 1 — BUSINESS BENEFITS (MINT / EMERALD)
           ════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
          style={{
            background: `linear-gradient(160deg, rgba(54, 229, 176, 0.06) 0%, rgba(7, 21, 46, 0.6) 100%)`,
            backdropFilter: 'blur(24px)',
            border: `1.5px solid rgba(54, 229, 176, 0.25)`,
            boxShadow: `0 8px 32px rgba(54, 229, 176, 0.08), inset 0 1px 0 rgba(54, 229, 176, 0.1)`,
          }}
        >
          <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C1_SECONDARY}, ${C1_PRIMARY}, ${C1_SECONDARY}, ${BG_NAVY})` }} />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <circle cx="110%" cy="110%" r="140" stroke={C1_PRIMARY} strokeWidth="1" fill="none" />
            <circle cx="110%" cy="110%" r="100" stroke={C1_PRIMARY} strokeWidth="1" fill="none" />
            <circle cx="110%" cy="110%" r="60" stroke={C1_PRIMARY} strokeWidth="1" fill="none" />
          </svg>

          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[50px] pointer-events-none" style={{ background: 'rgba(54, 229, 176, 0.12)' }} />

          <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
            {/* Header */}
            <div className="flex items-center gap-2.5 pb-2 mb-2 shrink-0" style={{ borderBottom: '1px solid rgba(54, 229, 176, 0.15)' }}>
              <div
                className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: 'rgba(54, 229, 176, 0.1)', border: `1px solid rgba(54, 229, 176, 0.3)`, color: C1_PRIMARY, boxShadow: `0 0 15px rgba(54, 229, 176, 0.2)` }}
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase" style={{ color: C1_PRIMARY }}>
                BUSINESS BENEFITS
              </h3>
            </div>

            {/* 6 Equal Rows Grid */}
            <div className="grid grid-rows-6 gap-2 flex-1 min-h-0">
              {businessBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.15 + idx * 0.04 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(54, 229, 176, 0.03)', border: '1px solid rgba(54, 229, 176, 0.12)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(54, 229, 176, 0.09)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(54, 229, 176, 0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(54, 229, 176, 0.03)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(54, 229, 176, 0.12)';
                    }}
                  >
                    <div className="p-1.5 rounded-lg shrink-0" style={{ background: 'rgba(54, 229, 176, 0.1)', border: '1px solid rgba(54, 229, 176, 0.25)', color: C1_SECONDARY }}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white flex-1">{item.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════
            CARD 2 — BUSINESS OUTCOMES (CYAN / BLUE)
           ════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
          style={{
            background: `linear-gradient(160deg, rgba(0, 217, 255, 0.06) 0%, rgba(7, 21, 46, 0.6) 100%)`,
            backdropFilter: 'blur(24px)',
            border: `1.5px solid rgba(0, 217, 255, 0.25)`,
            boxShadow: `0 8px 32px rgba(0, 217, 255, 0.08), inset 0 1px 0 rgba(0, 217, 255, 0.1)`,
          }}
        >
          <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C2_SECONDARY}, ${C2_PRIMARY}, ${C2_SECONDARY}, ${BG_NAVY})` }} />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit2" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M10 10 H25 V25 H40" stroke={C2_PRIMARY} strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="2" fill={C2_PRIMARY} />
                <circle cx="40" cy="25" r="2" fill={C2_PRIMARY} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit2)" />
          </svg>

          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-44 h-24 rounded-full blur-[45px] pointer-events-none" style={{ background: 'rgba(0, 217, 255, 0.15)' }} />

          <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
            {/* Header */}
            <div className="flex items-center gap-2.5 pb-2 mb-2 shrink-0" style={{ borderBottom: '1px solid rgba(0, 217, 255, 0.15)' }}>
              <div
                className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: 'rgba(0, 217, 255, 0.1)', border: `1px solid rgba(0, 217, 255, 0.3)`, color: C2_PRIMARY, boxShadow: `0 0 15px rgba(0, 217, 255, 0.2)` }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase" style={{ color: C2_PRIMARY }}>
                BUSINESS OUTCOMES
              </h3>
            </div>

            {/* 6 Equal Rows Grid */}
            <div className="grid grid-rows-6 gap-2 flex-1 min-h-0">
              {businessOutcomes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.2 + idx * 0.04 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(0, 217, 255, 0.03)', border: '1px solid rgba(0, 217, 255, 0.12)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0, 217, 255, 0.09)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(0, 217, 255, 0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0, 217, 255, 0.03)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(0, 217, 255, 0.12)';
                    }}
                  >
                    <div className="p-1.5 rounded-lg shrink-0" style={{ background: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.25)', color: C2_SECONDARY }}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white flex-1">{item.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════
            CARD 3 — PMO (VIOLET / INDIGO)
           ════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
          style={{
            background: `linear-gradient(160deg, rgba(139, 92, 246, 0.06) 0%, rgba(7, 21, 46, 0.6) 100%)`,
            backdropFilter: 'blur(24px)',
            border: `1.5px solid rgba(139, 92, 246, 0.25)`,
            boxShadow: `0 8px 32px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(139, 92, 246, 0.1)`,
          }}
        >
          <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C3_SECONDARY}, ${C3_PRIMARY}, ${C3_SECONDARY}, ${BG_NAVY})` }} />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <circle cx="110%" cy="110%" r="140" stroke={C3_PRIMARY} strokeWidth="1" fill="none" />
            <circle cx="110%" cy="110%" r="100" stroke={C3_PRIMARY} strokeWidth="1" fill="none" />
            <circle cx="110%" cy="110%" r="60" stroke={C3_PRIMARY} strokeWidth="1" fill="none" />
          </svg>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[50px] pointer-events-none" style={{ background: 'rgba(139, 92, 246, 0.15)' }} />

          <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
            {/* Header */}
            <div className="flex items-center gap-2.5 pb-2 mb-2 shrink-0" style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.15)' }}>
              <div
                className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                style={{ background: 'rgba(139, 92, 246, 0.1)', border: `1px solid rgba(139, 92, 246, 0.3)`, color: C3_PRIMARY, boxShadow: `0 0 15px rgba(139, 92, 246, 0.2)` }}
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase" style={{ color: C3_PRIMARY }}>
                PMO GOVERNANCE
              </h3>
            </div>

            {/* 6 Equal Rows Grid */}
            <div className="grid grid-rows-6 gap-2 flex-1 min-h-0">
              {pmoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.25 + idx * 0.04 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(139, 92, 246, 0.03)', border: '1px solid rgba(139, 92, 246, 0.12)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(139, 92, 246, 0.09)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(139, 92, 246, 0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(139, 92, 246, 0.03)';
                      (e.currentTarget as HTMLElement).style.border = '1px solid rgba(139, 92, 246, 0.12)';
                    }}
                  >
                    <div className="p-1.5 rounded-lg shrink-0" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.25)', color: C3_SECONDARY }}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white flex-1">{item.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
};
