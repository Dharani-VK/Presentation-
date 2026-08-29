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
  ChevronRight,
} from 'lucide-react';

interface NodeData {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  leftPercent: string;
  topPercent: string;
  svgAnchorX: number;
  svgAnchorY: number;
  hasCyanRing?: boolean;
}

const networkNodes: NodeData[] = [
  {
    id: 'customer',
    icon: User,
    title: 'Customer',
    subtitle: 'Seamless experience,\nevery step.',
    leftPercent: '27%',
    topPercent: '22%',
    svgAnchorX: 320,
    svgAnchorY: 138,
    hasCyanRing: true,
  },
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle',
    subtitle: 'Protected today,\nready for tomorrow.',
    leftPercent: '12%',
    topPercent: '47%',
    svgAnchorX: 145,
    svgAnchorY: 290,
  },
  {
    id: 'repairer',
    icon: Wrench,
    title: 'Repairer',
    subtitle: 'Quality service,\ntrusted network.',
    leftPercent: '24%',
    topPercent: '74%',
    svgAnchorX: 290,
    svgAnchorY: 460,
  },
  {
    id: 'insurer',
    icon: ShieldCheck,
    title: 'Insurer',
    subtitle: 'Stronger protection,\nsmarter decisions.',
    leftPercent: '66%',
    topPercent: '24%',
    svgAnchorX: 790,
    svgAnchorY: 150,
    hasCyanRing: true,
  },
  {
    id: 'claim',
    icon: FileText,
    title: 'Claim',
    subtitle: 'Faster claims,\ngreater satisfaction.',
    leftPercent: '79%',
    topPercent: '48%',
    svgAnchorX: 950,
    svgAnchorY: 300,
    hasCyanRing: true,
  },
  {
    id: 'claims-handler',
    icon: Headphones,
    title: 'Claims Handler',
    subtitle: 'Empowered by tech,\ndriven by purpose.',
    leftPercent: '68%',
    topPercent: '75%',
    svgAnchorX: 810,
    svgAnchorY: 465,
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

        {/* Floating Continue Arrow Button when video is active/completed */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: videoEnded ? 0.2 : 2.0 }}
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-50 pointer-events-auto"
          >
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.92 }}
              className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ── Intro Cover Screen (Orbital Network Screen - Dissolves permanently when Play is clicked) ───── */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-between bg-[#020713] overflow-hidden"
          >
            {/* Background Highway City Landscape */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 pointer-events-none z-0 scale-105"
              style={{ backgroundImage: `url(${landingBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020713]/90 via-[#020713]/55 to-[#020713] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-radial-vignette opacity-85 pointer-events-none z-0" />

            {/* Top Spacing for Navbar */}
            <div className="w-full pt-16 sm:pt-20" />

            {/* ── Main Orbital Network Canvas (Centered) ───── */}
            <div className="relative z-10 w-full max-w-7xl flex-1 flex items-center justify-center px-4">
              <div className="relative w-full aspect-[1200/620] max-h-[560px] flex items-center justify-center">
                {/* SVG Animated Moving Connecting Lines & Orbit Rings */}
                <svg
                  viewBox="0 0 1200 620"
                  className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                >
                  <defs>
                    <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 1. Concentric Dotted / Dashed Orbit Ellipses */}
                  <ellipse
                    cx="600"
                    cy="290"
                    rx="390"
                    ry="145"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.14)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    transform="rotate(-5 600 290)"
                  />
                  <ellipse
                    cx="600"
                    cy="290"
                    rx="500"
                    ry="190"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.09)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    transform="rotate(4 600 290)"
                  />
                  <circle
                    cx="600"
                    cy="290"
                    r="85"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.18)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />

                  {/* 2. Top Arching Sweeping Orbital Loop (Vehicle -> Customer -> Insurer -> Claim) */}
                  {(() => {
                    const arcPath =
                      'M 145 290 C 180 180, 240 138, 320 138 C 440 138, 520 80, 600 80 C 680 80, 720 145, 790 150 C 870 155, 930 220, 950 300';
                    return (
                      <g>
                        <path
                          d={arcPath}
                          fill="none"
                          stroke="rgba(34, 211, 238, 0.28)"
                          strokeWidth="1.2"
                        />
                        <path
                          d={arcPath}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.6"
                          strokeDasharray="8 50"
                          strokeLinecap="round"
                          opacity="0.9"
                          filter="url(#cyanGlow)"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="58"
                            to="0"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </path>
                        <circle r="2.5" fill="#38bdf8" filter="url(#cyanGlow)">
                          <animateMotion path={arcPath} dur="3.2s" repeatCount="indefinite" />
                        </circle>
                      </g>
                    );
                  })()}

                  {/* 3. Lower Curves: Repairer to Center Hub & Claims Handler to Center Hub */}
                  {(() => {
                    const repairerCurve = 'M 290 460 C 390 460, 480 390, 550 320';
                    const handlerCurve = 'M 810 465 C 730 465, 670 390, 640 320';
                    return (
                      <g>
                        <path
                          d={repairerCurve}
                          fill="none"
                          stroke="rgba(34, 211, 238, 0.25)"
                          strokeWidth="1.2"
                        />
                        <path
                          d={repairerCurve}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.6"
                          strokeDasharray="6 35"
                          strokeLinecap="round"
                          opacity="0.85"
                          filter="url(#cyanGlow)"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="41"
                            to="0"
                            dur="1.8s"
                            repeatCount="indefinite"
                          />
                        </path>

                        <path
                          d={handlerCurve}
                          fill="none"
                          stroke="rgba(34, 211, 238, 0.25)"
                          strokeWidth="1.2"
                        />
                        <path
                          d={handlerCurve}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.6"
                          strokeDasharray="6 35"
                          strokeLinecap="round"
                          opacity="0.85"
                          filter="url(#cyanGlow)"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="41"
                            to="0"
                            dur="1.8s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    );
                  })()}

                  {/* 4. Radial Connecting Rays from Center Hub to each Node */}
                  {[
                    { id: 'r-customer', path: 'M 560 250 L 320 138' },
                    { id: 'r-vehicle', path: 'M 540 290 L 145 290' },
                    { id: 'r-repairer', path: 'M 560 330 L 290 460' },
                    { id: 'r-insurer', path: 'M 640 250 L 790 150' },
                    { id: 'r-claim', path: 'M 660 290 L 950 300' },
                    { id: 'r-handler', path: 'M 640 330 L 810 465' },
                  ].map((ray) => (
                    <g key={ray.id}>
                      <path
                        d={ray.path}
                        fill="none"
                        stroke="rgba(34, 211, 238, 0.22)"
                        strokeWidth="1.2"
                      />
                      <path
                        d={ray.path}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.6"
                        strokeDasharray="6 35"
                        strokeLinecap="round"
                        opacity="0.85"
                        filter="url(#cyanGlow)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="41"
                          to="0"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <circle r="2.5" fill="#38bdf8" filter="url(#cyanGlow)">
                        <animateMotion path={ray.path} dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  ))}

                  {/* 5. Anchor Dots at Node Positions */}
                  {networkNodes.map((node) => (
                    <g key={`anchor-${node.id}`}>
                      <circle
                        cx={node.svgAnchorX}
                        cy={node.svgAnchorY}
                        r="3.5"
                        fill="#22d3ee"
                        filter="url(#cyanGlow)"
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
                  ))}
                </svg>

                {/* ── Central Hub: LET'S BEGIN & Play Button ───── */}
                <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={handleStartPlay}
                    className="relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_60px_rgba(6,182,212,0.85)]"
                    title="Let's Begin Presentation"
                    aria-label="Let's Begin Presentation"
                  >
                    {/* Outer Pulsing Halo */}
                    <span className="absolute -inset-2 rounded-full border border-cyan-400/25 animate-pulse pointer-events-none" />

                    {/* Play Triangle Icon */}
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                  </motion.button>

                  {/* LET'S BEGIN Title & Underline (Matching Exact Reference Image) */}
                  <div className="mt-3.5 text-center cursor-pointer" onClick={handleStartPlay}>
                    <span className="text-xs sm:text-sm md:text-[15px] font-extrabold font-display tracking-[0.3em] text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      LET'S BEGIN
                    </span>
                    <div className="w-12 h-[2px] bg-cyan-400 rounded-full mt-1.5 mx-auto shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  </div>
                </div>

                {/* ── 6 Stakeholder Orbit Nodes ───── */}
                {networkNodes.map((node) => {
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
                      {/* Node Icon Circle Badge */}
                      <div
                        className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#050e20]/90 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg shadow-black/60 transition-transform duration-200 hover:scale-105 ${
                          node.hasCyanRing
                            ? 'border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                            : 'border border-white/20'
                        }`}
                      >
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

            {/* Fixed Bottom Right Arrow Button (Matching Image) */}
            <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
              <motion.button
                onClick={handleStartPlay}
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#06152f]/85 hover:bg-[#06152f] text-white border border-white/15 hover:border-brand-blue/60 backdrop-blur-xl shadow-xl shadow-black/60 transition-all cursor-pointer hover:text-brand-cyan"
                title="Begin Presentation"
                aria-label="Begin Presentation"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};











