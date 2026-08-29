import React from 'react';
import { PresentationProvider, usePresentation } from './context/PresentationContext';
import { PresentationLayout } from './components/layout/PresentationLayout';
import { Slide1Landing } from './components/slides/Slide1Landing';
import { Slide2Reality } from './components/slides/Slide2Reality';
import { Slide3TeamReveal } from './components/slides/Slide3TeamReveal';
import { Slide4Timeline } from './components/slides/Slide4Timeline';
import { Slide5ProductReveal } from './components/slides/Slide5ProductReveal';
import { Slide6Ecosystem } from './components/slides/Slide6Ecosystem';
import { Slide7Launch } from './components/slides/Slide7Launch';
import { Slide8EvidenceHub } from './components/slides/Slide8EvidenceHub';
import { Slide9Roadmap } from './components/slides/Slide9Roadmap';

const SlideRenderer: React.FC = () => {
  const { currentSlide } = usePresentation();

  switch (currentSlide) {
    case 0:
      return <Slide1Landing />; // 1 Home
    case 1:
      return <Slide3TeamReveal />; // 2 Team Members
    case 2:
      return <Slide4Timeline />; // 3 Journey
    case 3:
      return <Slide2Reality />; // 4 The Problem
    case 4:
      return <Slide5ProductReveal />; // 5 Product Reveal
    case 5:
      return <Slide6Ecosystem />; // 6 Ecosystem
    case 6:
      return <Slide7Launch />; // 7 AI Automation
    case 7:
      return <Slide8EvidenceHub />; // 8 Business Impact, PMO Disciplines
    case 8:
      return <Slide9Roadmap />; // 9 Roadmap
    default:
      return <Slide1Landing />;
  }
};

export const App: React.FC = () => {
  return (
    <PresentationProvider>
      <PresentationLayout>
        <SlideRenderer />
      </PresentationLayout>
    </PresentationProvider>
  );
};

export default App;
