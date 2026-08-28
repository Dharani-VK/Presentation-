import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapMilestone } from '../../types';
import { X, CheckCircle2, Zap, Sparkles, Target } from 'lucide-react';

interface FloatingMilestoneCardProps {
  milestone: RoadmapMilestone;
  onClose: () => void;
}

export const FloatingMilestoneCard: React.FC<FloatingMilestoneCardProps> = ({
  milestone,
  onClose,
}) => {
  const isNow = milestone.id === 'NOW';
  const isNext = milestone.id === 'NEXT';

  const getCardTheme = () => {
    if (isNow) {
      return {
        badgeBg: 'bg-emerald-700 text-white',
        borderAccent: 'border-emerald-600',
        textAccent: 'text-emerald-800',
        tagBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
        dotColor: 'bg-emerald-600',
      };
    }
    if (isNext) {
      return {
        badgeBg: 'bg-cyan-700 text-white',
        borderAccent: 'border-cyan-600',
        textAccent: 'text-cyan-800',
        tagBg: 'bg-cyan-50 text-cyan-900 border-cyan-200',
        dotColor: 'bg-cyan-600',
      };
    }
    // FUTURE
    return {
      badgeBg: 'bg-purple-700 text-white',
      borderAccent: 'border-purple-600',
      textAccent: 'text-purple-800',
      tagBg: 'bg-purple-50 text-purple-900 border-purple-200',
      dotColor: 'bg-purple-600',
    };
  };

  const theme = getCardTheme();

  // Determine positioning coordinates & arrow orientation based on milestone
  const getPositionStyles = () => {
    if (isNow) {
      // NOW stone is at left-[14%] bottom-[10%] -> card floats to its right
      return {
        wrapper: 'left-[4%] sm:left-[30%] md:left-[32%] bottom-[4%] sm:bottom-[8%] max-w-[340px] sm:max-w-[380px]',
        arrow: 'hidden sm:block absolute -left-2.5 bottom-12 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#faf7f0]',
      };
    }
    if (isNext) {
      // NEXT stone is at right-[15%] top-[38%] -> card floats to its left
      return {
        wrapper: 'left-[4%] sm:left-auto sm:right-[30%] md:right-[33%] top-[12%] sm:top-[20%] max-w-[340px] sm:max-w-[380px]',
        arrow: 'hidden sm:block absolute -right-2.5 top-16 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-[#faf7f0]',
      };
    }
    // FUTURE stone is at left-[43%] top-[11%] -> card floats to its right/below
    return {
      wrapper: 'left-[4%] sm:left-[50%] md:left-[54%] top-[8%] sm:top-[12%] max-w-[330px] sm:max-w-[370px]',
      arrow: 'hidden sm:block absolute -left-2.5 top-10 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#faf7f0]',
    };
  };

  const pos = getPositionStyles();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`absolute z-30 ${pos.wrapper}`}
    >
      {/* Triangular Pointer pointing towards milestone stone */}
      <div className={pos.arrow} />

      {/* Floating Information Card (Warm Cream / Roadside Stone Aesthetic) */}
      <div className="relative rounded-2xl bg-[#faf7f0] text-[#1c1917] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#dcd5c4] backdrop-blur-md">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#e2dacb]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.badgeBg}`}>
                ● {milestone.id}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#78716c]">
                {milestone.timeframe}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black font-display text-[#1c1917] tracking-tight leading-snug">
              {milestone.title}
            </h4>
          </div>

          {/* Dismiss Close Button */}
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-black/5 hover:bg-black/10 text-[#57534e] hover:text-[#1c1917] transition-colors shrink-0 cursor-pointer"
            aria-label="Close card"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-xs font-semibold text-[#44403c] mb-3 leading-relaxed">
          {milestone.subtitle}
        </p>

        {/* Key Strategic Capabilities */}
        <div className="space-y-1.5 mb-3">
          <div className="text-[10px] font-black uppercase tracking-wider text-[#78716c] flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-600" />
            <span>Key Capabilities</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            {milestone.keyCapabilities.slice(0, 2).map((cap, i) => (
              <div key={i} className="p-2 rounded-xl bg-white/70 border border-[#e7e1d3] text-[11px] leading-snug">
                <strong className="text-[#1c1917] block font-bold">{cap.title}</strong>
                <span className="text-[#57534e] text-[10px]">{cap.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables checklist (compact) */}
        <div className="mb-3">
          <div className="text-[10px] font-black uppercase tracking-wider text-[#78716c] mb-1 flex items-center gap-1">
            <Target className="w-3 h-3 text-blue-600" />
            <span>Deliverables</span>
          </div>
          <div className="space-y-1">
            {milestone.items.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#292524]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Business Impact Callout Banner */}
        <div className={`p-2.5 rounded-xl border text-[11px] font-medium leading-relaxed ${theme.tagBg}`}>
          <div className="flex items-center gap-1 font-black uppercase text-[9px] tracking-wider mb-0.5">
            <Sparkles className="w-3 h-3" />
            <span>Business Impact</span>
          </div>
          <span>{milestone.businessImpact}</span>
        </div>
      </div>
    </motion.div>
  );
};
