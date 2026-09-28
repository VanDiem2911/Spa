"use client";

import React from "react";
import { businessInfo } from "@/lib/data";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-28 md:py-36 bg-[#F8F5EF] text-[#292624] relative overflow-hidden border-t border-[#EDE5DA]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#6E1F2A]">
                  05 / VỊ TRÍ
                </span>
                <span className="w-10 h-[1px] bg-[#EDE5DA]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-[#292624] font-normal leading-tight">
                Ghé Thăm OMI SPA
              </h2>
              <p className="text-sm md:text-base text-[#75675F] font-light leading-relaxed pt-2">
                Tọa lạc tại tuyến đường Ba Vân yên tĩnh thuộc Quận Tân Bình, thuận tiện di chuyển từ các khu vực lân cận để bạn nghỉ ngơi sau giờ làm.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4 pt-4 border-t border-[#EDE5DA] text-sm text-[#292624]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#6E1F2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Địa chỉ cơ sở:</strong>
                  <span className="text-[#75675F]">{businessInfo.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#6E1F2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Khung giờ đón khách:</strong>
                  <span className="text-[#75675F]">
                    {businessInfo.openingHours} ({businessInfo.openingDays})
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#6E1F2A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium">Hotline tư vấn:</strong>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-[#6E1F2A] hover:underline font-medium tracking-wide"
                  >
                    {businessInfo.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps External CTA */}
            <div className="pt-2">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#292624] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium hover:bg-[#6E1F2A] transition-all shadow-md group"
              >
                <Navigation size={14} className="group-hover:translate-x-0.5 transition-transform" />
                <span>Mở Chỉ Đường Google Maps</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Map Embed / Visual Card */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[400px] md:h-[480px] rounded-sm overflow-hidden border border-[#EDE5DA] shadow-xl bg-[#EDE5DA]/30">
              <iframe
                title="Vị trí OMI SPA trên Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.227244463421!2d106.64332857485721!3d10.793896589356125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec30d517d7b%3A0xe543e3ffbeea9171!2zMTU5IEJhIFbDom4sIFBoxrDhu51uZyAxNCwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711600000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-[1.05] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              {/* Map Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-sm shadow-md border border-[#EDE5DA] text-xs">
                <span className="font-serif font-bold text-[#6E1F2A] block">OMI SPA</span>
                <span className="text-[#75675F] text-[11px]">159 Ba Vân, P.14, Q. Tân Bình</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
