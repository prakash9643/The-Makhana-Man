"use client"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "HOME",    href: "/"         },
  { label: "ABOUT",   href: "/about"    },
  { label: "CONTACT", href: "#"         },
]

const navMobileLinks = [
  { label: "HOME",    href: "/"         },
  { label: "ABOUT",   href: "/about"    },
    { label: "CONTACT", href: "#"         },
    { label: "PRODUCTS",   href: "/products"    },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    if (latest > prev && latest > 80) {
      setHidden(true)   // scrolling down → hide
    } else {
      setHidden(false)  // scrolling up → show
    }
  })

  return (
    <motion.div
      id="Nav"
      variants={{
        visible: { y: 0,       opacity: 1 },
        hidden:  { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ backgroundColor: "#f9f3ea" }}
      className="w-full fixed top-0 z-50 shadow-sm"
    >
      <nav className="max-w-screen-2xl mx-auto px-4 md:px-8 flex justify-between items-center py-4 md:py-5">

        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <img src="/images/logo.png" width="130" height="90" alt="The Makhana Man Logo" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-xl tracking-widest px-5 hover:text-[#3b6e8c] transition-colors duration-200"
              >
                {link.label}
              </Link>
              <span className="text-[#3b6e8c] font-bold opacity-40 text-xl select-none">|</span>
            </div>
          ))}

          {/* ADD TO CART */}
          <div className="flex items-center gap-0">
            <Link
              href="/products"
              className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-xl tracking-widest px-5 hover:text-[#3b6e8c] transition-colors duration-200"
            >
              PRODUCTS
            </Link>
            <Link href="/cart">
              <motion.div
                className="w-10 h-10 rounded-full bg-[#3ecf6e] flex items-center justify-center ml-1 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl cursor-pointer z-50 text-[#1A1A2E]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/30 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-[70%] h-full shadow-xl flex flex-col p-8 md:hidden z-50"
                style={{ backgroundColor: "#f9f3ea" }}
              >
                <div className="flex justify-end mb-8">
                  <button onClick={() => setMenuOpen(false)} className="text-2xl text-[#1A1A2E]">✕</button>
                </div>
                <ul className="flex flex-col gap-6">
                  {navMobileLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[16px] tracking-widest hover:text-[#3b6e8c] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/products"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-2 bg-[#3ecf6e] text-white font-bold font-family-cosmic-sans text-[14px] tracking-widest px-5 py-2 rounded-full"
                    >
                      ADD TO CART
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </nav>
    </motion.div>
  )
}


// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useState } from "react"
// import Link from "next/link"

// const navLinks = [
//   { label: "HOME",    href: "/"         },
//   { label: "ABOUT",   href: "/about"    },
//     { label: "PRODUCTS",   href: "/Products"    },
//   { label: "CONTACT", href: "#"         },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <motion.div
//       id="Nav"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{ backgroundColor: "#f9f3ea" }}
//       className="w-full sticky top-0 z-50 shadow-sm"
//     >
//       <nav className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center py-4 md:py-5">

//         {/* LOGO */}
//         <Link href="/" className="flex-shrink-0">
//           <img src="/images/logo.png" width="130" height="90" alt="The Makhana Man Logo" />
//         </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-0">
//           {navLinks.map((link, i) => (
//             <div key={link.href} className="flex items-center">
//               <Link
//                 href={link.href}
//                 className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-xl tracking-widest px-5 hover:text-[#3b6e8c] transition-colors duration-200"
//               >
//                 {link.label}
//               </Link>
//               {/* Pipe separator */}
//               <span className="text-[#1A1A2E] opacity-40 text-[18px] select-none">|</span>
//             </div>
//           ))}

//           {/* ADD TO CART */}
//           <div className="flex items-center gap-0">
           
//             <Link href="/cart">
//               <motion.div
//                 className="w-10 h-10 rounded-full bg-[#3ecf6e] flex items-center justify-center ml-1 cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
//                   <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
//                 </svg>
//               </motion.div>
//             </Link>
//           </div>
//         </div>

//         {/* HAMBURGER */}
//         <button
//           className="md:hidden text-2xl cursor-pointer z-50 text-[#1A1A2E]"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           ☰
//         </button>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {menuOpen && (
//             <>
//               {/* Backdrop */}
//               <motion.div
//                 className="fixed inset-0 bg-black/30 z-40 md:hidden"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setMenuOpen(false)}
//               />

//               <motion.div
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ duration: 0.35, ease: "easeInOut" }}
//                 className="fixed top-0 right-0 w-[70%] h-full shadow-xl flex flex-col p-8 md:hidden z-50"
//                 style={{ backgroundColor: "#f9f3ea" }}
//               >
//                 <div className="flex justify-end mb-8">
//                   <button onClick={() => setMenuOpen(false)} className="text-2xl text-[#1A1A2E]">✕</button>
//                 </div>

//                 <ul className="flex flex-col gap-6">
//                   {navLinks.map((link) => (
//                     <li key={link.href}>
//                       <a
//                         href={link.href}
//                         onClick={() => setMenuOpen(false)}
//                         className="font-bold font-family-cosmic-sans text-[#1A1A2E] text-[16px] tracking-widest hover:text-[#3b6e8c] transition-colors"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                   <li>
//                     <Link
//                       href="/products"
//                       onClick={() => setMenuOpen(false)}
//                       className="inline-flex items-center gap-2 bg-[#3ecf6e] text-white font-bold font-family-cosmic-sans text-[14px] tracking-widest px-5 py-2 rounded-full"
//                     >
//                       ADD TO CART
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
//                         <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
//                       </svg>
//                     </Link>
//                   </li>
//                 </ul>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>

//       </nav>
//     </motion.div>
//   )
// }

