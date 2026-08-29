import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, Network, Sparkles, ExternalLink, Clock, Zap } from 'lucide-react';
import { APPLICATION_LINKS } from '../../data/links';

export const Slide6Ecosystem: React.FC = () => {
  const handleLaunch = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const fastTrackSteps = [
    { label: 'FNOL Intake', sub: 'Voice / Digital' },
    { label: 'Auto Validate', sub: 'Instant policy check' },
    { label: 'AI/Rule Assess', sub: 'Damage classification' },
    { label: 'Eligibility', sub: 'Minor damage pass' },
    { label: 'Spot Settlement', sub: 'Direct calc' },
    { label: 'Instant Payment', sub: 'Bank transfer', highlight: true },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-4 sm:py-6 px-4 select-none">
      {/* Slide Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center mb-6 sm:mb-8"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
          Three Journeys.{' '}
          <span className="bg-gradient-to-r from-brand-cyan via-[#5ce1e6] to-brand-green bg-clip-text text-transparent">
            One Connected Claim.
          </span>
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 font-display uppercase mt-2">
          Customer • Claims Handler • Repairer
        </p>
      </motion.div>

      {/* 3 Horizontally Aligned Connected Ecosystem Cards with Launch Portals */}
      <div className="w-full max-w-5xl mb-6 sm:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch relative z-10">
          {/* ── LEFT CARD: CUSTOMER ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-[#040d21]/90 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all group"
          >
            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan shadow-glow-cyan/20 group-hover:scale-105 transition-transform shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight leading-tight group-hover:text-brand-cyan transition-colors">
                      Customer
                    </h3>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-brand-cyan uppercase">
                      JOURNEY
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-base sm:text-lg font-bold font-display text-white tracking-tight mb-1.5">
                Start the claim
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Voice FNOL, mobile document upload & instant ~30-min spot settlement tracker.
              </p>
            </div>

            {/* Launch Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLaunch(APPLICATION_LINKS.customerPortal)}
              className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 hover:from-brand-cyan/30 hover:to-brand-blue/30 border border-brand-cyan/40 hover:border-brand-cyan text-white text-xs font-bold font-display flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
            >
              <span>Launch Customer App</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-cyan group-hover/btn:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* ── CENTER CARD: CLAIMS HANDLER (CORE APPLICATION) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#0c2248]/95 via-[#051129]/95 to-[#020713] border-2 border-[#5ce1e6]/50 hover:border-[#5ce1e6] backdrop-blur-2xl shadow-2xl shadow-brand-cyan/20 md:scale-105 md:-translate-y-1 relative transition-all group"
          >
            {/* CORE APPLICATION Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-green text-brand-navy text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3" />
              <span>CORE APPLICATION</span>
            </div>

            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-green/20 border border-[#5ce1e6]/50 text-[#5ce1e6] shadow-[0_0_15px_rgba(92,225,230,0.3)] group-hover:scale-110 transition-transform shrink-0">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight leading-tight group-hover:text-[#5ce1e6] transition-colors">
                      Claims Handler
                    </h3>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#5ce1e6] uppercase">
                      CENTRAL PLATFORM
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-lg sm:text-xl font-black font-display text-white tracking-tight mb-1.5">
                Connect & process
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-200 font-medium leading-relaxed mb-4">
                AI damage estimation, automated triage, fraud signals & settlement approval cockpit.
              </p>
            </div>

            {/* Launch Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLaunch(APPLICATION_LINKS.claimsHandlerPortal)}
              className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-cyan via-[#5ce1e6] to-brand-green text-brand-navy hover:brightness-110 text-xs font-black font-display flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-brand-cyan/25 group/btn"
            >
              <span>Launch Claims Cockpit</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* ── RIGHT CARD: REPAIRER ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-[#040d21]/90 border border-white/10 hover:border-brand-green/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all group"
          >
            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-brand-green/15 border border-brand-green/30 text-brand-green shadow-glow-green/20 group-hover:scale-105 transition-transform shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight leading-tight group-hover:text-brand-green transition-colors">
                      Repairer
                    </h3>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-brand-green uppercase">
                      JOURNEY
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-base sm:text-lg font-bold font-display text-white tracking-tight mb-1.5">
                Raise the claim
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Garage supplementary upload, digital liability sheets & automated invoice sync.
              </p>
            </div>

            {/* Launch Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLaunch(APPLICATION_LINKS.repairerPortal)}
              className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-green/20 to-emerald-900/20 hover:from-brand-green/30 hover:to-emerald-900/30 border border-brand-green/40 hover:border-brand-green text-white text-xs font-bold font-display flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
            >
              <span>Launch Repairer Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-green group-hover/btn:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── ~30 MINUTES FAST-TRACK AUTOMATED STRAIGHT-THROUGH PROGRESSION ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-5xl p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-white font-bold font-display text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-brand-green animate-pulse" />
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-green bg-clip-text text-transparent">
              Fast-Track Automated Straight-Through Processing
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/40 text-brand-green text-[11px] font-mono font-bold">
            <Zap className="w-3 h-3" />
            <span>~30 MINUTES FNOL → PAYMENT</span>
          </div>
        </div>

        {/* 6 Progression Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-1">
          {fastTrackSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-xl border text-center flex flex-col justify-center ${
                step.highlight
                  ? 'bg-brand-green/20 border-brand-green/60 text-brand-green shadow-glow-green/20'
                  : 'bg-white/5 border-white/10 text-white/90'
              }`}
            >
              <span className="text-[9px] font-mono text-white/40 mb-0.5">0{idx + 1}</span>
              <strong className="text-xs font-bold font-display">{step.label}</strong>
              <span className="text-[9px] text-slate-400 mt-0.5">{step.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};



