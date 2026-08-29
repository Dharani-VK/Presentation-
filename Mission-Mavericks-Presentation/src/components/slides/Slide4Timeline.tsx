import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { GlowingButton } from '../common/GlowingButton';
import { usePresentation } from '../../context/PresentationContext';
import { JOURNEY_MILESTONES, JourneyMilestone } from '../../data/timeline';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Compass,
  FileCheck2,
} from 'lucide-react';

export const Slide4Timeline: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone>(JOURNEY_MILESTONES[0]);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center py-2 sm:py-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-center text-white"
        >
          From learning{' '}
          <span className="bg-gradient-to-r from-white via-brand-blue to-brand-green bg-clip-text text-transparent">
            to solution.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xs sm:text-sm text-brand-muted mt-1 max-w-2xl text-center"
        >
          Select any milestone plan on the left to inspect domain learning, PMO rigor, and artifact deliverables.
        </motion.p>
      </div>

      {/* Main 2-Column Workspace: Left Diagonal-Vertical 4 Tiles, Right Interactive Detail Dialog Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── Left Side: Diagonal Vertical 4 Plan Tiles ───────────────────────── */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const isSelected = selectedMilestone.planId === milestone.planId;
            return (
              <motion.div
                key={milestone.planId}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMilestone(milestone)}
                style={{
                  // Subtle diagonal progressive indent on desktop
                  marginLeft: `${idx * 14}px`,
                }}
                className="cursor-pointer"
              >
                <GlassCard
                  className={`p-4 transition-all duration-300 border-l-4 relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r ' +
                        milestone.gradient +
                        ' border-white/40 shadow-glow-cyan/20 ring-1 ring-white/20'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
                  }`}
                  style={{ borderLeftColor: milestone.accentColor }}
                >
                  <div className="flex items-center justify-between">
                    {/* Plan & Phase Title */}
                    <div className="flex items-center gap-3">
                      {/* Active Indicator Dot */}
                      <div
                        className={`w-3 h-3 rounded-full flex items-center justify-center transition-all ${
                          isSelected ? 'scale-125' : 'bg-white/20'
                        }`}
                        style={{ backgroundColor: isSelected ? milestone.accentColor : undefined }}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/60">
                            {milestone.planId} • {milestone.milestoneNumber}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black font-display text-white">
                          {milestone.phase}
                        </h3>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-white/20 border-white/40 text-white font-black'
                          : 'bg-white/5 border-white/10 text-white/50'
                      }`}
                    >
                      {isSelected ? 'Viewing' : 'Inspect'}
                    </span>
                  </div>

                  <p className="text-[11px] text-brand-muted mt-2 pl-6 line-clamp-1">
                    {milestone.tagline}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}

          {/* Bottom Action */}
          <div className="pt-3 pl-2">
            <GlowingButton
              onClick={nextSlide}
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-glow-green/30 text-xs sm:text-sm"
            >
              See what we created
            </GlowingButton>
          </div>
        </div>

        {/* ── Right Side: Interactive Popup Window / Dialog Detail Box ───────── */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.planId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="rounded-3xl border border-white/20 bg-[#06152f]/90 backdrop-blur-2xl p-6 shadow-2xl relative overflow-hidden">
                {/* Header Banner */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-1">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{selectedMilestone.planId} • {selectedMilestone.milestoneNumber}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                      {selectedMilestone.phase}: {selectedMilestone.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">{selectedMilestone.tagline}</p>
                  </div>

                  {/* Resource Website Link Button on Right Side */}
                  {selectedMilestone.resourceLink && (
                    <a
                      href={selectedMilestone.resourceLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-green/20 hover:bg-brand-green/30 border border-brand-green/40 text-brand-green text-xs font-bold transition-all shrink-0 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{selectedMilestone.resourceLink.label}</span>
                    </a>
                  )}
                </div>

                {/* Core Focus Area Grid */}
                <div className="mb-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-green mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Focus Areas</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMilestone.keyTopics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-white/90 bg-white/5 p-2 rounded-xl border border-white/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deep Dive 2-Column Section (Domain Learning & PMO Discipline) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {/* Domain Learning (Kept prominently in Understand / all plans) */}
                  <div className="p-3.5 rounded-2xl bg-brand-blue/10 border border-brand-blue/30">
                    <h5 className="text-xs font-black uppercase text-brand-cyan mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Domain Learning & Regulations</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {selectedMilestone.details.domainLearning.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-brand-cyan font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PMO Discipline & Deliverables */}
                  <div className="p-3.5 rounded-2xl bg-brand-green/10 border border-brand-green/30">
                    <h5 className="text-xs font-black uppercase text-brand-green mb-2 flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5" />
                      <span>PMO Discipline & Artifacts</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-white/80">
                      {selectedMilestone.details.pmoDiscipline.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-brand-green font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Deliverables & Insight Quote */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  {/* Deliverables pill list */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex-1">
                    <span className="text-[10px] font-mono uppercase text-brand-orange font-bold block mb-1.5 flex items-center gap-1">
                      <FileCheck2 className="w-3 h-3 text-brand-orange" />
                      <span>Milestone Deliverables</span>
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedMilestone.details.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-brand-orange/10 border border-brand-orange/30 text-white/90"
                        >
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Insight Box */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex-1 text-xs text-white/85 italic flex flex-col justify-center">
                    <span className="text-[10px] font-mono uppercase text-brand-green font-bold not-italic mb-0.5">
                      Key Takeaway Insight
                    </span>
                    "{selectedMilestone.details.insights}"
                  </div>
                </div>

                {/* Mobile Link Fallback */}
                {selectedMilestone.resourceLink && (
                  <div className="mt-3 sm:hidden">
                    <a
                      href={selectedMilestone.resourceLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{selectedMilestone.resourceLink.label}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
