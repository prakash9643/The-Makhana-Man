"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24"
      style={{
        background: "linear-gradient(160deg, #0a3d26 0%, #046b46 55%, #0d5c38 100%)",
      }}
    >
      {/* Decorative makhana images */}
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "clamp(80px,14vw,180px)",
          top: "-6%",
          left: "-2%",
          opacity: 0.1,
          transform: "rotate(-20deg)",
          filter: "brightness(2)",
        }}
      />
      <img
        src="/images/10.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          width: "clamp(60px,10vw,130px)",
          bottom: "-4%",
          right: "-1%",
          opacity: 0.09,
          transform: "rotate(16deg) scaleX(-1)",
          filter: "brightness(2)",
        }}
      />

      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{ fontSize: "clamp(60px,16vw,200px)", opacity: 0.05, color: "#ffffff", letterSpacing: "0.04em" }}
        >
          CONTACT
        </span>
      </div>

      <div className="relative flex flex-col items-center text-center px-4">

        {/* sub-label — matched to PillarsSection badge */}
        <motion.div
          className="flex items-center gap-2 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
          <span
            className="font-bold uppercase font-family-cosmic-sans"
            style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#f5c842" }}
          >
            The Makhana Man
          </span>
          <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: "#f5c842" }} />
        </motion.div>

        {/* heading — matched to PillarsSection h2 */}
        <motion.h1
          className="font-bold uppercase font-family-more-sugar text-white mb-5"
          style={{
            fontSize: "clamp(1.55rem, 2.8vw, 2.5rem)",
            lineHeight: 1.15,
            letterSpacing: "3px",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get in<br />
          <span style={{ color: "#f5c842" }}>Touch</span>
        </motion.h1>

        {/* subtext paragraph — matched to PillarsSection card <p> */}
        <motion.p
          className="font-bold uppercase font-family-cosmic-sans text-white/70 max-w-xl"
          style={{ fontSize: "13px", lineHeight: "1.6", letterSpacing: "0.05em" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Questions about 7+ Suta grade? Bulk orders? Wholesale enquiries?<br />
          We&apos;re just a message away — direct from Bihar&apos;s finest.
        </motion.p>

        {/* Decorative pills — matched to PillarsSection badge (cosmic-sans, 10px, 0.1em) */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
        >
          {["Bulk Orders.", "Wholesale.", "Gifting.", "Partnerships."].map((pill, i) => (
            <span
              key={i}
              className="font-bold uppercase font-family-cosmic-sans px-4 py-1.5 rounded-full"
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}