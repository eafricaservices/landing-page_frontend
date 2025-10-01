import React from 'react';
import { trustBullets } from '@/app/lib/definition';

const WhyEafricaList = () => {
  return (
   <section className=" border-y mt-2 bg-[#D9D9D9]">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="py-6 md:py-14">
                <h2 className="text-lg md:text-3xl font-semibold uppercase tracking-wide text-neutral-800">
            Why Companies Trust E-Africa
                </h2>
                <div className="mt-3 divide-y-2  divide-white">
                    {trustBullets.map((t, idx) => (
                    <div key={t} className="grid grid-cols-[1.75rem_1fr]  items-center gap-3 py-3">
                    <div className="flex h-5 w-5 md:h-25 items-center justify-center  text-sm md:text-2xl font-semibold text-green-800">
                    {String(idx + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm md:text-2xl leading-5 text-black">{t}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyEafricaList
