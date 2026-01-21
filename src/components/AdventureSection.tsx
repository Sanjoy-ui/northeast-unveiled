import { motion } from "framer-motion";
import { Mountain, Waves, Tent, Camera, Trees, Wind } from "lucide-react";
import raftingImg from "@/assets/adventure/rafting.jpg";
import trekkingImg from "@/assets/adventure/trekking.jpg";

const activities = [
  { icon: Mountain, name: "Trekking", description: "Explore Himalayan trails" },
  { icon: Waves, name: "River Rafting", description: "White water adventures" },
  { icon: Tent, name: "Camping", description: "Under starlit skies" },
  { icon: Camera, name: "Wildlife Safari", description: "Encounter exotic species" },
  { icon: Wind, name: "Paragliding", description: "Soar over valleys" },
  { icon: Trees, name: "Eco Tours", description: "Sustainable exploration" },
];

const AdventureSection = () => {
  return (
    <section id="adventure" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-forest to-forest-light" />
      
      <div className="relative z-10 container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/30 text-accent text-sm font-medium mb-4">
            Thrill Awaits
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Adventure & Eco-Tourism
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            From challenging treks to serene nature walks, North-East India offers adventures for every spirit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Images */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={trekkingImg} 
                alt="Himalayan Trekking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated mt-8">
              <img 
                src={raftingImg} 
                alt="River Rafting" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <activity.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-1">
                  {activity.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;