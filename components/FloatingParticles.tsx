"use client"

import { motion } from "framer-motion"

export default function FloatingParticles() {

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
    >
    Craving snacks that are <br/>
    healthy, crunchy, and <br/>
    guilt-free?
    </motion.p>

    {/* PHONE IMAGE ZOOM */}
    <motion.img
    src="/images/7.png"
    className="object-contain"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    />

    </motion.div>


    {/* RIGHT SIDE */}
    <motion.div
    className="w-full md:w-6/12 py-4 pb-[85px] pr-[35px] relative"
    >

    {/* LAPTOP ZOOM */}
    <motion.div
    className="justify-start flex"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    <img src="/images/6.png" alt="Makhana Sketch" />
    </motion.div>


    {/* SUPER MAKHANA SLIDE */}
    <motion.div
    className="justify-end flex"
    initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    >
    <img
    src="/images/1.png"
    className="absolute floating-superhero md:right-[-75px] right-[0] md:bottom-[-45px] bottom-[-15px]"
    width="150"
    alt="family snacks time"
    />
    </motion.div>

    </motion.div>

    </motion.div>

    </section>


)

}