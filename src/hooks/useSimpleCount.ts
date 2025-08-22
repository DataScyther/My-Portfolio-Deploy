import { useState, useEffect, useRef, useCallback } from 'react';

interface SimpleCountProps {
  target: number;
  duration?: number;
}

export const useSimpleCount = ({ target, duration = 2000 }: SimpleCountProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const startCounting = useCallback(() => {
    if (hasAnimated) return; // Prevent re-animation
    
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);
      
      const currentCount = Math.round(startValue + (target - startValue) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [target, duration, hasAnimated]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounting();
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px' // Trigger when 30% visible and 50px from bottom
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startCounting, hasAnimated]);



  return { count, ref };
};

export default useSimpleCount;