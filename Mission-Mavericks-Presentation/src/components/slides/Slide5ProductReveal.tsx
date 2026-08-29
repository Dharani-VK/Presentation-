import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import claimShieldLogo from '../../Assets/image.png';
import roboxVideo from '../../Assets/Robox.mp4';
import { RotateCcw, Volume2, VolumeX } from 'lucide-react';

export const Slide5ProductReveal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video playback immediately
    video
      .play()
      .catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });

    // Reveal text after 6 seconds of video playback
    const handleTimeUpdate = () => {
      if (video.currentTime >= 6) {
        setTextRevealed(true);
      }
    };

    // When video completes fully, stop and keep paused on final frame (plays only once)
    const handleEnded = () => {
      setIsEnded(true);
      setTextRevealed(true);
      video.pause();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Guaranteed fallback timer for 6 seconds reveal
    const timer = setTimeout(() => {
      setTextRevealed(true);
    }, 6000);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      clearTimeout(timer);
    };
  }, []);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsEnded(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-6 px-4 overflow-hidden select-none">
      {/* ── Slide 5 Background Layer (Exact dark tone matching video background) ───── */}
      <div className="fixed inset-0 bg-[#030712] z-0 pointer-events-none" />

      {/* ── Left Region Full Uncropped Video Background ───── */}
      <div className="absolute left-0 sm:left-2 lg:left-6 top-1/2 -translate-y-1/2 w-[48vw] max-w-[560px] h-[82vh] max-h-[640px] pointer-events-none z-0 flex items-center justify-start overflow-visible">
        <video
          ref={videoRef}
          src={roboxVideo}
          autoPlay
          muted={isMuted}
          playsInline
          className="w-full h-full object-contain object-left"
        />
      </div>

      {/* ── Subtle Controls (Mute / Replay in bottom-right) ───── */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-cyan" />}
        </button>

        {isEnded && (
          <button
            onClick={handleReplay}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/80 text-brand-green border border-brand-green/30 backdrop-blur-md transition-all cursor-pointer text-xs font-bold font-display"
            title="Replay Video"
            aria-label="Replay video"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>
        )}
      </div>

      {/* ── Centered Page Contents (Revealed after 6 seconds) ───── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* 1. SINGLE LINE HEADLINE (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={textRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full text-center mb-10 sm:mb-14"
        >
          <h2 className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold font-display tracking-tight whitespace-nowrap flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white">
            <span>We understood the problem</span>
            <span>We learned the business</span>
            <span>We redesigned the journey</span>
          </h2>
        </motion.div>

        {/* 2. PRODUCT BRAND REVEAL (Centered) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={
            textRevealed
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.88, y: 25 }
          }
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Shield Emblem Image */}
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

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl md:text-3xl font-bold font-display text-white/90 mt-4 tracking-tight">
            Motor OD Claim Management Platform
          </p>

          {/* Tagline Placed Last */}
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#5ce1e6] mt-3 sm:mt-4 tracking-wide">
            Trust Every Claim. Transform Every Outcome.
          </p>
        </motion.div>
      </div>
    </div>
  );
};





