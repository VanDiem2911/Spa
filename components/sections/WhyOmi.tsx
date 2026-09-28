"use client";

import React, { useRef, useEffect } from "react";
import { whyOmiPoints } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyOmi() {
  const containerRef = useRef<HTMLElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        const rows = itemsRef.current.querySelectorAll(".editorial-row");
        gsap.fromTo(
          rows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-omi"
      ref={containerRef}
      className="py-28 md:py-36 bg-[#F8F5EF] text-[#292624] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[#EDE5DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#6E1F2A]">
                03 / GIÁ TRỊ CỐT LÕI
              </span>
              <span className="w-12 h-[1px] bg-[#EDE5DA]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#292624]">
              Vì Sao Lựa Chọn OMI SPA?
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#75675F] max-w-sm mt-4 md:mt-0 font-light">
            Sự chỉn chu, tỉ mỉ trong từng chi tiết để mang lại cảm giác dễ chịu và an tâm nhất cho quý khách.
          </p>
        </div>

        {/* Editorial Rows - NOT Card Grid! */}
        <div ref={itemsRef} className="divide-y divide-[#EDE5DA]">
          {whyOmiPoints.map((point, index) => {
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <div
                key={point.title}
                className="editorial-row py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline group hover:bg-[#EDE5DA]/20 transition-colors px-4 -mx-4 rounded-sm"
              >
                {/* Index */}
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-[#75675F] tracking-widest block mb-1">
                    {num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#6E1F2A] font-medium">
                    Tiêu Chuẩn OMI
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#292624] tracking-tight group-hover:text-[#6E1F2A] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm font-display italic text-[#75675F] mt-1">
                    {point.subtitle}
                  </p>
                </div>

                {/* Detail text */}
                <div className="md:col-span-5">
                  <p className="text-sm md:text-base text-[#75675F] leading-relaxed font-light">
                    {point.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
