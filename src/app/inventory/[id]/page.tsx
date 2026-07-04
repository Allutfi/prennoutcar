import RemoteImage from "@/components/RemoteImage";
import Link from "next/link";

const car = {
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
  description:
    "This exceptional 2023 Mercedes-Benz GLE 350 4MATIC SUV presents a remarkable opportunity for discerning luxury SUV enthusiasts. Certified Pre-Owned, this vehicle has undergone a rigorous 150-point inspection and features premium amenities that redefine comfort and performance.",
  specs: {
    engine: "2.0L I4 Turbo",
    horsepower: "255 hp",
    torque: "273 lb-ft",
    acceleration: "6.0 seconds",
    topSpeed: "130 mph",
    fuelEconomy: "22 city / 29 highway",
    towingCapacity: "6,300 lbs",
  },
  features: [
    "Adaptive Cruise Control",
    "Lane Keeping Assist",
    "Massage Seats",
    "Burmester Audio",
    "Panoramic Sunroof",
    "Night Vision Assist",
    "Heated/Cooled Seats",
    "Ambient Lighting",
  ],
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXfTutKmLH-8gpsAQ5plxQIbD6xbKLsCg3E7EKZNc6lqUSDEuNgpc-e-RTqc8pV3ctK1mfKKN2Syc0D0yeh5Dp7Yhq7n5GWMSs7WwaSKSavepaeCt6L3j7cTlMggKzp3_RvxFi6EtZXqn8_oOWqlb2UGIIilONeyFrpVWMqmIuRR0tTmYO0gt4_bZVPaylbvQeJqjBSlUEH-ly6SIzXOhwkDT1J-aqtYLtXd0R00RYP3Z-k0Xf1HspA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCsg8UK28NuMdSB4B4owPhJzhBTFiUfOA6yRxp4SEyrnlfBGa5LPJrN-XnufFpcUKpsn4g7DBLdz1SK8jGNiXPLaKKJO4fvEyK7CuYKOC38JviCQTkkv-52diA4DOkXqvusKPA9SgMQXnt1MqhGJ7D6qY-0KVa4E2ewmKqlmTErDQ5DXkZxbKBVxSjm7k-Bpo1BqVVic8zHhQ0vevmCt9fTpNn4Dl27Gj1lLer62HrwHKxGk44MTJMogA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQIAs8FKuBPPlk4We9KreLYO8N_4Jw841TPIEA8VHgTOnC5riEXMVN39AsDt90Nc6-5yDZnV2lqjVdN8vRSgHiGQ2LWAYoTp3wdflUNiomTw1BR481BHbJDzIgoznMkt67HAJnGELKMpyYFFMFaEmIL9cSl9zDODKcwgTctMrXlhcSU5VsKZ3-6RDU0X3UYEHjhzPFOmmh1EohCp-DRwOcPkhvllWRva6s61BpMcoA56giT9ECABO45g",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWhbqTtRS4ko3_e72JMvbW3WpEDqBMR3-Q2VOdlVfOkqdoZJDWp3URKmnlgqPKvkGnhyaroqXn-Ya35MHCsDLPuLreSUYJnhii_T0K-H33fexDf7Ait-3BXlvUQLZDrkSwS5zT4ZqFsYyecm_mofUTevhFWBpUv8apoKuaWsOoAyTztoe06u3fdo91dwSWoYR75uDwZlAENg9q3JNGs_CspzLGorQdkwm8StgOJbo7ASFpNt64agv2zQ",
  ],
};

