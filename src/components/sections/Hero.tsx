"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden py-16 md:py-0 bg-paper">
      
      {/* Background doodles/texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl font-caveat -rotate-12">Art.</div>
        <div className="absolute bottom-20 right-20 text-9xl font-caveat rotate-6">Design.</div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left relative z-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center sticker px-6 py-2 text-xl shadow-lg -rotate-3"
          >
            Visual Arts Student
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-8xl md:text-[10rem] font-bebas text-ink leading-[0.8] mb-8"
          >
            CREATIVE <br/>
            <span className="text-stroke text-deep-green">VISIONARY</span>
          </motion.h1>

          <div className="flex flex-col gap-8 max-w-xl bg-white p-6 md:p-8 brutalist-border brutalist-shadow relative">
            {/* Tape effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-100/80 rotate-2 backdrop-blur-sm" />
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h3 className="font-bebas text-3xl mb-2 text-ink">About Me</h3>
              <p className="font-space text-sm md:text-base text-ink leading-relaxed font-bold">
                I am a Visual Arts student and multidisciplinary creator focused on the balance between tradition and modern design. I combine graphic design, photography, illustration, and textile design to build cohesive visual stories. My work is driven by a clean aesthetic and a passion for heritage-inspired innovation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <h3 className="font-bebas text-3xl mb-2 text-ink">My Approach</h3>
              <p className="font-space text-sm md:text-base text-ink leading-relaxed">
                I don’t believe in creative limits. My approach is rooted in a proactive will to master whatever medium a project demands to ensure a professional, polished result.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-ink text-white font-bebas text-3xl tracking-widest hover:bg-hot-pink hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all brutalist-border">
              EXPLORE WORK
            </button>
            <span className="font-caveat text-4xl text-hot-pink -rotate-6">Let's talk! &rarr;</span>
          </motion.div>
        </div>

        {/* Right Column: Video Scrapbook */}
        <div className="lg:w-1/2 relative w-full aspect-square lg:aspect-[4/5] flex items-center justify-center">
          
          {/* Background polaroid 1 */}
          <motion.div 
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -10, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-10 bg-deep-green brutalist-border brutalist-shadow"
          />
          
          {/* Background polaroid 2 */}
          <motion.div 
            initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 5, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute inset-14 bg-lavender brutalist-border brutalist-shadow"
          />

          {/* Video Container (Polaroid) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative w-[80%] aspect-[3/4] polaroid brutalist-shadow group z-10 bg-white"
            style={{ "--rand": "0.8" } as React.CSSProperties}
          >
            <div className="absolute -top-3 left-10 w-20 h-8 bg-amber-100/80 -rotate-3 z-20" />
            
            <div className="w-full h-full brutalist-border overflow-hidden relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              >
                <source src="/krish_video.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="mt-4 font-caveat text-3xl text-center text-ink">
              Me in action! 🎬
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
