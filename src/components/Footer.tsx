const quickLinks = [
  "Search Inventory",
  "Special Offers",
  "Finance Application",
  "Service & Parts",
  "About Prestige",
];

const hours = [
  { day: "Mon - Fri", time: "9:00 AM - 8:00 PM" },
  { day: "Saturday", time: "9:00 AM - 7:00 PM" },
  { day: "Sunday", time: "11:00 AM - 5:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-[#011A35] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xs">
              PA
            </div>
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              PRESTIGE
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Setting the standard for premium pre-owned automotive sales in Miami since 2004.
            Experience the Prestige difference today.
          </p>
          <div className="flex gap-4">
            {["face_nod", "public", "chat"].map((icon) => (
              <button
                key={icon}
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
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Quick Links
          </h5>
          <ul className="space-y-2 text-white/60 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#7fbafe] transition-colors">
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
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact Info
          </h5>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#7fbafe]">location_on</span>
              <span>
                3450 SW 9th St,
                <br />
                Miami, FL 33135
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7fbafe]">call</span>
              <span>(305) 555-0199</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7fbafe]">mail</span>
              <span>sales@prestigeauto.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h5
            className="font-bold text-lg uppercase tracking-widest"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Business Hours
          </h5>
          <ul className="space-y-2 text-white/60 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between">
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
          <p>© 2024 PRESTIGE AUTO MOTORS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            {["PRIVACY POLICY", "TERMS OF SERVICE", "CAREERS"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
