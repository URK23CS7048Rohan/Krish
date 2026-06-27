"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-paper overflow-hidden">
      
      {/* Background doodles & Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="crumpled-overlay opacity-30"></div>
        <img src="/scrapbook/torn_paper.png" className="absolute top-10 right-0 md:right-20 w-[300px] md:w-[600px] object-contain opacity-40 mix-blend-multiply -rotate-6" alt="" />
        <span className="absolute -bottom-10 -left-10 font-bebas text-[15rem] md:text-[20rem] leading-none text-ink opacity-5">HI!</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-bebas text-7xl md:text-[10rem] leading-none text-ink">
            LET&apos;S<br/><span className="text-hot-pink">TALK!</span>
          </h2>
          <p className="font-caveat text-2xl text-ink/60 mt-4 rotate-1 inline-block">
            I&apos;m always down for cool projects ✉️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-ink text-paper p-8 md:p-12 rounded-2xl shadow-2xl -rotate-1">
              <p className="font-space text-sm leading-relaxed opacity-80 mb-6">
                Available for freelance opportunities and creative collaborations. Let&apos;s build something bold and unforgettable.
              </p>
              <a href="mailto:krishnaedits48@gmail.com" className="font-bebas text-3xl md:text-4xl text-hot-pink hover:text-mustard transition-colors break-all">
                krishnaedits48@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/minding.my.own.canvas' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krishnaveni-m-79b295368' },
                { label: 'Gmail', href: 'mailto:krishnaedits48@gmail.com' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  className="px-8 py-3 bg-ink text-paper font-bebas text-xl tracking-widest rounded-full shadow-lg hover:bg-hot-pink hover:-translate-y-1 transition-all duration-200"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className="flex flex-col gap-5">
              {[
                { label: "YOUR NAME", id: "name", type: "text", placeholder: "What should I call you?" },
                { label: "YOUR EMAIL", id: "email", type: "email", placeholder: "Where can I reach you?" },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="font-bebas text-xl text-ink tracking-widest">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="bg-transparent border-2 border-ink/20 rounded-md px-4 py-3 font-space text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink focus:bg-white/50 transition-colors duration-200"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bebas text-xl text-ink tracking-widest">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-2 border-ink/20 rounded-md px-4 py-3 font-space text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink focus:bg-white/50 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ x: 4, y: 4, boxShadow: "2px 2px 0px 0px #111111" }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 px-12 py-5 bg-hot-pink text-white font-bebas text-3xl tracking-widest rounded-full shadow-xl hover:bg-ink hover:-translate-y-1 transition-all duration-200 self-start"
              >
                SEND IT! →
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t-3 border-ink flex flex-col md:flex-row justify-between items-center gap-4 text-ink/40 text-sm font-space">
          <p>© {new Date().getFullYear()} Krishnaveni. All rights reserved.</p>
          <p className="font-caveat text-xl text-ink/30 rotate-1">made with ❤️ + lots of coffee</p>
        </div>
      </div>
    </section>
  );
}
