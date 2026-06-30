"use client";

import { useState } from "react";

const inventory = [
  {
    id: 1,
    year: "2023",
    make: "TOYOTA",
    model: "RAV4 XLE",
    price: "$26,490",
    miles: "12k Mi",
    badge: { label: "NEW ARRIVAL", color: "bg-[#10B981]" },
    category: "suvs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1TpPLl9mnvTzPpYQ2wF2drwa4n3huq1smFUjU0zsowf_HZW0Gao5zhPw64wUBsPsxs41qHq8KCXI-4e3mxgG0FHfBei-ob58YmJS_R4n2cAJ08x3V4pSoIpJePZNZDY7QCXik6pzhDIIegv9TM8l_xkNMougnBacFburHq0Jf0_W2-tNMIGqTDU8ST9FJ3XPa0FXpSH_vTGugSq2wkVyE6Re7lquMDQjBiQVZC1nGnY5WESV_9Y2GqOM8Td6z7sDbTB5r8iEnkpY",
  },
  {
    id: 2,
    year: "2022",
    make: "HONDA",
    model: "Accord EX",
    price: "$24,990",
    miles: "24k Mi",
    badge: null,
    category: "sedans",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCov5xtKs8jPrA5Zin0b90XaOZvKYDwZ0WuylW28rrK-s8hiCDddn7qbmevMJUaZ4XmuiuC7FTu1p9nWhwZ6aLfFe-03r1_VA06ocuLY8bhX1UtPevaxW2TVLEI5TtdprrwvX71uqkY0s9WuHvLPEsa0zLfjNmFqC8ooEC733iN6OLH9VBYWJh1-xj-DMRjTvdHtj3oTJFP2Rb4jmTjDec7Y95d7y-M9jnIGS2gzj4c4sKF2njBTTYhFs614kBs9tdJO004Om0bkxI",
  },
  {
    id: 3,
    year: "2021",
    make: "FORD",
    model: "F-150 XLT",
    price: "$33,990",
    miles: "38k Mi",
    badge: { label: "BEST SELLER", color: "bg-[#F59E0B]" },
    category: "trucks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA53nYA5kqQ2udctY_rCRLQV2cERUHEa8NQKbr1IBEd6RMgwMODaNfcB0EDsaVQHrJWTikje5BcjsnTHdBIujeMXS89RnZuyZYHnqWSjqjrhiu0Ts1X5tDm8S1wx4rOzf1DNVmdhg8MPhlSUWBAWZKRg6WgKMa_hHw3iB6TUM30tpyoQHWgGOyX6kF0xn6xXxgpaWanXmrBPgOYa_EJ1fMfQALnILSzTVOghBkIsQ_Ei9dmyRt6vNVkcNnguhQS1KZZv1EfDzZoqOE",
  },
  {
    id: 4,
    year: "2023",
    make: "CHEVROLET",
    model: "Camaro LT",
    price: "$28,990",
    miles: "8k Mi",
    badge: null,
    category: "coupes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuMCfnP2XOXsep10hgExv3MmIRpYD-2PEge_LoCl5NWv7T_O4gxpkDcQ5eKgqBKEURY-mutwU637WB3Wn1TNTEuOytIHaZ1wkrFvS-Jpw4TWxV9-Da_STiBUDZAatfaSE3OkQmieOSjnOgXoZMa3QXMgJelVn5kQG5Fpc6K2HB7l6Lg4LL5daLrMn8Z9Pipsu8OGjp6IZ2dMUGwlYxWmw1I3nBcuy3dZLxUfzMwxEiI818A8ptfEJq0asQWelg4Qmy_3KVnnVUcgM",
  },
];

const filterTabs = [
  { label: "ALL", filter: "all" },
  { label: "SEDANS", filter: "sedans" },
  { label: "SUVS", filter: "suvs" },
  { label: "TRUCKS", filter: "trucks" },
  { label: "COUPES", filter: "coupes" },
  { label: "HYBRIDS", filter: "hybrids" },
];

export default function InventorySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = inventory.filter(
    (car) => activeFilter === "all" || car.category === activeFilter
  );

  return (
    <section className="mt-20 py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div className="space-y-2">
          <span
            className="text-[#19619f] text-[10px] tracking-widest uppercase font-semibold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PREMIUM COLLECTION
          </span>
          <h2
            className="text-[#00356a] uppercase font-bold text-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SHOP OUR INVENTORY
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-0 border-b border-[#c2c6d2] pb-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.filter}
              onClick={() => setActiveFilter(tab.filter)}
              className={`px-4 py-2 text-[10px] tracking-widest uppercase font-semibold transition-colors pb-2 ${
                activeFilter === tab.filter
                  ? "text-[#00356a] border-b-2 border-[#00356a]"
                  : "text-[#5E6E82] hover:text-[#00356a]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <button className="bg-[#00356a] text-white text-[10px] tracking-widest uppercase font-semibold px-12 py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
          EXPLORE FULL INVENTORY
        </button>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: (typeof inventory)[0] }) {
  return (
    <div className="group bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[1.49]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {car.badge && (
          <div
            className={`absolute top-4 left-4 ${car.badge.color} text-white text-[10px] tracking-widest uppercase font-semibold px-2 py-1 rounded`}
          >
            {car.badge.label}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div>
          <p
            className="text-[#5E6E82] text-[10px] tracking-widest uppercase font-semibold"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {car.year} {car.make}
          </p>
          <h3
            className="font-bold text-lg text-[#00356a]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {car.model}
          </h3>
        </div>
        <div className="flex justify-between items-center border-t border-[#E2E8F0] pt-4">
          <span
            className="font-bold text-2xl text-[#00356a]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {car.price}
          </span>
          <div className="flex gap-1 items-center text-[#5E6E82]">
            <span className="material-symbols-outlined text-[18px]">speed</span>
            <span className="text-xs">{car.miles}</span>
          </div>
        </div>
        <button className="w-full border border-[#00356a] text-[#00356a] text-[10px] tracking-widest uppercase font-semibold py-2 rounded-lg group-hover:bg-[#00356a] group-hover:text-white transition-all">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
