import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';
import { motion, AnimatePresence } from 'framer-motion';

export const NavigationControls: React.FC = () => {
  const { isEyeModeActive, nextSlide, prevSlide, canGoNext, canGoPrev } = usePresentation();

  return (
    <AnimatePresence>
      {!isEyeModeActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="pointer-events-none"
        >
          {/* Fixed Bottom Left: Previous */}
          <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-8 z-40 pointer-events-auto">
            {canGoPrev ? (
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.08, x: -2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#06152f]/85 hover:bg-[#06152f] text-white border border-white/15 hover:border-brand-blue/60 backdrop-blur-xl shadow-xl shadow-black/60 transition-all cursor-pointer hover:text-brand-cyan"
                title="Previous Slide (← / PageUp)"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </motion.button>
            ) : null}
          </div>

          {/* Fixed Bottom Right: Next */}
          <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-8 z-40 pointer-events-auto">
            {canGoNext ? (
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.08, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#06152f]/85 hover:bg-[#06152f] text-white border border-white/15 hover:border-brand-blue/60 backdrop-blur-xl shadow-xl shadow-black/60 transition-all cursor-pointer hover:text-brand-cyan"
                title="Next Slide (→ / Space / PageDown)"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            ) : (
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-extrabold border border-white/20 backdrop-blur-xl shadow-glow-purple/40"
              >
                <Sparkles className="w-4 h-4 text-brand-lime" />
                <span className="text-xs sm:text-sm">End of Showcase</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
