import React from "react";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Panel,
  RefinementList,
  Pagination,
  Highlight,
} from "react-instantsearch-dom";
import BaseLayout from "../../layouts/BaseLayout";
import { Box, Text, VStack } from "@chakra-ui/react";

const client = algoliasearch("DZW1D4VA0D", "3209f0f431a6c4f8ba29e66ba0d446b8");

const AlgoliasearchWrapper = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <InstantSearch searchClient={client} indexName="hostels">
          <Configure hitsPerPage={5} />
          <Box className="search-panel-results">
            <SearchBox className="searchbox" />
            <Hits hitComponent={HitsComponent} />
          </Box>
        </InstantSearch>
      </BaseLayout>
    </React.Fragment>
  );
};

const HitsComponent = (props) => {
  return (
    <VStack p="4" gap="2">
      <Text fontSize="2xl">
        <Highlight attribute="city" hit={props.hit} />
      </Text>
      <Text fontSize="md">
        <Highlight attribute="about" hit={props.hit} />
      </Text>
    </VStack>
  );
};

export default AlgoliasearchWrapper;
