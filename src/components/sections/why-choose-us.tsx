import React from 'react';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Agency Pace",
      description: "Fast-tracked delivery without compromising precision.",
    },
    {
      title: "Conversion Focused",
      description: "Designing with one goal: turning brand strategy into results.",
    },
    {
      title: "Global Vision",
      description: "Crafting identities that resonate in Dubai, Europe, and Africa.",
    },
  ];

  return (
    <section className="py-[120px] bg-black text-center px-6" id="why-choose-me">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6">
            Why partner with me?
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#999999] max-w-[600px] mx-auto font-sans">
            I blend classical design principles with modern AI tools to deliver high-impact results for global brands.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 md:p-6"
            >
              <h4 className="text-[24px] font-medium text-white mb-3">
                {card.title}
              </h4>
              <p className="text-[16px] leading-[1.6] text-[#999999] font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;