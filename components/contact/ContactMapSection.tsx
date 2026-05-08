"use client"

import { motion } from "framer-motion"

const districts = [
  { name: "Darbhanga", note: "Primary source district" },
  { name: "Madhubani", note: "Heritage cultivation zone" },
  { name: "Sitamarhi", note: "Floodplain farming belt" },
  { name: "Saharsa", note: "Premium 7S+ harvest area" },
  { name: "Katihar", note: "Our grading & dispatch hub" },
]

function StarDot({ color = "#046b46" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill={color} opacity="0.12" />
      <circle cx="7" cy="7" r="3" fill={color} />
    </svg>
  )
}

export function ContactMapSection() {
  return (
    <section
      className="relative pt-14 pb-14 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap font-family-more-sugar"
          style={{
            fontSize: "clamp(60px, 14vw, 190px)",
            opacity: 0.03,
            color: "#1A1A2E",
            letterSpacing: "0.04em",
          }}
        >
          BIHAR
        </span>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT — map embed */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: "2px solid #046b46",
                boxShadow: "0 8px 40px rgba(4,107,70,0.15)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4!2d87.5771!3d25.5394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef94b04a0c4f3f%3A0x9b48e24b2a3e0a9c!2sKatihar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Katihar Bihar Map"
              />
            
            </div>
          </motion.div>

          {/* RIGHT — districts */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
              <span className="font-bold uppercase tracking-widest text-[#046b46] text-[12px] sm:text-[13px] font-family-more-sugar">
                Where We Operate
              </span>
            </div>

            <h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] mb-5 font-family-more-sugar"
              style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
            >
              Rooted in<br />
              <span className="text-[#046b46]">Mithilanchal</span>
            </h2>

            <p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mb-7 max-w-[440px] font-family-cosmic-sans"
              style={{ fontSize: "clamp(11px, 1.5vw, 13px)" }}
            >
              Our sourcing network spans five key districts of North Bihar — the world&apos;s makhana heartland. All grading and dispatch happens from our Katihar facility.
            </p>

            {/* District list */}
            <div className="flex flex-col gap-3">
              {districts.map((d, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 rounded-2xl"
                  style={{
                    backgroundColor: i === 4 ? "#e8f4ee" : "#fff",
                    border: i === 4 ? "1.5px solid #046b46" : "1.5px solid #e4dcd1",
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                >
                  <StarDot color={i === 4 ? "#046b46" : "#c14b33"} />
                  <div className="flex items-center justify-between w-full">
                    <span
                      className="font-bold uppercase font-family-more-sugar"
                      style={{ fontSize: "clamp(12px, 2vw, 14px)", color: i === 4 ? "#046b46" : "#1A1A2E" }}
                    >
                      {d.name}
                    </span>
                    <span
                      className="font-bold uppercase tracking-widest font-family-cosmic-sans"
                      style={{ fontSize: "9px", color: "#7a6f6a" }}
                    >
                      {d.note}
                    </span>
                  </div>
                  {i === 4 && (
                    <span
                      className="flex-shrink-0 font-bold uppercase tracking-widest px-2 py-0.5 rounded-full font-family-cosmic-sans"
                      style={{ fontSize: "8px", backgroundColor: "#046b46", color: "#fff" }}
                    >
                      HQ
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}