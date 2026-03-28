"use client";
import { motion } from "framer-motion";
import Link from "next/link"
export default function SplitPanel({ data }) {
  return (
    <section className="h-screen grid grid-cols-2 sticky top-0">
      <div className="flex items-center justify-center bg-[#000]">
        {data.image && (
          <motion.img
            src={data.image}
            className="w-[450px] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          />
        )}
      </div>      
      <div
        className="flex items-center justify-center"
        style={{ backgroundColor: data.bg_color }}
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="max-w-md"
        >
          <h2 className="md:text-[4rem]
							text-[2.5rem]
              font-bold
              text-[#4a403f]
              mb-3
              leading-tight tracking-tight
							comic-relief-bold
							hero-title">{data.title}</h2>
          <p className="text-[#4b3f3f] md:text-[22.7px] text-[18px] text-bold font-family-cosmic-sans mb-4">{data.description}</p>
          <Link href="/products" className="cta hover:bg-[#a83a25] inline-block bg-[#c14b33] text-[#f8f8f0] cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold">
            View Products
          </Link>
        </motion.div>
      </div>

    </section>
  );
}