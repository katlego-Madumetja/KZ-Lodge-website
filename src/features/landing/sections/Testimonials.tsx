import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Very reasonable prices and the rooms are extra clean. We'll definitely be back!",
      author: "Thabo M.",
      rating: 5,
    },
    {
      text: "The security gave us peace of mind. Secure parking and friendly staff made all the difference.",
      author: "Lerato K.",
      rating: 5,
    },
    {
      text: "Perfect for our family gathering. Multiple pools, braai area, and enough space for everyone.",
      author: "John D.",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Guest Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What Our Guests <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 bg-card border border-border rounded-xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-primary fill-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-muted-foreground font-medium">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
