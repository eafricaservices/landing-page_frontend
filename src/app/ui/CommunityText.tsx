
import React from 'react'

const CommunityText = () => {
  return (
    <div className=' flex flex-col mt-30 items-center justify-center bg-white p-6 space-y-11'>
        <h1 className='text-black md:text-[2.0rem] font-extrabold ' > What Our Community Is  Saying</h1>
        <div className='w-full flex  flex-row gap-5 md:gap-19 items-center justify-center text-center font-[poppins] text-black'>
            <p className='hover:bg-gray-900 hover:p-4 hover:text-amber-50 hover:rounded-[30px]'>Hiring Manager</p>
            <p className='hover:bg-gray-900 hover:p-4 hover:text-amber-50 hover:rounded-[30px]' > Virtual Assistant</p>
            <p className='hover:bg-gray-900 hover:p-4 hover:text-amber-50 hover:rounded-[30px]' >Product design</p>
            <p className='hover:bg-gray-900 hover:p-4 hover:text-amber-50 hover:rounded-[30px]' >Customer care</p>

        </div>
      
    </div>
  )
}

export default CommunityText
