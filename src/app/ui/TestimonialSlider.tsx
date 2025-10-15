
// 'use client';
// import Image from 'next/image';
// import { FaCheck } from 'react-icons/fa';

// const testimonials = [
//   {
//     name: 'Ayodele, Tech Recruiter',
//     image: '/community-8.jpg',
//     text: "E-Africa has made hiring seamless for us. We've found exceptional talent who have significantly added value to our team.",
//   },
//   {
//     image: '/community-7.jpg',
//     name: 'Henry, HR Manager',
//     text: "With E-Africa, We've Effortlessly Hired Exceptional Talent Who Have Contributed Significantly To Our Company's Growth",
//   },
//   {
//     name: 'Amy, CEO',
//     image: '/community-2.jpg',
//     text: "With E-Africa, We've Onboarded Top Talent Faster And More Efficiently Than Ever Before.",
//   },
//   {
//     name: 'Brian, Student',
//     image: '/community-3.jpg',
//     text: 'E-Africa has been a game-changer for my career. The platform connected me with opportunities I never thought possible.',
//   },
//   {
//     name: 'Sarah, Student',
//     image: '/sarah.jpg',
//     text: 'The mentorship I received through E-Africa was invaluable. It helped me navigate my career path with confidence.',
//   },
//   {
//     name: 'John, Student',
//     image: '/community-5.jpg',
//     text: "E-Africa's job board is a treasure trove of opportunities. I landed my dream job thanks to their support.",
//   },
//   {
//     name: 'Emily, Student',
//     image: '/community-6.jpg',
//     text: 'The community on E-Africa is incredibly supportive. I found mentors who genuinely care about my success.',
//   },
// ];

// const TestimonialSlider = () => {
//   const doubledTestimonials = [...testimonials, ...testimonials];

//   return (
//     <section className="relative text-white text-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 z-0 -mt-8">
//         <Image
//           src="/hero-a.webp"
//           alt="Background"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Desktop: Horizontal continuous scroll */}
//       <div className="hidden sm:block relative z-10 py-16 px-4">
//         <div className="max-w-5xl mx-auto overflow-hidden">
//           <div className="flex gap-9 animate-scroll-x justify-center" style={{ paddingTop: '30px' }}>
//             {doubledTestimonials.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="relative w-80 text-black shadow-lg group rounded-xl bg-white flex-shrink-0"
//               >
//                 {/* V-shaped Top Section */}
//              <div className="card-v-top h-20 bg-white z-20 rounded-t-xl relative" />

//                 {/* Avatar */}
//                 <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                   <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-white shadow-md">
//                     <Image
//                       src={item.image || '/community-1.jpg'}
//                       alt="avatar"
//                       width={60}
//                       height={60}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Text section */}
//                 <div className="bg-white h-[200px] rounded-b-xl px-6 pt-10 pb-6 z-10 relative">
//                   <h4 className="font-semibold italic mb-1 text-center">~{item.name}</h4>
//                   <div className="flex justify-center mb-2 text-green-600">
//                     <FaCheck />
//                   </div>
//                   <p className="text-sm leading-relaxed text-center">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Vertical continuous scroll */}
//       <div className="block sm:hidden relative z-10 px-4 py-16 overflow-hidden h-[600px]">
//         <div className="flex flex-col gap-9 animate-scroll-y">
//           {doubledTestimonials.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative w-full max-w-sm mx-auto text-black shadow-lg group rounded-xl bg-white flex-shrink-0"
//             >
//               <div className="card-v-top h-20 bg-gradient-to-b from-green-500 to-green-600 z-10 rounded-t-xl relative" />
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
//                 <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-white shadow-md">
//                   <Image
//                     src={item.image || '/community-1.jpg'}
//                     alt="avatar"
//                     width={60}
//                     height={60}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="bg-white h-[200px] rounded-b-xl px-6 pt-10 pb-6 z-10 relative">
//                 <h4 className="font-semibold italic mb-1 text-center">~{item.name}</h4>
//                 <div className="flex justify-center mb-2 text-green-600">
//                   <FaCheck />
//                 </div>
//                 <p className="text-sm leading-relaxed text-center">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSlider;

'use client';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ayodele, Tech Recruiter',
    image: '/community-8.jpg',
    text: "E-Africa has made hiring seamless for us. We've found exceptional talent who have significantly added value to our team.",
  },
  {
    image: '/community-7.jpg',
    name: 'Henry, HR Manager',
    text: "With E-Africa, We've Effortlessly Hired Exceptional Talent Who Have Contributed Significantly To Our Company's Growth",
  },
  {
    name: 'Amy, CEO',
    image: '/community-2.jpg',
    text: "With E-Africa, We've Onboarded Top Talent Faster And More Efficiently Than Ever Before.",
  },
  {
    name: 'Brian, Student',
    image: '/community-3.jpg',
    text: 'E-Africa has been a game-changer for my career. The platform connected me with opportunities I never thought possible.',
  },
  {
    name: 'Sarah, Student',
    image: '/sarah.jpg',
    text: 'The mentorship I received through E-Africa was invaluable. It helped me navigate my career path with confidence.',
  },
  {
    name: 'John, Student',
    image: '/community-5.jpg',
    text: "E-Africa's job board is a treasure trove of opportunities. I landed my dream job thanks to their support.",
  },
  {
    name: 'Emily, Student',
    image: '/community-6.jpg',
    text: 'The community on E-Africa is incredibly supportive. I found mentors who genuinely care about my success.',
  },
];

const TestimonialSlider = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative text-white text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 -mt-8">
        <Image
          src="/hero-a.webp"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop: Horizontal continuous scroll */}
      <div className="hidden sm:block relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto overflow-hidden pt-20">
          <div className="flex gap-9 animate-scroll-x justify-center">
            {doubledTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="relative w-80 text-black shadow-lg group rounded-xl bg-transparent flex-shrink-0"
              >
                {/* V-shaped Top Section */}
                <div className="card-v-top h-20 rounded-t-2xl relative z-10" />

                {/* Card Body */}
                <div className="bg-white rounded-b-xl px-3 pt-5  h-[200px] relative z-10">
                  {/* Avatar */}
                  <div className="absolute -top-29 left-1/2 transform -translate-x-1/2 z-40">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={item.image || '/community-1.jpg'}
                        alt="avatar"
                        width={70}
                        height={70}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h4 className="font-semibold italic mb-1 text-center">~{item.name}</h4>
                  <div className="flex justify-center mb-2 text-green-600">
                    <FaCheck />
                  </div>
                  <p className="text-sm leading-relaxed text-center">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical continuous scroll */}
      <div className="block sm:hidden relative z-10 px-4 py-16 overflow-visible h-[600px]">
        <div className="flex flex-col gap-9 animate-scroll-y pt-8">
          {doubledTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-sm mx-auto text-black shadow-lg group rounded-xl bg-transparent flex-shrink-0"
            >
              <div className="card-v-top h-20 rounded-t-xl relative z-10" />
              <div className="bg-white rounded-b-xl px-3 pt-3  h-[200px] relative z-10">
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={item.image || '/community-1.jpg'}
                      alt="avatar"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-semibold italic mb-1 text-center">~{item.name}</h4>
                <div className="flex justify-center mb-2 text-green-600">
                  <FaCheck />
                </div>
                <p className="text-sm leading-relaxed text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
