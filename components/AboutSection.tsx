"use client"

import { motion } from "framer-motion"

export default function AboutSection() {

return (

	<section
	className="about flex flex-col md:flex-row"
	style={{
	background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
	}}
	>

	<motion.div
	className="flex flex-col md:flex-row w-full items-end"
	initial={{ opacity: 0 }}
	whileInView={{ opacity: 1 }}
	viewport={{ once: true, amount: 0.3 }}
	transition={{ duration: 0.8 }}
	>

	{/* LEFT IMAGE */}
	<motion.div
	className="w-full md:w-6/12 py-4"
	initial={{ scale: 0.8, opacity: 0 }}
	whileInView={{ scale: 1, opacity: 1 }}
	transition={{ duration: 0.8 }}
	>

	<motion.img
	src="/images/3.png"
	className="object-contain"
	animate={{ y: [0, -10, 0] }}
	transition={{
	duration: 3,
	repeat: Infinity,
	ease: "easeInOut"
	}}
	/>

	</motion.div>


	{/* RIGHT CONTENT */}
	<motion.div
	className="w-full md:w-6/12 py-4 px-4 pb-0 pr-0"
	>

	{/* SKETCH IMAGE */}
	<motion.div
	className="justify-end flex"
	initial={{ x: -120, opacity: 0 }}
	whileInView={{ x: 0, opacity: 1 }}
	transition={{ duration: 0.8 }}
	>
	<img src="/images/4.png" alt="Makhana Sketch" />
	</motion.div>

	{/* HEADING */}
	<motion.h2
	className="md:text-[2.5rem] text-[2rem] text-center font-bold text-[#c14b33] hero-title"
	initial={{ y: -40, opacity: 0 }}
	whileInView={{ y: 0, opacity: 1 }}
	transition={{ duration: 0.7 }}
	>
	ABOUT US
	</motion.h2>

	{/* TEXT */}
	<motion.p
	className="text-[#6f8839] md:text-[22.7px] text-[18px] text-bold font-family-cosmic-sans mb-4"
	initial={{ y: 40, opacity: 0 }}
	whileInView={{ y: 0, opacity: 1 }}
	transition={{ duration: 0.7, delay: 0.2 }}
	>
	Makhana Man brings you delicious, crunchy, and healthy makhana snacks. Packed with nutrition and zero guilt.
	</motion.p>

	{/* BOTTOM IMAGE */}
	<motion.img
	src="/images/5.png"
	alt="family snacks time"
	initial={{ scale: 0.7, opacity: 0 }}
	whileInView={{ scale: 1, opacity: 1 }}
	transition={{ duration: 0.8, delay: 0.3 }}
	/>

	</motion.div>

	</motion.div>

	</section>

)

}