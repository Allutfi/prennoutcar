const brands = ["TOYOTA", "HONDA", "FORD", "BMW", "CHEVROLET", "MERCEDES", "AUDI", "PORSCHE", "LEXUS", "TESLA"];

export default function BrandCarousel() {
  // Duplicate the list so the marquee loops seamlessly
  const track = [...brands, ...brands];

  return (
    <section className="py-8 bg-[#F4F6F9] border-y border-[#c2c6d2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p
          className="text-center text-[10px] text-[#5E6E82] tracking-[.25em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          BRANDS WE CARRY
        </p>
      </div>

      {/* Marquee track — overflow hidden on parent so the looped copy is hidden */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#F4F6F9] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#F4F6F9] to-transparent" />

        <div
          className="flex gap-12 md:gap-20 w-max animate-marquee"
          style={{ willChange: "transform" }}
        >
          {track.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-bold text-2xl text-[#00356a] opacity-40 hover:opacity-100 transition-opacity duration-300 select-none shrink-0 cursor-default"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
