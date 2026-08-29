import React, { useState } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import missionMavericksLogo from '../../Assets/mission-mavericks-logo.png';

export const SlideNavbar: React.FC = () => {
  const { currentSlide, goToSlide, slides } = usePresentation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Header is hidden on the Home slide (currentSlide === 0) until navigating to Team Members (currentSlide >= 1)
  if (currentSlide === 0) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 h-16 sm:h-18 z-40 px-3 sm:px-6 lg:px-8 flex items-center justify-between border-b border-white/[0.08] bg-[#020713]/92 backdrop-blur-2xl"
    >
      {/* Brand Identity (Left) */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => goToSlide(0)}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
          title="Return to Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
            <img
              src={missionMavericksLogo}
              alt="Mission Mavericks"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="font-display font-black text-sm sm:text-base tracking-tight text-white transition-colors flex items-center gap-1.5">
            <span>MISSION</span> <span className="text-[#5ce1e6]">MAVERICKS</span>
          </span>
        </button>
      </div>

      {/* Desktop Slide Navigation Tabs (Center) - Modern, Clean & Non-Overlapping */}
      <nav className="hidden lg:flex items-center gap-1 bg-[#06152f]/70 p-1 rounded-full border border-white/10 backdrop-blur-xl shadow-inner max-w-full overflow-x-auto no-scrollbar">
        {slides.map((slide) => {
          const isActive = currentSlide === slide.index;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(slide.index)}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none flex items-center ${
                isActive
                  ? 'text-[#5ce1e6] font-bold bg-[#0c2248] border border-[#5ce1e6]/40 shadow-[0_0_12px_rgba(92,225,230,0.25)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <span>{slide.shortName}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Side: Mobile Menu Toggle Only */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Slide Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#06152f]/98 border-b border-white/15 backdrop-blur-2xl p-4 shadow-2xl flex flex-col gap-1.5 max-h-[80vh] overflow-y-auto"
          >
            <div className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 px-3 py-1">
              Select Slide
            </div>
            {slides.map((slide) => {
              const isActive = currentSlide === slide.index;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    goToSlide(slide.index);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c2248] text-[#5ce1e6] border border-[#5ce1e6]/40 shadow-sm'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{slide.title}</span>
                  {isActive ? (
                    <Sparkles className="w-4 h-4 text-[#5ce1e6]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

