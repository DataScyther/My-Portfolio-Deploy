import { useEffect, useRef, DependencyList } from 'react';

/**
 * Frame-synced animation utilities for high-performance animations
 * Optimized for 120Hz+ displays with requestAnimationFrame
 */

type FrameCallback = (deltaTime: number) => void;
type CleanupFunction = () => void;

/**
 * Creates a frame-perfect animation loop
 * @param callback - Function to call on each animation frame
 * @returns Cleanup function to stop the animation
 */
export function createFrameLoop(callback: FrameCallback): CleanupFunction {
  let frameId: number;
  let lastTime = 0;

  const loop = (time: number) => {
    // Calculate delta time for frame-rate independent animations
    const deltaTime = lastTime ? time - lastTime : 0;
    lastTime = time;
    
    callback(deltaTime);
    frameId = requestAnimationFrame(loop);
  };

  frameId = requestAnimationFrame(loop);

  // Return cleanup function
  return () => {
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Creates a parallax effect on scroll
 * @param elements - Elements to apply parallax to
 * @param options - Configuration options
 * @returns Cleanup function to remove event listeners
 */
export function createParallaxEffect(
  elements: HTMLElement[],
  options: { intensity?: number } = {}
): CleanupFunction {
  const { intensity = 0.2 } = options;
  let lastScrollY = window.scrollY;
  
  // Use transform for GPU acceleration
  const updatePositions = () => {
    const scrollY = window.scrollY;
    
    // Only update if scrolled
    if (Math.abs(scrollY - lastScrollY) < 1) return;
    
    lastScrollY = scrollY;
    
    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '1');
      const y = scrollY * intensity * speed;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    });
  };

  // Use passive event listener for better scroll performance
  window.addEventListener('scroll', updatePositions, { passive: true });
  
  // Initial update
  updatePositions();

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', updatePositions);
    
    // Reset transforms
    elements.forEach((el) => {
      el.style.transform = '';
    });
  };
}

/**
 * Hook for frame-synced animations
 * @param callback - Function to call on each animation frame
 * @param dependencies - Dependencies to restart the animation
 */
export function useFrameLoop(
  callback: FrameCallback,
  dependencies: DependencyList = []
): void {
  const frameRef = useRef<number>();
  const lastTime = useRef<number>();
  const callbackRef = useRef<FrameCallback>(callback);
  
  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  
  useEffect(() => {
    let isActive = true;
    
    const loop = (time: number) => {
      if (!isActive) return;
      
      const deltaTime = lastTime.current ? time - lastTime.current : 0;
      lastTime.current = time;
      
      callbackRef.current(deltaTime);
      frameRef.current = requestAnimationFrame(loop);
    };
    
    frameRef.current = requestAnimationFrame(loop);
    
    return () => {
      isActive = false;
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  // We're using the dependencies array directly as it's already typed as DependencyList
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
