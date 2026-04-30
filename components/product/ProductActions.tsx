// components/product/ProductActions.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ProductActions({
  product,
  quantities,
}: {
  product: any
  quantities: string[]
}) {
  const [selectedQty, setSelectedQty] = useState(quantities[1] ?? "250g")
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-col gap-5">

      {/* Select Quantity pills */}
      <div>
        <p className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[14px] mb-3 tracking-wide">
          Select Quantity
        </p>
        <div className="flex gap-3">
          {quantities.map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQty(q)}
              className={`px-5 py-2 rounded-lg border-2 font-bold font-family-cosmic-sans text-[14px] transition-all duration-200 ${
                selectedQty === q
                  ? "bg-[#1a5c3a] border-[#1a5c3a] text-white"
                  : "bg-white border-[#c8c8c8] text-[#4b3f3f] hover:border-[#3b6e8c]"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Counter + CTA row */}
      <div className="flex flex-wrap items-center gap-3">

        {/* Counter */}
        <div className="flex items-center gap-3 bg-white border border-[#d0d0d0] rounded-lg px-4 py-2">
          <button
            onClick={() => setCount((c) => Math.max(1, c - 1))}
            className="text-[#4b3f3f] text-xl font-bold leading-none hover:text-[#c14b33] transition-colors"
          >
            −
          </button>
          <span className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[16px] min-w-[20px] text-center">
            {count}
          </span>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="text-[#4b3f3f] text-xl font-bold leading-none hover:text-[#3ecf6e] transition-colors"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        {/* <motion.button
          className="flex items-center gap-2 border-2 border-[#1a5c3a] text-[#1a5c3a] font-bold font-family-cosmic-sans text-[14px] px-5 py-[10px] rounded-lg hover:bg-[#1a5c3a] hover:text-white transition-all duration-200"
          whileTap={{ scale: 0.97 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          Add to Cart
        </motion.button> */}

        {/* Buy Now */}
        <motion.a
          href={`/checkout/?add-to-cart=${product.id}&qty=${count}`}
          className="bg-[#1a5c3a] text-white font-bold font-family-cosmic-sans text-[14px] px-6 py-[10px] rounded-lg hover:bg-[#154d30] transition-all duration-200"
          whileTap={{ scale: 0.97 }}
        >
          Buy Now
        </motion.a>

      </div>
    </div>
  )
}