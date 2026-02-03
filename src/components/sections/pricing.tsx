import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#000000] py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-[500px]">
            <h2 className="text-[48px] font-semibold tracking-tight text-white mb-4 leading-[1.2]">
              Pricing
            </h2>
          </div>
          <div className="max-w-[400px]">
            <p className="text-[#999999] text-[16px] leading-[1.6] text-right">
              Transparent pricing, no surprises. Choose a plan that fits your needs and scale up whenever you&apos;re ready.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Landing Page Plan */}
          <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col transition-all hover:bg-[#0f0f0f]">
            <div className="mb-8">
              <h4 className="text-[20px] font-semibold text-white mb-3">Landing Page</h4>
              <p className="text-[#999999] text-[15px] leading-snug">
                A high-converting landing page designed to drive results.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] font-bold text-white">$2,497</span>
                <span className="text-[#999999] text-[16px]">/page</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                "Unlimited requests",
                "Figma file",
                "Mobile responsive",
                "48-hour delivery"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white opacity-80" strokeWidth={3} />
                  <span className="text-[15px] text-[#999999]">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="mailto:contact@designfast.pro"
              className="w-full bg-[#1A1A1A] hover:bg-[#252525] text-white text-[14px] font-semibold py-4 rounded-[12px] text-center transition-colors border border-[rgba(255,255,255,0.05)]"
            >
              Request a quote
            </a>
          </div>

          {/* Dedicated Team Plan (Highlighted) */}
          <div className="bg-[#0A0A0A] border-[#007CC0] border rounded-[24px] p-8 flex flex-col relative transition-all hover:bg-[#0f0f0f] shadow-[0_0_40px_rgba(0,124,192,0.1)]">
            <div className="mb-8">
              <h4 className="text-[20px] font-semibold text-white mb-3">Dedicated Team</h4>
              <p className="text-[#999999] text-[15px] leading-snug">
                Your own scalable design team on a monthly subscription.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] font-bold text-white">$4,497</span>
                <span className="text-[#999999] text-[16px]">/month</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                "Unlimited requests",
                "Figma file",
                "Slack access",
                "Ongoing revisions"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white opacity-80" strokeWidth={3} />
                  <span className="text-[15px] text-[#999999]">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="mailto:contact@designfast.pro"
              className="w-full bg-[#007CC0] hover:bg-[#0088d4] text-white text-[14px] font-semibold py-4 rounded-[12px] text-center transition-all shadow-[0_0_20px_rgba(0,124,192,0.3)]"
            >
              Request a quote
            </a>
          </div>

          {/* Right Column (Stacked Small Cards) */}
          <div className="flex flex-col gap-6">
            {/* Enterprise Card */}
            <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col h-1/2">
              <div className="mb-6">
                <h4 className="text-[20px] font-semibold text-white mb-3">Enterprise Plans</h4>
                <p className="text-[#999999] text-[15px] leading-snug mb-6">
                  Custom solutions tailored to your business needs—contact us.
                </p>
                <a 
                  href="mailto:sales@designfast.pro"
                  className="inline-block w-full bg-[#1A1A1A] hover:bg-[#252525] text-white text-[14px] font-semibold py-4 rounded-[12px] text-center transition-colors border border-[rgba(255,255,255,0.05)]"
                >
                  Contact sales
                </a>
              </div>
            </div>

            {/* Priority Requests Card */}
            <div className="bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col justify-between h-1/2">
              <div>
                <h4 className="text-[20px] font-semibold text-white mb-2">Priority Requests</h4>
                <p className="text-[#999999] text-[14px] leading-relaxed">
                  Get your designs delivered even faster with priority support.
                </p>
              </div>
              
              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-bold text-white">$297</span>
                  <span className="text-[#999999] text-[14px]">/request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;