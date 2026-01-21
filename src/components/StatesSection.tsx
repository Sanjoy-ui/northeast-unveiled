import { motion } from "framer-motion";
import assamImg from "@/assets/states/assam.jpg";
import meghalayaImg from "@/assets/states/meghalaya.jpg";
import arunachalImg from "@/assets/states/arunachal.jpg";
import nagalandImg from "@/assets/states/nagaland.jpg";
import manipurImg from "@/assets/states/manipur.jpg";
import mizoramImg from "@/assets/states/mizoram.jpg";
import tripuraImg from "@/assets/states/tripura.jpg";
import sikkimImg from "@/assets/states/sikkim.jpg";

const states = [
  { name: "Assam", tagline: "Land of Red Rivers & Tea", image: assamImg },
  { name: "Meghalaya", tagline: "Abode of Clouds", image: meghalayaImg },
  { name: "Arunachal Pradesh", tagline: "Land of Rising Sun", image: arunachalImg },
  { name: "Nagaland", tagline: "Land of Festivals", image: nagalandImg },
  { name: "Manipur", tagline: "Jewel of India", image: manipurImg },
  { name: "Mizoram", tagline: "Land of Blue Mountains", image: mizoramImg },
  { name: "Tripura", tagline: "Land of Royalty", image: tripuraImg },
  { name: "Sikkim", tagline: "Kingdom in the Clouds", image: sikkimImg },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const StatesSection = () => {
  return (
    <section id="states" className="section-padding bg-mist-light">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            8 Unique States
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explore by State
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each state offers a distinct tapestry of culture, cuisine, and natural wonders waiting to be discovered.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {states.map((state) => (
            <motion.div
              key={state.name}
              variants={item}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-1">
                  {state.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {state.tagline}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatesSection;