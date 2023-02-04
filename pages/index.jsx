import { Box } from "@chakra-ui/react";
import FacilitiesSection from "../common/components/elements/FacilitiesSection";
import HeroSection from "../common/components/elements/HeroSection";

const AppView = () => {
  return (
    <main className="app-view">
      <Box>
        <HeroSection />
        <FacilitiesSection />
      </Box>
    </main>
  )
};

export default AppView;
