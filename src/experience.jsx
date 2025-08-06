"use client";
import { useEffect } from "react";

const experiences = [
  { role: "YouTube Creator", date: "Sep 2022 – Present" },
  { role: "Future Interns – Data Science Intern", date: "Jun – Jul 2025" },
  { role: "Boston Consulting Group – Data Science Intern", date: "Mar – Apr 2025" },
  { role: "Accenture – Data Analytics & Visualization", date: "Feb – Mar 2025" },
  { role: "Deloitte – Data Analyst Simulation", date: "Feb – Mar 2025" },
];

export default function ExperienceSection() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="experience" className="py-20 px-8 bg-background">
      <h2 className="text-center gradient-text text-4xl font-bold mb-12">
        Experience
      </h2>
      <div className="relative max-w-2xl mx-auto border-l border-accent/40 pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 scroll-reveal">
            <div className="absolute -left-[10px] w-4 h-4 bg-primary rounded-full pulse-glow" />
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-muted-foreground">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}