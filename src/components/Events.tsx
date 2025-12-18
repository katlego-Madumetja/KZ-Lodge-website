import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import braaiImage from "@/assets/braai-area.jpg";

const Events = () => {
  const features = [
    "Spacious grounds for large gatherings",
    "Multiple pools & braai stands",
    "Secure parking for all guests",
    "Entertainment-friendly layout",
    "Flexible booking options",
  ];

  return (
    <section id="events" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">
              Host With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Events & <span className="text-gradient-gold">Group Bookings</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether it's a birthday bash, family reunion, or corporate retreat — 
              KZ Lodge has the space and facilities to make it memorable.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="gold" size="xl">
              Enquire About Events
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={braaiImage}
              alt="Event space at KZ Lodge"
              className="rounded-xl w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 rounded-xl border border-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
