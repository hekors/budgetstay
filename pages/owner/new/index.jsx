import { Box, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import BaseLayout from "../../../common/components/layouts/BaseLayout";

const NewProperty = () => {
    return (
        <BaseLayout>
            <Heading fontSize={"xl"}>{"Listing New Property"}</Heading>
            <Box mt={"12"} display={"grid"} alignItems={"start"} justifyContent={"start"} gap={"8"} w={"320px"}>
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
                            name="property-address"
                            w={"260px"}
                            variant="filled"
                            placeholder="Enter an address"
                            _focus={{ boxShadow: "outline" }}
                        />
                    </FormControl>
                </Box>
            </Box>
        </BaseLayout>
    )
};

export default NewProperty;