"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Poster Design", category: "Poster", year: "2024", image: "/portfolio/graphic-design/1.jpeg", bg: "bg-hot-pink", rotate: "-rotate-2", accent: "text-mustard" },
  { id: 2, title: "Layout Work", category: "Editorial", year: "2023", image: "/portfolio/graphic-design/2.jpeg", bg: "bg-deep-green", rotate: "rotate-1", accent: "text-paper" },
  { id: 3, title: "Typography", category: "Type", year: "2023", image: "/portfolio/graphic-design/3.jpeg", bg: "bg-mustard", rotate: "-rotate-1", accent: "text-ink" },
  { id: 4, title: "Print Design", category: "Print", year: "2024", image: "/portfolio/graphic-design/4.jpeg", bg: "bg-lavender", rotate: "rotate-2", accent: "text-ink" },
];

export default function GraphicDesign() {
  return (
    <section id="graphic-design" className="relative py-20 md:py-32 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header - inverted on dark bg */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-paper"
          >
            GRAPHIC<br/>DESIGN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-caveat text-2xl text-hot-pink max-w-xs -rotate-3"
          >
            structuring info into beautiful visual narratives ✦
          </motion.p>
        </div>

        {/* Brutalist card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative ${project.rotate} hover:rotate-0 transition-all duration-300 cursor-pointer`}
            >
              {/* Solid shadow block */}
              <div className={`absolute inset-0 ${project.bg} translate-x-3 translate-y-3 border-3 border-paper`} />
              
              <div className="relative border-3 border-paper overflow-hidden bg-ink">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Card footer */}
                <div className={`p-4 md:p-6 ${project.bg} flex items-center justify-between gap-4`}>
                  <div>
                    <h3 className={`font-bebas text-3xl md:text-4xl ${project.accent}`}>{project.title}</h3>
                    <span className={`font-space text-xs tracking-widest uppercase ${project.accent} opacity-70`}>{project.category} — {project.year}</span>
                  </div>
                  <span className={`font-bebas text-4xl ${project.accent} group-hover:translate-x-2 transition-transform duration-300`}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
