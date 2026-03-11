"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MakhanaStandard(){

return(

<section className="pt-[80px] bg-white relative pb-[80px] overflow-hidden" 
style={{
        background: "url('/images/makahna-bg.jpeg') no-repeat center/cover",
    }}>

<div className="max-w-6xl mx-auto px-4 relative">

{/* TITLE */}
<div className="flex flex-row items-center justify-center mb-12">
<motion.h2
    className="right-sidebar-new px-4 font-family-more-sugar relative text-[#3b6e8c] md:text-[32px]  text-[22px] font-bold mb-[40px]"
    initial={{ y: -80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    >
    The Makhana Man Standard
</motion.h2>
</div>



{/* GRID */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-between">

{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col items-center justify-center text-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <motion.img
    src="/images/New_comics/9.png"
    className="object-contain"
    style={{
        width: "150px",
        height:"150px"
    }}
    />

    <h4 className="font-semibold font-family-cosmic-sans mt-4 text-[#3b6e8c] text-[18px]">RICH TASTE</h4>

</motion.div>

</div>



{/* LEFT SIDE */}

<div className="space-y-10 text-green-600 flex flex-col items-center justify-center text-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <motion.img
    src="/images/New_comics/10.png"
    className="object-contain"
    style={{
        width: "150px",
        height:"150px"
    }}
    />

    <h4 className="font-semibold font-family-cosmic-sans mt-4 text-[#3b6e8c] text-[18px]">HANDMADE</h4>

</motion.div>
</div>

<div className="space-y-10 text-green-600 flex flex-col items-center justify-center text-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <motion.img
    src="/images/New_comics/11.png"
    className="object-contain"
    style={{
        width: "150px",
        height:"150px"
    }}
    />

    <h4 className="font-semibold font-family-cosmic-sans mt-4 text-[#3b6e8c] text-[18px]">PACKAGING</h4>

</motion.div>
</div>
<div className="space-y-10 text-green-600 flex flex-col items-center justify-center text-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>
    <motion.img
    src="/images/New_comics/12.png"
    className="object-contain"
    style={{
        width: "150px",
        height:"150px"
    }}
    />

    <h4 className="font-semibold font-family-cosmic-sans mt-4 text-[#3b6e8c] text-[18px]">QUALITY</h4>

</motion.div>
</div>


</div>


</div>

</section>

)

}