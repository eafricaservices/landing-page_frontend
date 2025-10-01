
'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Image from "next/image";
import ContactForm from "./ContactForm"; 

export default function ContactSection() {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-black md:text-4xl font-bold mb-2">HAVE QUESTIONS?</h2>
        <p className="text-md md:text-lg font-medium text-gray-700">
          FILL THE FORM BELOW AND WE’LL GET BACK TO YOU
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/5 w-full hidden sm:flex flex-col border-r-2 md:border-r-green-700 md:pr-6">
          <div className="flex flex-col items-start">
            <Image src="/E-africa.png" alt="E-AFRICA Logo" width={120} height={50} />
            <h3 className="text-green-800 font-semibold mt-2 mb-4 text-lg md:text-2xl">JOIN US ON</h3>
            <div className="flex gap-4 text-green-800 text-xl mb-6">
              <FaFacebookF /><FaTwitter /><FaInstagram /><FaLinkedinIn /><FaYoutube />
            </div>

            <div className="flex flex-col text-sm text-gray-800">
              <div className="mb-7">
                <p className="text-green-700 md:text-xl font-bold"> Email</p>
                <span className="flex flex-wrap items-start gap-2">
                  <MdEmail />
                  <p className="break-all">empowerafrica.ng@gmail.com</p>
                </span>
              </div>
              <div className="mb-7">
                <p className="text-green-700 md:text-xl font-bold"> Phone Number</p>
                <span className="flex flex-wrap items-start gap-2">
                  <MdPhone />
                  <p>(+234) 907 662 8205</p>
                </span>
              </div>
              <div>
                <p className="text-green-700 md:text-xl font-bold"> Location</p>
                <span className="flex flex-wrap items-start gap-2">
                  <MdLocationOn />
                  <p>794 Macallister St, San Francisco, 94102</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 w-full">
          <ContactForm />
        </div>
          <div className=" flex flex-col sm:hidden w-full  md:pr-6">
          <div className="flex flex-col items-center  text-center md:text-left">
            <Image
              src="/E-africa.png" 
              alt="E-AFRICA Logo"
              width={120}
              height={50}
            />

            <h3 className="text-green-800 font-semibold mt-2 mb-4 text-lg md:text-2xl">JOIN US ON</h3>

            <div className="flex gap-4 text-green-800 text-xl mb-6 justify-center md:justify-start">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>

            <div className="flex flex-col text-sm  text-gray-800">
              <div className="flex flex-col items-start gap-2 mb-7">
                <div className="flex flex-col w-full items-start">
                <p  className="text-green-700 md:text-xl font-bold"> Email</p>
                </div>
                <div>
                  <span className="flex flex-row items-center gap-2">
                    <MdEmail />
                    <p className="break-all whitespace-normal w-full">
                      empowerafrica.ng@gmail.com</p> 
                  </span>
                </div>  
              </div>

               <div className="flex flex-col items-start gap-2 mb-7">
                <div className="flex flex-col items-start w-full">
                <p  className="text-green-700 md:text-xl font-bold"> Phone Number</p>
                </div>
                <div>
                  <span className="flex flex-row items-center gap-2">
                    <MdPhone />
                    <p className="break-words whitespace-normal w-full">(+234) 907 662 8205</p> 
                  </span>
                </div>  
              </div>
               <div className="flex flex-col items-center gap-2 mb-7">
                <div className="flex w-full flex-col items-start">
                <p  className="text-green-700  md:text-xl font-bold"> Location</p>
                </div>
                <div>
                  <span className="flex flex-row items-left gap-2">
                    <MdLocationOn /> 
                    <p className="break-words whitespace-normal w-full">794 Macallister St, San Francisco, 94102</p> 
                  </span>
                </div>  
              </div>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}
