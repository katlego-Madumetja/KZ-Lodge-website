import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/images/hero-lodge.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="KZ Lodge - Luxury accommodation in Hammanskraal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-6"
      >
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            KZ <span className="text-gradient-gold">Lodge</span>
          </h1>
          <div className="hidden md:flex items-center gap-8 text-foreground/80">
            <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#events" className="hover:text-primary transition-colors">Events</a>
            <Button variant="gold" size="sm">Book Now</Button>
          </div>
          <Button variant="gold" size="sm" className="md:hidden">Book</Button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-primary fill-primary" : "text-primary/40"}`}
              />
            ))}
          </div>
          <span className="text-foreground/70 text-sm">
            Trusted by 124+ guests
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight"
        >
          Relax. Refresh.
          <br />
          <span className="text-gradient-gold">Stay Secure.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Clean, secure, and welcoming accommodation with pools, braai areas, 
          and space to unwind — all at a price that makes sense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="xl">
            Book Your Stay
          </Button>
          <Button variant="hero-outline" size="xl">
            Plan an Event
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-sm text-foreground/50"
        >
          📍 Hammanskraal, South Africa
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
