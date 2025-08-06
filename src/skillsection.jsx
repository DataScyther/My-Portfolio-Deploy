"use client";
import { useEffect } from "react";

const skills = [
  { title: "Data Science & AI", desc: "Predictive Modeling, ML, DL, LLMs" },
  { title: "Generative AI & Cloud", desc: "AWS, GCP, Azure, LLM Deployments" },
  { title: "Data Visualization", desc: "Tableau, Power BI, Advanced Analytics" },
  { title: "Tech Content Creation", desc: "AI/ML Educational Media" },
];

export default function SkillsSection() {
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
    <section id="skills" className="py-20 px-8 bg-background">
      <h2 className="text-center gradient-text text-4xl font-bold mb-12">
        Skills & Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="glass-card hover-lift scroll-reveal p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            <p className="mt-2 text-muted-foreground">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}