"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { galleryRealPhotos } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RealGallery() {
  const containerRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".gallery-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="gallery"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#F8F5EF] text-[#292624] relative overflow-hidden border-t border-[#EDE5DA]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#EDE5DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#6E1F2A]">
                HÌNH ẢNH THỰC TẾ
              </span>
              <span className="w-12 h-[1px] bg-[#EDE5DA]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#292624]">
              Không Gian & Liệu Trình Thực Tế
            </h2>
          </div>
          <p className="text-sm text-[#75675F] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            100% hình ảnh thực tế từ không gian trị liệu, dụng cụ và đội ngũ kỹ thuật viên phục vụ tại OMI SPA 159 Ba Vân, Tân Bình.
          </p>
        </div>

        {/* Real Photos Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {galleryRealPhotos.map((item, idx) => (
            <div
              key={idx}
              className="gallery-card group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#292624] shadow-md border border-[#EDE5DA]/80"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292624]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#EDE5DA]/80 font-mono block">
                  {item.subtitle}
                </span>
                <p className="text-base font-serif mt-0.5 tracking-wide text-[#F8F5EF]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
