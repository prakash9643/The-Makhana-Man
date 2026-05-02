"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const PILLS = ["Handpicked.", "22.2mm.", "7 Suta."]

export function ChoiceIsClearSection() {
  return (
    <section
      className="relative overflow-hidden pt-20 md:pt-28 pb-20 md:pb-28"
      style={{
        background: "linear-gradient(160deg, #0a3d26 0%, #046b46 45%, #0d5c38 100%)",
      }}
    >
      {/* ── decorative corner makhana images ── */}
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "clamp(100px, 18vw, 220px)",
          top: "-4%",
          left: "-3%",
          opacity: 0.12,
          transform: "rotate(-18deg)",
          filter: "brightness(2)",
        }}
      />
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "clamp(80px, 14vw, 170px)",
          bottom: "-5%",
          right: "-2%",
          opacity: 0.1,
          transform: "rotate(22deg) scaleX(-1)",
          filter: "brightness(2)",
        }}
      />
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          width: "clamp(60px, 9vw, 120px)",
          top: "10%",
          right: "5%",
          opacity: 0.08,
          transform: "rotate(10deg)",
          filter: "brightness(2)",
        }}
      />
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          width: "clamp(50px, 7vw, 90px)",
          bottom: "12%",
          left: "6%",
          opacity: 0.07,
          transform: "rotate(-8deg)",
          filter: "brightness(2)",
        }}
      />

      {/* ── ghost text watermark ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{
            fontSize: "clamp(70px, 16vw, 200px)",
            opacity: 0.04,
            color: "#ffffff",
            letterSpacing: "0.06em",
          }}
        >
          THE MAKHANA MAN
        </span>
      </div>

      {/* ── main content ── */}
      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">

        {/* Label */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
          <span
            className="font-bold uppercase tracking-widest font-family-more-sugar"
            style={{
              fontSize: "clamp(10px, 1.6vw, 12px)",
              color: "#f5c842",
            }}
          >
            The Final Word
          </span>
          <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-bold uppercase leading-[1.0] text-white mb-5 font-family-more-sugar"
          style={{
            fontSize: "clamp(36px, 7vw, 88px)",
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          The Choice<br />is Clear
        </motion.h2>

        {/* Pills row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          {PILLS.map((pill, i) => (
            <span
              key={i}
              className="font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-family-more-sugar"
              style={{
                fontSize: "clamp(11px, 1.8vw, 14px)",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(4px)",
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Body copy */}
        <motion.p
          className="font-bold uppercase leading-relaxed tracking-wide text-white/75 max-w-2xl mb-10 font-family-more-sugar"
          style={{
            fontSize: "clamp(11px, 1.8vw, 15px)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          Once you've eaten a kernel chosen by hand, selected twice over,
          and roasted to order —{" "}
          <span className="text-white">
            there's simply no going back to ordinary makhana.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.38 }}
        >
          {/* Primary CTA */}
          <Link
            href="/products"
            className="font-family-more-sugar group relative inline-flex items-center gap-2 font-bold uppercase tracking-widest px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            style={{
              fontSize: "clamp(11px, 1.8vw, 14px)",
              backgroundColor: "#f5c842",
              color: "#0a3d26",
            }}
          >
            <span className="relative z-10">Know More About 7 Suta</span>
            {/* hover overlay */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "#ffe066" }}
            />
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%207%20Suta%20Makhana"
            target="_blank"
            rel="noopener noreferrer"
            className="font-family-more-sugar group inline-flex items-center gap-2 font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300"
            style={{
              fontSize: "clamp(11px, 1.8vw, 14px)",
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.45)",
            }}
          >
            {/* WhatsApp icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Order
          </a>
        </motion.div>

        {/* Shipping note */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* truck icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
            <rect x="1" y="3" width="15" height="13" rx="1"/>
            <path d="M16 8h4l3 5v4h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <p
            className="font-bold uppercase tracking-widest font-family-more-sugar"
            style={{
              fontSize: "clamp(9px, 1.4vw, 11px)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Free shipping above ₹500 · Pan India
          </p>
        </motion.div>

      </div>
    </section>
  )
}