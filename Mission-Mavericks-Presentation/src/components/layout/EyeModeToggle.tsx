import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { usePresentation } from '../../context/PresentationContext';
import { motion } from 'framer-motion';

export const EyeModeToggle: React.FC = () => {
  const { isEyeModeActive, toggleEyeMode, currentSlide } = usePresentation();

  // Hide eye button on Home section as requested
  if (currentSlide === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex items-center gap-2">
      <motion.button
        onClick={toggleEyeMode}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        title={isEyeModeActive ? 'Exit Presentation Mode (Show Navigation - [H])' : 'Enter Presentation Mode (Hide Navigation - [H])'}
        aria-label={isEyeModeActive ? 'Show Navigation' : 'Hide Navigation'}
        className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer ${
          isEyeModeActive
            ? 'bg-brand-green/20 text-brand-green border-brand-green/50 shadow-glow-green/30 ring-2 ring-brand-green/30'
            : 'bg-white/10 text-white hover:text-brand-green border-white/20 hover:border-brand-green/40 hover:bg-white/15'
        }`}
      >
        {isEyeModeActive ? (
          <EyeOff className="w-5 h-5 transition-transform" />
        ) : (
          <Eye className="w-5 h-5 transition-transform" />
        )}
      </motion.button>
    </div>
  );
};
