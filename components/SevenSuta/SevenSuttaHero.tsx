"use client"

import { motion } from "framer-motion"
import Link from "next/link"

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
          border border-[#046b46] text-[#046b46] font-bold uppercase text-[11px] sm:text-[12px] tracking-widest bg-white/60 font-family-cosmic-sans">
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

          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 ml-0 xl:ml-[220px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/newui_comics/makhnapng.png"
              alt="7 Suta Makhana"
              className="h-[260px] sm:h-[380px] lg:h-[420px] object-cover"
            />
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 pb-8 order-2 lg:order-1">

            <motion.div
              className="flex flex-wrap items-center gap-2 mb-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BadgePill>India&apos;s Finest</BadgePill>
              <BadgePill>Ultra Premium</BadgePill>
              <BadgePill>Bihar&apos;s Pride</BadgePill>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-baseline gap-3 mb-2"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span className="font-bold uppercase text-[13px] sm:text-[15px] tracking-[0.22em] text-[#7B2D8B] font-family-more-sugar">
                The Makhana Man
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[#7B2D8B] text-white text-[11px] sm:text-[12px] font-bold tracking-widest uppercase font-family-cosmic-sans">
                7S+
              </span>
            </motion.div>

            <motion.h1
              className="hero-title font-bold uppercase leading-[0.9] text-[#046b46] mb-4 font-family-cosmic-sans"
              style={{ fontSize: "clamp(42px, 7vw, 88px)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              7+{" "}
              <span className="text-[#046b46]" style={{ WebkitTextStroke: "2px #046b46" }}>
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
                <span className="font-bold text-[#046b46] text-[22px] sm:text-[28px] leading-none font-family-more-sugar">
                  22.2 mm+
                </span>
                <span className="text-[#1A1A2E] font-bold uppercase text-[10px] sm:text-[11px] tracking-widest leading-tight font-family-cosmic-sans">
                  7+ Suta<br />Grade
                </span>
              </div>
              <span className="text-[#7B2D8B] font-bold uppercase text-[11px] tracking-widest leading-snug font-family-cosmic-sans">
                Hand·picked<br />Every Kernel
              </span>
            </motion.div>

            <motion.p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-8 max-w-[480px] text-[13px] sm:text-[15px] md:text-[17px] font-family-cosmic-sans"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Not just any makhana — 7+ Suta. Every kernel is individually
              handpicked for{" "}
              <span className="text-[#046b46]">perfect roundness</span> and
              uniformity. The rarest grade from Bihar&apos;s{" "}
              <span className="text-[#7B2D8B]">floodplains</span>, curated by hand.
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
                <span className="relative z-10 font-family-cosmic-sans">Know More About 7+ Suta</span>
                <span className="absolute inset-0 bg-white/10 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 skew-x-[-20deg]" />
              </Link>

              <Link
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                className="font-family-cosmic-sans inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-[12px] sm:text-[13px] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-7 border-t border-[#1A1A2E]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { val: "5%", label: "of total harvest" },
                { val: "22.2mm+", label: "uniform size" },
                { val: "100%", label: "hand-picked" },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-2">
                  <StarDot />
                  <span>
                    <strong className="font-bold font-family-more-sugar text-[#046b46] text-[15px] sm:text-[17px]">
                      {s.val}
                    </strong>{" "}
                    <span className="text-[#4b3f3f] font-bold uppercase text-[10px] sm:text-[11px] tracking-widest font-family-cosmic-sans">
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