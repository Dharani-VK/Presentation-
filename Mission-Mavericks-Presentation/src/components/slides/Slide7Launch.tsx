import React from 'react';
import { motion } from 'framer-motion';
import { APPLICATION_LINKS } from '../../data/links';
import { ExternalLink, User, Wrench, Shield, Clock } from 'lucide-react';

export const Slide7Launch: React.FC = () => {
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
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* ~30 MINUTES HERO ELEMENT (Glowing, Pulsing, Visually Dominant) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        className="relative my-2 flex flex-col items-center"
      >
        <div className="text-7xl sm:text-9xl md:text-[140px] font-black font-display tracking-tighter leading-none bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent animate-pulse-glow">
          ~30
        </div>

        <div className="text-sm sm:text-xl md:text-2xl font-black font-display tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase mt-1 flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-green animate-pulse" />
          <span>MINUTES • FNOL → PAYMENT</span>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mt-2 leading-relaxed">
          End-to-end automated fast-track straight-through processing for eligible minor claims.
        </p>
      </motion.div>

      {/* Fast Track Automated Progression Nodes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full max-w-4xl mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {fastTrackSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border text-center flex flex-col justify-center ${
                step.highlight
                  ? 'bg-brand-green/20 border-brand-green/60 text-brand-green shadow-glow-green/30'
                  : 'bg-white/5 border-white/10 text-white/90'
              }`}
            >
              <span className="text-[10px] font-mono text-white/40 mb-0.5">0{idx + 1}</span>
              <strong className="text-xs font-bold font-display">{step.label}</strong>
              <span className="text-[9px] text-brand-muted mt-0.5">{step.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3 Dedicated Application Launch Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
      >
        {/* Launch Customer */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleLaunch(APPLICATION_LINKS.customerPortal)}
          className="p-5 rounded-2xl bg-gradient-to-b from-brand-cyan/20 to-brand-blue/10 border border-brand-cyan/40 hover:border-brand-cyan hover:shadow-glow-cyan/40 text-left transition-all group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-brand-cyan/20 text-brand-cyan">
              <User className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-brand-cyan opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <h4 className="text-base font-black font-display text-white group-hover:text-brand-cyan transition-colors">
            Launch Customer App
          </h4>
          <p className="text-xs text-brand-muted mt-1">
            Voice FNOL, mobile document upload & ~30-min spot settlement tracker.
          </p>
        </motion.button>

        {/* Launch Repairer */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleLaunch(APPLICATION_LINKS.repairerPortal)}
          className="p-5 rounded-2xl bg-gradient-to-b from-brand-green/20 to-emerald-900/10 border border-brand-green/40 hover:border-brand-green hover:shadow-glow-green/40 text-left transition-all group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-brand-green/20 text-brand-green">
              <Wrench className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-brand-green opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <h4 className="text-base font-black font-display text-white group-hover:text-brand-green transition-colors">
            Launch Repairer Portal
          </h4>
          <p className="text-xs text-brand-muted mt-1">
            Garage supplementary upload, liability sheets & digital invoice sync.
          </p>
        </motion.button>

        {/* Launch Handler */}
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleLaunch(APPLICATION_LINKS.claimsHandlerPortal)}
          className="p-5 rounded-2xl bg-gradient-to-b from-brand-purple/20 to-indigo-900/10 border border-brand-purple/40 hover:border-brand-purple hover:shadow-glow-purple/40 text-left transition-all group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-brand-purple/20 text-brand-purple">
              <Shield className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-brand-purple opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <h4 className="text-base font-black font-display text-white group-hover:text-brand-purple transition-colors">
            Launch Claims Cockpit
          </h4>
          <p className="text-xs text-brand-muted mt-1">
            AI damage estimation, automated triage, fraud signals & settlement approval.
          </p>
        </motion.button>
      </motion.div>
    </div>
  );
};
