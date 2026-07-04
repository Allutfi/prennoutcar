"use client";

import { useEffect, useRef } from "react";
import RemoteImage from "@/components/RemoteImage";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.pageYOffset;
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-105"
        style={{ willChange: "transform" }}
      >
        <RemoteImage
          src="https://i.pinimg.com/1200x/b2/22/27/b22227dca515ef4dce19f1f3b3937691.jpg"
          alt="Premium luxury car showroom"
          fill
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Hero content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start w-full">
        <div className="w-full max-w-3xl space-y-5">
          <span
            className="inline-block bg-[#004b93] px-4 py-1 text-white text-[10px] tracking-widest uppercase font-semibold rounded-sm animate-fade-in delay-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            QUALITY VEHICLES. PREMIUM EXPERIENCE.
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl text-white uppercase font-bold leading-[1.1] animate-fade-up delay-300"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            DRIVE EXCELLENCE.
            <br />
            <span className="text-[#7fbafe]">DRIVE PRESTIGE.</span>
          </h1>

          <p
            className="text-white/80 text-base leading-relaxed max-w-[480px] animate-fade-up delay-500"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Discover Miami&apos;s most exclusive collection of premium pre-owned
            vehicles. Unmatched quality, transparent pricing, and a customer
            experience that redefines the luxury car buying journey.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 animate-fade-up delay-700">
            <button
              className="bg-[#004b93] text-white text-[10px] tracking-widest uppercase font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-[#00356a] hover:scale-105 transition-all active:scale-95"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              BROWSE INVENTORY
            </button>
            <button
              className="border-2 border-white text-white text-[10px] tracking-widest uppercase font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white hover:text-[#00356a] hover:scale-105 transition-all active:scale-95"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              GET PRE-APPROVED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
