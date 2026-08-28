import React from 'react';
import { usePresentation, TOTAL_SLIDES } from '../../context/PresentationContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ProgressIndicator: React.FC = () => {
  const { currentSlide, isEyeModeActive, goToSlide } = usePresentation();

  return (
    <AnimatePresence>
      {!isEyeModeActive && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="flex items-center gap-3 select-none"
        >
          {/* Text Badge */}
          <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-bold tracking-wider text-white">
            <span>Slide </span>
            <span className="text-brand-green font-black">{currentSlide + 1}</span>
            <span className="text-white/50"> / {TOTAL_SLIDES}</span>
          </div>

          {/* Dots / Interactive Step Bars */}
          <div className="hidden sm:flex items-center gap-1.5 bg-black/40 px-2.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => {
              const isActive = idx === currentSlide;
              const isPast = idx < currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-6 bg-gradient-to-r from-brand-green to-brand-cyan shadow-glow-green/50'
                      : isPast
                      ? 'w-2 bg-brand-green/60 hover:bg-brand-green'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
