import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'accent-green' | 'accent-blue' | 'accent-orange' | 'accent-purple';
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className = '',
  hoverEffect = true,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glow':
        return 'border-brand-green/30 bg-surface-glass shadow-glow-green/20';
      case 'accent-blue':
        return 'border-brand-blue/30 bg-surface-card hover:border-brand-blue/60 hover:shadow-glow-blue/20';
      case 'accent-green':
        return 'border-brand-green/30 bg-surface-card hover:border-brand-green/60 hover:shadow-glow-green/20';
      case 'accent-orange':
        return 'border-brand-orange/30 bg-surface-card hover:border-brand-orange/60 hover:shadow-glow-orange/20';
      case 'accent-purple':
        return 'border-brand-purple/30 bg-surface-card hover:border-brand-purple/60 hover:shadow-glow-purple/20';
      case 'default':
      default:
        return 'border-white/10 bg-white/[0.035] hover:border-white/20';
    }
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={`relative rounded-2xl md:rounded-3xl border backdrop-blur-xl p-5 md:p-7 transition-colors ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
