"use client"

import { motion } from "framer-motion"

export default function JunkFood() {

  return (

    <section
      className="pt-16 md:pt-20 relative overflow-hidden"
      style={{ backgroundColor: "#DE2D49" }}
    >

      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between">

          {/* LEFT SIDE */}
          <div className="space-y-10 text-green-600 flex flex-col">

            {/* LOGO */}
            <div className="flex flex-row items-center mb-[50px]">
              <motion.img
                initial={{ y: -80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src="/images/logo.png"
                className="w-[150px] object-contain mr-4"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-[50px]"
            >
              <h4 className="font-semibold font-family-more-sugar mt-4 text-[#ffffff] md:text-[36px] text-[26px]">
                ⚠️ Side Effect: You might <br />
                forget junk food forever.
              </h4>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10 text-green-600 flex flex-col items-end justify-end text-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src="/images/New_comics/13.png"
                width={500}
              />
            </motion.div>
          </div>

        </div>

      </div>

    </section>

  )

}