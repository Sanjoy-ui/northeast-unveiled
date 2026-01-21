import { motion } from "framer-motion";
import { MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import kazirangaImg from "@/assets/places/kaziranga.jpg";
import tawangImg from "@/assets/places/tawang.jpg";
import rootBridgesImg from "@/assets/places/root-bridges.jpg";
import loktakImg from "@/assets/places/loktak.jpg";
import ziroImg from "@/assets/places/ziro.jpg";
import nohkalikaiImg from "@/assets/places/nohkalikai.jpg";

const places = [
  {
    name: "Kaziranga National Park",
    state: "Assam",
    type: "Wildlife",
    image: kazirangaImg,
    description: "Home to two-thirds of the world's one-horned rhinoceros, this UNESCO World Heritage Site offers incredible wildlife safaris through diverse ecosystems of tall elephant grass, marshlands, and dense tropical forests.",
  },
  {
    name: "Tawang Monastery",
    state: "Arunachal Pradesh",
    type: "Heritage",
    image: tawangImg,
    description: "The largest monastery in India and second largest in the world, Tawang Monastery stands majestically at 10,000 feet, offering breathtaking views of the Himalayan peaks and profound spiritual experiences.",
  },
  {
    name: "Living Root Bridges",
    state: "Meghalaya",
    type: "Natural Wonder",
    image: rootBridgesImg,
    description: "A living testament to bioengineering, these bridges are handmade from the aerial roots of rubber fig trees by the Khasi and Jaintia tribes, some over 500 years old and still growing stronger.",
  },
  {
    name: "Loktak Lake",
    state: "Manipur",
    type: "Lake",
    image: loktakImg,
    description: "The largest freshwater lake in Northeast India, famous for its floating phumdis (heterogeneous masses of vegetation) and the world's only floating national park - Keibul Lamjao.",
  },
  {
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    type: "Valley",
    image: ziroImg,
    description: "A UNESCO World Heritage Site tentative list location, this picturesque valley is home to the Apatani tribe known for their sustainable wet rice cultivation and unique cultural practices.",
  },
  {
    name: "Nohkalikai Falls",
    state: "Meghalaya",
    type: "Waterfall",
    image: nohkalikaiImg,
    description: "India's tallest plunge waterfall at 340 meters, cascading dramatically into a turquoise pool below. The falls are named after a tragic local legend of Ka Likai.",
  },
];

const typeColors: Record<string, string> = {
  Wildlife: "bg-forest text-primary-foreground",
  Heritage: "bg-amber text-accent-foreground",
  "Natural Wonder": "bg-mist text-foreground",
  Lake: "bg-secondary text-secondary-foreground",
  Valley: "bg-forest-light text-primary-foreground",
  Waterfall: "bg-secondary text-secondary-foreground",
};

const PlacesSection = () => {
  return (
    <section id="places" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Must Visit Destinations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tourist Places
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient monasteries to living bridges, discover the extraordinary wonders that make North-East India truly unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <Badge className={`absolute top-4 left-4 ${typeColors[place.type]}`}>
                  {place.type}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {place.state}
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                  {place.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {place.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl">{place.name}</DialogTitle>
                      <DialogDescription className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {place.state}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full rounded-lg mb-4"
                      />
                      <Badge className={typeColors[place.type]}>{place.type}</Badge>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;