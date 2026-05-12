"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-paper overflow-hidden">
      
      {/* Background doodle */}
      <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
        <span className="absolute -bottom-10 -left-10 font-bebas text-[20rem] leading-none text-ink">HI!</span>
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
            <div className="bg-ink text-paper p-8 brutalist-border brutalist-shadow -rotate-1">
              <p className="font-space text-sm leading-relaxed opacity-80 mb-6">
                Available for freelance opportunities and creative collaborations. Let&apos;s build something bold and unforgettable.
              </p>
              <a href="mailto:hello@studio.com" className="font-bebas text-3xl md:text-4xl text-hot-pink hover:text-mustard transition-colors break-all">
                hello@studio.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map((social, i) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  className="px-6 py-3 bg-ink text-paper font-bebas text-xl tracking-widest brutalist-border brutalist-shadow hover:bg-hot-pink transition-colors duration-200"
                >
                  {social}
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
                    className="bg-transparent brutalist-border px-4 py-3 font-space text-ink placeholder:text-ink/40 focus:outline-none focus:bg-mustard/20 transition-colors duration-200"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bebas text-xl text-ink tracking-widest">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-transparent brutalist-border px-4 py-3 font-space text-ink placeholder:text-ink/40 focus:outline-none focus:bg-mustard/20 transition-colors duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ x: 4, y: 4, boxShadow: "2px 2px 0px 0px #111111" }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 px-10 py-5 bg-hot-pink text-white font-bebas text-3xl tracking-widest brutalist-border brutalist-shadow hover:bg-ink transition-colors duration-200 self-start"
              >
                SEND IT! →
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t-3 border-ink flex flex-col md:flex-row justify-between items-center gap-4 text-ink/40 text-sm font-space">
          <p>© {new Date().getFullYear()} Creative Studio. All rights reserved.</p>
          <p className="font-caveat text-xl text-ink/30 rotate-1">made with ❤️ + lots of coffee</p>
        </div>
      </div>
    </section>
  );
}
