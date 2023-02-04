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
// import AlgoliasearchWrapper from "../common/components/elements/AlgoliaSearch";
// import "instantsearch.css/themes/satellite-min.css";

const Custom500 = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <Container m="auto" mt="20">
          <Heading as="h1">Internal server error</Heading>
          <Text mt="2">Oops, looks like we broke something...</Text>
          <Text>An unexpected error occured</Text>
          <Heading fontSize="4xl" my="4">
            ❌ 500
          </Heading>
          <Divider my="6" />
          <Box my="6">
            <NextLink href="/" passHref>
              <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                bgGradient="linear(to-r, blue.400, blue.700)"
              >
                This way back to safety, please ❤️
              </Button>
            </NextLink>
          </Box>
        </Container>
        {/* <AlgoliasearchWrapper /> */}
      </BaseLayout>
    </React.Fragment>
  );
};

export default Custom500;
