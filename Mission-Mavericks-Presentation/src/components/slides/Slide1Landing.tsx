import React, { useRef, useState, useEffect } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';
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
      <AnimatePresence mode="wait">
        {stage === 'intro' ? (
          /* ── Stage 1: Clean Minimal Home Screen with Centered LET'S BEGIN Button ───── */
          <motion.div
            key="intro-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 py-8"
          >
            {/* Background Ambient Cyber Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/12 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Centered Glowing LET'S BEGIN Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center z-20"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleStartReveal}
                className="flex flex-col items-center gap-4 cursor-pointer group focus:outline-none"
                title="Let's Begin"
                aria-label="Let's Begin"
              >
                {/* Glowing Neon Disc with Play Triangle */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.65)] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_70px_rgba(6,182,212,0.95)]">
                  <span className="absolute -inset-2 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
                  <Play className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 fill-cyan-400 text-cyan-400 translate-x-1 drop-shadow-[0_0_20px_rgba(34,211,238,0.9)] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* LET'S BEGIN Label & Underline */}
                <div className="text-center mt-2">
                  <span className="text-sm sm:text-base md:text-lg font-extrabold font-display tracking-[0.35em] text-cyan-400 uppercase drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] group-hover:text-cyan-300 transition-colors">
                    LET'S BEGIN
                  </span>
                  <div className="w-16 h-[2.5px] bg-cyan-400 rounded-full mt-2 mx-auto shadow-[0_0_10px_rgba(34,211,238,0.9)] group-hover:w-24 transition-all duration-300" />
                </div>
              </motion.button>
            </motion.div>

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
