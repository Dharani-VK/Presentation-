import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';
import roboxVideo from '../../Assets/Robox.mp4';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export const Slide5ProductReveal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video playback
    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Fallback muted autoplay if browser policy restricts audio
        video.muted = true;
        setIsMuted(true);
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      });

    // Reveal text after 0.05 seconds of video playback
    const handleTimeUpdate = () => {
      if (video.currentTime >= 0.05) {
        setTextRevealed(true);
      }
    };

    // When video completes fully, stop and keep paused on final frame (plays only once)
    const handleEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      video.pause();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Guaranteed fallback timer for 0.05s reveal
    const timer = setTimeout(() => {
      setTextRevealed(true);
    }, 50);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      clearTimeout(timer);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isEnded) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    } else if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[540px] py-3 px-4 sm:px-6">
      {/* 1. SINGLE LINE HEADLINE (Revealed after 0.05s) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={textRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full text-center mb-6 sm:mb-8 relative z-10"
      >
        <h2 className="w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold font-display tracking-tight whitespace-nowrap flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 text-white">
          <span>We understood the problem</span>
          <span>We learned the business</span>
          <span>We redesigned the journey</span>
        </h2>
      </motion.div>

      {/* 2. TWO-COLUMN LAYOUT: VIDEO ON LEFT, PRODUCT BRAND ON RIGHT */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* ── Left Side: Robox Video (Starts immediately, plays once to completion) ───── */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center justify-center w-full"
        >
          <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-tr from-brand-cyan/50 via-brand-blue/30 to-brand-green/40 shadow-[0_0_40px_rgba(0,217,255,0.2)] group">
            {/* Video Container */}
            <div
              onClick={togglePlay}
              className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[22px] overflow-hidden bg-[#06152f] cursor-pointer flex items-center justify-center"
            >
              <video
                ref={videoRef}
                src={roboxVideo}
                autoPlay
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Controls & Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Play / Pause / Replay Toggle Indicator */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-cyan" />}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                  title={isEnded ? 'Replay' : isPlaying ? 'Pause' : 'Play'}
                  aria-label={isEnded ? 'Replay video' : isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isEnded ? (
                    <RotateCcw className="w-4 h-4 text-brand-green" />
                  ) : isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Top Pill Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold font-display uppercase tracking-wider bg-brand-cyan/20 border border-brand-cyan/50 text-[#5ce1e6] backdrop-blur-md shadow-sm">
                  Robox AI Engine
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right Side: Product Brand Reveal (Reveals after 0.05s) ───── */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.92 }}
          animate={
            textRevealed
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 30, scale: 0.92 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-center text-center relative z-10"
        >
          {/* Shield Emblem Image */}
          <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={claimShieldLogo}
                alt="ClaimShield+ Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Brand Title: ClaimShield+ */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-none">
            Claim<span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime bg-clip-text text-transparent">Shield+</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl font-bold font-display text-white/90 mt-3 sm:mt-4 tracking-tight">
            Motor OD Claim Management Platform
          </p>

          {/* Tagline */}
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#5ce1e6] mt-2 sm:mt-3 tracking-wide">
            Trust Every Claim. Transform Every Outcome.
          </p>
        </motion.div>
      </div>
    </div>
  );
};


