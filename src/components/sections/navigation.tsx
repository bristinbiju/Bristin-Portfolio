import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-[30px] flex justify-center items-center pointer-events-none">
      <div className="w-full max-w-[1200px] h-auto pointer-events-auto">
        <div
          className="flex items-center justify-between px-[30px] py-[15px] bg-[rgba(15,15,15,0.6)] backdrop-blur-[12px] rounded-[20px] shadow-[inset_0_1px_20px_0_rgba(255,255,255,0.07)] border border-white/10"
          style={{ height: '82.4062px' }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-[24px] font-bold text-white tracking-tighter">
              Bristin <span className="text-[#007cc0]">Biju</span>
            </span>
          </Link>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-[30px]">
            <Link
              href="#hero"
              className="font-sans text-[16px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Home
            </Link>
            <Link
              href="#capabilities"
              className="font-sans text-[16px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="font-sans text-[16px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="font-sans text-[16px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex-shrink-0 relative group">
            {/* Blurry Glow Effect */}
            <div className="absolute inset-0 bg-[#007cc0] blur-[15px] opacity-40 rounded-[12px] transition-opacity group-hover:opacity-60"></div>
            <Link
              href="/contact"
              className="relative flex items-center justify-center bg-[#007cc0] text-white px-6 h-[50px] rounded-[12px] font-sans text-[16px] font-semibold transition-transform active:scale-95 transition-all hover:bg-[#008bd9]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;