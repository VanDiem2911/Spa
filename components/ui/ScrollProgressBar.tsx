"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const percent = (scrollTop / scrollHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, percent)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top thin line */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#6E1F2A] z-50 pointer-events-none transition-all duration-75 ease-out"
        style={{ width: `${scrollPercent}%` }}
        aria-hidden="true"
      />
      {/* Vertical right side subtle indicator */}
      <div
        className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 pointer-events-none opacity-40 hover:opacity-100 transition-opacity"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest font-mono text-[#75675F]">
          {Math.round(scrollPercent).toString().padStart(2, "0")}%
        </span>
        <div className="w-[1px] h-16 bg-[#EDE5DA] relative overflow-hidden">
          <div
            className="w-full bg-[#6E1F2A] transition-all duration-75 ease-out"
            style={{ height: `${scrollPercent}%` }}
          />
        </div>
      </div>
    </>
  );
}
