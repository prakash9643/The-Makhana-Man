"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const partnerTypes = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M7 11h8M11 7v8" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Snack Brands",
    desc: "Looking for a premium makhana supplier with consistent quality and scale? We supply directly.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M3 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Health-Focused Companies",
    desc: "Clean label, no preservatives, ethically sourced — everything your audience already demands.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14.5L5.5 18L7.5 12L2 8H8.5L11 2Z" stroke="#046b46" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Food Entrepreneurs",
    desc: "Starting a makhana brand? We'll be your back-end from day one — grading, processing, packing.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#046b46" strokeWidth="1.5" fill="none" />
        <path d="M11 6v5l3 3" stroke="#046b46" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Global Importers",
    desc: "Across India and globally — we handle everything from sourcing to compliance documentation.",
  },
]

export default function PartnerSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a3d26 0%, #046b46 45%, #0d5c38 100%)" }}
    >
      {/* decorative makhanas */}
      {[
        { w: "clamp(90px,14vw,180px)", top: "-5%", right: "3%", rot: "14deg", op: 0.07 },
        { w: "clamp(70px,10vw,130px)", bottom: "-4%", left: "2%", rot: "-12deg", op: 0.06 },
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
            right: s.right,
            bottom: s.bottom,
            left: s.left,
            opacity: s.op,
            transform: `rotate(${s.rot})`,
            filter: "brightness(2)",
          }}
        />
      ))}

      {/* ghost */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(60px,14vw,190px)", opacity: 0.04, color: "#fff", letterSpacing: "0.05em" }}
        >
          PARTNER
        </span>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10">

        {/* header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
            <span
              className="font-bold uppercase tracking-widest font-family-more-sugar"
              style={{ fontSize: "clamp(10px, 1.6vw, 12px)", color: "#f5c842" }}
            >
              Work With Us
            </span>
            <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
          </motion.div>

          <motion.h2
            className="font-bold uppercase leading-[1.0] text-white mb-4 font-family-more-sugar"
            style={{ fontSize: "clamp(26px, 5.5vw, 60px)" }}
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Now Actively Partnering<br />
            <span style={{ color: "#f5c842" }}>Across India & Globally</span>
          </motion.h2>

          <motion.p
            className="font-bold uppercase tracking-wide text-white/65 max-w-xl font-family-more-sugar"
            style={{ fontSize: "clamp(11px, 1.7vw, 14px)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We supply premium, ethically sourced makhana at scale — to businesses who want to snack better.
          </motion.p>
        </div>

        {/* partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {partnerTypes.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span style={{ filter: "brightness(10)" }}>{p.icon}</span>
              </div>
              <h3
                className="font-bold uppercase text-white leading-tight font-family-more-sugar"
                style={{ fontSize: "clamp(15px, 2.2vw, 18px)" }}
              >
                {p.title}
              </h3>
              <p
                className="font-bold uppercase tracking-wide leading-relaxed text-white/60 font-family-more-sugar"
                style={{ fontSize: "clamp(10px, 1.4vw, 12px)" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.4 }}
        >
          <p
            className="font-bold uppercase text-white/80 tracking-widest text-center font-family-more-sugar"
            style={{ fontSize: "clamp(13px, 2vw, 18px)" }}
          >
            Let's take Makhana global. Together.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20partner%20with%20The%20Makhana%20Man"
              target="_blank"
              className="font-family-cosmic-sans inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[13px] transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: "#f5c842", color: "#0a3d26" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Partner With Us on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="font-family-cosmic-sans inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[13px] border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/* shipping note */}
          <div className="flex items-center gap-2 mt-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.4)" }}>
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 5v4h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <p
              className="font-bold uppercase tracking-widest font-family-more-sugar"
              style={{ fontSize: "clamp(9px, 1.3vw, 11px)", color: "rgba(255,255,255,0.45)" }}
            >
              Free shipping above ₹500 · Pan India · B2B inquiries welcome
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}