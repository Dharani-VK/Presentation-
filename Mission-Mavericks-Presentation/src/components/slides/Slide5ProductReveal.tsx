import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';
import roboxVideo from '../../Assets/Robox.mp4';

interface HeadlineBanner {
  id: string;
  text: string;
  activeBg: string;
  activeBorder: string;
  activeGlow: string;
  activeText: string;
  dotColor: string;
}

const headlineBanners: HeadlineBanner[] = [
  {
    id: 'problem',
    text: 'We understood the problem',
    activeBg: 'bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-red-500/20',
    activeBorder: 'border-orange-400',
    activeGlow: 'shadow-[0_0_30px_rgba(251,146,60,0.4)]',
    activeText: 'text-white',
    dotColor: 'bg-orange-400',
  },
  {
    id: 'business',
    text: 'We learned the business',
    activeBg: 'bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-indigo-500/20',
    activeBorder: 'border-[#5ce1e6]',
    activeGlow: 'shadow-[0_0_30px_rgba(92,225,230,0.4)]',
    activeText: 'text-white',
    dotColor: 'bg-[#5ce1e6]',
  },
  {
    id: 'journey',
    text: 'We redesigned the journey',
    activeBg: 'bg-gradient-to-r from-emerald-500/25 via-green-500/20 to-teal-500/20',
    activeBorder: 'border-brand-green',
    activeGlow: 'shadow-[0_0_30px_rgba(32,223,137,0.4)]',
    activeText: 'text-white',
    dotColor: 'bg-brand-green',
  },
];

export const Slide5ProductReveal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textRevealed, setTextRevealed] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video playback immediately
    video
      .play()
      .catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });

    // Reveal text after 7 seconds of video playback
    const handleTimeUpdate = () => {
      if (video.currentTime >= 7) {
        setTextRevealed(true);
      }
    };

    // When video completes fully, stop and keep paused on final frame (plays only once)
    const handleEnded = () => {
      setTextRevealed(true);
      video.pause();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Guaranteed fallback timer for 7 seconds reveal
    const timer = setTimeout(() => {
      setTextRevealed(true);
    }, 7000);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      clearTimeout(timer);
    };
  }, []);

  const handleBannerClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleProductCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveItem((prev) => (prev === 'product' ? null : 'product'));
  };

  return (
    <div
      onClick={() => setActiveItem(null)}
      className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-4 px-4 select-none"
    >
      {/* ── Slide 5 Background Layer (Exact dark tone matching video background) ───── */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#060c18] via-[#050b16] to-[#040812] z-0 pointer-events-none" />

      {/* ── Left Corner Video Background (Flush to screen edge with soft right edge blend) ───── */}
      <div className="fixed left-0 inset-y-0 w-[45vw] max-w-[540px] h-full pointer-events-none z-0 flex items-center justify-start overflow-hidden">
        <video
          ref={videoRef}
          src={roboxVideo}
          autoPlay
          muted
          playsInline
          style={{
            maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
          }}
          className="w-full h-full object-contain object-left"
        />
      </div>

      {/* ── Centered Page Contents (Shifted significantly up, revealed strictly after 7s) ───── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center -mt-16 sm:-mt-24 lg:-mt-28">
        {/* 1. SINGLE LINE HEADLINE BANNERS (Centered, revealed after 7s) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={textRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ visibility: textRevealed ? 'visible' : 'hidden' }}
          className="w-full text-center mb-5 sm:mb-6"
        >
          <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
            {headlineBanners.map((item) => {
              const isSelected = activeItem === item.id;
              const isDulled = activeItem !== null && !isSelected;

              return (
                <motion.button
                  key={item.id}
                  onClick={(e) => handleBannerClick(item.id, e)}
                  whileHover={{ scale: isDulled ? 0.98 : 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight ${
                    isSelected
                      ? `${item.activeBg} ${item.activeBorder} ${item.activeGlow} ${item.activeText} scale-[1.04] ring-1 ring-white/30 z-20`
                      : isDulled
                      ? 'opacity-30 bg-white/[0.02] border-white/5 text-slate-500 scale-[0.97] blur-[0.2px]'
                      : 'opacity-100 bg-[#06152f]/70 hover:bg-[#06152f]/90 border-white/15 hover:border-white/35 text-white shadow-lg shadow-black/30'
                  }`}
                >
                  <span
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                      isSelected
                        ? `${item.dotColor} shadow-[0_0_10px_currentColor] animate-pulse`
                        : isDulled
                        ? 'bg-slate-600'
                        : 'bg-white/40'
                    }`}
                  />
                  <span>{item.text}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 2. PRODUCT BRAND REVEAL (Centered, revealed after 7s) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={
            textRevealed
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.88, y: 25 }
          }
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ visibility: textRevealed ? 'visible' : 'hidden' }}
          onClick={handleProductCardClick}
          whileHover={{ scale: activeItem !== null && activeItem !== 'product' ? 0.98 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all duration-300 cursor-pointer ${
            activeItem === 'product'
              ? 'opacity-100 bg-[#06152f]/95 border-brand-green/60 shadow-[0_0_50px_rgba(32,223,137,0.35)] ring-1 ring-brand-cyan/40 scale-[1.03] z-20'
              : activeItem !== null
              ? 'opacity-30 bg-white/[0.02] border-white/5 scale-[0.97] blur-[0.2px]'
              : 'opacity-100 bg-[#06152f]/50 hover:bg-[#06152f]/70 border-white/10 hover:border-white/25 shadow-2xl shadow-black/40'
          }`}
        >
          {/* Shield Emblem Image */}
          <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
              <img
                src={claimShieldLogo}
                alt="ClaimShield+ Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Brand Title: ClaimShield+ */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display tracking-tight text-white leading-none">
            Claim<span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent">Shield+</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl font-bold font-display text-white/90 mt-2.5 sm:mt-3 tracking-tight">
            Motor OD Claim Management Platform
          </p>

          {/* Tagline Placed Last */}
          <p className="text-xs sm:text-sm font-semibold text-[#5ce1e6] mt-2 tracking-wide">
            Trust Every Claim. Transform Every Outcome.
          </p>
        </motion.div>
      </div>
    </div>
  );
};






