"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24 min-h-[320px]"
      style={{
        background: "linear-gradient(135deg, #0a3d26 0%, #046b46 55%, #0d5c38 100%)",
      }}
    >
      {/* ghost makhana decorations */}
      {[
        { w: "clamp(80px,12vw,150px)", top: "-6%", left: "-3%", rot: "-18deg", op: 0.08 },
        { w: "clamp(60px,9vw,110px)", bottom: "-5%", right: "-2%", rot: "22deg", op: 0.07 },
        { w: "clamp(50px,7vw,90px)", top: "10%", right: "6%", rot: "10deg", op: 0.06 },
      ].map((s, i) => (
        <img
          key={i}
          src="/images/10.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none hidden md:block"
          style={{
            width: s.w,
            top: s.top,
            left: s.left,
            bottom: s.bottom,
            right: s.right,
            opacity: s.op,
            transform: `rotate(${s.rot})`,
            filter: "brightness(2)",
          }}
        />
      ))}

      {/* watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{
            fontSize: "clamp(70px,17vw,200px)",
            opacity: 0.04,
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          THE MAKHANA MAN
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10 w-full">
        {/*
          Mobile  → flex-col-reverse  : mascot (second in DOM) renders FIRST visually, then text
          Desktop → flex-row          : side-by-side, text left / mascot right
        */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">

          {/* ── TEXT ────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center z-10 items-center lg:items-start text-center lg:text-left">

            {/* badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#f5c842] text-[#f5c842] font-bold uppercase text-[10px] tracking-widest font-family-cosmic-sans">
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#f5c842]" />
                Our Story
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/30 text-white/80 font-bold uppercase text-[10px] tracking-widest font-family-cosmic-sans">
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-white/60" />
                Bihar · India · World
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              className="font-bold text-white mb-3 tracking-tight uppercase hero-title"
              style={{
                fontSize: "clamp(1.55rem, 2.8vw, 2.5rem)",
                lineHeight: 1.15,
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We Are On A <span style={{ color: "#f5c842" }}>Mission</span><br />
              To Make Makhana<br />
              As Common As Potato Chips.
            </motion.h1>

            {/* subtext */}
            <motion.p
              className="font-bold uppercase tracking-wide leading-relaxed text-white/65 mb-6 max-w-[440px] font-family-cosmic-sans mx-auto lg:mx-0"
              style={{ fontSize: "13px" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              Yes, you read that right. Potato chips are loved in all{" "}
              <span className="text-[#f5c842]">195 countries</span>.{" "}
              Makhana deserves that shelf. And we&apos;re putting it there.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38 }}
            >
              <Link
                href="/products"
                className="font-family-cosmic-sans inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#f5c842", color: "#0a3d26" }}
              >
                Explore Products
              </Link>
              <Link
                 href="https://wa.me/917739756165?text=Hi%2C%20I%20want%20to%20order%207%20Suta%20Makhana"
                target="_blank"
                className="font-family-cosmic-sans inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-[11px] border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/10"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Link>
            </motion.div>
          </div>

          {/* ── MASCOT ──────────────────────────────────────────────────── */}
          <motion.div
            className="w-full lg:w-[42%] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            <img
              src="/images/newui_comics/makhnapng.png"
              alt="Makhana Man mascot"
              className="h-[160px] sm:h-[210px] lg:h-[270px] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}