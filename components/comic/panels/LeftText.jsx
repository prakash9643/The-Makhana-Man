"use client";
import { motion } from "framer-motion";

export default function LeftText({ data }) {
  return (
    <section
      className="md:h-screen flex flex-col md:flex-row items-center gap-8 justify-between md:px-16 px-4 sticky py-8 top-0"
      style={{ backgroundColor: data.bg_color }}
    >
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="md:text-[4rem]
							text-[2.5rem]
              font-bold
              text-[#4a403f]
              mb-3
              leading-tight tracking-tight
              comic-relief-bold
							hero-title">
          {data.title}
        </h1>

        {/* Speech Bubble */}
        <div className="mt-6 bg-white text-black px-6 py-4 rounded-2xl shadow-xl relative">
          <p className="text-[#4b3f3f] md:text-[22.7px] text-[18px] text-bold font-family-cosmic-sans mb-4">{data.description}</p>

          <div className="absolute -bottom-3 left-6 w-6 h-6 bg-white rotate-45"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        {data.image && (
          <img
            src={data.image}
            className="w-[500px] rounded-2xl shadow-1xl"
          />
        )}
      </motion.div>
    </section>
  );
}