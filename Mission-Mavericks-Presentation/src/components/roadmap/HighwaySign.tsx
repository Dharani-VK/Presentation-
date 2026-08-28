import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapMilestone } from '../../types';
import { Radio, Rocket, Sparkles, ChevronRight } from 'lucide-react';

interface HighwaySignProps {
  milestone: RoadmapMilestone;
  horizonLabel: string;
  position: 'left' | 'right' | 'center';
  scale?: number;
  delay?: number;
  poleHeight?: number;
  onClick: () => void;
}

export const HighwaySign: React.FC<HighwaySignProps> = ({
  milestone,
  horizonLabel,
  position,
  scale = 1.0,
  delay = 0,
  poleHeight = 40,
  onClick,
}) => {
  const isNow = milestone.id === 'NOW';
  const isNext = milestone.id === 'NEXT';

  const getSignColorClasses = () => {
    if (isNow) {
      return {
        border: 'border-brand-green/60 hover:border-brand-green',
        glow: 'shadow-[0_0_25px_rgba(32,223,137,0.35)] hover:shadow-[0_0_40px_rgba(32,223,137,0.7)]',
        badgeBg: 'bg-brand-green/20 text-brand-green border-brand-green/40',
        titleGlow: 'text-white group-hover:text-brand-green',
        groundGlow: 'bg-brand-green/30',
        poleColor: 'from-brand-green/50 via-slate-600 to-slate-800',
      };
    }
    if (isNext) {
      return {
        border: 'border-brand-cyan/60 hover:border-brand-cyan',
        glow: 'shadow-[0_0_25px_rgba(0,217,255,0.35)] hover:shadow-[0_0_40px_rgba(0,217,255,0.7)]',
        badgeBg: 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40',
        titleGlow: 'text-white group-hover:text-brand-cyan',
        groundGlow: 'bg-brand-cyan/30',
        poleColor: 'from-brand-cyan/50 via-slate-600 to-slate-800',
      };
    }
    // Future
    return {
      border: 'border-brand-purple/60 hover:border-brand-purple',
      glow: 'shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]',
      badgeBg: 'bg-brand-purple/20 text-brand-purple border-brand-purple/40',
      titleGlow: 'text-white group-hover:text-brand-purple',
      groundGlow: 'bg-brand-purple/30',
      poleColor: 'from-brand-purple/50 via-slate-600 to-slate-800',
    };
  };

  const colors = getSignColorClasses();

  const getIcon = () => {
    if (isNow) return <Radio className="w-3.5 h-3.5 animate-pulse" />;
    if (isNext) return <Rocket className="w-3.5 h-3.5" />;
    return <Sparkles className="w-3.5 h-3.5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: scale * 0.9 }}
      animate={{ opacity: 1, y: 0, scale }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: scale * 1.03 }}
      onClick={onClick}
      className={`group relative flex flex-col items-center cursor-pointer select-none z-10 transition-all ${
        position === 'left' ? 'sm:items-start' : position === 'right' ? 'sm:items-end' : 'items-center'
      }`}
    >
      {/* Highway Sign Board */}
      <div
        className={`relative rounded-xl md:rounded-2xl border-2 backdrop-blur-xl bg-[#06152f]/95 p-4 sm:p-5 transition-all duration-300 w-full max-w-[290px] sm:max-w-[340px] md:max-w-[370px] ${colors.border} ${colors.glow}`}
      >
        {/* Metal Corner Rivets / Bolts */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-inner" />

        {/* Top Horizon Badge */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider border ${colors.badgeBg}`}
          >
            {getIcon()}
            <span>{horizonLabel}</span>
          </span>

          <span className="text-[10px] font-mono text-white/50 uppercase">
            {milestone.id}
          </span>
        </div>

        {/* Prominent Title */}
        <h4 className={`text-base sm:text-lg font-black font-display tracking-tight transition-colors ${colors.titleGlow}`}>
          {milestone.title}
        </h4>

        {/* Subtitle */}
        <p className="text-xs text-brand-muted/90 font-medium mt-0.5 line-clamp-1">
          {milestone.subtitle}
        </p>

        {/* Sign Footer: Click prompt */}
        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-white/70 group-hover:text-white transition-colors">
          <span className="flex items-center gap-1">
            <span>Explore Milestone</span>
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-white/80 font-mono">
            {milestone.keyCapabilities.length} Capabilities
          </span>
        </div>
      </div>

      {/* Vertical Metal Support Pole */}
      <div
        className="w-2.5 sm:w-3 bg-gradient-to-b from-slate-500 via-slate-700 to-slate-900 border-x border-slate-600/80 shadow-md relative"
        style={{ height: `${poleHeight}px` }}
      >
        {/* Pole bolts */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400" />
      </div>

      {/* Concrete Ground Base & Ground Neon Glow Footing */}
      <div className="relative flex flex-col items-center">
        {/* Concrete Footing */}
        <div className="w-8 sm:w-10 h-2 sm:h-2.5 rounded-t-sm bg-slate-700 border-t border-slate-500 shadow-sm" />
        {/* Ground light circle */}
        <div
          className={`w-20 sm:w-28 h-5 sm:h-6 rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all ${colors.groundGlow}`}
        />
      </div>
    </motion.div>
  );
};
