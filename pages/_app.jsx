import { theme } from "../common/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Login from "./login";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      {<Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
