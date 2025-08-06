"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { opacity: 0, y: 50, duration: 1, ease: "power4.out" });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 bg-background">
      <div ref={textRef} className="max-w-lg">
        <h1 className="gradient-text text-5xl font-bold mb-4">
          Hello! I’m Nishant
        </h1>
        <p className="text-muted-foreground mb-6">
          I specialize in transforming complex datasets into actionable insights and building AI-driven solutions. Skilled in Python, SQL, Tableau, Power BI, AWS, and GCP, I focus on Generative AI, LLMs, and MLOps — turning data into superpowers.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="gradient-button px-6 py-3 rounded-lg text-white font-semibold hover-lift">
            Let’s Talk
          </a>
          <a href="#projects" className="gradient-button px-6 py-3 rounded-lg text-white font-semibold hover-lift">
            View Portfolio
          </a>
        </div>
      </div>

      <div className="w-80 h-80 floating pulse-glow rounded-full overflow-hidden">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <OrbitControls enableZoom={false} autoRotate />
          <Sphere visible args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#a855f7"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Canvas>
      </div>
    </section>
  );
}