"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brandImages = [
  { id: 1, url: "/portfolio/brand-design/1.jpeg", title: "Identity I" },
  { id: 2, url: "/portfolio/brand-design/2.jpeg", title: "Identity II" },
  { id: 3, url: "/portfolio/brand-design/3.jpeg", title: "Identity III" },
  { id: 4, url: "/portfolio/brand-design/4.jpeg", title: "Identity IV" },
  { id: 5, url: "/portfolio/brand-design/5.jpeg", title: "Identity V" },
];

export default function BrandDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different rows
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section ref={containerRef} id="brand-design" className="relative py-20 md:py-32 bg-paper overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="crumpled-overlay opacity-25"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.h2
            style={{ scale: scaleTitle }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-ink origin-left"
          >
            BRAND<br/>
            <span className="text-stroke text-hot-pink inline-block hover:rotate-3 hover:scale-110 transition-transform duration-300">DESIGN</span>
          </motion.h2>

          <motion.div
            style={{ y: yReverse }}
            className="max-w-xs relative"
          >
            <img src="/scrapbook/stamp.png" className="absolute -top-12 -right-8 w-24 h-24 object-contain rotate-12 mix-blend-multiply opacity-80 z-10" alt="" />
            <div className="bg-ink text-paper p-4 md:p-6 font-space text-sm leading-relaxed rounded-md shadow-lg rotate-1 hover:-rotate-2 transition-transform duration-300 relative z-0">
              <span className="font-bebas text-2xl text-hot-pink block mb-2">Forging identities</span>
              Visual identities that tell compelling stories and create lasting impressions.
            </div>
          </motion.div>
        </div>

        {/* Asymmetric image layout with deep Parallax */}
        <div className="grid grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {/* Large feature card */}
          <motion.div
            style={{ y: ySlow }}
            className="col-span-6 md:col-span-4 row-span-2 relative group rounded-xl shadow-xl overflow-hidden bg-white"
          >
            <img src="/scrapbook/masking_tape.png" className="absolute -top-2 -left-4 w-20 h-8 object-contain -rotate-45 z-20 opacity-90 mix-blend-multiply" alt="" />
            <img src="/scrapbook/masking_tape.png" className="absolute -bottom-2 -right-4 w-20 h-8 object-contain -rotate-45 z-20 opacity-90 mix-blend-multiply" alt="" />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={brandImages[0].url} alt={brandImages[0].title} className="w-full h-full object-cover relative z-10" 
            />
            <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30" />
          </motion.div>

          {/* Small side cards */}
          {brandImages.slice(1, 3).map((item, i) => (
            <motion.div
              key={item.id}
              style={{ y: i === 0 ? yFast : ySlow }}
              className={`col-span-3 md:col-span-2 relative group rounded-lg shadow-md overflow-hidden ${i === 0 ? "-rotate-1" : "rotate-1"} hover:rotate-0 hover:z-10 hover:shadow-xl transition-all duration-300`}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={item.url} alt={item.title} className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}

          {/* Bottom row */}
          {brandImages.slice(3, 5).map((item, i) => (
            <motion.div
              key={item.id}
              style={{ y: i === 0 ? yReverse : yFast }}
              className={`col-span-3 relative group rounded-lg shadow-md overflow-hidden ${i === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 hover:shadow-xl transition-all duration-300`}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={item.url} alt={item.title} className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
