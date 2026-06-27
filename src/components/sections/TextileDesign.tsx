"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textiles = [
  { id: 1, title: "Woven Currents", material: "Silk", url: "/portfolio/textile-design/1.jpeg" },
  { id: 2, title: "Abyssal Thread", material: "Merino Wool", url: "/portfolio/textile-design/2.jpeg" },
  { id: 3, title: "Coral Reef Jacquard", material: "Organic Cotton", url: "/portfolio/textile-design/3.jpeg" },
  { id: 4, title: "Deep Sea Weave", material: "Linen", url: "/portfolio/textile-design/4.jpeg" },
];

export default function TextileDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const textX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} id="textile-design" className="relative py-20 md:py-32 bg-deep-green overflow-hidden">
      {/* Background Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="crumpled-overlay opacity-40"></div>
        <img src="/scrapbook/stamp.png" className="absolute top-32 right-32 w-32 object-contain opacity-50 invert mix-blend-lighten rotate-12" alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24 relative z-10">
          <motion.h2
            style={{ y: headerY }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-paper relative"
          >
            TEXTILE<br/>
            <motion.span 
              style={{ display: "inline-block", x: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
              className="text-mustard drop-shadow-lg"
            >
              DESIGN
            </motion.span>
          </motion.h2>
          <motion.p
            style={{ x: textX, rotate: -2 }}
            className="font-caveat text-3xl md:text-5xl text-paper/90 mt-4 inline-block bg-ink/20 px-4 py-2 rounded border border-black/20"
          >
            Exploring tactile experiences through innovative materials ✦
          </motion.p>
        </div>

        {/* Horizontal scrolling strip on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 relative z-20">
          {textiles.map((item, i) => (
            <TextileCard key={item.id} item={item} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Bottom accent text */}
        <motion.div
          style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]) }}
          className="mt-20 text-center relative z-10"
        >
          <span className="font-caveat text-4xl text-paper/60 rotate-2 inline-block">
            hand-crafted with passion 🧵
          </span>
        </motion.div>

      </div>
    </section>
  );
}

function TextileCard({ item, index, scrollYProgress }: { item: any, index: number, scrollYProgress: any }) {
  // Odd/Even items scroll slightly differently
  const yOffset = useTransform(scrollYProgress, [0, 1], [
    index % 2 === 0 ? 50 : -50, 
    index % 2 === 0 ? -50 : 50
  ]);

  return (
    <motion.div
      className="group relative overflow-hidden aspect-square border-2 border-paper cursor-pointer bg-deep-green"
    >
      {/* Image */}
      <motion.img
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]), y: yOffset }}
        src={item.url}
        alt={item.title}
        className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover group-hover:scale-[1.3] transition-transform duration-1000 ease-out"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/80 transition-colors duration-500 flex flex-col items-start justify-end p-6 md:p-10 backdrop-blur-0 group-hover:backdrop-blur-sm">
        <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
          <span className="font-caveat text-2xl text-mustard block mb-2">{item.material}</span>
          <h3 className="font-bebas text-4xl md:text-6xl text-paper leading-none tracking-wide">{item.title}</h3>
          <div className="mt-6 h-[4px] w-0 group-hover:w-24 bg-mustard transition-all duration-700 delay-200" />
        </div>
      </div>

      {/* Index number */}
      <div className="absolute top-6 right-6 font-bebas text-7xl text-paper/40 mix-blend-overlay group-hover:text-mustard transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}
