import React, { useState } from "react";
import { useRouter } from "next/router";
import { login, googleAuth, githubAuth } from "../config/appwrite";
import { helpers } from "../helpers/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseLayout from "../common/components/layouts/BaseLayout";
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

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
  Text,
  Grid,
  Image,
  Ba,
} from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();

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
        login(email, password);
        router.push("/app/dashboard");
      } catch (err) {
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
      }
    }
  };

  return (
    <React.Fragment>
      <BaseLayout background="#020817" h="100vh">
        <Grid gridTemplateColumns="auto auto">
          <Box
            w={{ sm: "base", md: "md" }}
            m="10"
            p='10'
            boxShadow={'2xl'}
            bgColor={"gray.100"}
            borderRadius={"md"}
          
          >
            <Heading textAlign="center" fontSize="4xl" my="4">
              Login
            </Heading>
            <Box>
              <form onSubmit={handleLoginSubmit}>
                {/***** Email Input *****/}
                <VStack gap={2}>
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
                      placeholder="Email"
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
                      placeholder="Password"
                    />
                    {error.isError ? (
                      <FormErrorMessage>
                        {error.errorPasswordMessage}
                      </FormErrorMessage>
                    ) : (
                      <></>
                    )}
                  </FormControl>

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
                    Log In
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
               gap='3'
              >
                <FcGoogle />
                Login with Google
              </Button>
              <Button
                variant="outline"
                my="2"
                mx="auto"
                w="full"
                onClick={githubAuth}
                gap='3'
              >
                <FaGithub />
                Login with GitHub
              </Button>
            </Box>
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
