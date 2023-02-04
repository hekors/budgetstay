import React, { useState } from "react";
import { useRouter } from "next/router";
import { login, googleAuth, githubAuth } from "../config/appwrite";
import { helpers } from "../helpers/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseLayout from "../common/components/layouts/BaseLayout";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  FormErrorMessage,
  Heading,
  CircularProgress,
  Text,
  Grid,
  Image,
  Ba,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    isError: false,
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!data.email && !data.password) {
      setError({
        isError: true,
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    const { email, password } = data;

    if (helpers.validEmail(email) && data.email && password) {
      try {
        setLoading(true);
        login(email, password);
        router.push("/dashboard");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        switch (err.code) {
          case "auth/Invalid-email":
            setError({
              ...error,
              isError: true,
              errorEmailMessage: "Please enter correct email address",
            });
            helpers.alertToastHandling(
              "Invalid email! Please enter your correct email"
            );
            break;

          case "auth/user-disabled":
            setError({
              ...error,
              isError: true,
            });
            helpers.alertToastHandling(
              "Unexpected error! Please try again later"
            );
            break;

          case "auth/user-not-found":
            setError({
              ...error,
              isError: true,
            });
            helpers.alertToastHandling(
              "User not found! Make sure you have signed up"
            );
            break;

          case "auth/wrong-password":
            setError({
              ...error,
              isError: true,
              errorPasswordMessage: "Please enter correct password",
            });
            helpers.alertToastHandling(
              "Wrong Password! Please enter correct password"
            );
            break;
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      <BaseLayout background="#020817" h="100vh">
        <Grid gridTemplateColumns="auto auto">
          <Box
            w={{ sm: "base", md: "md" }}
            p="10"
            m="10"
            boxShadow={"2xl"}
            bgColor={"gray.100"}
            borderRadius={"md"}
          >
            <Heading textAlign="center" fontSize="4xl" my="4">
              Login
            </Heading>
            <Box>
              <form onSubmit={handleLoginSubmit}>
                {/***** Email Input *****/}
                <VStack gap={2} align="left">
                  <FormControl
                    isRequired={error.isError}
                    isInvalid={
                      error.isError && error.errorEmailMessage.length !== 0
                    }
                  >
                    <FormLabel htmlFor="Email">Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      bgColor={"gray.200"}
                      value={data.email}
                      _focus={{ boxShadow: "outline" }}
                      onChange={handleChangeEmail}
                      placeholder="johndoe@gmail.com"
                    />
                    {error.isError ? (
                      <FormErrorMessage>
                        {error.errorEmailMessage}
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </FormControl>

                  {/***** Password Input *****/}
                  <FormControl
                    isRequired={error.isError}
                    isInvalid={
                      error.isError && error.errorPasswordMessage.length !== 0
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      bgColor={"gray.200"}
                      name="password"
                      id="password"
                      value={data.password}
                      onChange={handleChangePassword}
                      _focus={{ boxShadow: "outline" }}
                      placeholder="**********"
                    />
                    {error.isError ? (
                      <FormErrorMessage>
                        {error.errorPasswordMessage}
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </FormControl>

                  <Link
                    href="/reset-password"
                    fontSize="sm"
                    alt="Sign up"
                    color="blue"
                  >
                    Forgot Password?
                  </Link>

                  {/* Login Button */}
                  <Button
                    w="full"
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    _focus={{
                      transform: "scale(1.02)",
                      boxShadow: "outline",
                    }}
                  >
                    {loading ? (
                      <CircularProgress
                        isIndeterminate
                        size="24px"
                        color="gray.400"
                      />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </VStack>
              </form>
              <Text my="4" fontWeight="bold" textAlign="center">
                OR
              </Text>
              <Button
                variant="outline"
                my="2"
                mx="auto"
                w="full"
                onClick={googleAuth}
                gap="3"
              >
                <FcGoogle />
                Login with Google
              </Button>
            </Box>
            <Text my="4" textAlign="center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" alt="Sign up" color="blue">
                Sign up
              </Link>
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Text
              zIndex="10"
              color="white"
              textAlign="center"
              position="absolute"
              fontSize="3xl"
              top={"32"}
              right="200"
              w="md"
              mx={"auto"}
            >
              Start your journey today with a comfortable Hostel stay
              <Text w="48" m="auto" fontSize="lg" mt="6">
                Sign up and explore the world of Hostels.
              </Text>
            </Text>
            <Box>
              <Image
                src={"/assets/signup.svg"}
                h="75vh"
                mx={"auto"}
                mt="-10"
                alt="Background Image"
                zIndex="-6"
              />
            </Box>
          </Box>
        </Grid>
      </BaseLayout>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
};

export default Login;
