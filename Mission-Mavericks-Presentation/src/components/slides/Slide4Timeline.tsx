import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingButton } from '../common/GlowingButton';
import { usePresentation } from '../../context/PresentationContext';
import { JOURNEY_MILESTONES, JourneyMilestone, JourneySection } from '../../data/timeline';
import {
  ArrowRight,
  ChevronRight,
  Compass,
  PenTool,
  Code2,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  History,
  AlertTriangle,
  Sparkles,
  Zap,
  Layout,
  Server,
  Cpu,
  Network,
  RefreshCw,
  CheckCircle2,
  FileCode2,
  FileText,
  Presentation,
  LucideIcon,
} from 'lucide-react';

const PHASE_ICONS: Record<string, LucideIcon> = {
  UNDERSTAND: Compass,
  DESIGN: PenTool,
  BUILD: Code2,
  DELIVER: Rocket,
};

const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  PenTool,
  Code2,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  History,
  AlertTriangle,
  Sparkles,
  Zap,
  Layout,
  Server,
  Cpu,
  Network,
  RefreshCw,
  CheckCircle2,
  FileCode2,
  FileText,
  Presentation,
};

const getSectionIcon = (name?: string): LucideIcon => {
  if (name && ICON_MAP[name]) {
    return ICON_MAP[name];
  }
  return Sparkles;
};

// Section contextual color cues
const getSectionTone = (title: string, accentColor: string) => {
  const t = title.toLowerCase();
  if (t.includes('current state') || t.includes('obvious gaps') || t.includes('pain points')) {
    return {
      border: 'border-rose-500/30 hover:border-rose-500/50',
      bg: 'bg-rose-500/10',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      iconColor: 'text-rose-400',
      dotColor: 'bg-rose-400',
    };
  }
  if (t.includes('future state') || t.includes('opportunities') || t.includes('straight through')) {
    return {
      border: 'border-emerald-500/30 hover:border-emerald-500/50',
      bg: 'bg-emerald-500/10',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
    };
  }
  if (t.includes('intelligence') || t.includes('ai') || t.includes('ocr')) {
    return {
      border: 'border-cyan-500/30 hover:border-cyan-500/50',
      bg: 'bg-cyan-500/10',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      dotColor: 'bg-cyan-400',
    };
  }
  return {
    border: 'border-white/10 hover:border-white/25',
    bg: 'bg-white/[0.04]',
    badgeBg: 'bg-white/10 text-white/70 border-white/15',
    iconColor: 'text-white',
    dotColor: accentColor,
  };
};

