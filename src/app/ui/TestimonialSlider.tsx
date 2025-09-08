'use client';
import { useState } from 'react';
import { FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ayodele, Tech Recruiter',
    text: "E-Africa has made hiring seamless for us. We've found exceptional talent who have significantly added value to our team.",
  },
  {
    name: 'Henry, HR Manager',
    text: "With E-Africa, We've Effortlessly Hired Exceptional Talent Who Have Contributed Significantly To Our Company's Growth",
  },
  {
    name: 'Amy, CEO',
    text: "With E-Africa, We've Onboarded Top Talent Faster And More Efficiently Than Ever Before.",
  },
  {
    name: 'Brian, Student',
    text: 'E-Africa has been a game-changer for my career. The platform connected me with opportunities I never thought possible.',
  },
  {
    name: 'Sarah, Student',
    text: 'The mentorship I received through E-Africa was invaluable. It helped me navigate my career path with confidence.',
  },
  {
    name: 'John, Student',
    text: "E-Africa's job board is a treasure trove of opportunities. I landed my dream job thanks to their support.",
  },
  {
    name: 'Emily, Student',
    text: 'The community on E-Africa is incredibly supportive. I found mentors who genuinely care about my success.',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const total = testimonials.length;

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      result.push(testimonials[(currentIndex + i) % total]);
    }
    return result;
  };

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % total);

  return (
    <section className="relative  text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-10 -mt-8">
        <Image
          src="/hero-a.webp"
          alt="Background"        
          fill
          className="object-cover"
        />
        
      </div>

      <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-500">
          {getVisibleTestimonials().map((item, idx) => (
           <div
           key={idx}
           className="relative w-full max-w-sm text-black shadow-lg group transform transition-transform duration-500 hover:scale-105"
         >
           {/* V-shaped Top Section */}
           <div className="card-v-top h-20 bg-white z-10 rounded-t-xl relative" />
         
           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
             <Image
               src="/Ellipse.webp"
               alt="avatar"
               width={60}
               height={60}
               className="rounded-full border-4 border-white shadow-md"
             />
           </div>
         
           <div className="bg-white h-[200px] rounded-b-xl px-6 pt-10 pb-6 z-10 relative">
             <h4 className="font-semibold italic mb-1 text-center">~{item.name}</h4>
             <div className="flex justify-center mb-2 text-green-600">
               <FaCheck />
             </div>
             <p className="text-sm leading-relaxed text-center">{item.text}</p>
           </div>
         </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white text-black flex justify-center items-center shadow-lg"
          >
            <FaArrowLeft />
          </button>
          <span className="text-white font-medium">
            {(currentIndex % total) + 1}/{total}
          </span>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-green-600 text-white flex justify-center items-center shadow-lg"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
        <hr />      
    </section>
  );
};

export default TestimonialSlider;
