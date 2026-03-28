"use client";
import { motion } from "framer-motion";

export default function UltraLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-yellow-100 to-white z-[9999] flex flex-col items-center justify-center overflow-hidden">

      {/* CLOUDS */}
      <motion.div
        className="absolute top-10 w-full flex justify-between px-10 opacity-60"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="w-24 h-10 bg-white rounded-full blur-md"></div>
        <div className="w-32 h-12 bg-white rounded-full blur-md"></div>
      </motion.div>

      {/* FLYING CHARACTER */}
      <motion.img
        src="/images/1.png"
        alt="loader"
        className="w-36 relative z-10"
        animate={{
          y: [0, -25, 0],
          rotate: [-8, 8, -8],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SPEED TRAIL */}
      <motion.div
        className="absolute w-40 h-2 bg-yellow-300 blur-md rounded-full"
        animate={{
          x: [-40, 40],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />

      {/* SHADOW */}
      <div className="w-20 h-3 bg-gray-400/40 rounded-full blur-md mt-6"></div>

      {/* TEXT */}
      <motion.p
        className="mt-6 text-gray-700 md:text-2xl text-xl font-family-more-sugar"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Delivering healthy crunch...
      </motion.p>

      {/* PROGRESS BAR */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-green-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />

    </div>
  );
}