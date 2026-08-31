import React from 'react';
import { motion } from 'framer-motion';

interface RoadsideMilestoneStoneProps {
  label: 'NOW' | 'NEXT' | 'FUTURE';
  number: '01' | '02' | '03';
  stageName: string;
  isActive: boolean;
  scale?: number;
  onClick: () => void;
}

export const RoadsideMilestoneStone: React.FC<RoadsideMilestoneStoneProps> = ({
  label,
  number,
  stageName,
  isActive,
  scale = 1.0,
  onClick,
}) => {
  const getCapColor = () => {
    switch (label) {
      case 'NOW':
        return {
          capBg: 'from-emerald-500 to-green-600',
          capBorder: '#10b981',
          textHex: '#20df89',
          glowColor: 'rgba(32, 223, 137, 0.5)',
          activeGlow: '0 0 30px rgba(32, 223, 137, 0.65)',
        };
      case 'NEXT':
        return {
          capBg: 'from-cyan-500 to-blue-600',
          capBorder: '#06b6d4',
          textHex: '#00d9ff',
          glowColor: 'rgba(0, 217, 255, 0.5)',
          activeGlow: '0 0 30px rgba(0, 217, 255, 0.65)',
        };
      case 'FUTURE':
      default:
        return {
          capBg: 'from-purple-500 to-indigo-600',
          capBorder: '#a855f7',
          textHex: '#a855f7',
          glowColor: 'rgba(168, 85, 247, 0.5)',
          activeGlow: '0 0 30px rgba(168, 85, 247, 0.65)',
        };
    }
  };

  const style = getCapColor();

  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Milestone ${label} ${stageName}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      initial={false}
      animate={{
        y: isActive ? -8 : 0,
        scale: isActive ? scale * 1.06 : scale,
      }}
      whileHover={{
        y: isActive ? -10 : -5,
        scale: isActive ? scale * 1.09 : scale * 1.04,
      }}
      whileTap={{
        scale: scale * 0.96,
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 24,
        mass: 0.8,
      }}
      className="relative flex flex-col items-center cursor-pointer select-none group p-2 focus:outline-none"
      style={{
        transformOrigin: 'bottom center',
      }}
    >
      {/* Stone Container */}
      <div className="relative flex flex-col items-center">
        {/* Solid Concrete Milestone Stone Body */}
        <div
          className={`relative w-[125px] sm:w-[150px] h-[155px] sm:h-[185px] flex flex-col items-center overflow-hidden transition-all duration-300 ${
            isActive ? 'brightness-110' : 'opacity-85 group-hover:opacity-100'
          }`}
          style={{
            borderRadius: '50% 50% 10px 10px / 38% 38% 6px 6px',
            background: 'linear-gradient(180deg, #d8d3c5 0%, #ede8dc 35%, #ded8cb 75%, #c8c2b3 100%)',
            border: isActive ? `2.5px solid ${style.capBorder}` : '1.5px solid #a8a294',
            boxShadow: isActive
              ? `${style.activeGlow}, inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.3)`
              : '0 8px 20px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.25)',
          }}
        >
          {/* Concrete Texture Speckles & Weathering Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: 'radial-gradient(#5a5345 1px, transparent 1px), radial-gradient(#2b2821 1px, transparent 1px)',
              backgroundSize: '8px 8px, 12px 12px',
              backgroundPosition: '0 0, 4px 4px',
            }}
          />

          {/* Weathering Micro-Cracks & Chipped Edge Details */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 150 185">
            <path d="M 115 32 L 121 39 L 114 44" stroke="#686153" strokeWidth="1" fill="none" />
            <path d="M 18 135 L 26 143 L 24 156" stroke="#686153" strokeWidth="0.75" fill="none" />
            <circle cx="120" cy="105" r="1.5" fill="#4a4439" />
            <circle cx="32" cy="80" r="1" fill="#4a4439" />
          </svg>

          {/* Semicircular Painted Cap Dome (Traditional Indian Highway Milestone Cap) */}
          <div
            className={`w-full h-[50px] sm:h-[60px] bg-gradient-to-b ${style.capBg} flex flex-col items-center justify-center pt-1.5 sm:pt-2 pb-0.5 relative shadow-inner border-b-2 border-black/20`}
            style={{
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            }}
          >
            {/* Milestone Number / Code */}
            <span className="text-[11px] sm:text-xs font-black font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-black/30 text-white shadow-sm">
              KM {number}
            </span>
            <div className="absolute top-1 left-4 right-4 h-1.5 rounded-full bg-white/20 blur-[1px]" />
          </div>

          {/* Main Stone Body with Painted Stencil Lettering */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-2.5 py-2 relative z-10">
            {/* Stenciled Primary Label (NOW / NEXT / FUTURE) */}
            <span
              className="text-xl sm:text-3xl font-black font-display tracking-widest text-[#1e1b18] uppercase select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
              style={{
                letterSpacing: '0.12em',
                fontFamily: 'Outfit, Plus Jakarta Sans, sans-serif',
              }}
            >
              {label}
            </span>

            {/* Stenciled Subtitle / Stage Name */}
            <span className="text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-wider text-[#453f35] mt-0.5 bg-black/5 px-2 py-0.5 rounded-sm border-t border-b border-black/10">
              {stageName}
            </span>

            {/* Active Glow Dot */}
            {isActive && (
              <div
                className="mt-1.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/15 text-[9px] font-black uppercase tracking-wider"
                style={{ color: style.textHex }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: style.textHex }} />
                <span>SELECTED</span>
              </div>
            )}
          </div>

          {/* Chipped Base Rim */}
          <div className="w-full h-2 bg-[#b5aea0] border-t border-[#9c9587]" />
        </div>

        {/* Natural Roadside Ground Cast Shadow & Ambient Base Glow */}
        <div
          className="w-[140px] sm:w-[170px] h-4 sm:h-5 rounded-[50%] -mt-2 transition-all duration-300 blur-sm"
          style={{
            background: isActive
              ? `radial-gradient(ellipse at center, ${style.glowColor} 0%, rgba(0,0,0,0.8) 60%, transparent 85%)`
              : 'radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, transparent 75%)',
            transform: isActive ? 'scale(1.2)' : 'scale(1)',
          }}
        />
      </div>
    </motion.div>
  );
};
