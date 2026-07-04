"use client";

import { useInView } from "@/hooks/useInView";

const serviceMenu = [
  {
    icon: "oil_barrel",
    title: "Synthetic Oil Change",
    description:
      "Premium synthetic fluids and OEM filters designed to maximize engine longevity and thermal efficiency.",
    price: "From $129.99",
  },
  {
    icon: "settings_input_component",
    title: "Brake System",
    description:
      "Full inspection of rotors, pads, and hydraulic lines. Precision calibration for responsive stopping power.",
    price: "Inquiry Only",
  },
  {
    icon: "tire_repair",
    title: "Tire Service",
    description:
      "Precision balancing and rotation to ensure even wear patterns and optimal road handling dynamics.",
    price: "From $59.99",
  },
  {
    icon: "biotech",
    title: "Diagnostics",
    description:
      "Advanced computer analysis utilizing the latest manufacturer software to identify and rectify fault codes.",
    price: "Complimentary",
  },
];

const delays = ["delay-0", "delay-150", "delay-300", "delay-500"] as const;

export default function ServiceCards() {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {serviceMenu.map((service, i) => (
        <div
          key={service.title}
          className={`bg-white p-6 rounded-xl border border-[#E2E8F0] flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#004b93] group ${
            visible ? `animate-fade-up ${delays[i]}` : "opacity-0"
          }`}
        >
          <div className="w-12 h-12 bg-[#ededf4] flex items-center justify-center rounded-lg text-[#00356a] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#004b93]/10 group-hover:text-[#004b93]">
            <span className="material-symbols-outlined text-3xl">
              {service.icon}
            </span>
          </div>
          <h3
            className="text-[#00356a] font-bold text-lg"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {service.title}
          </h3>
          <p
            className="text-[#424751] text-sm leading-relaxed flex-grow"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {service.description}
          </p>
          <div className="pt-4 border-t border-[#E2E8F0] flex justify-between items-center">
            <span
              className="text-[#00356a] font-bold text-sm"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {service.price}
            </span>
            <button
              className="text-[#19619f] font-semibold flex items-center gap-1 text-xs tracking-widest uppercase hover:text-[#00356a] transition-colors"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              DETAILS
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
