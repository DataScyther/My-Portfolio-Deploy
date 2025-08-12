"use client";
import { useEffect } from "react";

const projects = [
  { title: "E-commerce Business Sales Dashboard", tech: "Power BI, DAX, SQL" },
  { title: "College Event Feedback Analysis", tech: "Python, Seaborn, SQL" },
  { title: "Social Media Campaign Tracker", tech: "Power BI, DAX, SQL" },
  { title: "Matrix-Themed UPI Payment System", tech: "HTML, CSS, Three.js, SQL" },
  { title: "4D Musical Spheres", tech: "HTML, JS, Audio API" },
];

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 px-8 bg-background">
      <h2 className="text-center gradient-text text-4xl font-bold mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="card-glow hover-lift p-6 rounded-xl scroll-reveal">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}