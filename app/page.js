import ExploreCourses from "@/components/ExploreCourses";
import Faqs from "@/components/Faq";
import FirstSection from "@/components/FirstSection";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSections";
import OurCommunity from "@/components/OurCommunity";
import SecondSection from "@/components/SecondSection";
import Testmonies from "@/components/Testmonies";



export default function Homepage() {
  return(
    <>
      <HeroSection />
      <LogosSection />
      <FirstSection />
      <SecondSection />
      <ExploreCourses />
      <Testmonies />  
      <OurCommunity/>
      <Faqs />  
    </>
  )
  
}