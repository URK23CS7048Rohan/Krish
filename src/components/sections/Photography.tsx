"use client";

import { motion } from "framer-motion";

const photos = [
  { id: 1, url: "/portfolio/photography/1.jpeg", title: "Untitled I", rotate: "-rotate-3", offset: "md:mt-0" },
  { id: 2, url: "/portfolio/photography/2.jpeg", title: "Untitled II", rotate: "rotate-2", offset: "md:mt-20" },
  { id: 3, url: "/portfolio/photography/3.jpeg", title: "Untitled III", rotate: "-rotate-1", offset: "md:mt-8" },
  { id: 4, url: "/portfolio/photography/4.jpeg", title: "Untitled IV", rotate: "rotate-3", offset: "md:mt-32" },
  { id: 5, url: "/portfolio/photography/5.jpeg", title: "Untitled V", rotate: "-rotate-2", offset: "md:mt-4" },
  { id: 6, url: "/portfolio/photography/6.jpeg", title: "Untitled VI", rotate: "rotate-1", offset: "md:mt-16" },
  { id: 7, url: "/portfolio/photography/7.jpeg", title: "Untitled VII", rotate: "-rotate-4", offset: "md:mt-10" },
  { id: 8, url: "/portfolio/photography/8.jpeg", title: "Untitled VIII", rotate: "rotate-2", offset: "md:mt-24" },
  { id: 9, url: "/portfolio/photography/9.jpeg", title: "Untitled IX", rotate: "-rotate-1", offset: "md:mt-6" },
  { id: 10, url: "/portfolio/photography/10.jpeg", title: "Untitled X", rotate: "rotate-3", offset: "md:mt-14" },
];

export default function Photography() {
  return (
    <section id="photography" className="relative py-20 md:py-32 px-6 lg:px-8 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-end gap-6 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-ink"
          >
            PHOTO<br/>GRAPHY
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticker w-20 h-20 md:w-28 md:h-28 text-lg md:text-2xl flex-shrink-0 mb-4"
          >
            {photos.length}<br/>SHOTS
          </motion.div>
        </div>

        {/* Scattered polaroid grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
              className={`polaroid brutalist-shadow break-inside-avoid cursor-pointer ${photo.rotate} hover:rotate-0 transition-all duration-300`}
              style={{ "--rand": (i * 0.17 + 0.1) % 1 } as React.CSSProperties}
            >
              <div className="w-full aspect-[3/4] overflow-hidden brutalist-border">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-caveat text-xl text-center mt-3 text-ink">{photo.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom doodle accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="h-[3px] flex-grow bg-ink" />
          <span className="font-caveat text-3xl text-hot-pink rotate-3 inline-block">and many more... ✨</span>
        </motion.div>

      </div>
    </section>
  );
}
