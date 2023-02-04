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
  Container,
  VStack,
  FormErrorMessage,
  CircularProgress,
  Heading,
} from "@chakra-ui/react";
import { register } from "../config/appwrite";
import { helpers } from "../helpers";
import { Client, Account, ID } from "appwrite";
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
        <Grid
          display="grid"
          boxShadow={"base"}
          borderRadius={"base"}
          gridTemplateColumns="auto auto"
          justifyContent="sp"
        >
          <Box w={{ sm: "base", md: "md" }} m="12">
            <Heading textAlign="center" fontSize="5xl" color="white" my="4">
              Sign Up
            </Heading>
            <form onSubmit={handleSignUpSubmit}>
              <VStack>
                {/***** Name Input *****/}
                <FormControl
                  isRequired={error.isError}
                  isInvalid={
                    error.isError && error.errorNameMessage.length !== 0
                  }
                >
                  <FormLabel color="white" htmlFor="name">
                    Full Name
                  </FormLabel>
                  <Input
                    type={"text"}
                    name="name"
                    id="name"
                    borderRadius={"base"}
                    padding="6"
                    variant="filled"
                    outline="none"
                    background="#B8C1DC"
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
                  <FormLabel color="white" htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    type={"email"}
                    name="email"
                    padding="6"
                    id="email"
                    borderRadius={"base"}
                    variant="filled"
                    value={data.email}
                    background="#B8C1DC"
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
                  <FormLabel color="white">Password</FormLabel>
                  <Input
                    background="#B8C1DC"
                    type={"password"}
                    name="password"
                    padding="6"
                    id="password"
                    variant="filled"
                    borderRadius={"base"}
                    value={data.password}
                    marginBottom="6"
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
                  padding="6"
                  variant="solid"
                  size="md"
                  colorScheme="blue"
                  _focus={{ transform: "scale(1.02)", boxShadow: "outline" }}
                >
                  {loading ? (
                    <CircularProgress isIndeterminate size="24px" color="red" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </VStack>
            </form>
          </Box>
          <Box textAlign={'center'}>
            <Text
              zIndex="10"
              color="white"
              textAlign="center"
              position="absolute"
              fontSize="3xl"
              top={'32'}
              right="200"
              w="md"
              mx={'auto'}
            >
              Start your journey today with a comfortable Hostel stay
              <Text w='48' m='auto' fontSize='lg' mt='6'>Sign up and explore the world of Hostels.</Text>
            </Text>
            <Box>
              <Image
                src={"/assets/signup.svg"}
                h="75vh"
                mx={'auto'}
                mt="-10"
                zIndex="-6"
              />
            </Box>
          </Box>
        </Grid>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Signup;
