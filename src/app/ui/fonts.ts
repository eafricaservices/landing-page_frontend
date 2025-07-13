import { Poppins } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const roboto_condensed =  Roboto_Condensed({
   subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap'

  
})
