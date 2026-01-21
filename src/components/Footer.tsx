import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Experience North-East India
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Beyond the maps, beyond the ordinary — discover a world where nature, culture, and adventure unite.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#states" className="hover:text-accent transition-colors">States</a>
            <a href="#places" className="hover:text-accent transition-colors">Places</a>
            <a href="#culture" className="hover:text-accent transition-colors">Culture</a>
            <a href="#food" className="hover:text-accent transition-colors">Food</a>
            <a href="#adventure" className="hover:text-accent transition-colors">Adventure</a>
            <a href="#planner" className="hover:text-accent transition-colors">Trip Planner</a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            Made with ❤️ for North-East India
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} North-East India Tourism. All images are for illustrative purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;