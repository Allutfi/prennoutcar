const values = [
  {
    icon: "verified",
    title: "Certified Quality",
    desc: "Every vehicle undergoes a rigorous 150-point inspection before it hits our lot.",
  },
  {
    icon: "payments",
    title: "Market Pricing",
    desc: "Transparent, haggle-free pricing based on real-time market data analysis.",
  },
  {
    icon: "account_balance",
    title: "Easy Financing",
    desc: "Relationships with 30+ lenders to ensure you get the best rate possible.",
  },
  {
    icon: "support_agent",
    title: "VIP Support",
    desc: "Dedicated specialists available to assist you throughout your ownership.",
  },
];

export default function ValueBanner() {
  return (
    <section className="bg-[#011A35] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#004b93] transition-colors duration-300">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>
              <h4
                className="font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
