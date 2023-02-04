import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import BaseLayout from "../../../common/components/layouts/BaseLayout";

const NewProperty = () => {
    return (
        <BaseLayout>
            <Box mt={"8"} display={"grid"} alignItems={"start"} justifyContent={"start"} gap={"8"} w={"fit-content"}
                marginRight={"auto"} marginLeft={"auto"}
            >
                <Heading fontSize={"xl"}>{"Listing New Property"}</Heading>
                <FormControl>
                    <FormLabel>{"Property Name"}</FormLabel>
                    <Input
                        type={"text"}
                        name="property-name"
                        w={"320px"}
                        variant="filled"
                        placeholder="Enter your property name"
                        _focus={{ boxShadow: "outline" }}
                    />
                </FormControl>
                <Box display={"flex"} flexDirection={"row"} alignItems={"start"} justifyItems={"start"} gap={"6"}>
                    <FormControl>
                        <FormLabel>{"Property Address"}</FormLabel>
                        <Input
                            type={"text"}
                            name="property-address"
                            w={"320px"}
                            variant="filled"
                            placeholder="Enter an address"
                            _focus={{ boxShadow: "outline" }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>{"Pin Code"}</FormLabel>
                        <Input
                            type={"text"}
                            name="property-pincode"
                            w={"260px"}
                            variant="filled"
                            placeholder="Enter an address"
                            _focus={{ boxShadow: "outline" }}
                        />
                    </FormControl>
                </Box>
                
                <Box display={"flex"} flexDirection={"row"} alignItems={"start"} justifyItems={"start"} gap={"6"}>
                    <FormControl>
                        <FormLabel>{"List the facilities you're providing"}</FormLabel>
                        <Textarea 
                            maxWidth={"320px"}
                            minWidth={"320px"}
                            name="facilities-description"
                            variant="filled"
                            placeholder="List down the facilities you provide"
                            _focus={{ boxShadow: "outline" }}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>{"Owner Contact Number"}</FormLabel>
                        <Input 
                            maxWidth={"320px"}
                            name="facilities-description"
                            variant="filled"
                            placeholder="Eg. (+01) 99990-98889" 
                            _focus={{ boxShadow: "outline" }}
                        />
                    </FormControl>
                </Box>
                <Button type="submit" variant={"solid"} colorScheme="blue">{"Upload Property"}</Button>
            </Box>
        </BaseLayout>
    )
};


export default NewProperty;