import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Amenities from "@/components/Amenities";
import Experience from "@/components/Experience";
import PerfectFor from "@/components/PerfectFor";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Amenities />
      <Experience />
      <PerfectFor />
      <Events />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
