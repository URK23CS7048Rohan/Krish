"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const photos = [
  { id: 1, url: "/portfolio/photography/1.jpeg", title: "Luminous Trails", rotate: "-rotate-3", speed: 1.5 },
  { id: 2, url: "/portfolio/photography/2.jpeg", title: "The Art of Products", rotate: "rotate-2", speed: 0.8 },
  { id: 3, url: "/portfolio/photography/3.jpeg", title: "Monochrome Stories", rotate: "-rotate-1", speed: 1.2 },
  { id: 4, url: "/portfolio/photography/4.jpeg", title: "Soul in Focus", rotate: "rotate-3", speed: 0.9 },
  { id: 5, url: "/portfolio/photography/5.jpeg", title: "Midnight Pulse", rotate: "-rotate-2", speed: 1.4 },
  { id: 6, url: "/portfolio/photography/6.jpeg", title: "Motion Unleashed", rotate: "rotate-1", speed: 0.7 },
  { id: 7, url: "/portfolio/photography/7.jpeg", title: "Life Between Streets", rotate: "-rotate-4", speed: 1.6 },
  { id: 8, url: "/portfolio/photography/8.jpeg", title: "Silent Composition", rotate: "rotate-2", speed: 1.1 },
  { id: 9, url: "/portfolio/photography/9.jpeg", title: "Liquid Horizon", rotate: "-rotate-1", speed: 1.3 },
  { id: 10, url: "/portfolio/photography/10.jpeg", title: "Chasing Horizons", rotate: "rotate-3", speed: 0.8 },
];

export default function Photography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const stickerRotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} id="photography" className="relative py-20 md:py-32 px-6 lg:px-8 bg-paper overflow-hidden">
      
      {/* Background Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="crumpled-overlay opacity-30"></div>
        <img src="/scrapbook/botanical.png" className="absolute top-20 right-10 w-[300px] md:w-[400px] object-contain opacity-50 mix-blend-darken rotate-12" alt="" />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]), x: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          src="/scrapbook/bird.png" 
          className="absolute top-1/2 left-0 md:left-10 w-[250px] md:w-[350px] object-contain opacity-60 mix-blend-darken -rotate-12" 
          alt="" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex items-end gap-6 mb-24 md:mb-32 relative z-20">
          <motion.h2
            style={{ x: headerX }}
            className="font-bebas text-7xl md:text-[12rem] leading-[0.8] text-ink"
          >
            PHOTO<br/>GRAPHY
          </motion.h2>
          <motion.div
            style={{ rotate: stickerRotate }}
            className="sticker w-24 h-24 md:w-32 md:h-32 text-xl md:text-3xl flex-shrink-0 mb-8 md:mb-12 shadow-2xl"
          >
            {photos.length}<br/>SHOTS
          </motion.div>
        </div>

        {/* Scattered polaroid grid with heavy scroll parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 pb-32 mt-10 items-start">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Bottom doodle accent */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="mt-20 flex items-center gap-4 relative z-20"
        >
          <div className="h-[4px] flex-grow bg-ink" />
          <span className="font-caveat text-4xl md:text-5xl text-hot-pink rotate-3 inline-block drop-shadow-md">and many more... ✨</span>
        </motion.div>

      </div>
    </section>
  );
}

function PhotoCard({ photo, index, scrollYProgress }: { photo: any, index: number, scrollYProgress: any }) {
  // Each card moves at a different speed based on its 'speed' property
  const yOffset = useTransform(scrollYProgress, [0, 1], [100 * photo.speed, -100 * photo.speed]);
  // Subtle rotation based on scroll
  const dynamicRotate = useTransform(scrollYProgress, [0, 1], [-5 * photo.speed, 5 * photo.speed]);

  // Create a staggered top margin to break horizontal rows
  const staggerClass = index % 2 === 0 ? "mt-0" : "mt-16 lg:mt-32";

  return (
    <motion.div
      style={{ y: yOffset, rotate: dynamicRotate }}
      whileHover={{ scale: 1.05, zIndex: 50, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`polaroid soft-shadow cursor-pointer ${photo.rotate} transition-all duration-300 relative z-10 bg-white ${staggerClass}`}
    >
      <img src="/scrapbook/masking_tape.png" className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 object-contain rotate-2 z-20 opacity-90 mix-blend-darken" alt="" />
      <div className="w-full aspect-[3/4] overflow-hidden rounded-sm relative z-10">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-500"
        />
      </div>
      <p className="font-caveat text-2xl text-center mt-4 text-ink">{photo.title}</p>
    </motion.div>
  );
}
