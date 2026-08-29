import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import landingBg from '../../Assets/landing-bg.jpg';
import {
  Play,
  User,
  Car,
  Wrench,
  ShieldCheck,
  FileText,
  Headphones,
  Shield,
  Network,
  Cpu,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface NetworkNode {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  leftPercent: string;
  topPercent: string;
  svgAnchorX: number;
  svgAnchorY: number;
  ctrlX: number;
  ctrlY: number;
}

// Coordinate space: 1100 x 500
const nodes: NetworkNode[] = [
  {
    id: 'customer',
    icon: User,
    title: 'Customer',
    subtitle: 'Seamless experience,\nevery step.',
    leftPercent: '23%',
    topPercent: '19%',
    svgAnchorX: 253,
    svgAnchorY: 95,
    ctrlX: 430,
    ctrlY: 165,
  },
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle',
    subtitle: 'Protected today,\nready for tomorrow.',
    leftPercent: '11%',
    topPercent: '48%',
    svgAnchorX: 121,
    svgAnchorY: 240,
    ctrlX: 340,
    ctrlY: 245,
  },
  {
    id: 'repairer',
    icon: Wrench,
    title: 'Repairer',
    subtitle: 'Quality service,\ntrusted network.',
    leftPercent: '23%',
    topPercent: '77%',
    svgAnchorX: 253,
    svgAnchorY: 385,
    ctrlX: 430,
    ctrlY: 315,
  },
  {
    id: 'insurer',
    icon: ShieldCheck,
    title: 'Insurer',
    subtitle: 'Stronger protection,\nsmarter decisions.',
    leftPercent: '77%',
    topPercent: '19%',
    svgAnchorX: 847,
    svgAnchorY: 95,
    ctrlX: 670,
    ctrlY: 165,
  },
  {
    id: 'claim',
    icon: FileText,
    title: 'Claim',
    subtitle: 'Faster claims,\ngreater satisfaction.',
    leftPercent: '89%',
    topPercent: '48%',
    svgAnchorX: 979,
    svgAnchorY: 240,
    ctrlX: 760,
    ctrlY: 245,
  },
  {
    id: 'claims-handler',
    icon: Headphones,
    title: 'Claims Handler',
    subtitle: 'Empowered by tech,\ndriven by purpose.',
    leftPercent: '77%',
    topPercent: '77%',
    svgAnchorX: 847,
    svgAnchorY: 385,
    ctrlX: 670,
    ctrlY: 315,
  },
];

