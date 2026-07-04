"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "INVENTORY", href: "/inventory" },
  { label: "FINANCE", href: "/finance" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT US", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={`w-full top-0 sticky z-50 bg-white border-b border-[#c2c6d2] transition-all duration-300 ${
        scrolled ? "shadow-md h-16" : "h-20"
      }`}
    >
      <nav className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="h-10 w-10 bg-[#00356a] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
              PA
            </div>
            <span
              className="font-bold text-2xl text-[#00356a] tracking-tight hidden sm:block"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              PRENN OUT CAR
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[10px] tracking-widest uppercase font-semibold transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-[#00356a] border-b-2 border-[#00356a]"
                    : "text-[#5E6E82] hover:text-[#19619f]"
                }`}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            className="hidden lg:block border-2 border-[#00356a] text-[#00356a] text-[10px] tracking-widest uppercase font-semibold px-4 py-2 rounded-lg hover:bg-[#00356a] hover:text-white transition-all active:opacity-80"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            GET PRE-APPROVED
          </button>
          <button
            className="md:hidden text-[#00356a]"
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
