"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { services } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesPinned() {
  const containerRef = useRef<HTMLElement | null>(null);
  const stickyPanelRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!containerRef.current) return;

    // Responsive setup: On desktop & tablet we use pinned scrub sequence
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (prefersReducedMotion) return;

      const totalServices = services.length;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalServices * 100}%`,
        pin: stickyPanelRef.current,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active index with smooth boundary padding
          const index = Math.min(
            totalServices - 1,
            Math.floor(progress * totalServices)
          );
          setActiveIndex(index);
        },
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-[#292624] text-[#F8F5EF]"
    >
      {/* Sticky panel container */}
      <div
        ref={stickyPanelRef}
        className="w-full min-h-[100svh] flex flex-col justify-center relative overflow-hidden py-16 md:py-20"
      >
        {/* Subtle decorative background noise & gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#292624] via-[#331c22]/40 to-[#292624] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          {/* Top Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#EDE5DA]/60">
                  02 / DỊCH VỤ CHÍNH
                </span>
                <span className="w-8 h-[1px] bg-[#EDE5DA]/30" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F8F5EF]">
                Liệu Trình Chăm Sóc Sức Khỏe
              </h2>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0" aria-label="Danh sách 4 dịch vụ">
              {services.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-1.5 transition-all duration-300 py-1 px-2.5 rounded-full text-xs font-mono focus:outline-none ${
                    idx === activeIndex
                      ? "bg-[#6E1F2A] text-[#F8F5EF] font-bold"
                      : "text-[#EDE5DA]/50 hover:text-white"
                  }`}
                  aria-label={`Dịch vụ ${item.number}: ${item.title}`}
                >
                  <span>{item.number}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 relative min-h-[380px] flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                className="absolute -top-16 -left-6 pointer-events-none select-none text-[22vw] lg:text-[14vw] font-serif text-[#F8F5EF]/[0.04] leading-none transition-all duration-700 font-bold"
                aria-hidden="true"
              >
                {services[activeIndex].number}
              </div>

              {/* Service Details with smooth transition */}
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#EDE5DA]/70 font-mono">
                  <span>Dịch vụ {services[activeIndex].number} / 04</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F8F5EF] tracking-wide leading-tight">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-sm md:text-base text-[#EDE5DA]/80 font-light italic font-display">
                    {services[activeIndex].subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-[#EDE5DA]/90 font-light leading-relaxed max-w-lg">
                  {services[activeIndex].description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 pt-2">
                  {services[activeIndex].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#EDE5DA]/75">
                      <span className="w-5 h-5 rounded-full bg-[#6E1F2A]/40 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#EDE5DA]" />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Direct CTA */}
                <div className="pt-4 flex items-center gap-4">
                  <MagneticButton
                    href="#booking"
                    className="px-7 py-3 rounded-full bg-[#6E1F2A] hover:bg-[#8B2B39] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-medium shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Đặt Lịch Liệu Trình</span>
                    <ArrowUpRight size={14} />
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Right Cinematic Image Column */}
            <div className="lg:col-span-6 relative">
              <div
                className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-[#1d1b1a] border border-white/10"
              >
                {services.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out will-change-transform ${
                        isActive
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} tại OMI SPA`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292624]/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#EDE5DA]/80 bg-[#292624]/60 backdrop-blur-md py-2 px-4 rounded-sm border border-white/10">
                        <span className="font-mono">{item.number} • OMI SPA</span>
                        <span className="tracking-widest uppercase">{item.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
