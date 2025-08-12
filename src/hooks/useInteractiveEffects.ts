import { useEffect } from "react";

/**
 * Adds a subtle magnetic hover effect to elements matching the selector.
 * Elements translate a few pixels towards the cursor and ease back on leave.
 * Respects prefers-reduced-motion.
 */
export function useMagneticHover(selector: string, options?: { maxTranslatePx?: number }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const max = options?.maxTranslatePx ?? 6;

    const onMove = (el: HTMLElement, ev: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const dx = (x / rect.width - 0.5) * 2; // -1..1
      const dy = (y / rect.height - 0.5) * 2; // -1..1
      el.style.transform = `translate(${(dx * max).toFixed(2)}px, ${(dy * max).toFixed(2)}px)`;
      // Update mouse position CSS variables for optional highlights
      el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    };

    const onLeave = (el: HTMLElement) => {
      el.style.transition = "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "translate(0, 0)";
      const done = () => {
        el.style.transition = "";
        el.removeEventListener("transitionend", done);
      };
      el.addEventListener("transitionend", done);
    };

    const listeners: Array<() => void> = [];

    elements.forEach((el) => {
      const move = (ev: MouseEvent) => onMove(el, ev);
      const leave = () => onLeave(el);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      listeners.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = "";
        el.style.transition = "";
      });
    });

    return () => listeners.forEach((fn) => fn());
  }, [selector, options?.maxTranslatePx]);
}

/**
 * Adds a lightweight tilt effect on hover to elements.
 * Uses perspective and rotateX/Y based on cursor position within element.
 * Respects prefers-reduced-motion.
 */
export function useTiltCards(selector: string, options?: { maxTiltDeg?: number; perspectivePx?: number }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const maxTilt = options?.maxTiltDeg ?? 6;
    const perspective = options?.perspectivePx ?? 800;

    const onMove = (el: HTMLElement, ev: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const rx = ((y / rect.height - 0.5) * 2) * -maxTilt; // invert for natural feel
      const ry = ((x / rect.width - 0.5) * 2) * maxTilt;
      el.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    };

    const onLeave = (el: HTMLElement) => {
      el.style.transition = "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "perspective(" + perspective + "px) rotateX(0deg) rotateY(0deg)";
      const done = () => {
        el.style.transition = "";
        el.removeEventListener("transitionend", done);
      };
      el.addEventListener("transitionend", done);
    };

    const onEnter = (el: HTMLElement) => {
      el.style.willChange = "transform";
      el.style.transformStyle = "preserve-3d";
    };

    const listeners: Array<() => void> = [];

    elements.forEach((el) => {
      const move = (ev: MouseEvent) => onMove(el, ev);
      const leave = () => onLeave(el);
      const enter = () => onEnter(el);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      listeners.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = "";
        el.style.transition = "";
        el.style.willChange = "";
        el.style.transformStyle = "";
      });
    });

    return () => listeners.forEach((fn) => fn());
  }, [selector, options?.maxTiltDeg, options?.perspectivePx]);
}
