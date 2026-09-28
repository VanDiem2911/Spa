import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingCta from "@/components/layout/MobileFloatingCta";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesPinned from "@/components/sections/ServicesPinned";
import QuietMoment from "@/components/sections/QuietMoment";
import RealGallery from "@/components/sections/RealGallery";
import WhyOmi from "@/components/sections/WhyOmi";
import Booking from "@/components/sections/Booking";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F5EF] text-[#292624] overflow-x-hidden selection:bg-[#6E1F2A] selection:text-[#F8F5EF]">
      <Header />
      
      {/* SCENE 01 & 02: HERO - 100% REAL BANNER & LOGO EMBLEM */}
      <Hero />

      {/* SCENE 03: ABOUT / THE SPACE - REAL TREATMENT ROOM AT 159 BA VÂN */}
      <About />

      {/* SCENE 04: PINNED SERVICES SHOWCASE - 100% REAL TREATMENT PHOTOS */}
      <ServicesPinned />

      {/* SCENE 06: QUIET BREATHING MOMENT WITH REAL OMI SPA POSTER */}
      <QuietMoment />

      {/* SCENE 07: AUTHENTIC GALLERY FROM GOOGLE DRIVE */}
      <RealGallery />

      {/* SCENE 09: WHY OMI SPA (EDITORIAL ROW LAYOUT) */}
      <WhyOmi />

      {/* SCENE 10: DEEP BURGUNDY BOOKING SECTION */}
      <Booking />

      {/* SCENE 11: LOCATION & DIRECTIONS */}
      <LocationSection />

      {/* FOOTER & MOBILE STICKY CTA */}
      <Footer />
      <MobileFloatingCta />
    </main>
  );
}
