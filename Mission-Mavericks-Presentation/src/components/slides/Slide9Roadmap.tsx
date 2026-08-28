import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingButton } from '../common/GlowingButton';
import { WindingRoadCanvas } from '../roadmap/WindingRoadCanvas';
import { usePresentation } from '../../context/PresentationContext';
import { Compass, RotateCcw, Shield, Navigation } from 'lucide-react';

export const Slide9Roadmap: React.FC = () => {
  const { goToSlide } = usePresentation();
  // Default to null or 'NOW' as active
  const [activeMilestoneId, setActiveMilestoneId] = useState<'NOW' | 'NEXT' | 'FUTURE' | null>('NOW');

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-between min-h-[580px] sm:min-h-[620px] py-1 select-none">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-1/3 w-[500px] h-[200px] bg-gradient-radial from-brand-blue/15 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Slide Header */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-1 mb-2">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs uppercase font-extrabold tracking-widest mb-1.5 shadow-glow-purple/10"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Strategic Horizon • Winding Road Journey</span>
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xs sm:text-sm text-brand-muted mt-0.5 flex items-center justify-center gap-1.5"
        >
          <Navigation className="w-3.5 h-3.5 text-brand-green shrink-0" />
          <span>Click any roadside milestone stone to open its floating information panel.</span>
        </motion.p>
      </div>

      {/* Main Hero: The Curving Winding Road with 3 Stones & Anchored Floating Card Overlay */}
      <div className="relative z-10 w-full my-2 flex-1 flex flex-col justify-center">
        <WindingRoadCanvas
          activeMilestoneId={activeMilestoneId}
          onSelectMilestone={(id) => setActiveMilestoneId(id)}
          onCloseCard={() => setActiveMilestoneId(null)}
        />
      </div>

      {/* Bottom Roadside Branding & Restart Presentation Action */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative z-10 w-full max-w-4xl mt-2 px-4 py-2 rounded-2xl bg-[#06152f]/85 border border-white/15 backdrop-blur-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
      >
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue via-brand-cyan to-brand-green p-0.5 shadow-glow-green/30 shrink-0">
            <div className="w-full h-full rounded-[6px] bg-[#020713] flex items-center justify-center">
              <Shield className="w-4 h-4 text-brand-green" />
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-black font-display text-white flex items-center gap-2">
              <span>MISSION <span className="text-brand-green">MAVERICKS</span></span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-brand-cyan font-mono uppercase">
                CLAIMSHIELD+
              </span>
            </div>
            <p className="text-[10px] text-brand-muted">
              CLAIMSHIELD+ • FASTER. SMARTER. SIMPLER.
            </p>
          </div>
        </div>

        {/* Right: Restart Presentation */}
        <div className="flex items-center gap-2 shrink-0">
          <GlowingButton
            onClick={() => goToSlide(0)}
            variant="secondary"
            icon={<RotateCcw className="w-3.5 h-3.5" />}
            className="text-xs px-3.5 py-1.5"
          >
            Restart Presentation
          </GlowingButton>
        </div>
      </motion.div>
    </div>
  );
};
