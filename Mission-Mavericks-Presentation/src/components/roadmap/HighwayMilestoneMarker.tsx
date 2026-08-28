import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RoadmapMilestone } from '../../types';
import { Radio, Rocket, Sparkles } from 'lucide-react';

interface HighwayMilestoneMarkerProps {
  milestone: RoadmapMilestone;
  label: 'NOW' | 'NEXT' | 'FUTURE';
  number: '01' | '02' | '03';
  subtag?: string;
  scale?: number;
  delay?: number;
  poleHeight?: number;
  onClick: () => void;
}

export const HighwayMilestoneMarker: React.FC<HighwayMilestoneMarkerProps> = ({
  milestone,
  label,
  number,
  subtag,
  scale = 1.0,
  delay = 0,
  poleHeight = 70,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isNow = milestone.id === 'NOW';
  const isNext = milestone.id === 'NEXT';

  const getMarkerColors = () => {
    if (isNow) {
      return {
        glowHex: '#20df89',
        headBorder: 'border-brand-green',
        headBg: 'bg-[#020713]/90',
        neonText: 'text-brand-green',
        glowShadow: '0 0 35px rgba(32, 223, 137, 0.65)',
        pulseBg: 'bg-brand-green',
        groundGlow: 'bg-brand-green/40',
        ringColor: 'border-brand-green/50',
      };
    }
    if (isNext) {
      return {
        glowHex: '#00d9ff',
        headBorder: 'border-brand-cyan',
        headBg: 'bg-[#020713]/90',
        neonText: 'text-brand-cyan',
        glowShadow: '0 0 35px rgba(0, 217, 255, 0.65)',
        pulseBg: 'bg-brand-cyan',
        groundGlow: 'bg-brand-cyan/40',
        ringColor: 'border-brand-cyan/50',
      };
    }
    // FUTURE
    return {
      glowHex: '#8b5cf6',
      headBorder: 'border-brand-purple',
      headBg: 'bg-[#020713]/90',
      neonText: 'text-brand-purple',
      glowShadow: '0 0 35px rgba(139, 92, 246, 0.65)',
      pulseBg: 'bg-brand-purple',
      groundGlow: 'bg-brand-purple/40',
      ringColor: 'border-brand-purple/50',
    };
  };

  const colors = getMarkerColors();

  const getIcon = () => {
    if (isNow) return <Radio className="w-3.5 h-3.5 animate-pulse" />;
    if (isNext) return <Rocket className="w-3.5 h-3.5" />;
    return <Sparkles className="w-3.5 h-3.5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: scale * 0.8 }}
      animate={{ opacity: 1, y: 0, scale }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: scale * 1.06 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center cursor-pointer select-none z-20"
      style={{ transformOrigin: 'bottom center' }}
    >
      {/* Floating Hover Tooltip: Click to Explore */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -8 : 5 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-10 px-2.5 py-1 rounded-md bg-black/90 border border-white/20 text-[10px] font-mono tracking-widest text-white whitespace-nowrap backdrop-blur-md pointer-events-none shadow-xl flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
        <span>CLICK TO EXPLORE</span>
      </motion.div>

      {/* Futuristic Roadside Milestone Beacon Head */}
      <div className="relative flex flex-col items-center">
        {/* Pulsing Beacon Rings */}
        <div
          className={`absolute -inset-2 rounded-2xl border ${colors.ringColor} opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none`}
        />

        {/* Physical Milestone Shell (Hexagonal / Pill Beacon) */}
        <div
          className={`relative px-4 py-3 rounded-2xl border-2 backdrop-blur-xl ${colors.headBg} ${colors.headBorder} transition-all duration-300 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[115px]`}
          style={{
            boxShadow: isHovered
              ? `0 0 45px ${colors.glowHex}88, inset 0 0 15px ${colors.glowHex}44`
              : `0 0 20px ${colors.glowHex}40, inset 0 0 10px ${colors.glowHex}20`,
          }}
        >
          {/* Top Identifier & Icon */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className={colors.neonText}>{getIcon()}</span>
            <span className="text-[10px] font-mono font-bold text-white/50">{number}</span>
          </div>

          {/* Core Milestone Label (NOW / NEXT / FUTURE) */}
          <div className="text-sm sm:text-base font-black font-display tracking-widest uppercase text-white group-hover:text-white drop-shadow-md">
            {label}
          </div>

          {/* Subtag if present (e.g. "YOU ARE HERE", "DESTINATION") */}
          {subtag && (
            <div
              className={`text-[9px] font-black uppercase tracking-wider mt-0.5 px-1.5 py-0.2 rounded-full border ${colors.headBorder} ${colors.neonText} bg-black/40`}
            >
              {subtag}
            </div>
          )}

          {/* Corner Metallic Fasteners */}
          <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-slate-400" />
          <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-slate-400" />
          <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-slate-400" />
          <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-slate-400" />
        </div>
      </div>

      {/* Slim Metallic Pylon / Marker Pole */}
      <div
        className="w-2 sm:w-2.5 bg-gradient-to-b from-slate-400 via-slate-700 to-slate-900 border-x border-slate-600 shadow-lg relative"
        style={{ height: `${poleHeight}px` }}
      >
        {/* Intermediate Joint Collar */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3.5 h-1.5 rounded-sm bg-slate-500 border border-slate-400" />
      </div>

      {/* Ground Anchor Base & Roadside Light Footing */}
      <div className="relative flex flex-col items-center">
        {/* Concrete Ground Anchor */}
        <div className="w-8 sm:w-10 h-2.5 rounded-t bg-slate-800 border-t border-x border-slate-600 shadow-md" />
        {/* Luminous Road Surface Spotlight */}
        <div
          className={`w-20 sm:w-28 h-6 sm:h-8 rounded-full blur-md transition-all duration-300 ${colors.groundGlow}`}
          style={{
            transform: isHovered ? 'scale(1.4)' : 'scale(1)',
            opacity: isHovered ? 0.9 : 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};
