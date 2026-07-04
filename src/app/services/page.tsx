import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Maintenance | Prenn Out Car",
  description:
    "Maintain peak performance and preserve the value of your luxury vehicle with our factory-certified technicians and genuine OEM components.",
};

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

const standards = [
  {
    icon: "verified",
    title: "Master Technicians",
    description:
      "Our team undergoes over 200 hours of specialized training annually to stay current with the latest luxury automotive engineering.",
  },
  {
    icon: "token",
    title: "Genuine OEM Parts",
    description:
      "We use exclusively original manufacturer components, ensuring perfect fitment and preserving your vehicle's factory warranty.",
  },
  {
    icon: "directions_car",
    title: "Concierge & Loaners",
    description:
      "Stay mobile with our fleet of current-model luxury loaners or utilize our professional valet pickup and delivery service.",
  },
];

const specials = [
  {
    title: "Spring Refresh Package",
    subtitle: "Oil Change, Cabin Filter, Multi-point Insp.",
    price: "$199",
    tag: "ENDS MAY 31",
  },
  {
    title: "Performance Alignment",
    subtitle: "Laser-guided 4-wheel synchronization.",
    price: "15% OFF",
    tag: "VALET INCL.",
  },
];

export default function ServicesPage() {
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
              <span className="text-white font-medium">Services</span>
            </nav>
            <h1
              className="text-white font-bold text-3xl md:text-4xl uppercase"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Service &amp; Maintenance
            </h1>
            <p
              className="text-white/60 mt-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Factory-certified technicians and genuine OEM components.
            </p>
          </div>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative h-[560px] overflow-hidden bg-[#011A35]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-[2px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkPbCtluKsSkcZKXFBVXl8yX2WUB18cM8K5eLk6mTbtO5VbhqHOEmfGxyoN12iUBvmP0hab7L7-Fe6TeoABt-Q0onPi2RZ1OkNS_N2f0tTsj7J_mbT6D1zWgxwl15L0sG8NsPY8R2XQuwFyLFzvCLiaLyykNH8ocKG2xE1Es5cSVcdMFRmRdSGAaohLQJZeTCruP-FYbKXWhbPt7qB7w3LhnsPRNreccVGYMgvCDd94drjqV4ZBQ0XYQ')",
            }}
          />
          <div className="absolute inset-0 bg-[#011A35]/60" />

          {/* Content pinned via absolute so it never participates in flex sizing */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 w-full" style={{ maxWidth: "56rem" }}>
              <span
                className="inline-block bg-[#7fbafe]/20 text-[#9fcaff] px-6 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold mb-6 border border-[#9fcaff]/30 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Premium Automotive Care
              </span>
              <h2
                className="text-white font-bold text-4xl md:text-5xl uppercase mb-6 leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Expert Care for Your Luxury Vehicle
              </h2>
              <p
                className="text-white/80 text-base mb-10 leading-relaxed mx-auto"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  maxWidth: "40rem",
                }}
              >
                Maintain peak performance and preserve the value of your
                masterpiece with our factory-certified technicians and genuine
                OEM components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#schedule"
                  className="bg-[#00356a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#004b93] transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Schedule Service
                  <span className="material-symbols-outlined text-[20px]">
                    calendar_today
                  </span>
                </a>
                <a
                  href="#specials"
                  className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#00356a] transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  View Specials
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Menu Grid ── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2
                className="text-[#0A192F] font-bold text-3xl md:text-4xl mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Comprehensive Service Menu
              </h2>
              <div className="w-20 h-1.5 bg-[#00356a] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceMenu.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0] flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#004b93] group"
                >
                  <div className="w-12 h-12 bg-[#ededf4] flex items-center justify-center rounded-lg text-[#00356a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-[#004b93]">
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
          </div>
        </section>

        {/* ── Prestige Standard + Specials ── */}
        <section className="bg-[#F4F6F9] py-20 px-6" id="specials">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Why Choose Us */}
            <div>
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl mb-10"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                The Prenn Out Car Standard
              </h2>
              <div className="space-y-8">
                {standards.map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="bg-[#004b93] p-2 rounded-lg shrink-0">
                      <span className="material-symbols-outlined text-[#96bdff]">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-[#0A192F] font-bold text-lg mb-1"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-[#424751] text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specials */}
            <div
              className="bg-[#011A35] p-10 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span
                      className="text-[#9fcaff] text-[10px] tracking-widest uppercase font-semibold"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Seasonal Offers
                    </span>
                    <h2
                      className="text-white font-bold text-2xl md:text-3xl mt-2"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      Current Service Specials
                    </h2>
                  </div>
                  <span className="material-symbols-outlined text-[#9fcaff] text-3xl shrink-0">
                    loyalty
                  </span>
                </div>

                <div className="space-y-4">
                  {specials.map((s) => (
                    <div
                      key={s.title}
                      className="bg-white/10 p-6 rounded-xl border border-white/10 flex justify-between items-center hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <div>
                        <h5
                          className="font-bold text-base"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {s.title}
                        </h5>
                        <p
                          className="text-white/60 text-sm italic"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {s.subtitle}
                        </p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p
                          className="text-[#9fcaff] font-bold text-2xl"
                          style={{
                            fontFamily: "var(--font-montserrat), sans-serif",
                          }}
                        >
                          {s.price}
                        </p>
                        <p
                          className="text-white/40 text-[10px] tracking-widest uppercase"
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                          }}
                        >
                          {s.tag}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full mt-8 bg-[#d2e4ff] text-[#001d36] py-4 rounded-lg font-bold hover:bg-white transition-all uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Redeem Offer Now
                </button>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00356a] opacity-20 blur-3xl rounded-full pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ── Schedule Appointment Form ── */}
        <section className="py-20 px-6 bg-white" id="schedule">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Schedule Your Appointment
              </h2>
              <p
                className="text-[#424751] mt-2"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Select your preferred date and time. Our advisors will confirm
                within 1 business hour.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md border border-[#E2E8F0] p-10 rounded-2xl shadow-xl">
              {/* Left column */}
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Vehicle Year / Make / Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024 Prenn Out Car Model S"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Requested Service
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none cursor-pointer transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <option>Select Service Type</option>
                    <option>Oil &amp; Filter Change</option>
                    <option>Brake Inspection/Repair</option>
                    <option>Tire Service</option>
                    <option>Engine/Mechanical</option>
                    <option>Collision Repair</option>
                    <option>Detailing Services</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none transition-all"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none transition-all"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[#00356a] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about any specific concerns..."
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F4F6F9] text-sm focus:ring-2 focus:ring-[#19619f] outline-none resize-none transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00356a] py-4 rounded-lg text-white font-bold text-lg hover:bg-[#004b93] transition-all active:scale-[0.98]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
