"use client";
import { motion } from "framer-motion";

export default function CenterHero({ data }) {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center sticky top-0"
      style={{ backgroundColor: data.bg_color }}
    >
      <motion.div>
        <motion.h1
          className="md:text-[4rem]
							text-[2.5rem]
              font-bold
              text-[#4a403f]
              mb-3
              leading-tight tracking-tight
              whitespace-nowrap
							comic-relief-bold
							hero-title"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          {data.title}
        </motion.h1>

        <motion.p
          className="text-[#4b3f3f] md:text-[22.7px] text-[18px] text-bold font-family-cosmic-sans mb-4 md:pr-[150px] md:pl-[150px] pr-[70px] pl-[70px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {data.description}
        </motion.p>        
      </motion.div>
      <motion.div initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}>
        <motion.img
          src="/images/1.png"
          alt="Super Hero Makhana Man"
          className="hero-fly my-10" 
          width="300"
          animate={{
            y: [0, -20, 0],
            x: [0, -30, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}