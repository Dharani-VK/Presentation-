import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import homeBg from '../../Assets/home-bg.png';
import { Play, ChevronRight } from 'lucide-react';

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

  // SVG Wave Paths matching the neural fiber curves in the reference image
  const cyberWaves = [
    // Left cluster to center
    { id: 'w1', d: 'M 100 240 C 260 210, 420 380, 560 370 C 700 360, 800 370, 960 370', dur: '2.4s' },
    { id: 'w2', d: 'M 120 360 C 280 370, 440 280, 680 370 C 820 420, 1100 360, 1340 370', dur: '2.8s' },
    { id: 'w3', d: 'M 180 500 C 350 490, 500 560, 780 560 C 1000 560, 1200 480, 1400 480', dur: '3.1s' },
    { id: 'w4', d: 'M 350 250 C 480 350, 620 480, 840 540 C 1050 600, 1280 620, 1500 600', dur: '2.6s' },
    // Right cluster from center
    { id: 'w5', d: 'M 1800 250 C 1600 320, 1380 460, 1120 540 C 920 600, 750 560, 550 560', dur: '2.5s' },
    { id: 'w6', d: 'M 1750 380 C 1520 380, 1320 520, 1080 550 C 900 570, 740 550, 580 550', dur: '3.0s' },
    { id: 'w7', d: 'M 1650 520 C 1450 520, 1280 440, 1050 540 C 880 610, 720 560, 560 560', dur: '2.7s' },
    { id: 'w8', d: 'M 1550 720 C 1350 710, 1180 620, 960 560 C 800 520, 660 550, 520 550', dur: '3.3s' },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-[#02050e] overflow-hidden select-none">
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
              className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-xl transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ── Exact Reference Image Intro Cover Screen (Dissolves permanently when Play is clicked) ───── */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-[#02050e] overflow-hidden"
          >
            {/* 1. Exact High-Resolution Background Image from Reference */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full h-full z-0"
              style={{ backgroundImage: `url(${homeBg})` }}
            />

            {/* 2. SVG Animated Moving Cyber Lines & Sparkling Flow Overlay */}
            <svg
              viewBox="0 0 1920 1080"
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated Flowing Dashed Streams along the Cyber Wave Curves */}
              {cyberWaves.map((wave) => (
                <g key={wave.id}>
                  {/* Moving Dashed Pulse Line */}
                  <path
                    d={wave.d}
                    fill="none"
                    stroke="url(#streamGrad)"
                    strokeWidth="2"
                    strokeDasharray="12 60"
                    strokeLinecap="round"
                    opacity="0.75"
                    filter="url(#neonGlow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="72"
                      to="0"
                      dur={wave.dur}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Flowing Light Bead */}
                  <circle r="3" fill="#a5f3fc" filter="url(#neonGlow)">
                    <animateMotion path={wave.d} dur={wave.dur} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}

              {/* Central Pulsing Energy Halo Ring around the Play Button */}
              <circle
                cx="960"
                cy="548"
                r="115"
                fill="none"
                stroke="rgba(34, 211, 238, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 960 548"
                  to="360 960 548"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* 3. Interactive Clickable Center Button Area (Positioned seamlessly over the art) */}
            <div
              className="absolute top-[50.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer group"
              onClick={handleStartPlay}
            >
              {/* Center Play Disc with Pulsing Glow on Hover */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center transition-all duration-300"
              >
                {/* Outer Glow Halo on Hover */}
                <span className="absolute inset-0 rounded-full border-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 pointer-events-none" />
                <span className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-pulse pointer-events-none" />

                {/* Play Triangle Glow Icon */}
                <Play className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 fill-cyan-400 text-cyan-400 translate-x-1 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>

              {/* START JOURNEY Label & Underline matching exact design */}
              <div className="mt-4 sm:mt-6 text-center">
                <span className="text-xs sm:text-sm md:text-base font-extrabold font-display tracking-[0.35em] text-cyan-400 uppercase drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] group-hover:text-cyan-300 transition-colors">
                  START JOURNEY
                </span>
                <div className="w-14 h-[2.5px] bg-cyan-400 rounded-full mt-2 mx-auto shadow-[0_0_10px_rgba(34,211,238,0.9)] group-hover:w-20 transition-all duration-300" />
              </div>
            </div>

            {/* 4. Interactive Bottom Right Arrow Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
              <motion.button
                onClick={handleStartPlay}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all cursor-pointer"
                title="Start Journey"
                aria-label="Start Journey"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
