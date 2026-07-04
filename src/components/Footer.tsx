import Link from "next/link";

const quickLinks = [
  "Search Inventory",
  "Special Offers",
  "Finance Application",
  "Service & Parts",
  "About Prenn Out Car",
];

const hours = [
  { day: "Mon - Fri", time: "9:00 AM - 8:00 PM" },
  { day: "Saturday", time: "9:00 AM - 7:00 PM" },
  { day: "Sunday", time: "11:00 AM - 5:00 PM" },
];

const socialIcons = ["face_nod", "public", "chat"];

const legalLinks = ["PRIVACY POLICY", "TERMS OF SERVICE", "CAREERS"];

export default function Footer() {
  return (
    <footer className="bg-[#011A35] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {/* Brand column */}
        <div className="space-y-6">
          <Link href="/" aria-label="Prenn Out Car – home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-light.svg"
              alt="Prenn Out Car"
              width={160}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
          <p
            className="text-white/60 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Setting the standard for premium pre-owned automotive sales in Miami
            since 2004. Experience the Prenn Out Car difference today.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((icon) => (
              <button
                key={icon}
                aria-label={icon}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00356a] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h5
            className="font-bold text-lg uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Quick Links
          </h5>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-[#7fbafe] transition-colors"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5
            className="font-bold text-lg uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Contact Info
          </h5>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#7fbafe] shrink-0">
                location_on
              </span>
              <span
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                3450 SW 9th St,
                <br />
                Indonesia, Lumajang
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7fbafe]">call</span>
              <span
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                (62) 812-1873 
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7fbafe]">mail</span>
              <span
                className="text-white/60 text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                sales@prestigeauto.com
              </span>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div className="space-y-6">
          <h5
            className="font-bold text-lg uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Business Hours
          </h5>
          <ul className="space-y-2">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between text-white/60 text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-widest text-white/40 uppercase font-semibold">
          <p style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            © 2024 PRENN OUT CAR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {legalLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
