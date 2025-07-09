'use client'
import React from 'react'
import {Button} from '../Button'
import { signinProps } from '@/app/lib/definition'

const Signing = ({className =''}: signinProps) => {
  return (
    <div className={`flex items-center space-x-8  mt-5 ${className}`}>
       
       <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Talent Pool        
        </Button>      
    </div>
  )
}

export default Signing
