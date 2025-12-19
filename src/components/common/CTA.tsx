import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lodge.jpg";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="KZ Lodge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Once you arrive, you'll understand why guests{" "}
            <span className="text-gradient-gold">keep coming back.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Book your stay today and experience affordable luxury in Hammanskraal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Book Your Stay
            </Button>
            <Button variant="gold-outline" size="xl">
              Contact KZ Lodge
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
