"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { businessInfo } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);
  const titleWordsRef = useRef<HTMLDivElement | null>(null);
  const textContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Image expansion from 88% to 100% width on scroll
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { width: "88%", borderRadius: "10px" },
          {
            width: "100%",
            borderRadius: "0px",
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      }

      // Staggered reveal for the 3 keywords
      if (titleWordsRef.current) {
        const words = titleWordsRef.current.querySelectorAll(".keyword-item");
        gsap.fromTo(
          words,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleWordsRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Text block fade up
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#F8F5EF] text-[#292624] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Minimal Indicator */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#6E1F2A]">
            01 / KHÔNG GIAN
          </span>
          <span className="w-12 h-[1px] bg-[#EDE5DA]" />
        </div>

        {/* Grand Headline with asymmetric placement */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[#75675F] mb-3 font-medium">
            Không gian chữa lành & phục hồi
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#292624] font-normal leading-[1.1] tracking-tight">
            Chăm sóc cơ thể trong một không gian{" "}
            <span className="italic font-display text-[#6E1F2A]">thư thái.</span>
          </h2>
        </div>
      </div>

      {/* Expanding Cinematic Image Frame - Uses exact 2048/900 aspect ratio so bottom phone & address are fully visible */}
      <div className="w-full flex justify-center my-10 md:my-16 px-4 md:px-12">
        <div
          ref={imageFrameRef}
          className="relative w-full max-w-7xl aspect-[2048/900] overflow-hidden shadow-2xl transition-shadow will-change-transform border border-[#EDE5DA]"
        >
          <Image
            src="/images/drive/logo_02.jpg"
            alt="OMI SPA - 159 Ba Vân, Tân Bình - Hotline 0938 974 424"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain sm:object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Bottom Editorial Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Staggered 3 Keywords */}
          <div
            ref={titleWordsRef}
            className="lg:col-span-5 space-y-4 text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#292624]"
          >
            <div className="keyword-item flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#6E1F2A]" />
              <span>YÊN TĨNH.</span>
            </div>
            <div className="keyword-item flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#6E1F2A]" />
              <span>SẠCH SẼ.</span>
            </div>
            <div className="keyword-item flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#6E1F2A]" />
              <span className="text-[#6E1F2A] italic font-display">THƯ GIÃN.</span>
            </div>
          </div>

          {/* Official Business Intro & Operating Notes */}
          <div ref={textContentRef} className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-[#292624] font-light leading-relaxed">
              {businessInfo.officialIntro}
            </p>

            <div className="pt-6 border-t border-[#EDE5DA] grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#75675F]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#292624] font-medium">
                  <Clock size={16} className="text-[#6E1F2A]" />
                  <span>Thời Gian Hoạt Động</span>
                </div>
                <p className="pl-6">
                  {businessInfo.openingDays}
                  <br />
                  <strong className="text-[#292624] font-medium">
                    {businessInfo.openingHours}
                  </strong>
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#292624] font-medium">
                  <MapPin size={16} className="text-[#6E1F2A]" />
                  <span>Địa Chỉ</span>
                </div>
                <p className="pl-6">
                  {businessInfo.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
