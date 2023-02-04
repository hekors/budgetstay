import { theme } from "../common/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { checkAuthenticated } from "../config/appwrite";
import Login from "./login";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const auth = checkAuthenticated() && router.route.startsWith("/dashboard");

  return (
    <ChakraProvider theme={theme}>
      {auth ? <Component {...pageProps} /> : <Login />}
    </ChakraProvider>
  );
}

export default MyApp;
