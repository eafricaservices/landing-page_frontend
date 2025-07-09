'use client';

import {  ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="w-full">
    <div className=''>
        <div className="text-center py-10 max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">ABOUT US</h2>
        </div>

      <div className="bg-green-800 ">
        <div className='md:max-w-[80%] md:mx-auto px-7 text-white py-10 md:py-20 flex flex-col sm:flex-row  justify-between md:gap-17 md:px-15'>
        <h3 className="text-xl font-bold mb-4 md:text-2xl ">E-AFRICA</h3>
        <p className="text-base text-white md:text-2xl  leading-relaxed max-w-5xl">
          E-Africa is a purpose-driven company empowering Africa’s workforce through training, talent development, and strategic consulting.
          <br />
          We equip individuals with in-demand skills and mentorship to grow their careers, while helping organizations across the continent build stronger teams through custom training, staffing support, and digital transformation solutions.
        </p>
        </div>        
      </div>
      <div className="py-16 sm:max-w-[90%] md:mx-auto md:mt-20 flex flex-wrap justify-around  px-6 md:px-20">
        <div className=''>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">WHO WE SERVE</h3>
            <p className="text-black mb-10 md:text-xl">Choose The Path That <br /> Matches Your Journey.</p>
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-between gap-10"> */}
        <div className="flex flex-wrap md:flex-col justify-center gap-10 sm:max-w-[80%] mx-auto">
          <div className="flex flex-col w-full sm:w-[45%] min-w-[290px] md:min-w-[380px] max-w-md text-left">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
              <Image
                width={300}
                height={450}
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
              <Link href="#" className="text-green-700 font-semibold text-sm underline underline-offset-2">
                Join Our Talent Pool
              </Link>
              <ArrowUpRight className="ml-2 text-green-600" size={20} />
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-[45%] min-w-[290px] md:min-w-[380px] max-w-md text-left">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
              <Image
                width={300}
                height={450}
                src="/serve-2.webp"
                alt="Employers, Business Leaders, HR Teams"
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
              <Link href="#" className="text-green-700 font-semibold text-sm underline underline-offset-2">
                Work With Us
              </Link>
              <ArrowUpRight className="ml-2 text-green-600" size={20} />
            </div>
          </div>
        </div>

      </div>
        </div>
      
    </section>
  );
};

export default AboutSection;
