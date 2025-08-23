/**
 * Mobile debugging utilities for testing section visibility
 */

export const mobileDebugUtils = {
  /**
   * Check if sections are visible in the viewport
   */
  checkSectionVisibility: () => {
    const sections = ['certifications', 'skills', 'projects', 'experience'];
    const results: Record<string, any> = {};
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const opacity = window.getComputedStyle(element).opacity;
        const transform = window.getComputedStyle(element).transform;
        
        results[sectionId] = {
          exists: true,
          isInViewport: isVisible,
          opacity: opacity,
          transform: transform,
          rect: {
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          }
        };
      } else {
        results[sectionId] = { exists: false };
      }
    });
    
    return results;
  },

  /**
   * Force show all sections (for debugging)
   */
  forceShowSections: () => {
    const sections = ['certifications', 'skills', 'projects', 'experience'];
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.visibility = 'visible';
        
        // Also force show cards within sections
        const cards = element.querySelectorAll('.cert-card, .skill-card, .project-card');
        cards.forEach(card => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'translateY(0)';
        });
      }
    });
    
    console.log('All sections forced to be visible');
  },

  /**
   * Log mobile viewport information
   */
  logViewportInfo: () => {
    const info = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isMobile: window.innerWidth < 768,
      devicePixelRatio: window.devicePixelRatio,
      userAgent: navigator.userAgent,
      touchSupport: 'ontouchstart' in window
    };
    
    console.log('Mobile Viewport Info:', info);
    return info;
  },

  /**
   * Test intersection observers
   */
  testIntersectionObservers: () => {
    const sections = ['certifications', 'skills', 'projects', 'experience'];
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            console.log(`Section ${sectionId}:`, {
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio,
              boundingClientRect: entry.boundingClientRect
            });
          });
        }, {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          rootMargin: '0px'
        });
        
        observer.observe(element);
        
        // Disconnect after 10 seconds
        setTimeout(() => observer.disconnect(), 10000);
      }
    });
  }
};

// Make available globally for console debugging
if (typeof window !== 'undefined') {
  (window as any).mobileDebug = mobileDebugUtils;
}
