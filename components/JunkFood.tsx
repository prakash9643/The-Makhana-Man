"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function JunkFood(){

return(

<section className="pt-[80px] bg-white relative overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="w-full relative">

{/* GRID */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between">

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col">

{/* TITLE */}
<div className="flex flex-row items-center mb-[50px] pl-[80px]">
<motion.img
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    src="/images/logo.png"
    className="w-[150px] object-contain mr-4"
    />
</div>
<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
className="text-center mt-[50px]"
>

	<h4 className="font-semibold font-family-more-sugar mt-4 text-[#171011] md:text-[36px] text-[26px]">
		⚠️ Side Effect: You might <br />
				forget junk food forever.
	</h4>

</motion.div>

</div>



{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col items-end justify-end text-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <motion.img
    src="/images/New_comics/13.png"
		width={500}
    />

</motion.div>
</div>
</div>


</div>

</section>

)

}