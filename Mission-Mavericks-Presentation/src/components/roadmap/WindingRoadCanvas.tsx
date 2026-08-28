import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { RoadsideMilestoneStone } from './RoadsideMilestoneStone';
import { FloatingMilestoneCard } from './FloatingMilestoneCard';
import { ROADMAP_MILESTONES } from '../../data/roadmap';

interface WindingRoadCanvasProps {
  activeMilestoneId: 'NOW' | 'NEXT' | 'FUTURE' | null;
  onSelectMilestone: (id: 'NOW' | 'NEXT' | 'FUTURE') => void;
  onCloseCard: () => void;
}

export const WindingRoadCanvas: React.FC<WindingRoadCanvasProps> = ({
  activeMilestoneId,
  onSelectMilestone,
  onCloseCard,
}) => {
  const activeMilestone = activeMilestoneId
    ? ROADMAP_MILESTONES.find((m) => m.id === activeMilestoneId) || null
    : null;

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] rounded-3xl overflow-hidden bg-[#030914] border border-white/10 shadow-2xl">
      {/* Distant Horizon Atmospheric Glow & Mountains */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky gradient */}
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#061226] via-[#091a38] to-transparent" />

        {/* Distant Horizon Sun/Dawn Glow */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[480px] h-[100px] bg-gradient-radial from-brand-cyan/20 via-brand-purple/15 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-[16%] left-[45%] -translate-x-1/2 w-[240px] h-[40px] bg-gradient-radial from-brand-green/25 to-transparent blur-xl opacity-60" />

        {/* Distant Mountain Silhouettes */}
        <svg className="absolute top-[14%] inset-x-0 w-full h-16 opacity-35" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path d="M 0 60 Q 200 20, 400 50 T 800 30 T 1200 55 L 1200 100 L 0 100 Z" fill="#0c1b33" />
          <path d="M 0 75 Q 300 45, 600 65 T 1200 60 L 1200 100 L 0 100 Z" fill="#081426" />
        </svg>

        {/* Distant Skyline Lights */}
        <div className="absolute top-[19%] left-0 right-0 h-[10px] flex items-center justify-center gap-2 opacity-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-t-sm"
              style={{
                height: `${(i % 5) * 2 + 3}px`,
                backgroundColor: i % 2 === 0 ? '#20df89' : '#00d9ff',
                boxShadow: '0 0 4px currentColor',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main SVG Perspective Winding S-Curved Road */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Asphalt Surface Gradient */}
          <linearGradient id="windingAsphalt" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#121822" />
            <stop offset="40%" stopColor="#1a2332" />
            <stop offset="80%" stopColor="#111824" />
            <stop offset="100%" stopColor="#080f1a" />
          </linearGradient>

          {/* Road Edge Neon Light Glow */}
          <linearGradient id="edgeGlow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#20df89" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          {/* Center Dash Line Gradient */}
          <linearGradient id="centerDash" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d1d5db" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Winding Road Asphalt Base Surface (Smooth S-Curve from bottom to horizon) */}
        <path
          d="M 120 600 
             C 180 500, 360 460, 480 400 
             C 620 330, 840 310, 780 220 
             C 740 160, 500 160, 470 120 
             L 495 120 
             C 520 160, 790 160, 840 220 
             C 900 310, 680 330, 540 400 
             C 420 460, 320 500, 780 600 
             Z"
          fill="url(#windingAsphalt)"
          stroke="#2d3748"
          strokeWidth="1.5"
        />

        {/* Left Roadside Edge */}
        <path
          d="M 120 600 
             C 180 500, 360 460, 480 400 
             C 620 330, 840 310, 780 220 
             C 740 160, 500 160, 470 120"
          fill="none"
          stroke="url(#edgeGlow)"
          strokeWidth="3.5"
        />

        {/* Right Roadside Edge */}
        <path
          d="M 780 600 
             C 320 500, 420 460, 540 400 
             C 680 330, 900 310, 840 220 
             C 790 160, 520 160, 495 120"
          fill="none"
          stroke="url(#edgeGlow)"
          strokeWidth="3.5"
        />

        {/* Center Dashed Line following S-Curve */}
        <path
          d="M 450 600 
             C 250 500, 390 460, 510 400 
             C 650 330, 870 310, 810 220 
             C 765 160, 510 160, 482 120"
          fill="none"
          stroke="url(#centerDash)"
          strokeWidth="3.5"
          strokeDasharray="18 16"
          className="animate-pulse"
        />

        {/* Roadside Rock & Foliage Details */}
        <g opacity="0.6">
          <ellipse cx="90" cy="530" rx="14" ry="7" fill="#1c241a" stroke="#2d3829" />
          <ellipse cx="110" cy="550" rx="10" ry="5" fill="#2d281e" />
          <circle cx="95" cy="515" r="4" fill="#1e2c1e" />

          <ellipse cx="880" cy="270" rx="9" ry="5" fill="#1c241a" stroke="#2d3829" />
          <ellipse cx="860" cy="290" rx="7" ry="4" fill="#2d281e" />
          <circle cx="895" cy="260" r="3" fill="#1e2c1e" />

          <ellipse cx="440" cy="140" rx="6" ry="3" fill="#1c241a" />
          <ellipse cx="530" cy="135" rx="5" ry="2.5" fill="#2d281e" />
        </g>
      </svg>

      {/* THREE TRADITIONAL ROADSIDE MILESTONE STONES */}

      {/* 1. NOW MILESTONE STONE (Foreground curve - closest and largest) */}
      <div className="absolute left-[8%] sm:left-[12%] md:left-[14%] bottom-[8%] sm:bottom-[10%] z-20">
        <RoadsideMilestoneStone
          label="NOW"
          number="01"
          stageName="CURRENT"
          scale={1.05}
          isActive={activeMilestoneId === 'NOW'}
          onClick={() => onSelectMilestone('NOW')}
        />
      </div>

      {/* 2. NEXT MILESTONE STONE (Mid-distance curve - medium scale) */}
      <div className="absolute right-[10%] sm:right-[13%] md:right-[15%] top-[38%] sm:top-[36%] z-15">
        <RoadsideMilestoneStone
          label="NEXT"
          number="02"
          stageName="UPCOMING"
          scale={0.75}
          isActive={activeMilestoneId === 'NEXT'}
          onClick={() => onSelectMilestone('NEXT')}
        />
      </div>

      {/* 3. FUTURE MILESTONE STONE (Distant curve near horizon - smallest scale) */}
      <div className="absolute left-[38%] sm:left-[41%] md:left-[43%] top-[12%] sm:top-[11%] z-10">
        <RoadsideMilestoneStone
          label="FUTURE"
          number="03"
          stageName="DESTINATION"
          scale={0.52}
          isActive={activeMilestoneId === 'FUTURE'}
          onClick={() => onSelectMilestone('FUTURE')}
        />
      </div>

      {/* FLOATING INFORMATION CARD OVERLAY (Positioned beside the active milestone stone) */}
      <AnimatePresence mode="wait">
        {activeMilestone && (
          <FloatingMilestoneCard
            key={activeMilestone.id}
            milestone={activeMilestone}
            onClose={onCloseCard}
          />
        )}
      </AnimatePresence>

      {/* Road Entry Instructions */}
      <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-brand-green flex items-center gap-1.5 z-10 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
        <span>CLICK ANY MILESTONE STONE TO OPEN INFORMATION</span>
      </div>
    </div>
  );
};
