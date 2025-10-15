// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";
// import NavLinks from "./headerComponents/NavLinks";
// import Signing from "./headerComponents/Signing";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [closing, setClosing] = useState(false); // new state to manage close delay

//   // Shrink green bar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const totalScrollable = docHeight - windowHeight;
//       const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;
      
//       // Make the animation more responsive by using a smoother curve
//       const smoothProgress = Math.min(progress * 1.2, 1); // Slightly faster animation
//       setScale(Math.max(1 - smoothProgress, 0));
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Smooth close animation when clicking a link
//   const handleLinkClick = () => {
//     setClosing(true);
//     setTimeout(() => {
//       setMenuOpen(false);
//       setClosing(false);
//     }, 500); // match the transition duration
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.7)] 
//       transition-all duration-500 ease-in-out 
//       ${menuOpen && !closing ? "h-auto" : "h-[100px]"}`}
//       style={{ transform: `scaleY(${scale})`, transformOrigin: 'top' }}
//     >
//       {/* Desktop */}
//       <div className="hidden md:flex justify-between items-center p-3">
//         <div className="container mx-auto flex items-center justify-between space-x-6">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
//           </div>

//           {/* Navigation */}
//           <NavLinks className="text-lg space-x-6" />

//           {/* Signing */}
//           <Signing className="flex space-x-4 md:text-sm" />
//         </div>
//       </div>

//       {/* Mobile */}
//       <div className="md:hidden p-3">
//         {/* Top Row */}
//         <div className="flex justify-between items-center">
//           <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-900 focus:outline-none transition-transform duration-300"
//           >
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Dropdown */}
//         <div
//           className={`overflow-hidden transform transition-all duration-500 ease-in-out 
//             ${
//             menuOpen && !closing
//               ? "max-h-[500px] opacity-100 translate-y-0"
//               : "max-h-0 opacity-0 -translate-y-3"
//           }
          
//           ` }
//         >
//           <div className="flex flex-col mt-3 space-y-4">
//             <NavLinks className="text-sm" onLinkClick={handleLinkClick} />
//             <Signing
//               className="flex flex-row justify-between p-3"
//               onLinkClick={handleLinkClick}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Shrinkable green bar */}
//       <div
//         className="bg-green-600 h-[6px]"
//       ></div>
//     </header>
//   );
// };

// export default Header;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";
// import NavLinks from "../headerComponents/NavLinks";
// import Signing from "../headerComponents/Signing";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLinkClick = () => setMenuOpen(false);

//   // Sophisticated mobile menu animation variants
//   const menuVariants = {
//     hidden: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut" as const
//       }
//     },
//     visible: {
//       opacity: 1,
//       height: "auto" as const,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut" as const,
//         staggerChildren: 0.1,
//         delayChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       x: -20,
//       scale: 0.95
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut" as const
//       }
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.7)] w-full">
//       {/* Desktop */}
//       <div className="hidden md:flex justify-between items-center px-4 py-3">
//         <div className="container mx-auto flex items-center justify-between space-x-8 max-w-6xl">
//           <div className="flex items-center flex-shrink-0">
//             <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
//           </div>
//           <NavLinks className="text-base lg:text-lg space-x-4 lg:space-x-6 flex-1 justify-center" />
//           <Signing className="flex space-x-3 md:text-sm flex-shrink-0" />
//         </div>
//       </div>

//       {/* Mobile & Tablet */}
//       <div className="md:hidden px-3 py-3 w-full">
//         <div className="flex justify-between items-center w-full">
//           <div className="flex-shrink-0">
//             <Image src="/E-africa.png" alt="E-Africa Logo" width={100} height={100} />
//           </div>
//           <motion.button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-900 focus:outline-none p-2"
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.1 }}
//           >
//             <motion.div
//               animate={{ rotate: menuOpen ? 180 : 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </motion.div>
//           </motion.button>
//         </div>

//         {/* Sophisticated Animated Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={menuVariants}
//               className="overflow-hidden w-full mt-4"
//             >
//               <motion.div className="space-y-1">
//                 <motion.div variants={itemVariants}>
//                   <NavLinks className="text-sm space-y-2" onLinkClick={handleLinkClick} />
//                 </motion.div>
//                 <motion.div 
//                   variants={itemVariants}
//                   className="border-t border-gray-200 pt-3 mt-4"
//                 >
//                   <Signing
//                     className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0"
//                     onLinkClick={handleLinkClick}
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Green Progress Bar */}
//       <div className="bg-green-600 h-[6px]" />
//     </header>
//   );
// };

// export default Header;