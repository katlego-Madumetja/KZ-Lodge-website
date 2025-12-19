import Hero from "./sections/Hero"
import Experience from "./sections/Experience"
import Amenities from "./sections/Amenities"
import PerfectFor from "./sections/PerfectFor"
import Events from "./sections/Events"
import Testimonials from "./sections/Testimonials"
import SocialProof from "./sections/SocialProof"
import Footer from "@/components/layout/Footer"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Experience />
      <Amenities />
      <PerfectFor />
      <Events />
      <Testimonials />
      <SocialProof />
      <Footer /> 
    </>
  )
}
