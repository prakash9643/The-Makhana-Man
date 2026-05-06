"use client"

import { motion } from "framer-motion"

const scrollToEnquiry = () => {
  const el = document.getElementById("enquiry-form")
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 20
  window.scrollTo({ top, behavior: "smooth" })
}

export function PartnerCTASection() {
  return (
    <section
      className="py-10 px-4"
      style={{ background: "linear-gradient(180deg, #e8f2ec 0%, #f9f3ea 100%)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          className="relative rounded-2xl overflow-visible"
          style={{
            background: "linear-gradient(135deg, #f3e8f7 0%, #eedad6 100%)",
            border: "1.5px solid #d4a8e0",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* ── MOBILE layout (< sm) ── */}
          <div className="flex sm:hidden flex-col items-center text-center px-5 pt-8 pb-6">
            <h2
              className="font-black text-[#7b2d8b] leading-tight mb-2 font-family-more-sugar"
              style={{ fontSize: "clamp(22px, 6vw, 28px)", letterSpacing: "0.01em" }}
            >
              Let's Build Something Healthy Together!
            </h2>
            <p
              className="text-[#7b2d8b] mb-5 font-family-cosmic-sans"
              style={{ fontSize: "13px", lineHeight: "1.5" }}
            >
              Partner with The Makhana Man and bring your brand vision to life.
            </p>
            <motion.button
              type="button"
              onClick={scrollToEnquiry}
              className="px-6 py-2.5 rounded-xl font-bold text-white uppercase tracking-widest font-family-more-sugar"
              style={{
                backgroundColor: "#7b2d8b",
                fontSize: "12px",
                letterSpacing: "0.08em",
                cursor: "pointer",
              }}
              whileHover={{ backgroundColor: "#6a2578", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Partner With Us
            </motion.button>
          </div>

          {/* ── DESKTOP layout (sm+) ── */}
          <div
            className="hidden sm:flex items-center px-8 md:px-14 py-8 md:py-10 relative"
            style={{ minHeight: "120px" }}
          >
            {/* Character */}
            <motion.img
              src="/images/newui_comics/8.png"
              alt="Makhana Man Superhero"
              className="absolute pointer-events-none select-none"
              style={{
                left: "66px",
                bottom: "0",
                height: "clamp(130px, 18vw, 200px)",
                width: "auto",
                objectFit: "contain",
                zIndex: 10,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />

            {/* Text + Button */}
            <div
              className="flex flex-row items-center justify-between w-full gap-5"
              style={{ paddingLeft: "clamp(120px, 16vw, 190px)" }}
            >
              <div>
                <h2
                  className="font-black text-[#7b2d8b] leading-tight font-family-more-sugar"
                  style={{ fontSize: "clamp(18px, 2.4vw, 28px)", letterSpacing: "0.01em" }}
                >
                  Let's Build Something Healthy Together!
                </h2>
                <p
                  className="mt-1 text-[#7b2d8b] font-family-cosmic-sans"
                  style={{ fontSize: "clamp(12px, 1.1vw, 14px)" }}
                >
                  Partner with The Makhana Man and bring your brand vision to life.
                </p>
              </div>

              <motion.button
                type="button"
                onClick={scrollToEnquiry}
                className="flex-shrink-0 px-7 py-3 rounded-xl font-bold text-white uppercase tracking-widest font-family-more-sugar"
                style={{
                  backgroundColor: "#7b2d8b",
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
                whileHover={{ backgroundColor: "#6a2578", scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Partner With Us
              </motion.button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}