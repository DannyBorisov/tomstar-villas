import "./app.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { VillaDetails } from "./components/VillaDetails";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VillaDetails
        id="villas"
        title="RAWAI VILLA"
        subtitle="PRIVATE POOL VILLA IN PHUKET, THAILAND"
        description="Newly renovated private villa in top location with swimming pool, sun deck, shaded outside sitting areas, garden, backyard, top floor balconies, green views and tropical vibes. Perfect for family stays or groups of friends. Max occupancy: 9 people."
        amenities={[
          { icon: "bed", label: "BEDROOMS", value: "4" },
          { icon: "bath", label: "BATHROOMS", value: "4" },
          { icon: "pool", label: "PRIVATE POOL", value: "" },
          { icon: "kitchen", label: "FULLY EQUIPPED KITCHEN", value: "" }
        ]}
        image="/assets/rawai-hero.jpg"
        detailsLink="/villas/rawai"
      />
      <VillaDetails
        title="BANG TAO VILLA"
        subtitle="PRIVATE POOL VILLA IN BANG TAO, PHUKET"
        description="Newly renovated private villa in quiet surroundings with large swimming pool, pool bar, sun terrace, shaded outside sitting areas, sports/yoga corner, garden, and rooftop shaded area with mountain views. Perfect for family stays or groups of friends. Max occupancy: 9 people."
        amenities={[
          { icon: "bed", label: "BEDROOMS", value: "3" },
          { icon: "bath", label: "BATHROOMS", value: "3" },
          { icon: "pool", label: "LARGE PRIVATE POOL", value: "" },
          { icon: "kitchen", label: "FULLY EQUIPPED KITCHEN", value: "" }
        ]}
        image="/assets/bangtao-hero.jpg"
        detailsLink="/villas/bangtao"
        reverse={true}
      />
      <Footer />
    </>
  );
}
