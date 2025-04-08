import { Footer } from "../components/footer"
import { HeroSection } from "../components/heroSection"
import { NavBar } from "../components/navbar"
import SpotlightCard from "../components/SpotlightCard"

export const Home=()=>{

    return <div className="h-screen w-full">
         <NavBar/>
         <HeroSection/>
        
          <div className="w-full flex flex-col h-screen">
           <div className="w-full flex h-12 justify-center mb-16">
           <h1 className="text-7xl font-semibold">Explore Our Features</h1>
           </div>

           <div className="bg-black w-full flex justify-center items-center h-96 mt-8">
            <div className="mt-12 flex gap-4 justify-center items-center mb-12">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(233, 239, 240, 0.32)">
    Generate Instand Online Id Card
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(233, 239, 240, 0.32)">
Automatically generates a QR code with student info (e.g. JSON of their details).</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(233, 239, 240, 0.32)">
   Providing One-click download 
</SpotlightCard>
            </div>
           </div>

           <div>
            <Footer/>
           </div>
          </div>
    </div>
}