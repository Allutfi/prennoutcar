import Link from "next/link";
import RemoteImage from "@/components/RemoteImage";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory | Prenn Out Car",
  description:
    "Browse our premium pre-owned vehicle inventory. Filter by make, body style, fuel type and more.",
};

const inventory = [
  {
    id: 1,
    year: "2023",
    make: "Mercedes-Benz",
    model: "GLE",
    trim: "GLE 350 4MATIC SUV",
    price: "$62,500",
    miles: "12,450 mi",
    transmission: "Auto",
    fuel: "Gas",
    color: "Selenite Grey",
    badge: { label: "NEW ARRIVAL", style: "success" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXfTutKmLH-8gpsAQ5plxQIbD6xbKLsCg3E7EKZNc6lqUSDEuNgpc-e-RTqc8pV3ctK1mfKKN2Syc0D0yeh5Dp7Yhq7n5GWMSs7WwaSKSavepaeCt6L3j7cTlMggKzp3_RvxFi6EtZXqn8_oOWqlb2UGIIilONeyFrpVWMqmIuRR0tTmYO0gt4_bZVPaylbvQeJqjBSlUEH-ly6SIzXOhwkDT1J-aqtYLtXd0R00RYP3Z-k0Xf1HspA",
  },
  {
    id: 2,
    year: "2022",
    make: "BMW",
    model: "X5",
    trim: "xDrive45e Plug-in Hybrid",
    price: "$58,900",
    miles: "24,100 mi",
    transmission: "Auto",
    fuel: "Hybrid",
    color: "Alpine White",
    badge: { label: "CERTIFIED PRE-OWNED", style: "primary" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsg8UK28NuMdSB4B4owPhJzhBTFiUfOA6yRxp4SEyrnlfBGa5LPJrN-XnufFpcUKpsn4g7DBLdz1SK8jGNiXPLaKKJO4fvEyK7CuYKOC38JviCQTkkv-52diA4DOkXqvusKPA9SgMQXnt1MqhGJ7D6qY-0KVa4E2ewmKqlmTErDQ5DXkZxbKBVxSjm7k-Bpo1BqVVic8zHhQ0vevmCt9fTpNn4Dl27Gj1lLer62HrwHKxGk44MTJMogA",
  },
  {
    id: 3,
    year: "2024",
    make: "Audi",
    model: "Q8 e-tron",
    trim: "Premium Plus quattro",
    price: "$74,200",
    miles: "1,200 mi",
    transmission: "Single-Speed",
    fuel: "Electric",
    color: "Navarra Blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQIAs8FKuBPPlk4We9KreLYO8N_4Jw841TPIEA8VHgTOnC5riEXMVN39AsDt90Nc6-5yDZnV2lqjVdN8vRSgHiGQ2LWAYoTp3wdflUNiomTw1BR481BHbJDzIgoznMkt67HAJnGELKMpyYFFMFaEmIL9cSl9zDODKcwgTctMrXlhcSU5VsKZ3-6RDU0X3UYEHjhzPFOmmh1EohCp-DRwOcPkhvllWRva6s61BpMcoA56giT9ECABO45g",
  },
  {
    id: 4,
    year: "2021",
    make: "Porsche",
    model: "Macan",
    trim: "S AWD",
    price: "$52,900",
    miles: "32,500 mi",
    transmission: "Auto",
    fuel: "Gas",
    color: "Jet Black",
    badge: { label: "PRICE DROP", style: "warning" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWhbqTtRS4ko3_e72JMvbW3WpEDqBMR3-Q2VOdlVfOkqdoZJDWp3URKmnlgqPKvkGnhyaroqXn-Ya35MHCsDLPuLreSUYJnhii_T0K-H33fexDf7Ait-3BXlvUQLZDrkSwS5zT4ZqFsYyecm_mofUTevhFWBpUv8apoKuaWsOoAyTztoe06u3fdo91dwSWoYR75uDwZlAENg9q3JNGs_CspzLGorQdkwm8StgOJbo7ASFpNt64agv2zQ",
  },
  {
    id: 5,
    year: "2023",
    make: "Lexus",
    model: "RX 450h",
    trim: "Luxury Hybrid AWD",
    price: "$56,900",
    miles: "8,200 mi",
    transmission: "CVT",
    fuel: "Hybrid",
    color: "Caviar Black",
    badge: { label: "NEW ARRIVAL", style: "success" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1TpPLl9mnvTzPpYQ2wF2drwa4n3huq1smFUjU0zsowf_HZW0Gao5zhPw64wUBsPsxs41qHq8KCXI-4e3mxgG0FHfBei-ob58YmJS_R4n2cAJ08x3V4pSoIpJePZNZDY7QCXik6pzhDIIegv9TM8l_xkNMougnBacFburHq0Jf0_W2-tNMIGqTDU8ST9FJ3XPa0FXpSH_vTGugSq2wkVyE6Re7lquMDQjBiQVZC1nGnY5WESV_9Y2GqOM8Td6z7sDbTB5r8iEnkpY",
  },
  {
    id: 6,
    year: "2022",
    make: "Tesla",
    model: "Model Y",
    trim: "Long Range AWD",
    price: "$49,900",
    miles: "15,300 mi",
    transmission: "Single-Speed",
    fuel: "Electric",
    color: "Pearl White",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCov5xtKs8jPrA5Zin0b90XaOZvKYDwZ0WuylW28rrK-s8hiCDddn7qbmevMJUaZ4XmuiuC7FTu1p9nWhwZ6aLfFe-03r1_VA06ocuLY8bhX1UtPevaxW2TVLEI5TtdprrwvX71uqkY0s9WuHvLPEsa0zLfjNmFqC8ooEC733iN6OLH9VBYWJh1-xj-DMRjTvdHtj3oTJFP2Rb4jmTjDec7Y95d7y-M9jnIGS2gzj4c4sKF2njBTTYhFs614kBs9tdJO004Om0bkxI",
  },
  {
    id: 7,
    year: "2021",
    make: "BMW",
    model: "M3",
    trim: "Competition xDrive",
    price: "$69,500",
    miles: "18,900 mi",
    transmission: "Auto",
    fuel: "Gas",
    color: "Isle of Man Green",
    badge: { label: "CERTIFIED PRE-OWNED", style: "primary" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA53nYA5kqQ2udctY_rCRLQV2cERUHEa8NQKbr1IBEd6RMgwMODaNfcB0EDsaVQHrJWTikje5BcjsnTHdBIujeMXS89RnZuyZYHnqWSjqjrhiu0Ts1X5tDm8S1wx4rOzf1DNVmdhg8MPhlSUWBAWZKRg6WgKMa_hHw3iB6TUM30tpyoQHWgGOyX6kF0xn6xXxgpaWanXmrBPgOYa_EJ1fMfQALnILSzTVOghBkIsQ_Ei9dmyRt6vNVkcNnguhQS1KZZv1EfDzZoqOE",
  },
  {
    id: 8,
    year: "2023",
    make: "Audi",
    model: "RS Q8",
    trim: "Performance quattro",
    price: "$129,900",
    miles: "5,100 mi",
    transmission: "Auto",
    fuel: "Gas",
    color: "Nardo Grey",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuMCfnP2XOXsep10hgExv3MmIRpYD-2PEge_LoCl5NWv7T_O4gxpkDcQ5eKgqBKEURY-mutwU637WB3Wn1TNTEuOytIHaZ1wkrFvS-Jpw4TWxV9-Da_STiBUDZAatfaSE3OkQmieOSjnOgXoZMa3QXMgJelVn5kQG5Fpc6K2HB7l6Lg4LL5daLrMn8Z9Pipsu8OGjp6IZ2dMUGwlYxWmw1I3nBcuy3dZLxUfzMwxEiI818A8ptfEJq0asQWelg4Qmy_3KVnnVUcgM",
  },
  {
    id: 9,
    year: "2022",
    make: "Mercedes-Benz",
    model: "S-Class",
    trim: "S 500 4MATIC",
    price: "$89,900",
    miles: "12,800 mi",
    transmission: "Auto",
    fuel: "Gas",
    color: "Obsidian Black",
    badge: { label: "CERTIFIED PRE-OWNED", style: "primary" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXfTutKmLH-8gpsAQ5plxQIbD6xbKLsCg3E7EKZNc6lqUSDEuNgpc-e-RTqc8pV3ctK1mfKKN2Syc0D0yeh5Dp7Yhq7n5GWMSs7WwaSKSavepaeCt6L3j7cTlMggKzp3_RvxFi6EtZXqn8_oOWqlb2UGIIilONeyFrpVWMqmIuRR0tTmYO0gt4_bZVPaylbvQeJqjBSlUEH-ly6SIzXOhwkDT1J-aqtYLtXd0R00RYP3Z-k0Xf1HspA",
  },
];

const makes = [
  { name: "Mercedes-Benz", count: 12 },
  { name: "BMW", count: 10 },
  { name: "Audi", count: 8 },
  { name: "Porsche", count: 5 },
];

const fuelTypes = [
  { name: "Gas", count: 30 },
  { name: "Hybrid", count: 12 },
  { name: "Electric", count: 6 },
];

const badgeStyles: Record<string, string> = {
  success: "bg-[#10B981]/15 text-[#10B981]",
  primary: "bg-[#004b93]/10 text-[#004b93] border border-[#004b93]/20",
  warning: "bg-[#F59E0B]/15 text-[#F59E0B]",
};

export default function InventoryPage() {
  return (
    <>
      {/* Shared chrome — same as HOME */}
      <UtilityBar />
      <Navbar />

      <main>
        {/* Page header strip */}
        <div className="bg-[#011A35] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Breadcrumb */}
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
              <span className="text-white font-medium">Inventory</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1
                  className="text-white font-bold text-3xl md:text-4xl uppercase"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Current Inventory
                </h1>
                <p
                  className="text-white/60 mt-1"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Showing 48 vehicles
                </p>
              </div>
              <select
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#19619f] focus:outline-none cursor-pointer"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <option className="text-[#191c20] bg-white">Sort by: Recommended</option>
                <option className="text-[#191c20] bg-white">Price: Low to High</option>
                <option className="text-[#191c20] bg-white">Price: High to Low</option>
                <option className="text-[#191c20] bg-white">Year: Newest First</option>
                <option className="text-[#191c20] bg-white">Mileage: Lowest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ── Sidebar Filters ── */}
            <aside className="w-full lg:w-1/4 shrink-0">
              <div
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 sticky top-24"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#E2E8F0]">
                  <h2
                    className="text-[#0A192F] font-bold uppercase"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Filters
                  </h2>
                  <button className="text-[#004b93] text-sm font-semibold hover:underline">
                    Clear All
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A192F] mb-3">
                    Price Range
                  </h3>
                  <div className="flex gap-2 items-center mb-3">
                    <input
                      className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#d2e4ff] focus:outline-none"
                      placeholder="Min"
                      type="text"
                    />
                    <span className="text-[#5E6E82]">–</span>
                    <input
                      className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#d2e4ff] focus:outline-none"
                      placeholder="Max"
                      type="text"
                    />
                  </div>
                  <input
                    className="w-full h-1 bg-[#e1e2e9] rounded-lg appearance-none cursor-pointer accent-[#00356a]"
                    max="150000"
                    min="0"
                    type="range"
                    aria-label="Price range slider"
                  />
                </div>

                {/* Make */}
                <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A192F] mb-3">Make</h3>
                  <div className="space-y-2">
                    {makes.map((make) => (
                      <label
                        key={make.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          className="rounded border-[#c2c6d2] text-[#00356a] focus:ring-[#00356a]"
                          type="checkbox"
                        />
                        <span className="text-[#5E6E82] text-sm">
                          {make.name}{" "}
                          <span className="text-[#c2c6d2]">({make.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Body Style */}
                <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A192F] mb-3">
                    Body Style
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Sedan", icon: "directions_car" },
                      { label: "SUV", icon: "airport_shuttle", active: true },
                      { label: "Truck", icon: "local_shipping" },
                      { label: "Coupe", icon: "sports_motorsports" },
                    ].map((style) => (
                      <button
                        key={style.label}
                        className={`border rounded-lg p-3 flex flex-col items-center justify-center transition-colors ${
                          style.active
                            ? "bg-white border-[#004b93]"
                            : "border-[#E2E8F0] hover:bg-[#F4F6F9] hover:border-[#004b93]"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined mb-1 ${
                            style.active ? "text-[#004b93]" : "text-[#5E6E82]"
                          }`}
                        >
                          {style.icon}
                        </span>
                        <span
                          className={`text-xs ${
                            style.active
                              ? "text-[#004b93] font-bold"
                              : "text-[#5E6E82]"
                          }`}
                        >
                          {style.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <h3 className="font-semibold text-[#0A192F] mb-3">
                    Fuel Type
                  </h3>
                  <div className="space-y-2">
                    {fuelTypes.map((fuel) => (
                      <label
                        key={fuel.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          className="rounded border-[#c2c6d2] text-[#00356a] focus:ring-[#00356a]"
                          type="checkbox"
                        />
                        <span className="text-[#5E6E82] text-sm">
                          {fuel.name}{" "}
                          <span className="text-[#c2c6d2]">({fuel.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Inventory Grid ── */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {inventory.map((car) => (
                  <InventoryCard key={car.id} car={car} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  className="p-2 border border-[#E2E8F0] rounded-lg text-[#5E6E82] hover:bg-[#F4F6F9] disabled:opacity-40"
                  disabled
                  aria-label="Previous page"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                      page === 1
                        ? "bg-[#00356a] text-white"
                        : "border border-[#E2E8F0] text-[#5E6E82] hover:bg-[#F4F6F9]"
                    }`}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-[#5E6E82]">…</span>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2E8F0] text-[#5E6E82] hover:bg-[#F4F6F9]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  8
                </button>
                <button
                  className="p-2 border border-[#E2E8F0] rounded-lg text-[#5E6E82] hover:bg-[#F4F6F9]"
                  aria-label="Next page"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function InventoryCard({ car }: { car: (typeof inventory)[0] }) {
  return (
    <article className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <RemoteImage
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {car.badge && (
          <div
            className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
              badgeStyles[car.badge.style] ?? badgeStyles.primary
            }`}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {car.badge.label}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="font-bold text-lg text-[#0A192F] mb-1 line-clamp-1"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {car.year} {car.make} {car.model}
        </h3>
        <p
          className="text-[#5E6E82] text-sm mb-4"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {car.trim}
        </p>

        <div
          className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6 text-[#727782] text-sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">speed</span>
            {car.miles}
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">settings</span>
            {car.transmission}
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">local_gas_station</span>
            {car.fuel}
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">palette</span>
            {car.color}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <span
            className="font-bold text-xl text-[#004b93]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {car.price}
          </span>
          <div className="flex gap-2">
            <button
              className="text-[#004b93] hover:bg-[#F4F6F9] p-2 rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0]"
              aria-label="Add to favorites"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <Link
              href={`/inventory/${car.id}`}
              className="bg-[#00356a] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#004b93] transition-colors text-sm"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
