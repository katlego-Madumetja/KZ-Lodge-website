import { motion } from "framer-motion";
import { Calendar, Moon, PartyPopper, Users, MapPin } from "lucide-react";

const PerfectFor = () => {
  const useCases = [
    { icon: Calendar, text: "Weekend getaways" },
    { icon: Moon, text: "Overnight stays" },
    { icon: PartyPopper, text: "Events & celebrations" },
    { icon: Users, text: "Chill days with friends" },
    { icon: MapPin, text: "Local & out-of-town visitors" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Perfect For
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              <useCase.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{useCase.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectFor;
