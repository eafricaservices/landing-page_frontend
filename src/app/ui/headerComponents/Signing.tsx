'use client'
import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { signinProps } from '@/app/lib/definition'

const Signing = ({ className = '', onLinkClick }: signinProps) => {
  return (
    <div className={`flex items-center space-x-8 mt-5 ${className}`}>
      <Link href="/talent-pool" onClick={onLinkClick}>
        <Button
          size="lg"
          className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Talent Pool
        </Button>
      </Link>
    </div>
  )
}

export default Signing
