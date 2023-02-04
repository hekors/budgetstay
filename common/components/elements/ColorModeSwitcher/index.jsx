// Basic Imports
import React, { PropsWithChildren } from "react";

// Chakra UI Imports
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

// Icon Imports
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Box>
        <IconButton
          aria-label={`Switch to ${colorMode} mode`}
          variant="ghost"
          color={useColorModeValue("gray", "current")}
          marginLeft="2"
          onClick={toggleColorMode}
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
        />
      </Box>
    </React.Fragment>
  );
};

export default ColorModeSwitcher;
