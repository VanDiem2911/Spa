"use client";

import React from "react";
import { businessInfo } from "@/lib/data";
import { Phone, Calendar } from "lucide-react";

export default function MobileFloatingCta() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F8F5EF]/95 backdrop-blur-md border-t border-[#EDE5DA] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
      aria-label="Thao tác nhanh trên di động"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#EDE5DA] text-[#292624] text-xs font-medium uppercase tracking-wider active:scale-[0.98] transition-transform"
        >
          <Phone size={14} className="text-[#6E1F2A]" />
          <span>Gọi Ngay</span>
        </a>
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#6E1F2A] text-[#F8F5EF] text-xs font-medium uppercase tracking-wider shadow-sm active:scale-[0.98] transition-transform"
        >
          <Calendar size={14} />
          <span>Đặt Lịch</span>
        </a>
      </div>
    </aside>
  );
}
