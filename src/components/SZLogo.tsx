
import React from 'react';
import { cn } from '@/lib/utils';

interface SZLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSparkle?: boolean;
  color?: 'gradient' | 'white' | 'primary';
}

const SZLogo: React.FC<SZLogoProps> = ({ 
  className, 
  size = 'md',
  showSparkle = true,
  color = 'gradient'
}) => {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const colorClasses = {
    gradient: 'text-transparent fill-transparent',
    white: 'text-white fill-white',
    primary: 'text-primary fill-primary'
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "w-full h-full", 
            color === 'gradient' ? "fill-transparent" : colorClasses[color]
          )}
        >
          <defs>
            <linearGradient id="szGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          {/* Circle background */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill={color === 'gradient' ? "url(#szGradient)" : "currentColor"}
          />
          
          {/* S letter */}
          <path 
            d="M33 30c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H35c-1.1 0-2-0.9-2-2v-5z" 
            fill="white" 
          />
          <path 
            d="M33 45c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H35c-1.1 0-2-0.9-2-2v-5z" 
            fill="white" 
          />
          <path 
            d="M48 60c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H50c-1.1 0-2-0.9-2-2v-5z" 
            fill="white" 
          />
          
          {/* Z letter */}
          <path 
            d="M48 30c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H50c-1.1 0-2-0.9-2-2v-5z" 
            fill="white" 
          />
          <path 
            d="M33 60c0-1.1 0.9-2 2-2h15c1.1 0 2 0.9 2 2v5c0 1.1-0.9 2-2 2H35c-1.1 0-2-0.9-2-2v-5z" 
            fill="white" 
          />
          
          {/* Plus sign connector */}
          <rect x="48" y="44" width="4" height="12" fill="white" />
          <rect x="44" y="48" width="12" height="4" fill="white" />
        </svg>
      </div>
      <span 
        className={cn(
          "font-bold text-xl ml-2",
          color === 'gradient' && "bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        )}
      >
        Creazone IT
      </span>
      {showSparkle && (
        <svg 
          className="h-4 w-4 ml-1 text-amber-500" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 3l1.8 4.7h4.9l-3.9 3.7 1.5 5.4-4.3-2.6-4.3 2.6 1.5-5.4-3.9-3.7h4.9z" />
        </svg>
      )}
    </div>
  );
};

export default SZLogo;
