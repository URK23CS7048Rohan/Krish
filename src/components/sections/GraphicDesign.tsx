"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { id: 1, title: "Poster Design", category: "Poster", year: "2024", image: "/portfolio/graphic-design/1.jpeg", bg: "bg-hot-pink", rotate: "-rotate-2", accent: "text-mustard" },
  { id: 2, title: "Layout Work", category: "Editorial", year: "2023", image: "/portfolio/graphic-design/2.jpeg", bg: "bg-deep-green", rotate: "rotate-1", accent: "text-paper" },
  { id: 3, title: "Typography", category: "Type", year: "2023", image: "/portfolio/graphic-design/3.jpeg", bg: "bg-mustard", rotate: "-rotate-1", accent: "text-ink" },
  { id: 4, title: "Print Design", category: "Print", year: "2024", image: "/portfolio/graphic-design/4.jpeg", bg: "bg-lavender", rotate: "rotate-2", accent: "text-ink" },
];

export default function GraphicDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split columns for parallax
  const leftColY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <section ref={containerRef} id="graphic-design" className="relative py-20 md:py-32 bg-ink overflow-hidden">
      {/* Background Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="crumpled-overlay opacity-30"></div>
        <img src="/scrapbook/stamp.png" className="absolute top-20 right-10 w-24 object-contain opacity-60 invert mix-blend-lighten rotate-12" alt="" />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          src="/scrapbook/bust.png" 
          className="absolute bottom-10 -left-10 w-[300px] md:w-[400px] object-contain opacity-40 invert mix-blend-lighten rotate-6" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          src="/scrapbook/splatter.png" 
          className="absolute top-1/2 left-1/4 w-[500px] object-contain opacity-20 invert mix-blend-lighten -rotate-12" 
          alt="" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header - inverted on dark bg */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-paper"
          >
            GRAPHIC<br/>
            <motion.span 
              style={{ display: "inline-block", x: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            >
              DESIGN
            </motion.span>
          </motion.h2>
          
          <motion.p
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [-10, 10]) }}
            className="font-caveat text-3xl md:text-5xl text-hot-pink max-w-xs"
          >
            structuring info into beautiful visual narratives ✦
          </motion.p>
        </div>

        {/* Brutalist card grid with 2-column scroll parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          
          {/* Left Column */}
          <motion.div style={{ y: leftColY }} className="flex flex-col gap-8 md:gap-16">
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div style={{ y: rightColY }} className="flex flex-col gap-8 md:gap-16 sm:mt-24">
            {projects.filter((_, i) => i % 2 !== 0).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-paper soft-shadow rounded-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        <img src="/scrapbook/masking_tape.png" className="absolute -top-3 -left-3 w-20 h-8 object-contain -rotate-45 z-30 opacity-90 mix-blend-darken" alt="" />
        <img src="/scrapbook/masking_tape.png" className="absolute -bottom-3 -right-3 w-20 h-8 object-contain -rotate-45 z-30 opacity-90 mix-blend-darken" alt="" />
        
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden relative z-10">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-500"
          />
        </div>

        {/* Card footer */}
        <div className="p-6 md:p-8 relative z-20">
          <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase ${project.bg} text-white rounded-sm`}>
            {project.category}
          </span>
          <h3 className="font-bebas text-4xl md:text-5xl text-ink mb-2">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
