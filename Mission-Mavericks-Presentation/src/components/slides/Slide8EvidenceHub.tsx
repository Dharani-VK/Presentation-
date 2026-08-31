import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
  X,
} from 'lucide-react';

interface ImpactItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  details: {
    description: string;
    metrics: string;
    governance: string;
  };
}

export const Slide8EvidenceHub: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'benefits' | 'outcomes' | 'pmo'>('all');
  const [selectedItem, setSelectedItem] = useState<ImpactItem | null>(null);

  // Executive Top KPI Highlights
  const topMetrics = [
    {
      id: 'm1',
      label: 'SLA / TAT Reduction',
      value: '-70%',
      subtext: '7 Days ➔ ~30 Mins STP',
      icon: Zap,
      color: '#36E5B0',
      bgGlow: 'rgba(54, 229, 176, 0.15)',
    },
    {
      id: 'm2',
      label: 'Team Capacity Boost',
      value: '+45%',
      subtext: 'Automated triage & routing',
      icon: TrendingUp,
      color: '#00D9FF',
      bgGlow: 'rgba(0, 217, 255, 0.15)',
    },
    {
      id: 'm3',
      label: 'Claims Cost Reduction',
      value: '-35%',
      subtext: 'Leakage prevention & ops save',
      icon: DollarSign,
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
    },
    {
      id: 'm4',
      label: 'PMO Stage-Gate Adherence',
      value: '100%',
      subtext: 'Zero SLA drift & full compliance',
      icon: ShieldCheck,
      color: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.15)',
    },
  ];

  // Card 1: Business Benefits
  const businessBenefits: ImpactItem[] = [
    {
      id: 'b1',
      title: 'Improved TAT & SLA',
      subtitle: 'Instant straight-through motor claims processing',
      badge: '-70% TAT',
      icon: Zap,
      details: {
        description: 'End-to-end cognitive decision pipeline shortens claim intake and assessment from 7 days down to sub-30 minutes.',
        metrics: '70% reduction in turnaround time; 95% first-touch resolution on minor claims.',
        governance: 'Continuous SLA monitoring with real-time exception escalations.',
      },
    },
    {
      id: 'b2',
      title: 'Higher Team Productivity',
      subtitle: 'Automated triage frees adjusters for complex cases',
      badge: '+45% Output',
      icon: TrendingUp,
      details: {
        description: 'Robotic triage and automated document OCR eliminate repetitive manual data entry, boosting surveyor capacity.',
        metrics: '45% increase in claims processed per adjuster daily.',
        governance: 'Sprint-level capacity tracking and role-based operational dashboards.',
      },
    },
    {
      id: 'b3',
      title: 'Reduced Claims Handling Cost',
      subtitle: 'Eliminate manual surveyor travel & paper friction',
      badge: '-35% Cost',
      icon: DollarSign,
      details: {
        description: 'Virtual inspection and instant damage scoring drastically curtail surveyor logistics costs and processing overhead.',
        metrics: '35% reduction in average handling cost per claim.',
        governance: 'Financial audit trails and stage-gate cost variance monitoring.',
      },
    },
    {
      id: 'b4',
      title: 'Lower Operational Cost',
      subtitle: 'Cloud-native digital workflows & serverless scale',
      badge: '-40% OPEX',
      icon: Percent,
      details: {
        description: 'Eliminates paper dependencies, physical archival expenses, and fragmented legacy tool subscriptions.',
        metrics: '40% reduction in IT and operational maintenance expenditures.',
        governance: 'Resource utilization telemetry and cloud FinOps reviews.',
      },
    },
    {
      id: 'b5',
      title: 'Better Customer Experience',
      subtitle: 'Transparent real-time tracking & instant approvals',
      badge: '4.8★ CSAT',
      icon: Sparkles,
      details: {
        description: 'Omnichannel claimant portal with live WhatsApp/SMS updates, zero paperwork hassle, and fast settlement payouts.',
        metrics: 'CSAT elevated to 4.8/5.0; customer retention increased by 28%.',
        governance: 'Voice of Customer (VoC) feedback loops integrated into PMO retrospectives.',
      },
    },
    {
      id: 'b6',
      title: 'Accelerated Time-to-Value',
      subtitle: 'Phased modular rollouts with rapid milestone wins',
      badge: '3x Faster TTV',
      icon: Gauge,
      details: {
        description: 'Modular micro-frontend architecture enables immediate adoption of FNOL and AI damage modules ahead of full ERP migration.',
        metrics: 'Initial value realization achieved within 60 days of kickoff.',
        governance: 'Bi-weekly sprint demos and early value release sign-offs.',
      },
    },
  ];

  // Card 2: Business Outcomes
  const businessOutcomes: ImpactItem[] = [
    {
      id: 'o1',
      title: 'Seamless Stakeholder Connectivity',
      subtitle: 'Unified insurer, surveyor, garage & claimant hub',
      badge: 'Omnichannel',
      icon: Network,
      details: {
        description: 'Single glass pane connecting policyholders, network workshops, surveyors, and underwriting teams in real time.',
        metrics: '100% interconnected partner ecosystem with sub-second sync.',
        governance: 'Partner SLA scorecards and webhook telemetry monitoring.',
      },
    },
    {
      id: 'o2',
      title: 'Better Process Control',
      subtitle: 'Standardized workflows & zero handoff latency',
      badge: 'Zero Silos',
      icon: GitMerge,
      details: {
        description: 'Strict state-machine orchestration prevents orphaned claims, missed escalations, or unauthorized payout approvals.',
        metrics: '99.9% workflow compliance rate across all regional branches.',
        governance: 'Automated stage-gate state machines and audit event logging.',
      },
    },
    {
      id: 'o3',
      title: 'Real-time Visibility & Insights',
      subtitle: 'Live operational telemetry and risk analytics',
      badge: 'Live Telemetry',
      icon: Activity,
      details: {
        description: 'Executive dashboards provide instant visibility into claims volumes, payout burn-rates, and bottleneck alerts.',
        metrics: 'Sub-second data freshness on all claim progression metrics.',
        governance: 'Daily executive flash reports and automated anomaly alerts.',
      },
    },
    {
      id: 'o4',
      title: 'Improved Quality & Compliance',
      subtitle: '100% audit-ready regulatory governance',
      badge: '100% Compliant',
      icon: ShieldCheck,
      details: {
        description: 'Tamper-evident logs, automated policy validation, and stringent adherence to insurance regulatory norms.',
        metrics: 'Zero compliance penalties; 100% traceability for statutory audits.',
        governance: 'Built-in regulatory checklist validation at every claim lifecycle step.',
      },
    },
    {
      id: 'o5',
      title: 'Data-Driven Decision Making',
      subtitle: 'Predictive analytics & automated fraud flagging',
      badge: 'Predictive AI',
      icon: BarChart3,
      details: {
        description: 'AI-assisted damage classification and metadata fraud heuristics enable fact-based payout authorizations.',
        metrics: '98.4% assessment accuracy; 82% fraud attempt pre-detection.',
        governance: 'Continuous model drift monitoring and explainable AI audit trails.',
      },
    },
    {
      id: 'o6',
      title: 'Scalable & Future-Ready Platform',
      subtitle: 'Cloud-native microservices with robust API core',
      badge: 'Cloud Native',
      icon: Layers,
      details: {
        description: 'Elastic cloud infrastructure engineered to handle 10x surge volumes during severe weather or seasonal peaks.',
        metrics: 'Auto-scales to 100k+ concurrent claims with zero degradation.',
        governance: 'Architecture review board (ARB) governance and disaster recovery drills.',
      },
    },
  ];

  // Card 3: PMO Governance
  const pmoItems: ImpactItem[] = [
    {
      id: 'p1',
      title: 'Project Planning & Tracking',
      subtitle: 'WBS, critical path analysis & resource workload',
      badge: 'Agile PMO',
      icon: Briefcase,
      details: {
        description: 'Structured Work Breakdown Structure (WBS) with transparent milestone timelines and dependency tracking.',
        metrics: 'Zero critical path delays; 100% milestone on-time delivery.',
        governance: 'Weekly steering committee reviews and burndown governance.',
      },
    },
    {
      id: 'p2',
      title: 'Phased Milestone & Sprint Planning',
      subtitle: 'Bi-weekly cadences & CI/CD deployment gates',
      badge: 'Sprint Cadence',
      icon: CalendarCheck,
      details: {
        description: 'Agile 2-week sprint cycles with strict definition of done, automated test passes, and release sign-offs.',
        metrics: '98% sprint commitment reliability across all workstreams.',
        governance: 'Sprint retrospectives, velocity tracking, and release management.',
      },
    },
    {
      id: 'p3',
      title: 'Scope & Requirement Management',
      subtitle: 'Traceability matrix from business intent to code',
      badge: 'Traceability',
      icon: FileCheck2,
      details: {
        description: 'Rigorous Change Request (CR) management and bi-directional traceability between user stories and code commits.',
        metrics: '100% requirements-to-test traceability with zero scope creep.',
        governance: 'Formal Change Control Board (CCB) approval workflow.',
      },
    },
    {
      id: 'p4',
      title: 'Documentation & Standards',
      subtitle: 'Architecture blueprints & standardized API specs',
      badge: 'Standardized',
      icon: Layers,
      details: {
        description: 'Living documentation including OpenAPI specs, architectural decision records (ADRs), and runbooks.',
        metrics: 'Complete documentation coverage across 100% of services.',
        governance: 'Peer-reviewed documentation sign-off for stage-gate transitions.',
      },
    },
    {
      id: 'p5',
      title: 'Risk, Quality & Stage-Gate Governance',
      subtitle: 'Automated QA gates & proactive risk playbooks',
      badge: 'Stage-Gate',
      icon: ShieldAlert,
      details: {
        description: 'Proactive RAID log tracking, automated SonarQube quality gates, and formal sign-offs before production deployment.',
        metrics: 'Zero High/Critical severity bugs in production release.',
        governance: '5-phase stage-gate formal compliance checkpoints.',
      },
    },
    {
      id: 'p6',
      title: 'KPI Tracking & Value Realization',
      subtitle: 'ROI telemetry & milestone value realization',
      badge: 'Value Realized',
      icon: Gauge,
      details: {
        description: 'Direct correlation of engineering deliverables to quantified business outcomes and enterprise financial ROI.',
        metrics: 'Measurable payback period achieved within target schedule.',
        governance: 'Post-implementation value audits and executive KPI dashboards.',
      },
    },
  ];

  // Stage-Gate Lifecycle Stages
  const stageGates = [
    { num: 'G0', name: 'Strategic Alignment', status: 'Completed', color: '#36E5B0' },
    { num: 'G1', name: 'Architecture & UX', status: 'Completed', color: '#36E5B0' },
    { num: 'G2', name: 'Core Engine & AI', status: 'Completed', color: '#00D9FF' },
    { num: 'G3', name: 'Integration & QA Gate', status: 'Completed', color: '#00D9FF' },
    { num: 'G4', name: 'Value Realization', status: 'Active (Realizing)', color: '#8B5CF6' },
  ];

  // Palette Constants
  const BG_NAVY = '#07152E';
  const TEXT_SLATE = '#94A3B8';
  const C1_PRIMARY = '#36E5B0';
  const C1_SECONDARY = '#10B981';
  const C2_PRIMARY = '#00D9FF';
  const C2_SECONDARY = '#3B82F6';
  const C3_PRIMARY = '#8B5CF6';
  const C3_SECONDARY = '#6366F1';

  return (
    <div className="w-full max-w-[1480px] mx-auto flex flex-col justify-between py-1 px-2 sm:px-4 select-none relative overflow-hidden">
      {/* ── Ambient Background Glows ── */}
      <div className="absolute inset-0 bg-aurora-mesh opacity-25 pointer-events-none -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-gradient-to-b from-[#00D9FF]/12 via-[#8B5CF6]/10 to-transparent rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* ── Slide Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-2.5 shrink-0"
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg"
            style={{ background: BG_NAVY, borderColor: 'rgba(148,163,184,0.3)', color: TEXT_SLATE }}
          >
            <BarChart3 className="w-3 h-3 text-[#36E5B0]" />
            <span>ENTERPRISE VALUE ARCHITECTURE</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
            <CheckCircle2 className="w-2.5 h-2.5" />
            <span>STAGE-GATE AUDIT READY</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black font-display tracking-tight text-white uppercase leading-tight">
          BUSINESS IMPACT{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${C2_PRIMARY}, #5ce1e6, ${C3_PRIMARY})` }}
          >
            & PMO GOVERNANCE
          </span>
        </h2>
        <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-display max-w-2xl mx-auto mt-0.5 text-slate-400">
          Quantifiable financial returns, connected stakeholder ecosystem, and disciplined stage-gate execution.
        </p>

        {/* ── Interactive View Filter Pills ── */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-[11px] font-display font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === 'all'
                ? 'bg-white/20 text-white border border-white/40 shadow-md backdrop-blur-md'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>3 Pillars View</span>
          </button>
          <button
            onClick={() => setActiveFilter('benefits')}
            className={`px-3 py-1 rounded-full text-[11px] font-display font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === 'benefits'
                ? 'bg-[#36E5B0]/20 text-[#36E5B0] border border-[#36E5B0]/50 shadow-md shadow-[#36E5B0]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-[#36E5B0]'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            <span>Business Benefits</span>
          </button>
          <button
            onClick={() => setActiveFilter('outcomes')}
            className={`px-3 py-1 rounded-full text-[11px] font-display font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === 'outcomes'
                ? 'bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/50 shadow-md shadow-[#00D9FF]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-[#00D9FF]'
            }`}
          >
            <Target className="w-3 h-3" />
            <span>Connected Outcomes</span>
          </button>
          <button
            onClick={() => setActiveFilter('pmo')}
            className={`px-3 py-1 rounded-full text-[11px] font-display font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === 'pmo'
                ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/50 shadow-md shadow-[#8B5CF6]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:text-[#8B5CF6]'
            }`}
          >
            <Briefcase className="w-3 h-3" />
            <span>PMO Governance</span>
          </button>
        </div>
      </motion.div>

      {/* ── Top Executive KPI Highlight Strip ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 shrink-0"
      >
        {topMetrics.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.id}
              className="relative p-2.5 sm:p-3 rounded-xl border backdrop-blur-md flex items-center justify-between transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(7,21,46,0.85) 0%, rgba(4,13,33,0.95) 100%)',
                borderColor: `${kpi.color}40`,
                boxShadow: `0 4px 20px ${kpi.bgGlow}`,
              }}
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold leading-tight">
                  {kpi.label}
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-xl sm:text-2xl font-black font-display tracking-tight" style={{ color: kpi.color }}>
                    {kpi.value}
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-slate-300 font-display truncate max-w-[150px] sm:max-w-[200px]">
                  {kpi.subtext}
                </span>
              </div>
              <div
                className="p-2 rounded-lg shrink-0"
                style={{ background: kpi.bgGlow, border: `1px solid ${kpi.color}50`, color: kpi.color }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* ── Three Cards with Symmetrical Rows & Columns ── */}
      <div
        className={`w-full grid gap-3 xl:gap-4 items-stretch flex-1 min-h-0 ${
          activeFilter === 'all'
            ? 'grid-cols-1 lg:grid-cols-3'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}
      >
        {/* ════════════════════════════════════════════════════════
            CARD 1 — BUSINESS BENEFITS (MINT / EMERALD)
           ════════════════════════════════════════════════════════ */}
        {(activeFilter === 'all' || activeFilter === 'benefits') && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
            style={{
              background: `linear-gradient(160deg, rgba(54, 229, 176, 0.06) 0%, rgba(7, 21, 46, 0.85) 100%)`,
              backdropFilter: 'blur(24px)',
              border: `1.5px solid rgba(54, 229, 176, 0.3)`,
              boxShadow: `0 8px 32px rgba(54, 229, 176, 0.12), inset 0 1px 0 rgba(54, 229, 176, 0.15)`,
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C1_SECONDARY}, ${C1_PRIMARY}, ${C1_SECONDARY}, ${BG_NAVY})` }}
            />

            <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 shrink-0 border-b border-[#36E5B0]/20">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                    style={{
                      background: 'rgba(54, 229, 176, 0.12)',
                      border: `1px solid rgba(54, 229, 176, 0.35)`,
                      color: C1_PRIMARY,
                      boxShadow: `0 0 15px rgba(54, 229, 176, 0.25)`,
                    }}
                  >
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase leading-none" style={{ color: C1_PRIMARY }}>
                      BUSINESS BENEFITS
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">Direct Operational ROI</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#36E5B0]/15 text-[#36E5B0] border border-[#36E5B0]/30">
                  6 VALUE LEVERS
                </span>
              </div>

              {/* 6 Equal Rows Grid */}
              <div className="grid grid-rows-6 gap-1.5 sm:gap-2 flex-1 min-h-0">
                {businessBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.12 + idx * 0.03 }}
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer group/row"
                      style={{
                        background: 'rgba(54, 229, 176, 0.04)',
                        border: '1px solid rgba(54, 229, 176, 0.15)',
                      }}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(54, 229, 176, 0.12)', borderColor: 'rgba(54, 229, 176, 0.45)' }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="p-1.5 rounded-lg shrink-0 transition-transform group-hover/row:scale-110"
                          style={{
                            background: 'rgba(54, 229, 176, 0.12)',
                            border: '1px solid rgba(54, 229, 176, 0.3)',
                            color: C1_SECONDARY,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans truncate leading-tight">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#36E5B0]/15 text-[#36E5B0] border border-[#36E5B0]/30 shadow-sm">
                          {item.badge}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/row:text-[#36E5B0] transition-colors" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ════════════════════════════════════════════════════════
            CARD 2 — BUSINESS OUTCOMES (CYAN / BLUE)
           ════════════════════════════════════════════════════════ */}
        {(activeFilter === 'all' || activeFilter === 'outcomes') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
            style={{
              background: `linear-gradient(160deg, rgba(0, 217, 255, 0.06) 0%, rgba(7, 21, 46, 0.85) 100%)`,
              backdropFilter: 'blur(24px)',
              border: `1.5px solid rgba(0, 217, 255, 0.3)`,
              boxShadow: `0 8px 32px rgba(0, 217, 255, 0.12), inset 0 1px 0 rgba(0, 217, 255, 0.15)`,
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C2_SECONDARY}, ${C2_PRIMARY}, ${C2_SECONDARY}, ${BG_NAVY})` }}
            />

            <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 shrink-0 border-b border-[#00D9FF]/20">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                    style={{
                      background: 'rgba(0, 217, 255, 0.12)',
                      border: `1px solid rgba(0, 217, 255, 0.35)`,
                      color: C2_PRIMARY,
                      boxShadow: `0 0 15px rgba(0, 217, 255, 0.25)`,
                    }}
                  >
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase leading-none" style={{ color: C2_PRIMARY }}>
                      BUSINESS OUTCOMES
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">Strategic Capabilities</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30">
                  6 CAPABILITY WINS
                </span>
              </div>

              {/* 6 Equal Rows Grid */}
              <div className="grid grid-rows-6 gap-1.5 sm:gap-2 flex-1 min-h-0">
                {businessOutcomes.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.16 + idx * 0.03 }}
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer group/row"
                      style={{
                        background: 'rgba(0, 217, 255, 0.04)',
                        border: '1px solid rgba(0, 217, 255, 0.15)',
                      }}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(0, 217, 255, 0.12)', borderColor: 'rgba(0, 217, 255, 0.45)' }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="p-1.5 rounded-lg shrink-0 transition-transform group-hover/row:scale-110"
                          style={{
                            background: 'rgba(0, 217, 255, 0.12)',
                            border: '1px solid rgba(0, 217, 255, 0.3)',
                            color: C2_SECONDARY,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans truncate leading-tight">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#00D9FF]/15 text-[#00D9FF] border border-[#00D9FF]/30 shadow-sm">
                          {item.badge}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/row:text-[#00D9FF] transition-colors" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ════════════════════════════════════════════════════════
            CARD 3 — PMO GOVERNANCE (VIOLET / INDIGO)
           ════════════════════════════════════════════════════════ */}
        {(activeFilter === 'all' || activeFilter === 'pmo') && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group relative h-full"
            style={{
              background: `linear-gradient(160deg, rgba(139, 92, 246, 0.06) 0%, rgba(7, 21, 46, 0.85) 100%)`,
              backdropFilter: 'blur(24px)',
              border: `1.5px solid rgba(139, 92, 246, 0.3)`,
              boxShadow: `0 8px 32px rgba(139, 92, 246, 0.12), inset 0 1px 0 rgba(139, 92, 246, 0.15)`,
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${BG_NAVY}, ${C3_SECONDARY}, ${C3_PRIMARY}, ${C3_SECONDARY}, ${BG_NAVY})` }}
            />

            <div className="relative z-10 flex flex-col h-full p-3 sm:p-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 shrink-0 border-b border-[#8B5CF6]/20">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                    style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: `1px solid rgba(139, 92, 246, 0.35)`,
                      color: C3_PRIMARY,
                      boxShadow: `0 0 15px rgba(139, 92, 246, 0.25)`,
                    }}
                  >
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-display tracking-tight uppercase leading-none" style={{ color: C3_PRIMARY }}>
                      PMO GOVERNANCE
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">Stage-Gate Disciplines</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30">
                  6 PILLARS
                </span>
              </div>

              {/* 6 Equal Rows Grid */}
              <div className="grid grid-rows-6 gap-1.5 sm:gap-2 flex-1 min-h-0">
                {pmoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.2 + idx * 0.03 }}
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer group/row"
                      style={{
                        background: 'rgba(139, 92, 246, 0.04)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                      }}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.45)' }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="p-1.5 rounded-lg shrink-0 transition-transform group-hover/row:scale-110"
                          style={{
                            background: 'rgba(139, 92, 246, 0.12)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            color: C3_SECONDARY,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-bold font-display leading-tight text-white truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans truncate leading-tight">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30 shadow-sm">
                          {item.badge}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/row:text-[#8B5CF6] transition-colors" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ── PMO Stage-Gate Progression Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-3 p-2.5 sm:p-3 rounded-xl border backdrop-blur-md shrink-0 flex flex-col md:flex-row items-center justify-between gap-2.5"
        style={{
          background: 'linear-gradient(90deg, rgba(7,21,46,0.9) 0%, rgba(4,13,33,0.95) 100%)',
          borderColor: 'rgba(148,163,184,0.2)',
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <div className="p-1.5 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#8B5CF6]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold font-display text-white uppercase tracking-wider block leading-none">
              PMO Stage-Gate Pipeline
            </span>
            <span className="text-[9px] font-mono text-slate-400">Strict gatekeeper criteria enforced across all phases</span>
          </div>
        </div>

        {/* 5 Stage Gates Ribbon */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-0.5">
          {stageGates.map((gate, gIdx) => (
            <div key={gIdx} className="flex items-center gap-1.5 shrink-0">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold"
                style={{
                  background: gate.status.includes('Active') ? 'rgba(139,92,246,0.2)' : 'rgba(54,229,176,0.1)',
                  borderColor: gate.color,
                  color: gate.color,
                }}
              >
                <span className="px-1 py-0.2 rounded bg-black/40 text-[9px]">{gate.num}</span>
                <span>{gate.name}</span>
                {gate.status.includes('Active') ? (
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                ) : (
                  <CheckCircle2 className="w-3 h-3 text-[#36E5B0]" />
                )}
              </div>
              {gIdx < stageGates.length - 1 && (
                <span className="text-slate-600 text-xs font-mono">→</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Interactive Item Detail Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-lg p-5 sm:p-6 rounded-2xl border text-left shadow-2xl relative"
              style={{
                background: 'linear-gradient(145deg, #07152E 0%, #030a1c 100%)',
                borderColor: 'rgba(0, 217, 255, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 217, 255, 0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan">
                  <selectedItem.icon className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#00D9FF]/20 text-[#00D9FF] border border-[#00D9FF]/40">
                      {selectedItem.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Impact Deep Dive</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mt-0.5">{selectedItem.title}</h3>
                </div>
              </div>

              {/* Detail Content */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#36E5B0] block mb-1">
                    Strategic Objective & Impact
                  </span>
                  <p className="leading-relaxed text-slate-200">{selectedItem.details.description}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00D9FF] block mb-1">
                    Key Performance Indicator
                  </span>
                  <p className="leading-relaxed text-slate-200 font-semibold">{selectedItem.details.metrics}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#8B5CF6] block mb-1">
                    PMO Stage-Gate & Governance Mechanism
                  </span>
                  <p className="leading-relaxed text-slate-200">{selectedItem.details.governance}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] text-black font-display font-bold text-xs hover:opacity-90 transition-opacity"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

