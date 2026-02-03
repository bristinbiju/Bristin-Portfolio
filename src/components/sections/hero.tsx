import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

/**
 * HeroSection Component
 * Implements a pixel-perfect dark-themed hero section based on the design instructions.
 * Features: Grid background, "spots left" badge, H1 headline, CTA, and star ratings.
 */
const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-[800px] flex flex-col items-center justify-center pt-[142px] pb-[120px] overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        />
        {/* Center Glow Effect */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #007cc0 0%, transparent 70%)' }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="mb-10 px-4 py-1.5 rounded-full glass flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[#999999] text-[14px] font-medium tracking-tight">
            3 spots left for Q2
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="max-w-[900px] text-[48px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.03em] mb-6 text-white text-gradient animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Crafting high-impact <br className="hidden md:block" /> branding & experiences
        </h1>

        {/* Hero Description */}
        <p className="max-w-[700px] text-[18px] md:text-[20px] text-[#999999] leading-[1.6] mb-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Graphic designer and branding specialist with 4 years of agency experience. 
          Handling clients across Dubai, Europe, and Africa to deliver obsessive detail in typography, layout, and high-conversion ads.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <a 
            href="#contact" 
            className="relative group inline-flex items-center px-8 py-4 bg-[#007cc0] hover:bg-[#006bb0] text-white font-semibold text-[16px] rounded-[12px] transition-all duration-300 accent-glow"
          >
            Start a campaign
            <div className="absolute inset-0 rounded-[12px] bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>

          {/* Trust Indicator / Star Rating */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className="fill-[#e67e22] text-[#e67e22]" 
                />
              ))}
            </div>
            <span className="text-[#999999] text-[14px] font-medium">
              300+ founders trust us
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Portfolio Peek (Top part of the gallery) */}
      <div className="mt-20 w-full max-w-[1400px] mx-auto px-6 overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-300">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-40">
           <div className="aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/TRAoU3epjWbVl0efchYFEO28ugY-2.jpg"
                alt="Website design project"
                width={300}
                height={400}
                className="w-full h-full object-cover grayscale"
             />
           </div>
           <div className="aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden translate-y-8">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/55ZGT1Yt09uBuw7UDfieDXLbIQ-3.jpg"
                alt="Mobile responsive design"
                width={300}
                height={400}
                className="w-full h-full object-cover grayscale"
             />
           </div>
           <div className="aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/7gYgDLBCFcz6Fp5v6De2M3QsjAk-4.jpg"
                alt="UI/UX design"
                width={300}
                height={400}
                className="w-full h-full object-cover grayscale"
             />
           </div>
           <div className="aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden translate-y-8">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/4cNO6HSddAEje7x0Y7YykaHVgCE-5.jpg"
                alt="Framer conversion page"
                width={300}
                height={400}
                className="w-full h-full object-cover grayscale"
             />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;