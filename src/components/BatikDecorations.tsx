import React from 'react';

/**
 * Authentic Indonesian Batik Vector Ornaments
 * Kawung (geometric balance), Parang (dynamic perseverance), and Mega Mendung (cool-headed wisdom)
 */

export const BatikKawungPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.05,
}) => {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="batik-kawung" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Central intersecting elliptical petals */}
          <ellipse cx="30" cy="15" rx="14" ry="8" fill="none" stroke="#0c2340" strokeWidth="1.5" />
          <ellipse cx="30" cy="45" rx="14" ry="8" fill="none" stroke="#0c2340" strokeWidth="1.5" />
          <ellipse cx="15" cy="30" rx="8" ry="14" fill="none" stroke="#0c2340" strokeWidth="1.5" />
          <ellipse cx="45" cy="30" rx="8" ry="14" fill="none" stroke="#0c2340" strokeWidth="1.5" />

          {/* Golden inner seed points */}
          <circle cx="30" cy="30" r="3.5" fill="#c59b27" />
          <circle cx="0" cy="0" r="2.5" fill="#881337" />
          <circle cx="60" cy="0" r="2.5" fill="#881337" />
          <circle cx="0" cy="60" r="2.5" fill="#881337" />
          <circle cx="60" cy="60" r="2.5" fill="#881337" />

          {/* Diamond corner accents */}
          <path d="M 0 30 L 7 30 M 53 30 L 60 30" stroke="#c59b27" strokeWidth="1" />
          <path d="M 30 0 L 30 7 M 30 53 L 30 60" stroke="#c59b27" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batik-kawung)" />
    </svg>
  );
};

export const BatikDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center my-6 ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-200 to-transparent w-full absolute" />
      <div className="relative bg-[#fafaf8] px-4 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-700">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="#c59b27"
            stroke="#881337"
            strokeWidth="0.8"
          />
          <circle cx="12" cy="12" r="2" fill="#0c2340" />
        </svg>
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-amber-800/80">
          Berkah Nusantara
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-700">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="#c59b27"
            stroke="#881337"
            strokeWidth="0.8"
          />
          <circle cx="12" cy="12" r="2" fill="#0c2340" />
        </svg>
      </div>
    </div>
  );
};

export const BatikCornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = '' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`absolute w-12 h-12 pointer-events-none select-none opacity-40 ${rotationClass} ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 L 36 0 C 24 6 16 14 12 24 C 8 16 4 10 0 8 Z" fill="#0c2340" fillOpacity="0.15" />
        <path d="M 0 0 L 24 0 C 16 4 10 10 8 18 C 5 12 3 7 0 6 Z" fill="#881337" fillOpacity="0.25" />
        <path d="M 0 0 L 12 0 C 8 2 5 5 4 9 C 3 6 1 3 0 3 Z" fill="#c59b27" fillOpacity="0.7" />
        <circle cx="6" cy="6" r="1.5" fill="#c59b27" />
      </svg>
    </div>
  );
};
