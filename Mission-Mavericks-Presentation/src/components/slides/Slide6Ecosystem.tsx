import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, Network, Sparkles } from 'lucide-react';

export const Slide6Ecosystem: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-6 sm:py-10 px-4 select-none">
      {/* Slide Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
          Three Journeys.{' '}
          <span className="bg-gradient-to-r from-brand-cyan via-[#5ce1e6] to-brand-green bg-clip-text text-transparent">
            One Connected Claim.
          </span>
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 font-display uppercase mt-2.5">
          Customer • Claims Handler • Repairer
        </p>
      </motion.div>

      {/* 3 Horizontally Aligned Connected Ecosystem Cards */}
      <div className="relative w-full max-w-5xl">
        {/* Continuous Horizontal Connector */}
        <div className="hidden md:block absolute top-1/2 left-16 right-16 -translate-y-1/2 h-[2px] bg-gradient-to-r from-brand-cyan/20 via-brand-green/40 to-brand-cyan/20 pointer-events-none -z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5ce1e6]/50 to-transparent blur-[3px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
          {/* ── LEFT CARD: CUSTOMER ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#040d21]/90 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all group"
          >
            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan shadow-glow-cyan/20 group-hover:scale-105 transition-transform shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight leading-tight group-hover:text-brand-cyan transition-colors">
                    Customer
                  </h3>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-brand-cyan uppercase">
                    JOURNEY
                  </span>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight mb-2">
                Start the claim
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Fastrack for eligible claims with guided self-service submission.
              </p>
            </div>
          </motion.div>

          {/* ── CENTER CARD: CLAIMS HANDLER (CORE APPLICATION) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#0c2248]/95 via-[#051129]/95 to-[#020713] border-2 border-[#5ce1e6]/50 hover:border-[#5ce1e6] backdrop-blur-2xl shadow-2xl shadow-brand-cyan/20 md:scale-105 md:-translate-y-2 relative transition-all group"
          >
            {/* CORE APPLICATION Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-green text-brand-navy text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE APPLICATION</span>
            </div>

            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center gap-3.5 mb-5 mt-1">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-green/20 border border-[#5ce1e6]/50 text-[#5ce1e6] shadow-[0_0_15px_rgba(92,225,230,0.3)] group-hover:scale-110 transition-transform shrink-0">
                  <Network className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight leading-tight group-hover:text-[#5ce1e6] transition-colors">
                    Claims Handler
                  </h3>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#5ce1e6] uppercase">
                    CENTRAL PLATFORM
                  </span>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight mb-2">
                Connect & process
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                Core application connecting both journeys with real-time intelligence.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT CARD: REPAIRER ── */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#040d21]/90 border border-white/10 hover:border-brand-green/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all group"
          >
            <div>
              {/* Card Header: Icon & Primary Title */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-2xl bg-brand-green/15 border border-brand-green/30 text-brand-green shadow-glow-green/20 group-hover:scale-105 transition-transform shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight leading-tight group-hover:text-brand-green transition-colors">
                    Repairer
                  </h3>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-brand-green uppercase">
                    JOURNEY
                  </span>
                </div>
              </div>

              {/* Action Headline */}
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight mb-2">
                Raise the claim
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                On behalf of the customer with instant estimate syncing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


