import { motion } from "framer-motion";
import { ChevronDown, MapPin, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-northeast.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-accent/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✨ India's Best Kept Secret
          </motion.span>

          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the Hidden Paradise of{" "}
            <span className="text-accent">North-East India</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where ancient cultures meet breathtaking landscapes
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 text-primary-foreground/80 text-sm md:text-base mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {["Culture", "Nature", "Adventure", "Heritage"].map((item, idx) => (
              <span key={item} className="flex items-center gap-2">
                {idx > 0 && <span className="text-accent">•</span>}
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("states")}
              className="group"
            >
              <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Explore Regions
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              onClick={() => scrollToSection("places")}
            >
              <Compass className="w-5 h-5 mr-2" />
              Plan Your Trip
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("states")}
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;