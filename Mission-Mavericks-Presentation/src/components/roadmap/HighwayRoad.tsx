import React from 'react';
import { motion } from 'framer-motion';

export const HighwayRoad: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Distant Horizon Atmospheric Glow */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[180px] bg-gradient-radial from-brand-cyan/25 via-brand-purple/15 to-transparent blur-3xl opacity-80" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-gradient-radial from-brand-green/30 to-transparent blur-2xl opacity-70" />

      {/* Distant Futuristic City Skyline / Horizon Beacon Lights */}
      <div className="absolute top-[18%] left-0 right-0 h-[20px] flex items-center justify-center gap-1.5 opacity-60">
        {Array.from({ length: 45 }).map((_, i) => {
          const height = ((i * 17 + 7) % 18) + 4;
          const opacity = ((i * 23) % 60 + 40) / 100;
          return (
            <div
              key={i}
              style={{
                height: `${height}px`,
                opacity,
                backgroundColor: i % 3 === 0 ? '#20df89' : i % 5 === 0 ? '#00d9ff' : '#8b5cf6',
                width: '3px',
                borderRadius: '1px 1px 0 0',
                filter: 'drop-shadow(0 0 4px currentColor)',
              }}
            />
          );
        })}
      </div>

      {/* Main SVG Perspective Highway */}
      <svg
        viewBox="0 0 1200 700"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Asphalt Surface Gradient */}
          <linearGradient id="roadSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#081020" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#0a172e" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#040a16" stopOpacity="1" />
          </linearGradient>

          {/* Glowing Road Edge Gradients */}
          <linearGradient id="leftEdgeGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#20df89" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="rightEdgeGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#20df89" stopOpacity="1" />
          </linearGradient>

          {/* Lane Center Dash Glow */}
          <linearGradient id="laneDashGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#00d9ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#20df89" stopOpacity="0.95" />
          </linearGradient>

          {/* Vehicle Headlight Filter */}
          <filter id="glowLight" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Road Surface Polygon (Sweeping Curve Perspective) */}
        {/* Starts wide at bottom (120 to 1080), curves gently up to vanishing point (580 to 620) */}
        <path
          d="M 585 130 
             Q 590 280, 80 700 
             L 1120 700 
             Q 610 280, 615 130 
             Z"
          fill="url(#roadSurface)"
          stroke="#17284a"
          strokeWidth="1"
        />

        {/* Outer Guardrails / Shoulder lines */}
        <path
          d="M 582 130 Q 587 280, 70 700"
          fill="none"
          stroke="url(#leftEdgeGlow)"
          strokeWidth="4"
          filter="url(#glowLight)"
        />
        <path
          d="M 618 130 Q 613 280, 1130 700"
          fill="none"
          stroke="url(#rightEdgeGlow)"
          strokeWidth="4"
          filter="url(#glowLight)"
        />

        {/* Road Shoulders / Rumble Strips */}
        <path
          d="M 580 130 Q 585 280, 60 700"
          fill="none"
          stroke="rgba(0, 217, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          d="M 620 130 Q 615 280, 1140 700"
          fill="none"
          stroke="rgba(0, 217, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Center Divider Lane 1 (Dashed with forward motion) */}
        <path
          d="M 598 130 Q 598 280, 520 700"
          fill="none"
          stroke="url(#laneDashGlow)"
          strokeWidth="3.5"
          strokeDasharray="16 22"
          className="animate-pulse"
        />

        {/* Center Divider Lane 2 */}
        <path
          d="M 602 130 Q 602 280, 680 700"
          fill="none"
          stroke="url(#laneDashGlow)"
          strokeWidth="3.5"
          strokeDasharray="16 22"
          className="animate-pulse"
        />

        {/* Roadside Guide Reflectors (Left & Right) */}
        {[
          { x: 576, y: 150, r: 1.5, c: '#00d9ff' },
          { x: 560, y: 200, r: 2, c: '#00d9ff' },
          { x: 530, y: 270, r: 2.5, c: '#00d9ff' },
          { x: 480, y: 360, r: 3.5, c: '#20df89' },
          { x: 380, y: 480, r: 4.5, c: '#20df89' },
          { x: 230, y: 610, r: 6, c: '#20df89' },
        ].map((pt, i) => (
          <g key={`left-refl-${i}`}>
            <circle cx={pt.x} cy={pt.y} r={pt.r} fill={pt.c} filter="url(#glowLight)" />
            <line x1={pt.x} y1={pt.y} x2={pt.x} y2={pt.y + pt.r * 3} stroke="#4a5568" strokeWidth="1.5" />
          </g>
        ))}

        {[
          { x: 624, y: 150, r: 1.5, c: '#00d9ff' },
          { x: 640, y: 200, r: 2, c: '#00d9ff' },
          { x: 670, y: 270, r: 2.5, c: '#00d9ff' },
          { x: 720, y: 360, r: 3.5, c: '#20df89' },
          { x: 820, y: 480, r: 4.5, c: '#20df89' },
          { x: 970, y: 610, r: 6, c: '#20df89' },
        ].map((pt, i) => (
          <g key={`right-refl-${i}`}>
            <circle cx={pt.x} cy={pt.y} r={pt.r} fill={pt.c} filter="url(#glowLight)" />
            <line x1={pt.x} y1={pt.y} x2={pt.x} y2={pt.y + pt.r * 3} stroke="#4a5568" strokeWidth="1.5" />
          </g>
        ))}

        {/* Subtle Futuristic Autonomous Vehicle Light Streaks */}
        {/* Car 1 heading away towards horizon */}
        <motion.circle
          animate={{
            cx: [540, 595],
            cy: [650, 150],
            r: [4, 1],
            opacity: [0.8, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeIn' }}
          fill="#ffffff"
          filter="url(#glowLight)"
        />
        <motion.circle
          animate={{
            cx: [552, 597],
            cy: [650, 150],
            r: [4, 1],
            opacity: [0.8, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeIn' }}
          fill="#00d9ff"
          filter="url(#glowLight)"
        />

        {/* Car 2 approaching from horizon (red taillights on right lane) */}
        <motion.circle
          animate={{
            cx: [605, 750],
            cy: [160, 680],
            r: [1, 5],
            opacity: [0, 0.9],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
          fill="#ff4058"
          filter="url(#glowLight)"
        />
        <motion.circle
          animate={{
            cx: [608, 770],
            cy: [160, 680],
            r: [1, 5],
            opacity: [0, 0.9],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
          fill="#ff4058"
          filter="url(#glowLight)"
        />
      </svg>
    </div>
  );
};
