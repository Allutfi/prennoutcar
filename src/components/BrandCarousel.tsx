const brands = ["TOYOTA", "HONDA", "FORD", "BMW", "CHEVROLET", "MERCEDES"];

export default function BrandCarousel() {
  return (
    <section className="py-8 bg-[#F4F6F9] border-y border-[#c2c6d2]">
      <div className="max-w-7xl mx-auto px-6">
        <p
          className="text-center text-[10px] text-[#5E6E82] mb-6 tracking-[.25em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          BRANDS WE CARRY
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-bold text-2xl text-[#00356a] select-none"
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
