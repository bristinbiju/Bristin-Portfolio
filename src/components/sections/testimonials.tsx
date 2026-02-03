"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Bristin's attention to detail is unmatched. The branding for our global project was exactly what we needed to stand out.",
    name: "Ahmed Al-Maktoum",
    role: "Agency Director, Dubai",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/icons/20417bJF96fCvxwdUQb1AUt6D0-4.jpg",
  },
  {
    id: 2,
    text: "Fast, reliable, and incredibly creative. Bristin delivered high-conversion assets for our European launch in record time.",
    name: "Elena Schmidt",
    role: "Marketing Head, Europe",
    image: "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg",
  },
  {
    id: 3,
    text: "Working with Bristin on the AIM Congress was a seamless experience. The visual identity was world-class.",
    name: "Samuel Okafor",
    role: "Event Organizer, Africa Rising",
    image: "https://framerusercontent.com/images/1cWxyH3NULyTRplCQ1ZfKK2g.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-black py-[120px] px-6" id="testimonials">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Text */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Trusted by global brands
          </h2>
          <p className="text-[18px] text-[#999999] max-w-[600px] mx-auto font-medium">
            See what partners from Dubai, Europe, and Africa have to say about my branding and design work.
          </p>
        </div>

        {/* Testimonial Card */}
        <div 
          className="relative bg-[#0a0a0a] rounded-[24px] border border-white/10 p-12 md:p-20 flex flex-col items-center text-center transition-all duration-500 overflow-hidden"
          style={{ minHeight: "440px" }}
        >
          {/* Quote Icon */}
          <div className="mb-10 text-white">
            <Quote size={48} fill="currentColor" strokeWidth={0} />
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10 w-full max-w-[800px] mb-12">
            <p className="text-[24px] md:text-[32px] leading-[1.3] text-white font-medium tracking-tight animate-in fade-in duration-700">
              {currentTestimonial.text}
            </p>
          </div>

          {/* Client Info */}
          <div className="flex flex-col items-center animate-in slide-in-from-bottom-2 duration-700">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-white/10">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <h6 className="text-[16px] font-semibold text-white mb-1">
              {currentTestimonial.name}
            </h6>
            <p className="text-[14px] text-[#999999]">
              {currentTestimonial.role}
            </p>
          </div>

          {/* Navigation Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Logos Sub-section (Based on screenshot branding) */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="w-3 h-3 rounded-full bg-white opacity-50" /> StartUp
            </div>
            <div className="text-white text-xl font-bold">Horizon</div>
            <div className="flex items-center gap-2 text-white font-medium text-lg">
                <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white" />
                    <div className="w-1.5 h-1.5 bg-white" />
                </div>
                GreatAI
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-lg">
                <div className="w-4 h-4 border-2 border-white rotate-45" /> Hexagon
            </div>
            <div className="text-white text-xl font-bold tracking-tight">CloudTech</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;