

'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Users, GraduationCap, Target, Sparkles, CalendarCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section className="w-full">
      {/* ABOUT HEADER */}
      <div className="text-center py-10 max-w-[80%] mx-auto">
        <h2 className="text-3xl text-black md:text-4xl font-bold">ABOUT US</h2>
      </div>

      {/* GREEN SECTION */}
      <div className="bg-green-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-10 md:py-16 lg:py-20 flex flex-col sm:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
          <motion.h3
            className="text-xl font-bold mb-4 md:text-2xl flex-shrink-0"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            E-AFRICA
          </motion.h3>

          <motion.p
            className="text-base text-white md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-4xl"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
          >
            E-Africa is a purpose-driven company empowering Africa’s workforce through training, talent development, and strategic consulting.
            <br />
            We equip individuals with in-demand skills and mentorship to grow their careers, while helping organizations across the continent build stronger teams through custom training, staffing support, and digital transformation solutions.
          </motion.p>
        </div>
      </div>

      {/* WHO WE SERVE SECTION */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full">
            
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial="hidden"
              whileInView="visible"
              variants={fadeLeft}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-black md:text-3xl font-bold mb-2">WHO WE SERVE</h3>
              <p className="text-black mb-4 md:text-xl">
                Choose The Path That Matches Your Journey.
              </p>
            </motion.div>

            {/* WHO WE SERVE CARDS */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 w-full max-w-6xl mx-auto">

              {/* GROW YOUR SKILLS */}
              <motion.div
                className="flex flex-col w-full md:w-1/2 max-w-md mx-auto text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.9, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 md:h-80 lg:h-94 rounded-xl overflow-hidden shadow-lg mb-6 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300">
                  <Image fill src="/serve-1.webp" alt="Grow Your Skills" className="object-cover w-full h-full" />
                </div>

                <h4 className="text-lg text-black font-semibold mb-2">Grow Your Skills. Get Hired</h4>
                <ul className="space-y-2 mt-4 text-sm text-black">
                  <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-green-700" /> Practical Skills Training</li>
                  <li className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-green-700" /> Job & Internship Access</li>
                  <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-green-700" /> LinkedIn & CV Optimization</li>
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-green-700" /> Mentorship & Career Coaching</li>
                </ul>

                <div className="mt-6 flex flex-row items-center">
                  <Link href="/talent-pool" className="text-green-700 font-semibold text-sm underline underline-offset-2">
                    Join Our Talent Pool
                  </Link>
                  <ArrowUpRight className="ml-2 text-green-600" size={18} />
                </div>
              </motion.div>

              {/* TRAIN, HIRE, TRANSFORM */}
              <motion.div
                className="flex flex-col w-full md:w-1/2 max-w-md mx-auto text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.2, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 md:h-80 lg:h-94 rounded-xl overflow-hidden shadow-lg mb-6 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300">
                  <Image fill src="/serve-2.webp" alt="Train, Hire, Transform" className="object-cover w-full h-full" />
                </div>

                <h4 className="text-lg text-black font-semibold mb-2">Train. Hire. Transform</h4>
                <ul className="space-y-2 mt-4 text-sm text-black">
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-green-700" /> Pre-Vetted Talent</li>
                  <li className="flex items-center gap-2"><Target className="h-4 w-4 text-green-700" /> Employer Branding</li>
                  <li className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-green-700" /> Strategy & Consulting</li>
                  <li className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-green-700" /> Book A Discovery Call</li>
                </ul>

                <div className="mt-6 flex flex-row items-center">
                  <Link href="/companies/#discovery" className="text-green-700 font-semibold text-sm underline underline-offset-2">
                    Work With Us
                  </Link>
                  <ArrowUpRight className="ml-2 text-green-600" size={18} />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
