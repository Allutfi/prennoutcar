"use client";

import { useInView } from "@/hooks/useInView";

const values = [
  {
    icon: "verified",
    title: "Certified Quality",
    desc: "Every vehicle undergoes a rigorous 150-point inspection before it hits our lot.",
  },
  {
    icon: "payments",
    title: "Market Pricing",
    desc: "Transparent, haggle-free pricing based on real-time market data analysis.",
  },
  {
    icon: "account_balance",
    title: "Easy Financing",
    desc: "Relationships with 30+ lenders to ensure you get the best rate possible.",
  },
  {
    icon: "support_agent",
    title: "VIP Support",
    desc: "Dedicated specialists available to assist you throughout your ownership.",
  },
];

const delays = ["delay-0", "delay-150", "delay-300", "delay-500"] as const;

export default function ValueBanner() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#011A35] py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center space-y-4 group ${
                visible ? `animate-fade-up ${delays[i]}` : "opacity-0"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#004b93] group-hover:scale-110 transition-all duration-300">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>
              <h4
                className="font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {item.title}
              </h4>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
