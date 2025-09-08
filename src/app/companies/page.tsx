import React from 'react'
import HeroSect from "../ui/companiesComponents/HeroSect";
import WhyEafricaList from '../ui/companiesComponents/WhyEafricaList';
import WhyEafricaCard from '../ui/companiesComponents/WhyEafricaCard';
import DiscoveryForm from '../ui/companiesComponents/DiscoveryForm';



const page = () => {
  return (
     <main className="min-h-screen bg-white">
      <HeroSect />
      <WhyEafricaList />
      <WhyEafricaCard />
      <DiscoveryForm />
    </main>
  )
}

export default page
