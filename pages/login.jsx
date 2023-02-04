import React, { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../config/appwrite";
import { helpers } from "../helpers/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Client, Account, ID } from "appwrite";

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
    console.log(data.email, data.password);

    if (!data.email && !data.password) {
      setError({
        isError: true,
        errorEmailMessage: "Email is required",
        errorPasswordMessage: "Password is required",
      });
    }

    const { email, password } = data;

    const client = new Client()
      .setEndpoint("http://localhost/v1") // Your API Endpoint
      .setProject("63dd96440ed1837d151c"); // Your project ID

    const account = new Account(client);

    const promise = account.create(ID.unique(), "yashsehgal.work@gmail.com", "password");

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );

    if (helpers.validEmail(email) && data.email && password) {
      try {
        api.createAccount(email, password);
        router.push("/");
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
      <Container w={"auto"} mt={24}>
        <Heading textAlign="center" fontSize="5xl" my="4">
          Login
        </Heading>
        <Box>
          <form onSubmit={handleLoginSubmit}>
            {/***** Email Input *****/}
            <VStack>
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
                  variant="filled"
                  value={data.email}
                  _focus={{ boxShadow: "outline" }}
                  onChange={handleChangeEmail}
                  placeholder="Email"
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
                  type="password"
                  name="password"
                  id="password"
                  variant="filled"
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
        </Box>
      </Container>
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
