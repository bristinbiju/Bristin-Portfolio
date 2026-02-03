import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer component cloned with pixel-perfect accuracy.
 * Features:
 * - Brand logo and copyright on the left.
 * - Center columns for Company and Legal links.
 * - Social media icons on the right.
 * - Theme: Dark (pure black background #000000).
 */

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] py-[80px] px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-width-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        
        {/* Left Column: Brand & Copyright */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-bold text-white tracking-tighter">
              Bristin <span className="text-[#007cc0]">Biju</span>
            </span>
          </div>
          <p className="text-[#999999] text-[14px] font-normal leading-relaxed">
            © 2026. Global Branding & Design Partner
          </p>
        </div>

        {/* Center Sections: Link Columns */}
        <div className="flex flex-row gap-16 md:gap-24 lg:gap-32">
          {/* Company Links */}
          <div className="flex flex-col gap-5">
            <h5 className="text-white text-[16px] font-semibold tracking-tight">Company</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/services" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-5">
            <h5 className="text-white text-[16px] font-semibold tracking-tight">Legal</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/privacy-policy" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-[#999999] text-[15px] hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Social Icons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://twitter.com" 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:bg-[#252525] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 text-white" />
          </a>
          <a 
            href="https://instagram.com" 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:bg-[#252525] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4 text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-white/5 hover:border-white/20 hover:bg-[#252525] transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;