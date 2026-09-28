"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, navLinks } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import { Menu, X, Phone, Calendar } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#F8F5EF]/90 backdrop-blur-md py-3.5 border-b border-[#EDE5DA]/60 shadow-[0_4px_24px_rgba(41,38,36,0.04)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Official Emblem */}
          <Link
            href="#hero"
            className="group flex items-center gap-3.5 cursor-pointer focus:outline-none"
            aria-label="OMI SPA - Về đầu trang"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#EDE5DA]/40 shadow-sm shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Logo OMI SPA"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col items-start">
              <span
                className={`text-xl md:text-2xl font-serif tracking-[0.2em] font-medium transition-colors duration-400 ${
                  isScrolled ? "text-[#6E1F2A]" : "text-white"
                }`}
              >
                OMI SPA
              </span>
              <span
                className={`text-[8.5px] uppercase tracking-[0.3em] font-medium transition-colors duration-400 ${
                  isScrolled ? "text-[#75675F]" : "text-[#F8F5EF]/80"
                }`}
              >
                Bảo Dưỡng Sức Khoẻ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 relative py-1 group focus:outline-none ${
                  isScrolled
                    ? "text-[#292624] hover:text-[#6E1F2A]"
                    : "text-[#F8F5EF] hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#6E1F2A]" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action (Desktop CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="#booking"
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-[#6E1F2A] text-[#F8F5EF] hover:bg-[#4A151D] shadow-sm hover:shadow"
                  : "bg-white/20 hover:bg-white text-white hover:text-[#4A151D] backdrop-blur-sm border border-white/30"
              }`}
            >
              Đặt Lịch
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isScrolled ? "text-[#292624]" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#292624]/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#F8F5EF] z-40 p-8 flex flex-col justify-between transition-transform duration-500 ease-out md:hidden shadow-2xl border-l border-[#EDE5DA] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="pt-20">
          <div className="mb-8 pb-6 border-b border-[#EDE5DA] flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#6E1F2A]/30 shadow-sm shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Logo OMI SPA"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-serif tracking-[0.2em] text-[#6E1F2A] font-medium">
                OMI SPA
              </p>
              <p className="text-[10px] tracking-[0.25em] text-[#75675F] uppercase mt-0.5">
                Bảo Dưỡng Sức Khoẻ
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base tracking-widest text-[#292624] hover:text-[#6E1F2A] uppercase font-medium py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#EDE5DA] space-y-4">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-3 text-sm text-[#75675F] hover:text-[#6E1F2A] transition-colors"
          >
            <Phone size={16} className="text-[#6E1F2A]" />
            <span>{businessInfo.displayPhone}</span>
          </a>

          <a
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#6E1F2A] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium hover:bg-[#4A151D] transition-colors"
          >
            <Calendar size={14} />
            <span>Đặt Lịch Hẹn</span>
          </a>
        </div>
      </div>
    </>
  );
}
