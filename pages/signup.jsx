import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
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
      <Container w={"auto"} mt={24}>
        <Heading textAlign="center" fontSize="5xl" my="4">
          Sign Up
        </Heading>
        <Box>
          <form onSubmit={handleSignUpSubmit}>
            <VStack>
              {/***** Name Input *****/}
              <FormControl
                isRequired={error.isError}
                isInvalid={error.isError && error.errorNameMessage.length !== 0}
              >
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input
                  type={"text"}
                  name="name"
                  id="name"
                  variant="filled"
                  value={data.lastName}
                  onChange={handleChangeName}
                  placeholder="Enter your full name"
                  _focus={{ boxShadow: "outline" }}
                />
                {error.isError ? (
                  <FormErrorMessage>{error.errorNameMessage}</FormErrorMessage>
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
                  variant="filled"
                  value={data.email}
                  onChange={handleChangeEmail}
                  placeholder="Enter your email address"
                  _focus={{ boxShadow: "outline" }}
                />
                {error.isError ? (
                  <FormErrorMessage>{error.errorEmailMessage}</FormErrorMessage>
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
                  type={"password"}
                  name="password"
                  id="password"
                  variant="filled"
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
                  <CircularProgress isIndeterminate size="24px" color="red" />
                ) : (
                  "Sign Up"
                )}
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Signup;
