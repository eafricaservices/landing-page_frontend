"use client";
import React from 'react'
import {useState} from 'react';
import Image from 'next/image'
import {FaBars, FaTimes} from 'react-icons/fa'
import NavLinks from './headerComponents/NavLinks'  
import Signing from './headerComponents/Signing'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <header className="relative z-50 bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
        <div className="hidden md:flex flex-row justify-between items-center  space-x-6">     
        <div className="flex items-center mb-4 md:mb-0">
            <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
        </div>      
        
        <div>
          <NavLinks className='text-lg space-x-6 md:text-sm' />
        </div>          
        <div>
          <Signing className='flex space-x-4 md:text-sm' />    
        </div>
        </div>  
    
        <div className="flex flex-col justify-between md:hidden">
            <div className='flex flex-row justify-between w-full'>
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
              </div>  
              <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 focus:outline-none">
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
              </div>
            </div>          
    
          {menuOpen && (
            <div className=" flex flex-col  md:hidden mt-3 animate-slide-down space-y-4">           
                    <NavLinks className='text-sm'/>
                    <Signing className='flex flex-row justify-between p-3' />            
            
            </div>
         )}  
    </div>         

   
    </header>
  );
}


export default Header