const bottomPillars = [
  { label: 'Protection', icon: Shield },
  { label: 'Connection', icon: Network },
  { label: 'Technology', icon: Cpu },
  { label: 'Growth', icon: TrendingUp },
];

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartPlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.error('Play error:', err);
        });
      }
    }, 50);
  };

  const handleVideoEnded = () => {
    setVideoEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-[#020713] overflow-hidden select-none">
      {/* ── Embedded Fullscreen Video Layer ───── */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black z-0">
        <video
          ref={videoRef}
          src={revealFirstPageVideo}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onEnded={handleVideoEnded}
        />

        {/* Floating Continue Button when video is playing or completed */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: videoEnded ? 0.2 : 2.5 }}
            className="absolute bottom-8 right-8 z-40 flex items-center gap-3"
          >
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold font-display text-xs sm:text-sm tracking-wide shadow-xl shadow-cyan-400/25 transition-all cursor-pointer"
            >
              <span>Continue Presentation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* ── Intro Cover Screen (Orbital Network Cover - Dissolves permanently when Play is clicked) ───── */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-between bg-[#020713] overflow-hidden"
          >
            {/* Background Night City Highway Backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none z-0 scale-105"
              style={{ backgroundImage: `url(${landingBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020713]/90 via-[#020713]/50 to-[#020713] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-radial-vignette opacity-85 pointer-events-none z-0" />

            {/* Top Spacer for layout balance */}
            <div className="w-full pt-12 sm:pt-16" />

            {/* ── Main Orbital Network Canvas (Centered) ───── */}
            <div className="relative z-10 w-full max-w-6xl flex-1 flex items-center justify-center px-4">
              <div className="relative w-full aspect-[1100/500] max-h-[500px] flex items-center justify-center">
                {/* SVG Animated Moving Lines & Orbit Rings */}
                <svg
                  viewBox="0 0 1100 500"
                  className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                >
                  <defs>
                    <linearGradient id="cyanLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background Elliptical Orbit Rings */}
                  <ellipse
                    cx="550"
                    cy="240"
                    rx="480"
                    ry="180"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.12)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    transform="rotate(-3 550 240)"
                  />
                  <ellipse
                    cx="550"
                    cy="240"
                    rx="360"
                    ry="125"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    transform="rotate(4 550 240)"
                  />

                  {/* Connecting Bezier Lines with Continuous Moving Energy Pulses */}
                  {nodes.map((node) => {
                    const pathD = `M 550 240 Q ${node.ctrlX} ${node.ctrlY} ${node.svgAnchorX} ${node.svgAnchorY}`;
                    return (
                      <g key={node.id}>
                        {/* Clean Static Base Line */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke="rgba(34, 211, 238, 0.25)"
                          strokeWidth="1.2"
                        />

                        {/* Moving Dashed Stream */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.6"
                          strokeDasharray="8 50"
                          strokeLinecap="round"
                          opacity="0.85"
                          filter="url(#subtleGlow)"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="58"
                            to="0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </path>

                        {/* Moving Light Bead along the line */}
                        <circle r="2.5" fill="#38bdf8" filter="url(#subtleGlow)">
                          <animateMotion
                            path={pathD}
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Clean Anchor Dot at Node Circle */}
                        <circle
                          cx={node.svgAnchorX}
                          cy={node.svgAnchorY}
                          r="3.5"
                          fill="#22d3ee"
                          filter="url(#subtleGlow)"
                        />
                        <circle
                          cx={node.svgAnchorX}
                          cy={node.svgAnchorY}
                          r="6.5"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="1"
                          opacity="0.4"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* ── Central CLICK TO PLAY Hub ───── */}
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleStartPlay}
                    className="relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.55)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_60px_rgba(6,182,212,0.85)]"
                    title="Click to Play Presentation"
                    aria-label="Click to Play Presentation"
                  >
                    {/* Outer Pulsing Glow Halo */}
                    <span className="absolute -inset-2 rounded-full border border-cyan-400/25 animate-pulse pointer-events-none" />

                    {/* Play Triangle Icon */}
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                  </motion.button>

                  {/* Click to Play Title & Underline */}
                  <div className="mt-3 text-center">
                    <span className="text-[10px] sm:text-xs font-extrabold font-display tracking-[0.35em] text-white uppercase drop-shadow">
                      CLICK TO PLAY
                    </span>
                    <div className="w-8 h-[2px] bg-cyan-400 rounded-full mt-1 mx-auto shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  </div>
                </div>

                {/* ── 6 Orbit Stakeholder Nodes ───── */}
                {nodes.map((node) => {
                  const Icon = node.icon;

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        top: node.topPercent,
                        left: node.leftPercent,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="absolute z-20 flex items-center gap-2.5 sm:gap-3"
                    >
                      {/* Node Icon Circle */}
                      <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#061226]/85 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg shadow-black/60 transition-transform duration-200 hover:scale-105 hover:border-cyan-400/60">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.6]" />
                      </div>

                      {/* Node Title & Subtitle */}
                      <div className="flex flex-col text-left">
                        <h3 className="text-xs sm:text-sm md:text-[15px] font-bold font-display text-white tracking-tight leading-tight">
                          {node.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] md:text-[12px] text-slate-300/80 font-normal leading-tight mt-0.5 whitespace-pre-line">
                          {node.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Bottom Feature Pillars & Tagline ───── */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center pb-6 sm:pb-8">
              {/* 4 Pillars Icons Row */}
              <div className="w-full flex items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-2.5 text-slate-300">
                {bottomPillars.map((pillar, idx) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-1 transition-colors duration-200 hover:text-cyan-300 cursor-default"
                    >
                      <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 stroke-[1.5]" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300">
                        {pillar.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Tagline */}
              <p className="text-xs sm:text-sm font-normal text-slate-300/90 tracking-wide">
                Connected today.{' '}
                <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                  Protected tomorrow.
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};











