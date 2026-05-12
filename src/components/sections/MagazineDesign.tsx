"use client";

import { motion } from "framer-motion";

const magazineImages = [
  { id: 1, title: "Editorial Spread", url: "/portfolio/magazine-design/1.jpeg" },
  { id: 2, title: "Cover Concept", url: "/portfolio/magazine-design/2.jpeg" },
  { id: 3, title: "Typography Layout", url: "/portfolio/magazine-design/3.jpeg" },
];

export default function MagazineDesign() {
  return (
    <section id="magazine-design" className="relative py-20 md:py-32 bg-lavender overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 relative">
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticker absolute -top-6 right-4 md:right-20 w-20 h-20 md:w-24 md:h-24 text-base md:text-lg z-10"
          >
            PRINT<br/>MEDIA
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-ink"
          >
            MAGAZINE<br/>DESIGN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-caveat text-2xl text-ink mt-2 rotate-1 inline-block"
          >
            editorial content with rhythm + visual hierarchy ✦
          </motion.p>
        </div>

        {/* Magazine-style layout */}
        <div className="flex flex-col gap-8">
          {/* Feature spread */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch"
          >
            {/* Big feature image */}
            <div className="md:col-span-8 group relative brutalist-border brutalist-shadow overflow-hidden aspect-[16/9] md:aspect-auto">
              <img src={magazineImages[0].url} alt={magazineImages[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="font-bebas text-4xl md:text-5xl text-paper">{magazineImages[0].title}</span>
              </div>
            </div>

            {/* Side column with text */}
            <div className="md:col-span-4 flex flex-col gap-6 justify-between">
              <div className="bg-ink text-paper p-6 md:p-8 brutalist-border flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-bebas text-xl text-hot-pink block mb-4 tracking-widest">EDITORIAL</span>
                  <p className="font-space text-sm leading-relaxed opacity-80">
                    Structuring editorial content with rhythm and visual hierarchy. Each spread tells a story.
                  </p>
                </div>
                <div className="mt-6 h-[3px] w-full bg-hot-pink" />
              </div>

              <div className="group relative brutalist-border brutalist-shadow overflow-hidden aspect-video">
                <img src={magazineImages[1].url} alt={magazineImages[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 p-4 bg-ink/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-bebas text-2xl text-paper">{magazineImages[1].title}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third image — full-width filmstrip */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative brutalist-border brutalist-shadow overflow-hidden aspect-[21/9]"
          >
            <img src={magazineImages[2].url} alt={magazineImages[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bebas text-5xl md:text-8xl text-paper opacity-30 group-hover:opacity-80 transition-opacity duration-500">TYPOGRAPHY LAYOUT</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
