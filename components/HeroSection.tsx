"use client"

import { useEffect } from "react"
import gsap from "gsap"
import Reveal from "./Reveal"
import { motion } from "framer-motion"

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
gsap.to(".hero-fly",{

y:-30,
repeat:-1,
yoyo:true,
duration:2,
ease:"power1.inOut"

})

gsap.to(".hero-fly",{

x:20,
repeat:-1,
yoyo:true,
duration:4,
ease:"sine.inOut"

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
						<img src={"/images/1.png"} alt="Super Hero Makhana Man" className="hero-fly absolute top-[-25px] right-[-15px] md:right-[-60px]" width="150" />
          </h2>
          <button className="cta inline-block bg-[#B22B16] text-white px-6 py-2 rounded-md font-semibold">
            Add to Cart
          </button>
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