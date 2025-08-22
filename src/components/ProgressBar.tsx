import React, { useMemo } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface ProgressBarProps {
  className?: string;
  showVelocityIndicator?: boolean;
  showDirectionIndicator?: boolean;
  height?: 'sm' | 'md' | 'lg';
  position?: 'top' | 'bottom';
  glowEffect?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = '',
  showVelocityIndicator = false,
  showDirectionIndicator = false,
  height = 'sm',
  position = 'top',
  glowEffect = true
}) => {
  const { progress, isScrolling, direction, velocity } = useScrollProgress({
    throttleMs: 16, // Smooth 60fps
    includeUserActivity: false
  });

  // Clean progress with minimal processing
  const displayProgress = useMemo(() => {
    return Math.max(0, Math.min(100, progress));
  }, [progress]);

  // Height variants
  const heightClasses = useMemo(() => {
    switch (height) {
      case 'sm': return 'h-0.5';
      case 'md': return 'h-1';
      case 'lg': return 'h-1.5';
      default: return 'h-0.5';
    }
  }, [height]);

  // Clean gradient without over-complexity
  const progressGradient = useMemo(() => {
    const baseGradient = 'linear-gradient(90deg, hsl(270 100% 70%), hsl(320 100% 70%), hsl(30 100% 70%))';
    
    if (isScrolling && velocity > 0.1) {
      return 'linear-gradient(90deg, hsl(270 100% 75%), hsl(320 100% 75%), hsl(30 100% 75%))';
    }
    
    return baseGradient;
  }, [isScrolling, velocity]);

  // Simple opacity for clean performance
  const progressOpacity = useMemo(() => {
    return isScrolling ? 1 : 0.9;
  }, [isScrolling]);

  // Clean glow effect
  const glowFilter = useMemo(() => {
    if (!glowEffect) return 'none';
    
    return isScrolling 
      ? 'drop-shadow(0 0 6px hsl(270 100% 70% / 0.5))' 
      : 'drop-shadow(0 0 3px hsl(270 100% 70% / 0.3))';
  }, [isScrolling, glowEffect]);

  // Position classes
  const positionClasses = useMemo(() => {
    return position === 'top' ? 'top-0' : 'bottom-0';
  }, [position]);

  return (
    <div
      className={`fixed left-0 right-0 ${positionClasses} z-[60] ${className}`}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background track */}
      <div 
        className={`w-full ${heightClasses} bg-border/20 backdrop-blur-sm`}
        style={{
          background: 'linear-gradient(90deg, hsl(var(--border) / 0.1), hsl(var(--border) / 0.3), hsl(var(--border) / 0.1))'
        }}
      >
        {/* Progress fill - Buttery smooth and clean */}
        <div
          className={`${heightClasses} transition-all duration-150 ease-out will-change-transform`}
          style={{
            width: `${displayProgress}%`,
            background: progressGradient,
            opacity: progressOpacity,
            filter: glowFilter,
            transform: 'translateZ(0)'
          }}
        />
        
        {/* Simple shimmer effect */}
        {isScrolling && velocity > 0.1 && (
          <div
            className={`absolute top-0 ${heightClasses} w-16 opacity-50 pointer-events-none`}
            style={{
              left: `${Math.max(0, displayProgress - 8)}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              animation: 'shimmer 0.8s ease-out infinite',
              transform: 'translateZ(0)'
            }}
          />
        )}
      </div>
      
      {/* Clean direction indicator */}
      {showDirectionIndicator && direction && isScrolling && velocity > 0.1 && (
        <div
          className={`absolute ${position === 'top' ? 'top-1' : 'bottom-1'} right-4 w-2 h-2 rounded-full transition-all duration-200`}
          style={{
            background: direction === 'down' ? 'hsl(320 100% 70%)' : 'hsl(30 100% 70%)',
            boxShadow: `0 0 6px ${direction === 'down' ? 'hsl(320 100% 70% / 0.5)' : 'hsl(30 100% 70% / 0.5)'}`
          }}
        />
      )}
      
      {/* Clean velocity indicator */}
      {showVelocityIndicator && isScrolling && velocity > 0.1 && (
        <div
          className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 ${heightClasses} w-full pointer-events-none opacity-30`}
          style={{
            background: `linear-gradient(90deg, transparent ${Math.max(0, displayProgress - 4)}%, hsl(270 100% 70% / 0.3) ${displayProgress}%, transparent ${Math.min(100, displayProgress + 4)}%)`
          }}
        />
      )}
    </div>
  );
};

// Remove the CSS-in-JS injection since we're using the main stylesheet
export default ProgressBar;