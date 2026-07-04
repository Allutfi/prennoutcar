import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import RemoteImage from "@/components/RemoteImage";
import TeamGrid from "@/components/TeamGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prenn Out Car",
  description:
    "For nearly three decades, Prenn Out Car has defined the pinnacle of automotive luxury.",
};

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW1xcW_PvGaqi1aXOnR8lBOYSMBAeRxDenB8uBqzJMZinathoCAuO4YP8j8torrLdbCWhNbQ7NcPLLQ_9yeaDI5k0J1HVYiYTVrmnO27uJXZEwTS2ArnXWanVuVpu7FzRq4-0RxrOQbeAIT-NK94vWF3_l66XLcmjpoKeXNlZLdDwaq5-vw1ScLIJTaOHS3UpNm8srAdwF8LkN4ns1GW3gqJqlKBkIwWAcTyGXqpe8Sg0pMvn1owgoEA",
    label: "Main Atrium",
    colSpan: "md:col-span-8",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrVmZ1E9JswnDgFdylb9nkI6yX7QAQcWriui8Cn8dV4ecy5b9rdiMqEfrtsYaMoCY2mMaT7OyZTneC7rPbIL5WWgFMhEteSMbPUOOCKV4h6QMMdwUOG6ECR31cRquC0TUXNiyGQZc1OSy1oUYSyALUrxzb7AYRAb8IJVxnEU1KxgScOnsXiXOjjpOh96JTMTFuOtRCFvB3ab6YIrTAdIB4BpDUTupI-DXrTw-GRyPAbLBKInJ-a0dUmQ",
    label: "Precision Interiors",
    colSpan: "md:col-span-4",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdFyvonEbVNpoIBegNfrHSvFozRJK5ApIocPO-NgonzZ3mcZRNr0ZLqhuxUQKmlTFlQd09lBImco7EkE0P8_v1vvWsXaqe1aZ2G_td0xaDv7Z24BdcyBd1dFLMZjNVqc-6mUqkWUqEGUMhhemWJpVhphC6Dz420NKMbc7CLi85z6vNn13aRjCKpm2LfjRvVZlFkLx8HDuNcnNay7QL8xqc5ff8Z1smN-CNpZGbIsWB2qSMIGI8_C68GQ",
    label: "Flagship Exterior",
    colSpan: "md:col-span-4",
  },
];

