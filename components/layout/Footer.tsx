import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, navLinks } from "@/lib/data";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#292624] text-[#F8F5EF] pt-20 pb-28 md:pb-16 border-t border-[#4A151D]/30 relative overflow-hidden">
      {/* Background large brand watermark */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none text-[16vw] font-serif text-[#F8F5EF]/[0.02] leading-none translate-x-12 translate-y-12"
        aria-hidden="true"
      >
        OMI
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F8F5EF]/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <Link href="#hero" className="inline-flex items-center gap-3.5 group focus:outline-none">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#EDE5DA]/20 shadow-md shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo OMI SPA"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-[#F8F5EF] font-medium block">
                  OMI SPA
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#EDE5DA]/60 mt-0.5 block">
                  Bảo Dưỡng Sức Khoẻ
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#EDE5DA]/70 font-light leading-relaxed max-w-sm">
              Không gian yên tĩnh, sạch sẽ, cùng đội ngũ kỹ thuật viên tay nghề cao giúp giải tỏa căng thẳng và chăm sóc sức khỏe toàn diện.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#EDE5DA]/80 hover:text-white flex items-center gap-1.5 transition-colors border-b border-[#EDE5DA]/30 pb-0.5"
              >
                <span>Facebook OMI SPA</span>
                <ExternalLink size={12} />
              </a>
              <span className="text-[#EDE5DA]/20">/</span>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#EDE5DA]/80 hover:text-white flex items-center gap-1.5 transition-colors border-b border-[#EDE5DA]/30 pb-0.5"
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6E1F2A] bg-[#F8F5EF] inline-block px-2 py-0.5 font-medium">
              Khám Phá
            </p>
            <ul className="space-y-3 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#EDE5DA]/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6E1F2A] bg-[#F8F5EF] inline-block px-2 py-0.5 font-medium">
              Thông Tin
            </p>
            <div className="space-y-3.5 pt-2 text-sm text-[#EDE5DA]/75 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#6E1F2A] shrink-0 mt-1" />
                <span>{businessInfo.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#6E1F2A] shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {businessInfo.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#6E1F2A] shrink-0" />
                <span>
                  {businessInfo.openingHours} ({businessInfo.openingDays})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDE5DA]/40 gap-4">
          <p>© 2026 {businessInfo.name} - {businessInfo.tagline}. Bảo lưu mọi quyền.</p>
          <p className="tracking-widest uppercase text-[10px]">
            159 Ba Vân, P.14, Q. Tân Bình, TP. HCM
          </p>
        </div>
      </div>
    </footer>
  );
}
