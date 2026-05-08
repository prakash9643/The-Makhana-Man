"use client"

import { motion } from "framer-motion"

export function ManifestoSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold uppercase whitespace-nowrap text-[#1A1A2E] font-family-more-sugar"
          style={{
            fontFamily: "'More Sugar', cursive",
            fontSize: "clamp(80px, 18vw, 220px)",
            opacity: 0.04,
            letterSpacing: "0.04em",
          }}
        >
          THE MAKHANA MAN
        </span>
      </div>

      <div className="relative max-w-screen-2xl  mx-auto px-4 md:px-8">

        {/* Label */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1 h-6 bg-[#046b46] rounded-full flex-shrink-0" />
          <span
            className="font-bold uppercase tracking-widest text-[#046b46] text-[12px] sm:text-[13px] font-family-more-sugar "
            style={{ fontFamily: "'More Sugar', cursive" }}
          >
            Our Manifesto
          </span>
        </motion.div>

        {/* Two-col layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT — big headline */}
          <motion.div
            className="w-full lg:w-[42%] flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-bold uppercase leading-[1.0] text-[#1A1A2E] font-family-more-sugar "
              style={{
                fontFamily: "'More Sugar', cursive",
                fontSize: "clamp(36px, 5.5vw, 52px)",
              }}
            >
              Good<br />
              makhana<br />
              is graded.{" "}
              <span className="italic text-[#c14b33]">Great</span><br />
              makhana<br />
              is chosen.
            </h2>

            <motion.p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] mt-6 text-[12px] sm:text-[13px] md:text-[14px] max-w-[320px] font-family-more-sugar "
              style={{ fontFamily: "'More Sugar', cursive" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Every kernel tells a story of sun, water, and patience.
              We just make sure only the perfect ones reach you.
            </motion.p>
          </motion.div>

          {/* RIGHT — body */}
          <motion.div
            className="w-full lg:w-[58%] flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* The 1% Standard heading */}
            <motion.h3
              className="font-bold uppercase text-[#c14b33] text-[18px] sm:text-[20px] md:text-[22px]"
              style={{ fontFamily: "'More Sugar', cursive" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The 1% Standard
            </motion.h3>

            {[
              "Nature rarely produces perfection. While the vast majority of the harvest is small and irregular, a tiny fraction reaches the majestic 7+ Suta (22.2mm) threshold. Most brands stop there, but we believe size is nothing without soul.",
              'We subject our largest kernels to a rigorous "hand-and-eye" audit in Katihar, discarding anything with a surface flaw or a structural weak point.',
            ].map((para, i) => (
              <motion.p
                key={i}
                className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] text-[12px] sm:text-[13px] md:text-[14px]"
                style={{ fontFamily: "'More Sugar', cursive" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.14 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Quote */}
            <motion.blockquote
              className="border-l-[3px] border-[#7B2D8B] pl-5 py-1 my-1"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.5 }}
            >
              <p
                className="font-bold uppercase text-[#7B2D8B] leading-snug tracking-wide text-[13px] sm:text-[15px] md:text-[16px]"
                style={{ fontFamily: "'More Sugar', cursive" }}
              >
                "We don't just sell makhana; we curate the top 1% of the harvest."
              </p>
            </motion.blockquote>

            <motion.p
              className="font-bold uppercase tracking-wide leading-relaxed text-[#4b3f3f] text-[12px] sm:text-[13px] md:text-[14px]"
              style={{ fontFamily: "'More Sugar', cursive" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.62 }}
            >
              A crunch that is{" "}
              <span className="text-[#046b46]">architectural in its precision</span>{" "}
              and legendary in its scale.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}