import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../../layouts/BaseLayout";

const Navbar = () => {
  return (
    <Box bgColor={"black"}>
      <BaseLayout
        flexDirection={"row"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link href="/">
          <Image
            src={"/icons/logo.svg"}
            width={"140"}
            height={"80"}
            alt="logo"
            priority
          />
        </Link>
        <ButtonGroup>
          <Link href="/login">
            <Button colorScheme={"blue"} variant={"ghost"}>
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant={"solid"} colorScheme={"blue"}>
              Create Account
            </Button>
          </Link>
        </ButtonGroup>
      </BaseLayout>
    </Box>
  );
};

export default Navbar;
