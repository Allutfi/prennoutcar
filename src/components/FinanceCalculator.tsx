"use client";

import { useState, useCallback } from "react";

function calcLoan(price: number, down: number, termMonths: number, aprPct: number) {
  const financed = price - down;
  const monthlyRate = aprPct / 100 / 12;
  let monthly = 0;

  if (monthlyRate === 0) {
    monthly = financed / termMonths;
  } else {
    monthly =
      (financed * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  const totalInterest = monthly * termMonths - financed;
  return {
    monthly: Math.round(monthly),
    financed,
    totalInterest: Math.round(totalInterest),
  };
}

function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export default function FinanceCalculator() {
  const [price, setPrice] = useState(85000);
  const [down, setDown] = useState(15000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(4.9);

  const { monthly, financed, totalInterest } = calcLoan(price, down, term, apr);

  const handleDown = useCallback(
    (val: number) => setDown(Math.min(val, price)),
    [price]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Controls */}
      <div>
        <h2
          className="text-white font-bold text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Tailor Your Payment
        </h2>
        <p
          className="text-white/70 text-base mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Use our advanced payment estimator to see how different loan terms and
          down payments affect your monthly investment.
        </p>

        <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Vehicle Price */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Vehicle Price
              </label>
              <span
                className="text-[#9fcaff] font-bold text-xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {fmt(price)}
              </span>
            </div>
            <input
              type="range"
              min={30000}
              max={250000}
              step={1000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-1 rounded-full appearance-none cursor-pointer accent-[#00356a] bg-white/20"
              aria-label="Vehicle price"
            />
            <div
              className="flex justify-between text-white/40 text-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span>$30,000</span>
              <span>$250,000</span>
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Down Payment
              </label>
              <span
                className="text-[#9fcaff] font-bold text-xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {fmt(down)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100000}
              step={500}
              value={down}
              onChange={(e) => handleDown(Number(e.target.value))}
              className="w-full h-1 rounded-full appearance-none cursor-pointer accent-[#00356a] bg-white/20"
              aria-label="Down payment"
            />
            <div
              className="flex justify-between text-white/40 text-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <span>$0</span>
              <span>$100,000</span>
            </div>
          </div>

          {/* Term & APR */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className="text-white font-semibold text-sm block"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Term (Months)
              </label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full bg-[#011A35] border border-white/20 rounded-lg py-2.5 px-3 text-white text-sm focus:ring-2 focus:ring-[#7fbafe] outline-none cursor-pointer"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {[24, 36, 48, 60, 72].map((m) => (
                  <option key={m} value={m}>
                    {m} Months
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                className="text-white font-semibold text-sm block"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Estimated APR (%)
              </label>
              <input
                type="number"
                step={0.1}
                min={0}
                max={30}
                value={apr}
                onChange={(e) => setApr(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#011A35] border border-white/20 rounded-lg py-2.5 px-3 text-white text-sm focus:ring-2 focus:ring-[#7fbafe] outline-none"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="bg-white rounded-2xl p-10 shadow-2xl flex flex-col text-center">
        <span
          className="text-[#5E6E82] text-[10px] tracking-widest uppercase font-semibold mb-2"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Estimated Monthly Payment
        </span>
        <div
          className="text-[4rem] font-bold text-[#00356a] leading-none mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {fmt(monthly)}
        </div>
        <p
          className="text-[#5E6E82] text-xs mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Estimated payment excludes taxes, titles, and registration fees. Rates
          subject to credit approval.
        </p>

        <hr className="border-[#E2E8F0] mb-8" />

        <div className="grid grid-cols-2 gap-6 mb-8 text-left">
          <div>
            <div
              className="text-[#5E6E82] text-[10px] tracking-widest uppercase font-semibold mb-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Amount Financed
            </div>
            <div
              className="font-bold text-2xl text-[#00356a]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {fmt(financed)}
            </div>
          </div>
          <div>
            <div
              className="text-[#5E6E82] text-[10px] tracking-widest uppercase font-semibold mb-1"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Total Interest
            </div>
            <div
              className="font-bold text-2xl text-[#00356a]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {fmt(totalInterest)}
            </div>
          </div>
        </div>

        <a
          href="#apply"
          className="bg-[#00356a] text-white py-4 rounded-lg font-bold hover:bg-[#004b93] transition-all text-center block mt-auto"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Proceed to Application
        </a>
      </div>
    </div>
  );
}
