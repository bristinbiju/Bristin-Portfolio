"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

export function Section({ id, className, children, fullWidth = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 md:py-32 px-6 md:px-12",
        !fullWidth && "max-w-7xl mx-auto",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
