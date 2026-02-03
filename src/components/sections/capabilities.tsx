import React from 'react';
import Image from 'next/image';
import { PenTool, Box, Smartphone, Frame, Globe } from 'lucide-react';

/**
 * CapabilitiesSection Component
 * 
 * Clones the "Our designers work with a wide range of projects" section
 * with horizontal scrolling categories and a centerpiece workstation image.
 */
export default function CapabilitiesSection() {
  const categories = [
    { name: 'Brand Identity', icon: <Box className="w-4 h-4" /> },
    { name: 'Graphic Design', icon: <PenTool className="w-4 h-4" /> },
    { name: 'Typography', icon: <Frame className="w-4 h-4" /> },
    { name: 'Visual Identity', icon: <Globe className="w-4 h-4" /> },
    { name: 'Ad Campaigns', icon: <Smartphone className="w-4 h-4" /> },
  ];

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '50+', label: 'Global Brands' },
    { value: '100%', label: 'Attention to Detail' },
  ];

  return (
    <section className="py-[120px] bg-black overflow-hidden" id="capabilities">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white mb-6 font-display">
            Designing with obsessive detail & precision
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#999999]">
            From massive international event branding like AIM Congress 2025 to high-conversion digital assets for the UAE market.
          </p>
        </div>

        {/* Horizontal Scrolling Badges */}
        <div className="relative mb-20">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 justify-start md:justify-center">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-6 py-3 bg-[#111111] border border-white/10 rounded-full whitespace-nowrap transition-colors hover:bg-[#1a1a1a]"
              >
                <div className="text-[#999999]">{item.icon}</div>
                <span className="text-white text-[16px] font-medium">{item.name}</span>
              </div>
            ))}
          </div>
          {/* Fades for smooth edges on mobile scroll */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Large Centerpiece Image with Glassmorphism Border */}
        <div className="relative group">
          <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/3Vaf8IQA9s5gOTr4rddfOwPxJ8-6.jpg"
              alt="Designer templates workstation"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/5" />
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-[#007cc0]/10 blur-[80px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/5 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-[56px] font-bold text-white mb-2 font-display transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </h3>
              <p className="text-[#999999] text-[18px] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}