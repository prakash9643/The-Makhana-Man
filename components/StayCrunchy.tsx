"use client"

import { motion } from "framer-motion"

const cards = [
  { id: 1, src: "/images/newui_comics/3.png", alt: "Makhana Hero Snack Sky Snack" },
  { id: 2, src: "/images/newui_comics/4.png", alt: "The Makhana Man" },
  { id: 3, src: "/images/newui_comics/1.png", alt: "Kids enjoying makhana" },
  { id: 4, src: "/images/newui_comics/14.png", alt: "Makhana product packs" },
  { id: 5, src: "/images/newui_comics/2.png", alt: "Order Now Makhana Man" },
  { id: 6, src: "/images/newui_comics/5.png", alt: "Share Your Makhana Moment" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function StayCrunchy() {
  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-8 bg-[#046b46] rounded-full flex-shrink-0" />
            <h2 className="font-bold hero-title uppercase leading-none text-[#1A1A2E] text-[20px] sm:text-[26px] md:text-[32px]">
              Stay Crunchy With Us
            </h2>
          </div>
          <p className="font-bold font-family-cosmic-sans uppercase tracking-widest ml-3 text-[#1A1A2E] text-[13px] sm:text-[15px] md:text-[17px]">
            Enjoy a snack that both a guilt free pleasure and a whole some choice.
          </p>
        </motion.div>

        {/* Grid + floating mascot */}
        <div className="relative pb-10 md:pb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="rounded-3xl overflow-hidden w-full aspect-video"
              >
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          <motion.img
            src="/images/1.png"
            alt="Makhana Man mascot"
            className="absolute w-24 md:w-36 lg:w-40 object-contain"
            style={{ zIndex: 50, right: "10px", bottom: "10px", transform: "translateY(30%)" }}
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{ y: [0, -10, 0] }}
          />
        </div>

      </div>
    </section>
  )
}

