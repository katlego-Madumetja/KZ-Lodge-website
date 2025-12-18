import { motion } from "framer-motion";
import { Bed, SprayCanIcon, Shield, Waves, Flame, Heart } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Bed,
      title: "Affordable Accommodation",
      description: "Comfortable rooms at prices guests consistently praise.",
    },
    {
      icon: SprayCanIcon,
      title: "Spotlessly Clean & Quiet",
      description: "A peaceful environment that lets you truly rest.",
    },
    {
      icon: Shield,
      title: "Secure Parking & Security",
      description: "Peace of mind, day and night with 24/7 on-site security.",
    },
    {
      icon: Waves,
      title: "Multiple Swimming Pools",
      description: "Space to relax, swim, and enjoy without overcrowding.",
    },
    {
      icon: Flame,
      title: "Braai & Entertainment",
      description: "Perfect for chilling, celebrations, and group gatherings.",
    },
    {
      icon: Heart,
      title: "Friendly, Welcoming Staff",
      description: "Guests always mention how well they're treated.",
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why Guests Love <span className="text-gradient-gold">KZ Lodge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A local favourite for chilling, events, and overnight stays — 
            where comfort meets affordability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.1)]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
