import React from 'react';
import Header from './ui/Header';
import HeroSection from './ui/HeroSection';
import Stats from './ui/Stats';
import AboutSection from './ui/AboutSection';
import ServiceSection from './ui/ServiceSection';
import FounderSection from './ui/FounderSection';
import TrainingSection from './ui/TrainingSection';
import ContactSection from './ui/ContactSection';



export default function Home(){
  return(
    <div>
      <Header />
      <HeroSection/>
      <Stats/>
      <AboutSection/>
      <ServiceSection/>
      <FounderSection/>
      <TrainingSection/>
      <ContactSection/>


    </div>
  )
}