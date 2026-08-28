import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowingButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'hero';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-brand-green to-brand-cyan text-brand-navy font-extrabold shadow-glow-green/40 hover:shadow-glow-green/70 hover:brightness-105';
      case 'hero':
        return 'bg-gradient-to-r from-brand-green via-brand-cyan to-brand-lime text-brand-navy font-black text-lg shadow-glow-green/60 hover:shadow-glow-cyan/80 scale-100 hover:scale-[1.02]';
      case 'secondary':
        return 'bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 hover:border-white/40 backdrop-blur-md shadow-lg shadow-black/20';
      case 'outline':
        return 'bg-transparent text-white/90 hover:text-white font-medium border border-white/15 hover:border-brand-green/50 hover:bg-brand-green/10';
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer select-none tracking-tight text-sm md:text-base ${getStyles()} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
