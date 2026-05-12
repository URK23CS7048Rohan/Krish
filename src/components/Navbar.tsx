"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Brand Design", href: "#brand-design" },
  { name: "Graphic Design", href: "#graphic-design" },
  { name: "Magazine Design", href: "#magazine-design" },
  { name: "Photography", href: "#photography" },
  { name: "Textile Design", href: "#textile-design" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300 px-6 py-3",
              scrolled || menuOpen ? "bg-paper brutalist-border brutalist-shadow" : "bg-transparent"
            )}
          >
            <Link href="/" className="text-4xl font-bebas text-ink tracking-wider relative z-50">
              STUDIO<span className="text-hot-pink">!</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-bebas text-2xl text-ink hover:text-hot-pink hover:-rotate-2 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-ink hover:text-hot-pink relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span 
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                className="w-8 h-[3px] bg-current block transition-transform"
              />
              <motion.span 
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-8 h-[3px] bg-current block transition-opacity"
              />
              <motion.span 
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
                className="w-8 h-[3px] bg-current block transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-mustard flex flex-col items-center justify-center brutalist-border"
          >
            <div className="absolute top-10 left-10 text-9xl font-caveat text-ink/10 -rotate-12">
              Menu
            </div>
            
            <div className="flex flex-col items-center gap-8 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl md:text-7xl font-bebas text-ink hover:text-white hover:bg-ink px-4 py-2 transition-all brutalist-border brutalist-shadow bg-paper"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
