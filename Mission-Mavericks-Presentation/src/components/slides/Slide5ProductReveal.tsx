import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';
import roboxVideo from '../../Assets/Robox.mp4';

interface HeadlineBanner {
  id: string;
  text: string;
  dotColor: string;
}

const headlineBanners: HeadlineBanner[] = [
  {
    id: 'problem',
    text: 'We understood the problem',
    dotColor: 'bg-orange-400',
  },
  {
    id: 'business',
    text: 'We learned the business',
    dotColor: 'bg-[#5ce1e6]',
  },
  {
    id: 'journey',
    text: 'We redesigned the journey',
    dotColor: 'bg-brand-green',
  },
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
        {/* Step 1: 3 HEADLINE STATEMENTS (Revealed First at 0.2s) */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="w-full text-center mb-7 sm:mb-9"
        >
          <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {headlineBanners.map((item) => (
              <div
                key={item.id}
                className="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/15 bg-[#06152f]/70 backdrop-blur-xl flex items-center gap-2.5 font-display font-semibold text-xs sm:text-sm md:text-base text-white/95 shadow-lg shadow-black/30"
              >
                <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${item.dotColor}`} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Seamless Product Branding (Box Removed) */}
        <div className="flex flex-col items-center text-center">
          {/* Step 3: Logo (Shield Emblem) revealed at 1.8s (1.0s after ClaimShield+ name) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Step 2: ClaimShield+ Brand Name revealed at 0.8s (0.6s gap after Step 1) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-none"
          >
            Claim<span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent">Shield+</span>
          </motion.h1>

          {/* Step 4: Motor OD Claim Management Platform revealed at 2.8s (1.0s after Logo) */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.65, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl font-bold font-display text-white/90 mt-3 sm:mt-4 tracking-tight"
          >
            Motor OD Claim Management Platform
          </motion.p>

          {/* Step 5: Tagline revealed at 3.8s (1.0s after Subtitle) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.65, ease: 'easeOut' }}
            className="text-xs sm:text-sm md:text-base font-semibold text-[#5ce1e6] mt-2.5 sm:mt-3 tracking-wide"
          >
            Trust Every Claim. Transform Every Outcome.
          </motion.p>
        </div>
      </div>
    </div>
  );
};







