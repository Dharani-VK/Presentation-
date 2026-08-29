import React, { useRef, useState, useEffect } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import firstPageVideo from '../../Assets/first page .mp4';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [stage, setStage] = useState<'intro' | 'reveal'>('intro');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartReveal = () => {
    setStage('reveal');
  };

  const handleRevealEnded = () => {
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
    <div className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-black overflow-hidden select-none">
      {/* ── Video Player: Stage 1 (first page .mp4 loop) -> Stage 2 (Reveal first page.mp4) ───── */}
      <video
        key={stage}
        ref={videoRef}
        src={stage === 'intro' ? firstPageVideo : revealFirstPageVideo}
        autoPlay
        loop={stage === 'intro'}
        muted={stage === 'intro'}
        playsInline
        preload="auto"
        className="w-full h-full object-cover bg-black"
        onEnded={stage === 'reveal' ? handleRevealEnded : undefined}
      />

      {/* ── Interactive Click Target over 'LET'S BEGIN' Button during Stage 1 ───── */}
      {stage === 'intro' && (
        <div
          onClick={handleStartReveal}
          title="Let's Begin"
          aria-label="Let's Begin"
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full cursor-pointer z-30 flex items-center justify-center group"
        >
          {/* Subtle glowing halo on hover */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-300 pointer-events-none" />
        </div>
      )}

      {/* ── Fixed Bottom Right Navigation Arrow Button ───── */}
      <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
        <motion.button
          onClick={stage === 'intro' ? handleStartReveal : nextSlide}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.92 }}
          className="group flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051126]/90 hover:bg-[#051126] text-white border border-cyan-400/40 hover:border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-xl transition-all cursor-pointer"
          title={stage === 'intro' ? "Let's Begin" : "Next Slide"}
          aria-label={stage === 'intro' ? "Let's Begin" : "Next Slide"}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-0.5" />
        </motion.button>
      </div>
    </div>
  );
};
