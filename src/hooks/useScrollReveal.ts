import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            activeSection.current = sectionId;
            
            // Update navigation highlighting
            const navLinks = document.querySelectorAll('[data-nav-link]');
            navLinks.forEach((link) => {
              const dataHref = link.getAttribute('data-nav-link');
              if (dataHref === `#${sectionId}`) {
                link.classList.add('nav-active');
              } else {
                link.classList.remove('nav-active');
              }
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return { sectionsRef, activeSection: activeSection.current };
};