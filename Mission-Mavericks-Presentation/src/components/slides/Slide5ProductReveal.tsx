import React from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';

export const Slide5ProductReveal: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[520px] py-4 px-4 text-center">
      {/* 1. SINGLE LINE HEADLINE (SCALED TO FIT CLEANLY IN CONTAINER) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-center mb-12 sm:mb-16 relative z-10"
      >
        <h2 className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold font-display tracking-tight whitespace-nowrap flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white">
          <span>We understood the problem</span>
          <span>We learned the business</span>
          <span>We redesigned the journey</span>
        </h2>
      </motion.div>

      {/* 2. PRODUCT BRAND REVEAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Shield Emblem Image from Assets/image.png (Clean, sharp, no heavy shadows) */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
            <img
              src={claimShieldLogo}
              alt="ClaimShield+ Logo"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Brand Title: ClaimShield+ */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-none">
          Claim<span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent">Shield+</span>
        </h1>

        {/* Subtitle (Without "Intelligent") */}
        <p className="text-lg sm:text-2xl md:text-3xl font-bold font-display text-white/90 mt-4 tracking-tight">
          Motor OD Claim Management Platform
        </p>

        {/* Tagline Placed Last */}
        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#5ce1e6] mt-3 sm:mt-4 tracking-wide">
          Trust Every Claim. Transform Every Outcome.
        </p>
      </motion.div>
    </div>
  );
};
