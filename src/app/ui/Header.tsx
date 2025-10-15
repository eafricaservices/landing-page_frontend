"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./headerComponents/NavLinks";
import Signing from "./headerComponents/Signing";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Shrink green bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = totalScrollable > 0 ? scrollTop / totalScrollable : 0;
      
      // Make the animation more responsive by using a smoother curve
      const smoothProgress = Math.min(progress * 1.2, 1); // Slightly faster animation
      setScale(Math.max(1 - smoothProgress, 0));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLinkClick = () => setMenuOpen(false);

  // Sophisticated mobile menu animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 100,
      y: -50,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      y: -30,
      scale: 0.8,
      rotate: 3
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.7)] w-full min-w-full">
      {/* Desktop Only (1024px and up) */}
      <div className="hidden lg:flex justify-between items-center px-4 lg:px-6 xl:px-8 py-2 w-full">
        <div className="container mx-auto flex items-center justify-between space-x-4 lg:space-x-8 max-w-7xl w-full">
          <div className="flex items-center flex-shrink-0">
            <Image 
              src="/E-africa.png" 
              alt="E-Africa Logo" 
              width={110} 
              height={110}
              className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
            />
          </div>
          <NavLinks className="text-sm md:text-base lg:text-lg space-x-2 md:space-x-4 lg:space-x-6 flex-1 justify-center" />
          <Signing className="flex space-x-2 md:space-x-3 text-xs md:text-sm flex-shrink-0" />
        </div>
      </div>

      {/* Mobile and Tablet (up to 1023px) */}
      <div className="lg:hidden px-3 sm:px-4 py-3 w-full min-w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <Image 
              src="/E-africa.png" 
              alt="E-Africa Logo" 
              width={100} 
              height={100}
              className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-20 md:h-20"
            />
          </div>
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 focus:outline-none p-2 relative z-10 flex-shrink-0"
            whileTap={{ scale: 0.9, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ 
                rotate: menuOpen ? 180 : 0,
                scale: menuOpen ? 1.1 : 1 
              }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 200
              }}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Sophisticated Animated Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="overflow-hidden w-full mt-4 px-1"
            >
              <motion.div className="space-y-1 w-full">
                <motion.div variants={itemVariants} className="w-full">
                  <NavLinks className="text-sm space-y-2 w-full" onLinkClick={handleLinkClick} />
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="border-t border-gray-200 pt-3 mt-4 w-full"
                >
                  <Signing
                    className="flex flex-col space-y-2 xs:flex-row xs:justify-between xs:space-y-0 w-full"
                    onLinkClick={handleLinkClick}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shrinkable green Progress Bar */}
      <div 
        className="bg-green-600 h-[6px] w-full origin-left transition-transform duration-300 ease-out"
        style={{ transform: `scaleX(${scale})` }}
      />
    </header>
  );
};

export default Header;