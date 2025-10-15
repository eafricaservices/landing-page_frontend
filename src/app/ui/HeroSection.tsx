
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Hero Image"
        fill
        className="object-cover object-center z-0"
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center md:items-center md:justify-start md:pt-16 lg:pt-20 xl:pt-24 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="max-w-4xl xl:max-w-5xl w-full space-y-3 sm:space-y-4 md:space-y-6 text-white text-center md:text-left">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight"
          >
            Empowering Africa&apos;s Workforce through Training, Innovation & Opportunity
          </motion.h1>

          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto md:mx-0"
          >
            Whether you&apos;re building your career or your company, E-Africa is your partner for growth
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link href="/individuals">
              <Button className="bg-green-700 hover:bg-green-600 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-6 lg:py-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 w-full sm:w-auto">
                For Individuals
              </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Link href="/companies"> 
              <Button className="border-2 border-green-700 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-6 lg:py-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 w-full sm:w-auto">
                For Companies
              </Button>
              </Link>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

