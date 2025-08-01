

'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Animation Variants
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
      <div className="text-center py-10 max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">ABOUT US</h2>
      </div>

      <div className="bg-green-800">
        <div className="md:max-w-[80%] md:mx-auto px-7 text-white py-10 md:py-20 flex flex-col sm:flex-row justify-between gap-10">
          <motion.h3
            className="text-xl font-bold md:text-2xl"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            E-AFRICA
          </motion.h3>

          <motion.p
            className="text-base md:text-2xl leading-relaxed max-w-5xl"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            E-Africa is a purpose-driven company empowering Africa’s workforce through training, talent development, and strategic consulting.
            <br />
            We equip individuals with in-demand skills and mentorship to grow their careers, while helping organizations across the continent build stronger teams through custom training, staffing support, and digital transformation solutions.
          </motion.p>
        </div>
      </div>

      <div className="py-16 md:max-w-[90%] md:mx-auto md:mt-10 flex flex-col">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <motion.div
              className="md:flex-1/7 text-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">WHO WE SERVE</h3>
              <p className="text-black mb-10 md:text-xl">
                Choose The Path That <br /> Matches Your Journey.
              </p>
            </motion.div>

            <div className="flex flex-col p-6 sm:flex-row w-auto gap-5">
              <motion.div
                className="flex flex-col w-full sm:w-[45%] max-w-md text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-94 min-w-50 rounded-xl overflow-hidden shadow-lg mb-6">
                  <Image
                    fill
                    src="/serve-1.webp"
                    alt="Job Seekers, Students, Career Starters"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Grow Your Skills. Get Hired</h4>
                <ul className="text-sm text-black space-y-1 mb-4">
                  <li>• Practical Skills Training</li>
                  <li>• Join Our Talent Pool</li>
                  <li>• Job & Internship Access</li>
                  <li>• Mentorship & Career Coaching</li>
                  <li>• LinkedIn & CV Optimization</li>
                </ul>
                <div className="flex flex-row">
                  <Link
                    href="#"
                    className="text-green-700 font-semibold text-sm underline underline-offset-2"
                  >
                    Join Our Talent Pool
                  </Link>
                  <ArrowUpRight className="ml-2 text-green-600" size={20} />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col w-full sm:w-[45%] max-w-md text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-94 min-w-50 rounded-xl overflow-hidden shadow-lg mb-6">
                  <Image
                    fill
                    src="/serve-2.webp"
                    alt="Companies and Partners"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Train. Hire. Transform</h4>
                <ul className="text-sm text-black space-y-1 mb-4">
                  <li>• Pre-Vetted Talent</li>
                  <li>• Strategy & Consulting</li>
                  <li>• Employer Branding</li>
                  <li>• Book A Discovery Call</li>
                </ul>
                <div className="flex flex-row">
                  <Link
                    href="#"
                    className="text-green-700 font-semibold text-sm underline underline-offset-2"
                  >
                    Work With Us
                  </Link>
                  <ArrowUpRight className="ml-2 text-green-600" size={20} />
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
