import React, { useRef } from 'react';
import revealFirstPageVideo from '../../Assets/Reveal first page.mp4';

export const Slide1Landing: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-[calc(100vh-100px)] max-h-[820px] flex items-center justify-center overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        src={revealFirstPageVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
};
