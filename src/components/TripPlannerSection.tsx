import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const states = [
  "Assam",
  "Meghalaya",
  "Arunachal Pradesh",
  "Nagaland",
  "Manipur",
  "Mizoram",
  "Tripura",
  "Sikkim",
];

const interests = ["Nature", "Culture", "Adventure", "Food"];

const suggestions: Record<string, Record<string, string[]>> = {
  "Assam": {
    Nature: ["Kaziranga National Park", "Majuli Island", "Pobitora Wildlife Sanctuary"],
    Culture: ["Kamakhya Temple", "Sivasagar", "Sualkuchi Silk Village"],
    Adventure: ["River Rafting on Brahmaputra", "Jungle Safari", "Bird Watching"],
    Food: ["Jorhat Tea Gardens", "Local Assamese Thali Experience", "Khar Cooking Class"],
  },
  "Meghalaya": {
    Nature: ["Living Root Bridges", "Nohkalikai Falls", "Mawlynnong Village"],
    Culture: ["Khasi Heritage Village", "Wangala Festival", "Don Bosco Museum"],
    Adventure: ["Caving in Meghalaya", "Trek to Double Decker Bridge", "Zip Lining"],
    Food: ["Jadoh Tasting Tour", "Tungrymbai Experience", "Local Market Tour"],
  },
  "Arunachal Pradesh": {
    Nature: ["Tawang", "Ziro Valley", "Namdapha National Park"],
    Culture: ["Tawang Monastery", "Apatani Tribal Village", "Tribal Museums"],
    Adventure: ["Gorichen Peak Trek", "River Rafting", "Camping at Bumla Pass"],
    Food: ["Apong Rice Beer", "Tribal Cuisine Experience", "Bamboo Shoot Dishes"],
  },
  "Nagaland": {
    Nature: ["Dzukou Valley", "Japfu Peak", "Intanki Wildlife Sanctuary"],
    Culture: ["Hornbill Festival", "Kohima War Cemetery", "Tribal Villages"],
    Adventure: ["Dzukou Valley Trek", "Mountain Biking", "Rock Climbing"],
    Food: ["Smoked Meat Experience", "Raja Mircha Tour", "Traditional Naga Thali"],
  },
  "Manipur": {
    Nature: ["Loktak Lake", "Keibul Lamjao", "Sirohi National Park"],
    Culture: ["Kangla Fort", "Manipuri Dance", "Ima Keithel Market"],
    Adventure: ["Paragliding", "Trekking", "Kayaking on Loktak"],
    Food: ["Eromba Experience", "Chamthong Stew", "Black Rice Delicacies"],
  },
  "Mizoram": {
    Nature: ["Phawngpui Peak", "Vantawng Falls", "Dampa Tiger Reserve"],
    Culture: ["Chapchar Kut Festival", "Mizoram State Museum", "Local Weaving"],
    Adventure: ["Mountain Trekking", "Cave Exploration", "Bamboo Rafting"],
    Food: ["Bai Stew", "Misa Mach Poora", "Zu Rice Beer"],
  },
  "Tripura": {
    Nature: ["Neermahal Palace", "Jampui Hills", "Sepahijala Wildlife Sanctuary"],
    Culture: ["Ujjayanta Palace", "Fourteen Gods Temple", "Tribal Museums"],
    Adventure: ["Heritage Walks", "Nature Trails", "Boating"],
    Food: ["Mui Borok Cuisine", "Wahan Mosdeng", "Gudok Experience"],
  },
  "Sikkim": {
    Nature: ["Tsomgo Lake", "Nathula Pass", "Yumthang Valley"],
    Culture: ["Rumtek Monastery", "Pemayangtse Monastery", "Gangtok Heritage Walk"],
    Adventure: ["Goecha La Trek", "Paragliding", "Mountain Biking"],
    Food: ["Thukpa Experience", "Momos Workshop", "Chhang Tasting"],
  },
};

const TripPlannerSection = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const handleGetSuggestions = () => {
    if (selectedState && selectedInterest) {
      setShowResults(true);
    }
  };

  const results = selectedState && selectedInterest 
    ? suggestions[selectedState]?.[selectedInterest] || []
    : [];

  return (
    <section id="planner" className="section-padding bg-mist-light">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Compass className="w-4 h-4 inline mr-2" />
            Plan Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trip Planner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us your preferences and we'll suggest the perfect destinations for you.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select State
              </label>
              <Select value={selectedState} onValueChange={(v) => { setSelectedState(v); setShowResults(false); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {state}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select Interest
              </label>
              <Select value={selectedInterest} onValueChange={(v) => { setSelectedInterest(v); setShowResults(false); }}>
                <SelectTrigger>
                  <SelectValue placeholder="What interests you?" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest} value={interest}>
                      {interest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={handleGetSuggestions} 
            className="w-full"
            disabled={!selectedState || !selectedInterest}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get Suggestions
          </Button>

          {showResults && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 pt-6 border-t border-border"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Recommended for you in {selectedState}:
              </h3>
              <div className="space-y-3">
                {results.map((place, index) => (
                  <motion.div
                    key={place}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{place}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TripPlannerSection;