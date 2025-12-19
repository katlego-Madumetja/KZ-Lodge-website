import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              KZ <span className="text-gradient-gold">Lodge</span>
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Your escape in Hammanskraal. Clean, secure, and welcoming 
              accommodation with pools, braai areas, and space to unwind.
            </p>
            <p className="text-sm text-muted-foreground">
              Trusted by over <span className="text-primary font-semibold">120+ guests</span>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Hammanskraal, SA
                </a>
              </li>
              <li>
                <a
                  href="tel:+27000000000"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +27 00 000 0000
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Booking
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kzlodge.co.za"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@kzlodge.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#amenities" className="text-muted-foreground hover:text-primary transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KZ Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
