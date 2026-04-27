"use client"

import { motion } from "framer-motion"

import Link from "next/link"

const products = [
  { id: "classic-100g",  name: "CLASSIC", weight: "100g",  href: "/products/classic-makhana",     img: "/images/14.png", size: "small"  },
  { id: "classic-250g",  name: "CLASSIC", weight: "250g",  href: "/products/classic-makhana-250", img: "/images/14.png", size: "large"  },
  { id: "premium-250g",  name: "PREMIUM", weight: "250g",  href: "/products/premium-makhana",     img: "/images/13.png", size: "medium" },
]

const sizeMap = {
  small:  { img: "w-[120px] sm:w-[150px] md:w-[190px]", self: "self-end mb-4 md:mb-8" },
  large:  { img: "w-[180px] sm:w-[220px] md:w-[280px]", self: "self-end" },
  medium: { img: "w-[150px] sm:w-[185px] md:w-[230px]", self: "self-end mb-2 md:mb-4" },
}

export function HowItsMadeSection() {
  return (
    <section
      className="pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #f9f3ea 0%, #f9f3ea 70%, #e8f2ec 100%)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-7 sm:h-8 md:h-9 rounded-full flex-shrink-0 bg-[#6f8839]" />
            <h2 className="font-bold font-family-more-sugar text-[#6f8839] tracking-wide whitespace-nowrap text-[20px] sm:text-[26px] md:text-[32px]">
              EXPLORE BEST SELLERS
            </h2>
            <div className="flex-1 h-[2px] bg-[#7b5ea7]" />
          </div>
          <p className="font-family-cosmic-sans font-semibold ml-4 text-[#4b3f3f] text-[13px] sm:text-[15px] md:text-[17px]">
            Treat yourself to a snack that's as good for your body as it is for your taste buds.
          </p>
          <p className="font-family-more-sugar font-bold mt-1 ml-4 text-[#6f8839] text-[13px] sm:text-[15px] md:text-[17px]">
            THE MAKHANA MAN !
          </p>
        </motion.div>

        {/* Products */}
        <div className="flex flex-row items-end justify-center gap-4 sm:gap-8 md:gap-12 px-2 sm:px-6 md:px-10">
          {products.map((p, i) => {
            const { img: imgClass, self: selfClass } = sizeMap[p.size as keyof typeof sizeMap]
            return (
              <motion.div
                key={p.id}
                className={`flex flex-col items-center ${selfClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={p.href}>
                  <motion.img
                    src={p.img}
                    alt={`${p.name} ${p.weight} Makhana`}
                    className={`${imgClass} object-contain drop-shadow-md cursor-pointer`}
                    whileHover={{ scale: 1.04, y: -6 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <p className="font-bold font-family-more-sugar mt-3 text-[#4b3f3f] tracking-widest text-center text-[13px] sm:text-[15px] md:text-[17px]">
                  {p.name} <span className="text-[#6f8839]">{p.weight}</span>
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}