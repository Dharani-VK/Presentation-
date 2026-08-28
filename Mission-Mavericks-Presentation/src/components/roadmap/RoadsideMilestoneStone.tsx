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
      whileHover={{ y: -5, scale: scale * 1.05 }}
      whileTap={{ scale: scale * 0.98 }}
      className="relative flex flex-col items-center cursor-pointer select-none group"
      style={{
        transform: isActive ? `translateY(-6px) scale(${scale * 1.06})` : `translateY(0) scale(${scale})`,
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transformOrigin: 'bottom center',
      }}
    >
      {/* Stone Container */}
      <div className="relative flex flex-col items-center">
        {/* Solid Concrete Milestone Stone Body */}
        <div
          className={`relative w-[110px] sm:w-[130px] h-[135px] sm:h-[160px] flex flex-col items-center overflow-hidden transition-all duration-300 ${
            isActive ? 'brightness-110' : 'opacity-85 group-hover:opacity-100'
          }`}
          style={{
            borderRadius: '50% 50% 8px 8px / 38% 38% 5px 5px',
            background: 'linear-gradient(180deg, #d8d3c5 0%, #ede8dc 35%, #ded8cb 75%, #c8c2b3 100%)',
            border: isActive ? `2px solid ${style.capBorder}` : '1.5px solid #a8a294',
            boxShadow: isActive
              ? `${style.activeGlow}, inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.3)`
              : '0 8px 18px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.25)',
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 130 160">
            <path d="M 100 28 L 105 34 L 99 38" stroke="#686153" strokeWidth="1" fill="none" />
            <path d="M 15 115 L 22 122 L 20 134" stroke="#686153" strokeWidth="0.75" fill="none" />
            <circle cx="105" cy="90" r="1.5" fill="#4a4439" />
            <circle cx="28" cy="70" r="1" fill="#4a4439" />
          </svg>

          {/* Semicircular Painted Cap Dome (Traditional Indian Highway Milestone Cap) */}
          <div
            className={`w-full h-[44px] sm:h-[52px] bg-gradient-to-b ${style.capBg} flex flex-col items-center justify-center pt-1.5 sm:pt-2 pb-0.5 relative shadow-inner border-b-2 border-black/20`}
            style={{
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            }}
          >
            {/* Milestone Number / Code */}
            <span className="text-[10px] sm:text-xs font-black font-mono tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/30 text-white shadow-sm">
              KM {number}
            </span>
            <div className="absolute top-1 left-4 right-4 h-1.5 rounded-full bg-white/20 blur-[1px]" />
          </div>

          {/* Main Stone Body with Painted Stencil Lettering */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-2 py-1.5 relative z-10">
            {/* Stenciled Primary Label (NOW / NEXT / FUTURE) */}
            <span
              className="text-lg sm:text-2xl font-black font-display tracking-widest text-[#1e1b18] uppercase select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
              style={{
                letterSpacing: '0.12em',
                fontFamily: 'Outfit, Plus Jakarta Sans, sans-serif',
              }}
            >
              {label}
            </span>

            {/* Stenciled Subtitle / Stage Name */}
            <span className="text-[9px] sm:text-[10px] font-bold font-mono uppercase tracking-wider text-[#453f35] mt-0.5 bg-black/5 px-1.5 py-0.2 rounded-sm border-t border-b border-black/10">
              {stageName}
            </span>

            {/* Active Glow Dot */}
            {isActive && (
              <div
                className="mt-1.5 flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-black/15 text-[8px] font-black uppercase tracking-wider"
                style={{ color: style.textHex }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: style.textHex }} />
                <span>SELECTED</span>
              </div>
            )}
          </div>

          {/* Chipped Base Rim */}
          <div className="w-full h-1.5 bg-[#b5aea0] border-t border-[#9c9587]" />
        </div>

        {/* Natural Roadside Ground Cast Shadow & Ambient Base Glow */}
        <div
          className="w-[120px] sm:w-[145px] h-3.5 sm:h-4 rounded-[50%] -mt-1.5 transition-all duration-300 blur-sm"
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
