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
  x: number; // percentage on layout
  y: number;
  svgX: number; // SVG viewBox coordinate (1200 x 700)
  svgY: number;
  curveControlX: number;
  curveControlY: number;
}

const networkNodes: NetworkNode[] = [
  {
    id: 'customer',
    icon: User,
    title: 'Customer',
    subtitle: 'Seamless experience,\nevery step.',
    x: 23,
    y: 24,
    svgX: 280,
    svgY: 170,
    curveControlX: 420,
    curveControlY: 260,
  },
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle',
    subtitle: 'Protected today,\nready for tomorrow.',
    x: 14,
    y: 46,
    svgX: 165,
    svgY: 320,
    curveControlX: 380,
    curveControlY: 335,
  },
  {
    id: 'repairer',
    icon: Wrench,
    title: 'Repairer',
    subtitle: 'Quality service,\ntrusted network.',
    x: 23,
    y: 69,
    svgX: 280,
    svgY: 480,
    curveControlX: 420,
    curveControlY: 390,
  },
  {
    id: 'insurer',
    icon: ShieldCheck,
    title: 'Insurer',
    subtitle: 'Stronger protection,\nsmarter decisions.',
    x: 77,
    y: 25,
    svgX: 920,
    svgY: 175,
    curveControlX: 780,
    curveControlY: 260,
  },
  {
    id: 'claim',
    icon: FileText,
    title: 'Claim',
    subtitle: 'Faster claims,\ngreater satisfaction.',
    x: 86,
    y: 47,
    svgX: 1035,
    svgY: 330,
    curveControlX: 820,
    curveControlY: 335,
  },
  {
    id: 'claims-handler',
    icon: Headphones,
    title: 'Claims Handler',
    subtitle: 'Empowered by tech,\ndriven by purpose.',
    x: 77,
    y: 71,
    svgX: 920,
    svgY: 495,
    curveControlX: 780,
    curveControlY: 400,
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

  // Handle ESC key to close video
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
    <div className="fixed inset-0 w-screen h-screen z-10 flex flex-col items-center justify-between bg-[#020713] overflow-hidden select-none">
      {/* ── Background City Highway Image Layer ───── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${landingBg})` }}
      />
      {/* Dark Vignette & Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-[#020713]/60 to-[#020713]/80 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,rgba(2,7,19,0.7)_65%,#020713_100%)] z-0" />

      {/* ── Center Network Diagram & SVG Animated Flow Lines ───── */}
      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col items-center justify-center px-4 pt-10 pb-6">
        <div className="relative w-full max-w-6xl aspect-[12/7] flex items-center justify-center">
          {/* SVG Animated Connecting Lines Layer */}
          <svg
            viewBox="0 0 1200 700"
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          >
            <defs>
              {/* Cyan Stream Gradient */}
              <linearGradient id="cyanLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>

              {/* Glowing Pulse Filter */}
              <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Orbit Ellipses */}
            <ellipse
              cx="600"
              cy="330"
              rx="490"
              ry="190"
              fill="none"
              stroke="rgba(34, 211, 238, 0.12)"
              strokeWidth="1"
              strokeDasharray="6 8"
              transform="rotate(-4 600 330)"
            />
            <ellipse
              cx="600"
              cy="330"
              rx="410"
              ry="150"
              fill="none"
              stroke="rgba(34, 211, 238, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 6"
              transform="rotate(6 600 330)"
            />

            {/* Glowing Center Ripple Rings */}
            <circle
              cx="600"
              cy="330"
              r="88"
              fill="none"
              stroke="rgba(34, 211, 238, 0.2)"
              strokeWidth="1.5"
            />
            <circle
              cx="600"
              cy="330"
              r="120"
              fill="none"
              stroke="rgba(34, 211, 238, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {/* Render Connecting Bezier Lines & Moving Data Energy Flows */}
            {networkNodes.map((node) => {
              const pathD = `M 600 330 Q ${node.curveControlX} ${node.curveControlY} ${node.svgX} ${node.svgY}`;
              return (
                <g key={node.id}>
                  {/* Static Base Track Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.18)"
                    strokeWidth="1.5"
                  />

                  {/* Fast Animated Flowing Stream (Outward and Inward Energy Flow) */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#cyanLineGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="14 18"
                    strokeLinecap="round"
                    filter="url(#glowFilter)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="128"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Traveling Glowing Light Particle along the connecting line */}
                  <circle r="3.5" fill="#38bdf8" filter="url(#glowFilter)">
                    <animateMotion
                      path={pathD}
                      dur="2.4s"
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </circle>

                  {/* Node Anchor Dot */}
                  <circle
                    cx={node.svgX}
                    cy={node.svgY}
                    r="4"
                    fill="#38bdf8"
                    filter="url(#glowFilter)"
                  />
                  <circle
                    cx={node.svgX}
                    cy={node.svgY}
                    r="8"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </g>
              );
            })}
          </svg>

          {/* ── Central Click To Play Button ───── */}
          <div className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleOpenVideo}
              className="relative group w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#050e1f]/90 border-2 border-cyan-400/80 shadow-[0_0_50px_rgba(6,182,212,0.45)] backdrop-blur-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_70px_rgba(6,182,212,0.7)]"
              title="Click to Play Presentation Reveal"
              aria-label="Click to Play Presentation Reveal"
            >
              {/* Outer Pulsing Glow Halo */}
              <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-40 pointer-events-none" />
              <span className="absolute -inset-1.5 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />

              {/* Play Triangle Icon */}
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-white transition-transform duration-300 group-hover:scale-110">
                <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-white text-white translate-x-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" />
              </div>
            </motion.button>

            {/* Click to Play Title & Underline */}
            <div className="mt-4 text-center">
              <span className="text-xs sm:text-sm font-extrabold font-display tracking-[0.35em] text-white uppercase drop-shadow-md">
                CLICK TO PLAY
              </span>
              <div className="w-10 h-0.5 bg-cyan-400 rounded-full mt-1.5 mx-auto shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </div>

          {/* ── 6 Orbit Nodes around Central Hub ───── */}
          {networkNodes.map((node) => {
            const Icon = node.icon;
            const isRightSide = node.x > 50;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  top: `${node.y}%`,
                  left: `${node.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute z-20 flex items-center gap-3 md:gap-3.5 ${
                  isRightSide ? 'flex-row' : 'flex-row'
                }`}
              >
                {/* Node Icon Circle */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#07132b]/85 border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-xl flex items-center justify-center text-white/95 shrink-0 transition-transform duration-300 hover:scale-105 hover:border-cyan-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-200" />
                </div>

                {/* Node Title & Description */}
                <div className="flex flex-col text-left min-w-[130px] sm:min-w-[160px] md:min-w-[180px]">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold font-display text-white tracking-tight leading-tight">
                    {node.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-300/85 font-medium leading-tight mt-0.5 whitespace-pre-line">
                    {node.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Feature Pillars & Tagline ───── */}
        <div className="w-full max-w-2xl flex flex-col items-center text-center mt-2 sm:mt-4 z-20">
          {/* 4 Pillars Icons Row */}
          <div className="w-full flex items-center justify-center gap-8 sm:gap-14 md:gap-20 mb-3 text-slate-300">
            {bottomPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1.5 transition-colors duration-200 hover:text-cyan-300 cursor-default"
                >
                  <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-300">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Tagline */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-300/90 tracking-wide">
            Connected today.{' '}
            <span className="text-cyan-400 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Protected tomorrow.
            </span>
          </p>
        </div>
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











