import { useEffect, useRef } from 'react';

export const useScrollReveal = (options?: {
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}) => {
  const ref = useRef<HTMLElement>(null);

  // Mobile-optimized defaults
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const {
    delay = 0,
    duration = 600,
    threshold = isMobile ? 0.05 : 0.15, // Much lower threshold for mobile
    rootMargin = isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px' // Smaller margin for mobile
  } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Mobile-specific initialization
    const isMobileDevice = window.innerWidth < 768;

    // Add initial slide-in-up state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    element.style.willChange = 'opacity, transform';

    // Set up delay if specified
    let timeoutId: ReturnType<typeof setTimeout>;

    // Immediately reveal if already in viewport on mount (fixes blank page on load)
    // Use more generous viewport check for mobile
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const triggerPoint = isMobileDevice ? viewportHeight * 0.9 : viewportHeight;

    if (rect.top < triggerPoint && rect.bottom > 0) {
      if (delay > 0) {
        timeoutId = setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('visible');
        }, delay);
      } else {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.classList.add('visible');
      }
    }

    // Fallback timer for mobile devices to ensure content appears
    let fallbackTimer: ReturnType<typeof setTimeout>;
    if (isMobileDevice) {
      fallbackTimer = setTimeout(() => {
        if (!element.classList.contains('visible')) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('visible');
        }
      }, 2000); // Show content after 2 seconds if intersection observer hasn't triggered
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            const target = entry.target as HTMLElement;
            if (delay > 0) {
              timeoutId = setTimeout(() => {
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                target.classList.add('visible');
              }, delay);
            } else {
              target.style.opacity = '1';
              target.style.transform = 'translateY(0)';
              target.classList.add('visible');
            }
            
            // Count-up animation for elements with data-countup
            const counters = entry.target.querySelectorAll<HTMLElement>('[data-countup]');
            counters.forEach((counter) => {
              if (counter.getAttribute('data-counted') === 'true') return;
              const targetAttr = counter.getAttribute('data-target');
              if (!targetAttr) return;
              const target = Number(targetAttr);
              const suffix = counter.getAttribute('data-suffix') || '';
              if (!Number.isFinite(target)) return;
              const duration = 900;
              const start = performance.now();
              const startVal = 0;
              const step = (now: number) => {
                const t = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - t, 2); // easeOutQuad
                const value = Math.round(startVal + (target - startVal) * eased);
                counter.textContent = `${value}${suffix}`;
                if (t < 1) requestAnimationFrame(step);
                else counter.setAttribute('data-counted', 'true');
              };
              requestAnimationFrame(step);
            });
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
      }
    };
  }, [delay, duration, threshold, rootMargin]);

  return ref;
};

export const useActiveSection = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const activeSection = useRef<string>('');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (sections.length === 0) return;

    const updateActive = () => {
      const checkpoint = window.innerHeight * 0.35;
      let currentId = '';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= checkpoint && rect.bottom >= checkpoint) {
          currentId = section.id;
          break;
        }
      }

      // Fallback: pick nearest to checkpoint if none matched
      if (!currentId && sections.length > 0) {
        let minDelta = Number.POSITIVE_INFINITY;
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          const delta = Math.abs(rect.top - checkpoint);
          if (delta < minDelta) {
            minDelta = delta;
            currentId = section.id;
          }
        }
      }

      if (currentId && activeSection.current !== currentId) {
        activeSection.current = currentId;
        const navLinks = document.querySelectorAll<HTMLButtonElement>('[data-nav-link]');
        navLinks.forEach((link) => {
          const dataHref = link.getAttribute('data-nav-link');
          if (!dataHref) return;
          if (dataHref === `#${currentId}`) {
            link.classList.add('nav-active');
          } else {
            link.classList.remove('nav-active');
          }
        });
      }
    };

    updateActive();

    // requestAnimationFrame-throttled listeners for buttery-smooth updates
    let ticking = false;
    const schedule = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
    };
  }, []);

  return { sectionsRef, activeSection: activeSection.current };
};