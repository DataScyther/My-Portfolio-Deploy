import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CountAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

interface UseCountAnimationReturn {
  count: number;
  ref: React.RefObject<HTMLDivElement>;
  startAnimation: () => void;
  resetAnimation: () => void;
}

// Smooth easing function
const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

export const useCountAnimation = (options: CountAnimationOptions): UseCountAnimationReturn => {
  const {
    start = 0,
    end,
    duration = 2000,
    easing = easeOutQuart,
    onComplete
  } = options;

  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const observerRef = useRef<IntersectionObserver>();

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Apply easing
    const easedProgress = easing(progress);
    
    // Calculate current value
    const currentValue = start + (end - start) * easedProgress;
    setCount(Math.round(currentValue));

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      setCount(end); // Ensure we end at the exact target
      onComplete?.();
    }
  }, [start, end, duration, easing, onComplete]);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    
    console.log('Starting animation from', start, 'to', end); // Debug log
    setIsAnimating(true);
    setHasAnimated(true);
    startTimeRef.current = undefined;
    setCount(start);
    
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isAnimating, start, end, animate]);

  const resetAnimation = useCallback(() => {
    console.log('Resetting animation'); // Debug log
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsAnimating(false);
    setHasAnimated(false);
    startTimeRef.current = undefined;
    setCount(start);
  }, [start]);

  // Additional effect to ensure animation starts
  useEffect(() => {
    // Start animation immediately for testing
    const timer = setTimeout(() => {
      console.log('Auto-starting animation for testing');
      startAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, [startAnimation]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: Start animation after a short delay if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        console.log('Fallback animation triggered');
        startAnimation();
      }
    }, 500);

    // Create intersection observer to trigger animation on scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection observer triggered:', entry.isIntersecting, 'for element:', entry.target); // Debug log
          if (entry.isIntersecting) {
            clearTimeout(fallbackTimer);
            // Always start animation when element comes into view
            startAnimation();
          } else {
            // Reset when element goes out of view  
            resetAnimation();
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for better triggering
        rootMargin: '0px 0px 0px 0px' // No margin for immediate triggering
      }
    );

    observerRef.current.observe(element);

    return () => {
      clearTimeout(fallbackTimer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation, resetAnimation, hasAnimated]);

  return {
    count,
    ref,
    startAnimation,
    resetAnimation
  };
};

export default useCountAnimation;