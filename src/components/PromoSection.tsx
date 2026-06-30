export default function PromoSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Promo 1 — Finance */}
        <div className="relative bg-[#f3f3fa] rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:shadow-xl transition-all border border-[#E2E8F0]">
          <div className="p-8 flex-1 flex flex-col justify-center space-y-4 z-10">
            <span
              className="text-[#19619f] text-[10px] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              FINANCE CENTER
            </span>
            <h3
              className="font-bold text-[#00356a] uppercase text-2xl leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              EASY FINANCING FOR EVERYONE
            </h3>
            <p className="text-[#5E6E82] text-sm leading-relaxed">
              Get pre-approved in seconds with no impact on your credit score. Our experts
              work with all credit situations.
            </p>
            <button className="flex items-center gap-2 text-[#00356a] font-bold group/btn text-sm">
              APPLY NOW
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArZwLIFcjAX3-8eJG_6k-Vswkh-wFy2gF8_brvMbXTiAZeVCWNMSh9dbvIfj6294HKtDf6GlR5MKIpzw-_ufAhvDcy_4xhOfGScb72XjLGsZwwKIXTQpU3uMfGabyapEZkTME0KgaOplT6x_jLYiWyInAPS-aVJ1HGGIcodis5EGYuTeYREXO1beX3pn23UNvDIqEwF458eAq6Ihv0pXrCQGtUDdwa2SBu42BvupTGKKbtHsm_UKvSwJGHz44SWhYt0aui9vBjPlk"
              alt="Happy customer with car keys"
              className="w-full h-full object-cover organic-mask group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Promo 2 — Trade-in */}
        <div className="relative bg-[#f3f3fa] rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse group cursor-pointer hover:shadow-xl transition-all border border-[#E2E8F0]">
          <div className="p-8 flex-1 flex flex-col justify-center space-y-4 z-10">
            <span
              className="text-[#19619f] text-[10px] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SELL/TRADE
            </span>
            <h3
              className="font-bold text-[#00356a] uppercase text-2xl leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              VALUE YOUR TRADE-IN
            </h3>
            <p className="text-[#5E6E82] text-sm leading-relaxed">
              Get a competitive cash offer for your vehicle in under 15 minutes. We buy all
              makes and models.
            </p>
            <button className="flex items-center gap-2 text-[#00356a] font-bold group/btn text-sm">
              GET OFFER
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUpKouVSwab21F6OIcv8d-G8EsDBcnbYeZGKf8lTsMHrTfZO46ohbuoG_3T8G7FbknxPvNEbxjPPMPZOoR7K64lg-44yclS9ySIv3bFQJUjoefNZBtC4hAnrZ3MOVe-GvGztgseRSztiQO3tjgsHyMmnPe95QkU9c1ISjNfXOU9NZjvrQBtVs7xU2Bh-0nGrHlgUaiEKLvZ7is7AIZgVcEcQBZGPa4YJLH1S0jit2sRy0Ca5VMf_VpUOZAZcgTOuH92h9Pe2jc6w"
              alt="Modern luxury SUV"
              className="w-full h-full object-cover organic-mask group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
