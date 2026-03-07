"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TastyMakhana(){

return(

<section className="pt-[80px] bg-white relative pb-[80px] overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="max-w-6xl mx-auto px-4 relative">

{/* TITLE */}
<div className="flex flex-row items-center justify-between">
<motion.h2
    className="right-sidebar-new px-4 font-family-more-sugar relative text-[#3b6e8c] md:text-[32px] text-[24px] font-bold mb-[40px]"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    Our Tasty Makhana Snacks
</motion.h2>
</div>



{/* GRID */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
	<Link href="#">
    <img src="/images/14.png" alt="Classic Makhana" />
	</Link>

    <h4 className="font-semibold font-family-cosmic-sans text-center mt-4 text-[#4b3f3f] text-[23px]">Classic</h4>

</motion.div>

</div>


{/* CENTER IMAGE */}

<motion.div
className="flex flex-col justify-center items-center"
initial={{scale:0}}
whileInView={{scale:1}}
transition={{duration:0.7}}
>

<motion.h2
    className="right-sidebar-new px-4 font-family-more-sugar relative text-[#4b3f3f] text-[24px] font-bold mb-[40px]"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
     THE MAKAHNA MAN ?
</motion.h2>

</motion.div>


{/* RIGHT SIDE */}

<div className="space-y-10 text-green-600">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
	<Link href="/products/regular-makhana">
    <img src="/images/13.png" alt="Regular Makhana" />
	</Link>

    <h4 className="font-semibold font-family-cosmic-sans text-center mt-4 text-[#4b3f3f] text-[23px]">Regular</h4>

</motion.div>

</div>

</div>


</div>

</section>

)

}