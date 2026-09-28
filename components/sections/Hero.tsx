"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

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
          start: "top top",
          end: "+=80%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(
        bgImageRef.current,
        {
          scale: 1.08,
          ease: "none",
        },
        0
      );

      tl.to(
        textContentRef.current,
        {
          y: -50,
          opacity: 0,
          ease: "none",
        },
        0
      );

      tl.to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "none",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden bg-[#292624] select-none"
    >
      {/* Background Image Layer - Clean authentic photo with no poster text */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full will-change-transform origin-center"
      >
        <Image
          src="/images/hero.jpg"
          alt="Không gian phòng trị liệu OMI SPA Tân Bình"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic gradient overlay: deeper on left for typography readability, transparent on right to highlight real therapists */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#292624]/85 via-[#292624]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#292624]/80 via-transparent to-[#292624]/30" />
      </div>

      {/* Main Hero Content */}
      <div
        ref={textContentRef}
        className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center will-change-transform pt-16"
      >
        <div className="max-w-2xl space-y-6">
          {/* Subtle Top Tagline */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#EDE5DA]/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#EDE5DA]/90 font-mono">
              BẢO DƯỠNG SỨC KHỎE • TÂN BÌNH
            </span>
          </div>

          {/* Grand Editorial Headline */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#F8F5EF] tracking-tight leading-[0.95]">
              OMI SPA
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#EDE5DA]/80 uppercase tracking-[0.35em] font-light pt-2">
              Massage Trị Liệu & Dưỡng Sinh
            </p>
          </div>

          {/* Calm Narrative Text */}
          <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light leading-relaxed max-w-lg pt-1">
            Thư giãn cơ thể, thả lỏng tâm trí trong không gian yên tĩnh, sạch sẽ cùng kỹ thuật viên tay nghề cao.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              href="#booking"
              className="px-8 py-3.5 rounded-full bg-[#6E1F2A] hover:bg-[#8B2B39] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-medium shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 border border-white/10"
            >
              <span>Đặt Lịch Ngay</span>
              <ArrowUpRight size={15} />
            </MagneticButton>

            <a
              href="#services"
              className="px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] text-[#EDE5DA] hover:text-white border border-[#EDE5DA]/30 hover:border-white transition-all backdrop-blur-sm"
            >
              <span>Khám Phá Dịch Vụ</span>
            </a>
          </div>

          {/* Minimal Quick Address Badge */}
          <div className="pt-4 text-xs text-[#EDE5DA]/70 font-light flex items-center gap-4">
            <span>159 Ba Vân, P.14, Q. Tân Bình</span>
            <span>•</span>
            <span>09:00 – 20:00 Hàng ngày</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#EDE5DA]/70 font-light">
          Cuộn để khám phá
        </span>
        <div className="w-[1px] h-8 bg-[#EDE5DA]/20 relative overflow-hidden">
          <div className="w-full h-full bg-[#EDE5DA] animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
