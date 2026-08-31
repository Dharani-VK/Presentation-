import React, { useRef, useState } from 'react';
import finalVideo from '../../Assets/Final.mp4';
import bgImage from '../../Assets/BG.png';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';

export const Slide10QA: React.FC = () => {
  const [isFullscreenVideo, setIsFullscreenVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFullscreenVideo = () => {
    setIsFullscreenVideo((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center select-none overflow-hidden py-4 sm:py-8">
      {/* ── Background Image Layer (BG.png) ── */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />
      <div className="absolute inset-0 bg-[#02050e]/30 backdrop-blur-[1px] z-0 pointer-events-none" />

      {/* Background Ambient Glows */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-8">
        {/* ── Left Side: Final.mp4 Video Card ───── */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.015 }}
          onClick={toggleFullscreenVideo}
          className="w-full lg:w-1/2 aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-400/35 shadow-[0_0_45px_rgba(6,182,212,0.25)] bg-[#030914] cursor-pointer group transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_65px_rgba(6,182,212,0.45)] relative shrink-0"
        >
          <video
            ref={videoRef}
            src={finalVideo}
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
              <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform group-hover:scale-110" strokeWidth={2.4} />
            </div>
          </div>
        </motion.div>

        {/* ── Right Side: ANY QUESTIONS? Glowing Disc ───── */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-1/2 flex items-center justify-center py-4"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
            title="Any Questions?"
            aria-label="Any Questions?"
            onClick={toggleFullscreenVideo}
          >
            {/* Glowing Neon Disc with Question Mark */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#030914] border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(6,182,212,0.9)]">
              <span className="absolute -inset-2 rounded-full border border-cyan-400/25 animate-pulse pointer-events-none" />
              <span className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.95)] transition-transform duration-300 group-hover:scale-110 select-none flex items-center justify-center">
                ?
              </span>
            </div>

            {/* ANY QUESTIONS? Label & Underline */}
            <div className="text-center mt-1">
              <span className="text-xs sm:text-sm md:text-base font-extrabold font-display tracking-[0.25em] text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] group-hover:text-cyan-300 transition-colors">
                ANY QUESTIONS?
              </span>
              <div className="w-14 h-[2px] bg-cyan-400 rounded-full mt-1.5 mx-auto shadow-[0_0_8px_rgba(34,211,238,0.9)] group-hover:w-20 transition-all duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal (Optional on click) */}
      <AnimatePresence>
        {isFullscreenVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={toggleFullscreenVideo}
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-cyan-400/50 shadow-[0_0_60px_rgba(6,182,212,0.6)]">
              <video
                src={finalVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-black"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreenVideo(false);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
