import React from 'react'
import Image from "next/image";
import { roboto_condensed } from "@/app/ui/fonts";
import Link from "next/link";
import { Button } from '../Button';


const HeroSect = () => {
return (
    <section className={`${roboto_condensed.className} relative mt-12 md:mt-47  mx-auto max-w-[90%] md:max-w-[80%]  flex flex-col items-center justify-center text-center bg-white text-black space-y-17 md:space-y-23`}>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-transparent" />
      <div className="relative z-10 w-full  space-y-5 md:space-y-7">
        <h1 className="text-4xl md:text-5xl font-bold">Empower Your Team. Hire Smarter. Grow Faster.</h1>
        <p className="text-lg md:text-3xl">
          E-Africa helps growth-driven companies across Africa train their teams, source vetted 
        </p>
         <p className="text-lg md:text-3xl">
          talent, and improve systems through consulting, AI, and strategy. 
        </p>
      </div>

      

 <div className="relative mx-auto mt-6 max-w-full overflow-hidden rounded-sm border bg-neutral-100">
  <Image
    width={1200}
    height={800}
    src="/discovery-img.webp"
    alt="Team meeting"
    className="h-auto w-full object-cover"
    style={{ aspectRatio: "16/9" }}
  />
     <div className="absolute inset-0 bg-black/50" />
    <div className="absolute mx-auto w-xs md:w-lg inset-x-0 z-10 bottom-10 flex justify-center rounded-sm bg-neutral-700  px-2 py-3 md:px-4 md:py-6 text-xs font-medium uppercase tracking-wide text-white shadow-md hover:bg-neutral-800 ">
          <Button asChild>
            <Link 
            href="#"
            className='text-white font-bold text-sm md:text-2xl'>
              Book A Discovery Call
            </Link>
          </Button>
      </div>
    </div>
    </section>
  );
}

export default HeroSect


      {/* <div className="relative mx-auto mt-6 max-w-full overflow-hidden rounded-sm border bg-neutral-100">
      <Image
        width={1200}
        height={800}
        src="/discovery-img.webp"
        alt="Team meeting"
        className="h-auto w-full object-cover"
        style={{ aspectRatio: "16/9" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-15 left-[20%]">
          <div className="flex w-xl justify-center pb-4 rounded-sm bg-neutral-700 px-6 py-7 text-xs font-medium uppercase tracking-wide text-white shadow-md hover:bg-neutral-800  ">
            <Link
            href="#"
            className="pointer-events-auto inline-flex items-center justify-center "
            >
            Book A Discovery Call
            </Link>
          </div>
      </div>
      </div>       */}