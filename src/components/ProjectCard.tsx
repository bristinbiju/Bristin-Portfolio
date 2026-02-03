"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  priority?: boolean;
}

export function ProjectCard({ title, category, image, index, priority }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border border-white/0 group-hover:border-white/10">
        <div className="flex justify-between items-end">
          <div className="glass-card p-4 md:p-6 rounded-lg w-full mr-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 mb-2 font-bold">{category}</p>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tighter">{title}</h3>
          </div>
          <div className="w-12 h-12 glass flex items-center justify-center rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shrink-0 mb-2">
            <ArrowUpRight className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
