"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EditorialTypography() {
  const containerRef = useRef<HTMLElement | null>(null);
  const rowLeftRef = useRef<HTMLDivElement | null>(null);
  const rowRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Row 1 drifts left
      if (rowLeftRef.current) {
        gsap.to(rowLeftRef.current, {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Row 2 drifts right
      if (rowRightRef.current) {
        gsap.to(rowRightRef.current, {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-[#F8F5EF] overflow-hidden select-none border-y border-[#EDE5DA]/50"
      aria-hidden="true"
    >
      <div className="space-y-2 md:space-y-4">
        {/* Top Kinetic Row */}
        <div
          ref={rowLeftRef}
          className="whitespace-nowrap flex items-center gap-12 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-[#292624]/[0.07] tracking-tight will-change-transform"
        >
          <span>MASSAGE BODY</span>
          <span className="text-[#6E1F2A]/20 font-sans">•</span>
          <span>BẢO DƯỠNG SỨC KHỎE</span>
          <span className="text-[#6E1F2A]/20 font-sans">•</span>
          <span>CỔ VAI GÁY</span>
          <span className="text-[#6E1F2A]/20 font-sans">•</span>
          <span>GỘI ĐẦU DƯỠNG SINH</span>
        </div>

        {/* Bottom Kinetic Row */}
        <div
          ref={rowRightRef}
          className="whitespace-nowrap flex items-center gap-12 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic text-[#6E1F2A]/[0.08] tracking-tight will-change-transform -translate-x-24"
        >
          <span>YÊN TĨNH</span>
          <span className="text-[#292624]/20 font-sans">•</span>
          <span>SẠCH SẼ</span>
          <span className="text-[#292624]/20 font-sans">•</span>
          <span>THƯ GIÃN SÂU</span>
          <span className="text-[#292624]/20 font-sans">•</span>
          <span>OMI SPA TÂN BÌNH</span>
        </div>
      </div>
    </section>
  );
}
