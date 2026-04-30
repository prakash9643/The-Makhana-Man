// components/product/ProductGallery.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ProductGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [active, setActive] = useState(0)

  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden p-10 shadow-md"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      style={{ backgroundColor: "#f0e8d8" }}
    >
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={images[active] ?? "/images/14.png"}
          alt={name}
          className="w-full h-[340px] sm:h-[420px] md:h-[580px] object-contain object-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>

      {/* Thumbnails — absolute, left side, vertically centered inside main image */}
      {images.length > 1 && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-xl overflow-hidden border-[3px] transition-all duration-200 shadow-md ${
                active === i
                  ? "border-[#c14b33]"
                  : "border-white hover:border-[#3b6e8c]"
              }`}
              style={{ backgroundColor: "#f0e8d8" }}
            >
              <img
                src={src}
                alt={`${name} thumbnail ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  )
}