export const Slide4Timeline: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone>(JOURNEY_MILESTONES[0]);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center py-2 sm:py-3">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-center text-white"
        >
          Our{' '}
          <span className="bg-gradient-to-r from-white via-brand-blue to-brand-green bg-clip-text text-transparent">
            Journey.
          </span>
        </motion.h2>
      </div>

      {/* Main 2-Column Workspace: Left Vertical 4 Tiles, Right Expanded Subheading Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        {/* ── Left Column: Vertical Lineup of the 4 Phase Tiles ───────────────── */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-white/50 px-1 font-semibold">
            <span>Project Phases</span>
          </div>

          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const isSelected = selectedMilestone.planId === milestone.planId;
            const PhaseIcon = PHASE_ICONS[milestone.phase] || Compass;

            return (
              <motion.div
                key={milestone.planId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + idx * 0.06 }}
                whileHover={{ scale: isSelected ? 1.01 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMilestone(milestone)}
                className={`cursor-pointer transition-all duration-300 ${isSelected
                    ? 'opacity-100 z-10'
                    : 'opacity-40 hover:opacity-80'
                  }`}
              >
                <div
                  className={`p-4 rounded-2xl transition-all duration-300 border-l-4 relative overflow-hidden backdrop-blur-xl ${isSelected
                      ? 'bg-gradient-to-r ' +
                      milestone.gradient +
                      ' bg-[#071938] border-t border-r border-b border-white/25 shadow-2xl ring-1 ring-white/20'
                      : 'bg-[#06152f]/50 border-t border-r border-b border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                    }`}
                  style={{
                    borderLeftColor: milestone.accentColor,
                    boxShadow: isSelected
                      ? `0 12px 30px -8px ${milestone.accentColor}50, inset 0 0 20px ${milestone.accentColor}15`
                      : undefined,
                  }}
                >
                  {/* Subtle active background glow */}
                  {isSelected && (
                    <div
                      className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40"
                      style={{ backgroundColor: milestone.accentColor }}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    {/* Plan & Phase Header with icon in front of words */}
                    <div className="flex items-center gap-3">
                      {/* Active Indicator Dot */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${isSelected ? 'scale-110' : 'bg-white/20'
                          }`}
                        style={{
                          backgroundColor: isSelected ? milestone.accentColor : undefined,
                          boxShadow: isSelected ? `0 0 10px ${milestone.accentColor}` : undefined,
                        }}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                      </div>

                      <div>
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-wider block mb-0.5"
                          style={{ color: isSelected ? milestone.accentColor : 'rgba(255,255,255,0.5)' }}
                        >
                          {milestone.planId}
                        </span>

                        {/* Icon directly in front of the Phase word */}
                        <div className="flex items-center gap-2">
                          <PhaseIcon
                            className="w-4 h-4 shrink-0 transition-transform duration-200"
                            style={{ color: isSelected ? milestone.accentColor : 'rgba(255,255,255,0.7)' }}
                          />
                          <h3 className="text-base sm:text-lg font-black font-display text-white tracking-wide">
                            {milestone.phase}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Chevron indicator */}
                    <div className="flex items-center">
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${isSelected
                            ? 'text-white translate-x-0.5 scale-110'
                            : 'text-white/30'
                          }`}
                      />
                    </div>
                  </div>

                  <p
                    className={`text-[11px] mt-2 pl-6 line-clamp-1 transition-colors ${isSelected ? 'text-white/80 font-medium' : 'text-white/40'
                      }`}
                  >
                    {milestone.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Bottom Action Button */}
          <div className="pt-2">
            <GlowingButton
              onClick={nextSlide}
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full justify-center shadow-glow-green/30 text-xs sm:text-sm py-2.5"
            >
              Next: The Problem
            </GlowingButton>
          </div>
        </div>

        {/* ── Right Column: Interactive Expansion Panel (Subheading Boxes) ─────── */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.planId}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full"
            >
              <div
                className="rounded-3xl border border-white/20 bg-[#06152f]/95 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden"
                style={{
                  boxShadow: `0 20px 50px -15px ${selectedMilestone.accentColor}25`,
                }}
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ backgroundColor: selectedMilestone.accentColor }}
                />

                {/* Panel Header */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-4 gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-1">
                      <span
                        className="px-2 py-0.5 rounded-md text-[10px] font-black"
                        style={{
                          backgroundColor: `${selectedMilestone.accentColor}30`,
                          color: selectedMilestone.accentColor,
                          border: `1px solid ${selectedMilestone.accentColor}60`,
                        }}
                      >
                        {selectedMilestone.planId}
                      </span>
                      <span className="text-white/60">•</span>
                      <span className="text-white font-bold tracking-widest">{selectedMilestone.phase}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                      {selectedMilestone.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">
                      {selectedMilestone.tagline}
                    </p>
                  </div>

                  {/* Number of modules indicator */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-white/90 text-xs font-mono font-bold">
                      {selectedMilestone.sections.length} Core Areas
                    </span>
                  </div>
                </div>

                {/* Subheadings Grid of Boxes */}
                <div
                  className={`grid gap-3.5 max-h-[58vh] sm:max-h-[62vh] overflow-y-auto pr-1.5 scrollbar-thin ${selectedMilestone.sections.length > 4
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2'
                    }`}
                >
                  {selectedMilestone.sections.map((section: JourneySection, sIdx: number) => {
                    const IconComponent = getSectionIcon(section.icon);
                    const tone = getSectionTone(section.title, selectedMilestone.accentColor);

                    return (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 + sIdx * 0.04 }}
                        className={`rounded-2xl border ${tone.border} ${tone.bg} p-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.01] hover:shadow-lg flex flex-col justify-between overflow-hidden group`}
                      >
                        <div>
                          {/* Box Header */}
                          <div className="flex items-center gap-2.5 mb-2.5 border-b border-white/10 pb-2">
                            <div
                              className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border"
                              style={{
                                backgroundColor: `${selectedMilestone.accentColor}20`,
                                borderColor: `${selectedMilestone.accentColor}40`,
                              }}
                            >
                              <IconComponent
                                className="w-3.5 h-3.5"
                                style={{ color: selectedMilestone.accentColor }}
                              />
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold font-display text-white tracking-wide">
                              {section.title}
                            </h4>
                          </div>


                          {/* Graphical Visual Chip Strip */}
                          {section.graphic && (
                            <div className="mb-3 p-2 rounded-xl bg-black/25 border border-white/[0.06] flex items-center overflow-x-auto scrollbar-none">
                              {section.graphic.type === 'flow' && (
                                <div className="flex items-center gap-1 w-full text-[10px] font-mono text-white/90">
                                  {section.graphic.elements.map((el, elIdx) => (
                                    <React.Fragment key={elIdx}>
                                      <span
                                        className="px-2 py-0.5 rounded-md border whitespace-nowrap font-medium text-[9.5px]"
                                        style={{
                                          backgroundColor: `${selectedMilestone.accentColor}15`,
                                          borderColor: `${selectedMilestone.accentColor}30`,
                                          color:
                                            elIdx === section.graphic!.elements.length - 1
                                              ? selectedMilestone.accentColor
                                              : 'rgba(255,255,255,0.85)',
                                        }}
                                      >
                                        {el}
                                      </span>
                                      {elIdx < section.graphic!.elements.length - 1 && (
                                        <span className="text-white/30 text-[8.5px]">➔</span>
                                      )}
                                    </React.Fragment>
                                  ))}
                                </div>
                              )}

                              {section.graphic.type === 'badges' && (
                                <div className="flex items-center flex-wrap gap-1 w-full text-[9.5px] font-mono">
                                  {section.graphic.elements.map((el, elIdx) => (
                                    <span
                                      key={elIdx}
                                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80 whitespace-nowrap"
                                    >
                                      <span
                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ backgroundColor: selectedMilestone.accentColor }}
                                      />
                                      <span>{el}</span>
                                    </span>
                                  ))}
                                </div>
                              )}

                              {section.graphic.type === 'comparison' && (
                                <div className="flex items-center justify-between w-full text-[9.5px] font-mono px-0.5">
                                  <span className="px-2 py-0.5 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 font-semibold">
                                    {section.graphic.elements[0]}
                                  </span>
                                  <span className="text-white/40 text-[9px]">➔</span>
                                  <span
                                    className="px-2 py-0.5 rounded-md border font-semibold"
                                    style={{
                                      backgroundColor: `${selectedMilestone.accentColor}20`,
                                      borderColor: `${selectedMilestone.accentColor}40`,
                                      color: selectedMilestone.accentColor,
                                    }}
                                  >
                                    {section.graphic.elements[1]}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Bullet Items List */}
                          <ul className="space-y-1.5">
                            {section.items.map((item: string, iIdx: number) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-2 text-[11px] sm:text-xs text-white/85 leading-tight group/item"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-1 shrink-0 transition-transform group-hover/item:scale-125"
                                  style={{
                                    backgroundColor: selectedMilestone.accentColor,
                                    boxShadow: `0 0 6px ${selectedMilestone.accentColor}`,
                                  }}
                                />
                                <span className="group-hover/item:text-white transition-colors">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
