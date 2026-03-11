"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function InsstaMakhana(){

return(

<section className="pt-[80px] bg-white pb-[80px] relative overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="w-full relative">

{/* GRID */}

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col">

{/* TITLE */}
<div className="flex flex-row items-center mb-0 pl-[80px]">
<motion.img
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    src="/images/logo.png"
    className="w-[120px] object-contain mr-4"
    />
</div>
<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
className="text-center"
>

	<h4 className="font-semibold font-family-cosmic-sans text-[#171011] text-[26px]">
		On the`GRAM Socials feed <br /> Who is Your Makhna Man 
	</h4>

</motion.div>

</div>



{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col items-end justify-end text-center">
{/* TITLE */}
<div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-start justify-between">
<motion.img
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    src="/images/logo.png"
    className="w-[120px] object-contain mr-4"
    />
</div>
</div>
</div>

</section>

)

}