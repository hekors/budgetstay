import React from "react";
import NextLink from "next/link";

import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import BaseLayout from "../common/components/layouts/BaseLayout";

const NotFound = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <Container m="auto" mt="20">
          <Heading as="h1">404 | Page Not Found</Heading>
          <Text my="4">
            You just hit a route that does not exist... the sadness.😢
          </Text>
          <Divider my="6" />
          <Box my="6">
            <NextLink href="/" passHref>
              <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.700)"
              >
                Return to home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </BaseLayout>
    </React.Fragment>
  );
};

export default NotFound;
