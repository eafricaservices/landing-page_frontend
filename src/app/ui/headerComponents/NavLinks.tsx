import { signinProps } from '@/app/lib/definition'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLinks = ({className ='', onLinkClick}: signinProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path ? 'text-green-700 font-semibold underline underline-offset-2' : 'text-black-900 ';

  
  return (
    <div>
        <ul className="flex  flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-black">
            <li>
            <Link href="/" onClick={onLinkClick}  className={` text-sm md:text-lg ${isActive('/')} ${className}`}>Home</Link>
            </li>
            <li>
            <Link href="/individuals" onClick={onLinkClick} className={` text-sm md:text-lg ${isActive('/individuals')} ${className}`}>Individuals</Link>
            </li>
            <li>
            <Link href="/companies" onClick={onLinkClick} className={` text-sm md:text-lg ${isActive('/companies')} ${className}`}>Companies</Link>
            </li>
            <li>
            <Link href="/#service" onClick={onLinkClick} className={` text-sm md:text-lg ${isActive('/#service')} ${className}`}>Our Service</Link>
            </li>
            <li>
                <Link href="/#about" onClick={onLinkClick} className={` text-sm md:text-lg ${isActive('/#about')} ${className}`}>About Us</Link>
            </li>
            <li>
            <Link href="/#contact" onClick={onLinkClick} className={`text-sm md:text-lg ${isActive('/#contact')} ${className}`}>Contact Us</Link>
            </li>
        </ul>
      
    </div>
   
  )
}

export default NavLinks
