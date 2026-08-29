import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  X,
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

// Coordinate space: 1000 x 460
const nodes: NetworkNode[] = [
  {
    id: 'customer',
    icon: User,
    title: 'Customer',
    subtitle: 'Seamless experience,\nevery step.',
    leftPercent: '23%',
    topPercent: '18%',
    svgAnchorX: 230,
    svgAnchorY: 82,
    ctrlX: 380,
    ctrlY: 150,
  },
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle',
    subtitle: 'Protected today,\nready for tomorrow.',
    leftPercent: '10%',
    topPercent: '48%',
    svgAnchorX: 100,
    svgAnchorY: 220,
    ctrlX: 300,
    ctrlY: 225,
  },
  {
    id: 'repairer',
    icon: Wrench,
    title: 'Repairer',
    subtitle: 'Quality service,\ntrusted network.',
    leftPercent: '23%',
    topPercent: '78%',
    svgAnchorX: 230,
    svgAnchorY: 358,
    ctrlX: 380,
    ctrlY: 290,
  },
  {
    id: 'insurer',
    icon: ShieldCheck,
    title: 'Insurer',
    subtitle: 'Stronger protection,\nsmarter decisions.',
    leftPercent: '77%',
    topPercent: '18%',
    svgAnchorX: 770,
    svgAnchorY: 82,
    ctrlX: 620,
    ctrlY: 150,
  },
  {
    id: 'claim',
    icon: FileText,
    title: 'Claim',
    subtitle: 'Faster claims,\ngreater satisfaction.',
    leftPercent: '90%',
    topPercent: '48%',
    svgAnchorX: 900,
    svgAnchorY: 220,
    ctrlX: 700,
    ctrlY: 225,
  },
  {
    id: 'claims-handler',
    icon: Headphones,
    title: 'Claims Handler',
    subtitle: 'Empowered by tech,\ndriven by purpose.',
    leftPercent: '77%',
    topPercent: '78%',
    svgAnchorX: 770,
    svgAnchorY: 358,
    ctrlX: 620,
    ctrlY: 290,
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        handleCloseVideo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoOpen]);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  return (
    <div className="relative w-full h-[calc(100vh-130px)] max-h-[720px] min-h-[520px] flex flex-col items-center justify-between overflow-hidden select-none">
      {/* ── Background Highway City Layer ───── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none z-0"
        style={{ backgroundImage: `url(${landingBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020713]/80 via-transparent to-[#020713] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none z-0" />

      {/* ── Main Orbital Network Canvas (Centered) ───── */}
      <div className="relative z-10 w-full max-w-6xl flex-1 flex items-center justify-center px-2">
        <div className="relative w-full aspect-[1000/460] max-h-[460px] flex items-center justify-center">
          {/* SVG Animated Flow Lines & Orbits */}
          <svg
            viewBox="0 0 1000 460"
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
              cx="500"
              cy="220"
              rx="440"
              ry="165"
              fill="none"
              stroke="rgba(34, 211, 238, 0.12)"
              strokeWidth="1"
              strokeDasharray="3 5"
              transform="rotate(-3 500 220)"
            />
            <ellipse
              cx="500"
              cy="220"
              rx="330"
              ry="115"
              fill="none"
              stroke="rgba(34, 211, 238, 0.08)"
              strokeWidth="1"
              strokeDasharray="2 4"
              transform="rotate(4 500 220)"
            />

            {/* Connecting Bezier Lines with Continuous Moving Energy Pulses */}
            {nodes.map((node) => {
              const pathD = `M 500 220 Q ${node.ctrlX} ${node.ctrlY} ${node.svgAnchorX} ${node.svgAnchorY}`;
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
                    strokeDasharray="8 45"
                    strokeLinecap="round"
                    opacity="0.85"
                    filter="url(#subtleGlow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="53"
                      to="0"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Moving Light Bead along the line */}
                  <circle r="2.5" fill="#38bdf8" filter="url(#subtleGlow)">
                    <animateMotion
                      path={pathD}
                      dur="2.6s"
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
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenVideo}
              className="relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.55)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_55px_rgba(6,182,212,0.8)]"
              title="Click to Play Presentation Reveal"
              aria-label="Click to Play Presentation Reveal"
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
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center pb-2">
        {/* 4 Pillars Icons Row */}
        <div className="w-full flex items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-2 text-slate-300">
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

      {/* ── Fullscreen Video Modal Portal ───── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isVideoOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-6"
                onClick={handleCloseVideo}
              >
                {/* Close (X) Button */}
                <button
                  onClick={handleCloseVideo}
                  className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50 p-2.5 sm:p-3 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-xl transition-all duration-200 cursor-pointer flex items-center justify-center group focus:outline-none"
                  title="Close Video (Esc)"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:rotate-90" />
                </button>

                {/* Video Container Box */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#040c1e] border border-white/20 shadow-2xl shadow-black/95"
                >
                  <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                    <video
                      ref={videoRef}
                      src={revealFirstPageVideo}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Continue Button underneath video */}
                  <div className="w-full p-4 bg-[#030917] border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      Mission Mavericks • ClaimShield+
                    </span>
                    <button
                      onClick={() => {
                        handleCloseVideo();
                        nextSlide();
                      }}
                      className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold font-display text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-400/20 transition-all cursor-pointer"
                    >
                      <span>Continue Presentation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};











