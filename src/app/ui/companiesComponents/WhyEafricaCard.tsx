import React from 'react';
import Image from 'next/image';



const WhyEafricaCard = () => {
  return (
  <section className="mx-auto max-w-screen-xl px-4 md:px-6">
    <div className="py-8 md:py-10">
        <h2 className="text-lg md:text-3xl font-semibold uppercase tracking-wide text-black">
        Why Companies Trust E-Africa
        </h2>
        <p className="mt-13 text-center md:text-left text-sm md:text-xl leading-4 text-black">
        E-Africa Supports Organizations With Talent Development, Strategic Consulting, And
        Pre-Vetted Staffing Across Africa.
        </p>


        <div className="mt-10 text-center md:text-left space-y-3">       
        <article            
            className="flex flex-col md:flex-row items-center gap-4 rounded-md bg-neutral-700 p-10 text-white shadow-sm md:gap-6"
            >
            <div className="h-24 w-44 overflow-hidden rounded-sm border border-neutral-600 bg-neutral-600/40">
                <Image
                    width={176}
                    height={96}
                    src="/trust1.webp"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col space-y-5 md:space-y-10">
                <h3 className="text-lg md:text-2xl font-semibold leading-5">Workforce Training & Development
                </h3>
                <p className="text-lg md:text-2xl leading-5 text-neutral-200">Customized Soft + Technical Training For Modern Teams.</p>
            </div>
        </article>
        <article            
            className="flex flex-col md:flex-row items-center gap-4 rounded-md bg-[#B3B3B3] p-15 text-black shadow-sm md:gap-6"
            >
            <div className="h-24 w-44 overflow-hidden rounded-sm border border-neutral-600 bg-neutral-600/40">
                <Image
                    width={176}
                    height={96}
                    src="/trust2.webp"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col space-y-5 md:space-y-10">
                <h3 className="text-lg text-black md:text-2xl font-semibold leading-5">Talent Sourcing & Staffing</h3>
                <p className="text-lg md:text-2xl leading-5 text-black">Hire Pre-Vetted Junior–Mid Professionals From Our Pool.</p>
            </div>
        </article>
        <article            
            className="flex flex-col md:flex-row items-center gap-4 rounded-md bg-neutral-700 p-15 text-white shadow-sm md:gap-6"
            >
            <div className="h-24 w-44  overflow-hidden rounded-sm border border-neutral-600 bg-neutral-600/40">
                <Image
                    width={176}
                    height={96}
                    src="/trust3.webp"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col space-y-5 md:space-y-10">
                <h3 className="text-lg md:text-2xl font-semibold leading-5">Consulting & Strategy</h3>
                <p className="text-lg md:text-2xl leading-5 text-neutral-200">CX Design, AI Task Automation, And Digital Transformation</p>
            </div>
        </article>
        <article            
            className="flex flex-col md:flex-row items-center gap-4 rounded-md bg-[#B3B3B3] p-15 text-black shadow-sm md:gap-6"
            >
            <div className="h-24 w-44 overflow-hidden rounded-sm border border-neutral-600 bg-neutral-600/40">
                <Image
                    width={176}
                    height={96}
                    src="/trust4.webp"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col space-y-5 md:space-y-10">
                <h3 className="text-lg text-black md:text-2xl font-semibold leading-5">Employer Branding Services</h3>
                <p className="text-lg md:text-2xl leading-5 text-black">Optimize Your Presence On LinkedIn And Attract Talent.</p>
            </div>
        </article>
       
        </div>
    </div>
</section>
  )
}

export default WhyEafricaCard
