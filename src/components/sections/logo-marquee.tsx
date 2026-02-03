import React from 'react';
import Image from 'next/image';

/**
 * LogoMarquee component
 * 
 * Clones the grayscale horizontal logo marquee showing partner brands:
 * StartUp, Horizon, GreatAI, Hexagon, and CloudTech.
 * Uses assets provided and follows the dark theme design system.
 */
const LogoMarquee = () => {
  const partners = [
    {
      name: 'StartUp',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/zUyRr7fPY3hIr0zdviY3woT6oYM-11.png',
      width: 104,
      height: 28,
    },
    {
      name: 'Horizon',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/NcnRIvDEj61lIrFb1L5bx1W6yUQ-12.png',
      width: 104,
      height: 28,
    },
    {
      name: 'GreatAI',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/frIRTQtWzZtRqHIEmCPBF6Z9XTM-13.png',
      width: 104,
      height: 28,
    },
    {
      name: 'Hexagon',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/NVy8wXghb94qjyKOr15qEZZiVug-14.png',
      width: 104,
      height: 28,
    },
    {
      name: 'CloudTech',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e0cc916-358b-4e0e-ba24-0a3c9f62922e-designfast-demo-framer-website/assets/images/pXAJrgHa01ZUq3D9AZY26N3ePWo-15.png',
      width: 104,
      height: 28,
    },
  ];

  // We duplicate the list to ensure a seamless infinite loop if desired, 
  // though for the specific static layout in the reference it looks like a centered row.
  // The prompt mentions "grayscale horizontal logo marquee", so we use grayscale filters.

  return (
    <section className="w-full py-[60px] md:py-[80px] bg-black overflow-hidden select-none">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ minWidth: partner.width }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain h-7 w-auto"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient mask for edges if it were a moving marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;