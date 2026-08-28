import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Layers } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/team';
import missionMavericksLogo from '../../Assets/mission-mavericks-logo.png';

// ─── Fallback Avatar ───────────────────────────────────────────────────────────
const FallbackAvatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-blue/30 via-brand-cyan/20 to-brand-green/20 text-4xl sm:text-5xl font-black font-display text-white/80 select-none">
      {initials}
    </div>
  );
};

// ─── Animation Variants ────────────────────────────────────────────────────────
const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 28 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 28 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export const Slide3TeamReveal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const total = TEAM_MEMBERS.length;

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const selectMember = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Support Keyboard Left / Right Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const member = TEAM_MEMBERS[currentIndex];
  const isPremium = member.isPremium;

  const borderClass = isPremium
    ? 'border-brand-cyan/60 shadow-[0_0_40px_rgba(0,217,255,0.25)]'
    : 'border-brand-green/40 shadow-[0_0_35px_rgba(32,223,137,0.2)]';

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-1 sm:py-2 px-4 sm:px-6">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* ── Left Side: Center-Aligned Big Logo & Name ───── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col items-center text-center mx-auto w-full max-w-lg"
        >
          {/* Logo Emblem (Current Size Preserved) */}
          <div className="relative w-64 h-56 sm:w-76 sm:h-66 md:w-84 md:h-74 flex items-center justify-center">
            <img
              src={missionMavericksLogo}
              alt="Mission Mavericks Logo"
              className="w-full h-full object-contain transform hover:scale-103 transition-transform duration-300"
            />
          </div>

          {/* Team Name Header (Slightly reduced vertical gap, clearly separated with no overlap) */}
          <div className="flex flex-col items-center -mt-2 sm:-mt-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-none flex items-center gap-2">
              <span className="text-white">MISSION</span>
              <span className="text-[#5ce1e6]">MAVERICKS</span>
            </h2>
          </div>

          {/* Clean Professional Rallying Cry */}
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-slate-300 font-display mt-1.5 sm:mt-2">
            Own the Mission. Be the Maverick. Win Together.
          </p>
        </motion.div>

        {/* ── Right Side: Member Spotlight with Small Standalone Grey Double Play Arrows ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col items-center justify-center relative w-full"
        >
          {/* Background Spotlight Glow */}
          <div className="absolute inset-0 -z-10 blur-3xl rounded-full bg-gradient-radial from-brand-cyan/20 via-brand-green/10 to-transparent pointer-events-none" />

          {/* Card & Side Arrow Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xl">
            {/* Left Small Standalone Grey Play Arrow Button (No Box) */}
            <button
              onClick={handlePrev}
              title="Previous Team Member"
              aria-label="Previous Team Member"
              className="text-slate-400 hover:text-white transition-all duration-200 hover:scale-125 active:scale-90 flex items-center justify-center p-1 cursor-pointer focus:outline-none flex-shrink-0 opacity-75 hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M11 19V5L2 12l9 7zm9 0V5l-9 7 9 7z" />
              </svg>
            </button>

            {/* Active Member Card */}
            <div className="w-full flex-1 max-w-md">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={member.id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <div
                    className={`relative rounded-3xl border ${borderClass} bg-[#06152f]/95 backdrop-blur-2xl overflow-hidden flex flex-col items-center text-center p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)]`}
                  >
                    {/* Photo with Clean Gradient Ring */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-brand-blue via-brand-cyan to-brand-green mb-3">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#06152f]">
                        {imgError[member.id] ? (
                          <FallbackAvatar name={member.name} />
                        ) : (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            onError={() => setImgError((p) => ({ ...p, [member.id]: true }))}
                          />
                        )}
                      </div>
                    </div>

                    {/* Member Name */}
                    <h3 className="text-lg sm:text-2xl font-black font-display text-white tracking-tight leading-snug">
                      {member.name}
                    </h3>

                    {/* Primary Role Badge */}
                    <span
                      className={`inline-flex items-center px-4 py-1 rounded-full border text-xs sm:text-sm font-bold tracking-wide uppercase mt-2 ${
                        isPremium
                          ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan shadow-glow-cyan/20'
                          : 'bg-brand-green/15 border-brand-green/40 text-brand-green'
                      }`}
                    >
                      {member.role}
                    </span>

                    {/* Core Roles & Contributions (Non-repeating) */}
                    {member.focus && member.focus.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10 w-full">
                        <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-brand-cyan mb-2 font-bold tracking-wider uppercase">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Core Roles & Contributions</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-sm mx-auto">
                          {member.focus.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 font-medium hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Small Standalone Grey Play Arrow Button (No Box) */}
            <button
              onClick={handleNext}
              title="Next Team Member"
              aria-label="Next Team Member"
              className="text-slate-400 hover:text-white transition-all duration-200 hover:scale-125 active:scale-90 flex items-center justify-center p-1 cursor-pointer focus:outline-none flex-shrink-0 opacity-75 hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M4 5v14l9-7-9-7zm9 0v14l9-7-9-7z" />
              </svg>
            </button>
          </div>

          {/* Quick Member Selector Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3.5 flex-wrap max-w-lg">
            {TEAM_MEMBERS.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => selectMember(idx)}
                title={m.name}
                aria-label={`Select ${m.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-brand-green shadow-glow-green/50'
                    : 'w-2 h-2 bg-white/25 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};



