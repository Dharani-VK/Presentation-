import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WindingRoadCanvas } from '../roadmap/WindingRoadCanvas';

export const Slide9Roadmap: React.FC = () => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<'NOW' | 'NEXT' | 'FUTURE' | null>('NOW');

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[580px] sm:min-h-[620px] py-1 select-none">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-1/3 w-[500px] h-[200px] bg-gradient-radial from-brand-blue/15 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Slide Header */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-1 mb-2">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white drop-shadow-md"
        >
          From reactive claims{' '}
          <span className="bg-gradient-to-r from-brand-cyan via-brand-green to-brand-lime bg-clip-text text-transparent">
            to intelligent claims.
          </span>
        </motion.h2>
      </div>

      {/* Main Hero: The Curving Winding Road with 3 Stones & Anchored Floating Card Overlay */}
      <div className="relative z-10 w-full my-1 flex-1 flex flex-col justify-center">
        <WindingRoadCanvas
          activeMilestoneId={activeMilestoneId}
          onSelectMilestone={(id) => setActiveMilestoneId(id)}
          onCloseCard={() => setActiveMilestoneId(null)}
        />
      </div>
    </div>
  );
};
