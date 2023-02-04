import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "../../layouts/BaseLayout";
import ColorModeSwitcher from "../ColorModeSwitcher";

import { FaInbox } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Box bgColor={useColorModeValue("black", "gray.800")}>
      <BaseLayout
        pt="0"
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
        <HStack>
          {/* <ColorModeSwitcher /> */}
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
        </HStack>
      </BaseLayout>
    </Box>
  );
};

const DashboardNavbar = () => {
  return (
    <Box bgColor={useColorModeValue("black", "gray.800")}>
      <BaseLayout
        pt="0"
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
        <HStack>
          {/* <ColorModeSwitcher /> */}
          <ButtonGroup>
            <Button variant={"solid"} colorScheme={"black"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}
              gap={"2"}
            >
              <FaInbox />
              <span>{"Message Inbox"}</span>
            </Button>
            <Link href="/student/profile">
              <Button>
                {"See Profile"}
              </Button>
            </Link>
          </ButtonGroup>
        </HStack>
      </BaseLayout>
    </Box>
  )
};

export { 
  Navbar,
  DashboardNavbar
};
