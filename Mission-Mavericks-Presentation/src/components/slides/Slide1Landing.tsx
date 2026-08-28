import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import revealFirstPageVideo from '../../assets/Reveal first page.mp4';

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Ensure video stays paused at the last frame
      video.pause();
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      onClick={nextSlide}
      className="fixed inset-0 w-screen h-screen z-20 flex items-center justify-center bg-[#020713] overflow-hidden cursor-pointer select-none"
    >
      {/* Fullscreen Video covering the entire display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full h-full flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src={revealFirstPageVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-fill pointer-events-none"
        />
      </motion.div>
    </div>
  );
};









