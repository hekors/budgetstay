import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  FormErrorMessage,
  CircularProgress,
  Heading,
  Link,
} from "@chakra-ui/react";
import { register } from "../config/appwrite";
import { helpers } from "../helpers";
import BaseLayout from "../common/components/layouts/BaseLayout";

const Signup = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    isError: false,
    errorNameMessage: "",
    errorEmailMessage: "",
    errorPasswordMessage: "",
  });

  const handleChangeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password } = data;

    if (!email || !password) {
      setError({
        isError: true,
        errorNameMessage: "Name is required",
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    if (helpers.validEmail(email) && email && password) {
      try {
        register(email, password);
        router.push("/login");
        helpers.alertToastHandling("You are successfully registered");
      } catch (err) {
        setError({
          isError: true,
          errorNameMessage: "Please enter the last name",
          errorEmailMessage: "Please enter correct email address",
          errorPasswordMessage: "Please enter correct password",
        });
        helpers.alertToastHandling("error?.response?.data?.message");
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <BaseLayout background="#020817" h="100vh">
        <Grid gridTemplateColumns="auto auto" alignItems={"center"}>
          <Box
            w={{ sm: "base", md: "md" }}
            m="10"
            p="10"
            boxShadow={"2xl"}
            bgColor={"white"}
            borderRadius={"md"}
          >
            <Heading textAlign="center" fontSize="4xl" my="4">
              Sign Up
            </Heading>
            <form onSubmit={handleSignUpSubmit}>
              <VStack gap={2}>
                {/***** Name Input *****/}
                <FormControl
                  isRequired={error.isError}
                  isInvalid={
                    error.isError && error.errorNameMessage.length !== 0
                  }
                >
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Input
                    type={"text"}
                    name="name"
                    id="name"
                    borderRadius={"base"}
                    bgColor={"gray.200"}
                    value={data.lastName}
                    onChange={handleChangeName}
                    placeholder="Enter your full name"
                    _focus={{ boxShadow: "outline" }}
                  />
                  {error.isError ? (
                    <FormErrorMessage>
                      {error.errorNameMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/***** Email Input *****/}
                <FormControl
                  isRequired={error.isError}
                  isInvalid={
                    error.isError && error.errorEmailMessage.length !== 0
                  }
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type={"email"}
                    name="email"
                    id="email"
                    borderRadius={"base"}
                    value={data.email}
                    bgColor={"gray.200"}
                    onChange={handleChangeEmail}
                    placeholder="Enter your email address"
                    _focus={{ boxShadow: "outline" }}
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
                    bgColor={"gray.200"}
                    type={"password"}
                    name="password"
                    id="password"
                    borderRadius={"base"}
                    value={data.password}
                    onChange={handleChangePassword}
                    placeholder="Enter your password"
                    _focus={{ boxShadow: "outline" }}
                  />
                  {error.isError ? (
                    <FormErrorMessage>
                      {error.errorPasswordMessage}
                    </FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>

                {/* Sign up Button */}
                <Button
                  w="full"
                  type="submit"
                  variant="solid"
                  size="md"
                  colorScheme="blue"
                  _focus={{ transform: "scale(1.02)", boxShadow: "outline" }}
                >
                  {loading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="gray.400"
                    />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </VStack>
              <Text my="4" textAlign="center">
                Already having an account?{" "}
                <Link  href="/login" alt="Sign up" color="blue">
                  Login
                </Link>
              </Text>
            </form>
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
                zIndex="-6"
                alt="Background Image"
              />
            </Box>
          </Box>
        </Grid>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Signup;
