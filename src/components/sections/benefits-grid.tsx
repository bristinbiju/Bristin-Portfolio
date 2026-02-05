import React from 'react';


const BenefitsGrid = () => {
  return (
    <section
      id="benefits"
      className="w-full bg-black py-[120px]"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white mb-6 font-display">
            High-Impact Branding & Identity
          </h2>
          <p className="text-[18px] text-[#999999] leading-[1.6] max-w-[700px]">
            From massive events like AIM Congress 2025 to high-conversion digital ads, I bring agency-level precision to every design project.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Tile 1: Global Reach */}
          <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col h-full overflow-hidden">
            <div className="mb-10">
              <h4 className="text-[24px] font-medium text-white mb-4">Global Reach</h4>
              <p className="text-[#999999] text-[16px] leading-[1.6]">
                Experienced in UAE, European, and African markets with a nuanced perspective.
              </p>
            </div>
            <div className="mt-auto relative h-[180px] w-full flex items-end justify-between">
              {/* Bar Chart Mockup */}
              <div className="flex items-end gap-2 w-full pr-12">
                <div className="absolute top-0 left-0">
                  <span className="text-white text-[16px] font-semibold">+UAE</span>
                </div>
                <div className="w-6 h-[40px] bg-[#007cc0]/20 rounded-t-sm"></div>
                <div className="w-6 h-[70px] bg-[#007cc0]/40 rounded-t-sm"></div>
                <div className="w-6 h-[55px] bg-[#007cc0]/60 rounded-t-sm"></div>
                <div className="w-6 h-[90px] bg-[#007cc0]/80 rounded-t-sm"></div>
                <div className="w-6 h-[120px] bg-[#007cc0] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Tile 2: Rapid turnaround */}
          <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col h-full">
            <div className="mb-10">
              <h4 className="text-[24px] font-medium text-white mb-4">AI-Optimized Workflow</h4>
              <p className="text-[#999999] text-[16px] leading-[1.6]">
                Blending classical design principles with modern AI tools for maximum speed and precision.
              </p>
            </div>
            <div className="space-y-4 mt-auto">
              {/* Notification 1 */}
              <div className="bg-[#111111] p-4 rounded-[12px] border border-[rgba(255,255,255,0.05)] flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                </div>
                <div>
                  <h6 className="text-[14px] font-semibold text-white">Project Approved</h6>
                  <p className="text-[12px] text-[#999999]">Today, 11:08AM</p>
                </div>
              </div>
              {/* Notification 2 */}
              <div className="bg-[#111111] p-4 rounded-[12px] border border-[rgba(255,255,255,0.05)] flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5a3.5 3.5 0 0 1-3.5-3.5z" /></svg>
                </div>
                <div>
                  <h6 className="text-[14px] font-semibold text-white">Final Assets Sent</h6>
                  <p className="text-[12px] text-[#999999]">Today, 11:02AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 3: Agency Level Speed */}
          <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 flex flex-col h-full">
            <div className="mb-10">
              <h4 className="text-[24px] font-medium text-white mb-4">Agency Level Speed</h4>
              <p className="text-[#999999] text-[16px] leading-[1.6]">
                4+ years of experience in the fast-paced UAE agency scene.
              </p>
            </div>
            <div className="space-y-4 mt-auto">
              {/* Chat Bubble Left */}
              <div className="flex items-start gap-3">
                <div className="bg-[#1a1a1a] p-3 rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] max-w-[80%]">
                  <p className="text-[14px] text-white leading-snug">Need a brand refresh for Dubai Market.</p>
                </div>
              </div>
              {/* Chat Bubble Right */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-[#000000] p-3 rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px] border border-white/5 max-w-[80%]">
                  <p className="text-[14px] text-white leading-snug">I&apos;m on it. Delivering the first draft by tomorrow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Bottom Row: Seamless collaboration */}
          <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-8 lg:col-span-3 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
            <div className="md:w-1/2">
              <h4 className="text-[24px] font-medium text-white mb-4">Obsessive Detail</h4>
              <p className="text-[#999999] text-[16px] leading-[1.6]">
                Whether it&apos;s typography, layout, or color theory, I ensure every pixel serves a purpose. My background in high-conversion ads means I design for impact.
              </p>
            </div>

            <div className="md:w-1/2 w-full flex flex-wrap justify-center gap-4 relative">
              {/* Tool Icons Mockup */}
              {[
                <path key="slack" d="M14.5 10c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2c1.1 0 2 .9 2 2zM12 12c0 1.1.9 2 2 2s2-.9 2-2m-8 0c0 1.1-.9 2-2 2s-2-.9-2-2m8 4c0 1.1-.9 2-2 2s-2-.9-2-2m8 0c0 1.1-.9 2-2 2s-2-.9-2-2" />,
                <path key="figma" d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0l-3 3m3-3l3 3m-3-3v7m0 0a3 3 0 1 1-6 0h6zm0 0a3 3 0 1 0 6 0h-6z" />,
                <path key="jira" d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z" />,
                <path key="notion" d="M3 3h18v18H3V3zm3 4v10l3-2 3 2 3-2 3 2V7H6z" />
              ].map((icon, i) => (
                <div key={i} className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border border-white/10 text-white shadow-xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </div>
              ))}
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border border-white/10 text-white shadow-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9l4-6z" /><path d="M11 3v18" /><path d="m5 13 6-3 6 3" /><path d="m2 9 20 0" />
                </svg>
              </div>
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border border-white/10 text-white shadow-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;