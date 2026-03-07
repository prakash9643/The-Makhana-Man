"use client"

import { motion } from "framer-motion"

export default function ComicSection() {

return (
    <section
    className="about flex flex-col md:flex-row section-padding"
    style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}
    >

    <motion.div
    className="flex flex-col md:flex-row w-full items-end"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    >

    {/* LEFT SIDE */}
    <motion.div
    className="w-full md:w-6/12 py-4"
    >

    <motion.p
    className="right-sidebar-new px-4 font-family-cosmic-sans relative text-[#3b6e8c] md:text-[24px] text-[20px] font-bold mb-6"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >OUR  Snack Hero Stories
    </motion.p>

    {/* PHONE IMAGE ZOOM */}
    <motion.img
    src="/images/8.png"
    className="object-contain"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    />

    </motion.div>


    {/* RIGHT SIDE */}
    <motion.div
    className="w-full md:w-6/12 py-4 relative"
    >

    {/* LAPTOP ZOOM */}
    <motion.div
    className="justify-start flex"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    <img src="/images/9.png" alt="Makhana Sketch" />
    </motion.div>

    </motion.div>

    </motion.div>

    </section>


)

}