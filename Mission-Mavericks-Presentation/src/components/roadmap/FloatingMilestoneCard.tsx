import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapMilestone } from '../../types';
import { X, CheckCircle2 } from 'lucide-react';

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
        badgeBg: 'bg-[#20df89] text-[#020713]',
        borderAccent: 'border-[#20df89]/40',
        textAccent: 'text-emerald-700',
        dotColor: 'bg-[#20df89]',
        iconColor: 'text-[#20df89]',
        tagText: 'CURRENT',
        glow: 'shadow-[0_15px_40px_rgba(32,223,137,0.25)]',
      };
    }
    if (isNext) {
      return {
        badgeBg: 'bg-[#00d9ff] text-[#020713]',
        borderAccent: 'border-[#00d9ff]/40',
        textAccent: 'text-cyan-700',
        dotColor: 'bg-[#00d9ff]',
        iconColor: 'text-[#00d9ff]',
        tagText: 'NEXT',
        glow: 'shadow-[0_15px_40px_rgba(0,217,255,0.25)]',
      };
    }
    // FUTURE
    return {
      badgeBg: 'bg-[#8b5cf6] text-white',
      borderAccent: 'border-[#8b5cf6]/40',
      textAccent: 'text-purple-700',
      dotColor: 'bg-[#8b5cf6]',
      iconColor: 'text-[#8b5cf6]',
      tagText: 'FUTURE',
      glow: 'shadow-[0_15px_40px_rgba(139,92,246,0.25)]',
    };
  };

  const theme = getCardTheme();

  // Determine positioning coordinates & arrow orientation based on milestone
  const getPositionStyles = () => {
    if (isNow) {
      // NOW stone is at left-[14%] bottom-[9%] -> card floats to its right
      return {
        wrapper: 'left-[3%] sm:left-[29%] md:left-[31%] bottom-[4%] sm:bottom-[7%] w-full max-w-[340px] sm:max-w-[380px]',
        arrow: 'hidden sm:block absolute -left-2.5 bottom-12 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#06152f]',
      };
    }
    if (isNext) {
      // NEXT stone is at right-[14%] top-[35%] -> card floats to its left
      return {
        wrapper: 'left-[3%] sm:left-auto sm:right-[28%] md:right-[30%] top-[12%] sm:top-[18%] w-full max-w-[340px] sm:max-w-[380px]',
        arrow: 'hidden sm:block absolute -right-2.5 top-12 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-[#06152f]',
      };
    }
    // FUTURE stone is at left-[43%] top-[11%] -> card floats to its right/below
    return {
      wrapper: 'left-[3%] sm:left-[52%] md:left-[54%] top-[7%] sm:top-[10%] w-full max-w-[340px] sm:max-w-[380px]',
      arrow: 'hidden sm:block absolute -left-2.5 top-8 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#06152f]',
    };
  };

  const pos = getPositionStyles();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`absolute z-30 ${pos.wrapper}`}
    >
      {/* Triangular Pointer pointing towards milestone stone */}
      <div className={pos.arrow} />

      {/* Floating Information Card */}
      <div className={`relative rounded-2xl bg-[#06152f]/98 text-white p-4 sm:p-5 ${theme.glow} border ${theme.borderAccent} backdrop-blur-2xl`}>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${theme.badgeBg}`}>
              {theme.tagText}
            </span>
            <span className="text-xs font-mono font-bold text-slate-300">
              KM {milestone.number}
            </span>
          </div>

          {/* Dismiss Close Button */}
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
            aria-label="Close card"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Milestone Items List (Showing ONLY the exact items requested) */}
        <div className="space-y-2">
          {milestone.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-slate-100 font-medium leading-snug hover:bg-white/[0.07] transition-colors"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${theme.iconColor} shrink-0 mt-0.5`} />
              <span className="capitalize">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
