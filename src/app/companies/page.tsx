import React from 'react'
import Header from "../ui/Header";
import HeroSect from "../ui/companiesComponents/HeroSect";
// import MissionSection from "";
// import ValuesSection from "";
// import CallToAction from "";


const page = () => {
  return (
     <main className="min-h-screen bg-white">
      <Header />     
      <HeroSect />
      {/* <MissionSection />
      <ValuesSection />
      <CallToAction /> */}
    </main>
  )
}

export default page
