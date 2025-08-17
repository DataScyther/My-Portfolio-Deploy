// =========================================
// Smoothness & Pro-Motion JS Helpers
// =========================================

type DebounceFunction<T extends (...args: unknown[]) => unknown> = (
  ...args: Parameters<T>
) => void;

/**
 * Debounce function to limit the rate at which a function can fire.
 * @param func The function to debounce
 * @param wait Time to wait in milliseconds
 * @param immediate Whether to execute immediately on first call
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 15,
  immediate = false
): DebounceFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function debouncedFunction(this: unknown, ...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}

/**
 * Smooth scroll performance optimization
 * Adds a 'scrolling' class during scroll events for better performance
 */
export function setupSmoothScroll() {
  if (typeof window === 'undefined') return;

  const handleScroll = debounce(() => {
    document.body.classList.add('scrolling');
    requestAnimationFrame(() => {
      document.body.classList.remove('scrolling');
    });
  }, 16);

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Ensures smooth updates using requestAnimationFrame
 * @param callback Function to call on each frame
 * @returns Function to cancel the animation frame loop
 */
export function smoothRAFUpdate(callback: FrameRequestCallback): () => void {
  let animationFrameId: number;
  
  const loop = () => {
    callback(performance.now());
    animationFrameId = requestAnimationFrame(loop);
  };
  
  animationFrameId = requestAnimationFrame(loop);
  
  // Return cleanup function
  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  // Setup smooth scroll
  const cleanupScroll = setupSmoothScroll();
  
  // Return cleanup function
  return () => {
    cleanupScroll?.();
  };
}
