
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
          <path 
            d="M50 5C25.15 5 5 25.15 5 50c0 24.85 20.15 45 45 45 24.85 0 45-20.15 45-45C95 25.15 74.85 5 50 5z" 
            fill={color === 'gradient' ? "url(#szGradient)" : "currentColor"}
          />
          <path 
            d="M37 30c-2.76 0-5 2.24-5 5v5h15v-5c0-2.76-2.24-5-5-5H37z M63 30c-2.76 0-5 2.24-5 5v5h15v-5c0-2.76-2.24-5-5-5H63z M32 45v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-5H32z M58 45v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-5H58z M42 60v5c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-5h-8H42z" 
            fill="white" 
          />
        </svg>
      </div>
      <span 
        className={cn(
          "font-bold text-xl ml-2",
          color === 'gradient' && "bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        )}
      >
        SmartZone AI
      </span>
      {showSparkle && (
        <svg 
          className="h-4 w-4 ml-1 text-amber-500" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 3v5m0 0 3-3m-3 3-3-3M9 10h6M8 14h8m-9 3a4 4 0 0 0 8 0m3-3-2 2 2 2"/>
        </svg>
      )}
    </div>
  );
};

export default SZLogo;
