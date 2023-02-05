import React, { useState } from "react";
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
import { Box, Button, Heading, Image, Tag, Text, VStack, WrapItem } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import ReactModal from "react-modal";
import { CloseIcon } from "@chakra-ui/icons";

const client = algoliasearch("DZW1D4VA0D", "3209f0f431a6c4f8ba29e66ba0d446b8");

const AlgoliaSearchWrapper = () => {
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
  const [moreDetails, setMoreDetails] = useState(false);
  return (
    <Box className="property-card-result" 
      display={"flex"} 
      flexDirection={"row"} 
      alignItems={"stretch"} 
      justifyContent={"start"} 
      gap={"3rem"}
      rounded={"lg"} 
      shadow={"md"}
    >
      <Image 
        src={"/assets/room.svg"}
        width={"280px"}
      />
      <Box p={"6"} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"space-around"}>
        <Box>
          <Box>
            <Text fontSize="2xl" mb={"1rem"}>
              <Highlight attribute="propertyName" hit={props.hit} />
            </Text>
            <Text fontSize="md">
              <Highlight attribute="about" hit={props.hit} />
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"2"} mt={"4"}
            textColor={"blue.500"}
          >
            <FaLocationArrow />
            <Text fontWeight={"medium"}>
              <Highlight attribute="address" hit={props.hit} />
            </Text>
          </Box>
          <Box mt={"4"}>
            <Heading fontSize={"md"}>{"Facilities"}</Heading>
            <Text fontSize={"md"}>
              <Highlight attribute="facilities" hit={props.hit} />
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"6"}>
          <Button variant={"solid"} colorScheme={"blue"} size={"lg"}>
            {"Book here"}
          </Button>
          <Button size={"lg"} variant={"ghost"} colorScheme={"blue"}
            onClick={() => setMoreDetails(true)}
          >
            {"More Details"}
          </Button>
        </Box>
      </Box>
      <ReactModal isOpen={moreDetails}
        onRequestClose={() => setMoreDetails(false)}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.200)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          },
          content: {
            marginRight: "auto",
            marginLeft: "auto",
            width: "fit-content",
            minWidth: "420px",
            maxWidth: "800px",
            height: "fit-content",
            minHeight: "300px",
            maxHeight: "660px",
            paddingRight: "0px",
            paddingLeft: "0px",
            borderRadius: "24px"
          }
        }}
      >
        <Box px={"6"} pb={"4"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading fontSize={"xl"}>{"Listing New Property"}</Heading>
            <Button variant={"ghost"} colorScheme={"blue"} onClick={() => setMoreDetails(false)}>
                <CloseIcon />
            </Button>
        </Box>
        <Box className="property-card-result" 
          display={"flex"} 
          flexDirection={"row"} 
          alignItems={"stretch"} 
          justifyContent={"start"} 
          gap={"3rem"}
        >
          <Image 
            src={"/assets/room.svg"}
            width={"280px"}
          />
          <Box p={"6"} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"space-around"}>
            <Box>
              <Box>
                <Text fontSize="2xl" mb={"1rem"}>
                  <Highlight attribute="propertyName" hit={props.hit} />
                </Text>
                <Text fontSize="md">
                  <Highlight attribute="about" hit={props.hit} />
                </Text>
              </Box>
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"2"} mt={"4"}
                textColor={"blue.500"}
              >
                <FaLocationArrow />
                <Text fontWeight={"medium"}>
                  <Highlight attribute="address" hit={props.hit} />
                </Text>
              </Box>
              <Box mt={"4"}>
                <Heading fontSize={"md"}>{"Facilities"}</Heading>
                <Text fontSize={"md"}>
                  <Highlight attribute="facilities" hit={props.hit} />
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ReactModal>
    </Box>
  );
};

export default AlgoliaSearchWrapper;
