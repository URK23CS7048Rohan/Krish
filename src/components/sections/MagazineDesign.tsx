"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const magazineImages = [
  { id: 1, title: "Editorial Spread", url: "/portfolio/magazine-design/1.jpeg" },
  { id: 2, title: "Cover Concept", url: "/portfolio/magazine-design/2.jpeg" },
  { id: 3, title: "Typography Layout", url: "/portfolio/magazine-design/3.jpeg" },
];

export default function MagazineDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const img1Y = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const textBlockY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const filmstripScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);

  return (
    <section ref={containerRef} id="magazine-design" className="relative py-20 md:py-32 bg-lavender overflow-hidden">
      
      {/* Background Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="crumpled-overlay opacity-20"></div>
        <img src="/scrapbook/torn_paper.png" className="absolute top-40 -left-20 w-[300px] md:w-[500px] object-contain opacity-50 mix-blend-darken rotate-12" alt="" />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          src="/scrapbook/clouds.png" 
          className="absolute bottom-20 -right-20 w-[400px] md:w-[600px] object-contain opacity-40 mix-blend-darken -rotate-6" 
          alt="" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header with Parallax */}
        <motion.div style={{ y: headerY }} className="mb-16 relative z-10 pointer-events-none">
          <motion.div
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [-10, 20]) }}
            className="sticker absolute -top-6 right-4 md:right-20 w-20 h-20 md:w-24 md:h-24 text-base md:text-lg shadow-2xl"
          >
            PRINT<br/>MEDIA
          </motion.div>

          <h2 className="font-bebas text-7xl md:text-[10rem] leading-none text-ink flex flex-col">
            <span className="text-stroke text-paper">MAGAZINE</span>
            <span className="-mt-4 md:-mt-8">DESIGN</span>
          </h2>

          <p className="font-caveat text-2xl md:text-4xl text-hot-pink mt-2 rotate-1 inline-block bg-white/80 px-4 py-2 rounded-sm border border-black/10 shadow-md">
            editorial content with rhythm + visual hierarchy ✦
          </p>
        </motion.div>

        {/* Magazine-style layout */}
        <div className="flex flex-col gap-8 md:gap-16 relative z-20">
          
          {/* Feature spread with overlapping scroll speeds */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
            
            {/* Big feature image */}
            <motion.div 
              style={{ y: img1Y }}
              className="md:col-span-8 group relative soft-shadow rounded-sm overflow-hidden aspect-[16/9] md:aspect-[4/3] origin-bottom hover:scale-[1.02] transition-transform duration-500 cursor-pointer bg-white"
            >
              <img src="/scrapbook/masking_tape.png" className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-12 object-contain rotate-2 z-30 opacity-90 mix-blend-darken" alt="" />
              <img src={magazineImages[0].url} alt={magazineImages[0].title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-20" />
              <div className="absolute bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-bebas text-5xl md:text-7xl text-paper tracking-wide">{magazineImages[0].title}</span>
              </div>
            </motion.div>

            {/* Side column with text */}
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-12 justify-between">
              
              <motion.div style={{ y: textBlockY }} className="bg-ink text-paper p-6 md:p-10 rounded-lg shadow-xl flex-1 flex flex-col justify-between hover:-rotate-1 hover:scale-105 transition-all duration-300">
                <div>
                  <span className="font-bebas text-2xl text-hot-pink block mb-4 tracking-widest border-b-2 border-hot-pink pb-2 inline-block">EDITORIAL</span>
                  <p className="font-space text-base md:text-lg leading-relaxed opacity-90 mt-4">
                    Structuring editorial content with rhythm and visual hierarchy. Each spread tells a story through a deliberate tension between whitespace and heavy typography.
                  </p>
                </div>
              </motion.div>

              <motion.div style={{ y: img2Y }} className="group relative soft-shadow rounded-2xl overflow-hidden aspect-video md:aspect-[3/4] cursor-pointer bg-white">
                <img src="/scrapbook/masking_tape.png" className="absolute -top-4 -right-4 w-24 h-10 object-contain rotate-45 z-30 opacity-90 mix-blend-multiply" alt="" />
                <img src={magazineImages[1].url} alt={magazineImages[1].title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 filter saturate-50 group-hover:saturate-100 relative z-10" />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-ink/90 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20">
                  <span className="font-bebas text-4xl text-paper">{magazineImages[1].title}</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Third image — full-width filmstrip */}
          <motion.div
            style={{ scale: filmstripScale }}
            className="group relative rounded-xl shadow-2xl overflow-hidden aspect-[21/9] md:aspect-[3/1] mt-12 cursor-pointer"
          >
            <img src={magazineImages[2].url} alt={magazineImages[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-ink/60 group-hover:bg-ink/20 transition-colors duration-700 backdrop-blur-[2px] group-hover:backdrop-blur-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bebas text-6xl md:text-9xl text-paper opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 tracking-tighter">TYPOGRAPHY LAYOUT</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
