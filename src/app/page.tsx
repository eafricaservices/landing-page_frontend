import React from 'react';
import HeroSection from './ui/HeroSection';
import Stats from './ui/Stats';
import AboutSection from './ui/AboutSection';
import ServiceSection from './ui/ServiceSection';
import FounderSection from './ui/FounderSection';
import TrainingSection from './ui/TrainingSection';
import ContactSection from './ui/ContactSection';
import CommunityText from './ui/CommunityText';
import TestimonialSlider from './ui/TestimonialSlider';
import Footer from './ui/Footer';



export default function Home(){
  return(
    <div>
      <HeroSection/>      
      <Stats/>
      <section id='about' className="min-h-screen pt-20">
        <AboutSection/>
      </section>
      <section id='service' className="min-h-screen pt-35">
      <ServiceSection/>
      </section>
      <FounderSection/>
      <section id='' className="min-h-screen pt-20">
        <TrainingSection/>
      </section>
      <section id='contact' className=" pt-30">
        <ContactSection/>        
      </section>
        <CommunityText  />
        <TestimonialSlider/>
        <Footer />
    </div>
  )
}