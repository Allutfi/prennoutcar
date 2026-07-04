"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: "edit_note",
    step: "STEP 01",
    title: "Online Application",
    description:
      "Fill out our secure digital form in under 5 minutes. No impact on your initial credit score for pre-approvals.",
  },
  {
    icon: "verified_user",
    step: "STEP 02",
    title: "Expert Review",
    description:
      "Our finance specialists negotiate with top-tier lenders to find the most competitive rates and terms for you.",
  },
  {
    icon: "key",
    step: "STEP 03",
    title: "Fast Approval",
    description:
      "Receive your approval within hours, sign digitally, and prepare for delivery of your new Prenn Out Car vehicle.",
  },
];

const delays = ["delay-0", "delay-200", "delay-400"] as const;

export default function FinanceSteps() {
  const [ref, visible] = useInView(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {steps.map((s, i) => (
        <div
          key={s.step}
          className={`bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm group hover:border-[#00356a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
            visible ? `animate-fade-up ${delays[i]}` : "opacity-0"
          }`}
        >
          <div className="w-16 h-16 bg-[#F4F6F9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#004b93]/10 group-hover:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined text-[#00356a] text-3xl">
              {s.icon}
            </span>
          </div>
          <span
            className="text-[#00356a] font-bold text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {s.step}
          </span>
          <h3
            className="text-[#0A192F] font-bold text-xl mt-2 mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {s.title}
          </h3>
          <p
            className="text-[#5E6E82] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {s.description}
          </p>
        </div>
      ))}
    </div>
  );
}
