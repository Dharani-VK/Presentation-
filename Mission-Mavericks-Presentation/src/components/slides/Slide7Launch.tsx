import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, FileSearch, Mic, AlertTriangle, ShieldCheck, Zap, Activity } from 'lucide-react';

export const Slide7Launch: React.FC = () => {
  const aiEngines = [
    {
      title: 'Computer Vision & Damage AI',
      icon: Eye,
      tag: 'VISUAL ASSESSMENT',
      color: 'brand-cyan',
      description: 'Automated damage classification, component recognition, severity scoring, and instant repair vs. replacement recommendations.',
      capabilities: ['Parts segmentation', 'Severity heatmap', 'Auto repair estimate'],
    },
    {
      title: 'Document OCR & Policy Validator',
      icon: FileSearch,
      tag: 'INSTANT VALIDATION',
      color: 'brand-green',
      description: 'Sub-second optical character extraction for Driving Licences, RC books, repair invoices, and automated policy deductible calculations.',
      capabilities: ['DL & RC parsing', 'Telemetry cross-check', 'Deductible auto-calc'],
    },
    {
      title: 'Multilingual Conversational FNOL',
      icon: Mic,
      tag: 'VOICE INTELLIGENCE',
      color: 'brand-blue',
      description: 'Hands-free voice intimation in multiple languages, live speech-to-text, and automated conversational incident summary synthesis.',
      capabilities: ['Real-time speech-to-text', 'Incident synthesis', 'Multilingual intake'],
    },
    {
      title: 'Smart Fraud & Anomaly Scoring',
      icon: AlertTriangle,
      tag: 'RISK MITIGATION',
      color: 'brand-purple',
      description: 'Image metadata forensics, repeat claimant network graphs, and real-time fraud propensity index for proactive risk flags.',
      capabilities: ['Image tampering check', 'Claimant network graph', 'Dynamic risk index'],
    },
  ];

  const metrics = [
    { label: 'Damage AI Accuracy', value: '98.4%', icon: Eye, color: 'text-brand-cyan' },
    { label: 'End-to-End STP SLA', value: '~30 Min', icon: Zap, color: 'text-brand-green' },
    { label: 'Touchless Triage Rate', value: '85%', icon: Activity, color: 'text-brand-blue' },
    { label: 'Audit & Compliance', value: '100%', icon: ShieldCheck, color: 'text-brand-purple' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center py-4 sm:py-6 px-4 select-none">
      {/* Slide Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>ROBOX™ AI DECISION SUITE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
          Intelligent Automation.{' '}
          <span className="bg-gradient-to-r from-brand-cyan via-[#5ce1e6] to-brand-green bg-clip-text text-transparent">
            Zero-Touch Precision.
          </span>
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 font-display uppercase mt-2">
          End-to-End Cognitive Decision Pipeline for Motor Claims
        </p>
      </motion.div>

      {/* 4 AI Engines Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
        {aiEngines.map((engine, idx) => {
          const Icon = engine.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#040d21]/90 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-xl shadow-lg shadow-black/30 text-left flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {engine.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {engine.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {engine.description}
                </p>
              </div>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {engine.capabilities.map((cap, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[10px] font-medium font-display px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    • {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Performance Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-5xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-cyan/10 via-white/[0.03] to-brand-green/10 border border-white/10 backdrop-blur-md"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-3.5 h-3.5 ${metric.color}`} />
                  <span className="text-[11px] font-semibold text-slate-400 font-display">{metric.label}</span>
                </div>
                <div className={`text-2xl sm:text-3xl font-black font-display tracking-tight ${metric.color}`}>
                  {metric.value}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

