import React, { useRef } from 'react';
import { usePresentation } from '../../context/PresentationContext';
import { SlideNavbar } from './SlideNavbar';
import { NavigationControls } from './NavigationControls';

interface PresentationLayoutProps {
  children: React.ReactNode;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({ children }) => {
  const { currentSlide, nextSlide, prevSlide } = usePresentation();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Minimum swipe threshold and mostly horizontal
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-screen overflow-hidden bg-[#020713] text-white flex flex-col select-none font-sans"
    >
      {/* Background Decorative Mesh & Aurora Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-brand-purple/15 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-green/10 blur-[150px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </div>

      {/* Slide Navigation Header */}
      <SlideNavbar />

      {/* Main Single Slide Stage */}
      <main
        className={`relative z-10 flex-1 w-full h-full flex items-center justify-center px-4 sm:px-8 ${
          currentSlide === 0 || currentSlide === 1
            ? 'overflow-hidden pt-16 sm:pt-20 pb-3'
            : 'overflow-y-auto pt-16 sm:pt-20 pb-20 sm:pb-24'
        }`}
      >
        <div className="w-full max-w-[1480px] mx-auto my-auto py-1 sm:py-2 flex flex-col items-center justify-center">
          {children}
        </div>
      </main>

      {/* Fixed Bottom Navigation Controls */}
      <NavigationControls />
    </div>
  );
};

