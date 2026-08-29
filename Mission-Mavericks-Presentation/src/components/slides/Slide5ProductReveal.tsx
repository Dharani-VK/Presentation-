import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';
import roboxVideo from '../../Assets/Robox.mp4';

const journeySentences = [
  'We understood the problem',
  'We learned the business',
  'We redesigned the journey',
];

export const Slide5ProductReveal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
  }, []);

  return (
    <div className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-4 px-4 select-none">
      {/* ── Slide 5 Background Layer ───── */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#060c18] via-[#050b16] to-[#040812] z-0 pointer-events-none" />

      {/* ── Left Corner Video Background ───── */}
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

      {/* ── Centered Page Contents (No Box Wrapper) ───── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center -mt-8 sm:-mt-12 lg:-mt-16">
        {/* Step 1: 3 STATEMENTS - Revealed at 7s (No box, no dot, clean spacing between sentences) */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.0, duration: 0.8, ease: 'easeOut' }}
          className="w-full text-center mb-8 sm:mb-10"
        >
          <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-slate-200/90 text-sm sm:text-base md:text-lg lg:text-xl font-display font-medium tracking-wide">
            {journeySentences.map((text, idx) => (
              <span key={idx} className="transition-colors hover:text-white">
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Seamless Product Branding (Box Removed) */}
        <div className="flex flex-col items-center text-center">
          {/* Step 3: Logo (Shield Emblem) revealed at 9.0s (1.0s after ClaimShield+ name) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 9.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-3 sm:mb-4 flex items-center justify-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
              <img
                src={claimShieldLogo}
                alt="ClaimShield+ Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(32,223,137,0.3)]"
              />
            </div>
          </motion.div>

          {/* Step 2: ClaimShield+ Brand Name revealed at 8.0s (1.0s after Step 1) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 8.0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-none"
          >
            Claim<span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent">Shield+</span>
          </motion.h1>

          {/* Step 4: Motor OD Claim Management Platform revealed at 10.0s (1.0s after Logo) */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 10.0, duration: 0.65, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl font-bold font-display text-white/90 mt-3 sm:mt-4 tracking-tight"
          >
            Motor OD Claim Management Platform
          </motion.p>

          {/* Step 5: Tagline revealed at 11.0s (1.0s after Subtitle) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 11.0, duration: 0.65, ease: 'easeOut' }}
            className="text-xs sm:text-sm md:text-base font-semibold text-[#5ce1e6] mt-2.5 sm:mt-3 tracking-wide"
          >
            Trust Every Claim. Transform Every Outcome.
          </motion.p>
        </div>
      </div>
    </div>
  );
};







