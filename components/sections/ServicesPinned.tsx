"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { services, businessInfo } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Check, Clock, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceCardProps {
  service: (typeof services)[0];
  imageAspect: string;
  index: number;
}

function ServiceCard({ service, imageAspect, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cardRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={cardRef}
      className="group relative flex flex-col bg-[#221f1d] rounded-sm border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
    >
      {/* Visual Image Frame */}
      <div className={`relative w-full ${imageAspect} overflow-hidden bg-[#181615]`}>
        <Image
          src={service.image}
          alt={`${service.title} tại OMI SPA`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#221f1d] via-[#221f1d]/20 to-transparent opacity-90" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
          <span className="bg-[#292624]/80 backdrop-blur-md px-3 py-1 rounded-full text-[#EDE5DA]/80 border border-white/10 tracking-widest uppercase text-[10px]">
            {service.number} / 04
          </span>
          <span className="bg-[#6E1F2A]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] tracking-wider uppercase font-medium">
            OMI SPA
          </span>
        </div>

        {/* Big Watermark Number */}
        <span
          className="absolute right-4 bottom-2 text-7xl md:text-8xl font-serif font-bold text-white/[0.06] select-none pointer-events-none"
          aria-hidden="true"
        >
          {service.number}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F8F5EF] tracking-wide leading-tight group-hover:text-[#EDE5DA] transition-colors">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE5DA]/75 italic font-display">
              {service.subtitle}
            </p>
          </div>

          <p className="text-sm text-[#EDE5DA]/85 font-light leading-relaxed pt-1">
            {service.description}
          </p>

          {/* Benefits list */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#EDE5DA]/80">
                <span className="w-4 h-4 rounded-full bg-[#6E1F2A]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-[#EDE5DA]" />
                </span>
                <span className="leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Action */}
        <div className="pt-2 flex items-center justify-between border-t border-white/10">
          <span className="text-[11px] font-mono text-[#EDE5DA]/50 uppercase tracking-widest">
            Bảo dưỡng sức khoẻ
          </span>

          <MagneticButton
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-[#6E1F2A] hover:bg-[#8B2B39] text-[#F8F5EF] text-[11px] uppercase tracking-[0.18em] font-medium shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Đặt Lịch</span>
            <ArrowUpRight size={13} />
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPinned() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Split services into 2 asymmetric parallel columns:
  // Column 1: Service 01 & 03
  // Column 2: Service 02 & 04 (offset with top padding on desktop)
  const colLeft = [services[0], services[2]];
  const colRight = [services[1], services[3]];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#292624] text-[#F8F5EF] py-24 md:py-32"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(110,31,42,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 md:mb-20 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#EDE5DA]/60">
                02 / DỊCH VỤ CHÍNH
              </span>
              <span className="w-10 h-[1px] bg-[#EDE5DA]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F8F5EF]">
              Liệu Trình Chăm Sóc Sức Khỏe
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#EDE5DA]/70 font-light max-w-md leading-relaxed">
            04 liệu trình phục hồi thực tế tại OMI SPA. Không gian tĩnh lặng, kỹ thuật viên lành nghề giúp giải tỏa căng thẳng toàn diện.
          </p>
        </div>

        {/* Asymmetric Parallel 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column (01 & 03) */}
          <div className="space-y-8 lg:space-y-12">
            {/* Service 01: Massage Body (Taller hero aspect) */}
            <ServiceCard
              service={colLeft[0]}
              imageAspect="aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/5]"
              index={0}
            />

            {/* Service 03: Gội Đầu Dưỡng Sinh */}
            <ServiceCard
              service={colLeft[1]}
              imageAspect="aspect-[4/3] sm:aspect-[16/10]"
              index={2}
            />
          </div>

          {/* Right Column (02 & 04) - Staggered offset on desktop for an asymmetric editorial rhythm */}
          <div className="space-y-8 lg:space-y-12 md:pt-16 lg:pt-24">
            {/* Service 02: Massage Cổ Vai Gáy */}
            <ServiceCard
              service={colRight[0]}
              imageAspect="aspect-[4/3] sm:aspect-[16/10]"
              index={1}
            />

            {/* Service 04: Massage Chân (Taller aspect) */}
            <ServiceCard
              service={colRight[1]}
              imageAspect="aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/5]"
              index={3}
            />
          </div>
        </div>

        {/* Bottom Quick Call & Booking Strip */}
        <div className="mt-16 md:mt-24 p-6 md:p-8 rounded-sm bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#6E1F2A]/40 border border-[#6E1F2A]/60 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-[#EDE5DA]" />
            </div>
            <div>
              <p className="text-sm font-serif text-[#F8F5EF]">
                Mở cửa đón khách: {businessInfo.openingHours} ({businessInfo.openingDays})
              </p>
              <p className="text-xs text-[#EDE5DA]/60 mt-0.5">
                {businessInfo.fullAddress} • Hotline hỗ trợ trực tiếp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[#EDE5DA] text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <Phone size={13} />
              <span>{businessInfo.displayPhone}</span>
            </a>

            <MagneticButton
              href="#booking"
              className="px-6 py-2.5 rounded-full bg-[#6E1F2A] hover:bg-[#8B2B39] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium shadow-md transition-all flex items-center gap-2"
            >
              <span>Đặt Lịch Ngay</span>
              <ArrowUpRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
