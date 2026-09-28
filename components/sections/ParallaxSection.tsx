"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 30, opacity: 0.85 },
          {
            y: -20,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 1,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 bg-[#F8F5EF] flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      {/* 1:1 Aspect ratio matching real_04.jpg so 100% of the poster is visible without any cropping */}
      <div
        ref={cardRef}
        className="w-full max-w-xl aspect-square relative rounded-sm shadow-2xl border border-[#EDE5DA] overflow-hidden bg-[#292624] will-change-transform"
      >
        <Image
          src="/images/drive/real_04.jpg"
          alt="OMI SPA - Tái sinh năng lượng, thư giãn thân tâm trí"
          fill
          sizes="(max-width: 768px) 95vw, 600px"
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}