export default function AboutPage() {
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
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-white font-medium">About Us</span>
            </nav>
            <h1
              className="text-white font-bold text-3xl md:text-4xl uppercase"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", letterSpacing: "-0.01em" }}
            >
              About Us
            </h1>
            <p
              className="text-white/60 mt-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Nearly three decades of automotive excellence.
            </p>
          </div>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative h-[600px] overflow-hidden bg-[#011A35]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdbJ2VQGm6JYa9PIjc-_cHFwCfwIHU-4T4duUvFD7BjAtrl_qy_Ob98Wm1VX_JfUwakIc1X3iS3PqSwIQN1qfcqW0PjEGqZF6F2x11G0VMaK2uAkwja7e4uL2h2PqL3N3YLPaFq-HzVe6pmQEeO1XPP_Ba_IK41hL8jMUhj3hqOjVPctu6RGZbs-OLNvlimlFvkEocHhZrymWNJUe2FKRCeEZWY4jFochHhAfrcxqU6AvkQ-gZtOpfmg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011A35] via-[#011A35]/40 to-transparent" />

          {/* absolute content — avoids flex-child shrink-to-fit */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div style={{ maxWidth: "48rem" }}>
                <span
                  className="text-[#9fcaff] text-[10px] tracking-widest uppercase font-semibold mb-4 block animate-fade-in delay-200"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Established 1995
                </span>
                <h2
                  className="text-white font-bold text-4xl md:text-5xl uppercase mb-6 leading-tight animate-fade-up delay-300"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Our Legacy of{" "}
                  <span className="text-[#d2e4ff]">Excellence</span>
                </h2>
                <p
                  className="text-white/80 text-base mb-8 leading-relaxed animate-fade-up delay-500"
                  style={{ fontFamily: "var(--font-inter), sans-serif", maxWidth: "38rem" }}
                >
                  For nearly three decades, Prenn Out Car has defined the pinnacle of
                  automotive luxury. We don&apos;t just sell cars; we curate masterpieces of
                  engineering for the world&apos;s most discerning drivers.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-up delay-700">
                  <button
                    className="bg-[#00356a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#004b93] transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Explore Heritage
                  </button>
                  <button
                    className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    View Showroom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Brand Story ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative animate-slide-right delay-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
                <RemoteImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHa4FUnM42kljwco69xYGwuo-HGzzz_2pUIF2XXr_kJLgK92tIQXDxTs_PsxSPdkbTsQraZqAL6qqbJ5Es3HqwuJOO4TdvaqbZ9bFJzzg5u2fV4I8Cf-rpFwGZQ67xDJJ3a8im8jLSsLnfQbDo14pPD42G2nPWIkwoZz5OYP3_wxRHar1ketCXU6N8OTYMQp9tIQHh8GcYWF-YKCPeFnHgYXO3SD60JmworjmyfznFCdzEUuf5JvFBBQ"
                  alt="Founder of Prenn Out Car"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d6e3ff] -z-10 rounded-xl" />
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-[#E2E8F0] p-6 rounded-xl shadow-xl hidden lg:block" style={{ maxWidth: "16rem" }}>
                <p
                  className="text-[#00356a] font-bold text-2xl mb-1"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  29 Years
                </p>
                <p
                  className="text-[#424751] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Of unwavering dedication to performance and automotive perfection.
                </p>
              </div>
            </div>

            {/* Text side */}
            <div className="space-y-6 animate-slide-left delay-200">
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl uppercase"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Founded on Principles
              </h2>
              <div className="w-20 h-1 bg-[#19619f] rounded-full" />
              <p
                className="text-[#424751] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Founded in 1995, Prenn Out Car began with a singular vision: to bridge the gap
                between world-class engineering and a bespoke client experience. What started as a
                boutique showroom has evolved into a global benchmark for automotive luxury.
              </p>
              <p
                className="text-[#424751] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Our commitment to luxury transcends the vehicles on our floor. It resides in the
                precision of our service, the transparency of our financing, and the lifelong
                relationships we build with our community of owners.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-[#19619f] pl-4">
                  <span
                    className="block text-[#00356a] font-bold text-2xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    500+
                  </span>
                  <span
                    className="text-[#424751] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Curated Vehicles
                  </span>
                </div>
                <div className="border-l-4 border-[#19619f] pl-4">
                  <span
                    className="block text-[#00356a] font-bold text-2xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    12k
                  </span>
                  <span
                    className="text-[#424751] text-[10px] tracking-widest uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Loyal Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-20 px-6 bg-[#F4F6F9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14" style={{ maxWidth: "40rem", margin: "0 auto 3.5rem" }}>
              <h2
                className="text-[#00356a] font-bold text-3xl md:text-4xl uppercase mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Our Core Values
              </h2>
              <p
                className="text-[#424751] text-base"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                The driving force behind every decision we make and every car we curate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Value 1 — wide */}
              <div className="md:col-span-8 bg-[#00356a] rounded-xl p-10 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-6 block">verified</span>
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Uncompromising Integrity
                  </h3>
                  <p
                    className="text-white/80 text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif", maxWidth: "32rem" }}
                  >
                    Transparency is the engine of our business. We provide comprehensive history and
                    mechanical verification for every vehicle, ensuring absolute peace of mind for our
                    clients.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
                  <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
              </div>

              {/* Value 2 */}
              <div className="md:col-span-4 bg-white border border-[#E2E8F0] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="material-symbols-outlined text-[#19619f] text-3xl mb-4 block">
                  precision_manufacturing
                </span>
                <h3
                  className="text-[#00356a] font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Precision
                </h3>
                <p
                  className="text-[#424751] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Every detail matters. From the stitch on the leather to the hum of the engine, we
                  demand perfection.
                </p>
              </div>

              {/* Value 3 */}
              <div className="md:col-span-4 bg-white border border-[#E2E8F0] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="material-symbols-outlined text-[#19619f] text-3xl mb-4 block">
                  groups
                </span>
                <h3
                  className="text-[#00356a] font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Community
                </h3>
                <p
                  className="text-[#424751] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  We foster a global network of enthusiasts, hosting exclusive drives and private
                  collection viewings.
                </p>
              </div>

              {/* Value 4 — wide */}
              <div className="md:col-span-8 bg-[#d2e4ff] rounded-xl p-10 relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3
                      className="text-[#001d36] font-bold text-xl mb-3"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      Future Forward
                    </h3>
                    <p
                      className="text-[#001d36]/80 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Embracing the next era of mobility through high-performance electric vehicles
                      and sustainable luxury innovations.
                    </p>
                  </div>
                  <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden border border-[#001d36]/20 relative">
                    <RemoteImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGwjGcomV0syDKcZ9vYPit7Ijjovr0ppakSIWfidaYbBXMIHEk8sBjoHHy2EuLu_ZhDo1qGaJ2EO_CY-S78uwQpUFjWzAUcL5VPLIk8TAqjUiu3tPTPAO-XMGPqr7miOToM6Zje2i19CFJdsRTF1Jjv8_Wono213Fzn7F-FmgT14_JhR6om6roAj0RmQgxg3ZNb1G-mlQq_wBvkdvRhn9S0Za-XYprC8h4ztqkiPj1nwh4w4EiZHBg3Q"
                      alt="Electric vehicle charging station"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Leadership Team ── */}
        <section className="py-20 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div style={{ maxWidth: "36rem" }}>
                <h2
                  className="text-[#00356a] font-bold text-3xl md:text-4xl uppercase mb-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  The Visionaries
                </h2>
                <p
                  className="text-[#424751] text-base"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Led by industry veterans with a combined century of experience in high-performance
                  automotive markets.
                </p>
              </div>
              <button
                className="text-[#00356a] font-bold flex items-center gap-2 group shrink-0 hover:text-[#004b93] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Join Our Team
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>

            <TeamGrid />
          </div>
        </section>

        {/* ── Showroom Gallery ── */}
        <section className="py-20 px-6 bg-[#011A35] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2
                className="text-white font-bold text-3xl md:text-4xl uppercase"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                The Prenn Out Car Showroom
              </h2>
              <p
                className="text-white/60 mt-2"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                A space designed to honor the artistry of the automobile.
              </p>
            </div>

            {/* Grid: main image col-8, two stacked col-4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
              {/* Main large image */}
              <div className="md:col-span-8 h-64 md:h-full rounded-xl overflow-hidden relative group">
                <RemoteImage
                  src="https://i.pinimg.com/736x/c0/09/1c/c0091c91a8fe1863da631222e741312b.jpg"
                  alt={galleryImages[0].label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p
                    className="font-bold text-xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {galleryImages[0].label}
                  </p>
                </div>
              </div>

              {/* Two stacked smaller images */}
              <div className="md:col-span-4 grid grid-rows-2 gap-4 h-64 md:h-full">
                {galleryImages.slice(1).map((img) => (
                  <div key={img.label} className="rounded-xl overflow-hidden relative group">
                    <RemoteImage
                      src="https://i.pinimg.com/736x/c4/bc/d5/c4bcd537659f70128d102d09b36b98e8.jpg"
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p
                        className="text-base font-semibold"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {img.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
