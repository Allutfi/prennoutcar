"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.pageYOffset;
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAz6X3i2tz4vak9v11HzGV2U0Jy3P5y_XN44COnM47Liel6iX31esZdmq9QLYaJsIhYpc__YhbZ66giBBhCBO1Qde2ksSk6kJ7R9wVzYJkiE9_i1Qr3wpEy6VqVvcQhdo2zTD1nTeBxYNukmlfwAmJLPptY8VLd7Cn-eg5V_ZVCb7dAxx6H8Kii6gSsDFz93_ZvE01sGnMzbfgLQMcvCtnQlmwm-VqftuKtamIYGbVelF4-E0j0oWJLmigijcxpHkp7oddHUmSiec')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <div className="max-w-2xl space-y-4">
          <span
            className="inline-block bg-[#004b93] px-4 py-1 text-white text-[10px] tracking-widest uppercase rounded-sm font-semibold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            QUALITY VEHICLES. PREMIUM EXPERIENCE.
          </span>
          <h1
            className="text-5xl md:text-6xl text-white uppercase leading-none font-bold"
            style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.01em" }}
          >
            DRIVE EXCELLENCE.
            <br />
            <span className="text-[#7fbafe]">DRIVE PRESTIGE.</span>
          </h1>
          <p className="text-white/80 max-w-lg text-base leading-relaxed">
            Discover Miami&apos;s most exclusive collection of premium pre-owned vehicles.
            Unmatched quality, transparent pricing, and a customer experience that redefines
            the luxury car buying journey.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-[#004b93] text-white text-[10px] tracking-widest uppercase font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-[#00356a] transition-all active:scale-95">
              BROWSE INVENTORY
            </button>
            <button className="border-2 border-white text-white text-[10px] tracking-widest uppercase font-semibold px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white hover:text-[#00356a] transition-all active:scale-95">
              GET PRE-APPROVED
            </button>
          </div>
        </div>
      </div>

      {/* Floating Search Bar */}
      <FloatingSearch />
    </section>
  );
}

function FloatingSearch() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-6 z-20">
      <div className="bg-[#011A35] rounded-xl p-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              label: "MAKE",
              options: ["All Makes", "Toyota", "Honda", "Ford", "BMW"],
            },
            { label: "MODEL", options: ["All Models"] },
            {
              label: "BODY STYLE",
              options: ["All Styles", "Sedan", "SUV", "Truck"],
            },
            {
              label: "MAX PRICE",
              options: ["Any Price", "$20,000", "$40,000", "$60,000+"],
            },
          ].map((field) => (
            <div key={field.label} className="space-y-1">
              <label
                className="text-white/60 text-[10px] tracking-widest uppercase font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {field.label}
              </label>
              <select className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#19619f] focus:outline-none cursor-pointer">
                {field.options.map((opt) => (
                  <option key={opt} className="text-[#191c20] bg-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className="flex items-end">
            <button className="w-full h-[42px] bg-[#004b93] text-white text-[10px] tracking-widest uppercase font-semibold rounded-lg hover:bg-[#00356a] transition-all flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[18px]">search</span>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
