import { motion } from "framer-motion";
import { Music, Users, Palette, PartyPopper } from "lucide-react";
import hornbillImg from "@/assets/culture/hornbill-festival.jpg";
import bihuImg from "@/assets/culture/bihu.jpg";

const culturalHighlights = [
  {
    icon: Users,
    title: "Tribal Diversity",
    description: "Home to over 200 tribes with distinct languages, traditions, and customs",
  },
  {
    icon: Palette,
    title: "Traditional Attire",
    description: "Exquisite handwoven textiles and colorful traditional dresses",
  },
  {
    icon: Music,
    title: "Folk Arts",
    description: "Vibrant dances, indigenous music, and ancient storytelling traditions",
  },
  {
    icon: PartyPopper,
    title: "Festivals",
    description: "Hornbill, Bihu, Wangala, and countless celebrations throughout the year",
  },
];

const funFacts = [
  "Meghalaya is the wettest place on Earth",
  "Nagaland has 16 major tribes, each with its own language",
  "Assam produces over half of India's tea",
  "Manipur gave the world Polo",
  "Mizoram has the highest literacy rate in India",
];

const CultureSection = () => {
  return (
    <section id="culture" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Rich Heritage
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Culture & Traditions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the vibrant tapestry of ancient traditions, colorful festivals, and living cultures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={hornbillImg} 
                alt="Hornbill Festival" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card mt-8">
              <img 
                src={bihuImg} 
                alt="Bihu Dance" 
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {culturalHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-6 text-center">
            ✨ Did You Know?
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 snap-center bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <p className="text-primary-foreground font-medium">{fact}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;