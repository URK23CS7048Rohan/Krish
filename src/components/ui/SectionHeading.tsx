import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6", className)}>
      <div className="max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-ocean-200/80 text-lg md:text-xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-ocean-500/50 to-transparent origin-left ml-12"
      />
    </div>
  );
}
