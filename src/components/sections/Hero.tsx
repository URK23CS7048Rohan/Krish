"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const videoY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const bg1Rotate = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  // Staggered letters for CREATIVE
  const word1 = "CREATIVE".split("");
  
  return (
    <section ref={containerRef} id="about" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 md:py-32 bg-paper">
      
      {/* Background doodles/texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="crumpled-overlay opacity-20"></div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="absolute top-10 left-10 text-9xl font-caveat opacity-10 -rotate-12">Art.</motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }} className="absolute bottom-20 right-20 text-9xl font-caveat opacity-10 rotate-6">Design.</motion.div>
        
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
          src="/scrapbook/botanical.png" 
          className="absolute -left-20 md:-left-10 top-20 w-[300px] md:w-[500px] object-contain opacity-70 mix-blend-darken -rotate-12" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          src="/scrapbook/torn_paper.png" 
          className="absolute -right-20 md:right-10 top-40 w-[250px] md:w-[400px] object-contain opacity-60 mix-blend-darken rotate-6" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
          src="/scrapbook/clouds.png" 
          className="absolute -right-20 top-0 w-[400px] md:w-[600px] object-contain opacity-50 mix-blend-darken -rotate-6" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
          src="/scrapbook/splatter.png" 
          className="absolute left-1/4 md:left-1/3 top-20 w-[400px] object-contain opacity-30 mix-blend-darken -rotate-12" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), x: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
          src="/scrapbook/palette.png" 
          className="absolute left-1/4 md:left-1/3 top-10 w-[250px] md:w-[350px] object-contain opacity-80 mix-blend-darken rotate-12" 
          alt="" 
        />
        <motion.img 
          style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]), x: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
          src="/scrapbook/bird.png" 
          className="absolute left-10 md:left-1/4 top-1/4 w-[200px] md:w-[300px] object-contain opacity-70 mix-blend-multiply rotate-12" 
          alt="" 
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Text Content */}
        <motion.div style={{ y: textY }} className="lg:w-1/2 flex flex-col items-start text-left relative z-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center sticker px-6 py-2 text-xl shadow-lg -rotate-3"
          >
            Visual Arts Student
          </motion.div>

          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-bebas text-ink leading-[0.8] mb-8 flex flex-col">
            <span className="flex overflow-hidden">
              {word1.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-stroke text-deep-green"
            >
              VISIONARY
            </motion.span>
          </h1>

          <div className="flex flex-col gap-8 max-w-xl bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl relative">
            {/* Tape effect */}
            <img src="/scrapbook/masking_tape.png" className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-10 object-contain rotate-2 opacity-90 mix-blend-multiply" alt="" />
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="font-bebas text-3xl mb-2 text-ink">About Me</h3>
              <p className="font-space text-sm md:text-base text-ink leading-relaxed font-bold">
                I am a Visual Arts student and multidisciplinary creator focused on the balance between tradition and modern design. I combine graphic design, photography, illustration, and textile design to build cohesive visual stories. My work is driven by a clean aesthetic and a passion for heritage-inspired innovation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <h3 className="font-bebas text-3xl mb-2 text-ink">My Approach</h3>
              <p className="font-space text-sm md:text-base text-ink leading-relaxed">
                I don’t believe in creative limits. My approach is rooted in a proactive will to master whatever medium a project demands to ensure a professional, polished result.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-ink text-white font-bebas text-3xl tracking-widest hover:bg-hot-pink hover:-translate-y-1 hover:shadow-xl rounded-full transition-all group relative overflow-hidden">
              <span className="relative z-10">EXPLORE WORK</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
            </button>
            <span className="font-caveat text-4xl text-hot-pink -rotate-6">Let's talk! &rarr;</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Video Scrapbook */}
        <motion.div style={{ y: videoY }} className="lg:w-1/2 relative w-full aspect-square lg:aspect-[4/5] flex items-center justify-center">
          
          {/* Background polaroid 1 */}
          <motion.div 
            style={{ rotate: bg1Rotate }}
            className="absolute inset-10 bg-deep-green rounded-3xl shadow-2xl"
          />
          
          {/* Background polaroid 2 */}
          <motion.div 
            style={{ rotate: bg2Rotate }}
            className="absolute inset-14 bg-lavender rounded-3xl shadow-xl"
          />

          {/* Video Container (Polaroid) */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full md:w-[80%] aspect-square md:aspect-[3/4] polaroid soft-shadow group z-10 bg-white"
            style={{ "--rand": "0.8" } as React.CSSProperties}
          >
            <img src="/scrapbook/masking_tape.png" className="absolute -top-5 left-8 w-24 h-10 object-contain -rotate-3 z-20 opacity-90 mix-blend-multiply" alt="" />
            
            <div className="w-full h-full rounded-sm overflow-hidden relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              >
                <source src="/krish_video.mp4" type="video/mp4" />
              </video>

              {/* Cover the video watermark */}
              <div className="absolute bottom-2 right-2 z-30 flex items-center justify-center -rotate-6 px-4 py-2 bg-hot-pink text-white font-caveat text-2xl shadow-xl rounded-sm">
                <span>100% authentic ✦</span>
              </div>
            </div>
            
            <div className="mt-4 font-caveat text-3xl text-center text-ink">
              Me in action! 🎬
            </div>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
}
