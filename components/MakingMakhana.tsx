"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MakingMakhana(){

return(

<section className="pt-[80px] bg-white relative pb-[80px] overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="max-w-6xl mx-auto px-4 relative">

{/* TITLE */}
<div className="flex flex-row items-center justify-between">
<motion.h2
    className="right-sidebar-new px-4 font-family-more-sugar relative text-[#3b6e8c] md:text-[32px]  text-[22px] font-bold mb-[40px]"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    HOW WE MAKE OUR PREMIUM MAKAHNA
</motion.h2>
</div>



{/* GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between">

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <img src="/images/16.png" alt="Classic Makhana" />

    <h4 className="font-semibold font-family-cosmic-sans mt-4 text-[#4b3f3f] md:text-[23px] text-[18px]">SEEDS HANDPICKED</h4>

</motion.div>

</div>



{/* RIGHT SIDE */}

<div className="space-y-10 text-green-600 flex justify-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <img src="/images/15.png" alt="Regular Makhana" />
		<ul className="list-disc pl-5">
			<li className="font-bold font-family-cosmic-sans mt-4 text-[#4b3f3f] md:text-[23px] text-[18px]">PREMIUM QUALITY</li>
			<li className="font-family-cosmic-sans mt-4 text-[#4b3f3f] md:text-[23px] text-[18px]">HANDPICKED SEEDS</li>
			<li className="font-family-cosmic-sans mt-4 text-[#4b3f3f] md:text-[23px] text-[18px]">HEALTHY ALTERNATIVE TO JUNK FOOD</li>
			<li className="font-family-cosmic-sans mt-4 text-[#4b3f3f] md:text-[23px] text-[18px]">HYGENIC PACKAGING</li>
		</ul>

</motion.div>

</div>

</div>


</div>

</section>

)

}