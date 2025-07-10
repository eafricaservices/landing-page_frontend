import React from 'react';
import Header from './ui/Header';
import HeroSection from './ui/HeroSection';
import Stats from './ui/Stats';
import AboutSection from './ui/AboutSection';
import ServiceSection from './ui/ServiceSection';



export default function Home(){
  return(
    <div>
      <Header />
      <HeroSection/>
      <Stats/>
      <AboutSection/>
      <ServiceSection/>


    </div>
  )
}