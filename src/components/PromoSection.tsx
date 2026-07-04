import RemoteImage from "@/components/RemoteImage";

const promos = [
  {
    badge: "FINANCE CENTER",
    title: "EASY FINANCING FOR EVERYONE",
    desc: "Get pre-approved in seconds with no impact on your credit score. Our experts work with all credit situations.",
    cta: "APPLY NOW",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArZwLIFcjAX3-8eJG_6k-Vswkh-wFy2gF8_brvMbXTiAZeVCWNMSh9dbvIfj6294HKtDf6GlR5MKIpzw-_ufAhvDcy_4xhOfGScb72XjLGsZwwKIXTQpU3uMfGabyapEZkTME0KgaOplT6x_jLYiWyInAPS-aVJ1HGGIcodis5EGYuTeYREXO1beX3pn23UNvDIqEwF458eAq6Ihv0pXrCQGtUDdwa2SBu42BvupTGKKbtHsm_UKvSwJGHz44SWhYt0aui9vBjPlk",
    imageAlt: "Happy customer holding car keys",
    reverse: false,
  },
  {
    badge: "SELL/TRADE",
    title: "VALUE YOUR TRADE-IN",
    desc: "Get a competitive cash offer for your vehicle in under 15 minutes. We buy all makes and models.",
    cta: "GET OFFER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFUpKouVSwab21F6OIcv8d-G8EsDBcnbYeZGKf8lTsMHrTfZO46ohbuoG_3T8G7FbknxPvNEbxjPPMPZOoR7K64lg-44yclS9ySIv3bFQJUjoefNZBtC4hAnrZ3MOVe-GvGztgseRSztiQO3tjgsHyMmnPe95QkU9c1ISjNfXOU9NZjvrQBtVs7xU2Bh-0nGrHlgUaiEKLvZ7is7AIZgVcEcQBZGPa4YJLH1S0jit2sRy0Ca5VMf_VpUOZAZcgTOuH92h9Pe2jc6w",
    imageAlt: "Modern luxury SUV on a road",
    reverse: true,
  },
] as const;

export default function PromoSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {promos.map((promo) => (
          <PromoCard key={promo.badge} promo={promo} />
        ))}
      </div>
    </section>
  );
}

type Promo = (typeof promos)[number];

function PromoCard({ promo }: { promo: Promo }) {
  return (
    <div
      className={`relative bg-[#f3f3fa] rounded-2xl overflow-hidden flex flex-col ${
        promo.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } group cursor-pointer hover:shadow-xl transition-all border border-[#E2E8F0]`}
    >
      {/* Text side */}
      <div className="p-8 flex-1 flex flex-col justify-center space-y-4 z-10">
        <span
          className="block text-[#19619f] text-[10px] tracking-widest uppercase font-semibold"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {promo.badge}
        </span>
        <h3
          className="font-bold text-[#00356a] uppercase text-2xl leading-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {promo.title}
        </h3>
        <p
          className="text-[#5E6E82] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {promo.desc}
        </p>
        <button
          className="flex items-center gap-2 text-[#00356a] font-bold text-sm group/btn w-fit"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {promo.cta}
          <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Image side */}
      <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
        <RemoteImage
          src={promo.image}
          alt={promo.imageAlt}
          fill
          className="object-cover organic-mask group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}
