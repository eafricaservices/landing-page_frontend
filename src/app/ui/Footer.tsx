import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-200 px-4 md:px-20 lg:px-40 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
            <p className='text-black' >© 2025 E-Africa. All rights reserved.</p>
            <div>
                <p className='text-black'>All Rights Reserved | <span><a href="" target="_blank" rel="noopener noreferrer" className='text-green-500 underline underline-offset-2' >Privacy Policy</a></span> |  <span> <a href="http://" target="_blank" rel="noopener noreferrer" className='text-green-500 underline underline-offset-[2px]'> Terms of Service</a></span></p>

            </div>

        </div>
    </footer>
  )
}

export default Footer
