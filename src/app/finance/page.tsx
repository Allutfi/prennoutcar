import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinanceCalculator from "@/components/FinanceCalculator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance | Prenn Out Car",
  description:
    "Secure your dream vehicle with our bespoke financing solutions. Competitive rates, flexible terms, and a seamless digital application process.",
};

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

const faqs = [
  {
    question: "What are the typical interest rates?",
    answer:
      "Interest rates vary based on current market conditions, your credit profile, and the vehicle chosen. Currently, our well-qualified buyers see rates as low as 3.9% APR.",
  },
  {
    question: "Can I finance a vehicle with poor credit?",
    answer:
      "Yes, we work with a wide network of lenders who specialize in various credit backgrounds. Our specialists will work diligently to find a solution that fits your financial situation.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applications submitted during business hours receive a preliminary response within 60 minutes. Final approval typically takes 4–24 hours depending on documentation requirements.",
  },
  {
    question: "Is a down payment required?",
    answer:
      "While zero-down options are available for exceptionally well-qualified buyers, we generally recommend a 10–20% down payment to secure the most favorable interest rates and monthly terms.",
  },
];

export default function FinancePage() {
  return (
    <>
      <UtilityBar />
      <Navbar />

      <main>
        {/* ── Page Header Strip ── */}
        <div className="bg-[#011A35] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/50 text-sm mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-white font-medium">Finance</span>
            </nav>
            <h1
              className="text-white font-bold text-3xl md:text-4xl uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Financing Made Simple
            </h1>
            <p
              className="text-white/60 mt-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Bespoke financing solutions tailored for the modern driver.
            </p>
          </div>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative h-[560px] overflow-hidden bg-[#011A35]">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9fyO8Na9Wv4XlcJ4c1eEgSSuFqR9eev4F9iYzDtY-JLsrqKloxCd1h6keyQk2tuyOZNyQpLGjRyINwuorczS8Cq873KO9OTtnnxb4yt3MlT6VaCSwpbZme3yGxmj5NmI3jcP7yYYPczyZ5NFi8gSfMczrX8SgjOh-g4X1FKQPBchPJAaXaJ8iGCsKHlI50afy4yWTvNbZCkSzCou6K9u7DEpsB3hZD1w5xAkUv7GirtjFHqBvV_zdSA')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011A35] via-[#011A35]/80 to-transparent" />

          {/* Content — absolute so it never participates in flex sizing */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div style={{ maxWidth: "42rem" }}>
                <span
                  className="text-[#9fcaff] text-[10px] tracking-widest uppercase font-semibold mb-4 block"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Premium Automotive Finance
                </span>
                <h2
                  className="text-white font-bold text-4xl md:text-5xl uppercase mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Drive Your Dream,{" "}
                  <span className="text-[#7fbafe]">On Your Terms</span>
                </h2>
                <p
                  className="text-white/80 text-base mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Secure your dream vehicle with our bespoke financing solutions.
                  Competitive rates, flexible terms, and a seamless digital
                  application process tailored for the modern driver.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#apply"
                    className="bg-[#00356a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#004b93] transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Start Your Application
                  </a>
                  <a
                    href="#calculator"
                    className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Calculate Monthly Payment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3-Step Process ── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                The Prenn Out Car Path to Ownership
              </h2>
              <p
                className="text-[#5E6E82] text-base"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Three simple steps to secure your automotive investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm group hover:border-[#00356a] transition-all"
                >
                  <div className="w-16 h-16 bg-[#F4F6F9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#004b93]/10 transition-all">
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
          </div>
        </section>

        {/* ── Finance Calculator (Client Component) ── */}
        <section
          id="calculator"
          className="bg-[#011A35] py-20 px-6 overflow-hidden relative"
        >
          <div className="absolute -right-20 top-20 w-96 h-96 bg-[#00356a] opacity-20 blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <FinanceCalculator />
          </div>
        </section>

        {/* ── Credit Application Form ── */}
        <section id="apply" className="py-20 px-6 bg-[#F4F6F9]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
              {/* Form header */}
              <div className="bg-[#00356a] p-8 text-center">
                <h2
                  className="text-white font-bold text-3xl mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Credit Application
                </h2>
                <p
                  className="text-white/80 text-base"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Secure SSL Encrypted Application Portal
                </p>
              </div>

              <form className="p-8 md:p-12 space-y-10">
                {/* Personal Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3">
                    <span className="material-symbols-outlined text-[#00356a]">
                      person
                    </span>
                    <h3
                      className="text-[#00356a] font-bold text-xl"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Personal Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "First Name", type: "text" },
                      { label: "Last Name", type: "text" },
                      { label: "Email Address", type: "email" },
                      { label: "Phone Number", type: "tel" },
                    ].map((field) => (
                      <div key={field.label} className="space-y-2">
                        <label
                          className="block font-semibold text-sm text-[#0A192F]"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 bg-[#F4F6F9] border border-[#E2E8F0] rounded-lg text-sm focus:ring-2 focus:ring-[#00356a] focus:border-transparent outline-none transition-all"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Employment */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3">
                    <span className="material-symbols-outlined text-[#00356a]">
                      work
                    </span>
                    <h3
                      className="text-[#00356a] font-bold text-xl"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Employment Status
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Employer Name", type: "text" },
                      { label: "Job Title", type: "text" },
                    ].map((field) => (
                      <div key={field.label} className="space-y-2">
                        <label
                          className="block font-semibold text-sm text-[#0A192F]"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 bg-[#F4F6F9] border border-[#E2E8F0] rounded-lg text-sm focus:ring-2 focus:ring-[#00356a] focus:border-transparent outline-none transition-all"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        />
                      </div>
                    ))}
                    <div className="space-y-2">
                      <label
                        className="block font-semibold text-sm text-[#0A192F]"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Years at Current Job
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-[#F4F6F9] border border-[#E2E8F0] rounded-lg text-sm focus:ring-2 focus:ring-[#00356a] focus:border-transparent outline-none transition-all cursor-pointer"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        <option>Less than 1 year</option>
                        <option>1–3 years</option>
                        <option>3–5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Financials */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3">
                    <span className="material-symbols-outlined text-[#00356a]">
                      account_balance_wallet
                    </span>
                    <h3
                      className="text-[#00356a] font-bold text-xl"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Financial Details
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className="block font-semibold text-sm text-[#0A192F]"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Gross Monthly Income
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5E6E82]">
                          $
                        </span>
                        <input
                          type="number"
                          className="w-full pl-8 pr-4 py-3 bg-[#F4F6F9] border border-[#E2E8F0] rounded-lg text-sm focus:ring-2 focus:ring-[#00356a] focus:border-transparent outline-none transition-all"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block font-semibold text-sm text-[#0A192F]"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Housing Status
                      </label>
                      <select
                        className="w-full px-4 py-3 bg-[#F4F6F9] border border-[#E2E8F0] rounded-lg text-sm focus:ring-2 focus:ring-[#00356a] focus:border-transparent outline-none transition-all cursor-pointer"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        <option>Own</option>
                        <option>Rent</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-[#c2c6d2] text-[#00356a] focus:ring-[#00356a] shrink-0"
                  />
                  <span
                    className="text-[#5E6E82] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    I hereby certify that the information provided is true and
                    correct to the best of my knowledge. I authorize Prenn Out Car
                    to perform a credit check as part of this
                    application process.{" "}
                    <a
                      href="#"
                      className="text-[#00356a] font-bold underline hover:text-[#004b93]"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#00356a] text-white py-4 rounded-lg font-bold hover:bg-[#004b93] shadow-xl transition-all active:scale-[0.99]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Submit Secure Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Financing FAQ
              </h2>
              <p
                className="text-[#5E6E82] text-base"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Everything you need to know about Prenn Out Car
                financing.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white border border-[#E2E8F0] rounded-xl"
                >
                  <summary
                    className="flex justify-between items-center p-6 cursor-pointer list-none"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <span className="font-bold text-[#00356a] pr-4">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#00356a] shrink-0 group-open:rotate-180 transition-transform duration-200">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 border-t border-[#E2E8F0]">
                    <p
                      className="text-[#5E6E82] text-sm leading-relaxed pt-4"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
