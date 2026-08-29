import React, { useRef, useState, useEffect } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import firstPageVideo from '../../Assets/first page .mp4';
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
          /* ── Stage 1: Half-Page Centered Looping Video & "Let's Start" Button ───── */
          <motion.div
            key="intro-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-12 pb-6"
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

            {/* Half-Page Framed Video Card Container */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={handleStartReveal}
              className="relative w-full max-w-4xl lg:w-[62%] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-400/35 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#030914] cursor-pointer group transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_70px_rgba(6,182,212,0.45)]"
            >
              {/* Looping First Page Video */}
              <video
                src={firstPageVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />

              {/* Subtle glass hover overlay */}
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-400/20 border border-cyan-300/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white text-white translate-x-0.5" />
                </div>
              </div>
            </motion.div>

            {/* "Let's Start" Button Below Video */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartReveal}
              className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-extrabold font-display text-sm sm:text-base tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all flex items-center gap-3 cursor-pointer"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
              <span>Let's Start</span>
            </motion.button>

            {/* Bottom Right Arrow Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
              <motion.button
                onClick={handleStartReveal}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all cursor-pointer"
                title="Let's Start"
                aria-label="Let's Start"
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
