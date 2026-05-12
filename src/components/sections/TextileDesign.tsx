"use client";

import { motion } from "framer-motion";

const textiles = [
  { id: 1, title: "Woven Currents", material: "Silk", url: "/portfolio/textile-design/1.jpeg" },
  { id: 2, title: "Abyssal Thread", material: "Merino Wool", url: "/portfolio/textile-design/2.jpeg" },
  { id: 3, title: "Coral Reef Jacquard", material: "Organic Cotton", url: "/portfolio/textile-design/3.jpeg" },
  { id: 4, title: "Deep Sea Weave", material: "Linen", url: "/portfolio/textile-design/4.jpeg" },
];

export default function TextileDesign() {
  return (
    <section id="textile-design" className="relative py-20 md:py-32 bg-deep-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-7xl md:text-[10rem] leading-none text-paper"
          >
            TEXTILE<br/><span className="text-mustard">DESIGN</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-caveat text-2xl text-paper/70 mt-2 -rotate-1 inline-block"
          >
            Exploring tactile experiences through innovative materials ✦
          </motion.p>
        </div>

        {/* Horizontal scrolling strip on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 brutalist-border border-paper">
          {textiles.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-square border-2 border-paper cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/70 transition-colors duration-500 flex flex-col items-start justify-end p-6 md:p-8">
                <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="font-caveat text-xl text-mustard block mb-1">{item.material}</span>
                  <h3 className="font-bebas text-3xl md:text-5xl text-paper leading-none">{item.title}</h3>
                  <div className="mt-4 h-[3px] w-0 group-hover:w-16 bg-mustard transition-all duration-500 delay-100" />
                </div>
              </div>

              {/* Index number */}
              <div className="absolute top-4 right-4 font-bebas text-6xl text-paper/20 group-hover:text-paper/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <span className="font-caveat text-3xl text-paper/50 rotate-2 inline-block">
            hand-crafted with passion 🧵
          </span>
        </motion.div>

      </div>
    </section>
  );
}
