import React from 'react'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const TrainingSection = () => {
  return (
    <div className='md:max-w-[90%] lg:max-w-[8  0%] mx-auto md:mt-40'>
        <h1 className='text-black md:mb-8 text-lg md:text-5xl font-extrabold text-center'>
            TRAINNINGS
        </h1>
        <div className=' w-full px-5 md:px-20 border-4 border-gray-300 mt-5 flex flex-col md:flex-row items-center  p-6 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-9 md:min-h-[400px]'>
        <div className='min-h-fit w-full myd:px-10 md:max-h-[70%] md:h-full md:w-1/2 flex flex-col items-center justify-center py-6 transition-all duration-300 md:gap-10 hover:bg-white hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-110'>
            <p className=' text-center font-[montaga] md:text-[2.0rem]  text-[#13672B] mb-4'>
                Register now for our upcoming training session to unlock new career opportunities, enhance your skills, connect with top employers, and gain industry insights.
            </p>
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Register             
            <ArrowRight className="ml-2" size={30} />
        </Button>

        </div>
       
      
        <div className="w-full md:w-[48%] h-[500px] flex items-center justify-center overflow-hidden">
      <Image 
        src="/illustration.webp"
        alt="Hero Illustration"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-contain"
      />
    </div>
      
    </div>

    </div>
    
  )
}

export default TrainingSection
