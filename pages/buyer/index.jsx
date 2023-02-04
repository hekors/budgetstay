import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import BaseLayout from "../../common/components/layouts/BaseLayout";

const Buyer = () => {
    return (
        <Box>
            <Box bgColor={"black"} pb={"24"}>
                <BaseLayout>
                    <Heading textColor={"white"}>{"Welcome, Buyer"}</Heading>
                    <Text textColor={"whiteAlpha.800"} fontWeight={"medium"} fontSize={"lg"} mt={"2"}>
                        {"Start searching for your ideal space, your oasis."}
                    </Text>
                    <Box mt={"6"} display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"start"} gap={"4"}>
                        {/* temp */}
                    </Box>
                </BaseLayout>
            </Box>
            <Box className="owner-dashbaord-section">
                <BaseLayout>
                    <Heading fontSize={"2xl"}>{"Onwer Dashboard"}</Heading>
                </BaseLayout>
            </Box>
        </Box>
    )
};

export default Buyer;