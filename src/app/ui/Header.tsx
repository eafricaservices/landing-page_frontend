// "use client";
// import React from 'react'
// import {useState} from 'react';
// import Image from 'next/image'
// import {FaBars, FaTimes} from 'react-icons/fa'
// import NavLinks from './headerComponents/NavLinks'  
// import Signing from './headerComponents/Signing'


// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
    
//   return (
//     <header className="sticky top-0 z-50 bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
//         <div className="hidden md:flex flex-row justify-between items-center  space-x-6">     
//         <div className="flex items-center mb-4 md:mb-0">
//             <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
//         </div>      
        
//         <div>
//           <NavLinks className='text-lg space-x-6 md:text-sm' />
//         </div>          
//         <div>
//           <Signing className='flex space-x-4 md:text-sm' />    
//         </div>
//         </div>  
    
//         <div className="flex flex-col justify-between md:hidden">
//             <div className='flex flex-row justify-between w-full'>
//                 <div className="flex items-center mb-4 md:mb-0">
//                     <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
//               </div>  
//               <div className="md:hidden">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 focus:outline-none">
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                     </button>
//               </div>
//             </div>          
    
//           {menuOpen && (
//             <div className=" flex flex-col  md:hidden mt-3 animate-slide-down space-y-4">           
//                     <NavLinks className='text-sm'/>
//                     <Signing className='flex flex-row justify-between p-3' />            
            
//             </div>
//          )}  
//     </div>         

   
//     </header>
//   );
// }


// export default Header

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./headerComponents/NavLinks";
import Signing from "./headerComponents/Signing";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight; 

      const totalScrollable = docHeight - windowHeight; 
      const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;

      setScale(Math.max(1 - progress, 0)); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className="sticky top-0 z-50 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
  {/* Desktop */}
  <div className="hidden md:flex justify-between items-center p-3">
    <div className="container mx-auto flex items-center justify-between space-x-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/E-africa.png"
          alt="E-Africa Logo"
          width={110}
          height={110}
        />
      </div>

      {/* Navigation */}
      <NavLinks className="text-lg space-x-6" />

      {/* Signing */}
      <Signing className="flex space-x-4 md:text-sm" />
    </div>
  </div>

  {/* Mobile */}
  <div className="flex flex-col justify-between md:hidden p-3">
    <div className="flex flex-row justify-between w-full">
      <div className="flex items-center mb-4 md:mb-0">
        <Image
          src="/E-africa.png"
          alt="E-Africa Logo"
          width={110}
          height={110}
        />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-900 focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>

    {menuOpen && (
      <div className="flex flex-col md:hidden mt-3 animate-slide-down space-y-4">
        <NavLinks className="text-sm" />
        <Signing className="flex flex-row justify-between p-3" />
      </div>
    )}
  </div>

  {/* Shrinkable green bar */}
  <div
    className="bg-green-600 h-[6px] origin-left transition-transform duration-75"
    style={{ transform: `scaleX(${scale})` }}
  ></div>
</header>

  );
};

export default Header;
