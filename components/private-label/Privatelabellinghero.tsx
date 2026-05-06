"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="#7B2D8B" strokeWidth="1.8" fill="none"/>
        <path d="M8 5V3M20 5V3" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="7" y="11" width="5" height="5" rx="1" stroke="#7B2D8B" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="11" width="5" height="5" rx="1" stroke="#7B2D8B" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Your Brand Identity",
    desc: "We pack it your way.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#7B2D8B" strokeWidth="1.8" fill="none"/>
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M18 13l2 2 4-4" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Premium Quality",
    desc: "Sourced & processed with care.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" stroke="#7B2D8B" strokeWidth="1.8" fill="none"/>
        <path d="M14 9v5l3 3" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M5 14H3M25 14h-2M14 3V5M14 23v2" stroke="#7B2D8B" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Flexible Options",
    desc: "Custom packs, sizes & recipes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8l10 7 10-7" stroke="#7B2D8B" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <rect x="4" y="8" width="20" height="13" rx="2.5" stroke="#7B2D8B" strokeWidth="1.8" fill="none"/>
        <path d="M4 11h20" stroke="#7B2D8B" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
    title: "End to End Support",
    desc: "From production to delivery.",
  },
]

// ✅ TypeScript prop type defined
type PrivateLabellingHeroProps = {
  onEnquireNow?: () => void
}

export function PrivateLabellingHero({ onEnquireNow }: PrivateLabellingHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">

          {/* ── LEFT: Text block ── */}
          <motion.div
            className="w-full lg:w-[30%] flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="font-black uppercase leading-none mb-2 text-[#7B2D8B] font-family-more-sugar"
              style={{ fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "0.01em" }}
            >
              Private<br />Labelling
            </h1>
            <p
              className="font-bold uppercase mb-4 text-[#1A1A2E] font-family-more-sugar"
              style={{ fontSize: "clamp(11px, 1.4vw, 15px)", letterSpacing: "0.06em" }}
            >
              Your Brand, Our Quality Makhana
            </p>
            <p
              className="mb-6 text-[#4b3f3f] leading-relaxed font-family-cosmic-sans"
              style={{ fontSize: "clamp(12px, 1.1vw, 14px)" }}
            >
              Create your own brand of healthy snacks with The Makhana Man. We handle the quality, you build the brand.
            </p>

            {/* ✅ onClick wired to prop, cursor pointer */}
            <motion.button
              type="button"
              onClick={onEnquireNow}
              className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-widest text-white rounded-lg font-family-more-sugar"
              style={{
                backgroundColor: "#7B2D8B",
                fontSize: "clamp(12px, 1.1vw, 14px)",
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.04, backgroundColor: "#6a2478" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Enquire Now
            </motion.button>
          </motion.div>

          {/* ── CENTER: Single Product Pack ── */}
          <motion.div
            className="w-full lg:w-[40%] flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <motion.img
              src="/images/private-labelling.png"
              alt="Your Brand Makhana Pack"
              className="w-[260px] sm:w-[360px] md:w-[520px] object-contain drop-shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* ── RIGHT: Feature pills ── */}
          <motion.div
            className="w-full lg:w-[30%] flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ede0f7", border: "1.5px solid #d8b8f0" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p
                    className="font-bold text-[#1A1A2E] leading-snug font-family-more-sugar"
                    style={{ fontSize: "clamp(12px, 1.15vw, 15px)", letterSpacing: "0.02em" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-[#4b3f3f] font-family-cosmic-sans"
                    style={{ fontSize: "clamp(11px, 0.9vw, 13px)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}