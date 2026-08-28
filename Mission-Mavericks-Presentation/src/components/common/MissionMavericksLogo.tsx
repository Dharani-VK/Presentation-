import React from 'react';

interface MissionMavericksLogoProps {
  className?: string;
  size?: number | string;
}

export const MissionMavericksLogo: React.FC<MissionMavericksLogoProps> = ({
  className = '',
  size = '100%',
}) => {
  return (
    <svg
      viewBox="0 0 400 480"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* 'M' Vertical Gradient: Deep Royal Blue #0c4aae to Vibrant Emerald Green #059669 / #10b981 */}
        <linearGradient id="emblemMGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4aae" />
          <stop offset="30%" stopColor="#0d5bc6" />
          <stop offset="65%" stopColor="#0b8474" />
          <stop offset="100%" stopColor="#0ba360" />
        </linearGradient>

        {/* Shield Border Color: Crisp Solid Royal Blue */}
        <linearGradient id="emblemShieldBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a44a4" />
          <stop offset="100%" stopColor="#083888" />
        </linearGradient>

        {/* Dynamic Glow Filter for star */}
        <filter id="starAura" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. TOP GREEN 5-POINT STAR */}
      <polygon
        points="200,24 213,64 255,64 221,89 234,129 200,104 166,129 179,89 145,64 187,64"
        fill="#0ba360"
        filter="url(#starAura)"
      />

      {/* 2. OUTER SHIELD BLUE CONTOUR */}
      <path
        d="M 200 452
           C 110 395, 60 290, 60 142
           C 125 130, 168 108, 185 95
           L 178 112
           C 135 125, 90 148, 90 282
           C 90 358, 145 398, 200 422
           C 255 398, 310 358, 310 282
           C 310 148, 265 125, 222 112
           L 215 95
           C 232 108, 275 130, 340 142
           C 340 290, 290 395, 200 452
           Z"
        fill="url(#emblemShieldBlue)"
      />

      {/* 3. CENTRAL STYLIZED 'M' WITH BLUE-TO-GREEN GRADIENT */}
      <path
        d="M 102 165
           L 155 272
           L 200 348
           L 245 272
           L 298 165
           L 298 385
           L 262 385
           L 262 238
           L 216 322
           L 184 322
           L 138 238
           L 138 385
           L 102 385
           Z"
        fill="url(#emblemMGradient)"
      />
    </svg>
  );
};
