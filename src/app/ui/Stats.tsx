'use client';
import React from 'react';
import CountUp from 'react-countup';
import {stats} from '@/app/lib/definition'



const Stats = () => {
  return (
    <div className=" md:mt-25 z-20">
    <div className="sm:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
          const hasPlus = stat.value.includes('+');
          const hasPercent = stat.value.includes('%');
    
          return (
            <div key={index} className="text-left">
              <div className="text-2xl md:text-5xl font-bold text-black mb-1">
                <CountUp
                  end={numericValue}
                  duration={4}
                  separator=","
                  suffix={hasPlus ? '+' : hasPercent ? '%' : ''}
                />
              </div>
              <div className="text-sm mt-5 text-black font-bold uppercase tracking-wide">
                {stat.label}
              </div>             
            </div>
          );
        })}
      </div>
      <div className='text-center mt-15 md:mt-23'>
        <p className='text-black text-lg sm:text-xl md:text-3xl'>E-Africa equips individuals with job-ready skills and helps organizations build better teams        
        through training, consulting, and talent sourcing.</p>
     </div>
    </div>
    </div>
  )
}

export default Stats
