"use client"

import { motion } from "framer-motion"
import Link from "next/link"

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#046b46] text-[#046b46] font-bold uppercase text-[11px] sm:text-[12px] tracking-widest bg-white/60">
      <span className="w-1.5 h-1.5 rounded-full bg-[#046b46] inline-block" />
      {children}
    </span>
  )
}

function StarDot() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="inline-block shrink-0">
      <circle cx="9" cy="9" r="9" fill="#046b46" opacity="0.12" />
      <circle cx="9" cy="9" r="4" fill="#046b46" />
    </svg>
  )
}

export function SevenSutaHero() {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-20 pb-10"
      style={{
        backgroundImage: "url('/images/newui_comics/makhnasutabanner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* MOBILE: image first — DESKTOP: image right */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 ml-0 xl:ml-[220px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/newui_comics/makhnapng.png"
              alt="7 Suta Makhana"
              className=" h-[260px] sm:h-[380px] lg:h-[420px] object-cover"
            />
          </motion.div>

          {/* MOBILE: content second — DESKTOP: content left */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 pb-8 order-2 lg:order-1">

            <motion.div
              className="flex flex-wrap items-center gap-2 mb-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BadgePill>India's Finest</BadgePill>
              <BadgePill>Bihar · Mithilanchal</BadgePill>
              <BadgePill>Since Day One</BadgePill>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-baseline gap-3 mb-2"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span
                className="font-bold uppercase text-[13px] sm:text-[15px] tracking-[0.22em] text-[#7B2D8B]"
                style={{ fontFamily: "'More Sugar', cursive" }}
              >
                The Makhana Man
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#7B2D8B] text-white text-[11px] sm:text-[12px] font-bold tracking-widest uppercase">
                7S
              </span>
            </motion.div>

            <motion.h1
              className="hero-title font-bold uppercase leading-[0.9] text-[#046b46] mb-4"
              style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              7{" "}
              <span
                className="text-[#046b46]"
                style={{ WebkitTextStroke: "2px #046b46" }}
              >
                Suta
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-[#046b46] bg-white/70">
                <span
                  className="font-bold text-[#046b46] text-[22px] sm:text-[28px] leading-none"
                  style={{ fontFamily: "'More Sugar', cursive" }}
                >
                  22.2 mm
                </span>
                <span className="text-[#1A1A2E] font-bold uppercase text-[10px] sm:text-[11px] tracking-widest leading-tight">
                  7 Suta<br />Grade
                </span>
              </div>
              <span className="text-[#7B2D8B] font-bold uppercase text-[11px] tracking-widest leading-snug">
                Hand·picked<br />Every Kernel
              </span>
            </motion.div>

            <motion.p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-8 max-w-[480px] text-[13px] sm:text-[15px] md:text-[17px]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Not just any makhana — 7 Suta. Every kernel is individually
              handpicked for{" "}
              <span className="text-[#046b46]">perfect roundness</span>, zero
              breakage, and uniform{" "}
              <span className="text-[#7B2D8B]">22.2 mm size</span>. The rarest
              grade from Bihar's floodplains, curated by hand.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
            >
              <Link
                href=""
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#046b46] text-white font-bold uppercase tracking-widest text-[13px] sm:text-[14px] overflow-hidden transition-all duration-300 hover:shadow-[0_6px_28px_rgba(4,107,70,0.35)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Know More About 7 Suta</span>
                {/* <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg> */}
                <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 skew-x-[-20deg]" />
              </Link>

              <Link
                href="#what-is-7-suta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1A1A2E] text-[#1A1A2E] font-bold uppercase tracking-widest text-[12px] sm:text-[13px] hover:bg-[#1A1A2E] hover:text-white transition-all duration-300"
              >
                What is 7 Suta?
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-7 border-t border-[#1A1A2E]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { val: "5%",     label: "of total harvest" },
                { val: "22.2mm", label: "uniform size" },
                { val: "100%",   label: "hand-picked" },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-2">
                  <StarDot />
                  <span>
                    <strong
                      className="font-bold text-[#046b46] text-[15px] sm:text-[17px]"
                      style={{ fontFamily: "'More Sugar', cursive" }}
                    >
                      {s.val}
                    </strong>{" "}
                    <span className="text-[#4b3f3f] font-bold uppercase text-[10px] sm:text-[11px] tracking-widest">
                      {s.label}
                    </span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}