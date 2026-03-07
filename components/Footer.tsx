"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
<section className="pt-[30px] bg-white relative pb-[30px] overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>
        <motion.footer
            className="w-full py-12 px-6 md:px-16"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
                >

                {/* STORY TEXT */}
                <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <motion.h2
                    className="right-sidebar-new px-4 mb-2 font-family-cosmic-sans relative text-[#4b3f3f] text-[20px] font-bold"
                    initial={{ y: -80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    >
                    MAKHANA MAN’S STORY
                </motion.h2>

                <p className=" font-family-cosmic-sans px-4 relative text-[#4b3f3f] text-[16px]">
                THE MAKAHANA MAN WAS BORN TO SAVE PEOPLE FROM <strong>UNHEALTHY</strong> SNACKS!
                </p>
                </motion.div>


                {/* FOOTER GRID */}
                <div className="grid md:grid-cols-4 gap-10 items-start">

                {/* IMAGE */}
                <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >
                <img
                src="/images/17.png"
                alt="Makhana Man"
                className="w-[230px]"
                />
                </motion.div>


                {/* QUICK LINKS */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                >
                <h4 className="font-family-cosmic-sans relative text-[#4b3f3f] text-[19px] mb-4">QUICK LINKS</h4>

                <ul className="space-y-2 text-gray-700">
                <li><a href="/" className="text-[#4b3f3f] text-[14px] mb-2">HOME</a></li>
                <li><a href="#" className="text-[#4b3f3f] text-[14px] mb-2">ABOUT</a></li>
                <li><a href="#" className="text-[#4b3f3f] text-[14px] mb-2">CONTACT</a></li>
                </ul>
                </motion.div>


                {/* PRODUCTS */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                >
                <h4 className="font-family-cosmic-sans relative text-[#4b3f3f] text-[19px] mb-4">PRODUCTS</h4>

                <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="text-[#4b3f3f] text-[14px] mb-2">CLASSIC</a></li>
                <li><a href="#" className="text-[#4b3f3f] text-[14px] mb-2">REGULAR</a></li>
                <li><a href="#" className="text-[#4b3f3f] text-[14px] mb-2">PUDINA</a></li>
                </ul>
                </motion.div>


                {/* SOCIAL */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                >
                <h4 className="font-family-cosmic-sans relative text-[#4b3f3f] text-[19px] mb-4">FOLLOW US</h4>

                <div className="flex gap-4 mb-4">

                <motion.img
                src="/images/social-icons.png"
                width="80"
                whileHover={{ scale: 1.2 }}
                />

                </div>

                <p className="text-gray-700">CONTACT INFO :</p>

                </motion.div>

                </div>

                </motion.footer>

    </section>


  )
}