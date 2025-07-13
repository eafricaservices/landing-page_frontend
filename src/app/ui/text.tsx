// import Image from "next/image";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function FounderSection() {
//   return (
//     <div className="bg-[#e5e5e5] py-12 max-w-[80%] mx-auto px-4 md:px-16">
//       <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center md:items-start gap-10">
        
//         <div className="w-full md:w-1/2">
//          <h2 className="text-xl font-bold tracking-wide text-center text-black mb-7">E-AFRICA</h2>
//           <div className="relative w-full h-[400px] md:h-[700px] rounded-xl overflow-hidden shadow-md">
//             <Image
//               width={400}
//               height={500}
//               src="/clinton.webp" 
//               alt="Clinton Imemeh"              
//               className="object-cover w-full"
//               priority
//             />
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 text-center md:text-left">         
//           <div className="w-16 h-1 bg-green-600 mb-4 mx-auto md:mx-0" />

//           <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
//             CLINTON IMEMEH
//           </h1>
//           <h3 className="text-lg font-medium text-black mb-4">CEO/FOUNDER, E-Africa</h3>
//           <p className="text-sm text-black leading-relaxed mb-6">
//             Clinton is a Business Strategist & Project Manager with experience in EdTech &
//             Digital Transformation. He has led training for over 1,000 professionals across Africa
//             & is committed to helping talents & companies grow through skills, innovation, &
//             impact.
//           </p>

//           <div className="flex justify-center md:justify-start gap-4 text-green-700 text-xl">
//             <a href="#" aria-label="Facebook" className="hover:text-green-900">
//               <FaFacebookF />
//             </a>
//             <a href="#" aria-label="Twitter" className="hover:text-green-900">
//               <FaTwitter />
//             </a>
//             <a href="#" aria-label="Instagram" className="hover:text-green-900">
//               <FaInstagram />
//             </a>
//             <a href="#" aria-label="LinkedIn" className="hover:text-green-900">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }