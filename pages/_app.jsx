import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../common/components/elements/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
