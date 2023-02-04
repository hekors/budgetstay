import { Box } from "@chakra-ui/react";
import FacilitiesSection from "../common/components/elements/FacilitiesSection";
import HeroSection from "../common/components/elements/HeroSection";
import Navbar from "../common/components/elements/Navbar";

const AppView = () => {
  return (
    <main className="app-view">
      <Box>
        <Navbar />
        <HeroSection />
        <FacilitiesSection />
      </Box>
    </main>
  );
};

export default AppView;
