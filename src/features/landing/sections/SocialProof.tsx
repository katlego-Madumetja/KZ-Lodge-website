import { motion } from "framer-motion";
import { Star, Shield, Sparkles, Users } from "lucide-react";

const SocialProof = () => {
  const stats = [
    { icon: Star, value: "3.7★", label: "Google Rating" },
    { icon: Users, value: "124+", label: "Happy Guests" },
    { icon: Shield, value: "24/7", label: "Security" },
    { icon: Sparkles, value: "100%", label: "Clean Rooms" },
  ];

  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-lg text-foreground/70">
            <span className="text-primary font-semibold">Guests love</span> our cleanliness, 
            security, and friendly staff
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
