import React from 'react';

/**
 * FinalCTA Component
 * 
 * Clones the footer call-to-action section with:
 * - Availability badge ("3 spots left for Q2")
 * - Heading "Let's work together"
 * - Supporting paragraph
 * - Large blue primary button "Book your free intro call"
 * - Dark grid background pattern
 */
const FinalCTA = () => {
  return (
    <section className="relative w-full py-[120px] px-6 overflow-hidden bg-black">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        {/* Subtle radial glow to enhance the dark aesthetic */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 124, 192, 0.4) 0%, transparent 70%)' }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-16 glass">
          
          {/* Availability Badge */}
          <div className="flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></div>
            <span className="text-[14px] font-medium text-white/90">3 spots left for Q2</span>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-semibold tracking-[-0.02em] mb-6 font-display">
            Let's work together
          </h2>

          {/* Subtext */}
          <p className="text-[16px] md:text-[18px] text-[#999999] leading-[1.6] mb-10 max-w-[500px]">
            Ready to elevate your brand identity? Whether you're in Dubai, Europe, or Africa, let's craft something extraordinary together.
          </p>

          {/* CTA Button */}
          <div className="relative group">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[#007cc0] rounded-xl blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <a 
              href="mailto:bristinbiju123@gmail.com" 
              className="relative inline-flex items-center justify-center bg-[#007cc0] hover:bg-[#0088d1] text-white font-semibold text-[16px] px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Start a campaign
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;