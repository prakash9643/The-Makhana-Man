"use client";
import { motion } from "framer-motion";

export default function SplitPanel({ data }) {
  return (
    <section className="h-screen grid md:grid-cols-2 grid-cols-1 sticky top-0 px-4 md:px-0 py-8">
      
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
        </motion.div>
      </div>

      <div className="flex items-end justify-center bg-[#fffcfa]">
        {data.image && (
          <motion.img
            src={data.image}
            className="w-[450px] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          />
        )}
      </div>
    </section>
  );
}