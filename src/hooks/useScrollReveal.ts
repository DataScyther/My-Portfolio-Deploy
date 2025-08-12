import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Immediately reveal if already in viewport on mount (fixes blank page on load)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('visible');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

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