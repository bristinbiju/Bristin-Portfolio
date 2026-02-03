"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "On average, branding projects take 4-6 weeks, while web design projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project.",
  },
  {
    question: "What is the cost of working with you?",
    answer:
      "Our pricing is transparent and based on the scope of your project. We offer several subscription-based plans and one-time project costs starting at $2,497 per page. For a custom quote, please reach out to us directly.",
  },
  {
    question: "How involved will I be in the process?",
    answer:
      "We believe in collaborative partnership. You'll be involved in key milestone reviews through Slack, Trello, or Notion, ensuring the final product aligns perfectly with your vision while we handle all the heavy lifting.",
  },
  {
    question: "Can you work with my existing brand?",
    answer:
      "Absolutely. We can integrate your existing brand guidelines, color palettes, and typography into a modern, high-converting website design while maintaining brand consistency across all touchpoints.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-[120px] px-6 text-white font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[3rem] sm:text-[48px] leading-[1.2] font-semibold tracking-[-0.02em] mb-4 text-white">
            Your questions, answered
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#999999] max-w-[600px] mx-auto">
            Whether you&apos;re a new client or a long-time partner, we&apos;re here
            to help. Below are answers to the most common questions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "border border-[rgba(255,255,255,0.1)] bg-[#0a0a0a] rounded-[16px] overflow-hidden transition-all duration-300",
                  isOpen ? "bg-[#0a0a0a]" : "hover:bg-[#111111]"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <h5 className="text-[18px] font-medium leading-[1.4] tracking-tight">
                    {item.question}
                  </h5>
                  <div className="ml-4 flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-[16px] leading-[1.6] text-[#999999]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;