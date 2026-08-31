import React, { useRef, useState, useEffect } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import firstPageVideo from '../../Assets/first page.mp4';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import bgImage from '../../Assets/BG.png';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [stage, setStage] = useState<'intro' | 'reveal'>('intro');
  const [revealEnded, setRevealEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartReveal = () => {
    setStage('reveal');
  };

  const handleBackToIntro = () => {
    setStage('intro');
    setRevealEnded(false);
  };

  const handleRevealEnded = () => {
    setRevealEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (stage === 'reveal' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn('Video play error:', err);
      });
    }
  }, [stage]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-[#02050e] overflow-hidden select-none">
      {/* ── Background Image Layer (BG.png) ── */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 z-0 pointer-events-none"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      <div className="absolute inset-0 bg-[#02050e]/20 backdrop-blur-[1px] z-0 pointer-events-none" />

      <AnimatePresence mode="wait">
        {stage === 'intro' ? (
          /* ── Stage 1: ONLY first page.mp4 on Left + ONLY LET'S BEGIN on Right ───── */
          <motion.div
            key="intro-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 w-full h-full flex items-center justify-center px-6 sm:px-12 lg:px-16 py-8"
          >
            {/* Background Ambient Glows */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* ── Left Side: ONLY first page.mp4 ───── */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.015 }}
                onClick={handleStartReveal}
                className="w-full lg:w-1/2 aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-400/35 shadow-[0_0_45px_rgba(6,182,212,0.25)] bg-[#030914] cursor-pointer group transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_65px_rgba(6,182,212,0.45)] relative shrink-0"
              >
                <video
                  src={firstPageVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400/20 border border-cyan-300/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.7)]">
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>

              {/* ── Right Side: ONLY LET'S BEGIN Button ───── */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full lg:w-1/2 flex items-center justify-center py-4"
              >
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleStartReveal}
                  className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
                  title="Let's Begin"
                  aria-label="Let's Begin"
                >
                  {/* Glowing Neon Disc with Arrow Icon */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(6,182,212,0.9)]">
                    <span className="absolute -inset-2 rounded-full border border-cyan-400/25 animate-pulse pointer-events-none" />
                    <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" strokeWidth={2.5} />
                  </div>

                  {/* LET'S BEGIN Label & Underline */}
                  <div className="text-center mt-1">
                    <span className="text-xs sm:text-sm md:text-base font-extrabold font-display tracking-[0.3em] text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] group-hover:text-cyan-300 transition-colors">
                      LET'S BEGIN
                    </span>
                    <div className="w-12 h-[2px] bg-cyan-400 rounded-full mt-1.5 mx-auto shadow-[0_0_8px_rgba(34,211,238,0.9)] group-hover:w-16 transition-all duration-300" />
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Fixed Bottom Right Arrow Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
              <motion.button
                onClick={handleStartReveal}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all cursor-pointer"
                title="LET'S BEGIN"
                aria-label="LET'S BEGIN"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* ── Stage 2: Fullscreen Reveal Video & Proceed to Following Pages ───── */
          <motion.div
            key="reveal-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full bg-black flex items-center justify-center z-20"
          >
            <video
              ref={videoRef}
              src={revealFirstPageVideo}
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover bg-black"
              onEnded={handleRevealEnded}
            />

            {/* Fixed Bottom Left: Previous Page Arrow Button */}
            <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-8 z-40 pointer-events-auto">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={handleBackToIntro}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-xl transition-all cursor-pointer"
                title="Previous Video"
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:-translate-x-0.5" />
              </motion.button>
            </div>

            {/* Fixed Bottom Right: Next Page Arrow Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: revealEnded ? 0.2 : 2.0 }}
                onClick={nextSlide}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-xl transition-all cursor-pointer"
                title="Continue Presentation"
                aria-label="Continue Presentation"
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
