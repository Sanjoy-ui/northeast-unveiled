import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatesSection from "@/components/StatesSection";
import PlacesSection from "@/components/PlacesSection";
import CultureSection from "@/components/CultureSection";
import FoodSection from "@/components/FoodSection";
import AdventureSection from "@/components/AdventureSection";
import TripPlannerSection from "@/components/TripPlannerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatesSection />
      <PlacesSection />
      <CultureSection />
      <FoodSection />
      <AdventureSection />
      <TripPlannerSection />
      <Footer />
    </main>
  );
};

export default Index;