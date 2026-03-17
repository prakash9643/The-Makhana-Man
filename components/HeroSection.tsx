"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Reveal from "./Reveal"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection(){

useEffect(()=>{

gsap.from(".hero-title",{
y:120,
opacity:0,
duration:1
})

gsap.to(".hero-character",{
y:-20,
repeat:-1,
yoyo:true,
duration:2
})
},[])


return(
<motion.div
      id="about"
      className={`
        flex flex-col md:flex-row hero
        md:min-h-screen
        py-4 sm:py-6 md:py-6 md:px-6
				bg-[#fffcfa]
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section: Text Content */}
      <motion.div
        className="
          w-full md:w-1/2
          flex items-center
          py-4 sm:py-6
          md:w-6/12
          md:min-h-[50vh]
          px-4 md:px-0
        "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="text-left relative">
					<img src={"/images/text-upper.png"} alt="text-upper" width="50" className="absolute top-[-20px] left-[-35px]" />
          <h2
            className="
              md:text-[4rem]
							text-[2.5rem]
              font-bold
              text-[#4a403f]
              mb-3
              leading-tight tracking-tight
              whitespace-nowrap
							comic-relief-bold
							hero-title
            "
          >
            Healthy <br/>Snacking <br/>Made Fun!
						<motion.img
                src="/images/1.png"
                alt="Super Hero Makhana Man"
                className="hero-fly absolute top-[-25px] right-[-15px] md:right-[-90px]" 
                width="150"
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
          </h2>
          <Link href="/products" className="cta hover:bg-[#a83a25] inline-block bg-[#c14b33] text-[#f8f8f0] cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold">
            View Products
          </Link>
        </div>
      </motion.div>

      {/* Right Section: Collage Image */}
      <motion.div
        className="w-full py-4 pb-0 px-4  md:w-6/12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <img
          src="/images/2.png"
          alt="Collage"
          className="
            mx-auto
            h-auto
            object-contain md:object-cover
            object-top md:object-center
						hero-character
          "
        />
      </motion.div>
    </motion.div>


)

}