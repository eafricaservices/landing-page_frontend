
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { roboto_condensed } from "@/app/ui/fonts";

export default function FounderSection() {
  return (
    <div className={`${roboto_condensed.className} relative mx-auto  bg-white py-12 px-4 md:px-10 w-full max-w-[95%] md:max-w-[90%] lg:max-w-[70%] box-border`}>
      <div className="bg-[#e5e5e5] h-5 md:h-10" />

      <div className="relative flex flex-col md:flex-row gap-2 justify-between bg-[#e5e5e5] md:h-[600px] lg:h-[480px] overflow-visible">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end pt-6 md:pt-0 relative z-0">
         <h2 className="text-xl mb-5 md:text-4xl font-bold text-center self-center md:text-left tracking-wide text-black">
            E-AFRICA
          </h2>
          <div className="relative w-[90%] md:w-[400px] h-[420px] md:h-[520px] -mb-10 md:-mb-20 z-0">
            <Image
              src="/clinton.jpg"
              alt="Clinton Imemeh"
              fill
              className="object-cover object-top rounded-md shadow-md"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6 md:pl-10 md:pr-8 flex flex-col justify-center z-10">
         
          <div className="w-24 h-1 bg-green-600 mb-4" />

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            CLINTON IMEMEH
          </h1>
          <h3 className="text-lg font-medium md:text-4xl text-black mb-4">
            CEO/FOUNDER, E-Africa
          </h3>
          <p className="text-sm text-black md:text-lg leading-relaxed mb-6">
            Clinton is a Business Strategist & Project Manager with experience in EdTech &
            Digital Transformation. He has led training for over 1,000 professionals across Africa
            & is committed to helping talents & companies grow through skills, innovation, & impact.
          </p>

          <div className="flex gap-4 text-green-700 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-green-900">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-900">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-900">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-900">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
