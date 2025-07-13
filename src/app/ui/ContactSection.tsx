'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">HAVE QUESTIONS?</h2>
        <p className="text-md md:text-lg font-medium text-gray-700">
          FILL THE FORM BELOW AND WE’LL GET BACK TO YOU
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 w-full border-r-2 md:border-r-green-700 md:pr-6">
          <div className="flex flex-col md:items-center items-center text-center md:text-left">
            <Image
              src="/E-africa.png" 
              alt="E-AFRICA Logo"
              width={120}
              height={50}
            />

            <h3 className="text-green-800 font-semibold mt-2 mb-4 text-lg md:xl">JOIN US ON</h3>

            <div className="flex gap-4 text-green-700 text-xl mb-6 justify-center md:justify-start">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 text-sm text-gray-800">
              <div>
                <p> Email</p>
                <p>
                     <span> <MdEmail /> empowerafrica.ng@gmail.com</span>
                  
                </p>
        
              </div>
               <div>
                <p>
                     Phone Number <br/> <span><MdPhone /> (+234) 907 662 8205 </span>
                  
                </p>
        
              </div>
               <div>
                <p>
                    Location <br/>
                    <span><MdLocationOn /> 794 Macallister St, San Francisco, 94102 </span>
                  
                   
                 
                </p>        
              </div>            
            </div>
          </div>
        </div>

        <form className="md:w-2/3 w-full space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-black px-4 py-3 text-black placeholder:text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-black px-4 py-3 text-black placeholder:text-black focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-black px-4 py-3 text-black placeholder:text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-black px-4 py-3 text-black placeholder:text-black focus:outline-none"
          />
          <button
            type="submit"
            className="border border-green-700 text-green-700 px-6 py-3 font-semibold hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
