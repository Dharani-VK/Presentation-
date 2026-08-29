import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import { Play, ArrowRight } from 'lucide-react';

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const startPlayback = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setHasStarted(true);
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
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-[#020713] overflow-hidden select-none">
      {/* Fullscreen Video (Hidden until Play button is clicked) */}
      <div className="w-full h-full flex items-center justify-center relative">
        {hasStarted && (
          <video
            ref={videoRef}
            src={revealFirstPageVideo}
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onEnded={handleVideoEnded}
          />
        )}

        {/* Play Button Overlay (Solid dark background hiding all behind content until clicked) */}
        <AnimatePresence>
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#020713] z-30 cursor-pointer"
              onClick={startPlayback}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={startPlayback}
                className="relative group p-6 sm:p-8 rounded-full bg-gradient-to-tr from-brand-cyan/30 via-brand-blue/40 to-brand-green/30 border-2 border-brand-cyan/70 shadow-[0_0_50px_rgba(0,217,255,0.45)] backdrop-blur-xl transition-all flex items-center justify-center cursor-pointer"
                title="Play Presentation Reveal"
                aria-label="Play Presentation Reveal"
              >
                <div className="absolute inset-0 rounded-full bg-brand-cyan/25 animate-ping opacity-60 pointer-events-none" />
                <Play className="w-10 h-10 sm:w-14 sm:h-14 fill-white text-white translate-x-1 drop-shadow-lg" />
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-sm sm:text-base md:text-lg font-bold font-display uppercase tracking-widest text-[#5ce1e6] drop-shadow-md"
              >
                Click to Play
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue Navigation Button after video has started */}
        {hasStarted && (
          <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-green text-brand-navy hover:brightness-110 font-bold font-display text-sm tracking-wide shadow-lg shadow-brand-cyan/20 transition-all cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};











