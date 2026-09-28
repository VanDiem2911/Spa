"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QuietMoment() {
  const containerRef = useRef<HTMLElement | null>(null);
  const textGroupRef = useRef<HTMLDivElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      if (textGroupRef.current) {
        tl.fromTo(
          textGroupRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
        );
      }

      if (imageFrameRef.current) {
        tl.fromTo(
          imageFrameRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-[#F8F5EF] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#75675F] font-mono">
          Khoảnh Khắc Tĩnh Lặng
        </p>

        <div ref={textGroupRef} className="space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#292624] font-normal tracking-tight">
            Một khoảng dừng{" "}
            <span className="italic font-display text-[#6E1F2A]">cho cơ thể.</span>
          </h2>
          <p className="text-sm md:text-base text-[#75675F] font-light max-w-md mx-auto leading-relaxed pt-1">
            Lắng nghe nhịp thở, thả lỏng từng thớ cơ và trao lại năng lượng tươi mới cho chính mình.
          </p>
        </div>

        {/* Real_04 poster tightly and harmoniously integrated right below the text */}
        <div className="pt-6 flex justify-center w-full">
          <div
            ref={imageFrameRef}
            className="w-full max-w-lg aspect-square relative rounded-sm shadow-xl border border-[#EDE5DA] overflow-hidden bg-[#292624]"
          >
            <Image
              src="/images/drive/real_04.jpg"
              alt="OMI SPA - Tái sinh năng lượng, thư giãn thân tâm trí"
              fill
              sizes="(max-width: 640px) 95vw, 512px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
