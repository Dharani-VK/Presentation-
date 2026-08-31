import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface SlideMeta {
  index: number;
  id: string;
  title: string;
  shortName: string;
  kicker: string;
}

export const SLIDES_METADATA: SlideMeta[] = [
  { index: 0, id: 'home', title: 'Home', shortName: 'Home', kicker: 'Executive Presentation' },
  { index: 1, id: 'team', title: 'Team Members', shortName: 'Team Members', kicker: 'The Team' },
  { index: 2, id: 'journey', title: 'Journey', shortName: 'Journey', kicker: 'Milestones & Evolution' },
  { index: 3, id: 'problem', title: 'The Problem', shortName: 'The Problem', kicker: 'Frictions & Challenges' },
  { index: 4, id: 'reveal', title: 'Product Reveal', shortName: 'Product Reveal', kicker: 'Product Reveal' },
  { index: 5, id: 'ecosystem', title: 'Ecosystem', shortName: 'Ecosystem', kicker: 'ClaimShield+ Ecosystem' },
  { index: 6, id: 'automation', title: 'AI Automation', shortName: 'AI Automation', kicker: 'Automated STP Engine' },
  { index: 7, id: 'impact', title: 'Business Impact & PMO', shortName: 'Business Impact & PMO', kicker: 'Business Impact & PMO' },
  { index: 8, id: 'roadmap', title: 'Roadmap', shortName: 'Roadmap', kicker: 'Strategic Horizon' },
];

export const TOTAL_SLIDES = SLIDES_METADATA.length; // Exactly 9

interface PresentationContextType {
  currentSlide: number;
  direction: number; // 1 for next, -1 for prev
  isEyeModeActive: boolean; // true = nav hidden, false = nav visible
  toggleEyeMode: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  currentMeta: SlideMeta;
  slides: SlideMeta[];
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  // Default: nav visible (isEyeModeActive = false)
  const [isEyeModeActive, setIsEyeModeActive] = useState<boolean>(false);

  const canGoNext = currentSlide < TOTAL_SLIDES - 1;
  const canGoPrev = currentSlide > 0;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES && index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const toggleEyeMode = useCallback(() => {
    setIsEyeModeActive((prev) => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with an input or textarea
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        if (e.key === ' ') e.preventDefault(); // Prevent page scroll
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentMeta = useMemo(() => SLIDES_METADATA[currentSlide] || SLIDES_METADATA[0], [currentSlide]);

  const value = useMemo(
    () => ({
      currentSlide,
      direction,
      isEyeModeActive,
      toggleEyeMode,
      nextSlide,
      prevSlide,
      goToSlide,
      canGoNext,
      canGoPrev,
      currentMeta,
      slides: SLIDES_METADATA,
    }),
    [currentSlide, direction, isEyeModeActive, toggleEyeMode, nextSlide, prevSlide, goToSlide, canGoNext, canGoPrev, currentMeta]
  );

  return <PresentationContext.Provider value={value}>{children}</PresentationContext.Provider>;
};

export const usePresentation = (): PresentationContextType => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};