export default function VehicleDetailPage() {
  return (
    <main>
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 py-8 text-[#5E6E82]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="hover:text-[#004b93] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-sm mx-1">
                chevron_right
              </span>
              <Link
                href="/inventory"
                className="hover:text-[#004b93] transition-colors"
              >
                Inventory
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="material-symbols-outlined text-sm mx-1">
                chevron_right
              </span>
              <span className="ml-1 md:ml-2 font-medium text-[#191c20]">
                {car.year} {car.make} {car.model}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Vehicle Header */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Images */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <RemoteImage
                src={car.images[0]}
                alt={`${car.year} ${car.make} ${car.model}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-24 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#004b93] transition-all"
                >
                  <RemoteImage
                    src={img}
                    alt={`${car.year} ${car.make} ${car.model} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="text-[#5E6E82] text-sm uppercase font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {car.year} {car.make}
                  </p>
                  <h1
                    className="text-[#0A192F] font-bold text-3xl uppercase mt-1"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {car.model}
                  </h1>
                  <p
                    className="text-[#5E6E82] text-base mt-1"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {car.trim}
                  </p>
                </div>
                <button
                  className="text-[#004b93] hover:bg-[#F4F6F9] p-2 rounded-lg transition-colors"
                  aria-label="Add to favorites"
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>

              <div className="border-t border-[#E2E8F0] pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span
                    className="font-bold text-3xl text-[#004b93]"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {car.price}
                  </span>
                  <span
                    className="bg-[#10B981]/15 text-[#10B981] text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    CERTIFIED PRE-OWNED
                  </span>
                </div>
              </div>

              <div
                className="space-y-4 mb-6"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#5E6E82]">Mileage</span>
                  <span className="font-semibold">{car.miles}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#5E6E82]">Transmission</span>
                  <span className="font-semibold">{car.transmission}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#5E6E82]">Fuel Type</span>
                  <span className="font-semibold">{car.fuel}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#5E6E82]">Exterior Color</span>
                  <span className="font-semibold">{car.color}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  className="bg-[#00356a] text-white py-3 rounded-lg hover:bg-[#003A70] transition-colors font-semibold"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Contact Dealer
                </button>
                <button
                  className="bg-white border border-[#00356a] text-[#00356a] py-3 rounded-lg hover:bg-[#00356a] hover:text-white transition-colors font-semibold"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2
              className="text-[#0A192F] font-bold text-2xl uppercase mb-6"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Vehicle Description
            </h2>
            <p
              className="text-[#191c20] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {car.description}
            </p>
            <div className="mt-6 bg-[#F4F6F9] rounded-xl p-6">
              <h3
                className="text-[#0A192F] font-bold text-lg uppercase mb-4"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Why You'll Love This Vehicle
              </h3>
              <ul
                className="space-y-3"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {[
                  "Exceptional luxury and comfort for daily driving",
                  "Advanced driver assistance technologies",
                  "Premium interior materials and craftsmanship",
                  "Impressive performance and handling",
                  "Low mileage with comprehensive service history",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#10B981] mt-1">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specs & Features */}
          <div className="space-y-8">
            {/* Performance Specs */}
            <div>
              <h2
                className="text-[#0A192F] font-bold text-2xl uppercase mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Performance Specifications
              </h2>
              <div
                className="grid grid-cols-2 gap-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Engine
                  </span>
                  <span className="font-semibold">{car.specs.engine}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Horsepower
                  </span>
                  <span className="font-semibold">{car.specs.horsepower}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Torque
                  </span>
                  <span className="font-semibold">{car.specs.torque}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Acceleration
                  </span>
                  <span className="font-semibold">{car.specs.acceleration}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Top Speed
                  </span>
                  <span className="font-semibold">{car.specs.topSpeed}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Fuel Economy
                  </span>
                  <span className="font-semibold">{car.specs.fuelEconomy}</span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Towing Capacity
                  </span>
                  <span className="font-semibold">
                    {car.specs.towingCapacity}
                  </span>
                </div>
                <div className="bg-[#F4F6F9] p-4 rounded-lg">
                  <span className="text-[#5E6E82] text-xs uppercase block mb-1">
                    Drivetrain
                  </span>
                  <span className="font-semibold">4MATIC All-Wheel Drive</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2
                className="text-[#0A192F] font-bold text-2xl uppercase mb-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Key Features
              </h2>
              <div
                className="grid grid-cols-2 gap-3"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {car.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[#191c20] text-sm"
                  >
                    <span className="material-symbols-outlined text-[#004b93] text-xs">
                      check_circle
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
