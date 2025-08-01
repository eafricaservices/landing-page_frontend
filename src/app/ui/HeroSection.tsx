
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Hero Image"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 z-10 flex items-end justify-start p-6 sm:p-10 md:p-16 md:px-50 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="max-w-7xl space-y-6 text-white">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight"
          >
            Empowering Africa’s Workforce through Training, Innovation & Opportunity
          </motion.h1>

          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl"
          >
            Whether you’re building your career or your <br /> company, E-Africa is your partner for growth
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button className="bg-green-700 hover:bg-green-600 text-white px-15 py-9 text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition-all duration-300">
                For Individuals
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button className="border-2 border-green-700 hover:bg-green-700 text-white px-15 py-9 text-lg sm:text-xl font-semibold rounded-lg shadow-lg transition-all duration-300">
                For Companies
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

