"use client";

import { motion } from "framer-motion";

const brandImages = [
  { id: 1, url: "/portfolio/brand-design/1.jpeg", title: "Identity I" },
  { id: 2, url: "/portfolio/brand-design/2.jpeg", title: "Identity II" },
  { id: 3, url: "/portfolio/brand-design/3.jpeg", title: "Identity III" },
  { id: 4, url: "/portfolio/brand-design/4.jpeg", title: "Identity IV" },
  { id: 5, url: "/portfolio/brand-design/5.jpeg", title: "Identity V" },
];

export default function BrandDesign() {
  return (
    <section id="brand-design" className="relative py-20 md:py-32 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-ink"
          >
            BRAND<br/><span className="text-stroke text-hot-pink">DESIGN</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs"
          >
            <div className="bg-ink text-paper p-4 md:p-6 font-space text-sm leading-relaxed brutalist-border rotate-1">
              <span className="font-bebas text-2xl text-hot-pink block mb-2">Forging identities</span>
              Visual identities that tell compelling stories and create lasting impressions.
            </div>
          </motion.div>
        </div>

        {/* Asymmetric image layout */}
        <div className="grid grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {/* Large feature card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-4 row-span-2 relative group brutalist-border brutalist-shadow overflow-hidden"
          >
            <img src={brandImages[0].url} alt={brandImages[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </motion.div>

          {/* Small side cards */}
          {brandImages.slice(1, 3).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className={`col-span-3 md:col-span-2 relative group brutalist-border brutalist-shadow overflow-hidden ${i === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}

          {/* Bottom row */}
          {brandImages.slice(3, 5).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + 0.15 * i }}
              className={`col-span-3 relative group brutalist-border brutalist-shadow overflow-hidden ${i === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
