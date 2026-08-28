import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { GlassCard } from '../common/GlassCard';
import { User, Wrench, Briefcase, Building2, Play, X } from 'lucide-react';
import accidentVideo from '../../Assets/Accident video.mp4';

export const Slide2Reality: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        handleCloseVideo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoOpen]);

  // Open modal in paused state
  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    setIsPlaying(false);
    setHasStarted(false);
  };

  // When modal closes, pause and reset video
  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setHasStarted(false);
    setIsVideoOpen(false);
  };

  // Explicit Play / Resume: continues from current position
  const handlePlayOrResume = () => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      })
      .catch(() => {});
  };

  // Explicit Pause: keeps video paused at current position without resetting
  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const stakeholders = [
    {
      id: 'customer',
      icon: User,
      title: 'Customer',
      color: 'from-orange-500/15 via-amber-500/10 to-red-500/5',
      borderColor: 'border-orange-500/30 hover:border-orange-400',
      iconBg: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
      glowColor: 'shadow-glow-orange/20',
      bulletColor: 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]',
      painPoints: [
        'Long Wait Times',
        'Limited Transparency',
        'Repetitive Processes',
        'Delayed Vehicle Recovery',
        'Poor Claims Experience',
      ],
    },
    {
      id: 'repairer',
      icon: Wrench,
      title: 'Repairer',
      color: 'from-cyan-500/15 via-blue-500/10 to-indigo-500/5',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      iconBg: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
      glowColor: 'shadow-glow-cyan/20',
      bulletColor: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]',
      painPoints: [
        'Delayed Authorizations',
        'Inspection Dependencies',
        'Approval Bottlenecks',
        'Settlement Delays',
        'Reduced Workshop Efficiency',
      ],
    },
    {
      id: 'handler',
      icon: Briefcase,
      title: 'Claim Handler',
      color: 'from-purple-500/15 via-violet-500/10 to-pink-500/5',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      iconBg: 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
      glowColor: 'shadow-glow-purple/20',
      bulletColor: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]',
      painPoints: [
        'Too Much Paperwork',
        'Multiple System Dependency',
        'Complex Decision Making',
        'High Processing Workload',
        'SLA/TAT Pressure',
      ],
    },
    {
      id: 'insurance',
      icon: Building2,
      title: 'Insurance Company',
      color: 'from-rose-500/15 via-red-500/10 to-orange-500/5',
      borderColor: 'border-rose-500/30 hover:border-rose-400',
      iconBg: 'bg-rose-500/15 text-rose-400 border border-rose-500/30',
      glowColor: 'shadow-glow-red/20',
      bulletColor: 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]',
      painPoints: [
        'Fraud & Leakage',
        'Cost Optimization Pressure',
        'Customer Retention Challenges',
        'Faster Decision Expectations',
        'Scalability & Operational Excellence',
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-2 sm:px-4">
      {/* Top Header Row: Left Text & Right Play Video Button */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        {/* Left Side: Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            One claim.{' '}
            <span className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-purple bg-clip-text text-transparent">
              Many frictions.
            </span>
          </h2>
        </motion.div>

        {/* Right Side: Play Video Button (Pill Button on Page) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenVideo}
          className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange/20 via-brand-red/20 to-brand-purple/20 hover:from-brand-orange/30 hover:via-brand-red/30 hover:to-brand-purple/30 border border-brand-orange/40 hover:border-brand-orange text-white font-bold text-sm backdrop-blur-xl shadow-lg shadow-brand-orange/10 hover:shadow-glow-orange/30 transition-all cursor-pointer shrink-0"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white shadow-md shadow-brand-orange/40 group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
            <span className="absolute inset-0 rounded-full bg-brand-orange/50 animate-ping pointer-events-none opacity-40" />
          </div>
          <span className="tracking-wide">Play Video</span>
        </motion.button>
      </div>

      {/* Stakeholders 4-Card Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-7"
      >
        {stakeholders.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.id} variants={itemVariants}>
              <GlassCard
                className={`h-full flex flex-col justify-start border ${item.borderColor} bg-gradient-to-b ${item.color} ${item.glowColor} relative overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top Icon */}
                <div className="mb-4">
                  <div className={`w-fit p-3 rounded-2xl ${item.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-display text-white mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* 5 Bullet Points */}
                <ul className="space-y-3">
                  {item.painPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200/90 leading-snug font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.bulletColor} mt-1.5 shrink-0`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fullscreen Video Modal Portal (Rendered at Root Body Level, completely covering top navbar) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isVideoOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-2xl"
                onClick={handleCloseVideo}
              >
                {/* Clean Professional Close (X) Button positioned outside the video box at top-right corner of screen */}
                <button
                  onClick={handleCloseVideo}
                  className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50 p-2.5 sm:p-3 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-xl transition-all duration-200 cursor-pointer flex items-center justify-center group focus:outline-none"
                  title="Close Video (Esc)"
                  aria-label="Close Video"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:rotate-90" />
                </button>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#040c1e] border border-white/20 shadow-2xl shadow-black/95"
                >
                  {/* Video Player (Click anywhere on video to pause, click Play icon to continue) */}
                  <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                    <video
                      ref={videoRef}
                      src={accidentVideo}
                      controls
                      playsInline
                      onPlay={() => {
                        setIsPlaying(true);
                        setHasStarted(true);
                      }}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => {
                        setIsPlaying(false);
                        setHasStarted(false);
                      }}
                      className="w-full h-full object-contain"
                    />

                    {/* Transparent Click-to-Pause Layer when video is playing */}
                    {isPlaying && (
                      <div
                        onClick={handlePause}
                        className="absolute inset-0 bottom-14 cursor-pointer z-10"
                        title="Click anywhere to pause"
                        aria-label="Click to pause video"
                      />
                    )}

                    {/* Centered Circular Play/Resume Icon Button on Video when Paused */}
                    {!isPlaying && (
                      <div
                        onClick={handlePlayOrResume}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer group backdrop-blur-[2px] transition-all z-20"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayOrResume();
                          }}
                          aria-label={hasStarted ? 'Resume video' : 'Play video'}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white flex items-center justify-center shadow-2xl shadow-brand-orange/60 group-hover:scale-110 active:scale-95 transition-transform cursor-pointer border border-white/20"
                        >
                          <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white text-white translate-x-0.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};


