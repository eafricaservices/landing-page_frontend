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
      <section id='about' className="min-h-screen pt-20">
        <AboutSection/>
      </section>
      <section id='service' className="min-h-screen pt-20">
      <ServiceSection/>
      </section>
      <FounderSection/>
      <section id='' className="min-h-screen pt-20">
        <TrainingSection/>
      </section>
      <section id='contact' className="min-h-screen pt-20">
        <ContactSection/>
      </section>


    </div>
  )
}