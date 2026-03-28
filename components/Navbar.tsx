"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false)

return (

<motion.div
id="Nav"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
>

<nav className="nav w-full flex justify-between items-center py-4 sm:py-6 px-4 md:px-10">

{/* LOGO */}
<div className="logo">
    <Link href="/">
        <img src="/images/logo.png" width="150" height="100" alt="The Makhana Man Logo" />
    </Link>
</div>

{/* HAMBURGER */}
<div
className="md:hidden text-3xl cursor-pointer z-50"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

{/* DESKTOP MENU */}
<ul className="hidden md:flex menu text-xl font-medium gap-8">
<li><a href="/" className="text-comic-sans">Home</a></li>
<li><a href="/about" className="text-comic-sans">About</a></li>
<li><a href="/products" className="text-comic-sans">Products</a></li>
<li><a href="#" className="text-comic-sans">Contact</a></li>
</ul>

{/* MOBILE MENU */}
<AnimatePresence>

{menuOpen && (

<motion.div
initial={{ x: "100%" }}
animate={{ x: 0 }}
exit={{ x: "100%" }}
transition={{ duration: 0.4 }}
className="fixed top-0 right-0 w-[70%] h-[100%] bg-[#fffcfa] shadow-lg flex flex-col p-8 md:hidden z-50"
>

<div className="flex justify-end mb-8">
<button
onClick={()=>setMenuOpen(false)}
className="text-3xl"
>
✕
</button>
</div>

<ul className="flex flex-col gap-6 text-xl font-medium">

<li><a href="/" onClick={()=>setMenuOpen(false)}>Home</a></li>

<li><a href="/pages" onClick={()=>setMenuOpen(false)}>About</a></li>

<li><a href="/products" onClick={()=>setMenuOpen(false)}>Products</a></li>

<li><a href="#" onClick={()=>setMenuOpen(false)}>Contact</a></li>

</ul>

</motion.div>

)}

</AnimatePresence>

</nav>

</motion.div>

)
}