import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import assameseImg from "@/assets/food/assamese-food.jpg";
import nagaPorkImg from "@/assets/food/naga-pork.jpg";
import jadohImg from "@/assets/food/jadoh.jpg";
import baiImg from "@/assets/food/bai.jpg";

const dishes = [
  {
    name: "Masor Tenga",
    state: "Assam",
    image: assameseImg,
    description: "A tangy fish curry made with tomatoes and elephant apple, served with steamed rice. A staple comfort food of Assamese cuisine.",
  },
  {
    name: "Smoked Pork",
    state: "Nagaland",
    image: nagaPorkImg,
    description: "Slow-cooked smoked pork with bamboo shoots and fiery Raja Mircha (King Chili). A hearty Naga delicacy.",
  },
  {
    name: "Jadoh",
    state: "Meghalaya",
    image: jadohImg,
    description: "Red rice cooked with pork and local spices. The signature dish of the Khasi tribe, full of earthy flavors.",
  },
  {
    name: "Bai",
    state: "Mizoram",
    image: baiImg,
    description: "A traditional stew with vegetables, pork, and fermented bamboo shoots. Simple yet incredibly flavorful.",
  },
];

const FoodSection = () => {
  return (
    <section id="food" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber/20 text-amber-dark text-sm font-medium mb-4">
            🍲 Culinary Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Food & Cuisine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover bold flavors, unique ingredients, and time-honored recipes passed down through generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  {dish.state}
                </Badge>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;