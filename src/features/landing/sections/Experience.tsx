import { motion } from "framer-motion";
import poolImage from "@/assets/images/pool-night.jpg";
import braaiImage from "@/assets/images/braai-area.jpg";
import roomImage from "@/assets/images/room-interior.jpg";

const Experience = () => {
  const experiences = [
    {
      image: poolImage,
      caption: "Space to breathe",
      alt: "KZ Lodge swimming pool at night",
    },
    {
      image: braaiImage,
      caption: "Built for enjoyment",
      alt: "Braai and entertainment area",
    },
    {
      image: roomImage,
      caption: "Designed for comfort",
      alt: "Luxury room interior",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            The Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            A Place You'll <span className="text-gradient-gold">Return To</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/5]"
            >
              <img
                src={exp.image}
                alt={exp.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-display font-semibold text-foreground">
                  {exp.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
