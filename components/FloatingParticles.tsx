"use client"

import { motion } from "framer-motion"

export default function FloatingParticles() {

return (
    <section
    className="about section-padding  relative"
    style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}
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

    <motion.div
    className="flex flex-col md:flex-row w-full items-center justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    >

    {/* LEFT SIDE */}
    <motion.div
    className="w-full md:w-2/12 py-4"
    >


    {/* PHONE IMAGE ZOOM */}
    <motion.img
    src="/images/New_comics/2.png"
    className="object-contain"
    width={150}
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    />

    </motion.div>

    
    {/* LEFT SIDE */}
    <motion.div
    className="w-full md:w-8/12 py-4"
    >


    {/* PHONE IMAGE ZOOM */}
    <motion.img
    src="/images/New_comics/1.png"
    className="object-contain"
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    />

    </motion.div>
    {/* LEFT SIDE */}
    <motion.div
    className="w-full md:w-2/12 py-4"
    >


    {/* PHONE IMAGE ZOOM */}
    <motion.img
    src="/images/New_comics/3.png"
    className="object-contain"
    width={150}
    initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    />

    

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
    className="absolute floating-superhero right-[5px] bottom-[3px]"
    width="130"
    alt="family snacks time"
    />
    </motion.div>

    </motion.div>

    </section>


)

}