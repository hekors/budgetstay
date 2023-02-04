import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box className="hero-section-bg" bgColor={"black"} py={"20"}>
      <Heading fontSize={"6xl"} textColor={"white"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
        >
          <Text>{"Your one step"}</Text>
          <Text textColor={"blue.400"}>{"Destination,"}</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2"}
        >
          <Text>{"Mark a home away"}</Text>
          <Text textColor={"blue.400"}>{"from home."}</Text>
        </Box>
      </Heading>
      <Text textColor={"white"} fontSize={"lg"} textAlign={"center"} mt={"6"}>
        {"Leave your home stress free and make your new dynamic with ease."}
      </Text>
      <Box
        width={"fit-content"}
        display={"flex"}
        flexDirection={"row"}
        gap={"6"}
        mt={"12"}
        marginLeft={"auto"}
        marginRight={"auto"}
        position={"relative"}
      >
        <Img
          src={"/assets/free-tag.svg"}
          position={"absolute"}
          bottom={"-10"}
          left={"-32"}
        />
        <Button variant={"solid"} colorScheme={"blue"} size={"lg"}>
          {"Get Started"}
        </Button>
      </Box>
      <Img
        src={"/assets/buildings.svg"}
        display={"block"}
        marginRight={"auto"}
        marginLeft={"auto"}
        mt={"10"}
      />
    </Box>
  );
};

export default HeroSection;
